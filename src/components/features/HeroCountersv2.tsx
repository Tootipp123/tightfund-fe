"use client";

import { HERO_COUNTERS } from "@/utils/static";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CounterModal from "./CounterModal";

export default function HeroCountersv2() {
  const [searchVal, setSearchVal] = useState("");
  const [searchResults, setSearchResults] = useState(HERO_COUNTERS);
  const [selectedHero, setSelectedHero] = useState<any>(null);
  const router = useRouter();
  const [selectedHeroCategory, setSelectedHeroCategory] =
    useState<string>("All Heroes");
  const [tierFilter, setTierFilter] = useState<any>({
    name: "All Tiers",
    value: "ALL",
  });
  const [filters, setFilters] = useState([
    {
      category: "All Heroes",
      active: true,
    },
    {
      category: "Vanguard",
      active: false,
    },
    {
      category: "Duelist",
      active: false,
    },
    {
      category: "Strategist",
      active: false,
    },
  ]);

  const tierFilters: any = [
    {
      name: "All Tiers",
      value: "ALL",
    },
    {
      name: "S Tier - In Meta",
      value: "S",
    },
    {
      name: "A Tier - Very Good",
      value: "A",
    },
    {
      name: "B Tier - Good",
      value: "B",
    },
    {
      name: "C Tier - Average",
      value: "C",
    },
    {
      name: "D Tier - Not worth it",
      value: "D",
    },
  ];

  // const searchHero = (search: any) => {
  //   const res = HERO_COUNTERS.filter((res: any) => res.name.toLowerCase().includes(search))
  //   console.log("search result: ", res)
  //   setSearchResults(res)
  // }

  useEffect(() => {
    if (
      tierFilter &&
      tierFilter?.value !== "ALL" &&
      selectedHeroCategory !== "All Heroes"
    ) {
      const res = HERO_COUNTERS.filter(
        (res: any) =>
          res.tier === tierFilter.value && res.role === selectedHeroCategory
      );
      setSearchResults(res);
    } else if (
      tierFilter &&
      tierFilter?.value === "ALL" &&
      selectedHeroCategory !== "All Heroes"
    ) {
      const res = HERO_COUNTERS.filter(
        (res: any) => res.role === selectedHeroCategory
      );
      setSearchResults(res);
    } else if (
      tierFilter &&
      tierFilter?.value !== "ALL" &&
      selectedHeroCategory === "All Heroes"
    ) {
      const res = HERO_COUNTERS.filter(
        (res: any) => res.tier === tierFilter.value
      );
      setSearchResults(res);
    } else if (!tierFilter && selectedHeroCategory !== "All Heroes") {
      const res = HERO_COUNTERS.filter(
        (res: any) => res.role === selectedHeroCategory
      );
      setSearchResults(res);
    } else {
      setSearchResults(HERO_COUNTERS);
    }
  }, [tierFilter, selectedHeroCategory]);

  const setFilter = (selected: any) => {
    setSelectedHeroCategory(selected);

    const newFilters = filters.map((item: any) => {
      if (item.category === selected) {
        item.active = true;
        return item;
      }
      item.active = false;
      return item;
    });
    setFilters(newFilters);

    // if(selected === "All Heroes") {
    //   setSearchResults(HERO_COUNTERS)
    // } else if (selected === "In Meta") {
    //   const metaList = HERO_COUNTERS.filter((res: any) => res.meta)
    //   setSearchResults(metaList)
    // } else {
    //   const vangList = HERO_COUNTERS.filter((res: any) => res.role === selected)
    //   setSearchResults(vangList)
    // }
  };

  const sampleOne = [
    "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1740187180/rivals%20v2/The_Thing_Icon_ydoqtg.webp",
    "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484730/Rivals/Magneto_Icon_tlpvn5.webp",
    "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484732/Rivals/Spider-Man_Icon_lvnyoc.webp",
    "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484729/Rivals/Iron_Fist_Icon_t1byee.webp",
    "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484729/Rivals/Cloak__26_Dagger_Icon_qgjwi4.webp",
    "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484730/Rivals/Luna_Snow_Icon_snupak.webp",
  ];

  const sampleTwo = [
    "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484733/Rivals/Venom_Icon_mwro7g.webp",
    "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484729/Rivals/Groot_Icon_udutn9.webp",
    "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484730/Rivals/Namor_Icon_ri6epi.webp",
    "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484728/Rivals/Hela_Icon_kvrhsp.webp",
    "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484730/Rivals/Luna_Snow_Icon_snupak.webp",
    "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484730/Rivals/Loki_Icon_tysbig.webp",
  ];

  return (
    <div className="w-full px-3 md:px-0 md:w-[1200px] mx-auto pb-[150px]">
      <div className="hidden md:block rounded-xl border border-neutral-700 bg-[#2E2E42] p-5 mt-5">
        <div className="flex items-center justify-between px-[100px]">
          <section className="w-[40%]">
            <p className="text-xl text-neutral-200 mb-3 mt-5 font-semibold">
              Want to destroy your enemies' lineup? Find the perfect hero
              counters!
            </p>
            <button
              className="bg-transparent min-w-[100px] min-h-[40px] flex items-center justify-center text-neutral-200 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded"
              onClick={() => router.push("/generate-team-counters")}
            >
              Go to this page
            </button>
          </section>
          <section>
            <div className="flex flex-col items-center gap-10">
              <div>
                <p className="text-neutral-200 mb-1 font-medium">
                  Your opponents' lineup:
                </p>
                <div className="flex items-center gap-2">
                  {sampleOne.map((item: any, idx: number) => (
                    <Image
                      src={item}
                      key={idx}
                      width={50}
                      height={50}
                      alt="Test"
                    />
                  ))}
                </div>
              </div>
              <div>
                <p className="text-green-300 mb-1 font-medium">
                  Suggested team to counter them:
                </p>
                <div className="flex items-center gap-2">
                  {sampleTwo.map((item: any, idx: number) => (
                    <Image
                      src={item}
                      key={idx}
                      width={50}
                      height={50}
                      alt="Test"
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <header className="pt-[40px] md:pt-[100px] relative">
        <h1 className="text-2xl md:text-3xl text-neutral-100 relative px-[0px] md:px-[300px] font-black text-center">
          Select a Hero To Counter
        </h1>
      </header>

      {/* new */}
      <section className="mt-[40px] md:mt-[100px]">
        <div className="flex flex-col md:flex-row gap-5 justify-between items-center mb-5 px-2">
          <p className="text-center mt-4 text-neutral-200 font-semibold">
            Updated meta as of {new Date().toDateString()} - Season 1
          </p>
          <div className="flex flex-col md:flex-row items-center gap-5">
            <div className="flex flex-row items-center gap-5">
              {filters.map((filter: any, idx: any) => (
                <div
                  onClick={() => {
                    setFilter(filter.category);
                  }}
                  className={`${
                    filter.active ? "text-white font-bold" : "text-neutral-400"
                  } text-xs lg:text-[14px] cursor-pointer`}
                  key={idx}
                >
                  {filter.category}
                </div>
              ))}
            </div>
            {/* <AutoComplete
              placeholder="Select a filter"
              onChange={(item: any) => setSelectedHeroCategory(item)}
              value={selectedHeroCategory}
              items={filters}
            /> */}
            {/* <AutoComplete
              placeholder="Select a filter"
              onChange={(item: any) => setTierFilter(item)}
              value={tierFilter}
              items={tierFilters}
            /> */}
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row md:flex-wrap gap-5">
          <div className="w-full flex flex-row items-center justify-center flex-wrap gap-6 md:gap-9">
            {searchResults.map((hero: any, index: number) => (
              <div
                onClick={() => setSelectedHero(hero)}
                key={index}
                className="w-[27%] md:w-[14%] hover:opacity-50 pt-6 cursor-pointer overflow-hidden relative bg-gradient-to-b from-neutral-200 via-neutral-300 to-neutral-600 transform -skew-y-3"
              >
                <div className="transform skew-y-3 h-full">
                  <div className="m-auto -mt-8">
                    <Image
                      src={hero?.tallImage}
                      alt={hero.name}
                      unoptimized
                      width={250}
                      height={400}
                      className="rounded-md m-auto"
                    />
                  </div>
                  <div className="bg-[#1B1B29] w-full h-full py-2 absolute opacity-85 -mt-[75px]">
                    <div className="px-3">
                      <h2 className="capitalize font-bold text-white text-[18px] m-0 p-0">
                        {hero.name}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {selectedHero && (
          <CounterModal
            hero={selectedHero}
            onClose={() => {
              window.history.pushState(null, "", `/`);
              setSelectedHero(null);
            }}
          />
        )}
      </section>
    </div>
  );
}
