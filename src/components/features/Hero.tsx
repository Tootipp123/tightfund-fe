"use client";

import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  return (
    <div className="flex-1 max-w-3xl pr-0 md:pr-10">
      <section className="text-center py-20 px-4">
        <h1 className="text-2xl md:text-4xl font-semibold leading-tight mb-6 text-dark-main">
          Know how much <span className="font-bold">emergency fund</span> you
          really need in less than 60 seconds
        </h1>
        <p className="text-md md:text-xl text-dark-main opacity-[0.8] mb-10">
          Stop losing sleep over 'what if' scenarios. <br /> Get the exact
          number that lets you breathe easy
        </p>
        <Button
          className="px-[50px]"
          onClick={() => router.push("/onboarding")}
          size="large"
        >
          <p>Start now</p>
        </Button>
      </section>
    </div>
  );
}
