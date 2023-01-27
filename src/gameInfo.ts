export type GameItem = {
  name: string;
  imgSrc: string;
  cup?: GameItem;
  stats?: Stats;
};

export type Stats = {
  speed: Surface;
  acceleration: number;
  weight: number;
  handling: Surface;
  grip: number;
  miniturbo: number;
  invincibility: number;
};

export type Surface = {
  ground: number;
  water: number;
  air: number;
  antigravity: number;
};

export const characters: GameItem[] = [
  {
    name: "Mario",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/d/d9/MK8_Mario_Icon.png/70px-MK8_Mario_Icon.png",
    stats: {
      speed: { air: 6, antigravity: 6, ground: 6, water: 6 },
      acceleration: 2,
      weight: 6,
      handling: { air: 4, antigravity: 4, ground: 4, water: 4 },
      grip: 2,
      miniturbo: 2,
      invincibility: 3,
    },
  },
  {
    name: "Luigi",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/5/51/MK8_Luigi_Icon.png/70px-MK8_Luigi_Icon.png",
    stats: {
      speed: { air: 6, antigravity: 6, ground: 6, water: 6 },
      acceleration: 2,
      weight: 6,
      handling: { air: 5, antigravity: 5, ground: 5, water: 5 },
      grip: 1,
      miniturbo: 2,
      invincibility: 3,
    },
  },
  {
    name: "Peach",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/c/c2/MK8_Peach_Icon.png/70px-MK8_Peach_Icon.png",
    stats: {
      speed: { air: 5, antigravity: 5, ground: 5, water: 5 },
      acceleration: 3,
      weight: 4,
      handling: { air: 5, antigravity: 5, ground: 5, water: 5 },
      grip: 3,
      miniturbo: 3,
      invincibility: 3,
    },
  },
  {
    name: "Daisy",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/3/32/MK8_Daisy_Icon.png/70px-MK8_Daisy_Icon.png",
    stats: {
      speed: { air: 5, antigravity: 5, ground: 5, water: 5 },
      acceleration: 3,
      weight: 4,
      handling: { air: 5, antigravity: 5, ground: 5, water: 5 },
      grip: 3,
      miniturbo: 3,
      invincibility: 3,
    },
  },
  {
    name: "Rosalina",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/8/89/MK8_Rosalina_Icon.png/70px-MK8_Rosalina_Icon.png",
    stats: {
      speed: { air: 7, antigravity: 7, ground: 7, water: 7 },
      acceleration: 1,
      weight: 7,
      handling: { air: 3, antigravity: 3, ground: 3, water: 3 },
      grip: 3,
      miniturbo: 2,
      invincibility: 2,
    },
  },
  {
    name: "Tanooki Mario",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/a/a2/MK8_Tanooki_Mario_Icon.png/70px-MK8_Tanooki_Mario_Icon.png",
    stats: {
      speed: { air: 5, antigravity: 5, ground: 5, water: 5 },
      acceleration: 3,
      weight: 5,
      handling: { air: 5, antigravity: 5, ground: 5, water: 5 },
      grip: 1,
      miniturbo: 3,
      invincibility: 3,
    },
  },
  {
    name: "Cat Peach",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/a/ad/MK8_Cat_Peach_Icon.png/70px-MK8_Cat_Peach_Icon.png",
    stats: {
      speed: { air: 4, antigravity: 4, ground: 4, water: 4 },
      acceleration: 4,
      weight: 3,
      handling: { air: 6, antigravity: 6, ground: 6, water: 6 },
      grip: 3,
      miniturbo: 3,
      invincibility: 4,
    },
  },
  {
    name: "Yoshi",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/9/91/MK8_Yoshi_Icon.png/70px-MK8_Yoshi_Icon.png",
    stats: {
      speed: { air: 5, antigravity: 5, ground: 5, water: 5 },
      acceleration: 3,
      weight: 4,
      handling: { air: 5, antigravity: 5, ground: 5, water: 5 },
      grip: 3,
      miniturbo: 3,
      invincibility: 3,
    },
  },
  {
    name: "Toad",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/4/45/MK8_Toad_Icon.png/70px-MK8_Toad_Icon.png",
    stats: {
      speed: { air: 3, antigravity: 3, ground: 3, water: 3 },
      acceleration: 4,
      weight: 3,
      handling: { air: 7, antigravity: 7, ground: 7, water: 7 },
      grip: 4,
      miniturbo: 3,
      invincibility: 4,
    },
  },
  {
    name: "Koopa Troopa",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/b/bc/MK8_Koopa_Icon.png/70px-MK8_Koopa_Icon.png",
    stats: {
      speed: { air: 2, antigravity: 2, ground: 2, water: 2 },
      acceleration: 4,
      weight: 2,
      handling: { air: 8, antigravity: 8, ground: 8, water: 8 },
      grip: 5,
      miniturbo: 4,
      invincibility: 5,
    },
  },
  {
    name: "Shy Guy",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/7/7f/MK8_ShyGuy_Icon.png/70px-MK8_ShyGuy_Icon.png",
    stats: {
      speed: { air: 3, antigravity: 3, ground: 3, water: 3 },
      acceleration: 4,
      weight: 3,
      handling: { air: 7, antigravity: 7, ground: 7, water: 7 },
      grip: 4,
      miniturbo: 3,
      invincibility: 4,
    },
  },
  {
    name: "Lakitu",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/7/7d/MK8_Lakitu_Icon.png/70px-MK8_Lakitu_Icon.png",
    stats: {
      speed: { air: 2, antigravity: 2, ground: 2, water: 2 },
      acceleration: 4,
      weight: 2,
      handling: { air: 8, antigravity: 8, ground: 8, water: 8 },
      grip: 5,
      miniturbo: 4,
      invincibility: 5,
    },
  },
  {
    name: "Toadette",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/8/8e/MK8_Toadette_Icon.png/70px-MK8_Toadette_Icon.png",
    stats: {
      speed: { air: 2, antigravity: 2, ground: 2, water: 2 },
      acceleration: 5,
      weight: 2,
      handling: { air: 7, antigravity: 7, ground: 7, water: 7 },
      grip: 2,
      miniturbo: 4,
      invincibility: 5,
    },
  },
  {
    name: "King Boo",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/1/1d/MK8DX_King_Boo_Icon.png/70px-MK8DX_King_Boo_Icon.png",
    stats: {
      speed: { air: 7, antigravity: 7, ground: 7, water: 7 },
      acceleration: 1,
      weight: 7,
      handling: { air: 3, antigravity: 3, ground: 3, water: 3 },
      grip: 3,
      miniturbo: 2,
      invincibility: 2,
    },
  },
  {
    name: "Baby Mario",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/d/d2/MK8_BabyMario_Icon.png/70px-MK8_BabyMario_Icon.png",
    stats: {
      speed: { air: 1, antigravity: 1, ground: 1, water: 1 },
      acceleration: 5,
      weight: 1,
      handling: { air: 8, antigravity: 8, ground: 8, water: 8 },
      grip: 4,
      miniturbo: 4,
      invincibility: 6,
    },
  },
  {
    name: "Baby Luigi",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/a/aa/MK8_BabyLuigi_Icon.png/70px-MK8_BabyLuigi_Icon.png",
    stats: {
      speed: { air: 1, antigravity: 1, ground: 1, water: 1 },
      acceleration: 5,
      weight: 1,
      handling: { air: 8, antigravity: 8, ground: 8, water: 8 },
      grip: 4,
      miniturbo: 4,
      invincibility: 6,
    },
  },
  {
    name: "Baby Peach",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/3/3d/MK8_BabyPeach_Icon.png/70px-MK8_BabyPeach_Icon.png",
    stats: {
      speed: { air: 0, antigravity: 0, ground: 0, water: 0 },
      acceleration: 4,
      weight: 0,
      handling: { air: 10, antigravity: 10, ground: 10, water: 10 },
      grip: 5,
      miniturbo: 5,
      invincibility: 6,
    },
  },
  {
    name: "Baby Daisy",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/4/43/MK8_BabyDaisy_Icon.png/70px-MK8_BabyDaisy_Icon.png",
    stats: {
      speed: { air: 0, antigravity: 0, ground: 0, water: 0 },
      acceleration: 4,
      weight: 0,
      handling: { air: 10, antigravity: 10, ground: 10, water: 10 },
      grip: 5,
      miniturbo: 5,
      invincibility: 6,
    },
  },
  {
    name: "Baby Rosalina",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/0/09/MK8_BabyRosalina_Icon.png/70px-MK8_BabyRosalina_Icon.png",
    stats: {
      speed: { air: 0, antigravity: 0, ground: 0, water: 0 },
      acceleration: 5,
      weight: 0,
      handling: { air: 9, antigravity: 9, ground: 9, water: 9 },
      grip: 3,
      miniturbo: 5,
      invincibility: 6,
    },
  },
  {
    name: "Metal Mario",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/e/e3/MK8_MMario_Icon.png/70px-MK8_MMario_Icon.png",
    stats: {
      speed: { air: 8, antigravity: 8, ground: 8, water: 8 },
      acceleration: 1,
      weight: 10,
      handling: { air: 3, antigravity: 3, ground: 3, water: 3 },
      grip: 1,
      miniturbo: 1,
      invincibility: 1,
    },
  },
  {
    name: "Pink Gold Peach",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/0/0d/MK8_PGPeach_Icon.png/70px-MK8_PGPeach_Icon.png",
    stats: {
      speed: { air: 8, antigravity: 8, ground: 8, water: 8 },
      acceleration: 1,
      weight: 10,
      handling: { air: 3, antigravity: 3, ground: 3, water: 3 },
      grip: 1,
      miniturbo: 1,
      invincibility: 1,
    },
  },
  {
    name: "Wario",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/c/c2/MK8_Wario_Icon.png/70px-MK8_Wario_Icon.png",
    stats: {
      speed: { air: 10, antigravity: 10, ground: 10, water: 10 },
      acceleration: 0,
      weight: 9,
      handling: { air: 1, antigravity: 1, ground: 1, water: 1 },
      grip: 1,
      miniturbo: 0,
      invincibility: 1,
    },
  },
  {
    name: "Waluigi",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/7/78/MK8_Waluigi_Icon.png/70px-MK8_Waluigi_Icon.png",
    stats: {
      speed: { air: 9, antigravity: 9, ground: 9, water: 9 },
      acceleration: 1,
      weight: 8,
      handling: { air: 2, antigravity: 2, ground: 2, water: 2 },
      grip: 0,
      miniturbo: 1,
      invincibility: 1,
    },
  },
  {
    name: "Donkey Kong",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/0/08/MK8_DKong_Icon.png/70px-MK8_DKong_Icon.png",
    stats: {
      speed: { air: 9, antigravity: 9, ground: 9, water: 9 },
      acceleration: 1,
      weight: 8,
      handling: { air: 2, antigravity: 2, ground: 2, water: 2 },
      grip: 0,
      miniturbo: 1,
      invincibility: 1,
    },
  },
  {
    name: "Bowser",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/4/47/MK8_Bowser_Icon.png/70px-MK8_Bowser_Icon.png",
    stats: {
      speed: { air: 10, antigravity: 10, ground: 10, water: 10 },
      acceleration: 0,
      weight: 10,
      handling: { air: 0, antigravity: 0, ground: 0, water: 0 },
      grip: 0,
      miniturbo: 0,
      invincibility: 1,
    },
  },
  {
    name: "Dry Bones",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/3/3f/MK8DX_Dry_Bones_Icon.png/70px-MK8DX_Dry_Bones_Icon.png",
    stats: {
      speed: { air: 1, antigravity: 1, ground: 1, water: 1 },
      acceleration: 5,
      weight: 1,
      handling: { air: 8, antigravity: 8, ground: 8, water: 8 },
      grip: 4,
      miniturbo: 4,
      invincibility: 6,
    },
  },
  {
    name: "Bowser Jr.",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/2/26/MK8_Bowser_Jr_Icon.png/70px-MK8_Bowser_Jr_Icon.png",
    stats: {
      speed: { air: 2, antigravity: 2, ground: 2, water: 2 },
      acceleration: 4,
      weight: 2,
      handling: { air: 8, antigravity: 8, ground: 8, water: 8 },
      grip: 5,
      miniturbo: 4,
      invincibility: 5,
    },
  },
  {
    name: "Dry Bowser",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/2/29/MK8_Dry_Bowser_Icon.png/70px-MK8_Dry_Bowser_Icon.png",
    stats: {
      speed: { air: 10, antigravity: 10, ground: 10, water: 10 },
      acceleration: 0,
      weight: 9,
      handling: { air: 1, antigravity: 1, ground: 1, water: 1 },
      grip: 1,
      miniturbo: 0,
      invincibility: 1,
    },
  },
  {
    name: "Lemmy",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/f/fc/MK8_Lemmy_Icon.png/70px-MK8_Lemmy_Icon.png",
    stats: {
      speed: { air: 0, antigravity: 0, ground: 0, water: 0 },
      acceleration: 5,
      weight: 0,
      handling: { air: 9, antigravity: 9, ground: 9, water: 9 },
      grip: 3,
      miniturbo: 5,
      invincibility: 6,
    },
  },
  {
    name: "Larry",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/c/c2/MK8_Larry_Icon.png/70px-MK8_Larry_Icon.png",
    stats: {
      speed: { air: 3, antigravity: 3, ground: 3, water: 3 },
      acceleration: 4,
      weight: 3,
      handling: { air: 7, antigravity: 7, ground: 7, water: 7 },
      grip: 4,
      miniturbo: 3,
      invincibility: 4,
    },
  },
  {
    name: "Wendy",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/d/d9/MK8_Wendy_Icon.png/70px-MK8_Wendy_Icon.png",
    stats: {
      speed: { air: 2, antigravity: 2, ground: 2, water: 2 },
      acceleration: 5,
      weight: 2,
      handling: { air: 7, antigravity: 7, ground: 7, water: 7 },
      grip: 2,
      miniturbo: 4,
      invincibility: 5,
    },
  },
  {
    name: "Ludwig",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/a/a8/MK8_Ludwig_Icon.png/70px-MK8_Ludwig_Icon.png",
    stats: {
      speed: { air: 6, antigravity: 6, ground: 6, water: 6 },
      acceleration: 2,
      weight: 6,
      handling: { air: 4, antigravity: 4, ground: 4, water: 4 },
      grip: 2,
      miniturbo: 2,
      invincibility: 3,
    },
  },
  {
    name: "Iggy",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/d/dd/MK8_Iggy_Icon.png/70px-MK8_Iggy_Icon.png",
    stats: {
      speed: { air: 6, antigravity: 6, ground: 6, water: 6 },
      acceleration: 2,
      weight: 6,
      handling: { air: 5, antigravity: 5, ground: 5, water: 5 },
      grip: 1,
      miniturbo: 2,
      invincibility: 3,
    },
  },
  {
    name: "Roy",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/3/3e/MK8_Roy_Icon.png/70px-MK8_Roy_Icon.png",
    stats: {
      speed: { air: 9, antigravity: 9, ground: 9, water: 9 },
      acceleration: 1,
      weight: 8,
      handling: { air: 2, antigravity: 2, ground: 2, water: 2 },
      grip: 0,
      miniturbo: 1,
      invincibility: 1,
    },
  },
  {
    name: "Morton",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/7/72/MK8_Morton_Icon.png/70px-MK8_Morton_Icon.png",
    stats: {
      speed: { air: 10, antigravity: 10, ground: 10, water: 10 },
      acceleration: 0,
      weight: 10,
      handling: { air: 0, antigravity: 0, ground: 0, water: 0 },
      grip: 0,
      miniturbo: 0,
      invincibility: 1,
    },
  },
  {
    name: "Inkling Girl",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/b/b9/MK8DX_Female_Inkling_Icon.png/70px-MK8DX_Female_Inkling_Icon.png",
    stats: {
      speed: { air: 4, antigravity: 4, ground: 4, water: 4 },
      acceleration: 4,
      weight: 3,
      handling: { air: 6, antigravity: 6, ground: 6, water: 6 },
      grip: 3,
      miniturbo: 3,
      invincibility: 4,
    },
  },
  {
    name: "Inkling Boy",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/3/3c/MK8DX_Male_Inkling_Icon.png/70px-MK8DX_Male_Inkling_Icon.png",
    stats: {
      speed: { air: 5, antigravity: 5, ground: 5, water: 5 },
      acceleration: 3,
      weight: 5,
      handling: { air: 5, antigravity: 5, ground: 5, water: 5 },
      grip: 1,
      miniturbo: 3,
      invincibility: 3,
    },
  },
  {
    name: "Link",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/e/e8/MK8_Link_Icon.png/70px-MK8_Link_Icon.png",
    stats: {
      speed: { air: 7, antigravity: 7, ground: 7, water: 7 },
      acceleration: 1,
      weight: 7,
      handling: { air: 3, antigravity: 3, ground: 3, water: 3 },
      grip: 3,
      miniturbo: 2,
      invincibility: 2,
    },
  },
  {
    name: "Villager",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/1/16/VillagerMale-Icon-MK8.png/70px-VillagerMale-Icon-MK8.png",
    stats: {
      speed: { air: 5, antigravity: 5, ground: 5, water: 5 },
      acceleration: 3,
      weight: 5,
      handling: { air: 5, antigravity: 5, ground: 5, water: 5 },
      grip: 1,
      miniturbo: 3,
      invincibility: 3,
    },
  },
  {
    name: "Villager",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/c/c3/VillagerFemale-Icon-MK8.png/70px-VillagerFemale-Icon-MK8.png",
    stats: {
      speed: { air: 4, antigravity: 4, ground: 4, water: 4 },
      acceleration: 4,
      weight: 3,
      handling: { air: 6, antigravity: 6, ground: 6, water: 6 },
      grip: 3,
      miniturbo: 3,
      invincibility: 4,
    },
  },
  {
    name: "Isabelle",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/2/20/MK8_Isabelle_Icon.png/70px-MK8_Isabelle_Icon.png",
    stats: {
      speed: { air: 2, antigravity: 2, ground: 2, water: 2 },
      acceleration: 5,
      weight: 2,
      handling: { air: 7, antigravity: 7, ground: 7, water: 7 },
      grip: 2,
      miniturbo: 4,
      invincibility: 5,
    },
  },
  // {
  //   name: "Mii",
  //   imgSrc:
  //     "https://mario.wiki.gallery/images/thumb/a/ab/Mii_amiibo_MK8.png/70px-Mii_amiibo_MK8.png",
  // },
];

