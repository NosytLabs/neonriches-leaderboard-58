
/**
 * Formats a Solana wallet address for display
 */
export const formatAddress = (address: string): string => {
  if (!address) return '';
  
  return `${address.substring(0, 4)}...${address.substring(address.length - 4)}`;
};

/**
 * Validates a Solana wallet address
 */
export const isValidSolanaAddress = (address: string): boolean => {
  // A very basic validation - Solana addresses are 32-44 characters long
  return address && address.length >= 32 && address.length <= 44;
};

/**
 * Formats SOL amount with the proper decimals
 */
export const formatSolAmount = (amount: number): string => {
  return amount.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 9
  });
};

/**
 * Converts SOL to USD based on the current exchange rate
 */
export const solToUsd = (solAmount: number, exchangeRate: number): number => {
  return solAmount * exchangeRate;
};

/**
 * Converts USD to SOL based on the current exchange rate
 */
export const usdToSol = (usdAmount: number, exchangeRate: number): number => {
  return usdAmount / exchangeRate;
};

/**
 * Shortens a transaction signature for display
 */
export const shortenTxSignature = (signature: string): string => {
  if (!signature) return '';
  
  return `${signature.substring(0, 6)}...${signature.substring(signature.length - 4)}`;
};

export default {
  formatAddress,
  isValidSolanaAddress,
  formatSolAmount,
  solToUsd,
  usdToSol,
  shortenTxSignature
};
