"use client";

import DraftAssistant from "@/components/features/DraftAssistant";
import { HERO_COUNTERS } from "@/utils/static";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { FaRegHandPointLeft } from "react-icons/fa";
import { IoIosClose, IoMdMenu } from "react-icons/io";
import { VscChromeClose } from "react-icons/vsc";

import { createGuestApi } from "@/api/Guest";
import { getFreeGenerateTriesCount } from "@/api/Profile";
import { HeroSelection } from "@/components/features/HeroSelection";
import Navbar from "@/components/features/Navbar";
import { useUserStore } from "@/store/User";
import { useRouter } from "next/navigation";
import { useQuery } from "react-query";

export default function TeamCompCountersPage() {
  const router = useRouter();
  const { isMember } = useUserStore();
  const [selectedHeroes, setSelectedHeroes] = useState<any>([]);
  const [counterHeroes, setCounterHeroes] = useState<any>([]);
  const [threeStratComp, setThreeStratComp] = useState<any>([]);
  const [threeDuelTeam, setThreeDuelTeam] = useState<any>([]);
  const [searchHero, setSearchHero] = useState("");
  const [isHeroModalOpen, setIsHeroModalOpen] = useState(false);

  const [limitCount, setLimitCount] = useState<number | null>(null);

  const { isLoading: isLoadingGetFreeTries } = useQuery({
    queryKey: ["getFreeGenerateTriesCount"],
    queryFn: getFreeGenerateTriesCount,
    staleTime: 0,
    refetchOnMount: true,
    onSuccess: (data) => {
      localStorage.setItem("draftLimitCount", data.freeTeamCounterTriesCount);
      setLimitCount(data.freeTeamCounterTriesCount);
    },
  });

  // Initialize limit count from localStorage
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      router.push("/signin");
    }
  }, []);

  // Update localStorage when limitCount changes
  useEffect(() => {
    if (limitCount !== null) {
      localStorage.setItem("draftLimitCount", limitCount.toString());
    }
  }, [limitCount]);

  const handleGuestVisitPage = async () => {
    try {
      await createGuestApi(
        localStorage.getItem("guestId"),
        "GUEST_VISITS_GENERATE_TEAM_COUNTER_PAGE"
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleGuestVisitPage();
  }, []);

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

  const toggleHeroSelection = useCallback((hero: any) => {
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
  }, []);

  const GeneratedCounters = ({ heroes, title }: any) => {
    return (
      <div className="bg-[#2e2e42] rounded-lg p-5 w-fit">
        <div className="flex justify-between items-center relative">
          <h4 className="text-neutral-200 font-semibold text-lg mb-3">
            {title} team comp
          </h4>
          <div className="flex items-center gap-2">
            {/* <ContentDescription
              enemyLineup={selectedHeroes}
              counterHeroes={heroes}
            /> */}
            {/* <p className="text-green-500 opacity-60 text-sm">
              {winPercentage}% win probability
            </p> */}
            {/* <div className="group relative flex items-center">
              <MdInfoOutline className="text-neutral-400 hover:text-white cursor-pointer" />
              <div className="absolute hidden group-hover:block left-full ml-2 w-64 p-3 bg-[#2e2e42] text-xs text-neutral-200 rounded shadow-lg z-10">
                This percentage is calculated based on:
                <ul className="list-disc pl-4 mt-1 space-y-1">
                  <li>Average win rates against each enemy hero</li>
                  <li>Strength scores of counter matchups</li>
                  <li>Current meta effectiveness</li>
                </ul>
                <p className="mt-2 italic text-neutral-400">
                  Note: Percentages may adjust periodically as we refine our
                  calculations.
                </p>
              </div>
            </div> */}
          </div>
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
          <div className="hidden lg:block">
            <HeroSelection
              searchHero={searchHero}
              setSearchHero={setSearchHero}
              groupedHeroes={groupedHeroes}
              selectedHeroes={selectedHeroes}
              toggleHeroSelection={toggleHeroSelection}
            />
          </div>

          {isHeroModalOpen && (
            <>
              {/* Overlay */}
              <div
                className="fixed inset-0 bg-black bg-opacity-50 z-[998]"
                onClick={() => setIsHeroModalOpen(false)}
              />

              {/* Modal */}
              <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[90%] h-full bg-[#1B1B29] z-[999] rounded-lg overflow-y-auto">
                <div className="flex justify-end p-4">
                  <button
                    onClick={() => setIsHeroModalOpen(false)}
                    className="text-white text-2xl"
                  >
                    <VscChromeClose />
                  </button>
                </div>
                <HeroSelection
                  searchHero={searchHero}
                  setSearchHero={setSearchHero}
                  groupedHeroes={groupedHeroes}
                  selectedHeroes={selectedHeroes}
                  toggleHeroSelection={toggleHeroSelection}
                />
              </div>
            </>
          )}

          {/* Main Content */}
          <section className="flex-1 overflow-y-auto h-[calc(100vh-80px)]">
            <div className="lg:px-[60px] py-[30px] w-full border-b border-neutral-700">
              <button
                onClick={() => setIsHeroModalOpen(true)}
                className="border block lg:hidden mb-5 rounded-md p-2 border-neutral-600 flex items-center gap-2 shadow-md"
              >
                <IoMdMenu className="text-neutral-300" />
                <p className="text-neutral-300">Select Heroes</p>
              </button>
              <div className="w-full flex flex-row flex-wrap gap-6 md:gap-6">
                {selectedHeroes.map((hero: any, index: number) => (
                  <div key={index} className="w-[27%] md:w-[70px] relative">
                    <button
                      onClick={() => {
                        toggleHeroSelection(hero);
                        setCounterHeroes([]);
                        setThreeStratComp([]);
                        setThreeDuelTeam([]);
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
              <div className="mt-5">
                {!isMember && limitCount !== null && limitCount <= 0 && (
                  <p className="text-neutral-300 text-sm mb-2">
                    You've used all free attempts
                  </p>
                )}
                <div className="flex items-center gap-3">
                  {isLoadingGetFreeTries ? (
                    <p className="text-neutral-200">Loading...</p>
                  ) : (
                    <DraftAssistant
                      enemyLineup={selectedHeroes}
                      setCounterHeroes={setCounterHeroes}
                      setThreeStratComp={setThreeStratComp}
                      setThreeDuelTeam={setThreeDuelTeam}
                      limitCount={limitCount}
                      setLimitCount={setLimitCount}
                    />
                  )}
                  {selectedHeroes.length > 0 && (
                    <button
                      className="border-neutral-700 border min-w-[100px] min-h-[40px] flex items-center justify-center text-neutral-200 text-white font-semibold py-2 px-0 rounded"
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
            </div>

            <div className="lg:px-[60px] py-[30px] w-full">
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
