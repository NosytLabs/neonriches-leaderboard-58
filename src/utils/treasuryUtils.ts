
import { SolanaTreasuryInfo, SolanaTransaction } from "@/types/solana";

/**
 * Format a treasury transaction for display
 */
export const formatTreasuryTransaction = (tx: SolanaTransaction): {
  type: string;
  amount: string;
  from: string;
  to: string;
  timeFormatted: string;
  statusClass: string;
} => {
  return {
    type: tx.type.charAt(0).toUpperCase() + tx.type.slice(1),
    amount: `${tx.amount.toFixed(2)} SOL`,
    from: tx.sender.slice(0, 4) + '...' + tx.sender.slice(-4),
    to: tx.recipient.slice(0, 4) + '...' + tx.recipient.slice(-4),
    timeFormatted: new Date(tx.timestamp).toLocaleString(),
    statusClass: tx.status === 'confirmed' ? 'text-green-500' : 
                 tx.status === 'pending' ? 'text-yellow-500' : 'text-red-500'
  };
};

/**
 * Convert SOL amount to USD
 */
export const solToUsd = (solAmount: number, solPrice: number = 20): number => {
  return solAmount * solPrice;
};

/**
 * Format a treasury info object for display
 */
export const formatTreasuryInfo = (info: SolanaTreasuryInfo): {
  address: string;
  balanceFormatted: string;
  totalDepositsFormatted: string;
  totalWithdrawalsFormatted: string;
  lastUpdatedFormatted: string;
  usdValueFormatted: string;
} => {
  return {
    address: info.address.slice(0, 4) + '...' + info.address.slice(-4),
    balanceFormatted: `${info.balance.toFixed(4)} SOL`,
    totalDepositsFormatted: `${info.totalDeposits.toFixed(2)} SOL`,
    totalWithdrawalsFormatted: `${info.totalWithdrawals.toFixed(2)} SOL`,
    lastUpdatedFormatted: new Date(info.lastUpdated).toLocaleString(),
    usdValueFormatted: `$${info.usdValue.toLocaleString()}`
  };
};
