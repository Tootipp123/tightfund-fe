"use client";

import useMiddleware from "@/hooks/useMiddleware";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Router } from "next/router";
import { useEffect, useRef, useState } from "react";
interface Props {
  hero: any;
  onClose: () => void;
  persist?: boolean;
}

export default function CounterModal({
  hero,
  onClose,
  persist = false,
}: Props) {
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);
  const [showMenu, setShowMenu] = useState(false);
  const { accessToken } = useMiddleware();

  useEffect(() => {
    // Disable scrolling
    document.body.style.overflow = "hidden";

    // Cleanup when modal is unmounted or modal is closed
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu]);

  const SituationalCounters = () => {
    return (
      <div className="mt-5 py-5 border-t border-[#383852]">
        <h2 className="text-neutral-100 capitalize font-bold text-lg">Situational Counters:</h2>
        <p className="text-[#A0A0AF]">Heroes that can take advantage of {hero?.name} depending on the situation.</p>
        <div className="mt-2">
          {hero.situationalCounters.map((counter: any, counterKey: any) => (
            <div key={counterKey} className="flex gap-4 mt-3">
              <div className="w-[45px] h-[45px] relative overflow-hidden">
                <Image src={counter.image} alt={counter.name} width={45} height={45} className="rounded-md" />
              </div>
              <div className="w-full">
                <h2 className="text-neutral-100 flex-1 capitalize font-semibold text-lg">
                  {counter.name}
                </h2>
                <ul className="list-disc text-[#A0A0AF] ml-4">
                  {counter.descriptions.map((desc: any, descIdx: any) => (
                    <li key={descIdx} className="pb-2">
                      <p className="text-[#A0A0AF]">{desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  };

  return (
    <>
      <div
        className="fixed inset-0 w-full h-full bg-black bg-neutral-900 opacity-60 z-[600]"
        onClick={() => !persist && onClose()}
      ></div>
      <div
        className={`w-[85%] md:w-[900px] h-full z-[700] overflow-auto bg-[#1B1B29] rounded-md shadow-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
      >
        <div className="flex p-7 items-center gap-4 pb-5 w-full">
          <Image src={hero?.image} alt={hero?.name} width={70} height={70} className="rounded-md" />
          <div className="flex justify-between items-center w-full">
            <div className="button-para parallelogram">
              <h2 className="capitalize font-bold text-lg m-0 p-0">
                {hero.name}
              </h2>
              <p className="text-sm -mt-2 text-center">{hero.role}</p>
            </div>
            {hero?.meta ? (<p className="font-semibold mr-2 bg-gradient-to-r from-blue-300 to-indigo-300 inline-block text-transparent bg-clip-text">In meta</p>) : <></>}
          </div>
        </div>
        <div className="p-7 border-t border-[#383852]">
          <h2 className="text-neutral-100 capitalize font-bold text-lg">Natural Counters:</h2>
          <p className="text-[#A0A0AF]">Heroes that counters {hero?.name}'s fundamental kit.</p>
          <div className="mt-4">
            {hero.counterPicks.map((counter: any, counterKey: any) => (
              <div key={counterKey} className="flex gap-4 mt-3">
                <div className="w-[45px] h-[45px] relative overflow-hidden">
                  <Image src={counter.image} alt={counter.name} width={45} height={45} className="rounded-md" />
                </div>
                <div className="w-full">
                  <h2 className="text-neutral-100 flex-1 capitalize font-semibold text-lg">
                    {counter.name}
                  </h2>
                  <p className="text-[#A0A0AF]">{counter.description}</p>
                </div>
              </div>
            ))}
          </div>
          {hero?.situationalCounters && (
            <SituationalCounters />
          )}
          {hero?.howToCounter && (
            <div className="mt-6 border-t py-5 border-[#383852]">
              <div>
                <h4 className="text-neutral-50 font-bold text-lg">How To Counter</h4>
                <p className="text-neutral-200">This is the preferred position to counter Iron Fist in the back line.</p>
                <div className="flex gap-5 items-center">
                  <Image src={hero?.howToCounter?.image} alt="How to counter" width={600} height={300} className="mt-5"/>
                  <div>
                    <h4 className="text-neutral-50 font-bold text-lg">Scenarios:</h4>
                    <div dangerouslySetInnerHTML={{__html: hero?.howToCounter?.description}}></div>
                  </div>
                </div>
              </div>
          </div>
          )}
          <div className="mt-5 py-5 border-t border-[#383852]">
            <div>
              {hero.goodAgainst.length ? (
                <div>
                  <h2 className="text-neutral-100 capitalize font-bold text-lg mb-2">Good Counter Against:</h2>
                  <div className="relative w-full">
                    {hero.goodAgainst.slice(0, 2).map((counter: any, counterKey: any) => (
                      <div key={counterKey} className="flex gap-4 mt-3">
                        <div className="w-[45px] h-[45px] relative overflow-hidden">
                          <Image src={counter.image} alt={counter.name} width={45} height={45} className="rounded-md" />
                        </div>
                        <div className="pt-1">
                          <h2 className="text-neutral-100 capitalize font-semibold text-md m-0 p-0">
                            {counter.name}
                          </h2>
                          <p className="text-[#A0A0AF]">{counter.description}</p>
                        </div>
                      </div>
                    ))}
                    <div className="hidden md:block black-fade z-[5] relative w-full h-[50px] my-auto">
                      <p className="text-white mb-3">Get the best experience and see all the content.</p>
                      <button 
                        onClick={() => {
                          if(!accessToken) {
                            router.push("/signin")
                          } else {
                            router.push("/membership")
                          }
                        }}
                        className="mx-auto w-fit rounded-md px-3 py-1 bg-emerald-600 text-white font-medium">
                        Upgrade
                      </button>
                    </div>
                  </div>
                </div>
              ) : <></>}
            </div>
            <div>
              {hero.goodPairWith?.length ? (
                <div>
                  <h2 className="text-neutral-100 capitalize font-bold text-lg mb-2">Good Pair With:</h2>
                  <div className="flex flex-wrap items-center gap-7">
                    {hero.goodPairWith.map((counter: any, counterKey: any) => (
                      <div key={counterKey} className="flex items-center gap-3">
                        <Image src={counter.image} alt={counter.name} width={45} height={45} className="rounded-md" />
                        <h2 className="text-neutral-100 capitalize font-semibold text-md m-0 p-0">
                          {counter.name}
                        </h2>
                      </div>
                    ))}
                  </div>
                </div>
              ) : <></>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
