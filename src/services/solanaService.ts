
import { OnChainLeaderboardEntry, SolanaTransaction, SolanaPaymentResult } from '@/types/solana-types';
import { toTeamColor } from '@/utils/typeConverters';

/**
 * Mock implementation of Solana blockchain interaction
 */

// Get on-chain leaderboard
export const getOnChainLeaderboard = async (): Promise<OnChainLeaderboardEntry[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // Return mock data
  return [
    {
      id: '1',
      publicKey: '8xft9LG8xLS1NbjAsiSP5jLqxe7a4rUHHKH9iQz3Jge2',
      username: 'cryptoking',
      rank: 1,
      amount: 10000,
      team: toTeamColor('red'),
      timestamp: Date.now() - 86400000 // 1 day ago
    },
    {
      id: '2',
      publicKey: 'DZBnJLYiKywJbzU9eFXtMsMLLgRBeNwderJSRUgCStPf',
      username: 'solwhale',
      rank: 2,
      amount: 8500,
      team: toTeamColor('blue'),
      timestamp: Date.now() - 172800000 // 2 days ago
    },
    {
      id: '3',
      publicKey: 'GfcFURr8jH15JavaDKY2D57YGpcW6vpyfG9xMA1nSr3S',
      username: 'moonboy',
      rank: 3,
      amount: 5200,
      team: toTeamColor('green'),
      timestamp: Date.now() - 259200000 // 3 days ago
    }
  ];
};

// Get recent transactions
export const getRecentTransactions = async (limit: number = 10): Promise<SolanaTransaction[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 600));
  
  // Return mock data
  return [
    {
      id: 'tx1',
      fromAddress: '8xft9LG8xLS1NbjAsiSP5jLqxe7a4rUHHKH9iQz3Jge2',
      toAddress: 'RoyalCourtTreasuryXXXXXXXXXXXXXXXXXXXXXXX',
      amount: 1000,
      symbol: 'SOL',
      timestamp: new Date(Date.now() - 3600000).toISOString(), // 1 hour ago
      blockNumber: 123456789,
      transactionHash: '4PGR8jZfnN4eX27FRhxpqsKdYCTBXq6dhgNxiBHiLWiD6zQV2i6mSRYcUvRcsSAL'
    },
    {
      id: 'tx2',
      fromAddress: 'DZBnJLYiKywJbzU9eFXtMsMLLgRBeNwderJSRUgCStPf',
      toAddress: 'RoyalCourtTreasuryXXXXXXXXXXXXXXXXXXXXXXX',
      amount: 500,
      symbol: 'SOL',
      timestamp: new Date(Date.now() - 7200000).toISOString(), // 2 hours ago
      blockNumber: 123456788,
      transactionHash: '2PkKwx4gvKe6PRpkKdJGxKHxUjgDGDG4QrxNiX2FmKpBBZLrHMdXRWDT9jbQvZAn'
    }
  ].slice(0, limit);
};

// Send payment
export const sendPayment = async (
  amount: number,
  destination: string
): Promise<SolanaPaymentResult> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  if (amount <= 0) {
    return {
      success: false,
      message: 'Amount must be greater than 0'
    };
  }
  
  // Mock successful payment
  return {
    success: true,
    signature: '4PGR8jZfnN4eX27FRhxpqsKdYCTBXq6dhgNxiBHiLWiD6zQV2i6mSRYcUvRcsSAL',
    message: `Successfully sent ${amount} SOL to ${destination}`,
    status: 'confirmed'
  };
};

export default {
  getOnChainLeaderboard,
  getRecentTransactions,
  sendPayment
};
