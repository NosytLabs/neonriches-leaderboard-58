
import React from 'react';
import { Button } from '@/components/ui/button';
import { useSolana } from './SolanaContext';

// Helper function to truncate addresses
const truncateAddress = (address: string): string => {
  if (!address) return '';
  return `${address.slice(0, 4)}...${address.slice(-4)}`;
};

// Wallet button component
const SolanaWalletButton: React.FC = () => {
  const { connected, publicKey, connect, disconnect, isLoading } = useSolana();

  const handleClick = async () => {
    if (connected) {
      await disconnect();
    } else {
      await connect();
    }
  };

  // Get wallet address from publicKey
  const walletAddress = publicKey ? publicKey.toString() : null;

  return (
    <Button
      variant={connected ? "outline" : "default"}
      className="relative"
      onClick={handleClick}
      disabled={isLoading}
    >
      {isLoading ? "Connecting..." : connected ? truncateAddress(walletAddress || '') : "Connect Wallet"}
      {connected && (
        <span className="absolute -top-1 -right-1 h-3 w-3 bg-green-500 rounded-full animate-pulse" />
      )}
    </Button>
  );
};

export default SolanaWalletButton;
