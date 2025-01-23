"use client";

import { createNewsletterSub } from "@/app/api/Newsletter";
import Footer from "@/components/features/Footer";
import Navbar from "@/components/features/Navbar";
import { useState } from "react";
import { useMutation } from "react-query";
import HeroCounters from "./HeroCounters";

export default function Homepage() {
  const [email, setEmail] = useState<string>("");

  const subscribeToNewsletter = useMutation(
    (email: string) => createNewsletterSub(email),
    {
      onSuccess: async (res: any) => {
        setEmail("");
      },
      onError: (err: any) => {
        console.log("err: ", err);
      },
    }
  );

  return (
    <div>
      <Navbar />
      <main className="bg-[#1B1B29] min-h-[100vh]">
        <HeroCounters />
      </main>
      <Footer />
    </div>
  );
}
