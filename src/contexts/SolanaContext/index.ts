
import { createContext, useContext } from 'react';

export interface SolanaContextValue {
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
  isConnecting: boolean;
  hasWallet: boolean;
  walletPubkey: string | null;
  walletBalance: number;
  sendSol: (amount: number, recipient: string) => Promise<boolean>;
  linkWalletToAccount: (walletAddress: string) => Promise<boolean>;
}

export const SolanaContext = createContext<SolanaContextValue>({
  connectWallet: async () => {},
  disconnectWallet: () => {},
  isConnecting: false,
  hasWallet: false,
  walletPubkey: null,
  walletBalance: 0,
  sendSol: async () => false,
  linkWalletToAccount: async () => false
});

export const useSolana = () => useContext(SolanaContext);

export { default as SolanaProvider } from './SolanaProvider';