export const karts = [
  {
    name: "Standard Kart",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/0/05/StandardKartBodyMK8.png/120px-StandardKartBodyMK8.png",
    stats: {
      speed: { air: 3, antigravity: 3, ground: 3, water: 3 },
      acceleration: 4,
      weight: 2,
      handling: { air: 3, antigravity: 3, ground: 3, water: 2 },
      grip: 3,
      miniturbo: 4,
      invincibility: 3,
    },
  },
  {
    name: "Pipe Frame",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/d/d1/PipeFrameBodyMK8.png/120px-PipeFrameBodyMK8.png",
    stats: {
      speed: { air: 1, antigravity: 1, ground: 1, water: 3 },
      acceleration: 6,
      weight: 1,
      handling: { air: 2, antigravity: 4, ground: 5, water: 4 },
      grip: 4,
      miniturbo: 6,
      invincibility: 2,
    },
  },
  {
    name: "Mach 8",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/d/df/Mach8BodyMK8.png/120px-Mach8BodyMK8.png",
    stats: {
      speed: { air: 4, antigravity: 5, ground: 3, water: 3 },
      acceleration: 3,
      weight: 3,
      handling: { air: 2, antigravity: 4, ground: 2, water: 2 },
      grip: 4,
      miniturbo: 4,
      invincibility: 4,
    },
  },
  {
    name: "Steel Driver",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/9/94/Steel_Driver.png/120px-Steel_Driver.png",
    stats: {
      speed: { air: 0, antigravity: 2, ground: 4, water: 5 },
      acceleration: 1,
      weight: 4,
      handling: { air: 1, antigravity: 1, ground: 1, water: 5 },
      grip: 3,
      miniturbo: 2,
      invincibility: 6,
    },
  },
  {
    name: "Cat Cruiser",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/f/f4/CatCruiserBodyMK8.png/120px-CatCruiserBodyMK8.png",
    stats: {
      speed: { air: 4, antigravity: 3, ground: 2, water: 2 },
      acceleration: 5,
      weight: 2,
      handling: { air: 4, antigravity: 3, ground: 4, water: 2 },
      grip: 3,
      miniturbo: 5,
      invincibility: 3,
    },
  },
  {
    name: "Circuit Special",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/6/6c/CircuitSpecialBodyMK8.png/120px-CircuitSpecialBodyMK8.png",
    stats: {
      speed: { air: 2, antigravity: 4, ground: 5, water: 1 },
      acceleration: 1,
      weight: 3,
      handling: { air: 0, antigravity: 2, ground: 1, water: 1 },
      grip: 1,
      miniturbo: 1,
      invincibility: 6,
    },
  },
  {
    name: "Tri-Speeder",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/5/56/TrispeederBodyMK8.png/120px-TrispeederBodyMK8.png",
    stats: {
      speed: { air: 0, antigravity: 2, ground: 4, water: 5 },
      acceleration: 1,
      weight: 4,
      handling: { air: 1, antigravity: 1, ground: 1, water: 5 },
      grip: 3,
      miniturbo: 2,
      invincibility: 6,
    },
  },
  {
    name: "Badwagon",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/c/c2/BadwagonBodyMK8.png/120px-BadwagonBodyMK8.png",
    stats: {
      speed: { air: 1, antigravity: 3, ground: 5, water: 2 },
      acceleration: 0,
      weight: 4,
      handling: { air: 0, antigravity: 1, ground: 0, water: 1 },
      grip: 5,
      miniturbo: 0,
      invincibility: 7,
    },
  },
  {
    name: "Prancer",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/f/ff/PrancerBodyMK8.png/120px-PrancerBodyMK8.png",
    stats: {
      speed: { air: 3, antigravity: 3, ground: 4, water: 3 },
      acceleration: 2,
      weight: 1,
      handling: { air: 3, antigravity: 2, ground: 3, water: 3 },
      grip: 2,
      miniturbo: 3,
      invincibility: 5,
    },
  },
  {
    name: "Buggybud",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/4/45/BiddybuggyBodyMK8.png/120px-BiddybuggyBodyMK8.png",
    stats: {
      speed: { air: 1, antigravity: 2, ground: 0, water: 1 },
      acceleration: 7,
      weight: 0,
      handling: { air: 4, antigravity: 5, ground: 5, water: 4 },
      grip: 4,
      miniturbo: 7,
      invincibility: 0,
    },
  },
  {
    name: "Landship",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/6/6d/LandshipBodyMK8.png/120px-LandshipBodyMK8.png",
    stats: {
      speed: { air: 2, antigravity: 0, ground: 1, water: 5 },
      acceleration: 6,
      weight: 0,
      handling: { air: 3, antigravity: 2, ground: 4, water: 5 },
      grip: 6,
      miniturbo: 6,
      invincibility: 1,
    },
  },
  {
    name: "Bounder",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/4/47/SneakerBodyMK8.png/120px-SneakerBodyMK8.png",
    stats: {
      speed: { air: 3, antigravity: 3, ground: 4, water: 2 },
      acceleration: 2,
      weight: 2,
      handling: { air: 2, antigravity: 3, ground: 3, water: 2 },
      grip: 0,
      miniturbo: 3,
      invincibility: 5,
    },
  },
  {
    name: "Sports Coupé",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/f/f8/SportsCoupeMK8.png/120px-SportsCoupeMK8.png",
    stats: {
      speed: { air: 4, antigravity: 5, ground: 3, water: 3 },
      acceleration: 3,
      weight: 3,
      handling: { air: 2, antigravity: 4, ground: 2, water: 2 },
      grip: 4,
      miniturbo: 4,
      invincibility: 4,
    },
  },
  // {
  //   name: "Gold Kart",
  //   imgSrc:
  //     "https://mario.wiki.gallery/images/thumb/f/fe/Gold_Standard.png/120px-Gold_Standard.png",
  // },
  {
    name: "GLA",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/c/c2/GLA-MK8.png/120px-GLA-MK8.png",
    stats: {
      speed: { air: 1, antigravity: 3, ground: 5, water: 2 },
      acceleration: 0,
      weight: 4,
      handling: { air: 0, antigravity: 1, ground: 0, water: 1 },
      grip: 5,
      miniturbo: 0,
      invincibility: 7,
    },
  },
  {
    name: "W 25 Silver Arrow",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/2/25/W25SilverArrow-MK8.png/120px-W25SilverArrow-MK8.png",
    stats: {
      speed: { air: 3, antigravity: 4, ground: 2, water: 2 },
      acceleration: 5,
      weight: 1,
      handling: { air: 3, antigravity: 4, ground: 4, water: 3 },
      grip: 5,
      miniturbo: 5,
      invincibility: 3,
    },
  },
  {
    name: "300 SL Roadster",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/f/f4/300SLRoadster_MK8.png/120px-300SLRoadster_MK8.png",
    stats: {
      speed: { air: 3, antigravity: 3, ground: 3, water: 3 },
      acceleration: 4,
      weight: 2,
      handling: { air: 3, antigravity: 3, ground: 3, water: 2 },
      grip: 3,
      miniturbo: 4,
      invincibility: 4,
    },
  },
  {
    name: "Blue Falcon",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/f/f6/MK8BlueFalcon.png/120px-MK8BlueFalcon.png",
    stats: {
      speed: { air: 3, antigravity: 4, ground: 4, water: 2 },
      acceleration: 3,
      weight: 0,
      handling: { air: 1, antigravity: 5, ground: 2, water: 3 },
      grip: 3,
      miniturbo: 3,
      invincibility: 4,
    },
  },
  {
    name: "Tanooki Kart",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/7/76/MK8_Tanooki_Buggy_Sprite.png/120px-MK8_Tanooki_Buggy_Sprite.png",
    stats: {
      speed: { air: 3, antigravity: 3, ground: 2, water: 4 },
      acceleration: 2,
      weight: 3,
      handling: { air: 4, antigravity: 4, ground: 3, water: 3 },
      grip: 7,
      miniturbo: 3,
      invincibility: 4,
    },
  },
  {
    name: "B Dasher",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/1/15/ZeldaMK8Bdasher.png/120px-ZeldaMK8Bdasher.png",
    stats: {
      speed: { air: 2, antigravity: 4, ground: 5, water: 1 },
      acceleration: 1,
      weight: 3,
      handling: { air: 0, antigravity: 2, ground: 1, water: 1 },
      grip: 1,
      miniturbo: 1,
      invincibility: 6,
    },
  },
  {
    name: "Streetle",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/c/cf/MK8Streetle.png/120px-MK8Streetle.png",
    stats: {
      speed: { air: 2, antigravity: 0, ground: 1, water: 5 },
      acceleration: 6,
      weight: 0,
      handling: { air: 3, antigravity: 2, ground: 4, water: 5 },
      grip: 6,
      miniturbo: 6,
      invincibility: 2,
    },
  },
  {
    name: "P-Wing",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/c/cd/MK8PWing.png/120px-MK8PWing.png",
    stats: {
      speed: { air: 2, antigravity: 4, ground: 5, water: 1 },
      acceleration: 1,
      weight: 3,
      handling: { air: 0, antigravity: 2, ground: 1, water: 1 },
      grip: 1,
      miniturbo: 1,
      invincibility: 6,
    },
  },
  {
    name: "Koopa Clown",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/7/70/MK8DX_Koopa_Clown.png/120px-MK8DX_Koopa_Clown.png",
    stats: {
      speed: { air: 3, antigravity: 3, ground: 2, water: 4 },
      acceleration: 2,
      weight: 3,
      handling: { air: 4, antigravity: 4, ground: 3, water: 3 },
      grip: 7,
      miniturbo: 3,
      invincibility: 3,
    },
  },
];

