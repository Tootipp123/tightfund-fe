"use client";

import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";

export default function PaymentSuccessPage() {
  const router = useRouter();

  return (
    <main className="bg-[#1B1B29] min-h-screen flex justify-center items-center">
      <div className="m-auto">
        <h2 className="font-semibold text-3xl text-center text-neutral-50">
          Congratulations!
        </h2>
        <p className="font-medium text-lg text-center text-neutral-200 mt-2">
          You are now a Peak Rivals member.
        </p>
        <div className="flex items-center">
          <Button
            onClick={() => router.push("/")}
            className="text-center m-auto w-fit mt-3"
          >
            Back to home
          </Button>
        </div>
      </div>
    </main>
  );
}
