import Adam from "../assets/heroes/adam_w2m9ek.png";
import Panther from "../assets/heroes/bpnew_xzsr2r.png";
import Widow from "../assets/heroes/btw_pnokvx.png";
import Bucky from "../assets/heroes/bucky_tdwc4f.png";
import Cap from "../assets/heroes/cap_j99m6o.png";
import Cnd from "../assets/heroes/cnd_ivfbce.png";
import Groot from "../assets/heroes/groot_xxhfud.png";
import Hawkeye from "../assets/heroes/hawkeye_yybihp.png";
import Hela from "../assets/heroes/hela_lluyca.png";
import Hulk from "../assets/heroes/hulk_i6rxrq.png";
import Johnny from "../assets/heroes/humantorch_1_jx2y0t.png";
import Invis from "../assets/heroes/invis_woman_sdpex8.png";
import IronMan from "../assets/heroes/ironmannew_eadtkr.png";
import IronFist from "../assets/heroes/iron_fist_uxavml.png";
import Jeff from "../assets/heroes/jeff_wadppv.png";
import Loki from "../assets/heroes/loki_qeoeyh.png";
import Luna from "../assets/heroes/luna_s8dvx4.png";
import Magik from "../assets/heroes/magik_t6cemu.png";
import Magneto from "../assets/heroes/magneto_wbantn.png";
import Mantis from "../assets/heroes/mantis_xhldqc.png";
import MoonKnight from "../assets/heroes/mk-new_1_tcgzik.png";
import Reed from "../assets/heroes/mr_fantastic_np1ays.png";
import Namor from "../assets/heroes/namor_acnpav.png";
import Peni from "../assets/heroes/peni_wdcktf.png";
import Psy from "../assets/heroes/psy_feub8t.png";
import Punisher from "../assets/heroes/punisher_g8ytdf.png";
import Rocket from "../assets/heroes/rocket-new_1_raqc7g.png";
import Wanda from "../assets/heroes/scar_xspbho.png";
import Spidey from "../assets/heroes/spidey_bti4dq.png";
import Squirrel from "../assets/heroes/squi_yo6cgm.png";
import StarLord from "../assets/heroes/star_du9q4c.png";
import Storm from "../assets/heroes/storm_jan4ge.png";
import Strange from "../assets/heroes/strange_t4560m.png";
import Thing from "../assets/heroes/The_Thing_Heroportrait_1_egyvsz.png";
import Thor from "../assets/heroes/thor_lhhqwi.png";
import Venom from "../assets/heroes/venom_lu4wjv.png";
import Wolvie from "../assets/heroes/wolvie_j9xibh.png";

import ThumbAdam from "../assets/thumbs/Adam_Warlock_Icon_exkpa4.webp";
import ThumbPanther from "../assets/thumbs/Black_Panther_Icon_pzkpcd.webp";
import ThumbWidow from "../assets/thumbs/Black_Widow_Icon_hfelvs.webp";
import ThumbCap from "../assets/thumbs/Captain_America_Icon_cehji6.webp";
import ThumbCnd from "../assets/thumbs/Cloak__26_Dagger_Icon_qgjwi4.webp";
import ThumbStrange from "../assets/thumbs/Doctor_Strange_Icon_qtd9ik.webp";
import ThumbGroot from "../assets/thumbs/Groot_Icon_udutn9.webp";
import ThumbHawkeye from "../assets/thumbs/Hawkeye_Icon_q7o2so.webp";
import ThumbHela from "../assets/thumbs/Hela_Icon_kvrhsp.webp";
import ThumbHulk from "../assets/thumbs/Hulk_Icon_d2xnfs.webp";
import ThumbInvis from "../assets/thumbs/invis-woman-x1_bga15m.png";
import ThumbIronFist from "../assets/thumbs/Iron_Fist_Icon_t1byee.webp";
import ThumbIronMan from "../assets/thumbs/Iron_Man_Icon_vyqsna.webp";
import ThumbJeff from "../assets/thumbs/Jeff_the_Land_Shark_Icon_mkp5f4.webp";
import ThumbJohnny from "../assets/thumbs/johnny_g4yy6w.webp";
import ThumbLoki from "../assets/thumbs/Loki_Icon_tysbig.webp";
import ThumbLuna from "../assets/thumbs/Luna_Snow_Icon_snupak.webp";
import ThumbMagik from "../assets/thumbs/Magik_Icon_tkyxty.webp";
import ThumbMagneto from "../assets/thumbs/Magneto_Icon_tlpvn5.webp";
import ThumbMantis from "../assets/thumbs/Mantis_Icon_wjrezu.webp";
import ThumbMoonKnight from "../assets/thumbs/Moon_Knight_Icon_c8keu4.webp";
import ThumbReed from "../assets/thumbs/mr_fantastic_rh931l.png";
import ThumbNamor from "../assets/thumbs/Namor_Icon_ri6epi.webp";
import ThumbPeni from "../assets/thumbs/Peni_Parker_Icon_u0uafv.webp";
import ThumbPsy from "../assets/thumbs/Psylocke_Icon_ls6zo3.webp";
import ThumbRocket from "../assets/thumbs/Rocket_Raccoon_Icon_fqblcl.webp";
import ThumbWanda from "../assets/thumbs/Scarlet_Witch_Icon_mdkxbf.webp";
import ThumbSpidey from "../assets/thumbs/Spider-Man_Icon_lvnyoc.webp";
import ThumbSquirrel from "../assets/thumbs/Squirrel_Girl_Icon_gtg592.webp";
import ThumbStarLord from "../assets/thumbs/Star-Lord_Icon_mvulbd.webp";
import ThumbStorm from "../assets/thumbs/Storm_Icon_ncerpu.webp";
import ThumbPunisher from "../assets/thumbs/The_Punisher_Icon_hqyd44.webp";
import ThumbThing from "../assets/thumbs/The_Thing_Icon_ydoqtg.webp";
import ThumbThor from "../assets/thumbs/Thor_Icon_vziina.webp";
import ThumbVenom from "../assets/thumbs/Venom_Icon_mwro7g.webp";
import ThumbBucky from "../assets/thumbs/Winter_Soldier_Icon_lceqsq.webp";
import ThumbWolvie from "../assets/thumbs/Wolverine_Icon_xhlm8q.webp";

