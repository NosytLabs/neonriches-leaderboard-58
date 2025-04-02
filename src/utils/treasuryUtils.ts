
import { SolanaTransaction } from '@/types/solana-types';

/**
 * Utility functions for handling treasury and transaction data
 */

/**
 * Format a transaction record to a human-readable format
 */
export const formatTransaction = (transaction: SolanaTransaction): string => {
  const date = new Date(transaction.timestamp);
  const formattedDate = date.toLocaleDateString();
  const formattedTime = date.toLocaleTimeString();
  
  return `${transaction.amount} ${transaction.symbol} from ${transaction.fromAddress.substring(0, 6)}...${transaction.fromAddress.substring(transaction.fromAddress.length - 4)} to ${transaction.toAddress.substring(0, 6)}...${transaction.toAddress.substring(transaction.toAddress.length - 4)} on ${formattedDate} at ${formattedTime}`;
};

/**
 * Convert API transaction data to SolanaTransaction format
 */
export const convertApiTransactions = (apiData: any[]): SolanaTransaction[] => {
  return apiData.map(item => ({
    id: item.id || item.signature || `tx-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    fromAddress: item.sender || item.from || '',
    toAddress: item.receiver || item.to || '',
    amount: parseFloat(item.amount) || 0,
    symbol: item.token || item.currency || 'SOL',
    timestamp: item.timestamp || new Date().toISOString(),
    blockNumber: item.slot || item.blockNumber || 0,
    transactionHash: item.signature || item.hash || '',
    status: item.status || 'confirmed'
  }));
};

/**
 * Calculate total volume from transactions
 */
export const calculateTotalVolume = (transactions: SolanaTransaction[]): number => {
  return transactions.reduce((total, tx) => total + tx.amount, 0);
};

export default {
  formatTransaction,
  convertApiTransactions,
  calculateTotalVolume
};
