
import { PublicKey } from '@solana/web3.js';

/**
 * Formats a Solana address to a shorter, more readable format
 * @param address The Solana address to format
 * @param length Number of characters to show at the beginning and end
 * @returns Formatted address string
 */
export const formatAddress = (address: string, length: number = 4): string => {
  if (!address) return '';
  
  if (address.length <= length * 2) return address;
  
  return `${address.slice(0, length)}...${address.slice(-length)}`;
};

/**
 * Validates a Solana address
 * @param address Address to validate
 * @returns Boolean indicating if the address is valid
 */
export const isValidSolanaAddress = (address: string): boolean => {
  try {
    new PublicKey(address);
    return true;
  } catch (error) {
    return false;
  }
};

/**
 * Generates a message for signing to authenticate with Solana wallet
 * @param publicKey The user's public key
 * @param nonce A random nonce for added security
 * @returns A message string for signing
 */
export const generateSignatureMessage = (publicKey: string, nonce: string): string => {
  return `Sign this message to authenticate with P2W.FUN\n\nThis signature will not trigger any blockchain transaction or cost any fee.\n\nWallet address: ${publicKey}\nNonce: ${nonce}\nTimestamp: ${new Date().toISOString()}`;
};

/**
 * Get shortened Solana explorer URL for a transaction or address
 * @param type Type of entity (tx, address)
 * @param hash Hash or address to link to
 * @returns Shortened URL string
 */
export const getExplorerUrl = (type: 'tx' | 'address', hash: string): string => {
  return `https://explorer.solana.com/${type}/${hash}`;
};

/**
 * Converts SOL amount to USD based on a fixed price
 * This is simplified - in a real app you would use an oracle or price feed
 * @param solAmount Amount in SOL
 * @param solPrice Price of SOL in USD
 * @returns Amount in USD
 */
export const solToUsd = (solAmount: number, solPrice: number = 20): number => {
  return solAmount * solPrice;
};

/**
 * Converts USD amount to SOL based on a fixed price
 * This is simplified - in a real app you would use an oracle or price feed
 * @param usdAmount Amount in USD
 * @param solPrice Price of SOL in USD
 * @returns Amount in SOL
 */
export const usdToSol = (usdAmount: number, solPrice: number = 20): number => {
  return usdAmount / solPrice;
};

/**
 * Track total deposits for a user, regardless of withdrawals
 * This is the key function for ensuring leaderboard ranks are based on total deposits
 * @param userId User ID
 * @param amount Amount of the deposit
 * @returns Updated total deposits
 */
export const trackUserDeposit = async (userId: string, amount: number): Promise<number> => {
  try {
    console.log(`Tracking deposit of ${amount} for user ${userId}`);
    
    // In a real implementation, this would interact with your Supabase database
    // const { data, error } = await supabase
    //   .from('user_deposits')
    //   .select('total_deposited')
    //   .eq('user_id', userId)
    //   .single();
    
    // if (error && error.code !== 'PGRST116') {
    //   console.error('Error fetching user deposit info:', error);
    //   return 0;
    // }
    
    // const currentTotal = data?.total_deposited || 0;
    // const newTotal = currentTotal + amount;
    
    // await supabase
    //   .from('user_deposits')
    //   .upsert({
    //     user_id: userId,
    //     total_deposited: newTotal,
    //     last_deposit_date: new Date().toISOString()
    //   });
    
    // return newTotal;
    
    // Mock implementation for now
    return 0;
  } catch (error) {
    console.error('Error tracking user deposit:', error);
    return 0;
  }
};

/**
 * Verify a user's on-chain certificate NFT
 * @param walletAddress Wallet address to check
 * @param userId User ID to verify
 * @returns Boolean indicating if the user has a valid certificate
 */
export const verifyUserCertificate = async (walletAddress: string, userId: string): Promise<boolean> => {
  try {
    console.log(`Verifying certificate for user ${userId} with wallet ${walletAddress}`);
    
    // In a real implementation, this would check the blockchain for the NFT
    // and verify its metadata matches the user
    
    // Mock implementation for now
    return true;
  } catch (error) {
    console.error('Error verifying user certificate:', error);
    return false;
  }
};
