
import { SolanaTreasuryInfo, OnChainLeaderboardEntry, SolanaTransaction } from '@/types/solana';

/**
 * Fetches the Solana treasury information
 */
export const fetchTreasuryInfo = async (): Promise<SolanaTreasuryInfo> => {
  // This would normally call an API endpoint to get the treasury info
  // For now, we'll just mock the response
  return {
    address: "3Qij1V5xZe1cGVHG8oCxZZzmUgW4XiY9GBfYvvEXiuF8",
    balance: 250.75,
    totalDeposits: 500.25,
    totalWithdrawals: 249.5,
    lastUpdated: new Date().toISOString(),
    usdValue: 12537.5
  };
};

/**
 * Fetches recent treasury transactions
 */
export const fetchTreasuryTransactions = async (): Promise<SolanaTransaction[]> => {
  // This would normally call an API endpoint to get the transactions
  // For now, we'll just mock the response
  return [
    {
      id: "1",
      signature: "3AaPTWEJGUnJgwKK9xyjJu1d57yzmrGTwk4jrpvce45Tg3yPrVd7yzJwZ9cZQ4QF8TxMQeT8sHKiHqrA3quwUUEU",
      timestamp: new Date().toISOString(),
      type: "deposit",
      amount: 5.5,
      sender: "8szGkuLTAux9XMgZ2vtY39jVSowEcpBfFfD8hXSEqdGC",
      recipient: "3Qij1V5xZe1cGVHG8oCxZZzmUgW4XiY9GBfYvvEXiuF8",
      status: "confirmed"
    },
    {
      id: "2",
      signature: "57Zr8drJ5iNSP6T9Z99bPmvUT8f91xRvEuw9L5MBDQcwRrzFLALZLnTXxJbx1P2SLhN2DNmNmQcmrJ4H7WGQCn",
      timestamp: new Date(Date.now() - 86400000).toISOString(),
      type: "withdrawal",
      amount: 2.25,
      sender: "3Qij1V5xZe1cGVHG8oCxZZzmUgW4XiY9GBfYvvEXiuF8",
      recipient: "CFgFEjHwuTbcwm3xhzrQPg9BFpnVBvHwqafwU3TKuQ54",
      status: "confirmed"
    }
  ];
};

/**
 * Fetches the on-chain leaderboard
 */
export const fetchOnChainLeaderboard = async (): Promise<OnChainLeaderboardEntry[]> => {
  // Mock data
  return [
    {
      id: "1",
      publicKey: "3Qij1V5xZe1cGVHG8oCxZZzmUgW4XiY9GBfYvvEXiuF8",
      username: "SolWhale",
      rank: 1,
      previousRank: 1,
      amountSpent: 15000,
      totalSpent: 15000,
      lastTransaction: new Date().toISOString(),
      isVerified: true,
      signature: "3AaPTWEJGUnJgwKK9xyjJu1d57yzmrGTwk4jrpvce45Tg3yPrVd7yzJwZ9cZQ4QF8TxMQeT8sHKiHqrA3quwUUEU"
    },
    {
      id: "2",
      publicKey: "8szGkuLTAux9XMgZ2vtY39jVSowEcpBfFfD8hXSEqdGC",
      username: "BlockChain",
      rank: 2,
      previousRank: 3,
      amountSpent: 8000,
      totalSpent: 8000,
      lastTransaction: new Date(Date.now() - 86400000).toISOString(),
      isVerified: true,
      signature: "57Zr8drJ5iNSP6T9Z99bPmvUT8f91xRvEuw9L5MBDQcwRrzFLALZLnTXxJbx1P2SLhN2DNmNmQcmrJ4H7WGQCn"
    }
  ];
};

/**
 * Formats a date for display
 */
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date);
};

export default {
  fetchTreasuryInfo,
  fetchTreasuryTransactions,
  fetchOnChainLeaderboard,
  formatDate
};
