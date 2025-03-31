
/**
 * Formats a Solana wallet address for display
 * @param address Full Solana public key
 * @param chars Number of characters to show at start and end
 * @returns Formatted address string (e.g., "Ax12...7Bzt")
 */
export const formatAddress = (address: string, chars: number = 4): string => {
  if (!address) return '';
  if (address.length <= chars * 2) return address;
  
  return `${address.substring(0, chars)}...${address.substring(address.length - chars)}`;
};

/**
 * Validates a Solana address format (basic check)
 * @param address Solana address to validate
 * @returns Boolean indicating if format is valid
 */
export const isValidSolanaAddress = (address: string): boolean => {
  return typeof address === 'string' && address.length >= 32 && address.length <= 44;
};

/**
 * Estimates transaction fee for a simple transfer
 * @returns Estimated fee in SOL
 */
export const estimateTransactionFee = (): number => {
  return 0.000005;
};
