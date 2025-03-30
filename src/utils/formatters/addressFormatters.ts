
/**
 * Formatting functions for addresses, particularly crypto addresses
 */

/**
 * Formats a blockchain address by truncating the middle part
 * @param address The full address to format
 * @param startChars Number of characters to show at the start
 * @param endChars Number of characters to show at the end
 * @returns Formatted address
 */
export const formatAddress = (
  address: string,
  startChars: number = 4,
  endChars: number = 4
): string => {
  if (!address) return '';
  if (address.length <= startChars + endChars) return address;
  
  const start = address.substring(0, startChars);
  const end = address.substring(address.length - endChars);
  
  return `${start}...${end}`;
};

/**
 * Formats an Ethereum address with 0x prefix
 * @param address The address to format
 * @returns Formatted Ethereum address
 */
export const formatEthAddress = (address: string): string => {
  if (!address) return '';
  
  // Ensure the address has the 0x prefix
  const normalizedAddress = address.startsWith('0x') 
    ? address 
    : `0x${address}`;
    
  return formatAddress(normalizedAddress, 6, 4);
};

/**
 * Formats a Solana address
 * @param address The address to format
 * @returns Formatted Solana address
 */
export const formatSolanaAddress = (address: string): string => {
  return formatAddress(address, 4, 4);
};
