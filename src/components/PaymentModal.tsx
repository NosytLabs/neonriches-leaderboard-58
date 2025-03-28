
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogHeader, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { createCheckoutSession } from '@/services/stripeService';
import { Coins, CreditCard } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import CreditCardForm from './payment/CreditCardForm';
import CryptoForm from './payment/CryptoForm';
import ProcessingButton from './payment/ProcessingButton';

export interface PaymentModalProps {
  title: string;
  description: string;
  amount: number;
  onSuccess: () => Promise<void>;
  onCancel?: () => void;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({
  title,
  description,
  amount,
  onSuccess,
  onCancel,
  open,
  onOpenChange
}) => {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'crypto'>('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const handleCancelPayment = () => {
    if (onCancel) {
      onCancel();
    }
    onOpenChange(false);
  };

  const handleCheckout = async () => {
    setIsProcessing(true);
    
    try {
      // Create checkout session
      const response = await createCheckoutSession(
        amount,
        title,
        'payment',
      );
      
      if (response.error) {
        toast({
          title: "Payment Error",
          description: response.error,
          variant: "destructive",
        });
        setIsProcessing(false);
        return;
      }
      
      // Simulate successful payment processing
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock successful payment
      toast({
        title: "Payment Successful",
        description: `You have spent $${amount.toFixed(2)} to ${title}!`,
      });
      
      // Execute success callback
      await onSuccess();
      onOpenChange(false);
    } catch (error) {
      console.error('Payment error:', error);
      toast({
        title: "Payment Failed",
        description: "There was an error processing your payment.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleSubmitCard = async (cardData: any) => {
    toast({
      title: "Processing Payment",
      description: "Please wait while we process your payment...",
    });
    await handleCheckout();
  };

  const handleSubmitCrypto = async (cryptoData: any) => {
    toast({
      title: "Processing Crypto Payment",
      description: "Please wait while we process your crypto payment...",
    });
    await handleCheckout();
  };

  return (
    <Dialog open={open} onOpenChange={!isProcessing ? onOpenChange : undefined}>
      <DialogContent className="glass-morphism border-white/10 sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            {description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4">
          <div className="mb-3 p-4 rounded-md bg-black/20 flex items-center justify-between">
            <div className="font-bold">Total:</div>
            <div className="text-xl font-bold text-royal-gold">${amount.toFixed(2)}</div>
          </div>
          
          <Tabs defaultValue="card" value={paymentMethod} onValueChange={(v) => setPaymentMethod(v as 'card' | 'crypto')}>
            <TabsList className="grid grid-cols-2 glass-morphism">
              <TabsTrigger value="card">Credit Card</TabsTrigger>
              <TabsTrigger value="crypto">Crypto</TabsTrigger>
            </TabsList>
            
            <TabsContent value="card">
              <CreditCardForm onSubmit={handleSubmitCard} isProcessing={isProcessing} />
            </TabsContent>
            
            <TabsContent value="crypto">
              <CryptoForm onSubmit={handleSubmitCrypto} isProcessing={isProcessing} amount={amount} />
            </TabsContent>
          </Tabs>
        </div>
        
        <DialogFooter className="flex flex-col sm:flex-row gap-2 sm:justify-between">
          <Button 
            variant="outline" 
            onClick={handleCancelPayment}
            disabled={isProcessing}
            className="glass-morphism hover:bg-white/10"
          >
            Cancel
          </Button>
          
          <ProcessingButton 
            isProcessing={isProcessing}
            onClick={paymentMethod === 'card' ? handleSubmitCard : handleSubmitCrypto}
            className="bg-royal-gold hover:bg-royal-gold/90 text-black"
            icon={paymentMethod === 'card' ? <CreditCard size={16} /> : <Coins size={16} />}
          >
            Pay ${amount.toFixed(2)}
          </ProcessingButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
