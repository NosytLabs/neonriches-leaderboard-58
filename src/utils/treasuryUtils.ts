
import { SolanaTreasuryInfo, SolanaTransaction } from '@/types/solana';

// Convert SolanaTreasuryInfo to SolanaTransaction for compatible display
export const treasuryInfoToTransaction = (info: SolanaTreasuryInfo): SolanaTransaction => {
  return {
    signature: info.pubkey || 'unknown',
    timestamp: info.lastUpdated,
    amount: info.amount || 0,
    type: 'deposit',
    sender: info.sender || 'unknown',
    recipient: info.address,
    status: 'confirmed'
  } as SolanaTransaction;
};

// Helper function for UI
export const isTreasuryInfo = (transaction: any): transaction is SolanaTreasuryInfo => {
  return transaction && 'balance' in transaction;
};

// Format dates to be consistent
export const formatTreasuryDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

export default {
  treasuryInfoToTransaction,
  isTreasuryInfo,
  formatTreasuryDate
};