export const bikes = [
  {
    name: "Standard Bike",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/8/84/StandardBikeBodyMK8.png/120px-StandardBikeBodyMK8.png",
    stats: {
      speed: { air: 3, antigravity: 4, ground: 2, water: 2 },
      acceleration: 5,
      weight: 1,
      handling: { air: 3, antigravity: 4, ground: 4, water: 3 },
      grip: 5,
      miniturbo: 5,
      invincibility: 2,
    },
  },
  {
    name: "The Duke",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/8/8a/TheDukeBodyMK8.png/120px-TheDukeBodyMK8.png",
    stats: {
      speed: { air: 3, antigravity: 3, ground: 3, water: 3 },
      acceleration: 4,
      weight: 2,
      handling: { air: 3, antigravity: 3, ground: 3, water: 2 },
      grip: 3,
      miniturbo: 4,
      invincibility: 3,
    },
  },
  {
    name: "Flame Rider",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/3/31/FlameRiderBodyMK8.png/120px-FlameRiderBodyMK8.png",
    stats: {
      speed: { air: 3, antigravity: 4, ground: 2, water: 2 },
      acceleration: 5,
      weight: 1,
      handling: { air: 3, antigravity: 4, ground: 4, water: 3 },
      grip: 5,
      miniturbo: 5,
      invincibility: 2,
    },
  },
  {
    name: "Varmint",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/d/d0/VarmintBodyMK8.png/120px-VarmintBodyMK8.png",
    stats: {
      speed: { air: 1, antigravity: 1, ground: 1, water: 3 },
      acceleration: 6,
      weight: 1,
      handling: { air: 2, antigravity: 4, ground: 5, water: 4 },
      grip: 4,
      miniturbo: 6,
      invincibility: 1,
    },
  },
  {
    name: "Mr Scooty",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/1/18/MrScootyBodyMK8.png/120px-MrScootyBodyMK8.png",
    stats: {
      speed: { air: 1, antigravity: 2, ground: 0, water: 1 },
      acceleration: 7,
      weight: 0,
      handling: { air: 4, antigravity: 5, ground: 5, water: 4 },
      grip: 4,
      miniturbo: 7,
      invincibility: 0,
    },
  },
  {
    name: "Master Cycle Zero",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/2/26/MK8D_Master_Cycle_Zero.png/120px-MK8D_Master_Cycle_Zero.png",
    stats: {
      speed: { air: 3, antigravity: 3, ground: 2, water: 4 },
      acceleration: 2,
      weight: 3,
      handling: { air: 4, antigravity: 4, ground: 3, water: 3 },
      grip: 7,
      miniturbo: 3,
      invincibility: 3,
    },
  },
  {
    name: "City Tripper",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/b/be/MK8_Light-Green_City_Tripper.png/120px-MK8_Light-Green_City_Tripper.png",
    stats: {
      speed: { air: 1, antigravity: 1, ground: 1, water: 3 },
      acceleration: 6,
      weight: 1,
      handling: { air: 2, antigravity: 4, ground: 5, water: 4 },
      grip: 4,
      miniturbo: 6,
      invincibility: 1,
    },
  },
  {
    name: "Comet",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/0/0e/CometBodyMK8.png/120px-CometBodyMK8.png",
    stats: {
      speed: { air: 4, antigravity: 3, ground: 2, water: 2 },
      acceleration: 5,
      weight: 2,
      handling: { air: 4, antigravity: 3, ground: 4, water: 2 },
      grip: 3,
      miniturbo: 5,
      invincibility: 2,
    },
  },
  {
    name: "Sport Bike",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/f/fe/SportBikeBodyMK8.png/120px-SportBikeBodyMK8.png",
    stats: {
      speed: { air: 3, antigravity: 3, ground: 4, water: 3 },
      acceleration: 2,
      weight: 1,
      handling: { air: 3, antigravity: 2, ground: 3, water: 3 },
      grip: 2,
      miniturbo: 3,
      invincibility: 3,
    },
  },
  {
    name: "Jet Bike",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/1/12/JetBikeBodyMK8.png/120px-JetBikeBodyMK8.png",
    stats: {
      speed: { air: 3, antigravity: 3, ground: 4, water: 3 },
      acceleration: 2,
      weight: 1,
      handling: { air: 3, antigravity: 2, ground: 3, water: 3 },
      grip: 2,
      miniturbo: 3,
      invincibility: 3,
    },
  },
  {
    name: "Yoshi Bike",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/6/62/YoshiBikeBodyMK8.png/120px-YoshiBikeBodyMK8.png",
    stats: {
      speed: { air: 4, antigravity: 3, ground: 2, water: 2 },
      acceleration: 5,
      weight: 2,
      handling: { air: 4, antigravity: 3, ground: 4, water: 2 },
      grip: 3,
      miniturbo: 5,
      invincibility: 2,
    },
  },
  {
    name: "Master Cycle",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/8/8a/MK8MasterCycle.png/120px-MK8MasterCycle.png",
    stats: {
      speed: { air: 3, antigravity: 3, ground: 4, water: 2 },
      acceleration: 2,
      weight: 2,
      handling: { air: 2, antigravity: 3, ground: 3, water: 2 },
      grip: 0,
      miniturbo: 3,
      invincibility: 3,
    },
  },
];

