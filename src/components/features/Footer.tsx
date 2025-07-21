"use client";

import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState<string>("");

  return (
    <footer className="bg-[#1B1B29] w-full">
      <div className="w-full flex items-center pb-[80px] flex-col md:flex-row justify-between px-4 md:px-0 md:w-[1200px] mx-auto">
        <div>
          <div className="w-full pt-[60px] flex flex-col md:flex-row justify-between">
            <div className="items-center gap-1 flex">
              <div className="bg-red-500 text-white font-black px-1">PEAK</div>
              <div className="font-bold text-lg text-white mr-7 cursor-pointer">
                RIVALS
              </div>
            </div>
          </div>
          <div className="w-full mx-auto flex justify-between pb-[50px]">
            <p className="text-neutral-400">© 2025 Peak Rivals</p>
          </div>
        </div>
        <div className="order-1">
          <p className="text-neutral-400">Email us for partnership:</p>
          <a href="mailto:humorbounty@gmail.com" className="text-blue-300">
            humorbounty@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
