
import { SolanaTransaction } from '@/types/solana';
import { formatCurrency } from './formatters/currencyFormatters';

/**
 * Format a transaction amount into a readable string with a sign
 * 
 * @param amount - Transaction amount
 * @param type - Transaction type
 * @returns Formatted amount string
 */
export const formatTransactionAmount = (amount: number, type: string): string => {
  const prefix = type === 'deposit' ? '+' : '-';
  return `${prefix}${formatCurrency(Math.abs(amount))}`;
};

/**
 * Get a color class for a transaction based on its type
 * 
 * @param type - Transaction type
 * @returns CSS class name
 */
export const getTransactionColorClass = (type: string): string => {
  switch (type) {
    case 'deposit':
      return 'text-green-500';
    case 'withdrawal':
    case 'spend':
      return 'text-red-500';
    case 'transfer':
      return 'text-blue-500';
    default:
      return 'text-white';
  }
};

/**
 * Format a transaction date into a readable string
 * 
 * @param timestamp - Transaction timestamp (in seconds or milliseconds)
 * @returns Formatted date string
 */
export const formatTransactionDate = (timestamp: number): string => {
  // Convert to milliseconds if in seconds
  const ms = timestamp > 1000000000000 ? timestamp : timestamp * 1000;
  
  const date = new Date(ms);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

/**
 * Filter transactions by type
 * 
 * @param transactions - Array of transactions
 * @param type - Transaction type to filter by
 * @returns Filtered transactions
 */
export const filterTransactionsByType = (
  transactions: SolanaTransaction[],
  type: string | null
): SolanaTransaction[] => {
  if (!type) return transactions;
  return transactions.filter(tx => tx.type === type);
};

/**
 * Calculate the balance after a given transaction
 * 
 * @param transactions - Array of transactions
 * @param currentTx - Current transaction
 * @returns Balance after the transaction
 */
export const calculateBalanceAfterTransaction = (
  transactions: SolanaTransaction[],
  currentTx: SolanaTransaction
): number => {
  const sortedTxs = [...transactions].sort((a, b) => 
    new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
  );
  
  const currentIndex = sortedTxs.findIndex(tx => tx.signature === currentTx.signature);
  if (currentIndex === -1) return 0;
  
  let balance = 0;
  for (let i = 0; i <= currentIndex; i++) {
    const tx = sortedTxs[i];
    if (tx.type === 'deposit') {
      balance += tx.amount;
    } else if (tx.type === 'withdrawal' || tx.type === 'spend') {
      balance -= tx.amount;
    } else if (tx.type === 'transfer') {
      if (tx.sender === 'self') {
        balance -= tx.amount;
      } else if (tx.receiver === 'self') {
        balance += tx.amount;
      }
    }
  }
  
  return balance;
};
