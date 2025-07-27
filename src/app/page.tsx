"use client";

import Navbar from "@/components/features/Navbar";
import Button from "@/components/ui/Button";
import { GoogleAnalytics } from "@next/third-parties/google";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <div>HOMEPAGE</div>
      <Button onClick={() => router.push("/onboarding")}>Start now</Button>
      <GoogleAnalytics gaId="G-KE3B6ZGJCY" />
    </>
  );
}
