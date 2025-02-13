"use client";

import Footer from "@/components/features/Footer";
import Navbar from "@/components/features/Navbar";
import { useState } from "react";
import HeroCountersv2 from "./HeroCountersv2";

export default function Homepage() {
  const [email, setEmail] = useState<string>("");

  return (
    <div>
      <Navbar />
      <main className="bg-[#1B1B29] min-h-[100vh]">
        {/* <HeroCounters /> */}
        <HeroCountersv2 />
      </main>
      {/* <AffiliateFooter /> */}
      <Footer />
    </div>
  );
}