export const ATVs = [
  {
    name: "Standard Quad",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/2/23/StandardATVBodyMK8.png/120px-StandardATVBodyMK8.png",
    stats: {
      speed: { air: 1, antigravity: 3, ground: 5, water: 2 },
      acceleration: 0,
      weight: 4,
      handling: { air: 0, antigravity: 1, ground: 0, water: 1 },
      grip: 5,
      miniturbo: 0,
      invincibility: 6,
    },
  },
  {
    name: "Wild Wiggler",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/a/aa/WildWigglerBodyMK8.png/120px-WildWigglerBodyMK8.png",
    stats: {
      speed: { air: 3, antigravity: 4, ground: 2, water: 2 },
      acceleration: 5,
      weight: 1,
      handling: { air: 3, antigravity: 4, ground: 4, water: 3 },
      grip: 5,
      miniturbo: 5,
      invincibility: 1,
    },
  },
  {
    name: "Teddy Buggy",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/f/fa/TeddyBuggyBodyMK8.png/120px-TeddyBuggyBodyMK8.png",
    stats: {
      speed: { air: 4, antigravity: 3, ground: 2, water: 2 },
      acceleration: 5,
      weight: 2,
      handling: { air: 4, antigravity: 3, ground: 4, water: 2 },
      grip: 3,
      miniturbo: 5,
      invincibility: 3,
    },
  },
  {
    name: "Bone Rattler",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/0/0a/MK8BoneRattler.png/120px-MK8BoneRattler.png",
    stats: {
      speed: { air: 0, antigravity: 2, ground: 4, water: 5 },
      acceleration: 1,
      weight: 4,
      handling: { air: 1, antigravity: 1, ground: 1, water: 5 },
      grip: 3,
      miniturbo: 2,
      invincibility: 5,
    },
  },
  {
    name: "Splat Buggy",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/6/63/MK8DX_Splat_Buggy.png/120px-MK8DX_Splat_Buggy.png",
    stats: {
      speed: { air: 3, antigravity: 4, ground: 4, water: 2 },
      acceleration: 3,
      weight: 0,
      handling: { air: 1, antigravity: 5, ground: 2, water: 3 },
      grip: 3,
      miniturbo: 3,
      invincibility: 3,
    },
  },
  {
    name: "Inkstriker",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/e/eb/MK8DX_Inkstriker.png/120px-MK8DX_Inkstriker.png",
    stats: {
      speed: { air: 4, antigravity: 5, ground: 3, water: 3 },
      acceleration: 3,
      weight: 3,
      handling: { air: 2, antigravity: 4, ground: 2, water: 2 },
      grip: 4,
      miniturbo: 4,
      invincibility: 3,
    },
  },
];

