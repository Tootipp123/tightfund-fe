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
      counterPicks: [
        {
          image:
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484733/Rivals/The_Punisher_Icon_hqyd44.webp",
          name: "Punisher",
          description: "",
          role: "Duelist",
        },
        {
          image:
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484733/Rivals/Winter_Soldier_Icon_lceqsq.webp",
          name: "Winter Soldier",
          role: "Duelist",
          descriptions: [
            "Winter Soldier's can kill him instantly if Bionic Hook (Right Click) lands successfully + Trooper's Fist (LShift) and a few normal attacks, preventing Iron Fist from regenerating.",
          ],
        },
        {
          name: "Cloak & Dagger",
          role: "Strategist",
          description: "",
          image:
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484729/Rivals/Cloak__26_Dagger_Icon_qgjwi4.webp",
        },
      ],
    },
    {
      name: "Doctor Strange",
      role: "Vanguard",
      counterPicks: [
        {
          image:
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484730/Rivals/Loki_Icon_tysbig.webp",
          name: "Loki",
          role: "Strategist",
          description: "",
        },
        {
          name: "Wolverine",
          role: "Duelist",
          description:
            "He can easily catch Groot and focus on him due to his low mobility.",
          image:
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484734/Rivals/Wolverine_Icon_xhlm8q.webp",
        },
        {
          image:
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484729/Rivals/Hulk_Icon_d2xnfs.webp",
          name: "Hulk",
          role: "Vanguard",
          descriptions: [
            "Hulk's Indestructible Guard (LShift) can prevent Iron Fist from targeting him, as Iron Fist will deal little to no damage against him.",
            "Indestructible Guard (LShift) can also help allies when they're being targeted by Iron Fist. And his Radioactive Lockdown (E) can easily be casted and disable Iron Fist because he's most likely to attack in a straight angle only.",
          ],
        },
        {
          image:
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484732/Rivals/Squirrel_Girl_Icon_gtg592.webp",
          name: "Squirrel Girl",
          role: "Duelist",
          description:
            "Squirrel Girl can completely melt ⅓ of Guardian Shield’s health per Burst Acorn (LMB). Her Unbeatable Squirrel Tsunami (Q) passes through her Guardian Shield.",
        },
      ],
    },
    {
      name: "Storm",
      role: "Duelist",
      counterPicks: [],
    },
    {
      name: "Cloak & Dagger",
      role: "Strategist",
      counterPicks: [
        {
          role: "Vanguard",
          name: "Magneto",
          description:
            "His ultimate can pierce through Cloak and Dagger's ultimate. You just need to time his ult and use it when she stops her dashes.",
          image:
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484730/Rivals/Magneto_Icon_tlpvn5.webp",
        },
        {
          name: "Hawkeye",
          role: "Duelist",
          description: "",
          image:
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484728/Rivals/Hawkeye_Icon_q7o2so.webp",
        },
        {
          name: "Spider-Man",
          role: "Duelist",
          description: "",
          image:
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484732/Rivals/Spider-Man_Icon_lvnyoc.webp",
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

    // Check if enemyLineup has exactly 3 strategists
    const strategistCount = enemyLineup.filter(
      (hero) => hero.role === "Strategist"
    ).length;

    if (strategistCount === 3) {
      const bestDuelistsForEnemyStrats = ThreeStrategistComp(duelists);
      const bestVanguardsForEnemyStrats = ThreeStrategistComp(vanguards);
      console.log("bestDuelists: ", bestDuelistsForEnemyStrats);
      console.log("bestVanguards: ", bestVanguardsForEnemyStrats);
      // - After getting the best duels and vanguards to counter 3 healers,
      // - Choose the remaining slot to the available duelists and vanguards state
    }
  }, []);

  useEffect(() => {
    // console.log("duelists: ", duelists);
    // console.log("strategists: ", strategists);
  }, [duelists, strategists]);

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

  const ThreeStrategistComp = (counterList: any) => {
    // check which duelist or vanguard available is best against 3 supports
    const enemyStrats = enemyLineup.filter((e) => e.role === "Strategist");
    const matchingCounters = enemyStrats.flatMap((strat: any) =>
      strat.counterPicks.filter((counter: any) =>
        counterList.some((hero: any) => hero.name === counter.name)
      )
    );

    if (matchingCounters.length > 0) {
      // return 3 duelists to counter
      // 1 duelist to counter their 2 tanks
      // 1 duelist to counter supports
      // 1 duelist to counter other duelist
      return matchingCounters;
    }
    return [];
  };

  return <></>;
}
