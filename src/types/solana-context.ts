
export interface SolanaContextValue {
  isConnecting: boolean;
  hasWallet: boolean;
  walletPubkey: string | null;
  walletBalance: number;
  connected?: boolean;
  publicKey?: any;
  signMessage?: (message: string) => Promise<Uint8Array | null>;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
  sendSol: (recipient: string, amount: number) => Promise<{ success: boolean; message: string }>;
  linkWalletToAccount: () => Promise<boolean>;
}
