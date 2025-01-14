import React from "react";
import Footer from "@/components/features/Footer";
import Navbar from "@/components/features/Navbar";
import Image from "next/image";

export default function TeamCompCounters() {
  const TEAM_COMP = [
    {
      name: "Convoy Defense",
      difficulty: 5,
      description: "When defending a convoy, your team should rely on long-range attacks and consistent damage output that can pressure the enemy and prevent them from pushing forward.",
      weakness: "",
      suggestedHeroes: {
        tanks: ["https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484730/Rivals/Peni_Parker_Icon_u0uafv.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484729/Rivals/Groot_Icon_udutn9.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484729/Rivals/Doctor_Strange_Icon_qtd9ik.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484730/Rivals/Magneto_Icon_tlpvn5.webp"],
        duels: ["https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484733/Rivals/The_Punisher_Icon_hqyd44.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484733/Rivals/Storm_Icon_ncerpu.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484729/Rivals/Iron_Man_Icon_vyqsna.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484730/Rivals/Namor_Icon_ri6epi.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484728/Rivals/Hela_Icon_kvrhsp.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484733/Rivals/Winter_Soldier_Icon_lceqsq.webp"],
        strats: ["https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484730/Rivals/Mantis_Icon_wjrezu.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484730/Rivals/Luna_Snow_Icon_snupak.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736610733/Rivals/invis-woman-x1_bga15m.png", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484729/Rivals/Cloak__26_Dagger_Icon_qgjwi4.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484731/Rivals/Rocket_Raccoon_Icon_fqblcl.webp"]
      },
      counterHeroes: {
        tanks: ["https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484732/Rivals/Star-Lord_Icon_mvulbd.webp"],
        duels: ["https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484732/Rivals/Star-Lord_Icon_mvulbd.webp"],
        strats: ["https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484732/Rivals/Star-Lord_Icon_mvulbd.webp"]
      }
    },
    {
      name: "Convoy Offense",
      difficulty: 5,
      description: "his game mode relies on divers who can pressure the defenders' backline, allowing your allies to push forward.",
      weakness: "",
      suggestedHeroes: {
        tanks: ["https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484733/Rivals/Venom_Icon_mwro7g.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484729/Rivals/Hulk_Icon_d2xnfs.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484733/Rivals/Thor_Icon_vziina.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484729/Rivals/Captain_America_Icon_cehji6.webp"],
        duels: ["https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484731/Rivals/Psylocke_Icon_ls6zo3.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484733/Rivals/Storm_Icon_ncerpu.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484734/Rivals/Wolverine_Icon_xhlm8q.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484730/Rivals/Moon_Knight_Icon_c8keu4.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484728/Rivals/Black_Panther_Icon_pzkpcd.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484732/Rivals/Star-Lord_Icon_mvulbd.webp"],
        strats: ["https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484730/Rivals/Mantis_Icon_wjrezu.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484730/Rivals/Luna_Snow_Icon_snupak.webp","https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484729/Rivals/Cloak__26_Dagger_Icon_qgjwi4.webp"]
      },
      counterHeroes: {
        tanks: ["https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484732/Rivals/Star-Lord_Icon_mvulbd.webp"],
        duels: ["https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484732/Rivals/Star-Lord_Icon_mvulbd.webp"],
        strats: ["https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484732/Rivals/Star-Lord_Icon_mvulbd.webp"]
      }
    },
    {
      name: "Capture The Flag Lineup #1",
      difficulty: 5,
      description: "This game mode mostly relies on a balanced team composition that can handle staying in point and defending the area.",
      weakness: "",
      suggestedHeroes: {
        tanks: ["https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484729/Rivals/Hulk_Icon_d2xnfs.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484729/Rivals/Groot_Icon_udutn9.webp"],
        duels: ["https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484729/Rivals/Iron_Man_Icon_vyqsna.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484731/Rivals/Psylocke_Icon_ls6zo3.webp"],
        strats: ["https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484730/Rivals/Mantis_Icon_wjrezu.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484730/Rivals/Luna_Snow_Icon_snupak.webp"]
      },
      counterHeroes: {
        tanks: ["https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484732/Rivals/Star-Lord_Icon_mvulbd.webp"],
        duels: ["https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484732/Rivals/Star-Lord_Icon_mvulbd.webp"],
        strats: ["https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484732/Rivals/Star-Lord_Icon_mvulbd.webp"]
      }
    },
    {
      name: "Capture The Flag Lineup #2",
      difficulty: 5,
      description: "This game mode mostly relies on a balanced team composition that can handle staying in point and defending the area.",
      weakness: "",
      suggestedHeroes: {
        tanks: ["https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484733/Rivals/Venom_Icon_mwro7g.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484730/Rivals/Peni_Parker_Icon_u0uafv.webp"],
        duels: ["https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484728/Rivals/Hela_Icon_kvrhsp.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484730/Rivals/Magik_Icon_tkyxty.webp"],
        strats: ["https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484730/Rivals/Luna_Snow_Icon_snupak.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736610733/Rivals/invis-woman-x1_bga15m.png"]
      },
      counterHeroes: {
        tanks: ["https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484732/Rivals/Star-Lord_Icon_mvulbd.webp"],
        duels: ["https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484732/Rivals/Star-Lord_Icon_mvulbd.webp"],
        strats: ["https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484732/Rivals/Star-Lord_Icon_mvulbd.webp"]
      },
      howToPlay: "This team comp strength is in their ultimate combos. In a team fight, hulk can dive into the enemy team, then Groot can follow up with his ultimate, then followed by Iron Man's ultimate Invincible Pusle Cannon."
    },
    {
      name: "Capture The Flag Lineup #3",
      difficulty: 5,
      description: "This game mode mostly relies on a balanced team composition that can handle staying in point and defending the area.",
      weakness: "",
      suggestedHeroes: {
        tanks: ["https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484729/Rivals/Doctor_Strange_Icon_qtd9ik.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484733/Rivals/Thor_Icon_vziina.webp"],
        duels: ["https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484733/Rivals/Storm_Icon_ncerpu.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484728/Rivals/Black_Panther_Icon_pzkpcd.webp"],
        strats: ["https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484730/Rivals/Luna_Snow_Icon_snupak.webp", "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484730/Rivals/Loki_Icon_tysbig.webp"]
      },
      counterHeroes: {
        tanks: ["https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484732/Rivals/Star-Lord_Icon_mvulbd.webp"],
        duels: ["https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484732/Rivals/Star-Lord_Icon_mvulbd.webp"],
        strats: ["https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484732/Rivals/Star-Lord_Icon_mvulbd.webp"]
      }
    }
  ]

  return (
    <div>
      <Navbar />
      <main className="dark:bg-[#1B1B29] bg-white min-h-[100vh]">
        <div className="w-full px-3 md:px-0 md:w-[1200px] mx-auto pb-[150px] pt-[40px]">
          <h1 className="text-center font-bold text-3xl text-white">Team Composition</h1>
          <p className="text-center md:px-[150px] text-[#A0A0AF] mt-3">A guide for your starting lineup in every competitive game mode. Remember, there is no perfect lineup. Always assess the enemy team composition and adjust heroes as needed.</p>
          <div className="flex gap-5 flex-wrap mt-[60px]">
            {TEAM_COMP.map((team: any, index: any) => (
              <div
                key={index}
                className="w-full md:w-[49%] rounded-lg p-6 bg-[#292937] cursor-pointer"
              >
                <h4 className="text-xl text-white font-bold">{team.name}</h4>
                <p className="mt-2 text-[#A0A0AF]">{team.description}</p>
                <h4 className="text-md mt-7 mb-4 text-white font-bold">Suggested Heroes:</h4>
                <div className="flex gap-5 items-center">
                  <h5 className="text-white w-[80px]">Vanguards:</h5>
                  <div className="flex gap-2">
                    {team.suggestedHeroes.tanks.map((tank: any, tankIdx: any) => (
                      <div key={tankIdx}>
                        <Image src={tank} alt={tank} width={70} height={70} className="rounded-md" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex gap-5 items-center mt-4">
                  <h5 className="text-white w-[80px]">Duelists:</h5>
                  <div className="flex gap-2">
                    {team.suggestedHeroes.duels.map((tank: any, tankIdx: any) => (
                      <div key={tankIdx}>
                        <Image src={tank} alt={tank} width={70} height={70} className="rounded-md" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex gap-5 items-center mt-4">
                  <h5 className="text-white w-[80px]">Strategists:</h5>
                  <div className="flex gap-2">
                    {team.suggestedHeroes.strats.map((tank: any, tankIdx: any) => (
                      <div key={tankIdx}>
                        <Image src={tank} alt={tank} width={70} height={70} className="rounded-md" />
                      </div>
                    ))}
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
