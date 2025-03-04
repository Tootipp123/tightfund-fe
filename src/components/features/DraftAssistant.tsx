"use client";
import { HERO_COUNTERS } from "@/utils/static";
import { useEffect, useState } from "react";

export default function DraftAssistant() {
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

  const [enemyLineup, setEnemyLineup] = useState([
    {
      name: "Hulk",
      role: "Vanguard",
      counterPicks: [],
    },
    {
      name: "Doctor Strange",
      role: "Vanguard",
      counterPicks: [],
    },
    {
      name: "Hawkeye",
      role: "Duelist",
      counterPicks: [],
    },
    {
      name: "Cloak & Dagger",
      role: "Strategist",
      counterPicks: [
        {
          name: "Hawkeye",
          description: "",
          image:
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484728/Rivals/Hawkeye_Icon_q7o2so.webp",
        },
      ],
    },
    {
      name: "Loki",
      role: "Strategist",
      counterPicks: [],
    },
    {
      name: "Luna",
      role: "Strategist",
      counterPicks: [],
    },
  ]);

  const [vanguards, setVanguards] = useState<any>([]);
  const [duelists, setDuelists] = useState<any>([]);
  const [strategists, setStrategists] = useState<any>([]);

  useEffect(() => {
    const vanguards = initCounters("Vanguard");
    setVanguards(vanguards);
    const duelists = initCounters("Duelist");
    setDuelists(duelists);
    const strategists = initStrategists();
    setStrategists(strategists);

    console.log("vanguards: ", vanguards);
    console.log("duelists: ", duelists);
    console.log("strategists: ", strategists);

    // Check if enemyLineup has exactly 3 strategists
    const strategistCount = enemyLineup.filter(
      (hero) => hero.role === "Strategist"
    ).length;

    if (strategistCount === 3) {
      OneTwoThreeTeamComp(duelists);
    }
  }, []);

  // init best counters to counter all enemy team
  const initCounters = (role: string) => {
    let allCounters: any = [];

    if (role !== "Strategist") {
      allCounters = enemyLineup.flatMap((hero) =>
        HERO_COUNTERS.filter((h) => h.name === hero.name).flatMap((h2) =>
          h2.counterPicks.filter((cp) =>
            HERO_COUNTERS.some((hc) => hc.name === cp.name && hc.role === role)
          )
        )
      );
    } else {
      const duelsAndVanguard = enemyLineup.filter(
        (h) => h.role === "Duelist" || h.role === "Vanguard"
      );
      allCounters = duelsAndVanguard.flatMap((hero) =>
        HERO_COUNTERS.filter((h) => h.name === hero.name).flatMap((h2) =>
          h2.counterPicks.filter((cp) =>
            HERO_COUNTERS.some((hc) => hc.name === cp.name && hc.role === role)
          )
        )
      );
    }

    // // Count occurrences of each counter pick
    // const counterCount = allCounters.reduce((acc: any, counter: any) => {
    //   acc[counter.name] = (acc[counter.name] || 0) + 1;
    //   return acc;
    // }, {});

    // // Get duelists that appeared exactly twice or thrice
    // const topCounters = Object.entries(counterCount)
    //   .filter(([_, count]) => count === 2 || count === 3)
    //   .map(([counter]) => counter); // Extract only the hero names

    // // If no duelists match the 2-3 times condition, return all counters instead
    // const result =
    //   topCounters.length > 0 ? topCounters : Object.keys(counterCount);

    return allCounters;
  };

  // strategists dont have 1 on 1 mechanics on the enemy team strategist so the logic is slightly different.
  const initStrategists = () => {
    if (
      enemyLineup.some(
        (hero) => hero.name === "Rocket" || hero.name === "Adam Warlock"
      )
    ) {
      // Step 1:
      const strategistsWithDefUlt = HERO_COUNTERS.filter(
        (h: any) => h?.defensiveUlt
      );
      return strategistsWithDefUlt;
      // Step 2: Return all strategists that counters the enemy team Duelist or Tank
    }

    // Step 2: Return all strategists that counters the enemy team Duelist or Tank
    const stratCounters = initCounters("Strategist");
    return stratCounters;
  };

  // 2-2-2 team comp counter suggestion
  const twoTwoTwoTeamComp = () => {
    const assessYourDuelists = () => {
      // if the enemy has strategists,
      // if enemy team has a strong flanker, return 1 duelist to defend back line. and 1 duelist to flank the enemy.
      // else return 2 dps behind tank
    };

    const assessYourTanks = () => {
      // if the enemy has 3 strategists,
      // return 1 tank as either hulk, captain america, or venom. Then 1 tank for shield or defense.
    };

    // strategist will always be at least 2 and more
  };

  const OneTwoThreeTeamComp = (duelists: any) => {
    // check which duelist available is best against 3 supports
    const assessYourDuelists = () => {
      const enemyStrats = enemyLineup.filter((e) => e.role === "Strategist");
      const matchingDuelists = enemyStrats.flatMap((strat: any) =>
        strat.counterPicks.filter((counter: any) =>
          duelists.some((duelist: any) => duelist.name === counter.name)
        )
      );

      return matchingDuelists;
    };

    const assessYourTank = () => {
      // Check which tank is most effective for their 2 Tanks, and 2 DPS.
      // return tank
    };

    const assessStrategist = () => {
      // if enemy is 2-2-2 with no diver tank,
      //
    };

    assessYourDuelists();
  };

  return <></>;
}
