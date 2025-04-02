import { SolanaTransaction } from '@/types/leaderboard';

/**
 * Treasury Utils
 *
 * Utility functions for handling treasury-related operations and calculations.
 */

/**
 * Calculates the total incoming amount for a given address from a list of Solana transactions.
 *
 * @param address - The Solana address to calculate the incoming amount for.
 * @param transactions - An array of SolanaTransaction objects.
 * @returns The total incoming amount as a number.
 */
export const calculateTotalIncomingAmount = (
  address: string,
  transactions: SolanaTransaction[]
): number => {
  if (!transactions || transactions.length === 0) {
    return 0;
  }

  return transactions.reduce((total, transaction) => {
    // Ensure the transaction type is 'transfer' and the recipient matches the address
    if (transaction.type === "transfer" || transaction.type === "spend") {
      // Both cases are handled similarly
    }

    // Fix the missing receiver property
    // Assume either receiver or recipient should be used
    const recipientAddress = transaction.receiver || transaction.recipient;

    if (recipientAddress === address) {
      return total + transaction.amount;
    }
    return total;
  }, 0);
};

/**
 * Calculates the total outgoing amount for a given address from a list of Solana transactions.
 *
 * @param address - The Solana address to calculate the outgoing amount for.
 * @param transactions - An array of SolanaTransaction objects.
 * @returns The total outgoing amount as a number.
 */
export const calculateTotalOutgoingAmount = (
  address: string,
  transactions: SolanaTransaction[]
): number => {
  if (!transactions || transactions.length === 0) {
    return 0;
  }

  return transactions.reduce((total, transaction) => {
    // Ensure the transaction type is 'transfer' and the sender matches the address
    if (transaction.type === 'transfer' && transaction.sender === address) {
      return total + transaction.amount;
    }
    return total;
  }, 0);
};

/**
 * Calculates the net amount (incoming - outgoing) for a given address from a list of Solana transactions.
 *
 * @param address - The Solana address to calculate the net amount for.
 * @param transactions - An array of SolanaTransaction objects.
 * @returns The net amount as a number.
 */
export const calculateNetAmount = (
  address: string,
  transactions: SolanaTransaction[]
): number => {
  const totalIncoming = calculateTotalIncomingAmount(address, transactions);
  const totalOutgoing = calculateTotalOutgoingAmount(address, transactions);
  return totalIncoming - totalOutgoing;
};

/**
 * Filters transactions to only include those that are incoming to a specific address.
 *
 * @param address - The Solana address to filter transactions for.
 * @param transactions - An array of SolanaTransaction objects.
 * @returns An array of SolanaTransaction objects that are incoming to the specified address.
 */
export const filterIncomingTransactions = (
  address: string,
  transactions: SolanaTransaction[]
): SolanaTransaction[] => {
  if (!transactions || transactions.length === 0) {
    return [];
  }

  return transactions.filter(transaction =>
    transaction.type === 'transfer' && transaction.recipient === address
  );
};

/**
 * Filters transactions to only include those that are outgoing from a specific address.
 *
 * @param address - The Solana address to filter transactions for.
 * @param transactions - An array of SolanaTransaction objects.
 * @returns An array of SolanaTransaction objects that are outgoing from the specified address.
 */
export const filterOutgoingTransactions = (
  address: string,
  transactions: SolanaTransaction[]
): SolanaTransaction[] => {
  if (!transactions || transactions.length === 0) {
    return [];
  }

  return transactions.filter(transaction =>
    transaction.type === 'transfer' && transaction.sender === address
  );
};

/**
 * Formats a Solana address by shortening it and adding ellipsis.
 *
 * @param address - The Solana address to format.
 * @param startLength - Number of characters to show at the start of the address.
 * @param endLength - Number of characters to show at the end of the address.
 * @returns A formatted Solana address string.
 */
export const formatSolanaAddress = (
  address: string,
  startLength: number = 4,
  endLength: number = 4
): string => {
  if (!address) {
    return 'N/A';
  }

  const start = address.substring(0, startLength);
  const end = address.substring(address.length - endLength);
  return `${start}...${end}`;
};
