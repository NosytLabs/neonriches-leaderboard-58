
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { DollarSign } from 'lucide-react';
import CreditCardForm from '@/components/payment/CreditCardForm';
import CryptoForm from '@/components/payment/CryptoForm';

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
  const [isProcessing, setIsProcessing] = useState(false);
  const [open, setOpen] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);

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

  const handleSuccess = () => {
    toast({
      title: "Payment Successful!",
      description: `You've contributed $${amount} to your status. Watch your rank soar!`,
    });
    
    if (onSuccess) {
      onSuccess(amount);
    }
    
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

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || defaultTrigger}
      </DialogTrigger>
      <DialogContent className="glass-morphism border-white/10 sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        
        <Tabs defaultValue="card" className="w-full">
          <TabsList className="grid grid-cols-2 glass-morphism border-white/10 mb-4">
            <TabsTrigger value="card">Credit Card</TabsTrigger>
            <TabsTrigger value="crypto">Crypto</TabsTrigger>
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
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
