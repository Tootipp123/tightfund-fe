"use client";

import DraftAssistant from "@/components/features/DraftAssistant";
import Navbar from "@/components/features/Navbar";
import { HERO_COUNTERS } from "@/utils/static";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineRead } from "react-icons/ai";
import { VscChromeClose } from "react-icons/vsc";

import DuelistIcon from "@/assets/Duelist_Icon.webp";
import StrategistIcon from "@/assets/Strategist_Icon.webp";
import VanguardIcon from "@/assets/Vanguard_Icon.webp";
import Button from "@/components/ui/Button";

export default function TeamCompCountersPage() {
  const [searchResults, setSearchResults] = useState(HERO_COUNTERS);
  const [selectedHeroes, setSelectedHeroes] = useState<any>([]);
  const [counterHeroes, setCounterHeroes] = useState<any>([]);
  const [threeStratComp, setThreeStratComp] = useState<any>([]);
  const [threeDuelTeam, setThreeDuelTeam] = useState<any>([]);

  const toggleHeroSelection = (hero: any) => {
    setSelectedHeroes((prevSelected: any) => {
      const isAlreadySelected = prevSelected.some(
        (h: any) => h.name === hero.name
      );

      if (isAlreadySelected) {
        // Remove hero if already in the list
        return prevSelected.filter((h: any) => h.name !== hero.name);
      } else {
        // Add hero if not in the list
        return [...prevSelected, hero];
      }
    });
  };

  const GeneratedCounters = ({ heroes, title }: any) => {
    return (
      <div className="border border-neutral-700 rounded-lg p-5 w-fit">
        <div className="flex justify-between items-center">
          <h4 className="text-neutral-200 font-semibold text-lg mb-3">
            {title} team comp
          </h4>
          <Button variant="secondary">
            <AiOutlineRead className="mr-1" />
            Read Description
          </Button>
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

  const groupedHeroes = searchResults.reduce((acc: any, hero: any) => {
    if (!acc[hero.role]) {
      acc[hero.role] = [];
    }
    acc[hero.role].push(hero);
    return acc;
  }, {});

  return (
    <div>
      <Navbar />
      <main className="bg-[#1B1B29] min-h-[100vh]">
        <div className="w-full px-3 md:px-0 flex md:w-[1450px] mx-auto pb-[150px]">
          <div
            id="hero-sidebar"
            className="w-fit h-[100vh] overflow-y-auto overflow-x-hidden p-5 sticky top-0"
          >
            <div>
              <h4 className="text-neutral-200 font-medium mb-2">
                Select heroes
              </h4>
              <input
                type="text"
                placeholder="Search a hero"
                className="rounded-md p-2 w-full bg-[#2e2e42] text-neutral-200"
              />
            </div>
            <div className="w-full overflow-y-auto overflow-x-hidden mt-4">
              {Object.entries(groupedHeroes).map(([role, heroes]: any) => (
                <div key={role} className="w-full">
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
                      alt="Vanguard Icon"
                      width={35}
                      height={35}
                      className="m-auto"
                    />
                  </h4>
                  <div className="flex flex-wrap w-[260px]">
                    {heroes.map((hero: any, index: number) => (
                      <div
                        key={index}
                        onClick={() => toggleHeroSelection(hero)}
                        className="hover:opacity-50 cursor-pointer relative p-2 rounded-md"
                      >
                        <div className="w-[70px] h-[90px] overflow-hidden bg-[#12121c] shadow-[0_0_3px_3px_#12121c] rounded-md">
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
              ))}
            </div>
          </div>

          {/* //BODY */}
          <section className="w-full">
            <div className="px-[60px] py-[30px] w-full border-b border-neutral-700 ">
              <div className="w-full flex flex-row flex-wrap gap-6 md:gap-6">
                {selectedHeroes.map((hero: any, index: number) => (
                  <div key={index} className="w-[27%] md:w-[70px] relative">
                    <div className="w-[20px] h-[20px] rounded-full flex justify-center bg-neutral-400 absolute right-0 -mt-3 -mr-2">
                      <VscChromeClose className="m-auto text-black" />
                    </div>
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

              {selectedHeroes.length >= 6 && (
                <DraftAssistant
                  enemyLineup={selectedHeroes}
                  setCounterHeroes={setCounterHeroes}
                  setThreeStratComp={setThreeStratComp}
                  setThreeDuelTeam={setThreeDuelTeam}
                />
              )}
            </div>

            <div className="px-[60px] py-[30px] w-full">
              <h2 className="text-xl text-white font-semibold mb-4">
                Best Counter Picks:
              </h2>
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
          </section>
        </div>

        {/* <ReadDescriptionModal /> */}
      </main>
    </div>
  );
}
