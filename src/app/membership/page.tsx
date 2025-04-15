"use client";

import Button from "@/components/ui/Button";
import { useUserStore } from "@/store/User";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { IoArrowBack } from "react-icons/io5";
import GalactaImg from "../../assets/img_icon_will-of-galacta.webp";

export default function Membership() {
  const router = useRouter();
  const { userId }: any = useUserStore();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // const token = localStorage.getItem("accessToken");
    console.log("userId: ", userId);
    setIsLoggedIn(!!userId);
  }, [userId]);

  return (
    <>
      <div className="m-5 fixed">
        <Button
          variant="secondary"
          onClick={() => router.push("/")}
          startIcon={<IoArrowBack />}
        >
          Back
        </Button>
      </div>
      <main className="bg-[#1B1B29] min-h-screen flex justify-center items-center">
        <div className="w-full px-3 md:px-0 md:w-[1200px] flex flex-col justify-center items-center relative">
          <div className="w-[200px] h-[200px] absolute -mt-[450px] z-[3]">
            <Image
              src={GalactaImg}
              unoptimized
              layout="fill"
              alt="Galacta"
              objectFit="contain"
            />
          </div>
          <div
            id="card"
            className="z-[5] bg-[#1B1B29] border rounded-lg border-neutral-700 py-8 px-10 w-fit mx-auto"
          >
            <h2 className="font-semibold text-xl text-center text-neutral-50">
              Peak Rivals Membership
            </h2>
            <p className="text-neutral-200 font-medium mt-3 text-center">
              $5.99/month
            </p>
            <a
              className="gumroad-button"
              href={`https://9273069619178.gumroad.com/l/peakrivals?user_id=${userId}`}
              style={{
                width: "100%",
                marginTop: 10,
                display: isLoggedIn ? "flex" : "none",
              }}
              data-success-callback="handleGumroadPayment"
              data-gumroad-overlay-checkout="true"
            >
              <button>Pay on</button>
            </a>
            {!isLoggedIn && (
              <a
                href={`${
                  !isLoggedIn
                    ? "/signin?from=membership"
                    : `https://9273069619178.gumroad.com/l/peakrivals?user_id=${userId}`
                }`}
              >
                <button className="w-full bg-white rounded-md py-3 mt-5 font-semibold">
                  Continue
                </button>
              </a>
            )}
            <li className="flex items-center justify-center my-3">
              <p className="text-neutral-300 text-sm">
                Free 1 week trial - Cancel anytime
              </p>
            </li>
            <div className="border-t border-neutral-600 pt-4">
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-3">
                  <FaCheck className="text-emerald-500 text-lg" />
                  <p className="text-neutral-50">
                    Unlimited team counters generation
                  </p>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-emerald-500 text-lg" />
                  <p className="text-neutral-50">Early access to all updates</p>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-emerald-500 text-lg" />
                  <p className="text-neutral-50">Priority support on Discord</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
