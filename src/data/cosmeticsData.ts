
import { CosmeticItem } from "@/types/cosmetics";

export const cosmeticsData: CosmeticItem[] = [
  {
    id: "border_royal_gold",
    name: "Royal Gold Border",
    description: "A luxurious gold border fit for royalty",
    category: "appearance",
    type: "border",
    rarity: "legendary",
    price: 100,
    cost: 100, // Kept for backward compatibility
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
    price: 75,
    cost: 75, // Kept for backward compatibility
    cssClass: "text-royal-purple"
  },
  {
    id: "font_medieval_script",
    name: "Medieval Script",
    description: "Ornate lettering from a bygone era",
    category: "appearance",
    type: "font",
    rarity: "rare",
    price: 50,
    cost: 50, // Kept for backward compatibility
    cssClass: "font-medieval"
  },
  {
    id: "title_lord",
    name: "Lord of Spending",
    description: "A title that denotes your significant contributions",
    category: "profile",
    type: "title",
    rarity: "epic",
    price: 200,
    cost: 200, // Kept for backward compatibility
    cssClass: "title-lord"
  },
  {
    id: "title_lady",
    name: "Lady of Luxury",
    description: "A refined title for those with exquisite taste",
    category: "profile",
    type: "title",
    rarity: "epic",
    price: 200,
    cost: 200, // Kept for backward compatibility
    cssClass: "title-lady"
  },
  {
    id: "emoji_diamond",
    name: "Diamond Emoji",
    description: "Sparkle with expensive taste in chat",
    category: "interaction",
    type: "emoji",
    rarity: "uncommon",
    price: 25,
    cost: 25, // Kept for backward compatibility
    cssClass: "emoji-diamond"
  },
  {
    id: "border_flame",
    name: "Flame Border",
    description: "A fiery border that shows your burning passion for spending",
    category: "appearance",
    type: "border",
    rarity: "rare",
    price: 80,
    cost: 80, // Kept for backward compatibility
    cssClass: "border-gradient-fire"
  },
  {
    id: "effect_sparkle",
    name: "Sparkle Effect",
    description: "Make your profile card sparkle with wealth",
    category: "appearance",
    type: "effect",
    rarity: "uncommon",
    price: 60,
    cost: 60, // Kept for backward compatibility
    cssClass: "animate-sparkle"
  },
  {
    id: "badge_whale",
    name: "Whale Badge",
    description: "Show off your big spending with this exclusive badge",
    category: "profile",
    type: "badge",
    rarity: "legendary",
    price: 500,
    cost: 500, // Kept for backward compatibility
    cssClass: "badge-whale",
    imageSrc: "/assets/cosmetics/badges/whale.png"
  },
  {
    id: "background_throne",
    name: "Throne Room Background",
    description: "A regal throne room backdrop for your profile",
    category: "appearance",
    type: "background",
    rarity: "epic",
    price: 300,
    cost: 300, // Kept for backward compatibility
    cssClass: "bg-throne-room",
    imageSrc: "/assets/cosmetics/backgrounds/throne-room.png"
  }
];

export default cosmeticsData;
