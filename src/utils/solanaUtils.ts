
import { PublicKey } from '@solana/web3.js';
import { OnChainLeaderboardEntry, SolanaTreasuryInfo, SolanaTransaction } from '@/types/solana';

// Generate a signature message for Solana login
export const generateSignatureMessage = (address: string, nonce: string): string => {
  return `Sign this message to authenticate with P2W.FUN: ${nonce}`;
};

// Check if a string is a valid Solana address
export const isValidSolanaAddress = (address: string): boolean => {
  try {
    new PublicKey(address);
    return true;
  } catch (error) {
    return false;
  }
};

// Format SOL amount for display
export const formatSolAmount = (lamports: number): string => {
  const sol = lamports / 1_000_000_000;
  return sol.toLocaleString(undefined, { 
    minimumFractionDigits: 2,
    maximumFractionDigits: 9 
  });
};

// Mock function for getting on-chain leaderboard data
export const getOnChainLeaderboard = async (): Promise<OnChainLeaderboardEntry[]> => {
  // Mock data for development
  return [
    {
      id: '1',
      username: 'SolanaWhale',
      rank: 1,
      totalSpent: 5000.0,
      previousRank: 2,
      signature: '5xGWfNFZ1XEw9CaLsEJVLLxWNPvPcxinGT1nK6ahLSe8AbitXkGJKDSc2gNB1gK4MwcZJvVqX5gB4DNT8PjRtqP9',
      amountSpent: 500.0,
      lastTransaction: new Date().toISOString(),
      isVerified: true,
      publicKey: 'HN7cABqLq46Es1jh92dQQpzJgV3EHS4PvgMsW9Nq3ZNJ'
    },
    {
      id: '2',
      username: 'CryptoRoyal',
      rank: 2,
      totalSpent: 4500.0,
      previousRank: 1,
      signature: '2vn9UnwmUVWGTcmm3gXU9jFjoK4D4oxFHN6pmgBgAsP1T6ebtYVzM5tmTyDqxgdLbvb5jTKnZzmVLPJbMN1mNvBF',
      amountSpent: 200.0,
      lastTransaction: new Date().toISOString(),
      isVerified: true,
      publicKey: '5JKqemx9KJW9qWNUsp9DqRPXRyUQj2K9T6rkTMGZMJr7'
    }
  ];
};

// Format date for Solana transactions
export const formatSolanaDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

// Convert treasury info to transaction format for display
export const treasuryInfoToTransaction = (info: SolanaTreasuryInfo): SolanaTransaction => {
  return {
    signature: info.pubkey || 'unknown',
    timestamp: info.lastUpdated,
    amount: info.amount || 0,
    type: 'deposit',
    sender: info.sender || 'unknown',
    recipient: info.address,
    status: 'confirmed'
  };
};

export default {
  generateSignatureMessage,
  isValidSolanaAddress,
  formatSolAmount,
  getOnChainLeaderboard,
  formatSolanaDate,
  treasuryInfoToTransaction
};
