"use client";

import UserDefaultImage from "@/assets/user-default.jpg";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { RiArrowDropDownFill } from "react-icons/ri";
import LogoSvg from "../icons/LogoSvg";
import Button from "../ui/Button";

export default function Navbar() {
  const session = useSession();
  console.log("session: ", session);
  const router = useRouter();
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <header className="flex items-center justify-between p-6 max-w-7xl mx-auto">
      <div className="flex items-center space-x-2">
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <LogoSvg />
          <span className="text-dark-main font-semibold">
            Get Emergency Fund
          </span>
        </Link>
      </div>
      <nav className="hidden md:flex space-x-8 text-gray-700">
        <Link href="#problem-and-solution" className="hover:text-gray-900">
          The Problem
        </Link>
        <Link href="#problem-and-solution" className="hover:text-gray-900">
          Solution
        </Link>
        <Link
          href="#how-it-works"
          className="hidden md:block hover:text-gray-900"
        >
          How It Works
        </Link>
      </nav>
      <div className="flex items-center gap-2">
        {session && session?.data?.user ? (
          <div className="relative">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => setShowUserMenu((prev) => !prev)}
            >
              <div
                className={`w-[45px] h-[45px] p-[3px] relative rounded-full flex items-center justify-center overflow-hidden`}
              >
                <Image
                  src={UserDefaultImage}
                  alt="Jeff Profile"
                  className="rounded-full bg-white"
                  width={50}
                  height={50}
                />
              </div>
              <RiArrowDropDownFill className="text-lg text-white" />
            </div>
            {showUserMenu && (
              <div
                id="menu"
                className="w-[180px] bg-white py-2 rounded-md absolute z-[100]"
              >
                <ul className="text-sm text-dark-main">
                  <li
                    onClick={() => router.push("/dashboard")}
                    className="py-2 px-4 cursor-pointer hover:bg-neutral-100"
                  >
                    Dashboard
                  </li>
                  <li
                    onClick={() =>
                      signOut({
                        callbackUrl: "/?from=signout",
                      })
                    }
                    className="py-2 px-4 cursor-pointer hover:bg-neutral-100"
                  >
                    Sign out
                  </li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <Button
            variant="secondary"
            onClick={() => router.push("/signin")}
            size="medium"
          >
            <p>Sign In</p>
          </Button>
        )}
        <Button
          onClick={() => router.push("/onboarding")}
          className="hidden md:block"
          size="medium"
        >
          <p>Start now</p>
        </Button>
      </div>
    </header>
  );
}
