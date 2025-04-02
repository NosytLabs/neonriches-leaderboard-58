
import { CertificateType, CertificateTemplate, CertificateTeam, CertificateStyle } from '@/types/certificate';

export const createNobilityCertificate = (options: Partial<CertificateTemplate> = {}): CertificateTemplate => {
  return {
    id: options.id || 'nobility-certificate',
    name: options.name || 'Certificate of Nobility',
    type: 'nobility',
    style: 'royal',
    team: 'gold',
    previewUrl: options.previewUrl || '/certificates/nobility-preview.png',
    imageUrl: options.imageUrl || '/certificates/nobility.png',
    description: options.description || 'Certifies your nobility status in the royal court.',
    availableForTier: options.availableForTier || ['premium', 'royal'],
    available: options.available !== undefined ? options.available : true,
    ...options
  };
};

export const createSpendingCertificate = (options: Partial<CertificateTemplate> = {}): CertificateTemplate => {
  return {
    id: options.id || 'spending-certificate',
    name: options.name || 'Certificate of Royal Spending',
    type: 'spending',
    style: 'premium',
    team: 'red',
    previewUrl: options.previewUrl || '/certificates/spending-preview.png',
    imageUrl: options.imageUrl || '/certificates/spending.png',
    description: options.description || 'Certifies your exceptional spending on the platform.',
    availableForTier: options.availableForTier || ['basic', 'premium', 'royal'],
    requiresFounder: options.requiresFounder || false,
    available: options.available !== undefined ? options.available : true,
    ...options
  };
};

export const createMembershipCertificate = (options: Partial<CertificateTemplate> = {}): CertificateTemplate => {
  return {
    id: options.id || 'membership-certificate',
    name: options.name || 'Certificate of Royal Membership',
    type: 'membership',
    style: 'standard',
    team: 'blue',
    previewUrl: options.previewUrl || '/certificates/membership-preview.png',
    imageUrl: options.imageUrl || '/certificates/membership.png',
    description: options.description || 'Certifies your membership in the royal society.',
    availableForTier: options.availableForTier || ['premium', 'royal'],
    available: options.available !== undefined ? options.available : true,
    ...options
  };
};

export const createAchievementCertificate = (options: Partial<CertificateTemplate> = {}): CertificateTemplate => {
  return {
    id: options.id || 'achievement-certificate',
    name: options.name || 'Certificate of Royal Achievement',
    type: 'achievement',
    style: 'legendary',
    team: 'gold',
    previewUrl: options.previewUrl || '/certificates/achievement-preview.png',
    imageUrl: options.imageUrl || '/certificates/achievement.png',
    description: options.description || 'Certifies your remarkable achievements in the kingdom.',
    availableForTier: options.availableForTier || ['royal'],
    available: options.available !== undefined ? options.available : true,
    ...options
  };
};

export function createCertificateTemplateFromConfig(
  config: Partial<CertificateTemplate>
): CertificateTemplate {
  const template: CertificateTemplate = {
    id: config.id || `template-${Date.now()}`,
    name: config.name || 'Untitled Certificate',
    type: config.type || 'achievement',
    style: config.style || 'standard',
    team: config.team || 'neutral',
    previewUrl: config.previewUrl || '/certificates/default-preview.png',
    imageUrl: config.imageUrl || '/certificates/default.png',
    description: config.description || 'A royal certificate.',
    availableForTier: config.availableForTier || 'basic',
    available: config.available !== undefined ? config.available : true
  };
  
  return template;
}

export function createRankCertificate(rank: number): CertificateTemplate {
  return {
    id: `rank-${rank}-certificate`,
    name: `Rank ${rank} Achievement Certificate`,
    type: "rank",
    style: "classic",
    team: "neutral",
    previewUrl: `/certificates/rank-${rank}-preview.png`,
    imageUrl: `/certificates/rank-${rank}.png`,
    description: `Certifies that you've achieved rank ${rank} on the leaderboard.`,
    availableForTier: ['basic', 'premium', 'royal'],
    available: true
  };
}

export function createTopTenCertificate(): CertificateTemplate {
  return {
    id: 'top-ten-certificate',
    name: 'Top 10 Spender Certificate',
    type: "rank",
    style: "classic",
    team: "neutral",
    previewUrl: '/certificates/top-ten-preview.png',
    imageUrl: '/certificates/top-ten.png',
    description: 'Certifies that you\'ve reached the top 10 spenders on the platform.',
    availableForTier: ['premium', 'royal'],
    available: true
  };
}

export function createTopSpenderCertificate(): CertificateTemplate {
  return {
    id: 'top-spender-certificate',
    name: 'Top Spender Certificate',
    type: "rank",
    style: "classic",
    team: "neutral",
    previewUrl: '/certificates/top-spender-preview.png',
    imageUrl: '/certificates/top-spender.png',
    description: 'Certifies that you are the top spender on the platform.',
    availableForTier: ['royal'],
    available: true
  };
}
