"use client";

import { useFinancialReport } from "@/store/useFinancialReport";
import { useGlobalStore } from "@/store/useGlobalStore";
import { useOnboardingStore } from "@/store/useOnboardingStore";
import ModelClient from "@azure-rest/ai-inference";
import { AzureKeyCredential } from "@azure/core-auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const token: any = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
const endpoint = "https://models.github.ai/inference";
const model = "openai/gpt-4.1";

export default function DataAnalysis() {
  const router = useRouter();
  const { selectedInitialStep, onboardingSteps } = useOnboardingStore();
  const [loading, setLoading] = useState(false);
  const { currency } = useGlobalStore();
  const { financialReport, setFinancialReport } = useFinancialReport();
  const [error, setError] = useState(false);

  const client = ModelClient(endpoint, new AzureKeyCredential(token));

  function extractAndFixJSONBlock(inputString: string): any {
    // Your existing logic to extract JSON, or if you assume it's just the full string:
    const jsonPart = inputString; // Or your extraction logic here

    console.log("String being parsed by JSON.parse():", jsonPart); // <-- ADD THIS LOG
    console.log("Length of string being parsed:", jsonPart.length); // <-- ADD THIS LOG
    // Optional: Log character at the reported error position
    // console.log("Char at pos 507:", jsonPart.charCodeAt(506), jsonPart.charAt(506));

    try {
      return JSON.parse(jsonPart);
    } catch (error: any) {
      console.error("Still failed to parse JSON after fixing:", error);
      throw error; // Re-throw to see the full stack
    }
  }

  useEffect(() => {
    console.log("onboardingSteps: ", onboardingSteps);
    const filteredQnA = onboardingSteps.map((step: any) => {
      return {
        question: step.question,
        answer: step.value,
      };
    });
    filteredQnA.push({
      question: "What’s your current employment status?",
      answer: selectedInitialStep,
    });

    const rawMonthlyExpenses = filteredQnA.reduce((total: number, qna: any) => {
      if (
        qna.question === "How much is your monthly expenses?" &&
        Array.isArray(qna.answer)
      ) {
        return (
          total +
          qna.answer.reduce((sum: number, item: any) => {
            return sum + Number(item.value || 0);
          }, 0)
        );
      }
      return total;
    }, 0);

    // Then, adjust the total based on family financial help
    const totalMonthlyExpenses = filteredQnA.reduce(
      (adjusted: number, qna: any) => {
        if (qna.question === "Can your family help you financially?") {
          if (qna.answer === "family_can_fully_support_me") {
            return rawMonthlyExpenses * 0.5;
          } else if (qna.answer === "family_can_help_a_little") {
            return rawMonthlyExpenses * 0.8;
          }
        }
        return adjusted; // no change if condition doesn't match
      },
      rawMonthlyExpenses
    );

    const func = async () => {
      try {
        setLoading(true);
        const response: any = await client.path("/chat/completions").post({
          body: {
            messages: [
              {
                role: "system",
                content:
                  "You are a market research analyst and a financial advisor and an economic alayst. You analyze structured filtered data and return answers in JSON.",
              },
              {
                role: "user",
                content: `based on the result/values of this qna ${JSON.stringify(
                  filteredQnA
                )}, create a comprehensive financial emergency fund plan (factor in every data you can that was input by the user) returning content in a JSON object format. Also note to Respond ONLY with valid JSON. Do not explain. Do not include code block formatting (no triple backticks) and no markdown formatting, and ensure commas between all object entries:

                ---

                ##NOTE
                1. Use this as totalMonthlyExpenses value: ${totalMonthlyExpenses}

                ## LOGIC

                ### 1. BUFFER DURATION:
                - For part-time/freelancers:
                  - Map income consistency:
                    - "Very consistent" → treat as full-time.
                    - "Somewhat consistent" → average freelancer.
                    - "Moderately consistent" → below-average freelancer.
                    - "Highly inconsistent" → unstable/inferior freelancer.
                  - Use "What's the longest you've gone without income?" to adjust buffer duration:
                    - If long income gaps match poor consistency → increase buffer by 1–2 months.
                    - If they contrast (e.g. high consistency, long income gaps), reduce confidenceScore.
                  - If user has **safety nets**, reduce buffer by 1-2 month, but only if justified.
                - For unemployed:
                  - If they have income/support (family, aid), reduce buffer slightly but no less than 3 months.

                ### 2. DEPENDENTS:
                - If user has **dependents with health/urgent needs**, add 1–2 months buffer depending on severity.

                ### 3. MARKET TRENDS:
                - Research job/gig/stream and adjust buffer duration accordingly.
                  - If high-risk/seasonal → +1 to 2 months.
                  - If stable industry → no change or slight decrease.
                  (Describe reason briefly in confidenceScore notes)

                ---

                ## OUTPUT FORMAT (JSON):
                {
                  "emergencyFundGoal": number, // total savings goal in local currency
                  "buffer": {
                    "months": number, // number of months, minimum value is 3 months, e.g. 6
                    "weeks": number, // number of weeks minimum value is 2 weeks, e.g. 2
                    "label": "", // number of months with added weeks buffer. no decimal values, e.g. 6 months and 2 weeks
                  },
                  "confidenceScore": number,   // as percentage (0–100)
                  "confidenceNotes": "Brief explanation of score (1-2 sentences)",
                  "breakdown": {
                    "bufferExplanation": "", // how did you come up with the buffer
                    "emergencyFundGoal": "", // what's the formula used? and how did you come up with the emergencyFundGoal
                  },
                  "savingsTimeline": {
                    "3_months": {
                      "monthly": number,
                      "weekly": number,
                      "daily": number
                    },
                    "6_months": { ... },
                    "12_months": { ... }
                  },
                  "totalMonthlyExpenses": {
                    "total": number,
                    "foodAndGroceries": number,
                    "rentOrMortgage": number,
                    "utilities": number,
                    "debt": number,
                    "...": number // include all other user-provided expenses
                  }
                }

                NOTES:        
                Do not return any text outside the JSON structure.

                emergencyFundGoal: The final total should be slightly higher than totalMonthlyExpenses × buffer (by 5–10%) to account for uncertainty. Do not make it equal.
                `,
              },
            ],
            temperature: 0.7,
            model: model,
          },
        });
        const result = response.body?.choices?.[0]?.message?.content;
        const parsedData = extractAndFixJSONBlock(result);

        if (parsedData) {
          setFinancialReport(parsedData);
          router.push("/result");
          return;
        } else {
          console.error("Failed to parse and fix JSON block");
        }
      } catch (error: any) {
        console.error(
          "Error calling OpenAI:",
          error.response?.data || error.message
        );
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    func();
  }, []);

  return (
    <>
      {loading && !error && (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8">
          <div className="text-center">
            {/* <!-- Main Loading Text --> */}
            <h1 className="text-lg md:text-xl font-bold text-dark-main mb-6">
              Analyzing your situation
            </h1>

            {/* <!-- Simple Dot Animation --> */}
            <div className="flex justify-center space-x-1">
              <div className="w-2 h-2 bg-custom-dark-green rounded-full dot-animation"></div>
              <div className="w-2 h-2 bg-custom-dark-green rounded-full dot-animation"></div>
              <div className="w-2 h-2 bg-custom-dark-green rounded-full dot-animation"></div>
            </div>
          </div>
        </div>
      )}
      {error && (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8">
          <div className="text-center">
            <h1 className="text-lg md:text-xl font-bold text-dark-main mb-6">
              Too many requests right now. Please try again later.
            </h1>
          </div>
        </div>
      )}
    </>
  );
}
