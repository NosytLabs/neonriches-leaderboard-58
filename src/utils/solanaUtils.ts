
// Utility functions for Solana interactions

/**
 * Generate a message for the user to sign to authenticate with Solana wallet
 * @param publicKey The user's public key
 * @returns A message string to be signed
 */
export const formatAddress = (address: string, length: number = 4): string => {
  if (!address || address.length < 8) return address;
  return `${address.slice(0, length)}...${address.slice(-length)}`;
};

export const isValidSolanaAddress = (address: string): boolean => {
  // Basic validation - Solana addresses are 32-44 characters
  return /^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(address);
};

export const generateSignatureMessage = (publicKey: string): string => {
  return `Sign this message to authenticate with your Solana wallet: ${publicKey} at ${new Date().toISOString()}`;
};

export default {
  formatAddress,
  isValidSolanaAddress,
  generateSignatureMessage
};
