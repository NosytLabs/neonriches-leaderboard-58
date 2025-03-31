
import React from 'react';
import { Button } from '@/components/ui/button';
import { useSolana } from '@/contexts/SolanaContext';
import { Loader2 } from 'lucide-react';

interface SolanaWalletButtonProps {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'royal' | 'royalGold';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
}

export const SolanaWalletButton: React.FC<SolanaWalletButtonProps> = ({ 
  variant = 'default',
  size = 'default',
  className
}) => {
  const { connected, connect, disconnect, walletAddress } = useSolana();
  const [isLoading, setIsLoading] = React.useState(false);

  const handleConnectClick = async () => {
    try {
      setIsLoading(true);
      await connect();
    } finally {
      setIsLoading(false);
    }
  };

  const handleDisconnectClick = () => {
    disconnect();
  };

  // Format address for display
  const formatAddress = (address: string): string => {
    if (!address) return '';
    return `${address.substring(0, 4)}...${address.substring(address.length - 4)}`;
  };

  if (connected && walletAddress) {
    return (
      <Button 
        variant={variant} 
        size={size} 
        className={className}
        onClick={handleDisconnectClick}
      >
        {formatAddress(walletAddress)}
      </Button>
    );
  }

  return (
    <Button 
      variant={variant} 
      size={size} 
      className={className}
      onClick={handleConnectClick}
      disabled={isLoading}
    >
      {isLoading ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      ) : null}
      Connect Wallet
    </Button>
  );
};
