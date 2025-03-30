
import { OnChainLeaderboardEntry, SolanaTransaction } from '@/types/leaderboard';

export interface RankCertificateMetadata {
  owner: string;
  tier: string;
  timestamp: number;
  spentAmount: number;
}

// Mock Solana service implementation
export const mintRankCertificate = async (user: any, metadata: Partial<RankCertificateMetadata>) => {
  // Mock implementation for certificate minting
  return {
    success: true,
    mintAddress: 'SoL1234567890AbCdEfGhIjKlMnOpQrStUvWxYz',
    rank: metadata.spentAmount ? Math.ceil(metadata.spentAmount / 1000) : 1,
    tier: metadata.tier || 'silver'
  };
};

export const createCertificateNFT = async (user: any, certificateData: any) => {
  // Mock implementation for NFT creation
  return {
    success: true,
    txId: 'SoLTx1234567890AbCdEfGhIjKlMnOpQrStUvWxYz',
    mintAddress: 'SoL1234567890AbCdEfGhIjKlMnOpQrStUvWxYz'
  };
};

export const getOnChainLeaderboard = async (): Promise<OnChainLeaderboardEntry[]> => {
  // Mock data for on-chain leaderboard
  return [
    {
      pubkey: 'SoL1111111111111111111111111111111111111111',
      userId: '1',
      amount: 25000,
      timestamp: Date.now() - 86400000 * 30,
      username: 'whale_master',
      publicKey: 'SoL1111111111111111111111111111111111111111',
      amountSpent: 25000,
      totalDeposited: 30000,
      rank: 1,
      joinDate: Date.now() - 86400000 * 90
    },
    {
      pubkey: 'SoL2222222222222222222222222222222222222222',
      userId: '2',
      amount: 20000,
      timestamp: Date.now() - 86400000 * 25,
      username: 'crypto_king',
      publicKey: 'SoL2222222222222222222222222222222222222222',
      amountSpent: 20000,
      totalDeposited: 25000,
      rank: 2,
      joinDate: Date.now() - 86400000 * 100
    },
    {
      pubkey: 'SoL3333333333333333333333333333333333333333',
      userId: '3',
      amount: 15000,
      timestamp: Date.now() - 86400000 * 20,
      username: 'nft_collector',
      publicKey: 'SoL3333333333333333333333333333333333333333',
      amountSpent: 15000,
      totalDeposited: 18000,
      rank: 3,
      joinDate: Date.now() - 86400000 * 110
    }
  ];
};

export default {
  mintRankCertificate,
  createCertificateNFT,
  getOnChainLeaderboard
};