export const vehicles = [...karts, ...bikes, ...ATVs];

export const tires = [
  {
    name: "Normal",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/a/a8/StandardTiresMK8.png/120px-StandardTiresMK8.png",
    stats: {
      speed: { air: 3, antigravity: 2, ground: 2, water: 3 },
      acceleration: 4,
      weight: 2,
      handling: { air: 3, antigravity: 3, ground: 3, water: 3 },
      grip: 5,
      miniturbo: 3,
      invincibility: 3,
    },
  },
  {
    name: "Monster",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/2/29/MonsterTiresMK8.png/120px-MonsterTiresMK8.png",
    stats: {
      speed: { air: 1, antigravity: 2, ground: 2, water: 2 },
      acceleration: 2,
      weight: 4,
      handling: { air: 1, antigravity: 0, ground: 0, water: 1 },
      grip: 7,
      miniturbo: 2,
      invincibility: 5,
    },
  },
  {
    name: "Roller",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/7/76/RollerTiresMK8.png/120px-RollerTiresMK8.png",
    stats: {
      speed: { air: 3, antigravity: 0, ground: 0, water: 3 },
      acceleration: 6,
      weight: 0,
      handling: { air: 4, antigravity: 4, ground: 4, water: 4 },
      grip: 4,
      miniturbo: 6,
      invincibility: 0,
    },
  },
  {
    name: "Slim",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/f/f8/SlimTiresMK8.png/120px-SlimTiresMK8.png",
    stats: {
      speed: { air: 2, antigravity: 4, ground: 3, water: 2 },
      acceleration: 2,
      weight: 2,
      handling: { air: 4, antigravity: 3, ground: 4, water: 4 },
      grip: 1,
      miniturbo: 2,
      invincibility: 4,
    },
  },
  {
    name: "Slick",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/d/dd/SlickTiresMK8.png/120px-SlickTiresMK8.png",
    stats: {
      speed: { air: 0, antigravity: 4, ground: 4, water: 0 },
      acceleration: 1,
      weight: 3,
      handling: { air: 1, antigravity: 2, ground: 2, water: 0 },
      grip: 0,
      miniturbo: 0,
      invincibility: 4,
    },
  },
  {
    name: "Metal",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/9/96/MetalTiresMK8.png/120px-MetalTiresMK8.png",
    stats: {
      speed: { air: 2, antigravity: 1, ground: 4, water: 3 },
      acceleration: 0,
      weight: 4,
      handling: { air: 0, antigravity: 1, ground: 2, water: 2 },
      grip: 2,
      miniturbo: 0,
      invincibility: 5,
    },
  },
  {
    name: "Button",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/0/07/ButtonTiresMK8.png/120px-ButtonTiresMK8.png",
    stats: {
      speed: { air: 2, antigravity: 2, ground: 1, water: 2 },
      acceleration: 5,
      weight: 0,
      handling: { air: 2, antigravity: 4, ground: 3, water: 3 },
      grip: 3,
      miniturbo: 5,
      invincibility: 2,
    },
  },
  {
    name: "Off-Road",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/2/25/Off-Road.png/120px-Off-Road.png",
    stats: {
      speed: { air: 1, antigravity: 2, ground: 3, water: 4 },
      acceleration: 3,
      weight: 3,
      handling: { air: 2, antigravity: 2, ground: 1, water: 1 },
      grip: 6,
      miniturbo: 1,
      invincibility: 6,
    },
  },
  {
    name: "Sponge",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/4/4c/SpongeTiresMK8.png/120px-SpongeTiresMK8.png",
    stats: {
      speed: { air: 4, antigravity: 1, ground: 1, water: 1 },
      acceleration: 4,
      weight: 1,
      handling: { air: 3, antigravity: 2, ground: 2, water: 1 },
      grip: 6,
      miniturbo: 4,
      invincibility: 3,
    },
  },
  {
    name: "Wooden",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/0/03/WoodTiresMK8.png/120px-WoodTiresMK8.png",
    stats: {
      speed: { air: 2, antigravity: 4, ground: 3, water: 2 },
      acceleration: 2,
      weight: 2,
      handling: { air: 4, antigravity: 3, ground: 4, water: 4 },
      grip: 1,
      miniturbo: 2,
      invincibility: 4,
    },
  },
  {
    name: "Cushion",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/9/92/CushionTiresMK8.png/120px-CushionTiresMK8.png",
    stats: {
      speed: { air: 4, antigravity: 1, ground: 1, water: 1 },
      acceleration: 4,
      weight: 1,
      handling: { air: 3, antigravity: 2, ground: 2, water: 1 },
      grip: 6,
      miniturbo: 4,
      invincibility: 5,
    },
  },
  {
    name: "Normal Blue",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/d/db/Blue_Standard.png/120px-Blue_Standard.png",
    stats: {
      speed: { air: 3, antigravity: 2, ground: 2, water: 3 },
      acceleration: 4,
      weight: 2,
      handling: { air: 3, antigravity: 3, ground: 3, water: 3 },
      grip: 5,
      miniturbo: 3,
      invincibility: 3,
    },
  },
  {
    name: "Funky Monster",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/d/d1/HotMonsterTiresMK8.png/120px-HotMonsterTiresMK8.png",
    stats: {
      speed: { air: 1, antigravity: 2, ground: 2, water: 2 },
      acceleration: 2,
      weight: 4,
      handling: { air: 1, antigravity: 0, ground: 0, water: 1 },
      grip: 7,
      miniturbo: 2,
      invincibility: 5,
    },
  },
  {
    name: "Azure Roller",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/f/fe/AzureRollerTiresMK8.png/120px-AzureRollerTiresMK8.png",
    stats: {
      speed: { air: 3, antigravity: 0, ground: 0, water: 3 },
      acceleration: 6,
      weight: 0,
      handling: { air: 4, antigravity: 4, ground: 4, water: 4 },
      grip: 4,
      miniturbo: 6,
      invincibility: 0,
    },
  },
  {
    name: "Crimson Slim",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/7/71/CrimsonSlimTiresMK8.png/120px-CrimsonSlimTiresMK8.png",
    stats: {
      speed: { air: 2, antigravity: 4, ground: 3, water: 2 },
      acceleration: 2,
      weight: 2,
      handling: { air: 4, antigravity: 3, ground: 4, water: 4 },
      grip: 1,
      miniturbo: 2,
      invincibility: 4,
    },
  },
  {
    name: "Cyber Slick",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/2/29/CyberSlickTiresMK8.png/120px-CyberSlickTiresMK8.png",
    stats: {
      speed: { air: 0, antigravity: 4, ground: 4, water: 0 },
      acceleration: 1,
      weight: 3,
      handling: { air: 1, antigravity: 2, ground: 2, water: 0 },
      grip: 0,
      miniturbo: 0,
      invincibility: 4,
    },
  },
  {
    name: "Retro Off-Road",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/4/48/Retro_Off-Road.png/120px-Retro_Off-Road.png",
    stats: {
      speed: { air: 1, antigravity: 2, ground: 3, water: 4 },
      acceleration: 3,
      weight: 3,
      handling: { air: 2, antigravity: 2, ground: 1, water: 1 },
      grip: 6,
      miniturbo: 1,
      invincibility: 6,
    },
  },
  //   {
  //     name: "Gold Wheels",
  //     imgSrc:
  //       "https://mario.wiki.gallery/images/thumb/5/52/Gold_Tires_MK8.png/120px-Gold_Tires_MK8.png",
  //   },
  {
    name: "GLA Wheels",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/b/ba/GLATires-MK8.png/120px-GLATires-MK8.png",
    stats: {
      speed: { air: 3, antigravity: 2, ground: 2, water: 3 },
      acceleration: 4,
      weight: 2,
      handling: { air: 3, antigravity: 3, ground: 3, water: 3 },
      grip: 5,
      miniturbo: 3,
      invincibility: 4,
    },
  },
  {
    name: "Triforce Tyres",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/9/9d/MK8-TriforceTires.png/120px-MK8-TriforceTires.png",
    stats: {
      speed: { air: 1, antigravity: 2, ground: 3, water: 4 },
      acceleration: 3,
      weight: 3,
      handling: { air: 2, antigravity: 2, ground: 1, water: 1 },
      grip: 6,
      miniturbo: 1,
      invincibility: 5,
    },
  },
  {
    name: "Ancient Tyres",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/d/d5/MK8D_Ancient_Tires.png/120px-MK8D_Ancient_Tires.png",
    stats: {
      speed: { air: 1, antigravity: 2, ground: 2, water: 2 },
      acceleration: 2,
      weight: 4,
      handling: { air: 1, antigravity: 0, ground: 0, water: 1 },
      grip: 7,
      miniturbo: 2,
      invincibility: 4,
    },
  },
  {
    name: "Leaf Tyres",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/f/f9/Leaf_Tires_MK8.png/120px-Leaf_Tires_MK8.png",
    stats: {
      speed: { air: 2, antigravity: 2, ground: 1, water: 2 },
      acceleration: 5,
      weight: 0,
      handling: { air: 2, antigravity: 4, ground: 3, water: 3 },
      grip: 3,
      miniturbo: 5,
      invincibility: 2,
    },
  },
];

