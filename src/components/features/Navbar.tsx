"use client";

import { logoutUser } from "@/api/User";
import useMiddleware from "@/hooks/useMiddleware";
import { useUserStore } from "@/store/User";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { RiArrowDropDownFill } from "react-icons/ri";
import LogoSvg from "../icons/LogoSvg";
import Button from "../ui/Button";

export default function Navbar() {
  const router = useRouter();
  const currentPath = usePathname();
  const { accessToken } = useMiddleware();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { isMember, subscriptionId } = useUserStore();

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

  const loadStyle = () => {
    return isMember
      ? "bg-gradient-to-r from-yellow-600 to-yellow-300"
      : "bg-white";
  };

  return (
    <>
      <nav className="w-full">
        <div className="w-full px-3 md:px-0 md:w-[1200px] mx-auto py-3 flex justify-between">
          <div className="flex items-center gap-1 md:gap-5">
            <Link href="/">
              <LogoSvg />
            </Link>
            <Link
              href="/"
              className={`${
                currentPath === "/"
                  ? "text-dark-main font-bold"
                  : "text-dark-main"
              } hidden md:block text-xs md:text-sm`}
            >
              Hero Counters
            </Link>
            <Link
              href="/generate-team-counters"
              className={`${
                currentPath === "/generate-team-counters"
                  ? "text-dark-main font-bold"
                  : "text-dark-main"
              } hidden text-xs md:text-sm md:flex items-center gap-2`}
            >
              Generate Team Counters
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://discord.gg/8xc3a7cCSg" target="_blank">
              <Button variant="primary">
                <p className="w-full">Start now</p>
              </Button>
            </a>
            {!accessToken ? (
              <Button
                onClick={() => router.push("/signin")}
                variant="secondary"
              >
                <p className="w-full">Sign in</p>
              </Button>
            ) : (
              <div className="relative">
                <div
                  className="flex items-center cursor-pointer"
                  onClick={() => setShowUserMenu((prev) => !prev)}
                >
                  <div
                    className={`${loadStyle()} w-[33px] h-[33px] p-[3px] relative rounded-full flex items-center justify-center overflow-hidden`}
                  >
                    <Image
                      src="https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484729/Rivals/Jeff_the_Land_Shark_Icon_mkp5f4.webp"
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
                    className="w-[180px] bg-[#1B1B29] border border-neutral-700 py-2 rounded-md absolute"
                  >
                    <ul className="text-sm text-neutral-100">
                      {isMember ? (
                        <a
                          href={`https://gumroad.com/subscriptions/${subscriptionId}/manage`}
                          target="_blank"
                        >
                          <li className="py-1 px-4 cursor-pointer">
                            Cancel membership
                          </li>
                        </a>
                      ) : (
                        <li
                          onClick={() => router.push("/membership")}
                          className="py-1 px-4 cursor-pointer"
                        >
                          Become a Member
                        </li>
                      )}
                      <li
                        onClick={() => signOut()}
                        className="py-1 px-4 cursor-pointer"
                      >
                        Sign out
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>
      <div className="flex gap-5 md:hidden border-b px-3 py-3 bg-[#1B1B29] w-full border-b border-neutral-700">
        <Link
          href="/"
          className={`${
            currentPath === "/" ? "text-white font-bold" : "text-neutral-200"
          } text-xs md:text-sm`}
        >
          Hero Counters
        </Link>
        <Link
          href="/generate-team-counters"
          className={`${
            currentPath === "/generate-team-counters"
              ? "text-white font-bold"
              : "text-neutral-200"
          } text-xs md:text-sm`}
        >
          Generate Counters
        </Link>
      </div>
    </>
  );
}
