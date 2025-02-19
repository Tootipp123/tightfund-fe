"use client";

import Footer from "@/components/features/Footer";
import Navbar from "@/components/features/Navbar";
import TeamupCounterModal from "@/components/features/TeamupCounterModal";
import Image from "next/image";
import { useState } from "react";

export default function TeamUpCounters() {
  const [selectedTeamup, setSelectedTeamup] = useState(null);

  const TEAM_UPS = [
    {
      name: "Ammo Overload",
      icon: "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1739869138/rivals%20v2/Ammo-Overload-Icon_mxboem.webp",
      naturalCounters: [
        {
          name: "Dimensional Shortcut",
          icon: "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1739869138/rivals%20v2/Ammo-Overload-Icon_mxboem.webp",
          description:
            "This team-up's strength lies in flanking the backline and closing the distance, which can pressure Punisher, Bucky, and Rocket, as they rely on mid- to long-range combat. It’s unusual to pick these three together, but even with just two heroes from this team-up, it’s still a great matchup against the Ammo Overload team-up.",
          heroes: [
            {
              image:
                "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484728/Rivals/Black_Panther_Icon_pzkpcd.webp",
              name: "Black Panther",
            },
            {
              image:
                "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484730/Rivals/Magik_Icon_tkyxty.webp",
              name: "Magik",
            },
            {
              image:
                "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484731/Rivals/Psylocke_Icon_ls6zo3.webp",
              name: "Psylocke",
            },
          ],
        },
        {
          name: "Voltaic Union",
          icon: "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1739869138/rivals%20v2/Ammo-Overload-Icon_mxboem.webp",
          description:
            "While Punisher and Bucky can counter Storm, Cap and Thor can create space for her by diving into the backline, making Punisher, Bucky, and Rocket vulnerable to Storm's attacks. Additionally, Captain America's shield and sprinting abilities are natural counters to both Bucky and Punisher.",
          heroes: [
            {
              image:
                "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484733/Rivals/Thor_Icon_vziina.webp",
              name: "Thor",
            },
            {
              image:
                "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484729/Rivals/Captain_America_Icon_cehji6.webp",
              name: "Captain America",
            },
            {
              image:
                "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484733/Rivals/Storm_Icon_ncerpu.webp",
              name: "Storm",
            },
          ],
        },
      ],
      heroes: [
        {
          name: "The Punisher",
          tallImage:
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1737607170/rivals%20v2/punisher_g8ytdf.png",
        },
        {
          name: "Winter Soldier",
          tallImage:
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1737607167/rivals%20v2/bucky_tdwc4f.png",
        },
        {
          name: "Rocket Racoon",
          tallImage:
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1737619035/rivals%20v2/rocket-new_1_raqc7g.png",
        },
      ],
    },
    {
      name: "Allied Agents",
      icon: "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1739869138/rivals%20v2/Ammo-Overload-Icon_mxboem.webp",
      heroes: [
        {
          name: "Black Widow",
          tallImage:
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1737607167/rivals%20v2/btw_pnokvx.png",
        },
        {
          name: "Hawkeye",
          tallImage:
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1737607167/rivals%20v2/hawkeye_yybihp.png",
        },
      ],
    },
    {
      name: "Atlas Bond",
      icon: "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1739869138/rivals%20v2/Ammo-Overload-Icon_mxboem.webp",
      heroes: [
        {
          name: "Luna Snow",
          tallImage:
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1737607169/rivals%20v2/luna_s8dvx4.png",
        },
        {
          name: "Iron Fist",
          tallImage:
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1737607168/rivals%20v2/iron_fist_uxavml.png",
        },
      ],
    },
    {
      name: "Chilling Charisma",
      icon: "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1739869138/rivals%20v2/Ammo-Overload-Icon_mxboem.webp",
      heroes: [
        {
          name: "Namor",
          tallImage:
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1737607170/rivals%20v2/namor_acnpav.png",
        },
        {
          name: "Luna Snow",
          tallImage:
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1737607169/rivals%20v2/luna_s8dvx4.png",
        },
        {
          name: "Jeff",
          tallImage:
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1737607168/rivals%20v2/jeff_wadppv.png",
        },
      ],
    },
    {
      name: "Dimensional Shortcut",
      icon: "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1739869138/rivals%20v2/Ammo-Overload-Icon_mxboem.webp",
      heroes: [
        {
          name: "Magik",
          tallImage:
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1737607169/rivals%20v2/magik_t6cemu.png",
        },
        {
          name: "Black Panther",
          tallImage:
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1737619435/rivals%20v2/bpnew_xzsr2r.png",
        },
        {
          name: "Psylocke",
          tallImage:
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1737607170/rivals%20v2/psy_feub8t.png",
        },
      ],
    },
    {
      name: "Esu Alumnus",
      icon: "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1739869138/rivals%20v2/Ammo-Overload-Icon_mxboem.webp",
      heroes: [
        {
          name: "Squirrel Girl",
          tallImage:
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1737607171/rivals%20v2/squi_yo6cgm.png",
        },
        {
          name: "Spider-Man",
          tallImage:
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1737607170/rivals%20v2/spidey_bti4dq.png",
        },
      ],
    },
    {
      name: "Fantastic Four",
      icon: "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1739869138/rivals%20v2/Ammo-Overload-Icon_mxboem.webp",
      heroes: [
        {
          name: "Invisible Woman",
          tallImage:
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1737607168/rivals%20v2/invis_woman_sdpex8.png",
        },
        {
          name: "Mr. Fantastic",
          tallImage:
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1737607169/rivals%20v2/mr_fantastic_np1ays.png",
        },
      ],
    },
    {
      name: "Gamma Fastball",
      icon: "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1739869138/rivals%20v2/Ammo-Overload-Icon_mxboem.webp",
      heroes: [
        {
          name: "Wolverine",
          tallImage:
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1737607173/rivals%20v2/wolvie_j9xibh.png",
        },
        {
          name: "Hulk",
          tallImage:
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1737607168/rivals%20v2/hulk_i6rxrq.png",
        },
      ],
    },
    {
      name: "Gamma Charge",
      icon: "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1739869138/rivals%20v2/Ammo-Overload-Icon_mxboem.webp",
      heroes: [
        {
          name: "Hulk",
          tallImage:
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1737607168/rivals%20v2/hulk_i6rxrq.png",
        },
        {
          name: "Doctor Strange",
          tallImage:
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1737607172/rivals%20v2/strange_t4560m.png",
        },
        {
          name: "Iron Man",
          tallImage:
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1737607168/rivals%20v2/iron_man_wtebxq.png",
        },
      ],
    },
    {
      name: "Guardian Revival",
      icon: "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1739869138/rivals%20v2/Ammo-Overload-Icon_mxboem.webp",
      heroes: [
        {
          name: "Adam Warlock",
          tallImage:
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1737607167/rivals%20v2/adam_w2m9ek.png",
        },
        {
          name: "Mantis",
          tallImage:
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1737607169/rivals%20v2/mantis_xhldqc.png",
        },
        {
          name: "Star-Lord",
          tallImage:
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1737607171/rivals%20v2/star_du9q4c.png",
        },
      ],
    },
    {
      name: "Lunar Force",
      icon: "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1739869138/rivals%20v2/Ammo-Overload-Icon_mxboem.webp",
      heroes: [
        {
          name: "Cloak & Dagger",
          tallImage:
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1737607168/rivals%20v2/cnd_ivfbce.png",
        },
        {
          name: "Moon Knight",
          tallImage:
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1737619034/rivals%20v2/mk-new_1_tcgzik.png",
        },
      ],
    },
    {
      name: "Metallic Chaos",
      icon: "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1739869138/rivals%20v2/Ammo-Overload-Icon_mxboem.webp",
      heroes: [
        {
          name: "Scarlett Witch",
          tallImage:
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1737607170/rivals%20v2/scar_xspbho.png",
        },
        {
          name: "Magneto",
          tallImage:
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1737607169/rivals%20v2/magneto_wbantn.png",
        },
      ],
    },
    {
      name: "Planet X Pals",
      icon: "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1739869138/rivals%20v2/Ammo-Overload-Icon_mxboem.webp",
      heroes: [
        {
          name: "Jeff",
          tallImage:
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1737607168/rivals%20v2/jeff_wadppv.png",
        },
        {
          name: "Groot",
          tallImage:
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1737607167/rivals%20v2/groot_xxhfud.png",
        },
        {
          name: "Rocket",
          tallImage:
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1737619035/rivals%20v2/rocket-new_1_raqc7g.png",
        },
      ],
    },
    {
      name: "Ragnarok Rebirth",
      icon: "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1739869138/rivals%20v2/Ammo-Overload-Icon_mxboem.webp",
      heroes: [
        {
          name: "Hela",
          tallImage:
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1737607168/rivals%20v2/hela_lluyca.png",
        },
        {
          name: "Thor",
          tallImage:
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1737607172/rivals%20v2/thor_lhhqwi.png",
        },
        {
          name: "Loki",
          tallImage:
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1737607169/rivals%20v2/loki_qeoeyh.png",
        },
      ],
    },
    {
      name: "Symbiote Bond",
      icon: "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1739869138/rivals%20v2/Ammo-Overload-Icon_mxboem.webp",
      heroes: [
        {
          name: "Venom",
          tallImage:
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1737607173/rivals%20v2/venom_lu4wjv.png",
        },
        {
          name: "Spider-Man",
          tallImage:
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1737607170/rivals%20v2/spidey_bti4dq.png",
        },
        {
          name: "Peni Parker",
          tallImage:
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1737607170/rivals%20v2/peni_wdcktf.png",
        },
      ],
    },
    {
      name: "Voltaic Union",
      icon: "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1739869138/rivals%20v2/Ammo-Overload-Icon_mxboem.webp",
      heroes: [
        {
          name: "Thor",
          tallImage:
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1737607172/rivals%20v2/thor_lhhqwi.png",
        },
        {
          name: "Storm",
          tallImage:
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1737607171/rivals%20v2/storm_jan4ge.png",
        },
        {
          name: "Captain America",
          tallImage:
            "https://res.cloudinary.com/dqrtlfjc0/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1737607168/rivals%20v2/cap_j99m6o.png",
        },
      ],
    },
  ];

  return (
    <div>
      <Navbar />
      <main className="bg-[#1B1B29] min-h-[100vh]">
        <div className="w-full px-3 md:px-0 md:w-[1200px] overflow-hidden mx-auto pb-[150px] pt-[40px]">
          <h1 className="text-center font-bold text-3xl text-white">
            Team-Up Counters
          </h1>
          <div className="flex flex-wrap gap-[50px] mt-[60px] mx-auto w-[1080px]">
            {TEAM_UPS.map((teamup: any, idx: number) => (
              <div
                key={idx}
                className="w-[320px] relative bg-[#c8cef0] overflow-hidden"
                onClick={() => setSelectedTeamup(teamup)}
              >
                <div className="flex items-center mx-auto w-[250px]">
                  {teamup.heroes.map((hero: any, heroIdx: number) => (
                    <div
                      key={heroIdx}
                      className="overflow-hidden w-[120px] border-r-2 border-indigo-300 skew-x-[-6deg] bg-[#d4ddeb] h-[270px] relative"
                    >
                      <Image
                        src={hero.tallImage}
                        layout="fill"
                        objectFit="cover"
                        alt={hero.name}
                        className="skew-x-[6deg]"
                      />
                    </div>
                  ))}
                </div>
                <div className="bg-[#1B1B29] w-full h-full py-2 absolute opacity-[93%] -mt-[60px]">
                  <div className="px-3 flex items-center gap-2">
                    <Image
                      src={teamup.icon}
                      width={40}
                      height={40}
                      alt="teamup icon"
                    />
                    <h2 className="uppercase font-bold text-white text-[18px] m-0 p-0">
                      {teamup.name}
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {selectedTeamup && (
          <TeamupCounterModal
            teamup={selectedTeamup}
            onClose={() => {
              window.history.pushState(null, "", `/`);
              setSelectedTeamup(null);
            }}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}