export const gliders = [
  {
    name: "Super Glider",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/a/a8/SuperGliderMK8.png/120px-SuperGliderMK8.png",
    stats: {
      speed: { air: 2, antigravity: 0, ground: 1, water: 1 },
      acceleration: 1,
      weight: 1,
      handling: { air: 1, antigravity: 1, ground: 1, water: 0 },
      grip: 1,
      miniturbo: 1,
      invincibility: 1,
    },
  },
  {
    name: "Cloud Glider",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/8/84/Cloud_Glider.png/120px-Cloud_Glider.png",
    stats: {
      speed: { air: 1, antigravity: 1, ground: 0, water: 1 },
      acceleration: 2,
      weight: 0,
      handling: { air: 2, antigravity: 1, ground: 1, water: 0 },
      grip: 1,
      miniturbo: 2,
      invincibility: 0,
    },
  },
  {
    name: "Wario Wing",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/a/ae/WarioWingMK8.png/120px-WarioWingMK8.png",
    stats: {
      speed: { air: 2, antigravity: 1, ground: 1, water: 0 },
      acceleration: 1,
      weight: 2,
      handling: { air: 1, antigravity: 0, ground: 1, water: 1 },
      grip: 0,
      miniturbo: 1,
      invincibility: 1,
    },
  },
  {
    name: "Waddle Wing",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/e/ef/WaddleWingMK8.png/120px-WaddleWingMK8.png",
    stats: {
      speed: { air: 2, antigravity: 0, ground: 1, water: 1 },
      acceleration: 1,
      weight: 1,
      handling: { air: 1, antigravity: 1, ground: 1, water: 0 },
      grip: 1,
      miniturbo: 1,
      invincibility: 1,
    },
  },
  {
    name: "Peach Parasol",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/6/6e/PeachParasolGliderMK8.png/120px-PeachParasolGliderMK8.png",
    stats: {
      speed: { air: 1, antigravity: 1, ground: 0, water: 0 },
      acceleration: 2,
      weight: 1,
      handling: { air: 2, antigravity: 0, ground: 1, water: 1 },
      grip: 0,
      miniturbo: 2,
      invincibility: 0,
    },
  },
  {
    name: "Parachute",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/d/dd/ParachuteGliderMK8.png/120px-ParachuteGliderMK8.png",
    stats: {
      speed: { air: 1, antigravity: 1, ground: 0, water: 1 },
      acceleration: 2,
      weight: 0,
      handling: { air: 2, antigravity: 1, ground: 1, water: 0 },
      grip: 1,
      miniturbo: 2,
      invincibility: 0,
    },
  },
  {
    name: "Parafoil",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/c/c4/ParafoilGliderMK8.png/120px-ParafoilGliderMK8.png",
    stats: {
      speed: { air: 1, antigravity: 1, ground: 0, water: 0 },
      acceleration: 2,
      weight: 1,
      handling: { air: 2, antigravity: 0, ground: 1, water: 1 },
      grip: 0,
      miniturbo: 2,
      invincibility: 0,
    },
  },
  {
    name: "Flower Glider",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/b/b3/FlowerGliderMK8.png/120px-FlowerGliderMK8.png",
    stats: {
      speed: { air: 1, antigravity: 1, ground: 0, water: 1 },
      acceleration: 2,
      weight: 0,
      handling: { air: 2, antigravity: 1, ground: 1, water: 0 },
      grip: 1,
      miniturbo: 2,
      invincibility: 0,
    },
  },
  {
    name: "Bowser Kite",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/f/f7/BowserKiteMK8.png/120px-BowserKiteMK8.png",
    stats: {
      speed: { air: 1, antigravity: 1, ground: 0, water: 0 },
      acceleration: 2,
      weight: 1,
      handling: { air: 2, antigravity: 0, ground: 1, water: 1 },
      grip: 0,
      miniturbo: 2,
      invincibility: 0,
    },
  },
  {
    name: "Plane Glider",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/c/ca/PlaneGliderMK8.png/120px-PlaneGliderMK8.png",
    stats: {
      speed: { air: 2, antigravity: 1, ground: 1, water: 0 },
      acceleration: 1,
      weight: 2,
      handling: { air: 1, antigravity: 0, ground: 1, water: 1 },
      grip: 0,
      miniturbo: 1,
      invincibility: 1,
    },
  },
  {
    name: "MKTV Parafoil",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/9/96/MKTVParafoilGliderMK8.png/120px-MKTVParafoilGliderMK8.png",
    stats: {
      speed: { air: 1, antigravity: 1, ground: 0, water: 0 },
      acceleration: 2,
      weight: 1,
      handling: { air: 2, antigravity: 0, ground: 1, water: 1 },
      grip: 0,
      miniturbo: 2,
      invincibility: 0,
    },
  },
  {
    name: "Gold Glider",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/1/18/GoldGliderMK8.png/120px-GoldGliderMK8.png",
    stats: {
      speed: { air: 2, antigravity: 1, ground: 1, water: 0 },
      acceleration: 1,
      weight: 2,
      handling: { air: 1, antigravity: 0, ground: 1, water: 1 },
      grip: 0,
      miniturbo: 1,
      invincibility: 1,
    },
  },
  {
    name: "Hylian Kite",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/9/9c/MK8-HylianKite.png/120px-MK8-HylianKite.png",
    stats: {
      speed: { air: 2, antigravity: 0, ground: 1, water: 1 },
      acceleration: 1,
      weight: 1,
      handling: { air: 1, antigravity: 1, ground: 1, water: 0 },
      grip: 1,
      miniturbo: 1,
      invincibility: 1,
    },
  },
  {
    name: "Paraglider",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/3/39/MK8D_Paraglider.png/120px-MK8D_Paraglider.png",
    stats: {
      speed: { air: 2, antigravity: 1, ground: 1, water: 0 },
      acceleration: 1,
      weight: 2,
      handling: { air: 1, antigravity: 0, ground: 1, water: 1 },
      grip: 0,
      miniturbo: 1,
      invincibility: 1,
    },
  },
  {
    name: "Paper Glider",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/0/0e/PaperGliderIcon-MK8.png/120px-PaperGliderIcon-MK8.png",
    stats: {
      speed: { air: 1, antigravity: 1, ground: 0, water: 1 },
      acceleration: 2,
      weight: 0,
      handling: { air: 2, antigravity: 1, ground: 1, water: 0 },
      grip: 1,
      miniturbo: 2,
      invincibility: 0,
    },
  },
];

