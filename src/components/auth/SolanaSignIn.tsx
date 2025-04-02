
import React from 'react';
import { Button } from '@/components/ui/button';
import { Wallet } from 'lucide-react';

interface SolanaSignInProps {
  onSuccess?: () => void;
}

// Mock component for SolanaSignIn
const SolanaSignIn: React.FC<SolanaSignInProps> = ({ onSuccess }) => {
  const connected = false;
  
  const connect = async () => {
    console.log('Connecting to Solana...');
    if (onSuccess) {
      onSuccess();
    }
    return true;
  };
  
  const disconnect = async () => {
    console.log('Disconnecting from Solana...');
    return true;
  };

  return (
    <Button 
      className="w-full glass-morphism border-white/10 hover:bg-white/10" 
      variant="outline"
      onClick={connected ? disconnect : connect}
    >
      <Wallet className="h-4 w-4 mr-2" />
      {connected ? 'Disconnect Wallet' : 'Connect with Solana'}
    </Button>
  );
};

export default SolanaSignIn;
