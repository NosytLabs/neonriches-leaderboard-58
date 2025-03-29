
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
      "Public certificate of conspicuous consumption"
    ],
    recommended: false
  },
  {
    id: "premium",
    name: "Status Influencer",
    description: "Enhanced digital presence with marketing perks",
    price: 15,
    features: [
      "Advanced profile customization",
      "Enhanced profile visibility (RGB borders, premium styling)",
      "RGB borders and animations in leaderboard",
      "Profile boost (3-day)",
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
    description: "Maximum status with premium marketing features",
    price: 30,
    features: [
      "Maximum profile customization",
      "Royal styling on leaderboard (gold borders, crown icons, animations)",
      "Permanent profile boost",
      "Exclusive animated effects",
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
