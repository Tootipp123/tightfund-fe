import DuelistIcon from "@/assets/Duelist_Icon.webp";
import StrategistIcon from "@/assets/Strategist_Icon.webp";
import VanguardIcon from "@/assets/Vanguard_Icon.webp";
import Image from "next/image";

export const HeroSelection = ({
  searchHero,
  setSearchHero,
  groupedHeroes,
  selectedHeroes,
  toggleHeroSelection,
}: any) => {
  return (
    <div
      id="hero-sidebar"
      className="fixed lg:sticky bg-[#1B1B29] lg:w-[380px] h-[calc(100vh-80px)] overflow-y-auto overflow-x-hidden px-0 lg:px-5 pb-5 top-[80px] left-0"
    >
      <div className="sticky top-0 bg-[#1b1b29] z-[10] px-4 lg:px-0 lg:pt-5 pb-3">
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
                      selectedHeroes.some((h: any) => h.name === hero.name)
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
  );
};
