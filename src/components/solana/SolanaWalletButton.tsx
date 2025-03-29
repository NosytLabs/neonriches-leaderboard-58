
import React from 'react';
import { Button } from '@/components/ui/button';
import { useSolana } from '@/contexts/SolanaContext';
import { formatAddress } from '@/utils/formatters';
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
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDisconnectClick = async () => {
    try {
      setIsLoading(true);
      await disconnect();
    } catch (error) {
      console.error('Failed to disconnect wallet:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (connected && walletAddress) {
    return (
      <Button 
        variant={variant} 
        size={size} 
        className={className}
        onClick={handleDisconnectClick}
        disabled={isLoading}
      >
        {isLoading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : null}
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
