
import { SolanaTransaction, SolanaTreasuryInfo } from "@/types/solana";
import { formatCurrency } from "./formatters";

/**
 * Format treasury data for display
 */
export const formatTreasuryData = (treasuryInfo: SolanaTreasuryInfo) => {
  return {
    address: treasuryInfo.pubkey || 'Unknown',
    shortAddress: formatShortAddress(treasuryInfo.pubkey),
    balance: formatCurrency(treasuryInfo.amount || 0),
    formattedSender: formatShortAddress(treasuryInfo.sender),
  };
};

/**
 * Format a Solana address to a shorter version
 */
export const formatShortAddress = (address?: string): string => {
  if (!address) return 'Unknown';
  return `${address.substring(0, 4)}...${address.substring(address.length - 4)}`;
};

/**
 * Format a date in a readable format
 */
export const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

/**
 * Convert SOL to USD based on the current price
 */
export const solToUsd = (solAmount: number, solPrice: number): number => {
  return solAmount * solPrice;
};

/**
 * Convert USD to SOL based on the current price
 */
export const usdToSol = (usdAmount: number, solPrice: number): number => {
  return usdAmount / solPrice;
};

/**
 * Get a color based on transaction type
 */
export const getTransactionTypeColor = (type: string): string => {
  switch (type) {
    case 'deposit':
      return 'text-green-400';
    case 'withdrawal':
      return 'text-red-400';
    case 'transfer':
      return 'text-blue-400';
    default:
      return 'text-gray-400';
  }
};

export default {
  formatTreasuryData,
  formatShortAddress,
  formatDate,
  solToUsd,
  usdToSol,
  getTransactionTypeColor
};
