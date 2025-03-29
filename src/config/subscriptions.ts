
// Stripe price IDs - replace with actual IDs from your Stripe account
export const PRICE_IDS = {
  STANDARD_MONTHLY: 'price_standard_monthly',
  PREMIUM_MONTHLY: 'price_premium_monthly',
  ROYAL_MONTHLY: 'price_royal_monthly',
  STANDARD_YEARLY: 'price_standard_yearly',
  PREMIUM_YEARLY: 'price_premium_yearly',
  ROYAL_YEARLY: 'price_royal_yearly',
  BOOST_BASIC: 'price_boost_basic',
  BOOST_PREMIUM: 'price_boost_premium',
};

// Map products to features they unlock
export const PRODUCT_FEATURES = {
  'standard': [
    'basic_profile',
    'leaderboard_presence',
    'team_affiliation',
    'profile_boost_eligible'
  ],
  'premium': [
    'basic_profile',
    'leaderboard_presence',
    'team_affiliation',
    'profile_boost_eligible',
    'premium_profile',
    'multiple_images',
    'multiple_links',
    'rgb_borders',
    'video_embeds',
    'analytics_basic',
    'discount_boosts'
  ],
  'royal': [
    'basic_profile',
    'leaderboard_presence',
    'team_affiliation',
    'profile_boost_eligible',
    'premium_profile',
    'multiple_images',
    'multiple_links',
    'rgb_borders',
    'video_embeds',
    'analytics_basic',
    'discount_boosts',
    'royal_styling',
    'permanent_boost',
    'exclusive_effects',
    'mockery_immunity',
    'analytics_advanced',
    'team_leadership'
  ]
};

// Feature naming and descriptions
export const FEATURE_METADATA = {
  basic_profile: {
    name: 'Basic Profile',
    description: 'Create your profile with basic customization options'
  },
  leaderboard_presence: {
    name: 'Leaderboard Presence',
    description: 'Your rank is displayed on the global leaderboard'
  },
  team_affiliation: {
    name: 'Team Affiliation',
    description: 'Join a team and contribute to team rankings'
  },
  profile_boost_eligible: {
    name: 'Profile Boost Eligible',
    description: 'Ability to purchase profile visibility boosts'
  },
  premium_profile: {
    name: 'Premium Profile',
    description: 'Enhanced profile customization with RGB borders and animations'
  },
  multiple_images: {
    name: 'Multiple Images',
    description: 'Add up to 5 images to your profile'
  },
  multiple_links: {
    name: 'Multiple Links',
    description: 'Add up to 5 links to your profile'
  },
  rgb_borders: {
    name: 'RGB Borders & Animations',
    description: 'Customize your profile with animated RGB borders'
  },
  video_embeds: {
    name: 'Video Embeds',
    description: 'Embed YouTube or Vimeo videos in your profile'
  },
  analytics_basic: {
    name: 'Basic Analytics',
    description: 'Track profile views and link clicks'
  },
  discount_boosts: {
    name: 'Discounted Boosts',
    description: '50% discount on all profile boost purchases'
  },
  royal_styling: {
    name: 'Royal Styling',
    description: 'Gold borders, crown icons, and exclusive animations'
  },
  permanent_boost: {
    name: 'Permanent Boost Effect',
    description: 'Your profile always appears with boost effects'
  },
  exclusive_effects: {
    name: 'Exclusive Visual Effects',
    description: 'Access to royal-tier visual enhancements'
  },
  mockery_immunity: {
    name: 'Mockery Immunity',
    description: 'Complete protection from mockery features'
  },
  analytics_advanced: {
    name: 'Advanced Analytics',
    description: 'Detailed visitor demographics and conversion tracking'
  },
  team_leadership: {
    name: 'Team Leadership Eligibility',
    description: 'Ability to create and lead teams'
  }
};

// Subscription tiers with standardized naming and features
export const SUBSCRIPTION_TIERS = [
  {
    id: "standard",
    name: "Standard",
    description: "Entry level access to digital status",
    priceMonthly: 5,
    priceYearly: 50,
    features: [
      "Basic profile customization",
      "Leaderboard presence with standard display",
      "Team affiliation",
      "Ability to purchase profile boosts",
      "Public certificate of conspicuous consumption"
    ],
    recommended: false,
    priceId: PRICE_IDS.STANDARD_MONTHLY,
    yearlyPriceId: PRICE_IDS.STANDARD_YEARLY
  },
  {
    id: "premium",
    name: "Premium",
    description: "Enhanced digital presence with visual perks",
    priceMonthly: 15,
    priceYearly: 150,
    features: [
      "Advanced profile customization",
      "RGB borders and animations in leaderboard",
      "Up to 5 images and links on profile",
      "50% discount on all Profile Boosts",
      "Profile boost (3-day) included monthly",
      "Basic analytics dashboard",
      "Note: Does not affect leaderboard rank (rank only increases with deposits)"
    ],
    recommended: true,
    priceId: PRICE_IDS.PREMIUM_MONTHLY,
    yearlyPriceId: PRICE_IDS.PREMIUM_YEARLY
  },
  {
    id: "royal",
    name: "Royal",
    description: "Maximum status with exclusive visual features",
    priceMonthly: 30,
    priceYearly: 300,
    features: [
      "Maximum profile customization",
      "Royal styling on leaderboard (gold borders, crown icons, animations)",
      "Permanent profile boost effect",
      "Exclusive animated effects and visual enhancements",
      "75% discount on all Profile Boosts",
      "Complete mockery immunity",
      "Comprehensive analytics dashboard",
      "Team leadership eligibility",
      "Note: Does not affect leaderboard rank (rank only increases with deposits)"
    ],
    recommended: false,
    priceId: PRICE_IDS.ROYAL_MONTHLY,
    yearlyPriceId: PRICE_IDS.ROYAL_YEARLY
  }
];
