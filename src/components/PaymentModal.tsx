
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { DollarSign, Wallet } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { spendFromWallet } from '@/services/walletService';
import CreditCardForm from '@/components/payment/CreditCardForm';
import CryptoForm from '@/components/payment/CryptoForm';
import SatiricalPaymentSuccess from '@/components/payment/SatiricalPaymentSuccess';

interface PaymentModalProps {
  title?: string;
  description?: string;
  amount: number;
  onSuccess?: (amount: number) => void;
  trigger?: React.ReactNode;
}

const PaymentModal: React.FC<PaymentModalProps> = ({
  title = "Contribute to Your Status",
  description = "Your rank is directly proportional to your spending. $1 = 1 unit of rank.",
  amount,
  onSuccess,
  trigger
}) => {
  const { toast } = useToast();
  const { user } = useAuth();
  const [isProcessing, setIsProcessing] = useState(false);
  const [open, setOpen] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const [showSuccessScreen, setShowSuccessScreen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'crypto' | 'wallet'>('card');
  
  // Determine if user has enough wallet balance
  const hasWalletBalance = user?.walletBalance && user.walletBalance >= amount;

  const handleCreditCardPayment = () => {
    setIsProcessing(true);
    
    // In a real app, this would call a payment processor API
    setTimeout(() => {
      setIsProcessing(false);
      handleSuccess();
    }, 2000);
  };

  const handleCryptoPayment = () => {
    if (!walletConnected) {
      // Simulate connecting wallet
      setWalletConnected(true);
      return;
    }

    setIsProcessing(true);
    
    // In a real app, this would initiate a blockchain transaction
    setTimeout(() => {
      setIsProcessing(false);
      handleSuccess();
    }, 2000);
  };
  
  const handleWalletPayment = async () => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "You must be logged in to use your wallet.",
        variant: "destructive"
      });
      return;
    }
    
    if (!hasWalletBalance) {
      toast({
        title: "Insufficient Funds",
        description: "Your royal purse doesn't have enough gold for this transaction.",
        variant: "destructive"
      });
      return;
    }
    
    setIsProcessing(true);
    
    try {
      const success = await spendFromWallet(
        user,
        amount,
        'spend',
        title,
        { description }
      );
      
      if (success) {
        setIsProcessing(false);
        handleSuccess();
      } else {
        throw new Error("Transaction failed");
      }
    } catch (error) {
      setIsProcessing(false);
      toast({
        title: "Payment Failed",
        description: error.message || "Your payment could not be processed.",
        variant: "destructive"
      });
    }
  };

  const handleSuccess = () => {
    // Show success screen instead of just closing
    setShowSuccessScreen(true);
    
    if (onSuccess) {
      onSuccess(amount);
    }
  };
  
  const handleCloseSuccess = () => {
    setShowSuccessScreen(false);
    setOpen(false);
    
    // Reset form state
    setWalletConnected(false);
  };

  const defaultTrigger = (
    <Button className="bg-gradient-to-r from-team-red via-team-green to-team-blue hover:opacity-90 text-white">
      <DollarSign size={16} className="mr-2" />
      Contribute ${amount}
    </Button>
  );
  
  const getSatiricalDescription = () => {
    const descriptions = [
      "Every dollar spent is another jewel in your digital crown!",
      "Remember: in this kingdom, your worth is measured by your credit card limit.",
      "Nobility wasn't earned in the past either - it was just bought differently!",
      "Why earn respect when you can simply purchase status?",
      "Skip the character development, go straight to the leaderboard!"
    ];
    
    return descriptions[Math.floor(Math.random() * descriptions.length)];
  };

  // Set wallet as default payment method if available
  useEffect(() => {
    if (hasWalletBalance) {
      setPaymentMethod('wallet');
    }
  }, [hasWalletBalance]);

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          {trigger || defaultTrigger}
        </DialogTrigger>
        <DialogContent className="glass-morphism border-white/10 sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>
              {description}
              <p className="mt-2 text-white/60 italic text-sm">{getSatiricalDescription()}</p>
            </DialogDescription>
          </DialogHeader>
          
          <Tabs defaultValue={paymentMethod} value={paymentMethod} onValueChange={(value) => setPaymentMethod(value as 'card' | 'crypto' | 'wallet')}>
            <TabsList className="grid grid-cols-3 glass-morphism border-white/10 mb-4">
              <TabsTrigger value="card">Credit Card</TabsTrigger>
              <TabsTrigger value="crypto">Crypto</TabsTrigger>
              <TabsTrigger value="wallet" disabled={!user}>Wallet</TabsTrigger>
            </TabsList>
            
            <TabsContent value="card">
              <CreditCardForm 
                amount={amount}
                isProcessing={isProcessing}
                onSubmit={handleCreditCardPayment}
              />
            </TabsContent>
            
            <TabsContent value="crypto">
              <CryptoForm 
                amount={amount}
                isProcessing={isProcessing}
                walletConnected={walletConnected}
                onSubmit={handleCryptoPayment}
              />
            </TabsContent>
            
            <TabsContent value="wallet">
              <div className="space-y-6">
                <div className="glass-morphism border-white/10 rounded-lg p-6 space-y-4">
                  <div className="flex items-center justify-center">
                    <Wallet size={48} className="text-royal-gold" />
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-lg font-medium mb-1">Royal Purse Balance</h3>
                    <p className="text-2xl font-bold text-royal-gold">${user?.walletBalance || 0}</p>
                    {!hasWalletBalance && (
                      <p className="text-royal-crimson text-sm mt-2">
                        Insufficient funds for this transaction.
                      </p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/70">Transaction Amount:</span>
                      <span className="font-medium">${amount}</span>
                    </div>
                    
                    <div className="h-px bg-white/10 my-1"></div>
                    
                    <div className="flex justify-between text-sm">
                      <span className="text-white/70">Remaining Balance:</span>
                      <span className="font-medium">
                        ${((user?.walletBalance || 0) - amount).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
                
                <Button 
                  onClick={handleWalletPayment} 
                  disabled={isProcessing || !hasWalletBalance}
                  className="w-full bg-gradient-to-r from-royal-crimson via-royal-gold to-royal-navy"
                >
                  {isProcessing ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Processing...
                    </div>
                  ) : (
                    <>
                      <Wallet size={16} className="mr-2" />
                      Pay from Royal Purse
                    </>
                  )}
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
      
      {showSuccessScreen && (
        <SatiricalPaymentSuccess 
          amount={amount} 
          onClose={handleCloseSuccess} 
        />
      )}
    </>
  );
};

export default PaymentModal;
