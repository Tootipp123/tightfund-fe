"use client";

import { createFinancialDetails } from "@/api/FinancialDetails";
import LogoSvg from "@/components/icons/LogoSvg";
import Button from "@/components/ui/Button";
import { useFinancialReport } from "@/store/useFinancialReport";
import { useGlobalStore } from "@/store/useGlobalStore";
import { formatNumber } from "@/utils/formatNumber";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useMutation } from "react-query";

export default function Result() {
  const router = useRouter();
  const { data: session, status }: any = useSession();
  const { currency } = useGlobalStore();
  const { financialReport } = useFinancialReport();

  const createFinancialDetailsMutation = useMutation(createFinancialDetails);

  useEffect(() => {
    if (status === "authenticated") {
      createFinancialDetailsMutation.mutateAsync({
        data: financialReport,
        accessToken: session?.accessToken,
      });
    }
  }, [session?.accessToken]);

  return (
    <div className="flex-grow container mx-auto max-w-4xl py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
      <div className="mb-6">
        <LogoSvg />
      </div>

      <p className="text-md text-dark-main mb-2 font-medium">
        We advise you to have at least
      </p>

      <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-dark-main leading-tight mb-2">
        {currency?.symbol}
        {formatNumber(
          financialReport?.emergencyFundGoal ||
            financialReport?.mainCard?.emergencyFundGoal
        )}
      </h1>
      <p className="text-xl sm:text-2xl text-dark-main mb-3">
        for{" "}
        {financialReport?.buffer?.label ||
          financialReport?.mainCard?.buffer.label}{" "}
        of emergency fund
      </p>

      {/* <!-- Confidence Score --> */}
      <div className="mb-12 flex space-x-2">
        <p className="text-xl sm:text-xl font-medium text-dark-main">
          Confidence score:
        </p>
        <p className="text-xl sm:text-xl font-bold text-dark-main">
          {financialReport?.mainCard?.confidenceScore ||
            financialReport?.confidenceScore}
          %
        </p>
      </div>

      {/* <!-- Question Section --> */}
      <h2 className="text-xl font-semibold text-dark-main mb-8">
        Have you got this EF already?
      </h2>

      {/* <!-- Option Cards Grid --> */}
      <div className="flex items-center gap-5">
        {/* <!-- Card 1: I have this --> */}
        <div className="bg-light-secondary py-8 px-6 rounded-xl shadow-sm flex flex-col items-center text-center w-full max-w-[240px]">
          <h3 className="text-md md:text-xl font-bold text-dark-main mb-4">
            👏 I have this
          </h3>
          <p className="text-sm md:text-lg text-dark-main mb-6 font-medium">
            See how prepared you really are
          </p>
          <Button
            onClick={() => {
              if (status === "authenticated") {
                router.push("/dashboard");
              } else {
                router.push("/signin?from=result");
              }
            }}
            variant="secondary"
            className="w-full"
          >
            Check status
          </Button>
        </div>

        {/* <!-- Card 2: Still building --> */}
        <div className="bg-light-secondary py-8 px-6 rounded-xl shadow-sm flex flex-col items-center text-center w-full max-w-[240px]">
          <h3 className="text-md md:text-xl font-bold text-dark-main mb-4">
            📈 Still building
          </h3>
          <p className="text-sm md:text-lg text-dark-main mb-6 font-medium">
            Get timeline &amp; saving options
          </p>
          <Button
            onClick={() => {
              if (status === "authenticated") {
                router.push("/dashboard");
              } else {
                router.push("/signin?from=result");
              }
            }}
            variant="secondary"
            className="w-full"
          >
            See options
          </Button>
        </div>
      </div>

      {/* <!-- Full Target Fund Breakdown Section --> */}
      <div className="mb-8 flex flex-col items-center mt-10">
        <p className="text-lg text-dark-main mb-3">
          Get your full target fund's breakdown & explanation
        </p>
        <Button
          onClick={() => {
            if (status === "authenticated") {
              router.push("/dashboard");
            } else {
              router.push("/signin?from=result");
            }
          }}
          className="px-6"
        >
          Login
        </Button>
      </div>
    </div>
  );
}
