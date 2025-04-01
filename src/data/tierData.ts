
/**
 * Get marketing benefits based on user tier
 * @param tier User subscription tier
 * @returns Array of marketing benefits
 */
export function getMarketingBenefitsByTier(tier: string | undefined): string[] {
  const defaultBenefits = [
    'Basic profile visibility in the kingdom',
    'Standard mockery targeting options',
    'Ability to share your profile link'
  ];
  
  if (!tier || tier === 'basic') {
    return defaultBenefits;
  }
  
  const tierBenefits: Record<string, string[]> = {
    'bronze': [
      ...defaultBenefits,
      'Bronze profile enhancement',
      'Increased visibility on the leaderboard',
      '10% discount on mockery actions'
    ],
    'silver': [
      ...defaultBenefits,
      'Silver profile enhancement',
      'Featured on curated royal profiles section',
      '20% discount on mockery actions',
      'Profile visitor analytics'
    ],
    'gold': [
      ...defaultBenefits,
      'Gold profile enhancement and animation',
      'Regular feature on kingdom homepage',
      '30% discount on all mockery actions',
      'Detailed profile analytics',
      'Special profile badges and titles'
    ],
    'premium': [
      ...defaultBenefits,
      'Premium profile enhancement and animations',
      'Regular feature on kingdom homepage',
      '40% discount on all mockery actions',
      'Comprehensive profile analytics',
      'Custom profile badges and titles',
      'Priority exposure in team activities'
    ],
    'royal': [
      ...defaultBenefits,
      'Royal profile enhancement with dynamic animations',
      'Permanent feature on kingdom homepage',
      '50% discount on all royal actions',
      'Real-time profile analytics and dashboards',
      'Exclusive royal badges and customizable titles',
      'Top exposure in all kingdom activities',
      'Personal royal herald announcements'
    ]
  };
  
  return tierBenefits[tier.toLowerCase()] || defaultBenefits;
}

/**
 * Get mockery benefits based on user tier
 * @param tier User subscription tier
 * @returns Array of mockery benefits
 */
export function getMockeryBenefitsByTier(tier: string | undefined): string[] {
  const defaultBenefits = [
    'Basic mockery actions',
    'Standard mockery effect duration',
    'Regular mockery cooldown periods'
  ];
  
  if (!tier || tier === 'basic') {
    return defaultBenefits;
  }
  
  const tierBenefits: Record<string, string[]> = {
    'bronze': [
      ...defaultBenefits,
      'Bronze mockery visuals',
      '10% reduced cooldown periods',
      'Access to bronze-tier mockery actions'
    ],
    'silver': [
      ...defaultBenefits,
      'Silver mockery visuals',
      '20% reduced cooldown periods',
      'Access to silver-tier mockery actions',
      'Increased mockery effect duration'
    ],
    'gold': [
      ...defaultBenefits,
      'Gold mockery visuals with animations',
      '30% reduced cooldown periods',
      'Access to gold-tier mockery actions',
      'Significantly increased effect duration',
      'Ability to chain mockery effects'
    ],
    'premium': [
      ...defaultBenefits,
      'Premium mockery visuals with custom animations',
      '40% reduced cooldown periods',
      'Access to premium mockery actions',
      'Extended mockery effect duration',
      'Ability to chain multiple mockery effects',
      'Mockery immunity for limited periods'
    ],
    'royal': [
      ...defaultBenefits,
      'Royal mockery visuals with exclusive animations',
      '50% reduced cooldown periods',
      'Access to all mockery actions including royal exclusives',
      'Maximum mockery effect duration',
      'Unlimited mockery chaining capability',
      'Extended mockery immunity periods',
      'Ability to create custom mockery events'
    ]
  };
  
  return tierBenefits[tier.toLowerCase()] || defaultBenefits;
}

export default {
  getMarketingBenefitsByTier,
  getMockeryBenefitsByTier
};
