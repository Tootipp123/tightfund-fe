"use client";

import DraftAssistant from "@/components/features/DraftAssistant";
import Footer from "@/components/features/Footer";
import Navbar from "@/components/features/Navbar";
import { HERO_COUNTERS } from "@/utils/static";
import Image from "next/image";
import { useState } from "react";

export default function TeamCompCountersPage() {
  const [searchResults, setSearchResults] = useState(HERO_COUNTERS);
  const [selectedHeroes, setSelectedHeroes] = useState<any>([]);
  const [counterHeroes, setCounterHeroes] = useState<any>([]);

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
  return (
    <div>
      {selectedHeroes.length >= 6 && (
        <DraftAssistant
          enemyLineup={selectedHeroes}
          setCounterHeroes={setCounterHeroes}
        />
      )}
      <Navbar />
      <main className="bg-[#1B1B29] min-h-[100vh]">
        <div className="w-full flex px-3 md:px-0 md:w-[1200px] mx-auto pb-[150px]">
          <div
            id="hero-sidebar"
            className="w-[140px] h-[100vh] overflow-hidden"
          >
            <div className="w-full h-[90vh] overflow-auto">
              {searchResults.map((hero: any, index: number) => (
                <div
                  onClick={() => toggleHeroSelection(hero)}
                  key={index}
                  className="md:w-full hover:opacity-50 mb-2 cursor-pointer overflow-hidden relative bg-gradient-to-b from-neutral-200 via-neutral-300 to-neutral-600"
                >
                  <div className="transform h-full">
                    <div className="m-auto w-full h-[100px]">
                      <Image
                        src={hero?.tallImage}
                        alt={hero.name}
                        unoptimized
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md mx-auto"
                      />
                    </div>
                  </div>
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
            </div>
            <div className="py-[50px]">
              <h4 className="text-neutral-200 font-semibold text-lg mb-3">
                Best 2-2-2 counters:
              </h4>
              <div className="w-full flex flex-row items-center justify-center flex-wrap gap-6 md:gap-6">
                {counterHeroes.map((hero: any, index: number) => (
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
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
