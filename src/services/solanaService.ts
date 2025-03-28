
import { SolanaTreasuryInfo, SolanaTransaction } from '@/types/solana';

/**
 * Fetches the Solana treasury information
 */
export const getTreasuryInfo = async (): Promise<SolanaTreasuryInfo> => {
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
export const getTreasuryTransactions = async (): Promise<SolanaTransaction[]> => {
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

export default {
  getTreasuryInfo,
  getTreasuryTransactions
};
