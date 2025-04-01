
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Wallet, Trophy, Loader2, ArrowRight, AlertCircle } from 'lucide-react';
import { ensureStringId } from '@/utils/typeConverters';
import { UserProfile } from '@/types/user-consolidated';

interface SolanaPaymentFormProps {
  amount: number;
  onSuccess?: (transactionId: string) => void;
  onCancel?: () => void;
  user?: UserProfile | null;
  productName?: string;
  showCancel?: boolean;
  processing?: boolean;
}

const SolanaPaymentForm: React.FC<SolanaPaymentFormProps> = ({
  amount,
  onSuccess,
  onCancel,
  user,
  productName = "Royal Status",
  showCancel = true,
  processing = false,
}) => {
  const { toast } = useToast();
  const [walletAddress, setWalletAddress] = useState("");
  const [isProcessing, setIsProcessing] = useState(processing);
  const [transactionId, setTransactionId] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!walletAddress || walletAddress.length < 30) {
      toast({
        title: "Invalid Wallet Address",
        description: "Please enter a valid Solana wallet address",
        variant: "destructive",
      });
      return;
    }
    
    setIsProcessing(true);
    
    try {
      // Simulate API call for Solana payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Generate a fake transaction ID
      const mockTxId = `SOLANA${Date.now().toString(36).toUpperCase()}`;
      setTransactionId(mockTxId);
      
      // Log payment details
      console.log("Payment processed:", {
        amount,
        walletAddress,
        productName,
        userId: user ? ensureStringId(user.id) : 'guest',
        timestamp: new Date().toISOString(),
        transactionId: mockTxId
      });
      
      toast({
        title: "Payment Successful!",
        description: `Your payment of $${amount} has been processed.`,
      });
      
      // Call success callback with transaction ID
      if (onSuccess) {
        onSuccess(mockTxId);
      }
    } catch (err) {
      console.error("Payment error:", err);
      
      // Use a type assertion to handle the error properly
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
      
      toast({
        title: "Payment Failed",
        description: errorMessage || "There was an error processing your payment.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleProcessTransaction = async () => {
    setIsProcessing(true);
    
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Define a result type that matches what we expect
      const result: { success: boolean; transactionId?: string; error?: string } = { 
        success: true, 
        transactionId: `SOL${Date.now().toString(36).toUpperCase()}`
      };
      
      if (result.success) {
        toast({
          title: "Transaction Complete",
          description: `Your payment for ${productName} has been processed!`,
        });
        
        if (onSuccess && result.transactionId) {
          onSuccess(result.transactionId);
        }
      } else {
        throw new Error(result.error || "Transaction failed");
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
      toast({
        title: "Transaction Failed",
        description: errorMessage || "Could not process your transaction",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Wallet className="h-5 w-5" />
          Solana Payment
        </CardTitle>
        <CardDescription>
          Pay with SOL to acquire {productName}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="rounded-md bg-amber-500/10 border border-amber-500/30 p-3 mb-4">
            <div className="flex">
              <AlertCircle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0" />
              <div className="flex-1 text-sm">
                <p className="font-medium text-amber-500">Important</p>
                <p className="text-muted-foreground">
                  This is a simulated payment for demonstration purposes. No real transactions will be processed.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <Label htmlFor="amount">Amount</Label>
            <div className="relative">
              <Input
                id="amount"
                value={`$${amount.toFixed(2)}`}
                disabled
                className="pl-7"
              />
              <div className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground">
                $
              </div>
            </div>
          </div>
          
          <div>
            <Label htmlFor="wallet">Solana Wallet Address</Label>
            <Input
              id="wallet"
              placeholder="Enter your Solana wallet address"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              required
              disabled={isProcessing}
            />
          </div>
          
          <div className="flex gap-2 pt-2">
            <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/30">
              <Trophy className="h-3 w-3 mr-1" />
              {productName}
            </Badge>
            
            {user && (
              <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/30">
                User: {user.displayName || user.username}
              </Badge>
            )}
          </div>
          
          <div className="flex justify-end gap-2 pt-2">
            {showCancel && (
              <Button 
                type="button" 
                variant="outline" 
                onClick={onCancel}
                disabled={isProcessing}
              >
                Cancel
              </Button>
            )}
            
            <Button 
              type="submit" 
              disabled={isProcessing || !walletAddress}
              className="relative"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  Pay with Solana
                  <ArrowRight className="h-4 w-4 ml-2" />
                </>
              )}
            </Button>
          </div>
        </form>
      </CardContent>
      
      {transactionId && (
        <CardFooter className="flex flex-col items-start border-t pt-4">
          <p className="text-sm text-muted-foreground mb-1">Transaction ID:</p>
          <p className="font-mono text-xs bg-muted p-2 rounded w-full overflow-x-auto">
            {transactionId}
          </p>
        </CardFooter>
      )}
    </Card>
  );
};

export default SolanaPaymentForm;
