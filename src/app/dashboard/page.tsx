"use client";

import { createFinancialDetails } from "@/api/FinancialDetails";
import UserDefaultImage from "@/assets/user-default.jpg";
import LogoSvg from "@/components/icons/LogoSvg";
import Button from "@/components/ui/Button";
import { useFinancialReport } from "@/store/useFinancialReport";
import { useGlobalStore } from "@/store/useGlobalStore";
import { formatNumber } from "@/utils/formatNumber";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MdInfoOutline } from "react-icons/md";
import { RiArrowDropDownFill } from "react-icons/ri";
import { useMutation } from "react-query";

export default function UserDashboard() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { financialReport } = useFinancialReport();
  const { currency } = useGlobalStore();
  const { data: session, status }: any = useSession();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showBufferTooltip, setShowBufferTooltip] = useState(false);
  const [showFundTooltip, setShowFundTooltip] = useState(false);

  useEffect(() => {
    if (session?.status === "unauthenticated") {
      router.push("/");
    }
  }, [session?.status]);

  const createFinancialDetailsMutation = useMutation(createFinancialDetails);

  console.log("financialReport: ", financialReport);

  const food =
    financialReport?.totalMonthlyExpenses?.breakdown?.foodAndGroceries ||
    financialReport?.totalMonthlyExpenses?.breakdown?.Food_and_groceries ||
    financialReport?.totalMonthlyExpenses?.breakdown?.food_and_groceries ||
    financialReport?.totalMonthlyExpenses?.breakdown?.["Food and groceries"] *
      0.9;
  const utilities =
    financialReport?.totalMonthlyExpenses?.breakdown?.utilities ||
    financialReport?.totalMonthlyExpenses?.breakdown?.Utilities * 0.9;

  const rent =
    financialReport?.totalMonthlyExpenses?.breakdown?.rentOrMortgage ||
    financialReport?.totalMonthlyExpenses?.breakdown?.rent_or_mortgage;
  financialReport?.totalMonthlyExpenses?.breakdown?.["Rent or mortgage"] ||
    financialReport?.totalMonthlyExpenses?.breakdown?.Rent_or_mortgage;

  const essentialNeeds = food + utilities + rent;

  console.log("essentialNeeds: ", essentialNeeds);

  const basicNeeds = essentialNeeds * financialReport?.mainCard?.buffer;

  useEffect(() => {
    if (searchParams.get("from") === "result" && session?.accessToken) {
      createFinancialDetailsMutation.mutateAsync({
        data: financialReport,
        accessToken: session?.accessToken,
      });
    }
  }, [searchParams, session?.accessToken]);

  const threeMonthsSavings = financialReport?.savingsTimeline?.["3_months"];
  console.log("threeMonthsSavings.daily: ", threeMonthsSavings?.daily);
  const sixMonthsSavings = financialReport?.savingsTimeline?.["6_months"];
  const twelveMonthsSavings = financialReport?.savingsTimeline?.["12_months"];

  const [buildGoals, setBuildGoals] = useState([
    {
      month: "3",
      title: "3 months",
      perDay: "",
      perWeek: "",
      perMonth: "",
    },
    {
      month: "6",
      title: "6 months",
      perDay: "",
      perWeek: "",
      perMonth: "",
    },
    {
      month: "12",
      title: "12 months",
      perDay: "",
      perWeek: "",
      perMonth: "",
    },
  ]);

  useEffect(() => {
    if (financialReport?.savingsTimeline) {
      setBuildGoals((prev) =>
        prev.map((goal) => {
          const savings =
            financialReport.savingsTimeline[`${goal.month}_months`];
          return {
            ...goal,
            perDay: savings?.daily ?? goal.perDay,
            perWeek: savings?.weekly ?? goal.perWeek,
            perMonth: savings?.monthly ?? goal.perMonth,
          };
        })
      );
    }
  }, [financialReport]);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-light-main py-4 px-5 md:px-8">
        <div className="container mx-auto w-full max-w-6xl">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-10">
              <LogoSvg width={40} height={40} />
              <a
                href="#"
                className="text-dark-main text-sm font-semibold pb-1 border-b-2 border-dark-main"
              >
                Dashboard
              </a>
            </div>

            {/* <!-- User Image Placeholder (Blank) --> */}
            {session?.accessToken && (
              <div className="relative">
                <div
                  className="flex items-center cursor-pointer"
                  onClick={() => setShowUserMenu((prev) => !prev)}
                >
                  <div
                    className={`w-[45px] h-[45px] p-[3px] relative rounded-full flex items-center justify-center overflow-hidden`}
                  >
                    <Image
                      src={UserDefaultImage}
                      alt="Jeff Profile"
                      className="rounded-full bg-white"
                      width={50}
                      height={50}
                    />
                  </div>
                  <RiArrowDropDownFill className="text-lg text-white" />
                </div>
                {showUserMenu && (
                  <div
                    id="menu"
                    className="w-[180px] bg-white py-2 rounded-md absolute z-[100]"
                  >
                    <ul className="text-sm text-dark-main">
                      <li
                        onClick={() => router.push("/dashboard")}
                        className={`py-2 px-4 cursor-pointer hover:bg-neutral-100`}
                      >
                        Dashboard
                      </li>
                      <li
                        onClick={() =>
                          signOut({
                            callbackUrl: "/?from=signout",
                          })
                        }
                        className="py-2 px-4 cursor-pointer hover:bg-neutral-100"
                      >
                        Sign out
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* <!-- Main Content Area --> */}
      <div className="px-5 flex-grow container mx-auto max-w-6xl py-12 md:px-6">
        {/* <!-- Greeting --> */}
        <h2 className="text-3xl font-semibold text-dark-main mb-8">
          Hello, {session?.user?.name}
        </h2>

        {/* <!-- Most Recommended Emergency Fund Section --> */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row gap-3 justify-between md:items-center md:mb-4">
            <h1 className="text-sm md:text-xl font-semibold text-dark-main mt-3 md:mt-0">
              Most Recommended Emergency Fund
            </h1>
            <Button
              variant="secondary"
              size="small"
              className="order-first md:order-last h-[40px]"
              onClick={() => router.push("/onboarding?from=dashboard")}
            >
              Update your details
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row items-baseline sm:items-center mb-6">
            <span className="text-5xl sm:text-7xl font-bold text-dark-main mr-4 leading-tight">
              {currency?.symbol}
              {formatNumber(financialReport?.emergencyFundGoal)}
            </span>
            <span className="text-2xl sm:text-3xl font-medium text-dark-main whitespace-nowrap">
              for {financialReport?.buffer?.label}
            </span>
          </div>
          {/* <div className="py-5 rounded-lg">
            <p className="text-dark-main text-sm">
              <span className="font-semibold">Your Priority:</span>
            </p>
            <p className="text-dark-main text-sm">
              Get to {currency.symbol}
              {formatNumber(basicNeeds.toString())} first (covers basic needs
              for {financialReport?.buffer} months), then build to the full{" "}
              {currency.symbol}
              {formatNumber(financialReport?.emergencyFundGoal)}.
            </p>
          </div> */}
          <div className="details flex flex-col lg:flex-row items-stretch gap-[30px]">
            <div className="w-[300px] bg-light-secondary px-5 py-5 rounded-lg">
              <p className="text-dark-main text-sm font-semibold">
                Recommended Fund Amount:
              </p>
              <p className="text-dark-main text-2xl font-semibold">
                {currency.symbol}
                {formatNumber(financialReport?.emergencyFundGoal)}
              </p>
              <div
                className="flex items-center gap-2 mt-4"
                onClick={() => setShowFundTooltip((prev) => !prev)}
              >
                <MdInfoOutline className="text-dark-main" />
                <p className="text-dark-main text-sm cursor-pointer font-semibold underline">
                  How did we get this amount?
                </p>
              </div>
              {showFundTooltip && (
                <div
                  id="menu-2"
                  onClick={() => setShowFundTooltip(false)}
                  className="w-[400px] bg-white py-3 px-4 shadow-sm rounded-md absolute z-[100]"
                >
                  <p className="text-dark-main text-sm">
                    {financialReport?.breakdown?.emergencyFundGoal}
                  </p>
                </div>
              )}
            </div>
            <div className="w-[300px] bg-light-secondary px-5 py-5 rounded-lg">
              <p className="text-dark-main text-sm font-semibold">
                Recommended Buffer:
              </p>
              <p className="text-dark-main text-2xl font-semibold">
                {financialReport?.buffer?.label}
              </p>
              <div
                className="flex items-center gap-2 mt-4"
                onClick={() => setShowBufferTooltip((prev) => !prev)}
              >
                <MdInfoOutline className="text-dark-main" />
                <p className="text-dark-main text-sm cursor-pointer font-semibold underline">
                  How did we get this?
                </p>
              </div>
              {showBufferTooltip && (
                <div
                  id="menu"
                  onClick={() => setShowBufferTooltip(false)}
                  className="w-[400px] bg-white py-3 px-4 shadow-sm rounded-md absolute z-[100]"
                >
                  <p className="text-dark-main text-sm">
                    {financialReport?.breakdown?.bufferExplanation}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* <!-- Other Options Section --> */}
        <div className="mb-16">
          <h2 className="text-xl font-semibold text-dark-main mb-8">
            Build your E.F. goal in:
          </h2>
          <div className="flex flex-col md:flex-row gap-8">
            {buildGoals.map((goal, idx: number) => (
              <div
                key={idx}
                className="relative bg-light-secondary rounded-lg flex-1"
              >
                <div className="inset-0 px-5 py-3 z-10">
                  <div>
                    <div className="h-auto">
                      <div className="text-xl font-bold text-dark-main">
                        {goal.title}
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="-mt-4 mb-6 text-lg font-medium text-dark-main"></div>
                    </div>
                  </div>

                  <div className="mt-[20px] grid grid-cols-3 gap-2 w-full mb-8">
                    <div>
                      <p className="text-sm text-dark-main">per day</p>
                      <p className="text-lg font-semibold text-dark-main">
                        {currency?.symbol}
                        {formatNumber(goal.perDay)}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-dark-main">per week</p>
                      <p className="text-lg font-semibold text-dark-main">
                        {currency?.symbol}
                        {formatNumber(goal.perWeek)}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-dark-main">per month</p>
                      <p className="text-lg font-semibold text-dark-main">
                        {currency?.symbol}
                        {formatNumber(goal.perMonth)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
            <h2 className="text-xl font-semibold text-dark-main">
              Your risk level might have changed
            </h2>
            <div className="bg-orange-500 w-fit text-white font-semibold px-1 rounded-md text-sm">
              Coming soon
            </div>
          </div>
          <p className="text-dark-main text-sm mb-5 w-[55%]">
            Get real-time insights based on your current job market and
            financial situation. Understand how economic shifts impact your
            emergency fund needs.
          </p>
          <Button disabled>Join the waitlist</Button>
        </div>

        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
            <h2 className="text-xl font-semibold text-dark-main">
              See how many months you're prepared for unemployment
            </h2>
            <div className="bg-orange-500 w-fit text-white font-semibold px-1 rounded-md text-sm">
              Coming soon
            </div>
          </div>
          <p className="text-dark-main text-sm mb-5 w-[55%]">
            For peace of mind, this is how much your savings can prepare you for
            unemployment. See exactly how many months your current savings can
            cover your expenses if unemployment strikes.
          </p>
          <Button disabled>Join the waitlist</Button>
        </div>
      </div>
    </div>
  );
}