export const items = [
  {
    name: "Banana",
    imgSrc:
      "https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/0/00/Mk8item5.png?width=325",
  },
  {
    name: "Triple Bananas",
    imgSrc:
      "https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/1/1a/Mk8item6.png?width=325",
  },
  {
    name: "Green Shell",
    imgSrc:
      "https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/f/f2/Mk8item7.png?width=325",
  },
  {
    name: "Triple Green Shells",
    imgSrc:
      "https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/6/60/Mk8item8.png?width=325",
  },
  {
    name: "Red Shell",
    imgSrc:
      "https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/b/b4/Mk8item9.png?width=325",
  },
  {
    name: "Triple Red Shells",
    imgSrc:
      "https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/b/b4/Mk8item10.png?width=325",
  },
  {
    name: "Spiny Shell",
    imgSrc:
      "https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/f/f1/Mk8item11.png?width=325",
  },
  {
    name: "Bob-omb",
    imgSrc:
      "https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/d/d7/Mk8item14.png?width=325",
  },
  {
    name: "Mushroom",
    imgSrc:
      "https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/6/6e/Mk8item1.png?width=325",
  },
  {
    name: "Triple Mushrooms",
    imgSrc:
      "https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/a/a6/Mk8item2.png?width=325",
  },
  {
    name: "Golden Mushroom",
    imgSrc:
      "https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/b/ba/Mk8item3.png?width=325",
  },
  {
    name: "Bullet Bill",
    imgSrc:
      "https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/f/ff/Mk8item13.png?width=325",
  },
  {
    name: "Blooper",
    imgSrc:
      "https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/f/f1/Mk8item15.png?width=325",
  },
  {
    name: "Lightning",
    imgSrc:
      "https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/a/af/Mk8item12.png?width=325",
  },
  {
    name: "Star",
    imgSrc:
      "https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/f/fb/Mk8item4.png?width=325",
  },
  {
    name: "Fire Flower",
    imgSrc:
      "https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/e/ec/Mk8item16.png?width=325",
  },
  {
    name: "Boomerang Flower",
    imgSrc:
      "https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/d/d5/Mk8item17.png?width=325",
  },
  {
    name: "Piranha Plant",
    imgSrc:
      "https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/1/12/Mk8item18.png?width=325",
  },
  {
    name: "Super Horn",
    imgSrc:
      "https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/4/49/Mk8item21.png?width=325",
  },
  {
    name: "Crazy 8",
    imgSrc:
      "https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/d/dc/Mk8item22.png?width=325",
  },
  {
    name: "Coin",
    imgSrc:
      "https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/8/87/Mk8item19.png?width=640",
  },
  {
    name: "Boo",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/3/3b/NSMBW_Boo_Artwork.png/800px-NSMBW_Boo_Artwork.png",
  },
];
export const cups = [
  {
    name: "Mushroom Cup",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/1/15/MK8_MushroomCup.png/70px-MK8_MushroomCup.png",
  },
  {
    name: "Flower Cup",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/a/a8/MK8_FlowerCup.png/70px-MK8_FlowerCup.png",
  },
  {
    name: "Star Cup",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/7/78/MK8_Star_Cup_Emblem.png/70px-MK8_Star_Cup_Emblem.png",
  },
  {
    name: "Special Cup",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/6/65/MK8_Special_Cup_Emblem.png/70px-MK8_Special_Cup_Emblem.png",
  },
  {
    name: "Egg Cup",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/e/ea/MK8_Egg_Cup_Emblem.png/70px-MK8_Egg_Cup_Emblem.png",
  },
  {
    name: "Crossing Cup",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/9/92/MK8_Crossing_Cup_Emblem.png/70px-MK8_Crossing_Cup_Emblem.png",
  },
  {
    name: "Shell Cup",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/c/cc/MK8_Shell_Cup_Emblem.png/70px-MK8_Shell_Cup_Emblem.png",
  },
  {
    name: "Banana Cup",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/7/76/MK8_Banana_Cup_Emblem.png/70px-MK8_Banana_Cup_Emblem.png",
  },
  {
    name: "Leaf Cup",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/2/28/MK8_Leaf_Cup_Emblem.png/70px-MK8_Leaf_Cup_Emblem.png",
  },
  {
    name: "Lightning Cup",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/1/19/MK8_Lightning_Cup_Emblem.png/70px-MK8_Lightning_Cup_Emblem.png",
  },
  {
    name: "Triforce Cup",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/6/6b/MK8_Triforce_Cup_Emblem.png/70px-MK8_Triforce_Cup_Emblem.png",
  },
  {
    name: "Bell Cup",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/8/82/MK8_Bell_Cup_Emblem.png/70px-MK8_Bell_Cup_Emblem.png",
  },
  {
    name: "Golden Dash Cup",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/7/7e/MK8D_BCP_Golden_Dash_Emblem.png/70px-MK8D_BCP_Golden_Dash_Emblem.png",
  },
  {
    name: "Lucky Cat Cup",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/1/18/MK8D_BCP_Lucky_Cat_Emblem.png/70px-MK8D_BCP_Lucky_Cat_Emblem.png",
  },
  {
    name: "Turnip Cup",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/e/ea/MK8D_BCP_Turnip_Emblem.png/70px-MK8D_BCP_Turnip_Emblem.png",
  },
  {
    name: "Propeller Cup",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/a/ab/MK8D_BCP_Propeller_Emblem.png/70px-MK8D_BCP_Propeller_Emblem.png",
  },
  {
    name: "Rock Cup",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/6/66/MK8D_BCP_Rock_Emblem.png/70px-MK8D_BCP_Rock_Emblem.png",
  },
  {
    name: "Moon Cup",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/c/c2/MK8D_BCP_Moon_Emblem.png/70px-MK8D_BCP_Moon_Emblem.png",
  },
];

