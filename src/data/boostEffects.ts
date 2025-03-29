
import { BoostEffect } from "@/types/boostEffects";

// Export profile boost effects
const profileBoostEffects: BoostEffect[] = [
  {
    id: "royal-sparkle",
    name: "Royal Sparkle",
    description: "Add a majestic sparkle effect to your profile that showcases your noble status.",
    price: 25,
    tier: "premium",
    type: "effect",
    durationDays: 7,
    previewImage: "/throne-assets/boosts/royal-sparkle.jpg"
  },
  {
    id: "golden-aura",
    name: "Golden Aura",
    description: "Surround your profile with a golden aura that makes you stand out in the crowd.",
    price: 50,
    tier: "royal",
    type: "effect",
    durationDays: 14,
    previewImage: "/throne-assets/boosts/golden-aura.jpg"
  },
  {
    id: "crown-glow",
    name: "Crown Glow",
    description: "Add a glowing crown effect to your profile image that pulses with royal energy.",
    price: 35,
    tier: "premium",
    type: "appearance",
    durationDays: 10,
    previewImage: "/throne-assets/boosts/crown-glow.jpg"
  },
  {
    id: "royal-banner",
    name: "Royal Banner",
    description: "Display a customized royal banner on your profile that announces your status.",
    price: 20,
    tier: "basic",
    type: "appearance",
    durationDays: 7,
    previewImage: "/throne-assets/boosts/royal-banner.jpg"
  },
  {
    id: "leaderboard-highlight",
    name: "Leaderboard Highlight",
    description: "Make your name stand out on the leaderboard with a special highlight effect.",
    price: 30,
    tier: "premium",
    type: "visibility",
    durationDays: 7,
    previewImage: "/throne-assets/boosts/leaderboard-highlight.jpg"
  }
];

export default profileBoostEffects;
