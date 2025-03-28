
// Stripe price IDs - replace with actual IDs from your Stripe account
export const PRICE_IDS = {
  PRO_MONTHLY: 'price_monthly',    // Replace with actual Stripe price_id
  PRO_QUARTERLY: 'price_quarterly', // Replace with actual Stripe price_id
  PRO_YEARLY: 'price_yearly',      // Replace with actual Stripe price_id
  BOOST_BASIC: 'price_boost_basic',  // Replace with actual Stripe price_id
  BOOST_PREMIUM: 'price_boost_premium', // Replace with actual Stripe price_id
};

// Map products to features they unlock
export const PRODUCT_FEATURES = {
  'pro_subscription': [
    'premium_profile',
    'analytics',
    'profile_boost',
    'custom_themes'
  ],
  'royal_pass': [
    'premium_profile',
    'analytics',
    'profile_boost',
    'custom_themes',
    'royal_benefits',
    'all_cosmetics'
  ]
};

// Feature naming and descriptions
export const FEATURE_METADATA = {
  premium_profile: {
    name: 'Premium Profile',
    description: 'Access to all profile customization options including RGB borders, multiple images, and extended text'
  },
  wishing_well: {
    name: 'Wishing Well',
    description: 'Make wishes for a chance to receive exclusive cosmetic items'
  },
  analytics: {
    name: 'Advanced Analytics',
    description: 'In-depth statistics about your profile performance and visitor engagement'
  },
  profile_boost: {
    name: 'Profile Boost',
    description: 'Enhance your profile visibility and engagement with special visual effects'
  },
  custom_themes: {
    name: 'Custom Themes',
    description: 'Select from exclusive profile themes or create your own'
  },
  royal_benefits: {
    name: 'Royal Benefits',
    description: 'Exclusive perks and privileges reserved for loyal members'
  },
  all_cosmetics: {
    name: 'All Cosmetics',
    description: 'Complete access to all available cosmetic items without additional purchases'
  }
};