export const courses = [
  {
    name: "Mario Kart Stadium",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/0/09/MK8_Mario_Kart_Stadium_Course_Icon.png/151px-MK8_Mario_Kart_Stadium_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Mushroom Cup"),
  },
  {
    name: "Mario Circuit",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/2/28/MK8_Mario_Circuit_Course_Icon.png/151px-MK8_Mario_Circuit_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Flower Cup"),
  },
  {
    name: "Sunshine Airport",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/9/99/MK8_Sunshine_Airport_Course_Icon.png/151px-MK8_Sunshine_Airport_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Star Cup"),
  },
  {
    name: "Cloudtop Cruise",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/8/81/MK8_Cloudtop_Cruise_Course_Icon.png/151px-MK8_Cloudtop_Cruise_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Special Cup"),
  },
  {
    name: "GCN Yoshi Circuit",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/9/94/MK8_GCN_Yoshi_Circuit_Course_Icon.png/151px-MK8_GCN_Yoshi_Circuit_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Egg Cup"),
  },
  {
    name: "GCN Baby Park",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/3/34/MK8_GCN_Baby_Park_Course_Icon.png/151px-MK8_GCN_Baby_Park_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Crossing Cup"),
  },

  {
    name: "Water Park",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/4/40/MK8_Water_Park_Course_Icon.png/151px-MK8_Water_Park_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Mushroom Cup"),
  },
  {
    name: "Toad Harbor",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/2/2a/MK8_Toad_Harbor_Course_Icon.png/151px-MK8_Toad_Harbor_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Flower Cup"),
  },
  {
    name: "Dolphin Shoals",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/f/fc/MK8_Dolphin_Shoals_Course_Icon.png/151px-MK8_Dolphin_Shoals_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Star Cup"),
  },
  {
    name: "Bone-Dry Dunes",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/d/d3/MK8_Bone-Dry_Dunes_Course_Icon.png/151px-MK8_Bone-Dry_Dunes_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Special Cup"),
  },
  {
    name: "Excitebike Arena",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/5/57/MK8_Excitebike_Arena_Course_Icon.png/151px-MK8_Excitebike_Arena_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Egg Cup"),
  },
  {
    name: "GBA Cheese Land",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/1/15/MK8_GBA_Cheese_Land_Course_Icon.png/151px-MK8_GBA_Cheese_Land_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Crossing Cup"),
  },

  {
    name: "Sweet Sweet Canyon",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/a/ad/MK8_Sweet_Sweet_Canyon_Course_Icon.png/151px-MK8_Sweet_Sweet_Canyon_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Mushroom Cup"),
  },
  {
    name: "Twisted Mansion",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/6/68/MK8_Twisted_Mansion_Course_Icon.png/151px-MK8_Twisted_Mansion_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Flower Cup"),
  },
  {
    name: "Electrodrome",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/1/14/MK8_Electrodrome_Course_Icon.png/151px-MK8_Electrodrome_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Star Cup"),
  },
  {
    name: "Bowser's Castle",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/2/2b/MK8_Bowser%27s_Castle_Course_Icon.png/151px-MK8_Bowser%27s_Castle_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Special Cup"),
  },
  {
    name: "Dragon Driftway",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/b/bb/MK8_Dragon_Driftway_Course_Icon.png/151px-MK8_Dragon_Driftway_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Egg Cup"),
  },
  {
    name: "Wild Woods",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/e/e4/MK8_Wild_Woods_Course_Icon.png/151px-MK8_Wild_Woods_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Crossing Cup"),
  },

  {
    name: "Thwomp Ruins",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/e/e8/MK8_Thwomp_Ruins_Course_Icon.png/151px-MK8_Thwomp_Ruins_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Mushroom Cup"),
  },
  {
    name: "Shy Guy Falls",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/2/2a/MK8_Shy_Guy_Falls_Course_Icon.png/151px-MK8_Shy_Guy_Falls_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Flower Cup"),
  },
  {
    name: "Mount Wario",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/3/38/MK8_Mount_Wario_Course_Icon.png/151px-MK8_Mount_Wario_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Star Cup"),
  },
  {
    name: "Rainbow Road",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/7/77/MK8_Rainbow_Road_Course_Icon.png/151px-MK8_Rainbow_Road_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Special Cup"),
  },
  {
    name: "Mute City",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/f/fa/MK8_Mute_City_Course_Icon.png/151px-MK8_Mute_City_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Egg Cup"),
  },
  {
    name: "Animal Crossing",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/1/15/MK8_Animal_Crossing_Course_Icon.png/151px-MK8_Animal_Crossing_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Crossing Cup"),
  },
  {
    name: "Wii Moo Moo Meadows",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/9/97/MK8_Wii_Moo_Moo_Meadows_Course_Icon.png/151px-MK8_Wii_Moo_Moo_Meadows_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Shell Cup"),
  },
  {
    name: "GCN Dry Dry Desert",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/6/64/MK8_GCN_Dry_Dry_Desert_Course_Icon.png/151px-MK8_GCN_Dry_Dry_Desert_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Banana Cup"),
  },
  {
    name: "DS Wario Stadium",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/1/1a/MK8_DS_Wario_Stadium_Course_Icon.png/151px-MK8_DS_Wario_Stadium_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Leaf Cup"),
  },
  {
    name: "DS Tick-Tock Clock",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/0/0b/MK8_DS_Tick-Tock_Clock_Course_Icon.png/151px-MK8_DS_Tick-Tock_Clock_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Lightning Cup"),
  },
  {
    name: "Wii Wario's Gold Mine",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/9/94/MK8_Wii_Wario%27s_Gold_Mine_Course_Icon.png/151px-MK8_Wii_Wario%27s_Gold_Mine_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Triforce Cup"),
  },
  {
    name: "3DS Neo Bowser City",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/b/b0/MK8_3DS_Neo_Bowser_City_Course_Icon.png/151px-MK8_3DS_Neo_Bowser_City_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Bell Cup"),
  },

  {
    name: "GBA Mario Circuit",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/f/f7/MK8_GBA_Mario_Circuit_Course_Icon.png/151px-MK8_GBA_Mario_Circuit_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Shell Cup"),
  },
  {
    name: "SNES Donut Plains 3",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/b/b1/MK8_SNES_Donut_Plains_3_Course_Icon.png/151px-MK8_SNES_Donut_Plains_3_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Banana Cup"),
  },
  {
    name: "GCN Sherbet Land",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/3/3f/MK8_GCN_Sherbet_Land_Course_Icon.png/151px-MK8_GCN_Sherbet_Land_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Leaf Cup"),
  },
  {
    name: "3DS Piranha Plant Slide",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/d/d1/MK8_3DS_Piranha_Plant_Slide_Course_Icon.png/151px-MK8_3DS_Piranha_Plant_Slide_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Lightning Cup"),
  },
  {
    name: "SNES Rainbow Road",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/0/05/MK8_SNES_Rainbow_Road_Course_Icon.png/151px-MK8_SNES_Rainbow_Road_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Triforce Cup"),
  },
  {
    name: "GBA Ribbon Road",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/e/e2/MK8_GBA_Ribbon_Road_Course_Icon.png/151px-MK8_GBA_Ribbon_Road_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Bell Cup"),
  },

  {
    name: "DS Cheep Cheep Beach",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/9/9e/MK8_DS_Cheep_Cheep_Beach_Course_Icon.png/151px-MK8_DS_Cheep_Cheep_Beach_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Shell Cup"),
  },
  {
    name: "N64 Royal Raceway",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/8/8a/MK8_N64_Royal_Raceway_Course_Icon.png/151px-MK8_N64_Royal_Raceway_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Banana Cup"),
  },
  {
    name: "3DS Music Park",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/9/94/MK8_3DS_Music_Park_Course_Icon.png/151px-MK8_3DS_Music_Park_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Leaf Cup"),
  },
  {
    name: "Wii Grumble Volcano",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/b/b2/MK8_Wii_Grumble_Volcano_Course_Icon.png/151px-MK8_Wii_Grumble_Volcano_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Lightning Cup"),
  },
  {
    name: "Ice Ice Outpost",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/c/c4/MK8_Ice_Ice_Outpost_Course_Icon.png/151px-MK8_Ice_Ice_Outpost_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Triforce Cup"),
  },
  {
    name: "Super Bell Subway",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/7/7e/MK8_Super_Bell_Subway_Course_Icon.png/151px-MK8_Super_Bell_Subway_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Bell Cup"),
  },
  {
    name: "N64 Toad's Turnpike",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/5/55/MK8_N64_Toad%27s_Turnpike_Course_Icon.png/151px-MK8_N64_Toad%27s_Turnpike_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Shell Cup"),
  },
  {
    name: "3DS DK Jungle",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/3/35/MK8_3DS_DK_Jungle_Course_Icon.png/151px-MK8_3DS_DK_Jungle_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Banana Cup"),
  },
  {
    name: "N64 Yoshi Valley",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/a/a4/MK8_N64_Yoshi_Valley_Course_Icon.png/151px-MK8_N64_Yoshi_Valley_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Leaf Cup"),
  },
  {
    name: "N64 Rainbow Road",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/b/b9/MK8_N64_Rainbow_Road_Course_Icon.png/151px-MK8_N64_Rainbow_Road_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Lightning Cup"),
  },
  {
    name: "Hyrule Circuit",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/5/5e/MK8_Hyrule_Circuit_Course_Icon.png/151px-MK8_Hyrule_Circuit_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Triforce Cup"),
  },
  {
    name: "Big Blue",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/0/06/MK8_Big_Blue_Course_Icon.png/151px-MK8_Big_Blue_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Bell Cup"),
  },
  {
    name: "Tour Paris Promenade",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/b/bb/MK8D_Tour_Paris_Promenade_Course_Icon.png/151px-MK8D_Tour_Paris_Promenade_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Golden Dash Cup"),
  },
  {
    name: "Tour Tokyo Blur",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/8/81/MK8D_Tour_Tokyo_Blur_Course_Icon.png/151px-MK8D_Tour_Tokyo_Blur_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Lucky Cat Cup"),
  },
  {
    name: "Tour New York Minute",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/d/d7/MK8D_Tour_New_York_Minute_Course_Icon.png/151px-MK8D_Tour_New_York_Minute_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Turnip Cup"),
  },
  {
    name: "Tour Sydney Sprint",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/d/d4/MK8D_Tour_Sydney_Sprint_Course_Icon.png/151px-MK8D_Tour_Sydney_Sprint_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Propeller Cup"),
  },
  {
    name: "Tour London Loop",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/2/24/MK8D_Tour_London_Loop_Course_Icon.png/151px-MK8D_Tour_London_Loop_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Rock Cup"),
  },
  {
    name: "Tour Berlin Byways",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/7/73/MK8D_Tour_Berlin_Byways_Course_Icon.png/151px-MK8D_Tour_Berlin_Byways_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Moon Cup"),
  },
  {
    name: "3DS Toad Circuit",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/3/3b/MK8D_3DS_Toad_Circuit_Course_Icon.png/151px-MK8D_3DS_Toad_Circuit_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Golden Dash Cup"),
  },
  {
    name: "DS Shroom Ridge",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/7/7e/MK8D_DS_Shroom_Ridge_Course_Icon.png/151px-MK8D_DS_Shroom_Ridge_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Lucky Cat Cup"),
  },
  {
    name: "SNES Mario Circuit 3",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/e/e4/MK8D_SNES_Mario_Circuit_3_Course_Icon.png/151px-MK8D_SNES_Mario_Circuit_3_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Turnip Cup"),
  },
  {
    name: "GBA Snow Land",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/b/bc/MK8D_GBA_Snow_Land_Course_Icon.png/151px-MK8D_GBA_Snow_Land_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Propeller Cup"),
  },
  {
    name: "GBA Boo Lake",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/7/71/MK8D_GBA_Boo_Lake_Course_Icon.png/151px-MK8D_GBA_Boo_Lake_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Rock Cup"),
  },
  {
    name: "DS Peach Gardens",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/0/0b/MK8D_DS_Peach_Gardens_Course_Icon.png/151px-MK8D_DS_Peach_Gardens_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Moon Cup"),
  },

  {
    name: "N64 Choco Mountain",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/7/74/MK8D_N64_Choco_Mountain_Course_Icon.png/151px-MK8D_N64_Choco_Mountain_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Golden Dash Cup"),
  },
  {
    name: "GBA Sky Garden",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/0/09/MK8D_GBA_Sky_Garden_Course_Icon.png/151px-MK8D_GBA_Sky_Garden_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Lucky Cat Cup"),
  },
  {
    name: "N64 Kalimari Desert",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/3/3e/MK8D_N64_Kalimari_Desert_Course_Icon.png/151px-MK8D_N64_Kalimari_Desert_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Turnip Cup"),
  },
  {
    name: "Wii Mushroom Gorge",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/f/fb/MK8D_Wii_Mushroom_Gorge_Course_Icon.png/151px-MK8D_Wii_Mushroom_Gorge_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Propeller Cup"),
  },
  {
    name: "3DS Rock Rock Mountain",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/e/ee/MK8D_3DS_Rock_Rock_Mountain_Course_Icon.png/151px-MK8D_3DS_Rock_Rock_Mountain_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Rock Cup"),
  },
  {
    name: "Merry Mountain",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/5/56/MK8D_Merry_Mountain_Course_Icon.png/151px-MK8D_Merry_Mountain_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Moon Cup"),
  },

  {
    name: "Wii Coconut Mall",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/9/98/MK8D_Wii_Coconut_Mall_Course_Icon.png/151px-MK8D_Wii_Coconut_Mall_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Golden Dash Cup"),
  },
  {
    name: "Ninja Hideaway",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/b/b1/MK8D_Ninja_Hideaway_Course_Icon.png/151px-MK8D_Ninja_Hideaway_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Lucky Cat Cup"),
  },
  {
    name: "DS Waluigi Pinball",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/b/b6/MK8D_DS_Waluigi_Pinball_Course_Icon.png/151px-MK8D_DS_Waluigi_Pinball_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Turnip Cup"),
  },
  {
    name: "Sky-High Sundae",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/d/d0/MK8D_Sky-High_Sundae_Course_Icon.png/151px-MK8D_Sky-High_Sundae_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Propeller Cup"),
  },
  {
    name: "Wii Maple Treeway",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/c/c9/MK8D_Wii_Maple_Treeway_Course_Icon.png/151px-MK8D_Wii_Maple_Treeway_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Rock Cup"),
  },
  {
    name: "3DS Rainbow Road",
    imgSrc:
      "https://mario.wiki.gallery/images/thumb/9/9f/MK8D_3DS_Rainbow_Road_Course_Icon.png/151px-MK8D_3DS_Rainbow_Road_Course_Icon.png",
    cup: cups.find((cup) => cup.name === "Moon Cup"),
  },
];
