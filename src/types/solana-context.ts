
export interface SolanaContextValue {
  isConnecting: boolean;
  hasWallet: boolean;
  walletPubkey: string | null;
  walletBalance: number;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
  sendSol: (recipient: string, amount: number) => Promise<{ success: boolean; message: string }>;
  linkWalletToAccount: () => Promise<boolean>;
}
