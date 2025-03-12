"use client";

import DraftAssistant from "@/components/features/DraftAssistant";
import Footer from "@/components/features/Footer";
import Navbar from "@/components/features/Navbar";
import { HERO_COUNTERS } from "@/utils/static";
import Image from "next/image";
import { useEffect, useState } from "react";

import DuelistIcon from "@/assets/Duelist_Icon.webp";
import StrategistIcon from "@/assets/Strategist_Icon.webp";
import VanguardIcon from "@/assets/Vanguard_Icon.webp";

export default function TeamCompCountersPage() {
  const [searchResults, setSearchResults] = useState(HERO_COUNTERS);
  const [selectedHeroes, setSelectedHeroes] = useState<any>([]);
  const [counterHeroes, setCounterHeroes] = useState<any>([]);
  const [threeStratComp, setThreeStratComp] = useState<any>([]);

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

  const GeneratedCounters = ({ heroes }: any) => {
    console.log("heroes: ", heroes);
    return (
      <div className="py-[50px]">
        <h4 className="text-neutral-200 font-semibold text-lg mb-3">
          Best 2-2-2 counters:
        </h4>
        <div className="w-full flex flex-row items-center justify-center flex-wrap gap-6 md:gap-6">
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

  useEffect(() => {
    console.log("counterHeroes: ", counterHeroes);
  }, [counterHeroes]);

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
            className="w-fit h-[100vh] overflow-y-auto overflow-x-hidden p-5"
          >
            <div>
              <h4 className="text-neutral-200 font-medium mb-2">
                Select heroes
              </h4>
              <input
                type="text"
                placeholder="Search a hero"
                className="rounded-md p-2 w-full bg-[#12121c] text-neutral-200"
              />
            </div>
            <div className="w-full flex overflow-y-auto overflow-x-hidden mt-4">
              {Object.entries(groupedHeroes).map(([role, heroes]: any) => (
                <div key={role} className="flex flex-col w-full">
                  <h4 className="text-neutral-200 font-semibold text-lg mb-3 text-center">
                    {role === "Vanguard" ? (
                      <Image
                        src={VanguardIcon}
                        alt="Vanguard Icon"
                        width={35}
                        height={35}
                        className="m-auto"
                      />
                    ) : role === "Duelist" ? (
                      <Image
                        src={DuelistIcon}
                        alt="Duelist Icon"
                        width={35}
                        height={35}
                        className="m-auto"
                      />
                    ) : (
                      role === "Strategist" && (
                        <Image
                          src={StrategistIcon}
                          alt="Strategist Icon"
                          width={35}
                          height={35}
                          className="m-auto"
                        />
                      )
                    )}
                  </h4>
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
              ))}
            </div>
          </div>

          {/* //BODY */}
          <section className="p-[100px]">
            <div>
              <h4 className="text-neutral-200 font-semibold text-lg mb-3">
                Team to counter:
              </h4>
              <div className="w-full flex flex-row flex-wrap gap-6 md:gap-6">
                {selectedHeroes.map((hero: any, index: number) => (
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
              {selectedHeroes.length >= 6 && (
                <DraftAssistant
                  enemyLineup={selectedHeroes}
                  setCounterHeroes={setCounterHeroes}
                  setThreeStratComp={setThreeStratComp}
                />
              )}
            </div>
            {counterHeroes.length && (
              <GeneratedCounters heroes={counterHeroes} />
            )}
            {threeStratComp.length && (
              <GeneratedCounters heroes={threeStratComp} />
            )}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