export const HERO_COUNTERS = [
  {
    image: ThumbThing,
    fullImage:
      "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1740119810/rivals%20v2/humantorch_1_jx2y0t.png",
    tallImage: Thing,
    name: "The Thing",
    role: "Vanguard",
    meta: true,
    tier: "A",
    goodAgainst: [],
    counterPicks: [
      {
        image: ThumbGroot,
        name: "Groot",
        role: "Vanguard",
        score: 10,
        description:
          "Groot can use his walls to separate The Thing from his allies, preventing him from leaping to them and get heals. Additionally, Groot has enough damage output to reduce The Thing's HP quickly.",
      },
      {
        name: "Iron Man",
        role: "Duelist",
        score: 10,
        description:
          "Iron Man is powerful against heroes that can't reach him, like The Thing. Additionally, his Unibeam's damage output has increased to 190 per second (previously 180), making him an even bigger threat to The Thing.",
        image: ThumbIronMan,
      },
      {
        image: ThumbSquirrel,
        name: "Squirrel Girl",
        score: 9,
        role: "Duelist",
        description:
          "Her Squirrel Blockade ability can stun The Thing, making him vulnerable to attacks. Additionally, if he decides to sprint toward her, she can simply jump to make a quick escape.",
      },
      {
        name: "Storm",
        role: "Duelist",
        score: 9.5,
        description:
          "Storm's Goddess Boost got nerfed in this patch, but she can still deal massive damage to The Thing while staying safe in the air, even if he isn't inside her weather control area.",
        image: ThumbStorm,
      },
      {
        name: "Hela",
        role: "Duelist",
        score: 9,
        description:
          "Hela can stun The Thing with her Soul Drainer (E) if he charges into the backline. Additionally, her high damage output can quickly reduce his HP.",
        image: ThumbHela,
      },
    ],
  },
  {
    image: ThumbJohnny,
    fullImage:
      "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1740119810/rivals%20v2/humantorch_1_jx2y0t.png",
    tallImage: Johnny,
    name: "Human Torch",
    role: "Duelist",
    meta: false,
    tier: "B",
    counterPicks: [
      {
        image: ThumbHela,
        name: "Hela",
        role: "Duelist",
        score: 10,
        description:
          "Long-range DPS typically outmatches Johnny. And Hela's buff in this patch makes her an easy counter for him, as she can hit him in the air without being threatened by his flames.",
      },
      {
        image: ThumbHawkeye,
        name: "Hawkeye",
        role: "Duelist",
        score: 10,
        description:
          "Similar to Hela, Hawkeye can deal massive damage to Johnny from a safe distance using only his normal attacks.",
      },
      {
        image: ThumbPunisher,
        name: "Punisher",
        role: "Duelist",
        score: 10,
        description:
          "Punisher's a typical counter to aerborne heroes, forcing them always to back up and get threatened by his Culling Turret.",
      },
      {
        image: ThumbPsy,
        name: "Psylocke",
        role: "Duelist",
        score: 9.5,
        description:
          "Psylocke can attack Johnny from unexpected angles and quickly escape using dashes and invisibility to avoid getting caught by his abilities.",
      },
      {
        image: ThumbSpidey,
        name: "Spider-Man",
        role: "Duelist",
        score: 9.6,
        description:
          "The only melee hero who can hunt Johnny while staying safe from his attacks. Spider-Man's swinging ability and the Web-Cluster buff (reduced from 3s to 2.5s) make him a significant threat to Johnny.",
      },
      {
        image: ThumbLuna,
        name: "Luna Snow",
        role: "Strategist",
        description:
          "Luna Snow's ultimate, Fate of Both Worlds, can prevent any damage from Johnny's Supernova.",
      },
    ],
    goodAgainst: [],
  },
  {
    image: ThumbStorm,
    fullImage:
      "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1737607171/rivals%20v2/storm_jan4ge.png",
    tallImage: Storm,
    name: "Storm",
    role: "Duelist",
    meta: true,
    tier: "S",
    situationalCounters: [
      {
        image: ThumbSpidey,
        name: "Spider-Man",
        role: "Duelist",
        score: 8.5,
        descriptions: [
          "In situations where Storm's Goddess Boost (E) is on cooldown, this is an opportunity for Spidey to catch her mid-air and deliver critical damage or a quick kill.",
          "With the help of Venom's Suit Expulsion skill, Spidey can delete Storm with a single combination.",
        ],
      },
      {
        name: "Star-Lord",
        role: "Duelist",
        score: 8.6,
        image: ThumbStarLord,
        descriptions: [
          "In situations where Storm is high up in the air, Star-Lord can exploit her vulnerable position. With her out of sight from her Strategists, she's unlikely to receive healing and leave her exposed to his attacks.",
          "When Star-Lord’s ultimate is charged and Storm is far from her Strategists’ defensive ult on the ground, it will be a guaranteed kill.",
        ],
      },
      {
        name: "Winter Soldier",
        role: "Duelist",
        score: 8.1,
        descriptions: [
          "With great timing, Winter Soldier can catch Storm in mid-air with Bionic hook (Right click). Followed by Trooper’s Fist (E) and a flurry of normal attacks, and it's over for her.",
        ],
        image: ThumbBucky,
      },
    ],
    counterPicks: [
      {
        name: "Doctor Strange",
        role: "Vanguard",
        score: 10,
        description:
          "Strange's shield allows him to block Storm's Wind Blade and Bolt Rush. Additionally, the radius of his shield can help his allies block incoming damage as well.",
        image: ThumbStrange,
      },
      {
        image: ThumbPunisher,
        name: "Punisher",
        role: "Duelist",
        score: 10,
        description:
          "He can land multiple consistent damage to her in a safe distance, forcing her to retreat.",
      },
      {
        image: ThumbHela,
        name: "Hela",
        role: "Duelist",
        score: 10,
        description:
          "Her long-range attacks can be a pain to Storm's low mobility in the air.",
      },
      {
        image: ThumbNamor,
        name: "Namor",
        role: "Duelist",
        score: 9.8,
        description:
          "Namor's long-range attacks and spawns are effective counters to Storm. Additionally, his Blessings of the Deep (Shift) allows him to reposition strategically, allowing him to surprise Storm from unexpected angles.",
      },
      {
        image: ThumbIronFist,
        name: "Iron Fist",
        role: "Duelist",
        score: 8.5,
        description:
          "He can surprise and burst Storm in mid-air and make her ineffective.",
      },
      {
        image: ThumbPsy,
        name: "Psylocke",
        role: "Duelist",
        score: 9,
        description:
          "She can surprise Storm from behind, while her burst damage can force Storm to disengage.",
      },
      {
        name: "Black Widow",
        role: "Duelist",
        score: 9.3,
        description:
          "Black Widow's mechanics as a sniper is a natural counter to Storm as she can snipe her in a safe distance.",
        image: ThumbWidow,
      },
      {
        name: "Luna Snow",
        role: "Strategist",
        score: 8.3,
        description: "Her ultimate ability can block Storm's ultimate.",
        image: ThumbLuna,
      },
      {
        image: ThumbRocket,
        name: "Rocket Racoon",
        role: "Strategist",
        score: 9,
        description:
          "Rocket can easily evade Storm's attacks and ultimate due to his excellent mobility. Additionally, his ultimate amplifies his team, making them a greater threat to Storm in the air by giving them an advantage in damage output.",
      },
    ],
    goodAgainst: [
      {
        name: "Groot",
        description: "",
        image: ThumbGroot,
      },
      {
        name: "Peni Parker",
        description: "",
        image: ThumbPeni,
      },
      {
        name: "Black Panther",
        description: "",
        image: ThumbPanther,
      },
      {
        name: "Magik",
        description: "",
        image: ThumbMagik,
      },
    ],
    weakness: "qrqwr",
  },
  {
    image: ThumbIronMan,
    name: "Iron Man",
    fullImage:
      "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1737607168/rivals%20v2/iron_man_wtebxq.png",
    role: "Duelist",
    tier: "A",
    tallImage: IronMan,
    situationalCounters: [
      {
        image: ThumbStorm,
        name: "Storm",
        role: "Duelist",
        descriptions: [
          "If Iron Man gets into the area of Storm's Goddess Boost ability (E), he will struggle to match her damage output.",
          "In tight spaces where Iron Man can’t fly high in the air, Storm can activate her ultimate on Iron Man's spot and kill him easily.",
        ],
      },
      {
        image: ThumbLoki,
        name: "Loki",
        role: "Strategist",
        descriptions: [
          "While Iron Man is a natural counter to Loki and his clones, Loki can have an advantage if he copies Iron Man and utilize his ultimate.",
        ],
      },
    ],
    counterPicks: [
      {
        image: ThumbStrange,
        name: "Doctor Strange",
        role: "Vanguard",
        score: 10,
        description:
          "Strange can protect his team against Iron Man's normal attacks with his shield. It can also block Iron Man's ultimate if he's in the right position and timing.",
      },
      {
        image: ThumbIronFist,
        name: "Iron Fist",
        role: "Duelist",
        score: 8.6,
        description:
          "Iron Fist can get behind Iron Man and pressure him mid-air. Additionally, he can easily parry any of Iron Man's attacks.",
      },
      {
        image: ThumbRocket,
        name: "Rocket Racoon",
        role: "Strategist",
        score: 9,
        description:
          "Rocket might be the best strategist to counter Iron Man. He can freely hit him in the air while having exceptional mobility that allows him to evade any of Iron Man's attacks. Additionally, his ultimate amplifies his team, making them more of a threat to Iron Man in the air rather than providing a defensive ultimate.",
      },
      {
        image: ThumbNamor,
        name: "Namor",
        role: "Duelist",
        score: 10,
        description:
          "Namor's long-range attacks and spawns are effective counters to Iron Man. Additionally, his Blessings of the Deep (Shift) allows him to reposition strategically, allowing him to surprise Iron Man from unexpected angles.",
      },
      {
        image: ThumbStarLord,
        name: "Star-Lord",
        role: "Duelist",
        score: 9.3,
        description:
          "He can chase and solo-kill Iron Man in mid air almost instantly.",
      },
      {
        image: ThumbPunisher,
        name: "Punisher",
        role: "Duelist",
        score: 10,
        description:
          "He can pressure Iron Man while maintaining consistent damage output, and force him to retreat.",
      },
      {
        image: ThumbPsy,
        name: "Psylocke",
        role: "Duelist",
        score: 9.5,
        description:
          "Her mobility and quick damage output can burst Iron Man before he can even escape.",
      },
      {
        image: ThumbSpidey,
        name: "Spider-Man",
        role: "Duelist",
        score: 9.2,
        description:
          "He can be a pain to deal in the air with or without the Venom's Suit Expulsion skill.",
      },
      {
        name: "Black Widow",
        role: "Duelist",
        score: 9.4,
        description:
          "Black Widow's mechanics as a sniper is a natural counter to Iron Man as she can snipe him in a safe distance.",
        image: ThumbWidow,
      },
      {
        image: ThumbHela,
        name: "Hela",
        role: "Duelist",
        score: 9.98,
        description: "She can land massive damage to him in a safe distance.",
      },
      {
        image: ThumbHawkeye,
        name: "Hawkeye",
        role: "Duelist",
        score: 10,
        description:
          "Similar with Hela, he can land massive damage to him in a safe distance.",
      },
    ],
    goodAgainst: [
      {
        name: "Luna Snow",
        description: "",
        image: ThumbLuna,
      },
      {
        name: "Venom",
        description: "",
        image: ThumbVenom,
      },
      {
        image: ThumbThing,
        name: "The Thing",
        role: "Vanguard",
        description: "",
      },
      {
        image: ThumbGroot,
        name: "Groot",
        description: "",
      },
      {
        name: "Black Panther",
        description: "",
        image: ThumbPanther,
      },
      {
        name: "Peni Parker",
        description: "",
        image: ThumbPeni,
      },
      {
        name: "Jeff",
        description: "",
        image: ThumbJeff,
      },
    ],
    weakness: "qrqwr",
  },
  {
    image: ThumbInvis,
    name: "Invisible Woman",
    meta: true,
    tier: "S",
    tallImage: Invis,
    fullImage:
      "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1737607168/rivals%20v2/invis_woman_sdpex8.png",
    role: "Strategist",
    new: true,
    counterPicks: [
      {
        image: ThumbPunisher,
        name: "Punisher",
        score: 9.0,
        role: "Duelist",
        description:
          "Punisher's ultimate can outdamage Invisible Woman's ultimate.",
      },
      {
        image: ThumbMoonKnight,
        name: "Moon Knight",
        score: 9.3,
        role: "Duelist",
        description:
          "With great positioning, he can pressure her with Crescent Dart.",
      },
      {
        image: ThumbSquirrel,
        name: "Squirrel Girl",
        score: 9.1,
        role: "Duelist",
        description:
          "Squirrel Girl can completely melt ⅓ of Guardian Shield’s health per Burst Acorn (LMB). Her Unbeatable Squirrel Tsunami (Q) passes through her Guardian Shield.",
      },
    ],
    situationalCounters: [
      {
        image: ThumbMagik,
        name: "Magik",
        role: "Duelist",
        descriptions: [
          "Magik's durability and mobility can pressure Sue and force her to retreat rather than healing allies.",
        ],
      },
      {
        image: ThumbSpidey,
        name: "Spider-Man",
        role: "Duelist",
        descriptions: [
          "His high mobility can close the distance and force her to use abilities and reposition.",
        ],
      },
    ],
    goodAgainst: [
      {
        image: ThumbHulk,
        name: "Hulk",
        description: "High burst damage while maintaing safe distance.",
      },
      {
        image: ThumbPanther,
        name: "Black Panther",
        description: "",
      },
      {
        image: ThumbPsy,
        name: "Psylocke",
        description: "",
      },
      {
        name: "Iron Fist",
        description: "",
        image: ThumbIronFist,
      },
      {
        name: "Wolverine",
        description: "",
        image: ThumbWolvie,
      },
    ],
    weakness: "qrqwr",
  },
  {
    image: ThumbReed,
    name: "Mr. Fantastic",
    tier: "B",
    tallImage: Reed,
    role: "Duelist",
    fullImage:
      "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1737607169/rivals%20v2/mr_fantastic_np1ays.png",
    new: true,
    counterPicks: [
      {
        image: ThumbGroot,
        name: "Groot",
        role: "Vanguard",
        score: 10,
        description:
          "Groot can use his walls to separate Mr. Fantastic from his allies, exploiting his low mobility and preventing him from receiving heals.",
      },
      {
        image: ThumbStorm,
        name: "Storm",
        role: "Duelist",
        score: 9.25,
        description:
          "Even though Mr. Fantastic can block Storm's ultimate with Reflexive Rubber, she can still deal massive damage to him using Goddess Boost.",
      },
      {
        image: ThumbPunisher,
        name: "Punisher",
        role: "Duelist",
        score: 9.0,
        description:
          "His Culling Turret ability can melt down Mr. Fantastic's hp before he can even get value.",
      },
      {
        image: ThumbIronMan,
        name: "Iron Man",
        role: "Duelist",
        score: 9.23,
        description:
          "Even though Mr. Fantastic can block Iron Man's ultimate with Reflexive Rubber, his flight abilities and consistent damage output can still overwhelm him.",
      },
      {
        image: ThumbHawkeye,
        name: "Hawkeye",
        score: 9.15,
        role: "Duelist",
        description: "He can pressure Mr. Fantastic from a safe distance.",
      },
      {
        image: ThumbHela,
        name: "Hela",
        score: 9.12,
        role: "Duelist",
        description:
          "Similar to Hawkeye, she can pressure Mr. Fantastic from a safe distance.",
      },
    ],
    goodAgainst: [
      {
        image: ThumbPeni,
        name: "Peni Parker",
        description: "High burst damage while maintaing safe distance.",
      },
      {
        image: ThumbHulk,
        name: "Hulk",
        description: "",
      },
      {
        image: ThumbPanther,
        name: "Black Panther",
        description: "",
      },
      {
        image: ThumbSquirrel,
        name: "Squirrel Girl",
        description: "",
      },
      {
        image: ThumbSpidey,
        name: "Spider-Man",
        description: "",
      },
    ],
    weakness: "qrqwr",
  },
  {
    image: ThumbVenom,
    name: "Venom",
    role: "Vanguard",
    tier: "S",
    tallImage: Venom,
    fullImage:
      "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1737607173/rivals%20v2/venom_lu4wjv.png",
    meta: true,
    counterPicks: [
      {
        image: ThumbPunisher,
        name: "Punisher",
        role: "Duelist",
        score: 9.0,
        description:
          "His Culling Turret ability can be a nightmare for Venom, as it can melt his HP down without giving him a chance to regenerate or escape.",
      },
      {
        name: "Wolverine",
        role: "Duelist",
        score: 9.3,
        description:
          "Wolverine's mechanics counter Venom's playstyle in every way. Since Venom's gameplay relies on pressuring the backline, Wolverine can easily catch him by waiting until he dives and then striking him off guard.",
        image: ThumbWolvie,
      },
      {
        image: ThumbStorm,
        name: "Storm",
        score: 9.5,
        role: "Duelist",
        description:
          "Her Goddess Boost ability and aerial mechanics can pressure Venom if he attempts to dive.",
      },
      {
        image: ThumbMagneto,
        name: "Magneto",
        role: "Vanguard",
        score: 9.1,
        description:
          "His shield can negate Venom’s attacks, while Metal Bulwark shields allies from Venom’s dive attempts.",
      },
      {
        image: ThumbIronMan,
        name: "Iron Man",
        role: "Duelist",
        score: 9.59,
        description:
          "His flight abilities and consistent damage can pressure Venom easily.",
      },
    ],
    goodAgainst: [
      {
        image: ThumbGroot,
        name: "Groot",
        description: "",
      },
      {
        image: ThumbAdam,
        name: "Adam Warlock",
        description: "",
      },
      {
        name: "Luna Snow",
        description: "",
        image: ThumbLuna,
      },
    ],
    weakness: "qrqwr",
  },
  {
    image: ThumbPanther,
    name: "Black Panther",
    tier: "B",
    tallImage: Panther,
    fullImage:
      "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1737607167/rivals%20v2/bp_lyq0v1.png",
    role: "Duelist",
    counterPicks: [
      {
        image: ThumbThing,
        name: "The Thing",
        score: 9.2,
        role: "Vanguard",
        description:
          "The Thing's Yancy Street Charge ability (Shift) prevents Black Panther from using his dashes and kick. When this happens, your team can take advantage of the opening.",
      },
      {
        image: ThumbJohnny,
        name: "Human Torch",
        role: "Duelist",
        score: 9.01,
        description:
          "He can attack freely and control areas, making it difficult for Black Panther to enter. Additionally, he remains out of Black Panther's reach in most areas.",
      },
      {
        image: ThumbStarLord,
        name: "Star-Lord",
        role: "Duelist",
        score: 9.35,
        description:
          "He can land consistent DPS to T'Challa without getting hit by his spears or dashes, making him a natural counter.",
      },
      {
        image: ThumbPeni,
        name: "Peni Parker",
        score: 9.5,
        role: "Vanguard",
        description:
          "She can prevent or slow down Black Panther by placing mines and spider nest.",
      },
      {
        image: ThumbIronMan,
        name: "Iron Man",
        role: "Duelist",
        score: 10,
        description:
          "His flight ability allows him to swiftly burst him down without being reached.",
      },
      {
        image: ThumbStorm,
        name: "Storm",
        score: 10,
        role: "Duelist",
        description:
          "She can deal massive damage to him while being unreachable.",
      },
      {
        image: ThumbNamor,
        name: "Namor",
        role: "Duelist",
        score: 10,
        description:
          "He can disrupt Black Panther from engaging the enemy backline using his spawns.",
      },
      {
        image: ThumbLoki,
        name: "Loki",
        role: "Strategist",
        score: 9.14,
        description:
          "His lamp and clone swapping abilities can prevent Black Panther from killing him instantly.",
      },
      {
        image: ThumbCnd,
        name: "Cloak & Dagger",
        role: "Strategist",
        score: 9.12,
        description:
          "She's the best strategist to counter Black Panther. All of her abilities makes him ineffective in the game.",
      },
    ],
    situationalCounters: [
      {
        image: ThumbMagneto,
        name: "Magneto",
        role: "Vanguard",
        descriptions: [
          "Magneto can block T'Challa's spear with his Metallic Curtain (LShift).",
          "In situations where Black Panther tries to target Magneto's allies, he can give them Metal Bulwark (E), preventing T'Challa from eliminating them with spears and dashes.",
        ],
      },
      {
        image: ThumbPunisher,
        name: "Punisher",
        role: "Duelist",
        descriptions: [
          "Punisher's Culling Turret ability (E) can prevent T'Challa from flanking successfully. And T’Challa will find it hard to eliminate Punisher quickly, as the turret's health boost protects him from instant death.",
        ],
      },
      {
        image: ThumbPsy,
        name: "Psylocke",
        role: "Duelist",
        descriptions: [
          "Psylocke can outmaneuver Black Panther with her Psi-Blade Dashes (LShift) if he tries to target her.",
          "Psylocke can hunt T'Challa with her invisibility, and find where he's hiding before he tries to target her allies, forcing him to use his Spirit Rend (LShift) and make him unable to get in a position again for 8 seconds.",
        ],
      },
      {
        image: ThumbMantis,
        name: "Mantis",
        role: "Strategist",
        descriptions: [
          "If Mantis can land her sleeping ability (LShift) perfectly while T'Challa tries to target her, her Duelists can capitalize on the opening.",
        ],
      },
    ],
    goodAgainst: [
      {
        name: "Adam Warlock",
        description: "",
        image: ThumbAdam,
      },
      {
        name: "Black Widow",
        description: "",
        image: ThumbWidow,
      },
      {
        name: "Hawkeye",
        description: "",
        image: ThumbHawkeye,
      },
      {
        name: "Winter Soldier",
        description: "",
        image: ThumbBucky,
      },
    ],
    weakness: "qrqwr",
  },
  {
    image: ThumbCnd,
    name: "Cloak & Dagger",
    tier: "S",
    tallImage: Cnd,
    fullImage:
      "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1737607168/rivals%20v2/cnd_ivfbce.png",
    role: "Strategist",
    meta: true,
    counterPicks: [
      {
        name: "Magneto",
        role: "Vanguard",
        description:
          "His ultimate can pierce through Cloak and Dagger's ultimate. You just need to time his ult and use it when she stops her dashes.",
        image: ThumbMagneto,
      },
      {
        image: ThumbMagik,
        name: "Magik",
        role: "Duelist",
        description:
          "She can disrupt her by flanking from the back while being tanky and hard to kill.",
      },
      {
        image: ThumbHela,
        name: "Hela",
        role: "Duelist",
        description:
          "Hela can target C&D from a safe distance, forcing her to retreat.",
      },
      {
        image: ThumbHawkeye,
        name: "Hawkeye",
        role: "Duelist",
        description:
          "Same with Hela, he can target C&D from a safe distance, forcing her to retreat.",
      },
      {
        image: ThumbPsy,
        name: "Psylocke",
        role: "Duelist",
        description:
          "She can disrupt C&D by attacking from behind and escaping quickly.",
      },
    ],
    goodAgainst: [
      {
        name: "Black Panther",
        description: "",
        image: ThumbPanther,
      },
      {
        image: ThumbPunisher,
        name: "Punisher",
        description: "",
      },
      {
        name: "Venom",
        description: "",
        image: ThumbVenom,
      },
      {
        image: ThumbHulk,
        name: "Hulk",
        description: "",
      },
    ],
    weakness: "qrqwr",
  },
  {
    image: ThumbGroot,
    name: "Groot",
    tier: "A",
    tallImage: Groot,
    role: "Vanguard",
    fullImage:
      "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1737607167/rivals%20v2/groot_xxhfud.png",
    counterPicks: [
      {
        image: ThumbPunisher,
        name: "Punisher",
        role: "Duelist",
        description:
          "He can easily destroy Groot's walls and deal massive damage to Groot as well.",
      },
      {
        image: ThumbVenom,
        name: "Venom",
        role: "Vanguard",
        description:
          "Venom can escape over Groot's walls whenever Groot decides to block him in the back.",
      },
      {
        image: ThumbStorm,
        name: "Storm",
        role: "Duelist",
        description:
          "Her Goddess Boost ability can simply burst him from above.",
      },
      {
        name: "Wolverine",
        role: "Duelist",
        description:
          "He can easily catch Groot and focus on him due to his low mobility.",
        image: ThumbWolvie,
      },
      {
        image: ThumbIronMan,
        name: "Iron Man",
        role: "Duelist",
        description:
          "He can pressure Groot and force him to back up or melt his hp with his Unibeam ability.",
      },
      {
        image: ThumbBucky,
        name: "Winter Soldier",
        role: "Duelist",
        description:
          "He can easily hook Groot if he overcommits and kill him instantly since Groot has low mobility.",
      },
      {
        image: ThumbHela,
        name: "Hela",
        role: "Duelist",
        description:
          "Groot has low mobility. So she can pressure Groot and force him to back up.",
      },
      {
        image: ThumbCnd,
        name: "Cloak & Dagger",
        role: "Strategist",
        description:
          "Cloak and Dagger can blind Groot, making it difficult for him to determine where to build a wall. Additionally, her bubble and ultimate can block any incoming damage while inside Groot's ultimate.",
      },
    ],
    goodAgainst: [
      {
        name: "Mantis",
        description: "",
        image: ThumbMantis,
      },
      {
        name: "Luna Snow",
        description: "",
        image: ThumbLuna,
      },
      {
        image: ThumbHawkeye,
        name: "Hawkeye",
        description: "",
      },
      {
        image: ThumbWidow,
        name: "Black Widow",
        description: "",
      },
    ],
    weakness: "qrqwr",
  },
  {
    image: ThumbHela,
    name: "Hela",
    role: "Duelist",
    tier: "A",
    tallImage: Hela,
    fullImage:
      "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1737607168/rivals%20v2/hela_lluyca.png",
    counterPicks: [
      {
        image: ThumbPunisher,
        name: "Punisher",
        role: "Duelist",
        score: 9.15,
        description:
          "Punisher's consistent damage output can pressure Hela and force her to retreat.",
      },
      {
        image: ThumbMagik,
        name: "Magik",
        role: "Duelist",
        score: 9.3,
        description:
          "Magik's mechanics allow her to pressure Hela in the backline, even with her Strategists around. And unlike T'challa, Magik can still live even if she gets hit with Hela's ",
      },
      {
        image: ThumbStrange,
        name: "Doctor Strange",
        role: "Vanguard",
        score: 9.89,
        description:
          "He can block Hela's attacks and ultimate by flying and shielding in front of her.",
      },
      {
        image: ThumbLuna,
        name: "Luna Snow",
        role: "Strategist",
        score: 9.0,
        description:
          "Luna Snow can make Hela less of a threat with her ultimate.",
      },
      {
        image: ThumbLoki,
        name: "Loki",
        score: 9.5,
        role: "Strategist",
        description: "His mischief abilities can slow down Hela's playstyle.",
      },
    ],
    evenMatchups: [
      {
        image: ThumbHawkeye,
        name: "Hawkeye",
        description:
          "His range and vision control can force her to play defensively.",
      },
    ],
    goodAgainst: [
      {
        name: "Iron Man",
        description: "",
        image: ThumbIronMan,
      },
      {
        name: "Storm",
        description: "",
        image: ThumbStorm,
      },
      {
        name: "Star-Lord",
        description: "",
        image: ThumbStarLord,
      },
      {
        image: ThumbWidow,
        name: "Black Widow",
        description: "",
      },
    ],
    weakness: "qrqwr",
  },
  {
    image: ThumbLuna,
    name: "Luna Snow",
    tallImage: Luna,
    fullImage:
      "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1737607169/rivals%20v2/luna_s8dvx4.png",
    role: "Strategist",
    tier: "S",
    meta: true,
    counterPicks: [
      {
        image: ThumbIronMan,
        name: "Iron Man",
        role: "Duelist",
        description: "His ultimate can pierce through Luna Snow's ultimate.",
        score: 9.5,
      },
      {
        image: ThumbPunisher,
        name: "Punisher",
        role: "Duelist",
        description: "Punisher's ultimate can outdamage Luna Snow's ultimate.",
        score: 9,
      },
      {
        image: ThumbPsy,
        name: "Psylocke",
        role: "Duelist",
        description:
          "Psylocke can easily flank and solo-kill Luna, while avoiding her freezing ability with dashes and invisibility.",
      },
      {
        image: ThumbWanda,
        name: "Scarlet Witch",
        role: "Duelist",
        description:
          "Her ultimate ability can pierce through Luna Snow's ultimate.",
      },
      {
        image: ThumbCap,
        name: "Captain America",
        role: "Vanguard",
        description:
          "He can rush forward and pressure her, since Luna has limited mobility. And his shield can block her freezing ability.",
      },
      {
        image: ThumbLoki,
        name: "Loki",
        role: "Strategist",
        description: "Loki can simply copy Luna and activate her ultimate.",
      },
    ],
    goodAgainst: [
      {
        name: "Spider-Man",
        description: "",
        image: ThumbSpidey,
      },
      {
        image: ThumbStarLord,
        name: "Star-Lord",
        description: "",
      },
      {
        image: ThumbGroot,
        name: "Groot",
        description: "",
      },
    ],
    weakness: "qrqwr",
  },
  {
    image: ThumbMagik,
    fullImage:
      "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1737607169/rivals%20v2/magik_t6cemu.png",
    tallImage: Magik,
    name: "Magik",
    tier: "B",
    role: "Duelist",
    counterPicks: [
      {
        image: ThumbIronMan,
        name: "Iron Man",
        role: "Duelist",
        description:
          "Magik typically struggles against aerial heroes, just like Iron Man. Additionally, when Magik decides to flank the backline, Iron Man can simply spam normal attacks to pressure her and force her to retreat.",
      },
      {
        image: ThumbNamor,
        name: "Namor",
        role: "Duelist",
        description:
          "Namor can pressure Magik to prevent her from engaging the backline using his spawns.",
      },
      {
        image: ThumbStorm,
        name: "Storm",
        role: "Duelist",
        description:
          "Similar to Iron Man, Magik would have difficulty reaching Storm in certain areas, and Storm typically has the advantage when it comes to attacking freely. However, Storm has limited mobility, and Magik can still reach and kill her with a few well-executed combos.",
      },
      {
        image: ThumbStrange,
        name: "Doctor Strange",
        role: "Vanguard",
        description:
          "His Eye of Agamotto prevents Magik from teleporting. Additionally, he can play defensively if his backline is being pressured.",
      },
      {
        image: ThumbLuna,
        name: "Luna Snow",
        role: "Strategist",
        description: "Freezing abilities disrupt her combos.",
      },
    ],
    goodAgainst: [
      {
        name: "Adam Warlock",
        description: "",
        image: ThumbAdam,
      },
      {
        name: "Spider-Man",
        description: "",
        image: ThumbSpidey,
      },
      {
        name: "Punisher",
        description: "",
        image: ThumbPunisher,
      },
      {
        name: "Loki",
        description: "",
        image: ThumbLoki,
      },
    ],
    weakness: "qrqwr",
  },
  {
    image: ThumbIronFist,
    name: "Iron Fist",
    tier: "C",
    tallImage: IronFist,
    role: "Duelist",
    fullImage:
      "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1737607168/rivals%20v2/iron_fist_uxavml.png",
    counterPicks: [
      {
        image: ThumbNamor,
        name: "Namor",
        role: "Duelist",
        description:
          "Namor can disrupt Iron Fist from engaging the enemy backline using his spawns.",
      },
      {
        image: ThumbCap,
        name: "Captain America",
        role: "Vanguard",
        description:
          "Cap is too tanky to be burst by Iron Fist. Plus he can use shield to negate his normal attacks.",
      },
      {
        image: ThumbInvis,
        name: "Invisible Woman",
        role: "Strategist",
        description:
          "With her Close Quarter Combat combo, or even her simple Agile Strike + Force Physics — Sue can effectively flake off an Iron Fist. Her Force Physics is also doubled whenever he uses his Harmony Recovery (E).",
      },
      {
        image: ThumbRocket,
        name: "Rocket Racoon",
        role: "Strategist",
        description:
          "Rocket can escape easily when he gets pounced by Iron Fist, making it difficult for him to be killed.",
      },
      {
        image: ThumbLoki,
        name: "Loki",
        role: "Strategist",
        description:
          "Iron Fist won't be able to land damage inside Loki's Regeneration Domain.",
      },
    ],
    situationalCounters: [
      {
        image: ThumbMoonKnight,
        name: "Moon Knight",
        role: "Duelist",
        descriptions: [
          "Most of the time, Iron Fist counters Moon Knight easily. However, if Moon Knight secures a good position with his Ancient Ankh (E), he can burst down Iron Fist if he decides to get in his spot and target him.",
        ],
      },
      {
        image: ThumbStorm,
        name: "Storm",
        role: "Duelist",
        descriptions: [
          "Iron Fist is a natural counter to Storm, but she can still eliminate you in a single instance if she times your last HP with Bolt Rush (Right Click) perfectly, without giving you a chance to activate your armor (Passive blue health).",
        ],
      },
      {
        image: ThumbLuna,
        name: "Luna Snow",
        role: "Strategist",
        descriptions: [
          "Luna Snow's Absolute Zero (Right Click) ability will freeze him and disable his actions for a few seconds, leaving him immobile.",
          "Luna Snow's ultimate ability can prevent Iron fist's ultimate from dealing any damage.",
        ],
      },
      {
        image: ThumbBucky,
        name: "Winter Soldier",
        role: "Duelist",
        descriptions: [
          "Winter Soldier's can kill him instantly if Bionic Hook (Right Click) lands successfully + Trooper's Fist (LShift) and a few normal attacks, preventing Iron Fist from regenerating.",
        ],
      },
      {
        image: ThumbMantis,
        name: "Mantis",
        role: "Strategist",
        descriptions: [
          "Her Spore Slumber (LShift) ability will make him sleep for 3.5s if he doesn't get disrupted, leaving him immobile.",
          "Her ultimate ability can prevent Iron fist's ultimate from dealing any damage.",
        ],
      },
      {
        image: ThumbHulk,
        name: "Hulk",
        role: "Vanguard",
        descriptions: [
          "Hulk's Indestructible Guard (LShift) can prevent Iron Fist from targeting him, as Iron Fist will deal little to no damage against him.",
          "Indestructible Guard (LShift) can also help allies when they're being targeted by Iron Fist. And his Radioactive Lockdown (E) can easily be casted and disable Iron Fist because he's most likely to attack in a straight angle only.",
        ],
      },
    ],
    // howToCounter: {
    //   image: "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1737875032/Rivals%20positioning/iron-fist-backline_ltc29z.png",
    //   description: `<ul class="custom-ul">
    //                   <li>
    //                     <span>1. If <img src="https://res.cloudinary.com/dqrtlfjc0/image/upload/v1737873939/Rivals%20positioning/iron-fist-red_brrfvh.png" width="30" height="30" style="display: inline-block; vertical-align: middle;"/> Iron Fist decides to engage to <img src="https://res.cloudinary.com/dqrtlfjc0/image/upload/v1737873939/Rivals%20positioning/mantis-blue_met7dl.png" width="30" height="30" style="display: inline-block; vertical-align: middle;"/> Mantis, she can easily make him sleep and ping <img src="https://res.cloudinary.com/dqrtlfjc0/image/upload/v1737873939/Rivals%20positioning/storm-blue_pz6buu.png" width="30" height="30" style="display: inline-block; vertical-align: middle;"/> Storm to kill him afterwards.</span>
    //                   </li>
    //                   <li>
    //                     <span>2. If <img src="https://res.cloudinary.com/dqrtlfjc0/image/upload/v1737873939/Rivals%20positioning/iron-fist-red_brrfvh.png" width="30" height="30" style="display: inline-block; vertical-align: middle;"/> Iron Fist decides to engage to <img src="https://res.cloudinary.com/dqrtlfjc0/image/upload/v1737873939/Rivals%20positioning/storm-blue_pz6buu.png" width="30" height="30" style="display: inline-block; vertical-align: middle;"/> Storm, <img src="https://res.cloudinary.com/dqrtlfjc0/image/upload/v1737873939/Rivals%20positioning/mantis-blue_met7dl.png" width="30" height="30" style="display: inline-block; vertical-align: middle;"/> Mantis will be able to see him and make him sleep while healing <img src="https://res.cloudinary.com/dqrtlfjc0/image/upload/v1737873939/Rivals%20positioning/storm-blue_pz6buu.png" width="30" height="30" style="display: inline-block; vertical-align: middle;"/> Storm.</span>
    //                   </li>
    //                 </ul>`
    // },
    goodAgainst: [
      {
        name: "Iron Man",
        description: "",
        image: ThumbIronMan,
      },
      {
        name: "Storm",
        description: "",
        image: ThumbStorm,
      },
      {
        name: "Spider-Man",
        description: "",
        image: ThumbSpidey,
      },
      {
        name: "Black Panther",
        description: "",
        image: ThumbPanther,
      },
    ],
    weakness: "qrqwr",
  },
  {
    image: ThumbPeni,
    name: "Peni Parker",
    tier: "B",
    tallImage: Peni,
    role: "Vanguard",
    fullImage:
      "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1737607170/rivals%20v2/peni_wdcktf.png",
    counterPicks: [
      {
        image: ThumbIronMan,
        name: "Iron Man",
        role: "Duelist",
        score: 10,
        description:
          "Flight abilities allow him to bypass nests and mines, giving him freedom to attack her from any angle.",
      },
      {
        image: ThumbStorm,
        name: "Storm",
        score: 10,
        role: "Duelist",
        description:
          "Her Normal attacks and Bolt Rush ability are more than enough to reduce Peni's HP instantly. She can also destroy nests and mines easily.",
      },
      {
        image: ThumbPunisher,
        name: "Punisher",
        role: "Duelist",
        score: 9.75,
        description:
          "He can quickly destroy spider nests and mines from a safe distance.",
      },
      {
        image: ThumbStarLord,
        name: "Star-Lord",
        role: "Duelist",
        score: 9.9,
        description:
          "He can pressure from different angles while maintaining consistent damage output",
      },
      {
        image: ThumbStrange,
        name: "Doctor Strange",
        score: 9.5,
        role: "Vanguard",
        description:
          "Shield and portals help team push through her defenses while blocking her damage",
      },
      {
        image: ThumbNamor,
        name: "Namor",
        role: "Duelist",
        score: 9.8,
        description:
          "Namor can also destroy Peni's spider nests and mines from a safe distance while protecting his allies with his spawns.",
      },
      {
        image: ThumbGroot,
        name: "Groot",
        score: 9.7,
        role: "Vanguard",
        description:
          "His normal attacks can destroy spider nests and mines from a safe position.",
      },
      {
        image: ThumbLoki,
        name: "Loki",
        score: 9.3,
        role: "Strategist",
        description:
          "Can escape to Peni's ultimate easily by swapping position to another doppleganger.",
      },
    ],
    goodAgainst: [
      {
        name: "Black Panther",
        description: "",
        image: ThumbPanther,
      },
      {
        name: "Magik",
        description: "",
        image: ThumbMagik,
      },
      {
        name: "Wolverine",
        description: "",
        image: ThumbWolvie,
      },
      {
        name: "Hulk",
        description: "",
        image: ThumbHulk,
      },
      {
        name: "Iron Fist",
        description: "",
        image: ThumbIronFist,
      },
    ],
    weakness: "qrqwr",
  },
  {
    image: ThumbHulk,
    name: "Hulk",
    tier: "S",
    tallImage: Hulk,
    role: "Vanguard",
    fullImage:
      "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1737607168/rivals%20v2/hulk_i6rxrq.png",
    meta: true,
    counterPicks: [
      {
        image: ThumbIronMan,
        name: "Iron Man",
        role: "Duelist",
        description:
          "He can pressure Hulk from above using his Unibeam ability, preventing him from diving onto the back line.",
      },
      {
        name: "Storm",
        role: "Duelist",
        description:
          "Her Goddess Boost and consistent damage output can force Hulk to retreat.",
        image: ThumbStorm,
      },
      {
        image: ThumbPunisher,
        name: "Punisher",
        role: "Duelist",
        description:
          "He can melt Hulk's hp with his consistent DPS and force him to retreat.",
      },
      {
        image: ThumbNamor,
        name: "Namor",
        role: "Duelist",
        description:
          "Namor can also melt Thor's HP from a safe distance while protecting his allies with his spawns.",
      },
      {
        image: ThumbThor,
        name: "Thor",
        role: "Vanguard",
        description:
          "Thor can pressure and push Hulk away out of his position.",
      },
    ],
    situationalCounters: [
      {
        image: ThumbPeni,
        name: "Peni Parker",
        role: "Vanguard",
        descriptions: [
          "Peni Parker's Spider nests and mines can prevent Hulk from engaging the front lines and other areas.",
        ],
      },
      {
        image: ThumbWolvie,
        name: "Wolverine",
        role: "Duelist",
        descriptions: [
          "Wolverine can dismantle Hulk with flurry of attacks if he tries to engage the back line.",
          "Wolverine's ultimate ability Last Stand (E) is simply a counter to Hulk.",
        ],
      },
      {
        image: ThumbMantis,
        name: "Mantis",
        role: "Strategist",
        descriptions: [
          "If Hulk doesn't have his bubble, Mantis can shut him down with her sleeping ability (LShift).",
        ],
      },
      {
        image: ThumbLuna,
        name: "Luna Snow",
        role: "Strategist",
        descriptions: [
          "If Hulk doesn't have his bubble, Luna Snow can simply freeze him with her Absolute Zero (E) ability.",
        ],
      },
    ],
    goodAgainst: [
      {
        name: "Black Panther",
        description: "",
        image: ThumbPanther,
      },
      {
        name: "Doctor Strange",
        description: "",
        image: ThumbStrange,
      },
      {
        name: "Groot",
        description: "",
        image: ThumbGroot,
      },
      {
        name: "Adam Warlock",
        description: "",
        image: ThumbAdam,
      },
      {
        name: "Cloak & Dagger",
        description: "",
        image: ThumbCnd,
      },
    ],
    weakness: "qrqwr",
  },
  {
    image: ThumbHawkeye,
    name: "Hawkeye",
    tier: "A",
    tallImage: Hawkeye,
    fullImage:
      "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1737607167/rivals%20v2/hawkeye_yybihp.png",
    role: "Duelist",
    counterPicks: [
      {
        image: ThumbPsy,
        name: "Psylocke",
        role: "Duelist",
        description:
          "Her high mobility and burst damage can kill him from behind.",
      },
      {
        name: "Groot",
        role: "Vanguard",
        description: "He can easily block his arrows with walls.",
        image: ThumbGroot,
      },
      {
        image: ThumbSpidey,
        name: "Spider-Man",
        role: "Duelist",
        description:
          "He can eliminate Hawkeye with a single combo if he catches him off guard.",
      },
      {
        image: ThumbHela,
        name: "Hela",
        role: "Duelist",
        description:
          "Her long distance shots makes him focus on her instead of attacking her allies.",
      },
    ],
    goodAgainst: [
      {
        name: "Iron Man",
        description: "",
        image: ThumbIronMan,
      },
      {
        name: "Peni Parker",
        description: "",
        image: ThumbPeni,
      },
      {
        name: "Jeff",
        description: "",
        image: ThumbJeff,
      },
      {
        name: "Adam Warlock",
        description: "",
        image: ThumbAdam,
      },
      {
        name: "Black Widow",
        description: "",
        image: ThumbWidow,
      },
    ],
    weakness: "qrqwr",
  },
  {
    image: ThumbPsy,
    name: "Psylocke",
    tier: "S",
    meta: true,
    tallImage: Psy,
    fullImage:
      "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1737607170/rivals%20v2/psy_feub8t.png",
    role: "Duelist",
    counterPicks: [
      {
        image: ThumbStarLord,
        name: "Star-Lord",
        role: "Duelist",
        description:
          "Star-Lord's mobility, evasiveness, and consistent damage can outmatch Psylocke in a one-on-one situation.",
      },
      {
        image: ThumbWanda,
        name: "Scarlet Witch",
        role: "Duelist",
        description:
          "Wanda can overwhelm Psylocke with her constant DPS while being invisible and safe from her attacks.",
      },
      {
        name: "Venom",
        role: "Vanguard",
        description:
          "Unlike other vanguards, who can be easily punished by Psylocke's attacks, Venom is too mobile and tanky for her to handle.",
        image: ThumbVenom,
      },
      {
        image: ThumbInvis,
        name: "Invisible Woman",
        role: "Strategist",
        description:
          "Sue’s invisibility exempts her from being in the line of sight for Psylocke’s Dance of the Butterfly (Q). The healing rate of Invisible Boundary (Q) also outheals the damage done by Psylocke’s ultimate.",
      },
    ],
    situationalCounters: [
      {
        name: "Namor",
        role: "Duelist",
        descriptions: [
          "Namor can defend the backline with spawns and pressure Psylocke from flanking.",
        ],
        image: ThumbNamor,
      },
      {
        image: ThumbPunisher,
        name: "Punisher",
        role: "Duelist",
        descriptions: [
          "When in turret mode, Punisher can track down Psylocke even when she's not on sight.",
        ],
      },
      {
        name: "Luna Snow",
        role: "Strategist",
        descriptions: [
          "Luna Snow's ultimate ability negates Psylocke's ultimate ability.",
        ],
        image: ThumbLuna,
      },
      {
        name: "Mantis",
        role: "Strategist",
        descriptions: [
          "Mantis's ultimate ability negates Psylocke's ultimate ability.",
        ],
        image: ThumbMantis,
      },
    ],
    goodAgainst: [
      {
        name: "Storm",
        description: "",
        image: ThumbStorm,
      },
      {
        image: ThumbIronMan,
        name: "Iron Man",
        description: "",
      },
      {
        name: "Groot",
        description: "",
        image: ThumbGroot,
      },
      {
        name: "Jeff",
        description: "",
        image: ThumbJeff,
      },
      {
        name: "Rocket",
        description: "",
        image: ThumbRocket,
      },
      {
        name: "Black Widow",
        description: "",
        image: ThumbWidow,
      },
    ],
    weakness: "qrqwr",
  },
  {
    image: ThumbCap,
    name: "Captain America",
    tier: "B",
    fullImage:
      "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1737607168/rivals%20v2/cap_j99m6o.png",
    role: "Vanguard",
    tallImage: Cap,
    meta: true,
    counterPicks: [
      {
        image: ThumbGroot,
        name: "Groot",
        role: "Vanguard",
        description:
          "Even though Cap can escape Groot's wall, Groot's damage output can shred Cap's HP, and he can easily reach him with his normal attacks.",
      },
      {
        image: ThumbNamor,
        name: "Namor",
        role: "Duelist",
        score: 9.8,
        description:
          "Namor's Frozen Spawn (C) and Aquatic Dominion (E) are the biggest counters to divers like Cap.",
      },
      {
        image: ThumbHela,
        name: "Hela",
        role: "Duelist",
        description:
          "Her Soul Drainer's stun and massive damage can pressure him from a safe distance.",
      },
      {
        image: ThumbStorm,
        name: "Storm",
        role: "Duelist",
        description:
          "Her aerial abilities and consistent damage output can make him less of a threat.",
      },
      {
        name: "Scarlet Witch",
        role: "Duelist",
        description:
          "Her consistent DPS can overwhelm him if he dives into the backline.",
        image: ThumbWanda,
      },
      {
        name: "Loki",
        role: "Strategist",
        description:
          "His clones and mobility can make it hard for Cap to pressure him.",
        image: ThumbLoki,
      },
    ],
    goodAgainst: [
      {
        name: "Black Panther",
        description: "",
        image: ThumbPanther,
      },
      {
        name: "Adam Warlock",
        description: "",
        image: ThumbAdam,
      },
      {
        name: "Groot",
        description: "",
        image: ThumbGroot,
      },
      {
        name: "Rocket",
        description: "",
        image: ThumbRocket,
      },
    ],
    weakness: "qrqwr",
  },
  {
    image: ThumbMoonKnight,
    name: "Moon Knight",
    meta: true,
    tier: "S",
    tallImage: MoonKnight,
    fullImage:
      "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1737607169/rivals%20v2/moon_knight_lxkm3i.png",
    role: "Duelist",
    counterPicks: [
      {
        image: ThumbStorm,
        name: "Storm",
        role: "Duelist",
        description:
          "Her higher aerial abilities and long-range attacks can pressure Moon Knight and force him to change position.",
      },
      {
        image: ThumbPanther,
        name: "Black Panther",
        role: "Duelist",
        description:
          "Moon Knight's Ankh can be useless to Black Panther, since he can simply dash out of its area of effect, while still dealing massive damage to him.",
      },
      {
        image: ThumbIronMan,
        name: "Iron Man",
        role: "Duelist",
        description:
          "Moon Knight's abilities are useless to unreachable heroes like Iron Man. Additionally, Iron Man can outdamage his normal attacks if he tries to target him.",
      },
      {
        image: ThumbSpidey,
        name: "Spider-Man",
        role: "Duelist",
        description:
          "He can hunt down Moon Knight and kill him with a single combination with our without Venom's suit expulsion skill (C).",
      },
      {
        name: "Magneto",
        role: "Vanguard",
        description:
          "His shield and Metal Bulwark simply deny Moon Knight’s attacks.",
        image: ThumbMagneto,
      },
      {
        name: "Psylocke",
        role: "Duelist",
        description:
          "She can hunt Moon Knight from behind and kill him instantly.",
        image: ThumbPsy,
      },
    ],
    situationalCounters: [
      {
        image: ThumbMagik,
        name: "Magik",
        role: "Duelist",
        descriptions: [
          "With or without Moon Knight's Ankh, Magik can hunt him easily if she gets in his position.",
          "Magik's Stepping Discs abilith (LShift), allows her to escape Moon Knight's ankh even in close range.",
        ],
      },
      {
        image: ThumbIronFist,
        name: "Iron Fist",
        role: "Duelist",
        descriptions: [
          "Without Moon Knight's ankh, Iron Fist can burst him with flurry of normal attacks.",
        ],
      },
    ],
    goodAgainst: [
      {
        name: "Punisher",
        description: "",
        image: ThumbPunisher,
      },
      {
        name: "Namor",
        description: "",
        image: ThumbNamor,
      },
      {
        name: "Peni Parker",
        description: "",
        image: ThumbPeni,
      },
      {
        name: "Adam Warlock",
        description: "",
        image: ThumbAdam,
      },
      {
        name: "Luna Snow",
        description: "",
        image: ThumbLuna,
      },
    ],
    weakness: "qrqwr",
  },
  {
    image: ThumbLoki,
    name: "Loki",
    tier: "A",
    tallImage: Loki,
    fullImage:
      "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1737607169/rivals%20v2/loki_qeoeyh.png",
    role: "Strategist",
    counterPicks: [
      {
        image: ThumbMoonKnight,
        name: "Moon Knight",
        role: "Duelist",
        description:
          "He can easily destroy Loki's clones and prevent him from getting his preferred position.",
      },
      {
        image: ThumbIronMan,
        name: "Iron Man",
        role: "Duelist",
        description:
          "He can track the original Loki from above and deal massive damage to him.",
      },
      {
        image: ThumbPunisher,
        name: "Punisher",
        role: "Duelist",
        description:
          "Punisher's turret mode can easily eliminate Loki's wand and clones and force him to reposition.",
      },
    ],
    goodAgainst: [
      {
        name: "Black Panther",
        description: "",
        image: ThumbPanther,
      },
      {
        name: "Psylocke",
        description: "",
        image: ThumbPsy,
      },
      {
        name: "Magik",
        description: "",
        image: ThumbMagik,
      },
      {
        name: "Luna Snow",
        description: "",
        image: ThumbLuna,
      },
      {
        image: ThumbCnd,
        name: "Cloak & Dagger",
        description: "",
      },
      {
        image: ThumbPeni,
        name: "Peni Parker",
        description: "",
      },
    ],
    weakness: "qrqwr",
  },
  {
    image: ThumbMantis,
    name: "Mantis",
    tier: "S",
    fullImage:
      "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1737607169/rivals%20v2/mantis_xhldqc.png",
    role: "Strategist",
    tallImage: Mantis,
    meta: true,
    counterPicks: [
      {
        image: ThumbIronMan,
        name: "Iron Man",
        role: "Duelist",
        description:
          "He can easily pressure Mantis from above and force her to hide.",
      },
      {
        image: ThumbPunisher,
        name: "Punisher",
        role: "Duelist",
        description: "Punisher's ultimate can outdamage Mantis's ultimate.",
      },
      {
        image: ThumbIronFist,
        name: "Iron Fist",
        role: "Duelist",
        description:
          "He can deal massive damage to Mantis and force her to use resources rather than healing allies.",
      },
      {
        image: ThumbCap,
        name: "Captain America",
        role: "Vanguard",
        description:
          "He can chase and harass Mantis and avoid sleeping abilities using his shield.",
      },
      {
        image: ThumbPsy,
        name: "Psylocke",
        role: "Duelist",
        description:
          "Her mobility and mid-range attacks can pressure Mantis from the backline without being stunned.",
      },
    ],
    goodAgainst: [
      {
        name: "Magik",
        description: "",
        image: ThumbMagik,
      },
      {
        name: "Peni Parker",
        description: "",
        image: ThumbPeni,
      },
      {
        name: "Namor",
        description: "",
        image: ThumbNamor,
      },
    ],
    weakness: "qrqwr",
  },
  {
    image: ThumbSpidey,
    name: "Spider-Man",
    tier: "B",
    tallImage: Spidey,
    fullImage:
      "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1737607170/rivals%20v2/spidey_bti4dq.png",
    role: "Duelist",
    counterPicks: [
      {
        image: ThumbNamor,
        name: "Namor",
        role: "Duelist",
        description:
          "His spawns disrupts Spider-Man's ability to pressure the backline.",
      },
      {
        image: ThumbIronFist,
        name: "Iron Fist",
        role: "Duelist",
        description:
          "He's stronger against him in one-on-one combat, and can chase him in the air using double jumps.",
      },
      {
        image: ThumbStrange,
        name: "Doctor Strange",
        role: "Vanguard",
        description:
          "Shield of Seraphim blocks web attacks, and his crowd control abilities disrupt Spider-Man’s combos",
      },
      {
        image: ThumbHela,
        name: "Hela",
        role: "Duelist",
        description:
          "With great positioning, she can instantly kill Spider-Man with few attacks. Plus she has an escape if Spider-Man decides to combo her.",
      },
      {
        image: ThumbHawkeye,
        name: "Hawkeye",
        role: "Duelist",
        description:
          "He can instantly kill Spider-Man with 2-3 shots before Spider-Man even has a chance to dive.",
      },
      {
        image: ThumbLuna,
        name: "Luna Snow",
        role: "Strategist",
        description:
          "Her freezing abilities can disrupt his attacks from the backline. She can also negate Spider-Man's ultimate with her own ultimate.",
      },
    ],
    goodAgainst: [
      {
        name: "Iron Man",
        description: "",
        image: ThumbIronMan,
      },
      {
        name: "Storm",
        description: "",
        image: ThumbStorm,
      },
      {
        name: "Peni Parker",
        description: "",
        image: ThumbPeni,
      },
      {
        name: "Moon Knight",
        description: "",
        image: ThumbMoonKnight,
      },
    ],
    weakness: "qrqwr",
  },
  {
    image: ThumbRocket,
    name: "Rocket Racoon",
    tier: "A",
    tallImage: Rocket,
    fullImage:
      "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1737607170/rivals%20v2/rocket_g4v6nw.png",
    role: "Strategist",
    counterPicks: [
      {
        image: ThumbStarLord,
        name: "Star-Lord",
        role: "Duelist",
        description:
          "He can chase Rocket at the back while avoiding minigun fire.",
      },
      {
        image: ThumbPanther,
        name: "Black Panther",
        role: "Duelist",
        description:
          "He can pressure Rocket and make him focus on escaping instead of healing allies.",
      },
      {
        image: ThumbIronMan,
        name: "Iron Man",
        role: "Duelist",
        description:
          "With his flight abilities, he can pressure Rocket and deal massive damage to him from above.",
      },
      {
        image: ThumbPsy,
        name: "Psylocke",
        role: "Duelist",
        description:
          "She can flank easily at the back with invisibility, forcing him to escape instead of healing allies.",
      },
      {
        image: ThumbVenom,
        name: "Venom",
        role: "Vanguard",
        description:
          "Venom can dive and chase Rocket with his high mobility and survivability.",
      },
    ],
    goodPairWith: [
      {
        image: ThumbPunisher,
        name: "Punisher",
        description: "",
      },
      {
        image: ThumbBucky,
        name: "Winter Soldier",
        description: "",
      },
      {
        image: ThumbGroot,
        name: "Groot",
        description: "",
      },
    ],
    goodAgainst: [],
    weakness: "qrqwr",
  },
  {
    image: ThumbWolvie,
    name: "Wolverine",
    tier: "A",
    tallImage: Wolvie,
    fullImage:
      "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1737607173/rivals%20v2/wolvie_j9xibh.png",
    role: "Duelist",
    meta: true,
    counterPicks: [
      {
        name: "Peni Parker",
        role: "Vanguard",
        description:
          "Peni's spider nests and mines are a natural counter to Wolverine's mechanics, as they threaten him when he tries to catch anyone within certain areas.",
        image: ThumbPeni,
      },
      {
        image: ThumbIronMan,
        name: "Iron Man",
        role: "Duelist",
        description:
          "He is unreachable and can melt down Wolverine's hp instantly.",
      },
      {
        image: ThumbNamor,
        name: "Namor",
        role: "Duelist",
        description:
          "His spawns can pressure Wolverine from flanking the back line.",
      },
      {
        image: ThumbStorm,
        name: "Storm",
        role: "Duelist",
        description: "She is unreachable and can punish Wolverine if he dives.",
      },
      {
        image: ThumbInvis,
        name: "Invisible Woman",
        role: "Strategist",
        description:
          "Force Physics can take Wolverine out of his leaps and dashes, which is roughly the entire point of his kit. If there is any time to be saving Force Physics, it's to specifically counter the Wolverine in the enemy team as its cooldown is shorter than his Feral Leap.",
      },
    ],
    situationalCounters: [
      {
        image: ThumbCap,
        name: "Captain America",
        role: "Vanguard",
        descriptions: [
          "Whenever Cap gets catched by Wolverine, he can simply dash out or sprint and use his slam to get out of danger.",
        ],
      },
      {
        image: ThumbSpidey,
        name: "Spider-Man",
        role: "Duelist",
        descriptions: [
          "He can outmaneuver Wolverine and annoy him with his combos and swings.",
        ],
      },
      {
        image: ThumbMantis,
        name: "Mantis",
        role: "Strategist",
        descriptions: [
          "She can use sleeping ability to prevent Wolverine from getting close.",
        ],
      },
      {
        image: ThumbLuna,
        name: "Luna Snow",
        role: "Strategist",
        descriptions: [
          "Her freezing abilities prevents Wolverine from getting close.",
        ],
      },
    ],
    goodAgainst: [
      {
        image: ThumbGroot,
        name: "Groot",
        description: "",
      },
      {
        image: ThumbStrange,
        name: "Doctor Strange",
        description: "",
      },
      {
        image: ThumbMagneto,
        name: "Magneto",
        description: "",
      },
    ],
    weakness: "qrqwr",
  },
  {
    image: ThumbThor,
    name: "Thor",
    role: "Vanguard",
    tier: "B",
    tallImage: Thor,
    fullImage:
      "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1737607172/rivals%20v2/thor_lhhqwi.png",
    counterPicks: [
      {
        image: ThumbPeni,
        name: "Peni Parker",
        role: "Vanguard",
        description:
          "Peni's spider nests and mines can control certain areas and prevent Thor from using his Storm Surge ability (LShift) to close the distance.",
      },
      {
        image: ThumbIronMan,
        name: "Iron Man",
        role: "Duelist",
        description:
          "He is unreachable in certain areas and can melt down Thor's hp instantly.",
      },
      {
        image: ThumbStorm,
        name: "Storm",
        role: "Duelist",
        description:
          "She is unreachable in certain areas and can reduce Thor's hp.",
      },
      {
        image: ThumbWolvie,
        name: "Wolverine",
        role: "Duelist",
        description:
          "Wolverine can easily catch Thor off guard and shred his HP before he has a chance to escape.",
      },
      {
        image: ThumbPunisher,
        name: "Punisher",
        role: "Duelist",
        description: "High sustained damage output forces Thor to retreat.",
      },
      {
        image: ThumbStarLord,
        name: "Star-Lord",
        role: "Duelist",
        description:
          "He can maintain safe distance while dealing consistent damage.",
      },
      {
        image: ThumbWanda,
        name: "Scarlet Witch",
        role: "Duelist",
        description: "She can burst Thor's HP instantly at range.",
      },
      {
        image: ThumbMantis,
        name: "Mantis",
        role: "Strategist",
        description:
          "As a hybrid duelist/strategist, she can also deal enough damage to Thor while maintaining safe distance. Additionally, she can make him sleep easily as he doesn't have any shields to block it.",
      },
    ],
    goodAgainst: [
      {
        image: ThumbHulk,
        name: "Hulk",
        description: "",
      },
      {
        image: ThumbGroot,
        name: "Groot",
        description: "",
      },
      {
        image: ThumbPanther,
        name: "Black Panther",
        description: "",
      },
    ],
    weakness: "qrqwr",
  },
  {
    image: ThumbSquirrel,
    name: "Squirrel Girl",
    tier: "A",
    tallImage: Squirrel,
    fullImage:
      "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1737607171/rivals%20v2/squi_yo6cgm.png",
    role: "Duelist",
    situationalCounters: [
      {
        image: ThumbPanther,
        name: "Black Panther",
        role: "Duelist",
        descriptions: [
          "He can catch her easily with his dashes, and vibranium armor protects from burst acorn's damage.",
        ],
      },
    ],
    counterPicks: [
      {
        name: "Groot",
        role: "Vanguard",
        description:
          "Groot's walls can block Squirrel Girl's attacks, causing them to bounce off your position and your allies' positions.",
        image: ThumbGroot,
      },
      {
        image: ThumbCap,
        name: "Captain America",
        role: "Vanguard",
        description:
          "Cap's shield blocks Squirrel Girl's acorns while his charge can pressure her and force her to retreat.",
      },
      {
        image: ThumbSpidey,
        name: "Spider-Man",
        role: "Duelist",
        description:
          "His high mobility can close the distance and forces her to reposition.",
      },
      {
        image: ThumbHawkeye,
        name: "Hawkeye",
        role: "Duelist",
        description: "Long-range burst damage while maintaing safe distance.",
      },
    ],
    goodAgainst: [
      {
        image: ThumbAdam,
        name: "Adam Warlock",
        description: "",
      },
      {
        image: ThumbPeni,
        name: "Peni Parker",
        description: "",
      },
      {
        image: ThumbThor,
        name: "Thor",
        description: "",
      },
    ],
    weakness: "qrqwr",
  },
  {
    image: ThumbNamor,
    name: "Namor",
    tier: "S",
    meta: true,
    tallImage: Namor,
    fullImage:
      "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1737607170/rivals%20v2/namor_acnpav.png",
    role: "Duelist",
    counterPicks: [
      {
        name: "Moon Knight",
        role: "Duelist",
        description:
          "Moon Knight's ankh can quickly destroy Namor's turret with ease while maintaining a safe distance.",
        image: ThumbMoonKnight,
      },
      {
        image: ThumbHela,
        name: "Hela",
        role: "Duelist",
        description:
          "Her long-range attacks can destroy Namor's spawns easily.",
      },
      {
        image: ThumbHawkeye,
        name: "Hawkeye",
        role: "Duelist",
        description: "Long-range burst damage while maintaing safe distance.",
      },
      {
        image: ThumbVenom,
        name: "Venom",
        role: "Vanguard",
        description:
          "Venom can dive on Namor and destroy his spawns while pressuring him.",
      },
    ],
    goodAgainst: [
      {
        image: ThumbPanther,
        name: "Black Panther",
        description: "",
      },
      {
        image: ThumbSpidey,
        name: "Spider-Man",
        description: "",
      },
      {
        image: ThumbPsy,
        name: "Psylocke",
        description: "",
      },
      {
        image: ThumbIronFist,
        name: "Iron Fist",
        description: "",
      },
      {
        image: ThumbMagik,
        name: "Magik",
        description: "",
      },
    ],
    weakness: "qrqwr",
  },
  {
    image: ThumbPunisher,
    name: "The Punisher",
    tier: "A",
    tallImage: Punisher,
    fullImage:
      "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1737607170/rivals%20v2/punisher_g8ytdf.png",
    role: "Duelist",
    counterPicks: [
      {
        image: ThumbCap,
        name: "Captain America",
        role: "Vanguard",
        description:
          "Cap can dive into Punisher's turret and pressure him by shielding upfront. He can also negate Punisher's shotgun and other attacks.",
      },
      {
        image: ThumbHela,
        name: "Hela",
        role: "Duelist",
        description:
          "Hela can destroy Punisher's turret from a safe distance. Additionally, her long-range damage output surpasses his normal attacks.",
      },
      {
        image: ThumbHawkeye,
        name: "Hawkeye",
        role: "Duelist",
        description:
          "Hawkeye can destroy Punisher's turret from a safe distance. Additionally, one or two headshots can take him down entirely.",
      },
      {
        image: ThumbIronFist,
        name: "Iron Fist",
        role: "Duelist",
        description:
          "Iron Fist can apply pressure from the back and easily parry Punisher's attacks easily.",
      },
      {
        image: ThumbMagik,
        name: "Magik",
        role: "Duelist",
        description:
          "Magik can flank the backline and target Punisher, while her teleportation makes it harder for him to hit her.",
      },
      {
        name: "Cloak & Dagger",
        role: "Strategist",
        description:
          "Cloak & Dagger's ultimate completely negates Punisher's ultimate. Additionally, she can hide her allies if Punisher activates his ultimate or turret.",
        image: ThumbCnd,
      },
    ],
    situationalCounters: [
      {
        image: ThumbPanther,
        name: "Black Panther",
        role: "Duelist",
        descriptions: [
          "T'Challa can easily land successful spears and dashes to Punisher if he's not in his Culling Turret Mode (E).",
        ],
      },
      {
        image: ThumbStorm,
        name: "Storm",
        role: "Duelist",
        descriptions: [
          "Storm's normal attacks can be an issue if Punisher's not in his Culling Turret mode (E) or ultimate ability.",
          "Storm's ultimate can quickly kill Punisher if he doesn't get any help from his Strategists' defensive ult.",
        ],
      },
    ],
    goodAgainst: [
      {
        image: ThumbIronMan,
        name: "Iron Man",
        description: "",
      },
      {
        image: ThumbStrange,
        name: "Doctor Strange",
        description: "",
      },
      {
        image: ThumbGroot,
        name: "Groot",
        description: "",
      },
      {
        image: ThumbStorm,
        name: "Storm",
        description: "",
      },
    ],
    weakness: "qrqwr",
  },
  {
    image: ThumbJeff,
    name: "Jeff",
    tier: "C",
    tallImage: Jeff,
    fullImage:
      "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1737607168/rivals%20v2/jeff_wadppv.png",
    role: "Strategist",
    counterPicks: [
      {
        image: ThumbIronMan,
        name: "Iron Man",
        role: "Duelist",
        description:
          "He can simply punish Jeff in mid air while not being reached by Jeff's ultimate.",
      },
      {
        image: ThumbStorm,
        name: "Storm",
        role: "Duelist",
        description:
          "She can simply punish Jeff from above while not being reached by Jeff's ultimate.",
      },
      {
        image: ThumbSpidey,
        name: "Spider-Man",
        role: "Duelist",
        description:
          "He can pressure Jeff at the back and force him to retreat instead of healing allies. He can also avoid Jeff's ultimate with his exceptional mobility.",
      },
      {
        image: ThumbPsy,
        name: "Psylocke",
        role: "Duelist",
        description:
          "She can pressure him at the back and force him to retreat instead of healing allies.",
      },
    ],
    goodAgainst: [],
    goodPairWith: [
      {
        image: ThumbGroot,
        name: "Groot",
        description: "",
      },
    ],
    weakness: "qrqwr",
  },
  {
    image: ThumbWanda,
    name: "Scarlet Witch",
    tier: "C",
    tallImage: Wanda,
    fullImage:
      "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1737607170/rivals%20v2/scar_xspbho.png",
    role: "Duelist",
    counterPicks: [
      {
        image: ThumbPsy,
        name: "Psylocke",
        role: "Duelist",
        description:
          "She can surprise her with combinations and assasinate her easily.",
      },
      {
        image: ThumbPunisher,
        name: "Punisher",
        role: "Duelist",
        description:
          "High consistent damage output can eliminate her before she can escape, plus his ultimate counters her aerial positioning.",
      },
      {
        image: ThumbStrange,
        name: "Doctor Strange",
        role: "Vanguard",
        description:
          "His Shield of Seraphim negates her attacks and limit her effectiveness.",
      },
      {
        image: ThumbHawkeye,
        name: "Hawkeye",
        role: "Duelist",
        description:
          "Hawkeye can inflict massive damage on Wanda before she can even get close to his position.",
      },
      {
        image: ThumbHela,
        name: "Hela",
        role: "Duelist",
        description:
          "Similar to Hawkeye, she can inflict massive damage on Wanda before she even gets close to her position. Plus, she can use Astral Flock to escape from Wanda's attacks.",
      },
    ],
    goodAgainst: [
      {
        image: ThumbThor,
        name: "Thor",
        description: "",
      },
      {
        name: "Luna Snow",
        description: "",
        image: ThumbLuna,
      },
      {
        image: ThumbGroot,
        name: "Groot",
        description: "",
      },
      {
        image: ThumbIronMan,
        name: "Iron Man",
        description: "",
      },
    ],
    weakness: "qrqwr",
  },
  {
    image: ThumbWidow,
    name: "Black Widow",
    tier: "C",
    tallImage: Widow,
    role: "Duelist",
    fullImage:
      "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1737607167/rivals%20v2/btw_pnokvx.png",
    counterPicks: [
      {
        image: ThumbPsy,
        name: "Psylocke",
        role: "Duelist",
        description:
          "She can surprise her with combinations and assasinate her from unexpected angles.",
      },
      {
        image: ThumbMagik,
        name: "Magik",
        role: "Duelist",
        description:
          "With the help of her teleportation abilities, she can flank and pressure Widow in the backline, capitalizing on her low mobility.",
      },
      {
        image: ThumbPanther,
        name: "Black Panther",
        role: "Duelist",
        description:
          "T'Challa's mechanics can pressure Widow from unexpected angles and capitalize on her low mobility.",
      },
      {
        image: ThumbStrange,
        name: "Doctor Strange",
        role: "Vanguard",
        description:
          "His shield and crowd control abilities negates her attacks and limit her effectiveness.",
      },
    ],
    goodAgainst: [
      {
        image: ThumbIronMan,
        name: "Iron Man",
        description: "",
      },
      {
        image: ThumbStorm,
        name: "Storm",
        description: "",
      },
    ],
    weakness: "qrqwr",
  },
  {
    image: ThumbAdam,
    name: "Adam Warlock",
    tier: "B",
    tallImage: Adam,
    fullImage:
      "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1737607167/rivals%20v2/adam_w2m9ek.png",
    role: "Strategist",
    counterPicks: [
      {
        image: ThumbSpidey,
        name: "Spider-Man",
        role: "Duelist",
        description:
          "His swinging mobility can quickly close the distance and land combinations to him.",
      },
      {
        image: ThumbPsy,
        name: "Psylocke",
        role: "Duelist",
        description:
          "She can surprise him with combinations and assasinate him easily.",
      },
      {
        image: ThumbPanther,
        name: "Black Panther",
        role: "Duelist",
        description:
          "He can flank and pressure Adam from unexpected angles and capitalize on his low mobility.",
      },
      {
        image: ThumbVenom,
        name: "Venom",
        role: "Vanguard",
        description:
          "Venom can simply dive in front of him and force him to retreat rather than healing allies.",
      },
    ],
    goodAgainst: [],
    goodPairWith: [
      {
        image: ThumbMantis,
        name: "Mantis",
        description: "",
      },
      {
        image: ThumbStarLord,
        name: "Star-Lord",
        description: "",
      },
      {
        image: ThumbGroot,
        name: "Groot",
        description: "",
      },
      {
        image: ThumbStrange,
        name: "Doctor Strange",
        description: "",
      },
    ],
    weakness: "qrqwr",
  },
  {
    image: ThumbBucky,
    name: "Winter Soldier",
    tier: "A",
    tallImage: Bucky,
    fullImage:
      "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1737607167/rivals%20v2/bucky_tdwc4f.png",
    role: "Duelist",
    counterPicks: [
      {
        image: ThumbPsy,
        name: "Psylocke",
        role: "Duelist",
        description:
          "She can land surprise attacks at different angles, and can easily avoid his combos with dashes and invisibility.",
      },
      {
        image: ThumbHela,
        name: "Hela",
        role: "Duelist",
        description:
          "Hela can deal massive damage to him from long range while staying safe from the reach of his Bionic Hook.",
      },
      {
        image: ThumbHawkeye,
        name: "Hawkeye",
        role: "Duelist",
        description:
          "Similar with Hela, Hawkeye can deal massive damage to him from long range while staying safe from the reach of his Bionic Hook.",
      },
    ],
    situationalCounters: [
      {
        image: ThumbStrange,
        name: "Doctor Strange",
        role: "Vanguard",
        descriptions: [
          "Strange can block Winter Soldier's Bionic Hook with his shield. You can time the activation of the shield by simply watching his pre-hook animation.",
          "If Winter Soldier somehow successfully hooks Strange, he can simply activate Cloak of Levitation (LShift) to escape poor positioning.",
        ],
      },
      {
        image: ThumbMagneto,
        name: "Magneto",
        role: "Vanguard",
        descriptions: [
          "Similar with Strange, Magneto can block Winter Soldier's Bionic Hook with his shield. You can time the activation of the shield by simply watching his pre-hook animation.",
        ],
      },
      {
        image: ThumbStorm,
        name: "Storm",
        role: "Duelist",
        descriptions: [
          "With good positioning, Storm can outlast Winter Soldier's damage output and pressure him. Just be careful not to get hit by his hook.",
        ],
      },
    ],
    goodAgainst: [
      {
        image: ThumbGroot,
        name: "Groot",
        description: "",
      },
      {
        image: ThumbSpidey,
        name: "Spider-Man",
        description: "",
      },
      {
        image: ThumbPeni,
        name: "Peni Parker",
        description: "",
      },
    ],
    weakness: "qrqwr",
  },
  {
    image: ThumbMagneto,
    name: "Magneto",
    tier: "S",
    meta: true,
    tallImage: Magneto,
    fullImage:
      "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1737607169/rivals%20v2/magneto_wbantn.png",
    role: "Vanguard",
    counterPicks: [
      {
        image: ThumbPunisher,
        name: "Punisher",
        role: "Duelist",
        description:
          "Punisher's Culling Turret (E) ability can break Magneto's shield quickly, forcing him to hide or retreat.",
      },
      {
        image: ThumbWolvie,
        name: "Wolverine",
        role: "Duelist",
        description:
          "Wolverine's claws can pierce through Magneto's shield. Additionally, he can capitalize on Magneto's low mobility and catch him off guard with ease.",
      },
      {
        image: ThumbVenom,
        name: "Venom",
        role: "Vanguard",
        description:
          "Constant damage from basic attacks chipps away at his shields, and Feast of the Abyss replenishes any health lost to Magneto's counter-attacks.",
      },
    ],
    situationalCounters: [
      {
        image: ThumbPanther,
        name: "Black Panther",
        role: "Duelist",
        descriptions: [
          "His kinetic charge provides the speed to get around shields. Sprint Rend applies Vibranium marks, making shields break faster.",
        ],
      },
      {
        image: ThumbStorm,
        name: "Storm",
        role: "Duelist",
        descriptions: [
          "Her Goddess Boost ability can bring down Magneto's shield easily.",
        ],
      },
    ],
    goodAgainst: [
      {
        image: ThumbCnd,
        name: "Cloak & Dagger",
        description: "",
      },
      {
        image: ThumbIronMan,
        name: "Iron Man",
        description: "",
      },
      {
        image: ThumbHawkeye,
        name: "Hawkeye",
        description: "",
      },
      {
        image: ThumbHela,
        name: "Hela",
        description: "",
      },
    ],
    weakness: "qrqwr",
  },
  {
    image: ThumbStrange,
    name: "Doctor Strange",
    tallImage: Strange,
    fullImage:
      "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1737607172/rivals%20v2/strange_t4560m.png",
    role: "Vanguard",
    tier: "S",
    meta: true,
    counterPicks: [
      {
        image: ThumbWolvie,
        name: "Wolverine",
        role: "Duelist",
        description:
          "His claws can pierce through Strange's shield. Additionaly, he can catch strange mid air if he uses Cloak of Levitation.",
      },
      {
        image: ThumbBucky,
        name: "Winter Soldier",
        role: "Duelist",
        description:
          "He can pull Strange with bionic hook and punish him with the team.",
      },
      {
        image: ThumbPanther,
        name: "Black Panther",
        role: "Duelist",
        description:
          "His Spirit Rend (LShift) and Spinning Kick (E) bypass Strange's shield, and it's easy for him to attack from unexpected angles.",
      },
      {
        image: ThumbVenom,
        name: "Venom",
        role: "Vanguard",
        description:
          "He can disrupt Strange’s shield while providing consistent crowd control.",
      },
      {
        image: ThumbHulk,
        name: "Hulk",
        role: "Vanguard",
        description:
          "His Radioactive Lockdown prevents his ultimate, while World Breaker can grab Strange out of the air.",
      },
    ],
    goodAgainst: [
      {
        image: ThumbIronMan,
        name: "Iron Man",
        description: "",
      },
      {
        image: ThumbHawkeye,
        name: "Hawkeye",
        description: "",
      },
      {
        image: ThumbHela,
        name: "Hela",
        description: "",
      },
    ],
    weakness: "qrqwr",
  },
  {
    image: ThumbStarLord,
    name: "Star-Lord",
    tier: "A",
    role: "Duelist",
    tallImage: StarLord,
    fullImage:
      "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1737607171/rivals%20v2/star_du9q4c.png",
    situationalCounters: [
      {
        image: ThumbNamor,
        name: "Namor",
        role: "Duelist",
        descriptions: [
          "Namor can pick off Star-Lord's HP with spawns if he gets around his position.",
          "Namor's Blessing of the Deep (Shift) makes it difficult for Star-Lord to take him down easily. It even allows Namor to pressure Star-Lord to some extent, knowing he won’t be an easy target.",
        ],
      },
    ],
    counterPicks: [
      {
        image: ThumbMagneto,
        name: "Magneto",
        role: "Vanguard",
        description:
          "Metallic Curtain negates Star-Lord's damage output, while Metal Bulwark can shield allies from incoming damage.",
      },
      {
        image: ThumbLuna,
        name: "Luna",
        role: "Strategist",
        description:
          "Luna's ultimate can completely block Star-Lord's attacks and ultimate.",
      },
      {
        image: ThumbLoki,
        name: "Loki",
        role: "Strategist",
        description:
          "Loki's healing lamp completely blocks Star-Lord's attacks and ultimate ability. Additionally, he can capitalize on Star-Lord's ultimate by copying it and using it against the enemy team.",
      },
      {
        image: ThumbStrange,
        name: "Doctor Strange",
        role: "Vanguard",
        description:
          "His shield negates Star-Lord's damage output, while his crowd control can also help allies to avoid his attacks.",
      },
      {
        image: ThumbHela,
        name: "Hela",
        role: "Duelist",
        description:
          "Hela's buff in this patch makes her a great counter to Star-Lord, as she can deal a massive amount of damage to him before he can even close the distance.",
      },
      {
        image: ThumbPunisher,
        name: "Punisher",
        role: "Duelist",
        description:
          "Punisher's Culling Turret can threaten Star-Lord from long distances. His abilities are typically anti-aerial, making him a natural counter to Star-Lord.",
      },
      {
        image: ThumbHawkeye,
        name: "Hawkeye",
        role: "Duelist",
        description:
          "One headshot can force him to retreat or eliminate him entirely from a safe distance.",
      },
    ],
    goodAgainst: [
      {
        name: "Black Panther",
        description: "",
        image: ThumbPanther,
      },
      {
        name: "Iron Man",
        description: "",
        image: ThumbIronMan,
      },
      {
        name: "Groot",
        description: "",
        image: ThumbGroot,
      },
      {
        name: "Moon Knight",
        description: "",
        image: ThumbMoonKnight,
      },
      {
        name: "Iron Fist",
        description: "",
        image: ThumbIronFist,
      },
    ],
    weakness: "qrqwr",
  },
];
