
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/auth';
import { useSolana } from '@/contexts/SolanaContext';
import { Crown, Coins } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface SolanaSignInProps {
  onSuccess?: () => void;
}

const SolanaSignIn: React.FC<SolanaSignInProps> = ({ onSuccess }) => {
  const { login, register } = useAuth();
  const { connected, signMessage, publicKey } = useSolana();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSignIn = async () => {
    if (!connected || !signMessage || !publicKey) {
      toast({
        title: "Royal Connection Required",
        description: "Thou must first connect thy royal Solana wallet to proceed.",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Simulate message signing
      const message = new TextEncoder().encode(`SpendThrone Authentication - ${new Date().toISOString()}`);
      
      // This would normally use the result of signMessage, but we're mocking for now
      // const signature = await signMessage(message);
      
      // Just simulate login with the wallet address
      const address = publicKey.toString();
      register(`wallet_${address.substring(0, 8)}@spendthrone.com`, `Noble${address.substring(0, 6)}`, 'walletAuth');
      
      toast({
        title: "Royal Authentication Complete!",
        description: "Thy noble passage has been granted via thy royal blockchain seal.",
        variant: "default"
      });
      
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      toast({
        title: "Royal Authentication Failed",
        description: "The castle guards could not verify thy blockchain seal.",
        variant: "destructive"
      });
      console.error("Authentication error:", error);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="space-y-4 text-center">
      <div className="inline-flex items-center justify-center rounded-full bg-royal-gold/10 p-3 mb-3">
        <Coins className="h-7 w-7 text-royal-gold" />
      </div>
      
      <h3 className="text-lg font-bold">Sign with Royal Blockchain Seal</h3>
      <p className="text-white/60 text-sm mb-4">Use thy cryptocurrency enchantment to enter our noble realm</p>
      
      <Button
        onClick={handleSignIn}
        disabled={isLoading || !connected}
        className="w-full bg-gradient-to-r from-royal-purple to-royal-purple-dark hover:opacity-90"
      >
        <Crown className="mr-2 h-4 w-4" />
        {isLoading ? "Verifying Thy Noble Lineage..." : "Authenticate with Royal Seal"}
      </Button>
      
      {!connected && (
        <p className="text-sm text-royal-gold/70 mt-2">
          Connect thy Solana wallet first to use this magical method
        </p>
      )}
    </div>
  );
};

export default SolanaSignIn;
