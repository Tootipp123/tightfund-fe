"use client";

import Link from "next/link";
import { FiMoon, FiSun } from "react-icons/fi";
import Button from "../ui/Button";
import { FaDiscord } from "react-icons/fa";
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const currentPath = usePathname();

  return (
    <nav className="bg-[#1B1B29] w-full border-b dark:border-neutral-700">
      <div className="w-full px-3 md:px-0 md:w-[1200px] mx-auto py-3 flex justify-between">
        <div className="flex items-center gap-1 md:gap-5">
          <Link href="/">
            <div className="items-center cursor-pointer gap-1 hidden md:flex">
              <div className="bg-red-500 text-white font-black px-1">
                PEAK
              </div>
              <div className="font-bold text-lg dark:text-white mr-7 cursor-pointer">
                RIVALS
              </div>
            </div>
          </Link>
          <Link href="/" className={`${currentPath === "/" ? "text-white font-bold" : "dark:text-neutral-200"} text-xs md:text-sm`}>
            Hero Counters
          </Link>
          <Link href="/teamcomp" className={`${currentPath === "/teamcomp" ? "text-white font-bold" : "dark:text-neutral-200"} text-xs md:text-sm`}>
            Team Compositions
          </Link>
        </div>
        <div className="flex items-center">
          <a href="https://discord.gg/Aq2uKzmU" target="_blank">
            <Button
              className="bg-[#4C66FF] w-full"
            >
              <FaDiscord className="text-lg md:text-lg mr-2"/>
              <p className="w-full">Join our Discord</p>
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
}
