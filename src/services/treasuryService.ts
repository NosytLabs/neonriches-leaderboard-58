
import { SolanaTreasuryInfo, SolanaTransaction, OnChainLeaderboardEntry } from '@/types/solana';

export const getTreasuryInfo = (): SolanaTreasuryInfo => {
  return {
    totalDeposited: 125000,
    totalWithdrawn: 25000,
    currentBalance: 100000,
    lastUpdated: new Date().toISOString(),
    balance: 100000,
    netBalance: 100000,
    transactions: 1250,
    signature: 'mock-signature'
  };
};

export const getRecentTransactions = (): SolanaTransaction[] => {
  const depositTransaction: SolanaTransaction = {
    id: 'tx_deposit_1',
    signature: '5VERLGg1P7ZwQPS1uRjZHcFrNDbxpN2Ak6YmSLZ9QhzjM2u5wZV7DMQ2A75ZxzpBpSiC5fhsXJUrHftcYvU5P7Gh',
    timestamp: new Date().toISOString(),
    type: 'deposit',
    amount: 1000,
    sender: 'user_wallet_123',
    receiver: 'treasury_wallet',
    recipient: 'treasury_wallet',
    status: 'confirmed'
  };
  
  const withdrawalTransaction: SolanaTransaction = {
    id: 'tx_withdrawal_1',
    signature: 'TY3YdxzWvh9YrGMfqbWQHMP2YRuEcVAMzXATKPeK6LAiVNKKJFT8mTYe9bpP2PbK9y5SKoMj1V1P1LJdJ5mKyts',
    timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    type: 'withdrawal',
    amount: 250,
    sender: 'treasury_wallet',
    receiver: 'user_wallet_456',
    recipient: 'user_wallet_456',
    status: 'confirmed'
  };
  
  return [depositTransaction, withdrawalTransaction];
};

export const getLeaderboardData = (): OnChainLeaderboardEntry[] => {
  return [
    {
      id: 'user1',
      address: 'GKot5hBsd81kMepLXh1XMuxiTwtCec6xxvKMRsWoz1wm',
      publicKey: 'GKot5hBsd81kMepLXh1XMuxiTwtCec6xxvKMRsWoz1wm',
      username: 'whale_king',
      spentAmount: 12500,
      amountSpent: 12500,
      totalSpent: 12500,
      rank: 1,
      previousRank: 1,
      timestamp: new Date().toISOString(),
      transaction: 'tx_12345',
      lastTransaction: 'tx_12345',
      userId: 'user1',
      totalDeposited: 15000,
      joinDate: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
      id: 'user2',
      address: 'H7ATJQkJqK5f6gQK88Hj5Uyw1Kga6eSwhkqsJi9K28Lr',
      publicKey: 'H7ATJQkJqK5f6gQK88Hj5Uyw1Kga6eSwhkqsJi9K28Lr',
      username: 'crypto_noble',
      spentAmount: 10000,
      amountSpent: 10000,
      totalSpent: 10000,
      rank: 2,
      previousRank: 3,
      timestamp: new Date().toISOString(),
      transaction: 'tx_23456',
      lastTransaction: 'tx_23456',
      userId: 'user2',
      totalDeposited: 12000,
      joinDate: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000).toISOString()
    }
  ];
};
