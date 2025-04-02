
import React from 'react';
import { Button } from '@/components/ui/button';
import { useSolana } from '@/contexts/SolanaContext';
import { Wallet } from 'lucide-react';

interface SolanaSignInProps {
  onSuccess?: () => void;
}

const SolanaSignIn: React.FC<SolanaSignInProps> = ({ onSuccess }) => {
  const { connected, connect, disconnect } = useSolana();

  const handleConnect = async () => {
    try {
      await connect();
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error('Failed to connect to Solana wallet:', error);
    }
  };

  if (connected) {
    return (
      <Button 
        className="w-full glass-morphism border-white/10 hover:bg-white/10" 
        variant="outline"
        onClick={disconnect}
      >
        <Wallet className="h-4 w-4 mr-2" />
        Disconnect Wallet
      </Button>
    );
  }

  return (
    <Button 
      className="w-full glass-morphism border-white/10 hover:bg-white/10" 
      variant="outline"
      onClick={handleConnect}
    >
      <Wallet className="h-4 w-4 mr-2" />
      Connect with Solana
    </Button>
  );
};

export default SolanaSignIn;
