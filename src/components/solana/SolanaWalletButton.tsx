
import React from 'react';
import { Button } from '@/components/ui/button';
import { useSolana } from './SolanaContext';
import { truncateAddress } from '@/utils/formatters';

// Wallet button component
const SolanaWalletButton: React.FC = () => {
  const { connected, walletAddress, connect, disconnect, isLoading } = useSolana();

  const handleClick = async () => {
    if (connected) {
      await disconnect();
    } else {
      await connect();
    }
  };

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
