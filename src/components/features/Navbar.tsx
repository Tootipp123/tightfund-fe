"use client";

import { logoutUser } from "@/api/User";
import useMiddleware from "@/hooks/useMiddleware";
import { useUserStore } from "@/store/User";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FaDiscord } from "react-icons/fa";
import { RiArrowDropDownFill } from "react-icons/ri";
import Button from "../ui/Button";
import CancelMembershipModal from "./CancelMembershipModal";

export default function Navbar() {
  const router = useRouter();
  const currentPath = usePathname();
  const { accessToken } = useMiddleware();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { isMember } = useUserStore();
  const [showCancelMembership, setShowCancelMembership] = useState(false);

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
    <>
      <nav className="bg-[#1B1B29] w-full border-b border-neutral-700">
        <div className="w-full px-3 md:px-0 md:w-[1200px] mx-auto py-3 flex justify-between">
          <div className="flex items-center gap-1 md:gap-5">
            <Link href="/">
              <div className="items-center cursor-pointer gap-1 flex">
                <div className="bg-red-500 text-white font-black px-1">
                  PEAK
                </div>
                <div className="font-bold text-lg text-white mr-7 cursor-pointer">
                  RIVALS
                </div>
              </div>
            </Link>
            <Link
              href="/"
              className={`${
                currentPath === "/"
                  ? "text-white font-bold"
                  : "text-neutral-200"
              } hidden md:block text-xs md:text-sm`}
            >
              Hero Counters
            </Link>
            <Link
              href="/team-up-counters"
              className={`${
                currentPath === "/team-up-counters"
                  ? "text-white font-bold"
                  : "text-neutral-200"
              } hidden md:flex text-xs md:text-sm relative items-center gap-1`}
            >
              <span>Team Up Counters</span>
              <div className="bg-yellow-600 text-xs text-white px-1 w-fit rounded-sm">
                New
              </div>
            </Link>
            <Link
              href="/team-compositions"
              className={`${
                currentPath === "/team-compositions"
                  ? "text-white font-bold"
                  : "text-neutral-200"
              } hidden md:block text-xs md:text-sm`}
            >
              Team Compositions
            </Link>
            {/* <Link href="/map-specific-heroes" className={`${currentPath === "/map-specific-heroes" ? "text-white font-bold" : "text-neutral-200"} hidden md:block text-xs md:text-sm`}>
              Map-Specific Heroes
            </Link> */}
          </div>
          <div className="flex items-center gap-3">
            <a href="https://discord.gg/8xc3a7cCSg" target="_blank">
              <Button variant="secondary">
                <FaDiscord className="text-lg text-main-purple md:text-lg mr-2" />
                <p className="w-full">Join our Discord</p>
              </Button>
            </a>
            {!accessToken ? (
              <Button onClick={() => router.push("/signin")}>
                <p className="w-full">Sign in</p>
              </Button>
            ) : (
              <div className="relative">
                <div
                  className="flex items-center cursor-pointer"
                  onClick={() => setShowUserMenu((prev) => !prev)}
                >
                  <div className="w-[30px] h-[30px] rounded-full bg-white"></div>
                  <RiArrowDropDownFill className="text-lg text-white" />
                </div>
                {showUserMenu && (
                  <div
                    id="menu"
                    className="w-[180px] bg-[#1B1B29] border border-neutral-700 py-2 rounded-md absolute"
                  >
                    <ul className="text-sm text-neutral-100">
                      {isMember ? (
                        <li
                          onClick={() => setShowCancelMembership(true)}
                          className="py-1 px-4 cursor-pointer"
                        >
                          Cancel membership
                        </li>
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
      {showCancelMembership && (
        <CancelMembershipModal onClose={() => setShowCancelMembership(false)} />
      )}
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
          href="/teamcomp"
          className={`${
            currentPath === "/teamcomp"
              ? "text-white font-bold"
              : "text-neutral-200"
          } text-xs md:text-sm`}
        >
          Team Compositions
        </Link>
      </div>
    </>
  );
}
