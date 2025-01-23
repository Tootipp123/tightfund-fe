"use client";

import Image from "next/image";
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
  const menuRef = useRef<HTMLDivElement>(null);
  const [showMenu, setShowMenu] = useState(false);

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

  return (
    <>
      <div
        className="fixed inset-0 w-full h-full dark:bg-black bg-neutral-900 opacity-60 z-[600]"
        onClick={() => !persist && onClose()}
      ></div>
      <div
        className={`w-[85%] md:w-[900px] z-[700] overflow-auto dark:bg-neutral-800 bg-white rounded-md shadow-lg fixed top-0 right-0 h-full`}
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
          <h2 className="dark:text-neutral-100 capitalize font-bold text-md">Top Counter Picks:</h2>
          <div className="mt-2">
            {hero.counterPicks.map((counter: any, counterKey: any) => (
              <div key={counterKey} className="flex gap-4 mt-3">
                <div className="w-[45px] h-[45px] relative overflow-hidden">
                  <Image src={counter.image} alt={counter.name} width={45} height={45} className="rounded-md" />
                </div>
                <div className="w-full">
                  <h2 className="dark:text-neutral-100 flex-1 capitalize font-semibold text-lg">
                    {counter.name}
                  </h2>
                  <p className="text-[#A0A0AF]">{counter.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 py-5 border-t border-[#383852]">
            <div>
              {hero.goodAgainst.length ? (
                <div>
                  <h2 className="dark:text-neutral-100 capitalize font-bold text-md mb-2">Great Against:</h2>
                  <div className="flex flex-wrap items-center gap-7">
                    {hero.goodAgainst.map((counter: any, counterKey: any) => (
                      <div key={counterKey} className="flex items-center gap-3">
                        <Image src={counter.image} alt={counter.name} width={45} height={45} className="rounded-md" />
                        <h2 className="dark:text-neutral-100 capitalize font-semibold text-md m-0 p-0">
                          {counter.name}
                        </h2>
                      </div>
                    ))}
                  </div>
                </div>
              ) : <></>}
            </div>
            <div>
              {hero.goodPairWith?.length ? (
                <div>
                  <h2 className="dark:text-neutral-100 capitalize font-bold text-md mb-2">Good Pair With:</h2>
                  <div className="flex flex-wrap items-center gap-7">
                    {hero.goodPairWith.map((counter: any, counterKey: any) => (
                      <div key={counterKey} className="flex items-center gap-3">
                        <Image src={counter.image} alt={counter.name} width={45} height={45} className="rounded-md" />
                        <h2 className="dark:text-neutral-100 capitalize font-semibold text-md m-0 p-0">
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
