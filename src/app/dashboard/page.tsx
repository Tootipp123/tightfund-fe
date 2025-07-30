"use client";

import UserDefaultImage from "@/assets/user-default.jpg";
import LogoSvg from "@/components/icons/LogoSvg";
import Button from "@/components/ui/Button";
import { useFinancialReport } from "@/store/useFinancialReport";
import { formatNumber } from "@/utils/formatNumber";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { RiArrowDropDownFill } from "react-icons/ri";

export default function UserDashboard() {
  const router = useRouter();
  const { financialReport } = useFinancialReport();
  const session = useSession();
  const [showUserMenu, setShowUserMenu] = useState(false);

  const [buildGoals, setBuildGoals] = useState([
    {
      month: "3",
      title: "3 months",
      perDay: "125",
      perWeek: "900",
      perMonth: "3600",
    },
    {
      month: "6",
      title: "6 months",
      perDay: "125",
      perWeek: "900",
      perMonth: "3600",
    },
    {
      month: "9",
      title: "9 months",
      perDay: "125",
      perWeek: "900",
      perMonth: "3600",
    },
  ]);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-light-main py-4 px-8">
        <div className="container mx-auto max-w-6xl">
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
            {session && session?.data?.user && (
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
      <div className="flex-grow container mx-auto max-w-6xl py-12 sm:px-6">
        {/* <!-- Greeting --> */}
        <h2 className="text-3xl font-semibold text-dark-main mb-8">
          Hello, CJ
        </h2>

        {/* <!-- Most Recommended Emergency Fund Section --> */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-semibold text-dark-main">
              Most Recommended Emergency Fund
            </h1>
            <Button
              variant="secondary"
              onClick={() => router.push("/onboarding?from=dashboard")}
            >
              Update your details
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row items-baseline sm:items-center mb-6">
            <span className="text-6xl sm:text-7xl font-bold text-dark-main mr-4 leading-tight">
              ${financialReport?.mainCard?.emergencyFundGoal}
            </span>
            <span className="text-2xl sm:text-3xl font-medium text-dark-main whitespace-nowrap">
              for {financialReport?.mainCard?.buffer} months
            </span>
          </div>
          <p className="text-dark-main text-sm mt-6 max-w-lg">
            <span className="font-semibold">Your Priority:</span> Get to x
            amount first (covers electricity + food for{" "}
            {financialReport?.mainCard?.buffer} months), then build to the full
            x amount.
          </p>
        </div>

        {/* <!-- Other Options Section --> */}
        <div className="mb-16">
          <h2 className="text-xl font-semibold text-dark-main mb-8">
            Build your E.F. goal in:
          </h2>
          <div className="flex gap-8">
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
                        ${formatNumber(goal.perDay)}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-dark-main">per week</p>
                      <p className="text-lg font-semibold text-dark-main">
                        ${formatNumber(goal.perWeek)}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-dark-main">per month</p>
                      <p className="text-lg font-semibold text-dark-main">
                        ${formatNumber(goal.perMonth)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <div className="flex items-center gap-2 mb-2">
            <h2 className="text-xl font-semibold text-dark-main">
              Your risk level might have changed
            </h2>
            <div className="bg-orange-500 text-white font-semibold px-1 rounded-md text-sm">
              Coming soon
            </div>
          </div>
          <p className="text-dark-main mb-5">
            Get alerts and real-time insights based on your current job market
          </p>
          <Button>Join the waitlist</Button>
        </div>

        <div className="mb-16">
          <div className="flex items-center gap-2 mb-2">
            <h2 className="text-xl font-semibold text-dark-main">
              See how many months you're prepared for unemployment
            </h2>
            <div className="bg-orange-500 text-white font-semibold px-1 rounded-md text-sm">
              Coming soon
            </div>
          </div>
          <p className="text-dark-main mb-5">
            For peace of mind, this is how much your savings can prepare you for
            unemployment
          </p>
          <Button>Join the waitlist</Button>
        </div>
      </div>
    </div>
  );
}
