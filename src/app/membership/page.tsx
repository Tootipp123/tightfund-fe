"use client";

import Button from "@/components/ui/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaCheck } from "react-icons/fa6";
import { IoArrowBack } from "react-icons/io5";
import GalactaImg from "../../assets/img_icon_will-of-galacta.webp";

export default function Membership() {
  const router = useRouter();

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
            <p className="text-neutral-400 text-center">$6/month</p>
            <a
              className="gumroad-button"
              href={`https://9273069619178.gumroad.com/l/peakrivals?user_id=${
                window?.localStorage?.getItem("userId") || "testId"
              }`}
              style={{
                width: "100%",
                marginTop: 10,
              }}
              data-success-callback="handleGumroadPayment"
              data-gumroad-overlay-checkout="true"
            >
              <button>Pay on</button>
            </a>
            <div className="border-t border-neutral-600 mt-5 pt-4">
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-3">
                  <FaCheck className="text-emerald-500 text-lg" />
                  <p className="text-neutral-50">
                    Unlimited team counters generation
                  </p>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-emerald-500 text-lg" />
                  <p className="text-neutral-50">
                    Advanced counter pick details
                  </p>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-emerald-500 text-lg" />
                  <p className="text-neutral-50">Hero favorites filter</p>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-emerald-500 text-lg" />
                  <p className="text-neutral-50">Early access to updates</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
