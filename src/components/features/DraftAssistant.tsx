"use client";
import { HERO_COUNTERS } from "@/utils/static";
import { useEffect, useState } from "react";

export default function DraftAssistant({
  enemyLineup,
  setCounterHeroes,
  setThreeStratComp,
}: any) {
  // REQUIREMENTS:
  // input 6 heroes
  // input 4 bans
  // input game mode or if convoy defense or offense

  // OUTPUT:
  // give percentage on how high the suggested lineup can win against the enemy lineup.
  // give detailed explanation on the lineup.

  // STRATEGISTS:
  // main problem, flanker
  // logic to read which strategists can counter a flanker
  // logic to read which 1 duelist can counter a flanker
  // logic to read if the enemy team has only 1 defensive ult and you need more ult to have an advantage.

  // TANK:
  // logic to read which tank can counter the other. assess if you need the following:
  // - 2 tanks defender + diver
  // - 2 tanks diver + diver
  // - 2 tanks defender + defender
  // - 1 tank defender
  // - 1 tank diver
  // else if the enemy team has a diver or flanker, which tank to choose to defend it.
  // else if logic to read if you need a tank that must dive like Venom or Hulk

  // DUELIST:
  // find the enemy duelists and give counters to them.
  // find the enemy strategists and give counters to them. assess if you need the following:
  // if 2 duelists,
  // - 2 duels Flank + range
  // - 2 duels range + range
  // - 2 duels Flank + flank
  // - 1 duel Flank only
  // - 1 duel Range only
  // find the enemy tanks and give counters to them.
  // logic to read if the enemy team needs to be flanked

  // META TEAMCOMP ASSESSMENT (LAST PART OF THE LOGIC):
  // 1. assess if enemy team has 3 healers and counter it.
  const [strategists, setStrategists] = useState<any>([]);

  // Vanguard
  const [mostFrequentVanguard, setMostFrequentVanguard] = useState<any>({});
  const [secondFrequentVanguard, setSecondFrequentVanguard] = useState<any>({});

  const [mostFrequentDuelist, setMostFrequentDuelist] = useState<any>({});
  const [secondFrequentDuelist, setSecondFrequentDuelist] = useState<any>({});

  useEffect(() => {
    const vanguards = initCounters("Vanguard");
    const duelists = initCounters("Duelist");
    const strategists = initStrategists();

    setStrategists(strategists);
    handleCountersForDuelsAndVanguards();

    // const filteredDuelists = handleFilterDuelists(duelists);
    // const bestDuelistsForEnemyStrats = ThreeStrategistComp(filteredDuelists);
    // const bestVanguardsForEnemyStrats = ThreeStrategistComp(vanguards);
    // - After getting the best duels and vanguards to counter 3 healers,
    // - Choose the remaining slot to the available duelists and vanguards state
    // }
  }, [enemyLineup]);

  // init best counters to counter all enemy team
  const initCounters = (role: string) => {
    let allCounters: any = [];

    if (role !== "Strategist") {
      allCounters = enemyLineup.flatMap((hero: any) =>
        (hero.counterPicks || []).filter((cp: any) => cp.role === role)
      );
    } else {
      const duelsAndVanguard = enemyLineup.filter(
        (h: any) => h.role === "Duelist" || h.role === "Vanguard"
      );
      allCounters = duelsAndVanguard.flatMap((hero: any) =>
        (hero.counterPicks || []).filter((cp: any) => cp.role === role)
      );
    }

    return allCounters;
  };

  // strategists dont have 1 on 1 mechanics on the enemy team strategist so the logic is slightly different.
  const initStrategists = () => {
    if (enemyHasFlankers()) {
      const strategistsToCounterFlank = HERO_COUNTERS.filter(
        (h: any) =>
          h.name === "Loki" ||
          h.name === "Invisible Woman" ||
          h.name === "Cloak & Dagger" ||
          h.name === "Mantis"
      );
      return strategistsToCounterFlank;
    } else {
      // Step 2: Return all strategists that counters the enemy team Duelist or Tank
      const stratCounters = initCounters("Strategist");
      return stratCounters;
    }
  };

  // if there are 2 auto aim heroes in the enemy team like Hawkeye, Hela
  // Remove flying DPS heroes
  const handleFilterDuelists = (duelists: any) => {
    const aimHeroes = enemyLineup.filter(
      (h: any) =>
        h.name === "Hawkeye" ||
        h.name === "Black Widow" ||
        h.name === "Hela" ||
        h.name === "Namor" ||
        h.name === "The Punisher" ||
        h.name === "Psylocke"
    );

    // Return true if there are two or more matches, false otherwise
    const result = aimHeroes.length >= 2;

    if (result) {
      const filteredDuelists = duelists.filter(
        (hero: any) =>
          hero.name !== "Iron Man" &&
          hero.name !== "Storm" &&
          hero.name !== "Human Torch"
      );
      return filteredDuelists;
    }
    return duelists;
  };

  const handleCountersForDuelsAndVanguards = () => {
    const selectedDuelists: any = enemyLineup.filter(
      (hero: any) => hero.role === "Duelist"
    );
    const selectedVanguards: any = enemyLineup.filter(
      (hero: any) => hero.role === "Vanguard"
    );
    const duelistCounterPicks = selectedDuelists.flatMap((hero: any) =>
      hero.counterPicks.filter((cp: any) => cp.role === "Duelist")
    );
    const vanguardCounterPicks = selectedVanguards.flatMap((hero: any) =>
      hero.counterPicks.filter((cp: any) => cp.role === "Duelist")
    );
    const vanguardToVanguardCounterPicks = selectedVanguards.flatMap(
      (hero: any) =>
        hero.counterPicks.filter((cp: any) => cp.role === "Vanguard")
    );
    const vanguardToDuelistCounterPicks = selectedDuelists.flatMap(
      (hero: any) =>
        hero.counterPicks.filter((cp: any) => cp.role === "Vanguard")
    );

    const filteredDuelistsCounters = handleFilterDuelists(duelistCounterPicks);
    const filteredVanguardCounters = handleFilterDuelists(vanguardCounterPicks);

    const combinedVanguardCounters = [
      ...vanguardToVanguardCounterPicks,
      ...vanguardToDuelistCounterPicks,
    ];

    const { mostFrequent: mainVanguard, secondFrequent: secondaryVanguard } =
      useFrequentHeroChecker(combinedVanguardCounters);

    // setDuelistForDuelist(mainDuelistCounter);
    // setDuelistForVanguard(mainVanguardCounter);

    const combinedDuelistAndVangCounters = [
      ...filteredDuelistsCounters,
      ...filteredVanguardCounters,
    ];
    const {
      mostFrequent: mostFrqntDuelist,
      secondFrequent: secondFrqntDuelist,
    } = useFrequentHeroChecker(combinedDuelistAndVangCounters);

    setMostFrequentDuelist(mostFrqntDuelist);
    setSecondFrequentDuelist(secondFrqntDuelist);
    setMostFrequentVanguard(mainVanguard);
    setSecondFrequentVanguard(secondaryVanguard);
  };

  // @TASK:
  // Check if enemy has flanker
  // 1. Check if this lineup is good: Loki, Namor, Luna
  // 2. Check if this lineup is good: Warlock, Starlord, Mantis
  // const ThreeStrategistComp = (counterList: any) => {
  //   const counterHeroesForThreeStrats = [
  //     "Groot",
  //     "Venom",
  //     "Magneto",
  //     "Scarlet Witch",
  //     "Moon Knight",
  //     "Hawkeye",
  //     "Squirrel Girl",
  //     "Namor",
  //   ];

  //   // check which duelist or vanguard available is best against 3 supports
  //   const enemyStrats = enemyLineup.filter((e: any) => e.role === "Strategist");
  //   const countersToStrats = enemyStrats.flatMap((strat: any) =>
  //     strat.counterPicks.filter((counter: any) =>
  //       counterList.some((hero: any) => hero.name === counter.name)
  //     )
  //   );

  //   const filteredCountersToStrats = countersToStrats.filter((h: any) =>
  //     counterHeroesForThreeStrats.includes(h.name)
  //   );

  //   if (countersToStrats.length > 0) {
  //     return filteredCountersToStrats.length > 0
  //       ? filteredCountersToStrats
  //       : countersToStrats;
  //   }
  //   return [];
  // };

  const isThreeStratCompGood = () => {
    const duelistCount = enemyLineup.filter(
      (hero: any) => hero.role === "Duelist"
    ).length;

    const haveAntiThreeStratHero = enemyLineup.some(
      (hero: any) =>
        hero.name === "Captain America" ||
        hero.name === "Venom" ||
        hero.name === "Hulk" ||
        hero.name === "Groot" ||
        hero.name === "Hawkeye" ||
        hero.name === "Psylocke" ||
        hero.name === "Hela" ||
        hero.name === "Moon Knight"
    );

    return duelistCount === 1 && !haveAntiThreeStratHero;
  };

  const isThreeDuelCompGood = () => {
    const haveWolverine = enemyLineup.some(
      (hero: any) => hero.name === "Wolverine"
    );

    return haveWolverine;
  };

  const constructFinalCounterComp = () => {
    const {
      mostFrequent: mainStrategist,
      secondFrequent: secondaryStrategist,
    } = useFrequentHeroChecker(strategists);

    let team = [];
    if (enemyHasVanguard()) {
      team = [
        mostFrequentVanguard,
        secondFrequentVanguard,
        mostFrequentDuelist,
        secondFrequentDuelist,
        mainStrategist,
        secondaryStrategist ??
          getRandomStrategist(mainStrategist, secondaryStrategist),
      ];
    } else {
      team = [
        mostFrequentVanguard,
        secondFrequentVanguard,
        mostFrequentDuelist,
        secondFrequentDuelist,
        mainStrategist,
        secondaryStrategist ??
          getRandomStrategist(mainStrategist, secondaryStrategist),
      ];
    }
    setCounterHeroes(teamUpAssigner(team));

    if (isThreeStratCompGood()) {
      const thirdStrategist = strategists.find(
        (strat: any) =>
          strat.name !== mainStrategist.name &&
          strat.name !== secondaryStrategist.name
      );

      const threeStratTeam = [
        mostFrequentVanguard,
        secondFrequentVanguard,
        mostFrequentDuelist,
        mainStrategist,
        secondaryStrategist ??
          getRandomStrategist(mainStrategist, secondaryStrategist),
        thirdStrategist ??
          getRandomStrategist(mainStrategist, secondaryStrategist),
      ];

      setThreeStratComp(threeStratTeam);
    }

    if (isThreeDuelCompGood()) {
    }
  };

  const getRandomStrategist = (
    mainStrategist: any,
    secondaryStrategist: any
  ) => {
    const availableStrategists = HERO_COUNTERS.filter(
      (hero) =>
        hero.role === "Strategist" &&
        hero.name !== mainStrategist?.name &&
        hero.name !== secondaryStrategist?.name
    );

    return availableStrategists.length > 0
      ? availableStrategists[
          Math.floor(Math.random() * availableStrategists.length)
        ]
      : null;
  };

  const teamUpAssigner = (heroes: any) => {
    console.log("heroes: ", heroes);
    const namorExists = heroes.some((hero: any) => hero.name === "Namor");
    const lunaExists = heroes.some((hero: any) => hero.name === "Luna");

    const punisherExists = heroes.some(
      (hero: any) => hero.name === "Punisher" || hero.name === "The Punisher"
    );
    const buckyExists = heroes.some(
      (hero: any) => hero.name === "Winter Soldier"
    );
    const rocketExists = heroes.some(
      (hero: any) => hero.name === "Rocket Racoon"
    );

    if (namorExists && !lunaExists) {
      heroes[heroes.length - 1] = HERO_COUNTERS.find(
        (h: any) => h.name === "Luna Snow"
      );
    }

    if (punisherExists && buckyExists && !rocketExists) {
      heroes[heroes.length - 1] = HERO_COUNTERS.find(
        (h: any) => h.name === "Rocket Racoon"
      );
    }

    return heroes;
  };

  const enemyHasFlankers = () => {
    const flankersExist = enemyLineup.some(
      (hero: any) =>
        hero.name === "Black Panther" ||
        hero.name === "Magik" ||
        hero.name === "Psylocke"
    );
    return flankersExist;
  };

  const enemyHasVanguard = () => {
    return enemyLineup.some((hero: any) => hero.role === "Vanguard");
  };

  const useFrequentHeroChecker = (counterPicks: any) => {
    if (counterPicks.length === 0)
      return { mostFrequent: null, secondFrequent: null };

    // Count occurrences of each strategist
    const duelistCount = counterPicks.reduce((acc: any, duelist: any) => {
      acc[duelist.name] = (acc[duelist.name] || 0) + 1;
      return acc;
    }, {});

    let mostFrequent = null;
    let secondFrequent = null;
    let maxCount = 0;
    let secondMaxCount = 0;

    for (const duelist of counterPicks) {
      const count = duelistCount[duelist.name];

      if (count > maxCount) {
        secondFrequent = mostFrequent;
        secondMaxCount = maxCount;

        mostFrequent = duelist;
        maxCount = count;
      } else if (
        count > secondMaxCount &&
        duelist.name !== mostFrequent?.name
      ) {
        secondFrequent = duelist;
        secondMaxCount = count;
      }
    }

    return {
      mostFrequent,
      secondFrequent,
    };
  };

  return (
    <>
      <button
        className="bg-transparent mt-5 text-neutral-200 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded"
        onClick={() => constructFinalCounterComp()}
      >
        Generate
      </button>
    </>
  );
}
