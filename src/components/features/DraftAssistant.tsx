"use client";
import { HERO_COUNTERS } from "@/utils/static";
import { useEffect, useState } from "react";

export default function DraftAssistant({ enemyLineup }: any) {
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

  const [vanguards, setVanguards] = useState<any>([]);
  const [duelists, setDuelists] = useState<any>([]);
  const [strategists, setStrategists] = useState<any>([]);

  const [vanguardForVanguard, setVanguardForVanguard] = useState<any>({});
  const [vanguardForStrat, setVanguardForStrat] = useState<any>({});
  const [duelistForStrat, setDuelistForStrat] = useState<any>({});
  const [duelistForDuelist, setDuelistForDuelist] = useState<any>({});
  const [duelistForVanguard, setDuelistForVanguard] = useState<any>({});

  useEffect(() => {
    const vanguards = initCounters("Vanguard");
    setVanguards(vanguards);
    const duelists = initCounters("Duelist");
    setDuelists(duelists);
    const strategists = initStrategists();
    setStrategists(strategists);
    handleCountersForDuelsAndVanguards();

    // if (enemyHasThreeStrategists()) {
    const bestDuelistsForEnemyStrats = ThreeStrategistComp(duelists);
    const bestVanguardsForEnemyStrats = ThreeStrategistComp(vanguards);

    const { mostFrequent: mainDuelistForStrat } = useFrequentHeroChecker(
      bestDuelistsForEnemyStrats
    );
    const { mostFrequent: mainVanguardForStrats } = useFrequentHeroChecker(
      bestVanguardsForEnemyStrats
    );
    setDuelistForStrat(mainDuelistForStrat);
    setVanguardForStrat(mainVanguardForStrats);
    // - After getting the best duels and vanguards to counter 3 healers,
    // - Choose the remaining slot to the available duelists and vanguards state
    // }
  }, []);

  // init best counters to counter all enemy team
  const initCounters = (role: string) => {
    let allCounters: any = [];

    if (role !== "Strategist") {
      allCounters = enemyLineup.flatMap((hero) =>
        (hero.counterPicks || []).filter((cp) => cp.role === role)
      );
    } else {
      const duelsAndVanguard = enemyLineup.filter(
        (h) => h.role === "Duelist" || h.role === "Vanguard"
      );
      allCounters = duelsAndVanguard.flatMap((hero) =>
        (hero.counterPicks || []).filter((cp) => cp.role === role)
      );
    }

    return allCounters;
  };

  // strategists dont have 1 on 1 mechanics on the enemy team strategist so the logic is slightly different.
  const initStrategists = () => {
    // if (enemyHasNoDefensiveUlt()) {
    //   const strategistsWithDefUlt = HERO_COUNTERS.filter(
    //     (h: any) => h?.defensiveUlt
    //   );
    //   return strategistsWithDefUlt;
    // }

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

  const handleCountersForDuelsAndVanguards = () => {
    const selectedDuelists: any = enemyLineup.filter(
      (hero) => hero.role === "Duelist"
    );
    const selectedVanguards: any = enemyLineup.filter(
      (hero) => hero.role === "Vanguard"
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
    const { mostFrequent: mainDuelistCounter } =
      useFrequentHeroChecker(duelistCounterPicks);
    const { mostFrequent: mainVanguardCounter } =
      useFrequentHeroChecker(vanguardCounterPicks);
    const { mostFrequent: mainVanguardForVanguard } = useFrequentHeroChecker(
      vanguardToVanguardCounterPicks
    );

    setDuelistForDuelist(mainDuelistCounter);
    setDuelistForVanguard(mainVanguardCounter);
    setVanguardForVanguard(mainVanguardForVanguard);
  };

  // @TASK:
  // Check if enemy has flanker
  // 1. Check if this lineup is good: Loki, Namor, Luna
  // 2. Check if this lineup is good: Warlock, Starlord, Mantis
  const ThreeStrategistComp = (counterList: any) => {
    // check which duelist or vanguard available is best against 3 supports
    const enemyStrats = enemyLineup.filter((e) => e.role === "Strategist");
    const countersToStrats = enemyStrats.flatMap((strat: any) =>
      strat.counterPicks.filter((counter: any) =>
        counterList.some((hero: any) => hero.name === counter.name)
      )
    );

    if (countersToStrats.length > 0) {
      // return 3 duelists
      // 1 duelist to counter their 2 tanks
      // 1 duelist to counter supports
      // 1 duelist to counter other duelist
      return countersToStrats;
    }
    return [];
  };

  const constructFinalCounterComp = () => {
    // final comp here
    const { mostFrequent: mainStrategist, secondFrequent } =
      useFrequentHeroChecker(strategists);
    const mainDuelist = enemyHasThreeStrategists()
      ? duelistForStrat
      : duelistForDuelist;
    const team = [
      vanguardForVanguard,
      vanguardForStrat,
      mainDuelist,
      duelistForVanguard,
      mainStrategist,
      secondFrequent,
    ];

    console.log("team: ", team);
  };

  const enemyHasFlankers = () => {
    const flankersExist = enemyLineup.some(
      (hero) =>
        hero.name === "Black Panther" ||
        hero.name === "Magik" ||
        hero.name === "Psylocke"
    );
    return flankersExist;
  };

  const enemyHasThreeStrategists = () => {
    const strategistCount = enemyLineup.filter(
      (hero) => hero.role === "Strategist"
    ).length;

    return strategistCount === 3;
  };

  const enemyHasNoDefensiveUlt = () => {
    return !enemyLineup.some(
      (hero) =>
        hero.name === "Cloak & Dagger" ||
        hero.name === "Luna Snow" ||
        hero.name === "Mantis" ||
        hero.name === "Invisible Woman"
    );
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
        className="bg-blue-500"
        onClick={() => constructFinalCounterComp()}
      >
        Generate
      </button>
    </>
  );
}
