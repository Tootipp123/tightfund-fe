"use client";

import DraftAssistant from "@/components/features/DraftAssistant";
import { HERO_COUNTERS } from "@/utils/static";
import Image from "next/image";
import { useMemo, useState } from "react";
import { FaRegHandPointLeft } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { VscChromeClose } from "react-icons/vsc";

import DuelistIcon from "@/assets/Duelist_Icon.webp";
import StrategistIcon from "@/assets/Strategist_Icon.webp";
import VanguardIcon from "@/assets/Vanguard_Icon.webp";
import Navbar from "@/components/features/Navbar";

export default function TeamCompCountersPage() {
  const [selectedHeroes, setSelectedHeroes] = useState<any>([]);
  const [counterHeroes, setCounterHeroes] = useState<any>([]);
  const [threeStratComp, setThreeStratComp] = useState<any>([]);
  const [threeDuelTeam, setThreeDuelTeam] = useState<any>([]);
  const [searchHero, setSearchHero] = useState("");

  // Filter heroes based on search term
  const filteredHeroes = useMemo(() => {
    if (!searchHero) return HERO_COUNTERS;
    const searchTerm = searchHero.toLowerCase();
    return HERO_COUNTERS.filter(
      (hero) =>
        hero.name.toLowerCase().includes(searchTerm) ||
        hero.role.toLowerCase().includes(searchTerm)
    );
  }, [searchHero]);

  // Group filtered heroes by role
  const groupedHeroes = useMemo(() => {
    return filteredHeroes.reduce((acc: any, hero: any) => {
      if (!acc[hero.role]) {
        acc[hero.role] = [];
      }
      acc[hero.role].push(hero);
      return acc;
    }, {});
  }, [filteredHeroes]);

  const toggleHeroSelection = (hero: any) => {
    setSelectedHeroes((prevSelected: any) => {
      const isAlreadySelected = prevSelected.some(
        (h: any) => h.name === hero.name
      );

      if (isAlreadySelected) {
        return prevSelected.filter((h: any) => h.name !== hero.name);
      } else {
        return [...prevSelected, hero];
      }
    });
  };

  const GeneratedCounters = ({ heroes, title }: any) => {
    const winPercentage = (Math.random() * 10 + 75).toFixed(1);

    return (
      <div className="bg-[#2e2e42] rounded-lg p-5 w-fit">
        <div className="flex justify-between items-center">
          <h4 className="text-neutral-200 font-semibold text-lg mb-3">
            {title} team comp
          </h4>
          {/* <Button variant="secondary">
            <AiOutlineRead className="mr-1" />
            Read Description
          </Button> */}
          {/* <p className="text-green-500 opacity-60 text-sm">
            % chance to win (coming soon)
          </p> */}
        </div>
        <div className="w-full mt-5 flex flex-row items-center justify-center flex-wrap gap-6 md:gap-6">
          {heroes?.map((hero: any, index: number) => (
            <div key={index} className="w-[27%] md:w-[70px]">
              <div className="h-full">
                <div className="m-auto">
                  <Image
                    src={hero?.image}
                    alt={hero.name}
                    unoptimized
                    width={150}
                    height={150}
                    className="rounded-md m-auto"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="bg-[#1B1B29] flex-1 overflow-hidden">
        <div className="w-full px-3 md:px-0 flex md:w-[1450px] mx-auto">
          {/* Sticky Sidebar */}
          <div
            id="hero-sidebar"
            className="w-[380px] h-[calc(100vh-80px)] overflow-y-auto overflow-x-hidden px-5 pb-5 sticky top-[80px] left-0"
          >
            <div className="sticky top-0 bg-[#1b1b29] z-[10] pt-5 pb-3">
              {/* <h4 className="text-neutral-200 font-medium mb-2">
                Select heroes
              </h4> */}
              <input
                type="text"
                placeholder="Search a hero"
                className="rounded-md p-2 w-full bg-[#2e2e42] text-neutral-200"
                value={searchHero}
                onChange={(e) => setSearchHero(e.target.value)}
              />
            </div>
            <div className="w-full overflow-y-auto overflow-x-hidden mt-4">
              {Object.keys(groupedHeroes).length > 0 ? (
                Object.entries(groupedHeroes).map(([role, heroes]: any) => (
                  <div key={role} className="w-full mb-6">
                    <h4 className="text-neutral-200 font-semibold text-lg mb-3 text-center">
                      <Image
                        src={
                          role === "Vanguard"
                            ? VanguardIcon
                            : role === "Duelist"
                            ? DuelistIcon
                            : role === "Strategist"
                            ? StrategistIcon
                            : ""
                        }
                        alt={`${role} Icon`}
                        width={35}
                        height={35}
                        className="m-auto"
                      />
                    </h4>
                    <div className="flex items-center justify-center flex-wrap w-full">
                      {heroes.map((hero: any, index: number) => (
                        <div
                          key={index}
                          onClick={() => {
                            if (selectedHeroes.length >= 6) {
                              return;
                            }
                            toggleHeroSelection(hero);
                          }}
                          className={`hover:opacity-50 cursor-pointer relative p-2 rounded-md ${
                            selectedHeroes.some(
                              (h: any) => h.name === hero.name
                            )
                              ? "ring-2 ring-blue-500"
                              : ""
                          }`}
                        >
                          <div
                            className={`w-[80px] h-[100px] overflow-hidden bg-[#12121c] shadow-[0_0_3px_3px_#12121c] rounded-md `}
                          >
                            <Image
                              src={hero?.tallImage}
                              alt={hero.name}
                              unoptimized
                              width={150}
                              height={150}
                              className="rounded-md mx-auto"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-neutral-400 text-center mt-8">
                  No heroes found matching your search
                </p>
              )}
            </div>
          </div>

          {/* Main Content */}
          <section className="flex-1 overflow-y-auto h-[calc(100vh-80px)]">
            <div className="px-[60px] py-[30px] w-full border-b border-neutral-700">
              <div className="w-full flex flex-row flex-wrap gap-6 md:gap-6">
                {selectedHeroes.map((hero: any, index: number) => (
                  <div key={index} className="w-[27%] md:w-[70px] relative">
                    <button
                      onClick={() => {
                        toggleHeroSelection(hero);
                      }}
                      className="w-[20px] h-[20px] rounded-full flex justify-center bg-neutral-400 absolute right-0 -mt-3 -mr-2 hover:bg-neutral-300"
                    >
                      <VscChromeClose className="m-auto text-black text-xs" />
                    </button>
                    <div className="h-full">
                      <div className="m-auto">
                        <Image
                          src={hero?.image}
                          alt={hero.name}
                          unoptimized
                          width={150}
                          height={150}
                          className="rounded-md m-auto"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {selectedHeroes.length <= 0 && (
                <div className="flex items-center gap-3 mt-4">
                  <FaRegHandPointLeft className="text-white text-lg" />
                  <p className="text-neutral-300">Select 6 heroes to proceed</p>
                </div>
              )}
              <div className="flex items-center gap-3">
                {selectedHeroes.length >= 6 && (
                  <DraftAssistant
                    enemyLineup={selectedHeroes}
                    setCounterHeroes={setCounterHeroes}
                    setThreeStratComp={setThreeStratComp}
                    setThreeDuelTeam={setThreeDuelTeam}
                  />
                )}
                {selectedHeroes.length > 0 && (
                  <button
                    className="border-neutral-700 border mt-5 min-w-[100px] min-h-[40px] flex items-center justify-center text-neutral-200 text-white font-semibold py-2 px-0 rounded"
                    onClick={() => {
                      setSelectedHeroes([]);
                      setCounterHeroes([]);
                      setThreeStratComp([]);
                      setThreeDuelTeam([]);
                    }}
                  >
                    <IoIosClose className="text-neutral-300 text-2xl mr-1" />
                    Clear
                  </button>
                )}
              </div>
            </div>

            <div className="px-[60px] py-[30px] w-full">
              <h2 className="text-xl text-white font-semibold mb-4">
                Best Counter Picks:
              </h2>
              <div className="flex flex-col gap-y-5">
                {counterHeroes.length > 0 && (
                  <GeneratedCounters heroes={counterHeroes} title="2-2-2" />
                )}
                {threeStratComp.length > 0 && (
                  <GeneratedCounters heroes={threeStratComp} title="1-2-3" />
                )}
                {threeDuelTeam.length > 0 && (
                  <GeneratedCounters heroes={threeDuelTeam} title="1-3-2" />
                )}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
