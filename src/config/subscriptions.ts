
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
  // Individual marketing feature price IDs
  MARKETING_BASIC_ANALYTICS: 'price_marketing_basic_analytics',
  MARKETING_ADVANCED_ANALYTICS: 'price_marketing_advanced_analytics',
  MARKETING_PROMOTION_TOOLS: 'price_marketing_promotion_tools',
  MARKETING_AUDIENCE_INSIGHTS: 'price_marketing_audience_insights',
};

// Map products to features they unlock
export const PRODUCT_FEATURES = {
  'free': [
    'basic_profile',
    'leaderboard_presence',
    'team_affiliation',
    'profile_boost_eligible',
    'basic_marketing'
  ],
  'standard': [
    'basic_profile',
    'leaderboard_presence',
    'team_affiliation',
    'profile_boost_eligible',
    'basic_marketing'
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
    'marketing_dashboard',
    'profile_promotion'
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
    'marketing_dashboard',
    'profile_promotion',
    'royal_styling',
    'permanent_boost',
    'exclusive_effects',
    'mockery_immunity',
    'analytics_advanced',
    'team_leadership',
    'priority_placement',
    'audience_demographics'
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
  },
  basic_marketing: {
    name: 'Basic Marketing Tools',
    description: 'Simple visibility analytics and profile sharing'
  },
  marketing_dashboard: {
    name: 'Marketing Dashboard',
    description: 'Comprehensive profile marketing analytics and tools'
  },
  profile_promotion: {
    name: 'Profile Promotion',
    description: 'Enhanced visibility across the platform'
  },
  priority_placement: {
    name: 'Priority Placement',
    description: 'Your profile appears in prominent positions across the site'
  },
  audience_demographics: {
    name: 'Audience Demographics',
    description: 'Detailed data about who views your profile'
  }
};

// Individual marketing features available for purchase
export const MARKETING_FEATURES = [
  {
    id: "basic_analytics",
    name: "Basic Analytics Package",
    description: "Track your profile views, clicks, and basic engagement metrics",
    price: 29.99,
    features: [
      "Track profile views",
      "Track link clicks",
      "Basic visitor metrics",
      "Weekly performance summary",
      "14-day data history"
    ],
    priceId: PRICE_IDS.MARKETING_BASIC_ANALYTICS,
    tier: "standard"
  },
  {
    id: "advanced_analytics",
    name: "Advanced Analytics Suite",
    description: "Comprehensive analytics with detailed visitor insights and trends",
    price: 49.99,
    features: [
      "All Basic Analytics features",
      "Visitor demographics",
      "Traffic source analysis",
      "Engagement trends",
      "30-day data history",
      "Daily performance reports"
    ],
    priceId: PRICE_IDS.MARKETING_ADVANCED_ANALYTICS,
    tier: "premium"
  },
  {
    id: "promotion_tools",
    name: "Promotion Toolkit",
    description: "Tools to enhance your profile visibility and reach more viewers",
    price: 59.99,
    features: [
      "Featured placement in discover section",
      "Profile highlight effects",
      "Enhanced search visibility",
      "Social sharing toolkit",
      "Automated promotion scheduling"
    ],
    priceId: PRICE_IDS.MARKETING_PROMOTION_TOOLS,
    tier: "premium"
  },
  {
    id: "audience_insights",
    name: "Royal Audience Insights",
    description: "Elite-tier visitor analysis and conversion optimization tools",
    price: 89.99,
    features: [
      "All Advanced Analytics features",
      "Visitor interest mapping",
      "Click heatmaps",
      "Engagement optimization suggestions", 
      "Conversion tracking",
      "Competitor analysis",
      "90-day data history"
    ],
    priceId: PRICE_IDS.MARKETING_AUDIENCE_INSIGHTS,
    tier: "royal"
  }
];

// Weekly marketing promotion events
export const MARKETING_EVENTS = [
  {
    id: "spotlight_sunday",
    name: "Spotlight Sunday",
    description: "Get featured in the Sunday Spotlight section for 24 hours",
    recurrence: "weekly",
    day: "Sunday",
    benefit: "Up to 3x more profile views",
    eligibility: "All users"
  },
  {
    id: "boost_tuesday",
    name: "Traffic Tuesday",
    description: "Double effectiveness of profile boosts purchased on Tuesdays",
    recurrence: "weekly",
    day: "Tuesday",
    benefit: "2x boost duration",
    eligibility: "All users"
  },
  {
    id: "featured_friday",
    name: "Featured Friday",
    description: "Chance to be featured on the homepage banner on Fridays",
    recurrence: "weekly",
    day: "Friday",
    benefit: "Homepage visibility",
    eligibility: "Standard tier and above"
  },
  {
    id: "monthly_showcase",
    name: "Monthly Showcase",
    description: "Top spenders of the month get a special showcase section",
    recurrence: "monthly",
    day: "Last day of month",
    benefit: "Dedicated showcase section for 3 days",
    eligibility: "Top 10 spenders of the month"
  }
];

// Subscription tiers with standardized naming and features
export const SUBSCRIPTION_TIERS = [
  {
    id: "free",
    name: "Free",
    description: "Basic access with limited features",
    priceMonthly: 0,
    priceYearly: 0,
    features: [
      "Basic profile customization",
      "Leaderboard presence with standard display",
      "Team affiliation",
      "Ability to purchase profile boosts",
      "Basic view counter",
      "Access to individual marketing features (sold separately)"
    ],
    recommended: false,
    priceId: "",
    yearlyPriceId: ""
  },
  {
    id: "standard",
    name: "Standard",
    description: "Enhanced presence with basic marketing tools",
    priceMonthly: 49.99,
    priceYearly: 499.99,
    features: [
      "All Free tier features",
      "Advanced profile customization",
      "Basic marketing dashboard",
      "Profile view tracking",
      "Public certificate of conspicuous consumption",
      "Weekly marketing event eligibility"
    ],
    recommended: false,
    priceId: PRICE_IDS.STANDARD_MONTHLY,
    yearlyPriceId: PRICE_IDS.STANDARD_YEARLY
  },
  {
    id: "premium",
    name: "Premium",
    description: "Enhanced digital presence with marketing tools",
    priceMonthly: 149.99,
    priceYearly: 1499.99,
    features: [
      "All Standard tier features",
      "RGB borders and animations in leaderboard",
      "Up to 5 images and links on profile",
      "Marketing analytics dashboard",
      "Click tracking on profile links",
      "Enhanced visibility in search results",
      "Profile boost (3-day) included monthly",
      "Conversion rate optimization tools",
      "Note: Does not affect leaderboard rank (rank only increases with deposits)"
    ],
    recommended: true,
    priceId: PRICE_IDS.PREMIUM_MONTHLY,
    yearlyPriceId: PRICE_IDS.PREMIUM_YEARLY
  },
  {
    id: "royal",
    name: "Royal",
    description: "Maximum status with exclusive marketing features",
    priceMonthly: 299.99,
    priceYearly: 2999.99,
    features: [
      "All Premium tier features",
      "Royal styling on leaderboard (gold borders, crown icons, animations)",
      "Permanent profile boost effect",
      "Exclusive animated effects and visual enhancements",
      "Priority placement across the platform",
      "Advanced audience demographics",
      "Complete mockery immunity",
      "Comprehensive marketing analytics",
      "Team leadership eligibility",
      "Note: Does not affect leaderboard rank (rank only increases with deposits)"
    ],
    recommended: false,
    priceId: PRICE_IDS.ROYAL_MONTHLY,
    yearlyPriceId: PRICE_IDS.ROYAL_YEARLY
  }
];
