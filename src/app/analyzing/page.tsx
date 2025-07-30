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
  const { onboardingSteps } = useOnboardingStore();
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
    // 1. Construct a sentence to pass
    // 2.

    const func = async () => {
      try {
        const filteredQnA = onboardingSteps.map((step: any) => {
          return {
            question: step.question,
            answer: step.value,
          };
        });
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
                )}, create a comprehensive financial emergency fund plan (factor in every data you can that was input by the user) returning content in a JSON object format (take note that the currency of the user is in ${
                  currency.currency
                }, and the symbol is ${currency.symbol} for the country ${
                  currency.country
                }). Also note to Respond ONLY with valid JSON. Do not explain. Do not include code block formatting (no triple backticks) and no markdown formatting, and ensure commas between all object entries:

                emergencyFundGoal: the calculated total emerguncy fund goal recommended for the user based on his/her unique situation including his job details, job situation. etc etc. (always align it slightly higher with recommended buffer)
                buffer: (for ex. Your recommended emergency fund for x(avoid using whole numbers such as 3, 6, 9 and use number like 7.3 months, etc etc.) months based on your current situation). value should be number and not text. ex value: 8.4
                confidenceScore: rate the generated emergencyFundAmount based on all the variables and factors you have been given. value should be number to be used as percentage.
                savingsTimeline: generate this three times (amount to save up to goal in 3 months, 6 months, and 12 months), the format sample is savingsTimeline: {3_months: {}, 6_months: {}, 12_months: {}}
                savingsTimeline explanation - monthly: monthly amount to save up to goal amount in 12 months, weekly: weekly amount to save up to goal amount in 12 months, daily: daily amount to save up to goal amount in 12 months.
                totalMonthlyExpenses: (for ex. breakdown of their essential expenses they inputed. show total and break this down into object types each), format is camelcase, for example: foodAndGroceries, rentOrMortgage, debt, utilities
                `,
              },
            ],
            temperature: 0.7,
            model: model,
          },
        });
        const result = response.body?.choices?.[0]?.message?.content;
        const parsedData = extractAndFixJSONBlock(result);
        console.log("Parsed data:", parsedData);

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
