
/**
 * Formats a Solana address for display by shortening it
 * @param address The full Solana address
 * @param length The number of characters to show at the beginning and end
 * @returns The formatted address (e.g. "Jup2Y...Ks9vJ")
 */
export const formatAddress = (address: string, length: number = 4): string => {
  if (!address) return '';
  if (address.length <= length * 2) return address;
  
  return `${address.substring(0, length)}...${address.substring(address.length - length)}`;
};

/**
 * Generates a signature message for Solana wallet authentication
 * @param nonce A unique nonce for this authentication attempt
 * @returns A message to be signed by the wallet
 */
export const generateSignatureMessage = (nonce: string): string => {
  return `Sign this message to authenticate with P2W.FUN\nNonce: ${nonce}\nTimestamp: ${Date.now()}`;
};

/**
 * Validates a Solana address format
 * @param address The address to validate
 * @returns True if the address appears to be a valid Solana address
 */
export const isValidSolanaAddress = (address: string): boolean => {
  // Basic validation - Solana addresses are 44 characters long and base58 encoded
  // Full validation would require the @solana/web3.js library
  return /^[1-9A-HJ-NP-Za-km-z]{43,44}$/.test(address);
};

export default {
  formatAddress,
  generateSignatureMessage,
  isValidSolanaAddress
};
