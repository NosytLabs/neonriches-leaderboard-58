
import { UserProfile } from '@/types/user';
import { RankCertificateMetadata } from '@/types/certificates';

/**
 * Generates metadata for a certificate NFT
 */
export const generateCertificateMetadata = (user: UserProfile): RankCertificateMetadata => {
  return {
    rank: user.rank || 0,
    amountSpent: user.amountSpent || user.totalSpent || 0,
    username: user.username,
    displayName: user.displayName,
    createdAt: new Date().toISOString(),
    teamId: user.team
  };
};

/**
 * Get current sol price in USD (mock)
 */
export const getSolPriceUSD = async (): Promise<number> => {
  // Mock implementation
  return 120.50;
};

/**
 * Convert USD to SOL amount
 */
export const convertUSDToSOL = (usdAmount: number, solPrice: number): number => {
  if (!solPrice || solPrice <= 0) return 0;
  return parseFloat((usdAmount / solPrice).toFixed(6));
};

/**
 * Convert SOL to USD amount
 */
export const convertSOLToUSD = (solAmount: number, solPrice: number): number => {
  return parseFloat((solAmount * solPrice).toFixed(2));
};

export default {
  generateCertificateMetadata,
  getSolPriceUSD,
  convertUSDToSOL,
  convertSOLToUSD
};
