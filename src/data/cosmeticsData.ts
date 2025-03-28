
import { CosmeticItem, CosmeticCategory, CosmeticType, CosmeticRarity } from '@/types/cosmetics';

// Collection of cosmetic items for the Royal Boutique
export const cosmeticsData: CosmeticItem[] = [
  // Borders (Profile Decorations)
  {
    id: 'border-royal-gold',
    name: 'Royal Gold Border',
    description: 'A shimmering gold border fit for royalty',
    category: 'border',
    type: 'gradient',
    rarity: 'uncommon',
    cost: 5,
    placement: 'profile',
    imageSrc: '/images/cosmetics/borders/royal-gold.png'
  },
  {
    id: 'border-crimson-court',
    name: 'Crimson Court Border',
    description: 'A deep crimson border with ornate patterns',
    category: 'border',
    type: 'static',
    rarity: 'rare',
    cost: 10,
    placement: 'profile',
    imageSrc: '/images/cosmetics/borders/crimson-court.png'
  },
  {
    id: 'border-emerald-throne',
    name: 'Emerald Throne Border',
    description: 'A vibrant emerald border with royal motifs',
    category: 'border',
    type: 'static',
    rarity: 'rare',
    cost: 10,
    placement: 'profile',
    imageSrc: '/images/cosmetics/borders/emerald-throne.png'
  },
  {
    id: 'border-sapphire-crown',
    name: 'Sapphire Crown Border',
    description: 'A deep blue border adorned with crown insignias',
    category: 'border',
    type: 'static',
    rarity: 'rare',
    cost: 10,
    placement: 'profile',
    imageSrc: '/images/cosmetics/borders/sapphire-crown.png'
  },
  {
    id: 'border-royal-rainbow',
    name: 'Royal Rainbow Border',
    description: 'A shimmering rainbow border that cycles through royal hues',
    category: 'border',
    type: 'rainbow',
    rarity: 'epic',
    cost: 25,
    placement: 'profile',
    imageSrc: '/images/cosmetics/borders/royal-rainbow.png'
  },
  
  // Colors (Profile Color Schemes)
  {
    id: 'color-royal-purple',
    name: 'Royal Purple',
    description: 'Majestic purple color scheme for your profile',
    category: 'color',
    type: 'static',
    rarity: 'common',
    cost: 3,
    placement: 'profile',
    cssClass: 'royal-purple-scheme'
  },
  {
    id: 'color-golden-throne',
    name: 'Golden Throne',
    description: 'Luxurious gold and amber color scheme',
    category: 'color',
    type: 'static',
    rarity: 'uncommon',
    cost: 5,
    placement: 'profile',
    cssClass: 'golden-throne-scheme'
  },
  {
    id: 'color-emerald-court',
    name: 'Emerald Court',
    description: 'Rich green color scheme inspired by royal gardens',
    category: 'color',
    type: 'static',
    rarity: 'uncommon',
    cost: 5,
    placement: 'profile',
    cssClass: 'emerald-court-scheme'
  },
  {
    id: 'color-azure-dynasty',
    name: 'Azure Dynasty',
    description: 'Elegant blue color scheme representing royal lineage',
    category: 'color',
    type: 'static',
    rarity: 'uncommon',
    cost: 5,
    placement: 'profile',
    cssClass: 'azure-dynasty-scheme'
  },
  {
    id: 'color-crimson-kingdom',
    name: 'Crimson Kingdom',
    description: 'Bold red color scheme symbolizing power',
    category: 'color',
    type: 'static',
    rarity: 'uncommon',
    cost: 5,
    placement: 'profile',
    cssClass: 'crimson-kingdom-scheme'
  },
  
  // Fonts (Text Styles)
  {
    id: 'font-royal-script',
    name: 'Royal Script',
    description: 'Elegant script font for the true nobility',
    category: 'font',
    type: 'static',
    rarity: 'uncommon',
    cost: 5,
    placement: 'profile',
    cssClass: 'font-royal-script'
  },
  {
    id: 'font-noble-serif',
    name: 'Noble Serif',
    description: 'Sophisticated serif font for distinguished profiles',
    category: 'font',
    type: 'static',
    rarity: 'common',
    cost: 3,
    placement: 'profile',
    cssClass: 'font-noble-serif'
  },
  {
    id: 'font-kingdom-display',
    name: 'Kingdom Display',
    description: 'Bold display font fit for royal proclamations',
    category: 'font',
    type: 'static',
    rarity: 'uncommon',
    cost: 5,
    placement: 'profile',
    cssClass: 'font-kingdom-display'
  },
  {
    id: 'font-court-hand',
    name: 'Court Hand',
    description: 'Artistic handwritten font used by royal scribes',
    category: 'font',
    type: 'static',
    rarity: 'rare',
    cost: 8,
    placement: 'profile',
    cssClass: 'font-court-hand'
  },
  {
    id: 'font-sovereign-gothic',
    name: 'Sovereign Gothic',
    description: 'Medieval gothic font with royal flourishes',
    category: 'font',
    type: 'static',
    rarity: 'epic',
    cost: 15,
    placement: 'profile',
    cssClass: 'font-sovereign-gothic'
  },
  
  // Titles (Displayed above username)
  {
    id: 'title-royal-patron',
    name: 'Royal Patron',
    description: 'A title bestowed upon generous contributors to the kingdom',
    category: 'title',
    type: 'static',
    rarity: 'rare',
    cost: 20,
    placement: 'profile'
  },
  {
    id: 'title-noble-benefactor',
    name: 'Noble Benefactor',
    description: 'A title for those who support the realm financially',
    category: 'title',
    type: 'static',
    rarity: 'uncommon',
    cost: 10,
    placement: 'profile'
  },
  {
    id: 'title-court-jester',
    name: 'Court Jester',
    description: 'A humorous title for those who bring levity to the court',
    category: 'title',
    type: 'static',
    rarity: 'common',
    cost: 5,
    placement: 'profile'
  },
  {
    id: 'title-royal-guardian',
    name: 'Royal Guardian',
    description: 'A title for those who protect the realm',
    category: 'title',
    type: 'static',
    rarity: 'epic',
    cost: 30,
    placement: 'profile'
  },
  {
    id: 'title-sovereign-ruler',
    name: 'Sovereign Ruler',
    description: 'The highest title in the land, reserved for true royalty',
    category: 'title',
    type: 'static',
    rarity: 'legendary',
    cost: 50,
    placement: 'profile'
  },
  
  // Effects (Special visual effects)
  {
    id: 'effect-golden-aura',
    name: 'Golden Aura',
    description: 'Surrounds your profile elements with a golden aura',
    category: 'effect',
    type: 'glow',
    rarity: 'rare',
    cost: 15,
    placement: 'profile',
    cssClass: 'golden-aura-effect'
  },
  {
    id: 'effect-royal-sparkles',
    name: 'Royal Sparkles',
    description: 'Adds sparkling effects to your profile',
    category: 'effect',
    type: 'particle',
    rarity: 'epic',
    cost: 25,
    placement: 'profile',
    cssClass: 'royal-sparkles-effect'
  },
  {
    id: 'effect-crown-pulse',
    name: 'Crown Pulse',
    description: 'Adds a pulsing crown effect to your profile',
    category: 'effect',
    type: 'pulse',
    rarity: 'rare',
    cost: 20,
    placement: 'profile',
    cssClass: 'crown-pulse-effect'
  },
  {
    id: 'effect-gem-shimmer',
    name: 'Gem Shimmer',
    description: 'Adds shimmering gem effects to your profile elements',
    category: 'effect',
    type: 'shimmer',
    rarity: 'epic',
    cost: 30,
    placement: 'profile',
    cssClass: 'gem-shimmer-effect'
  },
  {
    id: 'effect-royal-presence',
    name: 'Royal Presence',
    description: 'A majestic effect that commands attention',
    category: 'effect',
    type: 'custom',
    rarity: 'legendary',
    cost: 50,
    placement: 'profile',
    cssClass: 'royal-presence-effect'
  }
];

export default cosmeticsData;
