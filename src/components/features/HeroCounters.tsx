"use client";

import { HERO_COUNTERS } from "@/utils/static";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { LuSearch } from "react-icons/lu";

export default function HeroCounters() {
  const [searchVal, setSearchVal] = useState("");
  const [searchResults, setSearchResults] = useState(HERO_COUNTERS);

  const searchHero = (search: any) => {
    const res = HERO_COUNTERS.filter((res: any) => res.name.toLowerCase().includes(search))
    setSearchResults(res)
  }

  return (
    <div className="w-full px-3 md:px-0 md:w-[1200px] mx-auto pb-[150px]">
      <header className="pt-[100px] relative">
        <h1 className="text-3xl dark:text-neutral-100 relative px-[50px] md:px-[300px] font-black text-center">
          Discover the Top Hero Counters in Marvel Rivals
        </h1>
        <div className="w-full mt-7">
          <div className="w-[40%] h-[50px] mt-4 mx-auto flex justify-center rounded-md dark:border-neutral-700 dark:border flex items-center dark:text-neutral-200 rounded-md px-4">
            <LuSearch className="text-[#A0A0AF]"/>
            <input
              type="text"
              className="w-full h-full dark:bg-transparent bg-[#F6F6F6] pl-2"
              placeholder="Search a hero"
              value={searchVal}
              onChange={(e: any) => {
                setSearchVal(e.target.value)
                searchHero(e.target.value);
              }}
            />
          </div>
        </div>
      </header>

      <section className="mt-[100px]">
        <div className="flex justify-between mb-5 px-2">
          <p className="dark:text-neutral-200 font-semibold">
            Update as of {new Date().toDateString()} - Season 1
          </p>
        </div>
        <div className="w-full flex flex-col md:flex-row md:flex-wrap gap-5">
          <div className="w-full flex flex-col md:flex-row md:flex-wrap gap-5">
            {searchResults.map((hero: any, index: number) => (
              <div
                key={index}
                className="w-full md:w-[49%] rounded-lg p-6 bg-[#292937] cursor-pointer"
              >
                <div className="flex items-center gap-4 pb-5 w-full">
                  <Image src={hero.image} alt={hero.name} width={70} height={70} className="rounded-md" />
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
                <div className="py-5 border-t border-[#383852]">
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
                            {hero.goodAgainst.map((counter, counterKey) => (
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
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
