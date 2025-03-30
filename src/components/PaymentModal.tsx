import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreditCard, ChevronsUpDown, Copy, ExternalLink, Check, Wallet, DollarSign, ThumbsUp, Coins } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { PaymentModalProps } from "./auth/types";
import useNotificationSounds from '@/hooks/use-notification-sounds';
import SolanaPaymentForm from './payment/SolanaPaymentForm';

const PaymentModal: React.FC<PaymentModalProps> = ({
  amount,
  onSuccess,
  title = "Contribute to Rise in Rank",
  description = "Choose your preferred payment method to increase your rank immediately.",
  trigger,
  open,
  onOpenChange,
  onCancel
}) => {
  const { toast } = useToast();
  const { playSound } = useNotificationSounds();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>('card');

  const handlePay = async () => {
    setIsProcessing(true);
    playSound('click', 0.3);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
      playSound('success', 0.5);
      
      toast({
        title: "Payment Successful",
        description: `You have successfully contributed $${amount.toFixed(2)}!`,
      });
      
      // Notify parent component about success
      setTimeout(() => {
        onSuccess(amount);
        if (onOpenChange) {
          onOpenChange(false);
        }
        
        // Reset state after modal is closed
        setTimeout(() => {
          setPaymentSuccess(false);
        }, 500);
      }, 1500);
    }, 2000);
  };
  
  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
    if (onOpenChange) {
      onOpenChange(false);
    }
    
    toast({
      title: "Payment Cancelled",
      description: "Your payment has been cancelled.",
    });
  };
  
  const handleCardPayment = async () => {
    // Simulate card payment
    setSelectedPaymentMethod('card');
    handlePay();
  };
  
  const handleCryptoPayment = async () => {
    // Simulate crypto payment
    setSelectedPaymentMethod('crypto');
    handlePay();
  };
  
  const handleWalletPayment = async () => {
    // Simulate wallet payment
    setSelectedPaymentMethod('wallet');
    handlePay();
  };
  
  const handleSolanaPayment = async () => {
    // This will be handled by the SolanaPaymentForm
    setIsProcessing(true);
    
    // The actual payment is processed by the form component
    // This just handles the success state
    setPaymentSuccess(true);
    playSound('success', 0.5);
    
    toast({
      title: "Solana Payment Successful",
      description: `You have successfully contributed $${amount.toFixed(2)} via Solana!`,
    });
    
    // Notify parent component about success
    setTimeout(() => {
      onSuccess(amount);
      if (onOpenChange) {
        onOpenChange(false);
      }
      
      // Reset state after modal is closed
      setTimeout(() => {
        setPaymentSuccess(false);
        setIsProcessing(false);
      }, 500);
    }, 1500);
  };

  const renderSuccess = () => (
    <div className="flex flex-col items-center justify-center py-6">
      <div className="h-12 w-12 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
        <Check className="h-6 w-6 text-green-500" />
      </div>
      <h3 className="text-xl font-bold mb-2">Payment Successful!</h3>
      <p className="text-center text-muted-foreground mb-4">
        Your rank will be updated immediately.
      </p>
      <Button onClick={() => {
        if (onOpenChange) onOpenChange(false);
        setTimeout(() => setPaymentSuccess(false), 500);
      }} className="w-full">
        Close
      </Button>
    </div>
  );

  const renderPaymentMethods = () => (
    <Tabs defaultValue="card" className="w-full" onValueChange={setSelectedPaymentMethod}>
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="card">
          <CreditCard className="h-4 w-4 mr-2" />
          Card
        </TabsTrigger>
        <TabsTrigger value="crypto">
          <ExternalLink className="h-4 w-4 mr-2" />
          Crypto
        </TabsTrigger>
        <TabsTrigger value="wallet">
          <Wallet className="h-4 w-4 mr-2" />
          Wallet
        </TabsTrigger>
        <TabsTrigger value="solana">
          <Coins className="h-4 w-4 mr-2" />
          Solana
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="card" className="mt-4 space-y-4">
        <div className="space-y-4">
          <div className="glass-morphism border-white/10 p-4 rounded-md">
            <div className="flex items-center mb-2">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-8 h-8 rounded-md flex items-center justify-center mr-2">
                <CreditCard className="h-4 w-4 text-white" />
              </div>
              <div>
                <div className="text-sm font-medium">Credit/Debit Card</div>
                <div className="text-xs text-muted-foreground">Visa, Mastercard, Amex</div>
              </div>
            </div>
            <div className="text-sm">
              <span className="font-medium">Amount:</span> ${amount.toFixed(2)}
            </div>
          </div>
          
          <Button 
            onClick={handleCardPayment}
            disabled={isProcessing} 
            className={cn("w-full bg-gradient-to-r from-royal-purple to-royal-gold", 
              isProcessing ? "opacity-80" : ""
            )}
          >
            {isProcessing ? (
              <>
                <ChevronsUpDown className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <DollarSign className="mr-2 h-4 w-4" />
                Pay ${amount.toFixed(2)}
              </>
            )}
          </Button>
        </div>
      </TabsContent>
      
      <TabsContent value="crypto" className="mt-4 space-y-4">
        <div className="space-y-4">
          <div className="glass-morphism border-white/10 p-4 rounded-md">
            <div className="flex items-center mb-2">
              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 w-8 h-8 rounded-md flex items-center justify-center mr-2">
                <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 16V8M9 11H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-medium">Crypto Payment</div>
                <div className="text-xs text-muted-foreground">BTC, ETH, SOL, USDC</div>
              </div>
            </div>
            <div className="text-sm flex justify-between items-center p-2 bg-white/5 rounded-md">
              <span>bc1q...8kdz</span>
              <Button variant="outline" size="sm" className="h-7 text-xs">
                <Copy className="h-3 w-3 mr-1" />
                Copy
              </Button>
            </div>
            <div className="text-sm mt-2">
              <span className="font-medium">Amount:</span> ${amount.toFixed(2)} (≈0.00015 BTC)
            </div>
          </div>
          
          <Button 
            onClick={handleCryptoPayment}
            disabled={isProcessing} 
            className={cn("w-full bg-gradient-to-r from-yellow-600 to-orange-600", 
              isProcessing ? "opacity-80" : ""
            )}
          >
            {isProcessing ? (
              <>
                <ChevronsUpDown className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <DollarSign className="mr-2 h-4 w-4" />
                Pay ${amount.toFixed(2)}
              </>
            )}
          </Button>
        </div>
      </TabsContent>
      
      <TabsContent value="wallet" className="mt-4 space-y-4">
        <div className="space-y-4">
          <div className="glass-morphism border-white/10 p-4 rounded-md">
            <div className="flex items-center mb-2">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 w-8 h-8 rounded-md flex items-center justify-center mr-2">
                <Wallet className="h-4 w-4 text-white" />
              </div>
              <div>
                <div className="text-sm font-medium">P2W Wallet</div>
                <div className="text-xs text-muted-foreground">Balance: $145.25</div>
              </div>
            </div>
            <div className="text-sm">
              <span className="font-medium">Amount:</span> ${amount.toFixed(2)}
            </div>
          </div>
          
          <Button 
            onClick={handleWalletPayment}
            disabled={isProcessing} 
            className={cn("w-full bg-gradient-to-r from-green-600 to-emerald-600", 
              isProcessing ? "opacity-80" : ""
            )}
          >
            {isProcessing ? (
              <>
                <ChevronsUpDown className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <DollarSign className="mr-2 h-4 w-4" />
                Pay ${amount.toFixed(2)}
              </>
            )}
          </Button>
        </div>
      </TabsContent>
      
      <TabsContent value="solana" className="mt-4 space-y-4">
        <SolanaPaymentForm 
          amount={amount} 
          isProcessing={isProcessing}
          onSubmit={handleSolanaPayment}
        />
      </TabsContent>
    </Tabs>
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent className="glass-morphism border-white/10 md:max-w-md">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        {paymentSuccess ? renderSuccess() : renderPaymentMethods()}
        
        {!paymentSuccess && (
          <div className="flex justify-end mt-2">
            <Button variant="outline" className="text-xs" onClick={handleCancel}>
              Cancel
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
