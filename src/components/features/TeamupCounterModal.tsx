"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface Props {
  teamup: any;
  onClose: () => void;
  persist?: boolean;
}

export default function TeamupCounterModal({
  teamup,
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
        className="fixed inset-0 w-full h-full bg-black bg-neutral-900 opacity-60 z-[600]"
        onClick={() => !persist && onClose()}
      ></div>
      <div
        className={`w-[85%] md:w-[900px] h-full z-[700] overflow-auto bg-[#1B1B29] rounded-md shadow-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
      >
        <div className="flex p-7 items-center gap-4 pb-5 w-full">
          <div className="flex items-center mx-auto w-[250px]">
            {teamup.heroes.map((hero: any, heroIdx: number) => (
              <div
                key={heroIdx}
                className="overflow-hidden w-[80px] h-[150px] relative"
              >
                <Image
                  src={hero.tallImage}
                  layout="fill"
                  unoptimized
                  objectFit="cover"
                  alt={hero.name}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center w-full">
            <div className="px-3 flex items-center gap-2">
              <Image
                src={teamup.icon}
                width={40}
                height={40}
                unoptimized
                alt="teamup icon"
              />
              <h2 className="uppercase font-bold text-white text-[18px] m-0 p-0">
                {teamup.name}
              </h2>
            </div>
            <p className="font-semibold mr-2 bg-gradient-to-r from-blue-300 to-indigo-300 inline-block text-transparent bg-clip-text">
              In meta
            </p>
          </div>
        </div>
        <div className="p-7 border-t border-[#383852]">
          <h2 className="text-neutral-100 capitalize font-bold text-xl">
            Natural Counters:
          </h2>
          <p className="text-[#A0A0AF]">
            Team-Ups that counters their fundamental kits.
          </p>
          {teamup.naturalCounters?.map((naturalCounter: any, idx: number) => (
            <div
              key={idx}
              className="border rounded-md border-[#383852] p-5 mt-5"
            >
              <div className="flex items-center gap-3">
                <div className="flex gap-1 items-center">
                  {naturalCounter?.heroes?.map(
                    (hero: any, counterKey: number) => (
                      <div key={counterKey} className="flex items-center gap-3">
                        <Image
                          src={hero.image}
                          alt={hero.name}
                          unoptimized
                          width={45}
                          height={45}
                          className="rounded-md"
                        />
                      </div>
                    )
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src={teamup.icon}
                    width={30}
                    height={30}
                    unoptimized
                    alt="teamup icon"
                  />
                  <h2 className="text-neutral-100 capitalize font-semibold text-lg m-0 p-0">
                    {naturalCounter.name}
                  </h2>
                </div>
              </div>
              <p className="text-[#adadb8] text-md pt-3">
                {naturalCounter.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
