
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
  // Simple validation - real implementation should be more robust
  return typeof address === 'string' && address.length >= 32 && address.length <= 44;
};

/**
 * Converts SOL to lamports
 * @param sol Amount in SOL
 * @returns Amount in lamports
 */
export const solToLamports = (sol: number): number => {
  return sol * 1_000_000_000; // 1 SOL = 10^9 lamports
};

/**
 * Converts lamports to SOL
 * @param lamports Amount in lamports
 * @returns Amount in SOL
 */
export const lamportsToSol = (lamports: number): number => {
  return lamports / 1_000_000_000;
};

/**
 * Estimates transaction fee for a simple transfer
 * @returns Estimated fee in SOL
 */
export const estimateTransactionFee = (): number => {
  // This is a simplified estimate - actual fees depend on network conditions
  // A simple transfer usually costs around 0.000005 SOL
  return 0.000005;
};
