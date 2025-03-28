
// Update the subscription tier from "pro" to "premium"
export const subscriptionTiers = [
  {
    id: "basic",
    name: "Basic Nobility",
    description: "Entry level access to the royal court",
    price: 5,
    features: [
      "Basic profile customization",
      "Royal court access",
      "Team affiliation",
      "Public certificate"
    ],
    recommended: false
  },
  {
    id: "premium", // Changed from "pro" to "premium" to match UserSubscription type
    name: "Premium Nobility",
    description: "Enhanced presence in the royal court",
    price: 15,
    features: [
      "Advanced profile customization",
      "Enhanced profile visibility",
      "Exclusive borders and badges",
      "Profile boost (3-day)",
      "Mockery protection (50% discount)"
    ],
    recommended: true
  },
  {
    id: "royal",
    name: "Royal Aristocracy",
    description: "Premium presence with maximum benefits",
    price: 30,
    features: [
      "Maximum profile customization",
      "Permanent profile boost",
      "Exclusive royal cosmetics",
      "Royal background effects",
      "Team leadership eligibility",
      "Free mockery protection",
      "NFT certificate minting"
    ],
    recommended: false
  }
];
