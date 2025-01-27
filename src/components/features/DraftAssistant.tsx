import { useState } from "react";

export default function DraftAssistant() {
  // REQUIREMENTS:
  // input 6 heroes
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

  const [enemyLineup, setEnemyLineup] = useState([
    "Hulk", "Doctor Strange", "Iron Man", "Black Panther", "Luna", "Cloak & Dagger"
  ]);

  // initial logic to give a counter against the enemy team duelist/s
  const assessDuelists = () => {
    if(enemyLineup.includes("Iron Man")) {
      // return all iron man counters (DUELISTS ONLY)
    } else if (enemyLineup.includes("Black Panther")) {
      // return all black panther counters (DUELISTS ONLY)
    }
  }

  const assessTanks = () => {
    if(enemyLineup.includes("Hulk")) {
      // return all hulk (TANKS ONLY)
    } else if (enemyLineup.includes("Doctor Strange")) {
      // return all doctor strange counters (TANKS ONLY)
    }
  }

  // strategists dont have 1 on 1 mechanics on the enemy team strategist so the logic is slightly different.
  const assessStrategists = () => {
    // if enemy strategists has only 1 defensive ult,
    // SELECTED_STRATS = return all strategists that have defensive ults.

    // if enemy team has divers or flankers,
    // SELECTED_STRATS = return strategists that have defensive ults and can counter the enemy flanker.
  }
  
  return (
    <></>
  )
}