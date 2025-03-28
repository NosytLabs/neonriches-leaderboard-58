
import { Connection, PublicKey, Transaction, SystemProgram, LAMPORTS_PER_SOL } from '@solana/web3.js';

/**
 * Format a Solana public key address for display
 * @param address Full Solana address
 * @param chars Number of characters to show on each end
 * @returns Shortened address with ellipsis in the middle
 */
export const formatAddress = (address: string, chars: number = 4): string => {
  if (!address) return '';
  if (address.length <= chars * 2) return address;
  return `${address.slice(0, chars)}...${address.slice(-chars)}`;
};

/**
 * Validate a Solana address
 * @param address Address to validate
 * @returns True if address is valid
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
 * Create a transfer transaction
 * @param connection Solana connection
 * @param from Sender public key
 * @param to Recipient public key
 * @param amount Amount in SOL
 * @returns Prepared transaction
 */
export const createTransferTransaction = async (
  connection: Connection,
  from: PublicKey,
  to: PublicKey,
  amount: number
): Promise<Transaction> => {
  const transaction = new Transaction().add(
    SystemProgram.transfer({
      fromPubkey: from,
      toPubkey: to,
      lamports: Math.floor(amount * LAMPORTS_PER_SOL),
    })
  );
  
  transaction.feePayer = from;
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  
  return transaction;
};

/**
 * Get SOL balance
 * @param connection Solana connection
 * @param publicKey Public key to check
 * @returns Balance in SOL
 */
export const getSolBalance = async (
  connection: Connection,
  publicKey: PublicKey
): Promise<number> => {
  const balance = await connection.getBalance(publicKey);
  return balance / LAMPORTS_PER_SOL;
};

/**
 * Convert SOL to lamports
 * @param sol Amount in SOL
 * @returns Amount in lamports
 */
export const solToLamports = (sol: number): number => {
  return Math.floor(sol * LAMPORTS_PER_SOL);
};

/**
 * Convert lamports to SOL
 * @param lamports Amount in lamports
 * @returns Amount in SOL
 */
export const lamportsToSol = (lamports: number): number => {
  return lamports / LAMPORTS_PER_SOL;
};

/**
 * Estimate transaction fee
 * @param connection Solana connection
 * @param transaction Transaction to estimate fee for
 * @returns Estimated fee in SOL
 */
export const estimateFee = async (
  connection: Connection,
  transaction: Transaction
): Promise<number> => {
  const { feeCalculator } = await connection.getRecentBlockhash();
  const fee = feeCalculator.lamportsPerSignature * transaction.signatures.length;
  return lamportsToSol(fee);
};

/**
 * Check if Phantom wallet is installed
 * @returns True if Phantom is available
 */
export const isPhantomInstalled = (): boolean => {
  return 'phantom' in window || ('solana' in window && (window as any).solana?.isPhantom);
};

/**
 * Check if any Solana wallet is installed
 * @returns True if any wallet is available
 */
export const isSolanaWalletInstalled = (): boolean => {
  return 'solana' in window || 'phantom' in window || 'solflare' in window;
};

/**
 * Generate a message for signing to verify wallet ownership
 * @param address Wallet address
 * @param username Username to link with
 * @returns Message to sign
 */
export const generateSignatureMessage = (address: string, username: string): string => {
  return `I confirm that I am the owner of the wallet ${address} and I want to link it to my SpendThrone account ${username}. Timestamp: ${new Date().toISOString()}`;
};
