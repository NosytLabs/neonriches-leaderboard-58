import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard, DollarSign, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useSound } from "@/hooks/sounds/use-sound";

interface PaymentModalProps {
  amount?: number;
  onSuccess?: (amount: number) => void;
  buttonText?: string;
  title?: string;
  description?: string;
  trigger?: React.ReactNode;
}

const PaymentModal: React.FC<PaymentModalProps> = ({
  amount = 100,
  onSuccess,
  buttonText = "Pay Now",
  title = "Complete Payment",
  description = "Enter your payment details to continue",
  trigger
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const { toast } = useToast();
  const { playSound } = useSound();

  const handlePay = async () => {
    setIsProcessing(true);
    playSound('click', 0.3);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
      playSound('success', 0.5);
      
      // Close the modal and call onSuccess after showing the success state
      setTimeout(() => {
        setIsOpen(false);
        setPaymentSuccess(false);
        if (onSuccess) onSuccess(amount);
      }, 1500);
    }, 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger ? (
          trigger
        ) : (
          <Button variant="royalGold">{buttonText}</Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] glass-morphism border-white/10">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            {description}
          </DialogDescription>
        </DialogHeader>
        
        {paymentSuccess ? (
          <div className="text-center space-y-4">
            <Check className="mx-auto h-12 w-12 text-green-500 animate-pulse" />
            <p className="text-lg font-semibold">Payment Successful!</p>
            <p className="text-white/70">Thank you for your purchase.</p>
          </div>
        ) : (
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="amount" className="text-right">
                Amount
              </Label>
              <Input
                type="number"
                id="amount"
                defaultValue={amount}
                className="col-span-3 glass-morphism border-white/10"
                disabled
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="card-number" className="text-right">
                Card number
              </Label>
              <Input
                id="card-number"
                placeholder="**** **** **** ****"
                className="col-span-3 glass-morphism border-white/10"
                disabled={isProcessing}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                placeholder="John Doe"
                className="col-span-3 glass-morphism border-white/10"
                disabled={isProcessing}
              />
            </div>
            <Button 
              onClick={handlePay}
              className="col-span-4 bg-gradient-to-r from-royal-purple to-royal-gold hover:opacity-90 text-white"
              disabled={isProcessing}
            >
              {isProcessing ? (
                <>
                  <span className="animate-spin mr-2">⚙️</span> Processing
                </>
              ) : (
                <>
                  <CreditCard className="mr-2 h-4 w-4" /> Pay Now
                </>
              )}
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
