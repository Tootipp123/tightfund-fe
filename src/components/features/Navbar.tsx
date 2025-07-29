"use client";

import { logoutUser } from "@/api/User";
import useMiddleware from "@/hooks/useMiddleware";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import LogoSvg from "../icons/LogoSvg";
import Button from "../ui/Button";

export default function Navbar() {
  const router = useRouter();
  const currentPath = usePathname();
  const { accessToken } = useMiddleware();
  const [showUserMenu, setShowUserMenu] = useState(false);

  const signOut = async () => {
    try {
      await logoutUser();
    } catch (err) {
      console.log("err: ", err);
    } finally {
      window.localStorage.removeItem("accessToken");
      window.location.reload();
    }
  };

  return (
    <header className="flex items-center justify-between p-6 max-w-7xl mx-auto">
      <div className="flex items-center space-x-2">
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <LogoSvg />
          <span className="text-dark-main font-semibold">
            My Emergency Fund
          </span>
        </Link>{" "}
      </div>
      <nav className="hidden md:flex space-x-8 text-gray-700">
        <Link href="#problem-and-solution" className="hover:text-gray-900">
          The Problem
        </Link>
        <Link href="#problem-and-solution" className="hover:text-gray-900">
          Solution
        </Link>
        <Link href="#how-it-works" className="hover:text-gray-900">
          How It Works
        </Link>
      </nav>
      <div className="flex items-center gap-2">
        <Button
          variant="secondary"
          onClick={() => router.push("/signin")}
          size="medium"
        >
          <p>Sign In</p>
        </Button>
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
