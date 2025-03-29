
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { SolanaWalletButton } from '@/components/solana/SolanaWalletButton'; // Fixed import
import { useSolana } from '@/contexts/SolanaContext';
import { Coins, ArrowRight, Loader2, AlertTriangle } from 'lucide-react';
import { formatAddress } from '@/utils/solanaUtils';
import { isValidSolanaAddress } from '@/utils/solanaUtils';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface SolanaPaymentFormProps {
  amount: number;
  isProcessing: boolean;
  onSubmit: () => void;
  recipientAddress?: string;
}

const SolanaPaymentForm: React.FC<SolanaPaymentFormProps> = ({ 
  amount, 
  isProcessing, 
  onSubmit,
  recipientAddress = 'EUPnQXPGnVVKkKRGNF2VVKf7x6RYR9GXLQYTXzR7yL1K' // Default treasury address
}) => {
  const { connected, walletBalance, sendSol, publicKey } = useSolana();
  const [isValidAddress, setIsValidAddress] = useState(true);
  const [insufficientFunds, setInsufficientFunds] = useState(false);
  
  // Convert USD amount to SOL (simplified, in real app would use an oracle)
  const solAmount = amount / 20; // Assuming 1 SOL = $20 for this example
  
  // Validate the recipient address
  useEffect(() => {
    setIsValidAddress(isValidSolanaAddress(recipientAddress));
  }, [recipientAddress]);
  
  // Check if we have enough funds
  useEffect(() => {
    if (connected) {
      setInsufficientFunds(walletBalance < solAmount);
    }
  }, [connected, walletBalance, solAmount]);
  
  // Handle payment
  const handlePayment = async () => {
    if (!connected || !publicKey) return;
    
    try {
      const signature = await sendSol?.(recipientAddress, solAmount);
      if (signature) {
        // Wait briefly to ensure transaction is confirmed
        setTimeout(() => {
          onSubmit();
        }, 500);
      }
    } catch (error) {
      console.error('Payment failed:', error);
    }
  };
  
  return (
    <>
      <Card className="glass-morphism border-white/10">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <div className="w-32 h-32 mx-auto bg-white/5 rounded-lg flex items-center justify-center">
              <Coins size={48} className="text-royal-gold" />
            </div>
            
            <div>
              <div className="text-white/70 mb-1">Amount to pay</div>
              <div className="text-2xl font-bold">${amount.toFixed(2)}</div>
              <div className="text-sm text-white/50">≈ {solAmount.toFixed(4)} SOL</div>
            </div>
            
            {!connected ? (
              <div className="flex justify-center">
                <SolanaWalletButton variant="royal" />
              </div>
            ) : (
              <div className="text-white/70 text-sm">
                <p>Your wallet:</p>
                <div className="glass-morphism rounded-md px-3 py-2 flex items-center justify-between mt-1">
                  <code className="text-xs">
                    {formatAddress(publicKey?.toString() || '', 6)}
                  </code>
                  <span className="bg-royal-gold/20 text-royal-gold px-2 py-0.5 rounded-full text-xs">
                    {walletBalance.toFixed(4)} SOL
                  </span>
                </div>
              </div>
            )}
            
            {!isValidAddress && (
              <Alert variant="destructive" className="bg-royal-crimson/20 border-royal-crimson/40">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  Invalid recipient address. Please contact support.
                </AlertDescription>
              </Alert>
            )}
            
            {insufficientFunds && (
              <Alert variant="destructive" className="bg-royal-crimson/20 border-royal-crimson/40">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  Insufficient funds. You need at least {solAmount.toFixed(4)} SOL.
                </AlertDescription>
              </Alert>
            )}
          </div>
        </CardContent>
      </Card>
      
      <div className="mt-6">
        <Button 
          className="w-full glass-morphism border-white/10 hover:bg-white/10 text-white"
          onClick={connected ? handlePayment : onSubmit}
          disabled={isProcessing || (!connected && !isValidAddress) || (connected && insufficientFunds)}
        >
          {isProcessing ? (
            <div className="flex items-center">
              <Loader2 className="animate-spin h-4 w-4 mr-2" />
              Processing...
            </div>
          ) : connected ? (
            <>
              <ArrowRight size={16} className="mr-2" />
              Pay with Solana
            </>
          ) : (
            <>
              <Coins size={16} className="mr-2" />
              Connect Wallet
            </>
          )}
        </Button>
      </div>
    </>
  );
};

export default SolanaPaymentForm;
