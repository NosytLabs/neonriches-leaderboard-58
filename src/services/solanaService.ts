
import { UserProfile } from '@/types/user';
import { LeaderboardUser, OnChainLeaderboardEntry, SolanaTransaction } from '@/types/leaderboard';
import { Certificate } from '@/types/certificate';

export interface SolanaConnectionStatus {
  connected: boolean;
  publicKey: string | null;
  balance: number;
}

export interface SolanaTransactionResult {
  success: boolean;
  transactionId?: string;
  error?: string;
}

export interface RankCertificateMetadata {
  name: string;
  description: string;
  image: string;
  attributes: {
    rank: number;
    tier: string;
    dateIssued: string;
    amountSpent: number;
    team?: string;
  }
}

// Added function to fix RoyalCertificate.tsx error
export const generateCertificateMetadata = (user: UserProfile, templateId?: string): RankCertificateMetadata => {
  return {
    name: `${user.displayName || user.username}'s Certificate of Nobility`,
    description: `This certificate recognizes ${user.displayName || user.username}'s rank #${user.rank} on SpendThrone.`,
    image: "https://placeholder.com/certificate.png",
    attributes: {
      rank: user.rank,
      tier: user.tier,
      dateIssued: new Date().toISOString(),
      amountSpent: user.amountSpent,
      team: user.team
    }
  };
};

export const getOnChainLeaderboard = async (): Promise<OnChainLeaderboardEntry[]> => {
  // Mock implementation for now
  return [
    { 
      publicKey: 'abc123', 
      amount: 1000, 
      rank: 1,
      username: 'crypto_whale',
      timestamp: new Date().toISOString()
    },
    { 
      publicKey: 'def456', 
      amount: 500, 
      rank: 2,
      username: 'blockchain_king',
      timestamp: new Date().toISOString()
    },
    { 
      publicKey: 'ghi789', 
      amount: 250, 
      rank: 3,
      username: 'sol_master',
      timestamp: new Date().toISOString()
    }
  ];
};

export const getTransactionHistory = async (pubkey: string): Promise<SolanaTransaction[]> => {
  // Mock implementation for now
  return [
    { 
      id: '1',
      timestamp: new Date().getTime(),
      amount: 100,
      sender: pubkey,
      receiver: 'treasury_key',
      transactionHash: 'tx_hash_1',
      status: 'confirmed',
      type: 'deposit'
    },
    {
      id: '2',
      timestamp: new Date().getTime(),
      amount: 50,
      sender: pubkey,
      receiver: 'treasury_key',
      transactionHash: 'tx_hash_2',
      status: 'confirmed',
      type: 'spend'
    }
  ];
};

export const mintCertificateAsNFT = async (certificate: Certificate, user: UserProfile) => {
  // Mock implementation - this would call the actual Solana API in a real implementation
  await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network latency
  
  return {
    success: true,
    mintAddress: `cert_${Math.random().toString(36).substring(2, 10)}`
  };
};

export const generateShareableImage = async (certificate: Certificate, user: UserProfile) => {
  // Mock implementation
  return `https://example.com/certificates/${certificate.id}/share`;
};
