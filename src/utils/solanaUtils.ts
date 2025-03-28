
// Function to format wallet addresses for display
export const formatAddress = (address: string, length = 4): string => {
  if (!address || address.length < 8) return address || '';
  return `${address.substring(0, length)}...${address.substring(address.length - length)}`;
};

// Function to format date for display
export const formatDate = (date: string | Date): string => {
  if (!date) return '';
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

// Convert lamports to SOL
export const lamportsToSol = (lamports: number): number => {
  return lamports / 1_000_000_000;
};

// Convert SOL to lamports
export const solToLamports = (sol: number): number => {
  return sol * 1_000_000_000;
};

// Convert SOL to USD (assumes 1 SOL = $X USD)
export const solToUsd = (sol: number, solPrice = 20): number => {
  return sol * solPrice;
};

// Format SOL with proper decimals
export const formatSol = (sol: number, decimals = 4): string => {
  return sol.toFixed(decimals);
};

// Validate Solana address
export const isValidSolanaAddress = (address: string): boolean => {
  // Basic validation - Solana addresses are 32-44 characters long and base58 encoded
  return /^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(address);
};

// Generate a message for signing
export const generateSignatureMessage = (nonce: string, userId: string): string => {
  return `Sign this message to verify your Solana wallet ownership for SpendThrone. Nonce: ${nonce}. User ID: ${userId}. This signature will not trigger any on-chain transactions.`;
};
