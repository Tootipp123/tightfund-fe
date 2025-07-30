"use client";

import { useFinancialReport } from "@/store/useFinancialReport";
import { useGlobalStore } from "@/store/useGlobalStore";
import { useOnboardingStore } from "@/store/useOnboardingStore";
import { formatNumber } from "@/utils/formatNumber";
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

  console.log("financialReport: ", financialReport);

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
        setLoading(true);
        const filteredQnA = onboardingSteps.map((step: any) => {
          return {
            question: step.question,
            answer: step.value,
          };
        });
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

                Main card*
                emergencyFundGoal: the calculated total emerguncy fund goal recommended for the user based on his/her unique situation including his job details, job situation. etc etc. (always align it slightly higher with recommended buffer)

                buffer: (for ex. Your recommended emergency fund for x(avoid using whole numbers such as 3, 6, 9 and use number like 7.3 months, etc etc.) months based on your current situation). value should be number and not text. ex value: 8.4

                confidenceScore: rate the generated emergencyFundAmount based on all the variables and factors you have been given. value should be number to be used as percentage.

                Savings timeline card* generate this three times (amount to save up to goal in 3 months, 6 months, and 12 months)
                monthlyTargetAmount: monthly amount to save up to goal amount in 12 months
                weeklyTargetAmount: weekly amount to save up to goal amount in 12 months
                dailyTargetAmount: daily amount to save up to goal amount in 12 months
                totalMonthlyExpenses: (for ex. breakdown of their essential expenses they inputed. show total and break this down into object types each)
                `,
              },
            ],
            temperature: 0.7,
            model: model,
          },
        });
        const result = response.body?.choices?.[0]?.message?.content;
        console.log("result: ", result);
        const parsedData = extractAndFixJSONBlock(result);
        console.log("Parsed data:", parsedData);

        if (parsedData) {
          setFinancialReport(parsedData);
        } else {
          console.error("Failed to parse and fix JSON block");
        }
      } catch (error: any) {
        console.error(
          "Error calling OpenAI:",
          error.response?.data || error.message
        );
      } finally {
        setLoading(false);
      }
    };

    // func();
  }, []);

  return (
    <>
      {financialReport && !loading ? (
        <div className="flex-grow container mx-auto max-w-4xl py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
          {/* <!-- OK Hand Emoji --> */}
          <div className="mb-6">
            <span
              className="text-6xl sm:text-7xl"
              role="img"
              aria-label="OK hand sign"
            >
              👌
            </span>
          </div>

          {/* <!-- Recommendation Text --> */}
          <p className="text-lg sm:text-xl text-gray-700 mb-2">
            We advise you to have
          </p>

          {/* <!-- Emergency Fund Amount --> */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-custom-green leading-tight mb-2">
            {currency.symbol}
            {formatNumber(financialReport?.emergencyFundGoal)}
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 mb-3">
            for {financialReport?.buffer} months of emergency fund
          </p>

          {/* <!-- Confidence Score --> */}
          <div className="mb-12 flex space-x-2">
            <p className="text-xl sm:text-xl font-bold text-custom-opacity-green">
              Confidence score:
            </p>
            <p className="text-xl sm:text-xl font-bold text-custom-dark-green">
              {financialReport?.confidenceScore}%
            </p>
          </div>

          {/* <!-- Question Section --> */}
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-8">
            Have you got this EF already?
          </h2>

          {/* <!-- Option Cards Grid --> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl mb-16 justify-items-center">
            {/* <!-- Card 1: I have this --> */}
            <div className="bg-light-secondary py-8 px-2 rounded-xl shadow-sm flex flex-col items-center text-center w-full max-w-[240px] min-h-[280px]">
              <h3 className="text-xl font-semibold text-custom-dark-green mb-10">
                ✨I have this
              </h3>
              <p className="text-lg text-custom-green mb-16">
                See how prepared you really are
              </p>
              <button className="py-2 px-6 border-2 border-custom-dark-green text-custom-dark-green font-medium rounded-lg hover:bg-custom-dark-green-hover hover:text-beige transition duration-200 shadow-sm">
                Check status
              </button>
            </div>

            {/* <!-- Card 2: Still building --> */}
            <div className="bg-light-secondary py-8 px-2 rounded-xl shadow-sm flex flex-col items-center text-center w-full max-w-[240px] min-h-[280px]">
              <h3 className="text-lg font-semibold text-custom-dark-green mb-10">
                📈Still building
              </h3>
              <p className="text-lg text-custom-green mb-16">
                Get timeline & saving options
              </p>
              <button className="py-2 px-6 border-2 border-custom-dark-green text-custom-dark-green font-medium rounded-lg hover:bg-custom-dark-green-hover hover:text-beige transition duration-200 shadow-sm">
                See options
              </button>
            </div>
          </div>

          {/* <!-- Full Target Fund Breakdown Section --> */}
          <div className="mb-8 flex flex-col items-center">
            <p className="text-lg sm:text-xl text-custom-dark-green mb-6">
              Get your full target fund's breakdown & explanation
            </p>
            <button
              className="w-full sm:w-auto flex items-center justify-center bg-custom-dark-green text-beige py-3 px-56 rounded-xl font-lg text-lg hover:bg-custom-dark-green-hover transition duration-200 shadow-md"
              onClick={() => {
                router.push("/signin");
              }}
            >
              Login
            </button>
          </div>
        </div>
      ) : (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8">
          <div className="text-center">
            {/* <!-- Main Loading Text --> */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-custom-green mb-6">
              Analyzing your situation
            </h1>

            {/* <!-- Simple Dot Animation --> */}
            <div className="flex justify-center space-x-3">
              <div className="w-4 h-4 bg-custom-dark-green rounded-full dot-animation"></div>
              <div className="w-4 h-4 bg-custom-dark-green rounded-full dot-animation"></div>
              <div className="w-4 h-4 bg-custom-dark-green rounded-full dot-animation"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
