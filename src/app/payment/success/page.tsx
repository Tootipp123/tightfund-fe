"use client";

import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";

export default function PaymentSuccessPage() {
  const router = useRouter();

  return (
    <main className="bg-[#1B1B29] min-h-screen flex justify-center items-center">
      <div className="m-auto">
        <h2 className="font-semibold text-3xl text-center text-neutral-50">
          <div>🎉</div>
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
        <p className="font-medium text-sm text-center text-neutral-400 mt-10 w-[600px]">
          If your membership did not reflect on time, please wait up to 3
          minutes and refresh the page. If issue still persists, contact
          thehealthyprogrammer on our{" "}
          <a
            href="https://discord.gg/8xc3a7cCSg"
            target="_blank"
            className="text-purple-400"
          >
            Discord
          </a>{" "}
          server.
        </p>
      </div>
    </main>
  );
}
