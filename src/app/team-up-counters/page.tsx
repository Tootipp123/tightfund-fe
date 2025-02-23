"use client";

import Footer from "@/components/features/Footer";
import Navbar from "@/components/features/Navbar";
import TeamupCounterModal from "@/components/features/TeamupCounterModal";
import {
  ALLIED_AGENTS,
  AMMO_OVERLOAD,
  DIMENSIONAL_SHORTCUT,
  GAMMA_CHARGE,
  GUARDIAN_REVIVAL,
  METALLIC_CHAOS,
  RAGNAROK_REBIRTH,
  SYMBIOTE_BOND,
  VOLTAIC_UNION,
} from "@/utils/team-ups";
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
          heroes: DIMENSIONAL_SHORTCUT,
        },
        {
          name: "Voltaic Union",
          icon: "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1739869138/rivals%20v2/Ammo-Overload-Icon_mxboem.webp",
          description:
            "While Punisher and Bucky can counter Storm, Cap and Thor can create space for her by diving into the backline, making Punisher, Bucky, and Rocket vulnerable to Storm's attacks. Additionally, Captain America's shield and sprinting abilities are natural counters to both Bucky and Punisher.",
          heroes: VOLTAIC_UNION,
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
      naturalCounters: [
        {
          name: "Dimensional Shortcut",
          icon: "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1739869138/rivals%20v2/Ammo-Overload-Icon_mxboem.webp",
          description:
            "This team-up's strength lies in flanking the backline and closing the distance, which can pressure Punisher, Bucky, and Rocket, as they rely on mid- to long-range combat. It’s unusual to pick these three together, but even with just two heroes from this team-up, it’s still a great matchup against the Ammo Overload team-up.",
          heroes: DIMENSIONAL_SHORTCUT,
        },
        {
          name: "Voltaic Union",
          icon: "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1739869138/rivals%20v2/Ammo-Overload-Icon_mxboem.webp",
          description:
            "While Punisher and Bucky can counter Storm, Cap and Thor can create space for her by diving into the backline, making Punisher, Bucky, and Rocket vulnerable to Storm's attacks. Additionally, Captain America's shield and sprinting abilities are natural counters to both Bucky and Punisher.",
          heroes: VOLTAIC_UNION,
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
      naturalCounters: [
        {
          name: "Ragnarok Rebirth",
          icon: "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1739869138/rivals%20v2/Ammo-Overload-Icon_mxboem.webp",
          description:
            "Hela easily wins at long range, and in close combat, she can stun Iron Fist or use her (LShift) to escape. While Loki can prevent him from flanking the backline with his wand and clone-switching ability - not to mention, he can copy Luna Snow and activate her ultimate. Meanwhile, Thor can assist by pushing Iron Fist away when the backline is under pressure.",
          heroes: RAGNAROK_REBIRTH,
        },
        {
          name: "Allied Agents",
          icon: "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1739869138/rivals%20v2/Ammo-Overload-Icon_mxboem.webp",
          description:
            "With these skilled snipers, Iron Fist won’t be able to close the distance easily. Even if he does, he can still be taken down within two to three shots from both Hawkeye and Widow. However, they will need a good position to receive heals from strategists.",
          heroes: ALLIED_AGENTS,
        },
        {
          name: "Ammo Overload",
          icon: "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1739869138/rivals%20v2/Ammo-Overload-Icon_mxboem.webp",
          description:
            "Even without the infinite ammo provided by Rocket, Punisher and Bucky can still dismantle Iron Fist if he attempts to flank them. Iron Fist also won’t be able to block their attacks easily, as Bucky has bionic hook and stun ability, and if they connect, can force him to retreat or even take him down entirely.",
          heroes: AMMO_OVERLOAD,
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
      naturalCounters: [
        {
          name: "Ammo Overload",
          icon: "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1739869138/rivals%20v2/Ammo-Overload-Icon_mxboem.webp",
          description:
            "Punisher and Bucky are strong counters to Namor, especially since they can easily destroy his spawns. Additionally, Punisher’s ultimate can pierce through Luna Snow’s ultimate, making it difficult for her to activate it while he’s around.",
          heroes: AMMO_OVERLOAD,
        },
        {
          name: "Voltaic Union",
          icon: "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1739869138/rivals%20v2/Ammo-Overload-Icon_mxboem.webp",
          description:
            "Captain and Thor can simply dive into the backline, creating space for Storm to attack freely. This team-up can be a nightmare for these heroes, as only Luna Snow’s ultimate can defend against them.",
          heroes: VOLTAIC_UNION,
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
      naturalCounters: [
        {
          name: "Gamma Charge",
          icon: "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1739869138/rivals%20v2/Ammo-Overload-Icon_mxboem.webp",
          description:
            "These three would easily counter Magik and Black Panther, especially with Hulk’s bubble and Iron Man’s natural abilities. However, with Psylocke around, it would be a challenge for Iron Man to play comfortably.",
          heroes: GAMMA_CHARGE,
        },
        {
          name: "Guardian Revival",
          icon: "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1739869138/rivals%20v2/Ammo-Overload-Icon_mxboem.webp",
          description:
            "Star-Lord easily counters Black Panther and Psylocke. As for Magik, he remains a strong matchup against her in most situations. Meanwhile, Mantis can neutralize Black Panther and Magik with her sleep ability, and Adam is simply too difficult to take down in a single combo, even with only 250 health, due to his continuous healing abilities.",
          heroes: GUARDIAN_REVIVAL,
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
      naturalCounters: [
        {
          name: "Allied Agents",
          icon: "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1739869138/rivals%20v2/Ammo-Overload-Icon_mxboem.webp",
          description:
            "Both Widow and Hawkeye are great matchups against Spidey and Squirrel Girl. To counter Spider-Man, they just need good timing to catch him mid-air and take him down with two to three shots. As for Squirrel Girl, they can easily outmatch her in a long-distance fight. Not to mention, even with Spidey’s 10% bonus damage from the team-up, it would be difficult for him to take down both Widow and Hawkeye in a single combo.",
          heroes: ALLIED_AGENTS,
        },
        {
          name: "Ragnarok Rebirth",
          icon: "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1739869138/rivals%20v2/Ammo-Overload-Icon_mxboem.webp",
          description:
            "Hela’s 20% damage boost allows her to outmatch Squirrel Girl in long-distance combat and catch Spider-Man with two headshots. Meanwhile, Loki would be nearly impossible for Spider-Man to kill due to his healing wand and clones. Thor may struggle against both Squirrel Girl and Spider-Man, but with the help of his allies, he can still be useful in pressuring enemy tanks.",
          heroes: RAGNAROK_REBIRTH,
        },
      ],
    },
    {
      name: "Fantastic Four",
      release: false,
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
      naturalCounters: [
        {
          name: "Ammo Overload",
          icon: "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1739869138/rivals%20v2/Ammo-Overload-Icon_mxboem.webp",
          description:
            "Punisher and Bucky are natural counters to both Wolverine and Hulk, as they can shred their HP before they have a chance to make an impact. While Wolverine and Hulk will likely focus on targeting your Vanguards, you’ll still have the upper hand in this scenario even without Rocket’s infinite ammo.",
          heroes: AMMO_OVERLOAD,
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
      naturalCounters: [
        {
          name: "Voltaic Union",
          icon: "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1739869138/rivals%20v2/Ammo-Overload-Icon_mxboem.webp",
          description:
            "Thor is a natural counter to Hulk. While Captain America can pressure the backline, and Strange will be forced to help. Storm’s abilities are a strong matchup against Iron Man, often giving her the advantage in a one-on-one matchup. And she is also a natural counter to Hulk.",
          heroes: VOLTAIC_UNION,
        },
        {
          name: "Ammo Overload",
          icon: "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1739869138/rivals%20v2/Ammo-Overload-Icon_mxboem.webp",
          description:
            "Punisher can instantly reduce Hulk’s HP with his Turret and other abilities. Meanwhile, Bucky can disrupt Hulk’s dive while still dealing massive damage. And, of course, Punisher is a natural counter to Iron Man.",
          heroes: AMMO_OVERLOAD,
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
      naturalCounters: [
        {
          name: "Ammo Overload",
          icon: "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1739869138/rivals%20v2/Ammo-Overload-Icon_mxboem.webp",
          description:
            "Even without the infinite ammo provided by Rocket, Punisher and Bucky can still dismantle Star-Lord despite his great mobility. Meanwhile, Mantis’s sleeping ability won’t be useful until they get within close range, and Adam can only provide healing, offering limited help since he lacks a defensive ultimate to counter Punisher or Bucky’s ultimate. And not to mention, Punisher’s ultimate can pierce through Mantis’s ultimate.",
          heroes: AMMO_OVERLOAD,
        },
        {
          name: "Voltaic Union",
          icon: "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1739869138/rivals%20v2/Ammo-Overload-Icon_mxboem.webp",
          description:
            "Storm is a strong counter to Star-Lord in the current patch, as her damage output surpasses his (excluding his ultimate). Meanwhile, Cap and Thor can easily dive onto Adam and Mantis. Although Mantis’s sleeping ability poses a threat to both of them, they can still effectively apply pressure.",
          heroes: VOLTAIC_UNION,
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
      naturalCounters: [
        {
          name: "Metallic Chaos",
          icon: "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1739869138/rivals%20v2/Ammo-Overload-Icon_mxboem.webp",
          description:
            "Magneto is a natural counter to Cloak and Dagger since his ultimate can pierce through her ultimate. Meanwhile, Scarlet Witch can easily hunt Moon Knight and take him down while distancing herself from his Ancient Ankh.",
          heroes: METALLIC_CHAOS,
        },
        {
          name: "Voltaic Union",
          icon: "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1739869138/rivals%20v2/Ammo-Overload-Icon_mxboem.webp",
          description:
            "Moon Knight is simply outmatched against Storm in a one-on-one situation, and most of the time, her position is safe from his ultimate. Meanwhile, Cap can disrupt him by applying pressure to his current position, forcing him to retreat, leaving C&D’s ultimate as the only remaining threat they’ll have to deal with.",
          heroes: VOLTAIC_UNION,
        },
        {
          name: "Guardian Revival",
          icon: "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1739869138/rivals%20v2/Ammo-Overload-Icon_mxboem.webp",
          description:
            "Star-Lord is a natural counter to Moon Knight, and Mantis’s normal attacks can still hurt Moon Knight even from a distance. If they ever get team-wiped, Adam’s ultimate can revive everyone at once, giving them another chance to fight and even gain an advantage, leaving C&D’s ultimate as the only remaining threat they’ll have to deal with.",
          heroes: GUARDIAN_REVIVAL,
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
      naturalCounters: [
        {
          name: "Ammo Overload",
          icon: "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1739869138/rivals%20v2/Ammo-Overload-Icon_mxboem.webp",
          description:
            "Both Punisher and Bucky can destroy Magneto's shield very quickly, while Scarlet Witch has limited options against them regardless of positioning.",
          heroes: AMMO_OVERLOAD,
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
      naturalCounters: [
        {
          name: "Ammo Overload",
          icon: "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1739869138/rivals%20v2/Ammo-Overload-Icon_mxboem.webp",
          description:
            "Both Punisher and Bucky can easily destroy Peni’s spider nests and mines from a safe distance. As for Venom, they can simply deplete his HP if he decides to dive, thanks to their consistent damage. While Spidey won’t be able to eliminate any of them in a single combo, pairing this with Rocket’s Ammo Overload makes them nearly unstoppable against this team-up.",
          heroes: AMMO_OVERLOAD,
        },
        {
          name: "Voltaic Union",
          icon: "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1739869138/rivals%20v2/Ammo-Overload-Icon_mxboem.webp",
          description:
            "Cap is a great matchup against Groot since he can simply jump over his walls. Meanwhile, Thor can disrupt and push Groot out of position, creating space for Storm to attack freely. Additionally, Rocket and Jeff’s healing won’t be enough to outheal the damage output from Storm and the others.",
          heroes: VOLTAIC_UNION,
        },
        {
          name: "Gamma Charge",
          icon: "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1739869138/rivals%20v2/Ammo-Overload-Icon_mxboem.webp",
          description:
            "Iron Man is a natural counter to Groot since he can attack freely from the air. Meanwhile, Strange is a strong counter up front, as he can escape Groot’s walls using his Cloak of Levitation. Additionally, it becomes a free game for Hulk, who can disrupt the Strategists, preventing Groot from receiving any heals.",
          heroes: GAMMA_CHARGE,
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
      naturalCounters: [
        {
          name: "Ammo Overload",
          icon: "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1739869138/rivals%20v2/Ammo-Overload-Icon_mxboem.webp",
          description:
            "Both Punisher and Bucky can shred Thor's HP if he overcommits, forcing him to retreat for healing. Meanwhile, they can shift their focus to targeting Hela while easily destroying Loki's wand with Culling Turret. Repeating this strategy ensures a strong balance of offense and defense.",
          heroes: AMMO_OVERLOAD,
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
      situationalCounters: [
        {
          name: "Chilling Charisma",
          icon: "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1739869138/rivals%20v2/Ammo-Overload-Icon_mxboem.webp",
          description:
            "Namor is a natural counter to Spider-man as he prevents him from pressuring the backline successfully. While Jeff is nearly impossible to kill with Spider-man. And Luna, just have to farm her ultimate.",
          heroes: [
            {
              image:
                "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484730/Rivals/Namor_Icon_ri6epi.webp",
              name: "Namor",
            },
            {
              image:
                "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484730/Rivals/Luna_Snow_Icon_snupak.webp",
              name: "Luna Snow",
            },
            {
              image:
                "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1736484729/Rivals/Jeff_the_Land_Shark_Icon_mkp5f4.webp",
              name: "Jeff",
            },
          ],
        },
      ],
      naturalCounters: [
        {
          name: "Ammo Overload",
          icon: "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1739869138/rivals%20v2/Ammo-Overload-Icon_mxboem.webp",
          description:
            "Both Punisher and Bucky can easily destroy Peni’s spider nests and mines from a safe distance. As for Venom, they can simply deplete his HP if he decides to dive, thanks to their consistent damage. While Spidey won’t be able to eliminate any of them in a single combo, pairing this with Rocket’s Ammo Overload makes them nearly unstoppable against this team-up.",
          heroes: AMMO_OVERLOAD,
        },
        {
          name: "Guardian Revival",
          icon: "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1739869138/rivals%20v2/Ammo-Overload-Icon_mxboem.webp",
          description:
            "Star-Lord counters both Peni and Venom and is still strong against Spidey in a one-on-one situation. Mantis can prevent both Spider-Man and Venom from diving with her sleeping ability. Adam would also be hard to pick off due to his Soul Bond (LShift).",
          heroes: GUARDIAN_REVIVAL,
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
      naturalCounters: [
        {
          name: "Symbiote Bond",
          icon: "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1739869138/rivals%20v2/Ammo-Overload-Icon_mxboem.webp",
          description:
            "Peni counters Cap and Thor with her spider nests and mines, making it difficult for them to get into certain areas. Meanwhile, Spider-Man can easily pick off Storm with a single combo, especially with the help of Venom’s Suit Expulsion skill (C). As for Venom, he can simply dive into their backline, creating space for Spider-Man to focus on Storm.",
          heroes: SYMBIOTE_BOND,
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
                className={`${
                  teamup.release === false && "opacity-[0.5]"
                } w-[320px] relative bg-[#c8cef0] overflow-hidden cursor-pointer`}
                onClick={() => setSelectedTeamup(teamup)}
              >
                {teamup.release === false && (
                  <div className="bg-orange-500 absolute z-[10] font-semibold text-white text-sm w-fit px-1 py-1 rounded-sm">
                    Coming soon
                  </div>
                )}
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
                      unoptimized
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
              window.history.pushState(null, "", `/team-up-counters`);
              setSelectedTeamup(null);
            }}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}
