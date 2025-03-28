
import { CosmeticItem } from "@/types/cosmetics";

export const cosmeticsData: CosmeticItem[] = [
  {
    id: "border_royal_gold",
    name: "Royal Gold Border",
    description: "A luxurious gold border fit for royalty",
    category: "appearance",
    type: "border",
    rarity: "legendary",
    cost: 100,
    imageSrc: "/assets/cosmetics/borders/royal-gold.png",
    cssClass: "border-royal-gold animate-border-shine"
  },
  {
    id: "color_royal_purple",
    name: "Royal Purple",
    description: "The color of nobility and wealth",
    category: "appearance",
    type: "color",
    rarity: "epic",
    cost: 75,
    cssClass: "text-royal-purple"
  },
  {
    id: "font_medieval_script",
    name: "Medieval Script",
    description: "Ornate lettering from a bygone era",
    category: "appearance",
    type: "font",
    rarity: "rare",
    cost: 50,
    cssClass: "font-medieval"
  },
  {
    id: "title_lord",
    name: "Lord of Spending",
    description: "A title that denotes your significant contributions",
    category: "profile",
    type: "title",
    rarity: "epic",
    cost: 200
  },
  {
    id: "title_lady",
    name: "Lady of Luxury",
    description: "A refined title for those with exquisite taste",
    category: "profile",
    type: "title",
    rarity: "epic",
    cost: 200
  },
  {
    id: "emoji_diamond",
    name: "Diamond Emoji",
    description: "Sparkle with expensive taste in chat",
    category: "interaction",
    type: "emoji",
    rarity: "uncommon",
    cost: 25
  },
  {
    id: "border_flame",
    name: "Flame Border",
    description: "A fiery border that shows your burning passion for spending",
    category: "appearance",
    type: "border",
    rarity: "rare",
    cost: 80,
    cssClass: "border-gradient-fire"
  },
  {
    id: "effect_sparkle",
    name: "Sparkle Effect",
    description: "Make your profile card sparkle with wealth",
    category: "appearance",
    type: "effect",
    rarity: "uncommon",
    cost: 60,
    cssClass: "animate-sparkle"
  },
  {
    id: "badge_whale",
    name: "Whale Badge",
    description: "Show off your big spending with this exclusive badge",
    category: "profile",
    type: "badge",
    rarity: "legendary",
    cost: 500,
    imageSrc: "/assets/cosmetics/badges/whale.png"
  },
  {
    id: "background_throne",
    name: "Throne Room Background",
    description: "A regal throne room backdrop for your profile",
    category: "appearance",
    type: "background",
    rarity: "epic",
    cost: 300,
    imageSrc: "/assets/cosmetics/backgrounds/throne-room.png"
  }
];

export default cosmeticsData;
