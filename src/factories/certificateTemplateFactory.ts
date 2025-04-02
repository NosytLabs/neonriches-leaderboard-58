
import { CertificateTemplate, CertificateType, CertificateStyle, CertificateTeam } from '@/types/certificate';

export const createAchievementTemplate = (): CertificateTemplate => {
  return {
    id: 'achievement-1',
    title: 'Achievement Certificate', // Add title (required)
    description: 'Certificate for achieving something remarkable',
    imageUrl: '/assets/certificates/achievement.png',
    type: 'achievement',
    style: 'gold',
    team: 'none',
    rarity: 'legendary',
    previewUrl: '/assets/certificates/achievement-preview.png',
    available: true,
    availableForTier: ['premium', 'royal']
  };
};

export const createFounderTemplate = (): CertificateTemplate => {
  return {
    id: 'founder-1',
    title: 'Founder Certificate', // Add title (required)
    description: 'Certificate for founding members of the platform',
    imageUrl: '/assets/certificates/founder.png',
    type: 'founder',
    style: 'royal',
    team: 'gold',
    rarity: 'legendary',
    previewUrl: '/assets/certificates/founder-preview.png',
    available: true,
    availableForTier: ['founder'],
    requiresFounder: true
  };
};

export const createRoyalTemplate = (): CertificateTemplate => {
  return {
    id: 'royal-1',
    title: 'Royal Certificate', // Add title (required)
    description: 'Certificate for users of royal tier',
    imageUrl: '/assets/certificates/royal.png',
    type: 'royal',
    style: 'royal',
    team: 'gold',
    rarity: 'epic',
    previewUrl: '/assets/certificates/royal-preview.png',
    available: true,
    availableForTier: ['royal', 'founder']
  };
};

export const createSpendingTemplate = (): CertificateTemplate => {
  return {
    id: 'spending-1',
    title: 'Big Spender Certificate', // Add title (required)
    description: 'Certificate for spending an absurd amount',
    imageUrl: '/assets/certificates/spending.png',
    type: 'spending',
    style: 'gold',
    team: 'none',
    rarity: 'rare',
    previewUrl: '/assets/certificates/spending-preview.png',
    available: true,
    availableForTier: ['basic', 'premium', 'royal', 'founder']
  };
};

// Helper function to ensure availableForTier is always an array
export const ensureAvailableForTierIsArray = (tiers: string | string[]): string[] => {
  if (Array.isArray(tiers)) {
    return tiers;
  }
  return [tiers];
};

export const getRankTemplate = (): CertificateTemplate => {
  return {
    id: 'rank-top-10',
    title: 'Top 10 Rank', // Add title (required)
    description: 'Certificate for reaching top 10 on the leaderboard',
    imageUrl: '/assets/certificates/rank-top-10.png',
    type: 'rank',
    style: 'classic',
    team: 'neutral',
    previewUrl: '/assets/certificates/rank-top-10-preview.png',
    availableForTier: ['basic', 'premium', 'royal', 'founder'],
    available: true
  };
};

export const getRankTop100Template = (): CertificateTemplate => {
  return {
    id: 'rank-top-100',
    title: 'Top 100 Rank', // Add title (required)
    description: 'Certificate for reaching top 100 on the leaderboard',
    imageUrl: '/assets/certificates/rank-top-100.png',
    type: 'rank',
    style: 'classic',
    team: 'neutral',
    previewUrl: '/assets/certificates/rank-top-100-preview.png',
    availableForTier: ['basic', 'premium', 'royal', 'founder'],
    available: true
  };
};

export const getRankTop500Template = (): CertificateTemplate => {
  return {
    id: 'rank-top-500',
    title: 'Top 500 Rank', // Add title (required)
    description: 'Certificate for reaching top 500 on the leaderboard',
    imageUrl: '/assets/certificates/rank-top-500.png',
    type: 'rank',
    style: 'classic',
    team: 'neutral',
    previewUrl: '/assets/certificates/rank-top-500-preview.png',
    availableForTier: ['basic', 'premium', 'royal', 'founder'],
    available: true
  };
};
