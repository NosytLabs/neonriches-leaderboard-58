
// Update the subscription tier from "pro" to "premium"
export const subscriptionTiers = [
  {
    id: "basic",
    name: "Basic Status Seeker",
    description: "Entry level access to digital status",
    price: 5,
    features: [
      "Basic profile customization",
      "Leaderboard presence with standard display",
      "Team affiliation",
      "Ability to purchase profile boosts",
      "Public certificate of conspicuous consumption"
    ],
    recommended: false
  },
  {
    id: "premium",
    name: "Status Influencer",
    description: "Enhanced digital presence with visual perks",
    price: 15,
    features: [
      "Advanced profile customization",
      "Enhanced profile visibility",
      "RGB borders and animations in leaderboard",
      "50% discount on all Profile Boosts",
      "Access to Premium Boost effects",
      "Profile boost (3-day) included monthly",
      "Mockery protection (50% discount)",
      "Basic marketing analytics",
      "Profile visitor metrics",
      "Note: Does not affect leaderboard rank (rank only increases with deposits)"
    ],
    recommended: true
  },
  {
    id: "royal",
    name: "Digital Royalty",
    description: "Maximum status with exclusive visual features",
    price: 30,
    features: [
      "Maximum profile customization",
      "Royal styling on leaderboard (gold borders, crown icons, animations)",
      "Permanent profile boost effect",
      "Exclusive animated effects and visual enhancements",
      "75% discount on all Profile Boosts",
      "Access to Royal-tier Profile Boosts",
      "Premium billboard space",
      "Team leadership eligibility",
      "Complete mockery immunity",
      "NFT certificate minting",
      "Priority placements across site",
      "Comprehensive marketing dashboard",
      "Visitor demographics and conversion tracking",
      "Note: Does not affect leaderboard rank (rank only increases with deposits)"
    ],
    recommended: false
  }
];
