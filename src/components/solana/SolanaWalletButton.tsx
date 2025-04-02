
import React from 'react';
import { Button } from '@/components/ui/button';
import { useSolanaContext } from '@/contexts/SolanaContext';
import { truncateAddress } from '@/utils/formatters';

interface SolanaWalletButtonProps {
  variant?: 'default' | 'outline' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg';
}

const SolanaWalletButton: React.FC<SolanaWalletButtonProps> = ({ 
  variant = 'default',
  size = 'default'
}) => {
  const { connect, disconnect, connected, wallet } = useSolanaContext();
  const publicKey = wallet?.publicKey?.toString() || '';
  
  const handleClick = () => {
    if (connected) {
      disconnect();
    } else {
      connect();
    }
  };
  
  return (
    <Button 
      variant={variant} 
      size={size} 
      onClick={handleClick}
    >
      {connected ? truncateAddress(publicKey) : 'Connect Wallet'}
    </Button>
  );
};

export default SolanaWalletButton;
