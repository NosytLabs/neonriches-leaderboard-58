
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { DollarSign, Wallet } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { spendFromWallet } from '@/services/walletService';
import { createCheckoutSession } from '@/services/stripeService';
import { toast } from '@/hooks/use-toast';

interface PaymentModalProps {
  title?: string;
  description?: string;
  amount: number;
  onSuccess?: (amount: number) => void;
  trigger?: React.ReactNode;
  featureType?: 'wallet' | 'boost' | 'cosmetic' | 'general';
  productId?: string;
}

const PaymentModal: React.FC<PaymentModalProps> = ({
  title = "Contribute to Your Status",
  description = "Your rank is directly proportional to your spending. $1 = 1 unit of rank.",
  amount,
  onSuccess,
  trigger,
  featureType = 'general',
  productId
}) => {
  const { user } = useAuth();
  const [isProcessing, setIsProcessing] = useState(false);
  const [open, setOpen] = useState(false);
  
  // Determine if user has enough wallet balance
  const hasWalletBalance = user?.walletBalance && user.walletBalance >= amount;

  const handleStripePayment = async () => {
    setIsProcessing(true);
    
    try {
      // Create a Stripe checkout session
      const checkoutData = await createCheckoutSession(
        amount,
        title,
        featureType,
        productId
      );
      
      if (!checkoutData?.url) {
        throw new Error("Failed to create checkout session");
      }
      
      // Close the modal before redirecting
      setOpen(false);
      
      // Redirect to Stripe checkout
      window.location.href = checkoutData.url;
      
      // Since we're redirecting, we won't be able to call onSuccess here
      // It will need to be handled when the user returns from Stripe
    } catch (error) {
      console.error('Error processing payment:', error);
      toast({
        title: "Payment Error",
        description: "Could not process your payment. Please try again.",
        variant: "destructive"
      });
      setIsProcessing(false);
    }
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
        setOpen(false);
        
        if (onSuccess) {
          onSuccess(amount);
        }
        
        toast({
          title: "Payment Successful",
          description: `You've successfully contributed $${amount}.`,
        });
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

  const defaultTrigger = (
    <Button className="bg-gradient-to-r from-team-red via-team-green to-team-blue hover:opacity-90 text-white">
      <DollarSign size={16} className="mr-2" />
      Contribute ${amount}
    </Button>
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || defaultTrigger}
      </DialogTrigger>
      <DialogContent className="glass-morphism border-white/10 sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            {description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          <Button 
            className="w-full bg-gradient-to-r from-royal-crimson via-royal-gold to-royal-navy hover:opacity-90"
            onClick={handleStripePayment}
            disabled={isProcessing}
          >
            {isProcessing ? (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Processing...
              </div>
            ) : (
              <>
                <DollarSign className="h-4 w-4 mr-2" />
                Pay with Card or Crypto
              </>
            )}
          </Button>
          
          {user && hasWalletBalance && (
            <Button 
              variant="outline" 
              className="w-full glass-morphism border-white/10 hover:bg-white/10"
              onClick={handleWalletPayment}
              disabled={isProcessing}
            >
              <Wallet className="h-4 w-4 mr-2" />
              Use Wallet Balance (${user.walletBalance.toFixed(2)})
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
