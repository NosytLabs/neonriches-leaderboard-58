
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Wallet, Loader2 } from 'lucide-react';
import { useSolana } from '@/contexts/SolanaContext';
import { useAuth } from '@/contexts/auth';
import { useToast } from '@/hooks/use-toast';
import { generateSignatureMessage } from '@/utils/solanaUtils';

interface SolanaSignInProps {
  onSuccess?: () => void;
}

const SolanaSignIn: React.FC<SolanaSignInProps> = ({ onSuccess }) => {
  const { connected, connectWallet, signMessage, publicKey } = useSolana();
  const { login, register } = useAuth();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSolanaSignIn = async () => {
    try {
      setIsLoading(true);
      
      // If wallet is not connected, connect first
      if (!connected) {
        await connectWallet();
        return;
      }
      
      if (!publicKey) {
        throw new Error('Wallet public key not available');
      }
      
      // Generate a message to sign
      const message = generateSignatureMessage(
        publicKey.toString(),
        'solana_user'
      );
      
      // Ask user to sign the message
      const signature = await signMessage(message);
      
      if (!signature) {
        throw new Error('Signature required to authenticate');
      }
      
      // In a real implementation, we would send this signature to the backend for verification
      // For this demo, we'll mock a successful login/registration
      
      // Check if user exists (would be done on the backend)
      const walletAddress = publicKey.toString();
      const userExists = false; // This would be determined server-side
      
      if (userExists) {
        // Log in existing user
        await login('solana@example.com', 'password123');
      } else {
        // Register new user
        await register(
          `solana_${walletAddress.slice(0, 6)}`,
          'solana@example.com',
          'password123'
        );
      }
      
      toast({
        title: 'Authentication Successful',
        description: 'You have been authenticated with your Solana wallet!',
      });
      
      if (onSuccess) {
        onSuccess();
      }
    } catch (error: any) {
      toast({
        title: 'Authentication Failed',
        description: error.message || 'Failed to authenticate with Solana wallet',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <Button
      onClick={handleSolanaSignIn}
      className="w-full royal-shadow bg-gradient-to-r from-orange-400 to-amber-500 text-black font-bold"
      size="lg"
      disabled={isLoading}
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Authenticating...
        </>
      ) : (
        <>
          <Wallet className="mr-2 h-5 w-5" />
          Sign In with Solana
        </>
      )}
    </Button>
  );
};

export default SolanaSignIn;
