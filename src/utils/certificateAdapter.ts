
import { Certificate, CertificateType, CertificateStyle, CertificateTeam, CertificateStatus } from '@/types/certificates';

export function ensureCertificateStatus(status: string): CertificateStatus {
  switch (status) {
    case 'issued': return 'issued';
    case 'revoked': return 'revoked';
    case 'minted': return 'minted';
    case 'pending': return 'pending';
    case 'draft': return 'draft';
    case 'expired': return 'expired';
    default: return 'issued';
  }
}

export function createCertificate(
  id: string,
  title: string,
  description: string,
  imageUrl: string,
  type: CertificateType,
  style: CertificateStyle,
  team: CertificateTeam,
  userId: string,
  username: string,
  status: CertificateStatus = 'issued'
): Certificate {
  return {
    id,
    title,
    description,
    imageUrl,
    type,
    style,
    team,
    userId,
    username,
    issuedAt: new Date().toISOString(),
    isMinted: false,
    previewUrl: imageUrl,
    status,
    name: title
  };
}

// Certificate adapters for different certificate types
export function createRoyalCertificate(userId: string, username: string, rank: number): Certificate {
  return {
    id: `cert-royal-${userId}-${Date.now()}`,
    title: `Royal Certificate of Rank #${rank}`,
    description: `This certifies that ${username} has achieved the royal rank of #${rank}.`,
    imageUrl: '/assets/certificates/royal.png',
    type: 'royal',
    style: 'ornate',
    team: 'gold',
    userId,
    username,
    issuedAt: new Date().toISOString(),
    isMinted: false,
    previewUrl: '/assets/certificates/royal.png',
    status: 'issued',
    name: 'Royal Certificate'
  };
}

export function createAchievementCertificate(userId: string, username: string, achievementId: string, achievementName: string): Certificate {
  return {
    id: `cert-achievement-${userId}-${achievementId}`,
    title: `Achievement: ${achievementName}`,
    description: `This certifies that ${username} has unlocked the achievement: ${achievementName}.`,
    imageUrl: '/assets/certificates/achievement.png',
    type: 'achievement',
    style: 'classic',
    team: 'purple',
    userId,
    username,
    issuedAt: new Date().toISOString(),
    isMinted: false,
    previewUrl: '/assets/certificates/achievement.png',
    status: 'issued',
    name: achievementName,
    achievementId
  };
}

export function createFounderCertificate(userId: string, username: string): Certificate {
  return {
    id: `cert-founder-${userId}`,
    title: 'Founder Certificate',
    description: `This certifies that ${username} is an original founder of the platform.`,
    imageUrl: '/assets/certificates/founder.png',
    type: 'founder',
    style: 'ornate',
    team: 'gold',
    userId,
    username,
    issuedAt: new Date().toISOString(),
    isMinted: false,
    previewUrl: '/assets/certificates/founder.png',
    status: 'issued',
    name: 'Founder Certificate'
  };
}

export function createSupporterCertificate(userId: string, username: string, amount: number): Certificate {
  return {
    id: `cert-supporter-${userId}-${Date.now()}`,
    title: 'Royal Supporter',
    description: `This certifies that ${username} has contributed $${amount} to the platform.`,
    imageUrl: '/assets/certificates/supporter.png',
    type: 'supporter',
    style: 'standard',
    team: 'silver',
    userId,
    username,
    issuedAt: new Date().toISOString(),
    isMinted: false,
    previewUrl: '/assets/certificates/supporter.png',
    status: 'issued',
    name: 'Supporter Certificate'
  };
}
