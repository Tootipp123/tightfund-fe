"use client";

import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { IoArrowBack } from "react-icons/io5";

export default function Payment() {
  const router = useRouter();

  return (
    <main className="w-full h-screen flex">
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="w-[400px]">
          <Button
            variant="secondary"
            onClick={() => router.push("/")}
            startIcon={<IoArrowBack />}
          >
            Back
          </Button>
          <p className="text-neutral-200 text-xl font-semibold mt-3">
            Peak Rivals Membership
          </p>
          <div className="mt-10 flex items-center justify-between">
            <p className="text-neutral-100">Monthly Membership</p>
            <p className="text-neutral-100">$3.99</p>
          </div>
          <div className="mt-5 flex items-center justify-between border-t pt-4 border-t-neutral-700">
            <p className="text-neutral-100 font-semibold">Total</p>
            <p className="text-neutral-100 font-semibold">$3.99</p>
          </div>
          <div className="mt-5">{/* <Paypal /> */}</div>
          <p className="text-sm text-neutral-200 mt-10">
            By starting a Peak Rivals membership, you agree to our Membership
            Terms of Service. Your payment method will be charged a recurring
            $3.99 USD monthly fee, unless you decide to cancel. No refunds for
            memberships canceled between billing cycles.
          </p>
        </div>
      </div>

      {/* <div className="flex-1 flex items-center justify-center bg-[#262636]">
        <div className="w-[400px]">
          <Paypal />
        </div>
      </div> */}
    </main>
  );
}
