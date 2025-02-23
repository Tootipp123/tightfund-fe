import Footer from "@/components/features/Footer";
import Navbar from "@/components/features/Navbar";
import Image from "next/image";

export default function TeamCompCounters() {
  const TEAM_COMP_2 = [
    {
      name: "The Gunner Lineup",
      bestFor: "Convoy Defense",
      difficulty: 5,
      description: "",
      strengths:
        "This team has high damage output and superior defensive capabilities to prevent the enemy team from pushing forward even with shields from Doctor Strange or Magneto. They can also easily destroy divers like Hulk and Venom.",
      weaknesses:
        "Skilled flankers that use Black Panther, Psylocke, or Magik can potentially destroy your backline and pave the way for their team to push forward.",
      image:
        "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1737634370/rivals%20v2/gunner-lineup_zxteew.png",
      lineups: [
        {
          tanks: [
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484730/Rivals/Peni_Parker_Icon_u0uafv.webp",
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484729/Rivals/Groot_Icon_udutn9.webp",
          ],
          duels: [
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484733/Rivals/The_Punisher_Icon_hqyd44.webp",
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484733/Rivals/Winter_Soldier_Icon_lceqsq.webp",
          ],
          strats: [
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484730/Rivals/Mantis_Icon_wjrezu.webp",
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484731/Rivals/Rocket_Raccoon_Icon_fqblcl.webp",
          ],
        },
      ],
    },
    {
      name: "The Season 1 Meta Lineup",
      bestFor: "Convoy Offense & Capture",
      difficulty: 5,
      description: "",
      strengths:
        "This team composition is well-balanced, it can dive easily with Hulk and Wolverine, defend backline with Iron Man and Doctor Strange, and help the divers with these OP meta healers.",
      weaknesses:
        "This team composition has few weaknesses, but it's vulnerable if your strategists' ultimates are on cooldown and enemy flankers destroy your backline. This can create opportunities for the enemy team to eliminate Hulk and the rest of your team.",
      image:
        "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1737638975/rivals%20v2/meta_1_m3erci.png",
      lineups: [
        {
          tanks: [
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484729/Rivals/Hulk_Icon_d2xnfs.webp",
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484729/Rivals/Doctor_Strange_Icon_qtd9ik.webp",
          ],
          duels: [
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484734/Rivals/Wolverine_Icon_xhlm8q.webp",
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484729/Rivals/Iron_Man_Icon_vyqsna.webp",
          ],
          strats: [
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484729/Rivals/Cloak__26_Dagger_Icon_qgjwi4.webp",
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484730/Rivals/Luna_Snow_Icon_snupak.webp",
          ],
        },
      ],
    },
    {
      name: "The Divers",
      bestFor: "Convoy Offense",
      difficulty: 5,
      description: "",
      strengths:
        "This team composition relies on fast-paced gameplay and accurate killing abilities that eliminate targets one by one. They are most effective against airborne enemies like Iron Man and Storm.",
      weaknesses:
        "They will have issues dealing with a team comp that can easily escape with their high mobility and high healing abilities.",
      image:
        "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1737638974/rivals%20v2/divers_1_xlqbms.png",
      lineups: [
        {
          tanks: [
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484733/Rivals/Venom_Icon_mwro7g.webp",
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484729/Rivals/Captain_America_Icon_cehji6.webp",
          ],
          duels: [
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484732/Rivals/Spider-Man_Icon_lvnyoc.webp",
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484733/Rivals/Winter_Soldier_Icon_lceqsq.webp",
          ],
          strats: [
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484729/Rivals/Cloak__26_Dagger_Icon_qgjwi4.webp",
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484730/Rivals/Luna_Snow_Icon_snupak.webp",
          ],
        },
      ],
    },
    {
      name: "The Healers Meta",
      bestFor: "Convoy Defense & Capture",
      difficulty: 5,
      description: "",
      strengths:
        "This team relies on the strategist heroes' consistent healing and positioning. With two meta duelists and a consistent tank, this team excels at sustaining team health and defending against enemy attacks.",
      weaknesses:
        "They will have issues against tanky flankers that can force the healers to retreat and not focus on healing allies.",
      image:
        "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1737641878/rivals%20v2/healers_gd1bqj.png",
      lineups: [
        {
          tanks: [
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484729/Rivals/Doctor_Strange_Icon_qtd9ik.webp",
          ],
          duels: [
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484733/Rivals/Storm_Icon_ncerpu.webp",
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484734/Rivals/Wolverine_Icon_xhlm8q.webp",
          ],
          strats: [
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484729/Rivals/Cloak__26_Dagger_Icon_qgjwi4.webp",
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484730/Rivals/Luna_Snow_Icon_snupak.webp",
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484730/Rivals/Loki_Icon_tysbig.webp",
          ],
        },
      ],
    },
    {
      name: "The Poke Lineup",
      bestFor: "Convoy Defense",
      difficulty: 5,
      description: "",
      strengths:
        "This team composition relies on the accuracy of duelist heroes to deal damage. They excel at maintaining distance against aggressive teams.",
      weaknesses:
        "They might struggle against team compositions that can quickly close the distance and eliminate airborne heroes like the divers team composition.",
      image:
        "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1737641880/rivals%20v2/poke_awy8dx.png",
      lineups: [
        {
          tanks: [
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484730/Rivals/Magneto_Icon_tlpvn5.webp",
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484733/Rivals/Thor_Icon_vziina.webp",
          ],
          duels: [
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484733/Rivals/Storm_Icon_ncerpu.webp",
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484728/Rivals/Hela_Icon_kvrhsp.webp",
          ],
          strats: [
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484730/Rivals/Mantis_Icon_wjrezu.webp",
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484731/Rivals/Rocket_Raccoon_Icon_fqblcl.webp",
          ],
        },
      ],
    },
  ];

  // const TEAM_COMP = [
  //   {
  //     name: "Convoy Defense",
  //     difficulty: 5,
  //     description: "When defending a convoy, your team should rely on long-range attacks and consistent damage output that can pressure the enemy and prevent them from pushing forward.",
  //     weakness: "",
  //     suggestedHeroes: {
  //       tanks: ["https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484730/Rivals/Peni_Parker_Icon_u0uafv.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484729/Rivals/Groot_Icon_udutn9.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484729/Rivals/Doctor_Strange_Icon_qtd9ik.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484730/Rivals/Magneto_Icon_tlpvn5.webp"],
  //       duels: ["https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484733/Rivals/The_Punisher_Icon_hqyd44.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484733/Rivals/Storm_Icon_ncerpu.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484729/Rivals/Iron_Man_Icon_vyqsna.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484730/Rivals/Namor_Icon_ri6epi.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484728/Rivals/Hela_Icon_kvrhsp.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484733/Rivals/Winter_Soldier_Icon_lceqsq.webp"],
  //       strats: ["https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484730/Rivals/Mantis_Icon_wjrezu.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484730/Rivals/Luna_Snow_Icon_snupak.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736610733/Rivals/invis-woman-x1_bga15m.png", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484729/Rivals/Cloak__26_Dagger_Icon_qgjwi4.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484731/Rivals/Rocket_Raccoon_Icon_fqblcl.webp"]
  //     },
  //     counterHeroes: {
  //       tanks: ["https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484732/Rivals/Star-Lord_Icon_mvulbd.webp"],
  //       duels: ["https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484732/Rivals/Star-Lord_Icon_mvulbd.webp"],
  //       strats: ["https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484732/Rivals/Star-Lord_Icon_mvulbd.webp"]
  //     }
  //   },
  //   {
  //     name: "Convoy Defense Lineup #1",
  //     difficulty: 5,
  //     description: "When defending a convoy, your team should rely on long-range attacks and consistent damage output that can pressure the enemy and prevent them from pushing forward.",
  //     weakness: "",
  //     suggestedHeroes: {
  //       tanks: ["https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484730/Rivals/Peni_Parker_Icon_u0uafv.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484729/Rivals/Groot_Icon_udutn9.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484729/Rivals/Doctor_Strange_Icon_qtd9ik.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484730/Rivals/Magneto_Icon_tlpvn5.webp"],
  //       duels: ["https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484733/Rivals/The_Punisher_Icon_hqyd44.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484733/Rivals/Storm_Icon_ncerpu.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484729/Rivals/Iron_Man_Icon_vyqsna.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484730/Rivals/Namor_Icon_ri6epi.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484728/Rivals/Hela_Icon_kvrhsp.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484733/Rivals/Winter_Soldier_Icon_lceqsq.webp"],
  //       strats: ["https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484730/Rivals/Mantis_Icon_wjrezu.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484730/Rivals/Luna_Snow_Icon_snupak.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736610733/Rivals/invis-woman-x1_bga15m.png", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484729/Rivals/Cloak__26_Dagger_Icon_qgjwi4.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484731/Rivals/Rocket_Raccoon_Icon_fqblcl.webp"]
  //     },
  //     counterHeroes: {
  //       tanks: ["https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484732/Rivals/Star-Lord_Icon_mvulbd.webp"],
  //       duels: ["https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484732/Rivals/Star-Lord_Icon_mvulbd.webp"],
  //       strats: ["https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484732/Rivals/Star-Lord_Icon_mvulbd.webp"]
  //     }
  //   },
  //   {
  //     name: "Convoy Offense",
  //     difficulty: 5,
  //     description: "This game mode relies on divers who can pressure the defenders' backline, allowing your allies to push forward.",
  //     weakness: "",
  //     suggestedHeroes: {
  //       tanks: ["https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484733/Rivals/Venom_Icon_mwro7g.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484729/Rivals/Hulk_Icon_d2xnfs.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484733/Rivals/Thor_Icon_vziina.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484729/Rivals/Captain_America_Icon_cehji6.webp"],
  //       duels: ["https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484731/Rivals/Psylocke_Icon_ls6zo3.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484733/Rivals/Storm_Icon_ncerpu.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484734/Rivals/Wolverine_Icon_xhlm8q.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484730/Rivals/Moon_Knight_Icon_c8keu4.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484728/Rivals/Black_Panther_Icon_pzkpcd.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484732/Rivals/Star-Lord_Icon_mvulbd.webp"],
  //       strats: ["https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484730/Rivals/Mantis_Icon_wjrezu.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484730/Rivals/Luna_Snow_Icon_snupak.webp","https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484729/Rivals/Cloak__26_Dagger_Icon_qgjwi4.webp"]
  //     },
  //     counterHeroes: {
  //       tanks: ["https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484732/Rivals/Star-Lord_Icon_mvulbd.webp"],
  //       duels: ["https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484732/Rivals/Star-Lord_Icon_mvulbd.webp"],
  //       strats: ["https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484732/Rivals/Star-Lord_Icon_mvulbd.webp"]
  //     }
  //   },
  //   {
  //     name: "Capture The Flag Lineup #1",
  //     difficulty: 5,
  //     description: "This game mode mostly relies on a balanced team composition that can handle staying in point and defending the area.",
  //     weakness: "",
  //     suggestedHeroes: {
  //       tanks: ["https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484729/Rivals/Hulk_Icon_d2xnfs.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484729/Rivals/Groot_Icon_udutn9.webp"],
  //       duels: ["https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484729/Rivals/Iron_Man_Icon_vyqsna.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484731/Rivals/Psylocke_Icon_ls6zo3.webp"],
  //       strats: ["https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484730/Rivals/Mantis_Icon_wjrezu.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484730/Rivals/Luna_Snow_Icon_snupak.webp"]
  //     },
  //     counterHeroes: {
  //       tanks: ["https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484732/Rivals/Star-Lord_Icon_mvulbd.webp"],
  //       duels: ["https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484732/Rivals/Star-Lord_Icon_mvulbd.webp"],
  //       strats: ["https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484732/Rivals/Star-Lord_Icon_mvulbd.webp"]
  //     }
  //   },
  //   {
  //     name: "Capture The Flag Lineup #2",
  //     difficulty: 5,
  //     description: "This game mode mostly relies on a balanced team composition that can handle staying in point and defending the area.",
  //     weakness: "",
  //     suggestedHeroes: {
  //       tanks: ["https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484733/Rivals/Venom_Icon_mwro7g.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484730/Rivals/Peni_Parker_Icon_u0uafv.webp"],
  //       duels: ["https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484728/Rivals/Hela_Icon_kvrhsp.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484730/Rivals/Magik_Icon_tkyxty.webp"],
  //       strats: ["https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484730/Rivals/Luna_Snow_Icon_snupak.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736610733/Rivals/invis-woman-x1_bga15m.png"]
  //     },
  //     counterHeroes: {
  //       tanks: ["https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484732/Rivals/Star-Lord_Icon_mvulbd.webp"],
  //       duels: ["https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484732/Rivals/Star-Lord_Icon_mvulbd.webp"],
  //       strats: ["https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484732/Rivals/Star-Lord_Icon_mvulbd.webp"]
  //     },
  //     howToPlay: "This team comp strength is in their ultimate combos. In a team fight, hulk can dive into the enemy team, then Groot can follow up with his ultimate, then followed by Iron Man's ultimate Invincible Pusle Cannon."
  //   },
  //   {
  //     name: "Capture The Flag Lineup #3",
  //     difficulty: 5,
  //     description: "This game mode mostly relies on a balanced team composition that can handle staying in point and defending the area.",
  //     weakness: "",
  //     suggestedHeroes: {
  //       tanks: ["https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484729/Rivals/Doctor_Strange_Icon_qtd9ik.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484733/Rivals/Thor_Icon_vziina.webp"],
  //       duels: ["https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484733/Rivals/Storm_Icon_ncerpu.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484728/Rivals/Black_Panther_Icon_pzkpcd.webp"],
  //       strats: ["https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484730/Rivals/Luna_Snow_Icon_snupak.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484730/Rivals/Loki_Icon_tysbig.webp"]
  //     },
  //     counterHeroes: {
  //       tanks: ["https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484732/Rivals/Star-Lord_Icon_mvulbd.webp"],
  //       duels: ["https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484732/Rivals/Star-Lord_Icon_mvulbd.webp"],
  //       strats: ["https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484732/Rivals/Star-Lord_Icon_mvulbd.webp"]
  //     }
  //   }
  // ]

  return (
    <div>
      <Navbar />
      <main className="bg-[#1B1B29] min-h-[100vh]">
        <div className="w-full px-3 md:px-0 md:w-[1200px] mx-auto pb-[150px] pt-[40px]">
          <h1 className="text-center font-bold text-3xl text-white">
            Team Composition
          </h1>
          <p className="text-center md:px-[150px] text-[#A0A0AF] mt-3">
            A guide for your starting lineup in every competitive game mode.
            Remember, there is no perfect lineup. Always assess the enemy team
            composition and adjust heroes as needed.
          </p>
          <div className="flex flex-col md:flex-wrap mt-[60px]">
            {TEAM_COMP_2.map((team: any, index: any) => (
              <div
                key={index}
                className="w-full md:w-full border-t border-neutral-700 rounded-lg pt-6 px-6 overflow-hidden relative"
              >
                <Image
                  className="absolute z-1 right-0 mt-[120px] opacity-[12%]"
                  src={team.image}
                  unoptimized
                  alt="Gunner lineup image"
                  width={700}
                  height={300}
                />
                <h4 className="text-3xl md:text-4xl text-white font-black uppercase">
                  {team.name}
                </h4>
                <p className="mt-2 text-[#A0A0AF] relative z-2">
                  {team.description}
                </p>
                <div className="mt-4">
                  <h4 className="text-md text-white font-bold">
                    Best used for:
                  </h4>
                  <p className="text-emerald-500">{team.bestFor}</p>
                </div>
                <div className="flex flex-col md:flex-row gap-5 pb-[50px]">
                  <div className="flex-1">
                    {team.lineups.map((lineup: any, lineupIdx: number) => (
                      <div key={lineupIdx}>
                        <h4 className="text-md mt-7 mb-4 text-white font-bold">
                          Heroes:
                        </h4>
                        <div className="flex gap-5 items-center">
                          <h5 className="text-white w-[80px]">Vanguards:</h5>
                          <div className="flex gap-2">
                            {lineup.tanks.map((tank: any, tankIdx: number) => (
                              <div key={tankIdx}>
                                <Image
                                  unoptimized
                                  src={tank}
                                  alt={tank}
                                  width={70}
                                  height={70}
                                  className="rounded-md"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="flex gap-5 mt-3 items-center">
                          <h5 className="text-white w-[80px]">Duelists:</h5>
                          <div className="flex gap-2">
                            {lineup.duels.map((duel: any, duelIdx: number) => (
                              <div key={duelIdx}>
                                <Image
                                  src={duel}
                                  alt={duel}
                                  unoptimized
                                  width={70}
                                  height={70}
                                  className="rounded-md"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="flex gap-5 mt-3 items-center">
                          <h5 className="text-white w-[80px]">Strategists:</h5>
                          <div className="flex gap-2">
                            {lineup.strats.map(
                              (strat: any, stratIdx: number) => (
                                <div key={stratIdx}>
                                  <Image
                                    src={strat}
                                    alt={strat}
                                    unoptimized
                                    width={70}
                                    height={70}
                                    className="rounded-md"
                                  />
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-7 flex-1">
                    <h4 className="text-md text-white font-bold">Strengths:</h4>
                    <p className="text-neutral-100 mt-3">{team.strengths}</p>
                  </div>
                  <div className="mt-7 flex-1">
                    <h4 className="text-md text-white font-bold">
                      Weaknesses:
                    </h4>
                    <p className="text-neutral-100 mt-3">{team.weaknesses}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
