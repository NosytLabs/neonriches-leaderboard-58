
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { CreditCard, CheckCircle } from 'lucide-react';

interface PaymentModalProps {
  amount: number;
  onSuccess: (amount: number) => void;
  trigger: React.ReactNode;
  title?: string;
  description?: string;
}

const PaymentModal = ({ 
  amount, 
  onSuccess, 
  trigger, 
  title = "Complete Your Payment",
  description = "Enter your payment details below to complete your transaction."
}: PaymentModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [name, setName] = useState('');
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  const formatCardNumber = (input: string) => {
    const numbers = input.replace(/\D/g, '');
    const formatted = numbers.replace(/(\d{4})/g, '$1 ').trim();
    return formatted.slice(0, 19); // Max of 16 digits + 3 spaces
  };

  const formatExpiry = (input: string) => {
    const numbers = input.replace(/\D/g, '');
    if (numbers.length >= 3) {
      return `${numbers.slice(0, 2)}/${numbers.slice(2, 4)}`;
    }
    return numbers;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setProcessing(false);
      setSuccess(true);
      
      // Close the modal and trigger success callback after showing success state
      setTimeout(() => {
        setIsOpen(false);
        setSuccess(false);
        setCardNumber('');
        setExpiry('');
        setCvc('');
        setName('');
        
        // Only call onSuccess if it exists
        if (onSuccess) {
          onSuccess(amount);
        }
      }, 1500);
    }, 2000);
  };

  return (
    <>
      <div onClick={() => setIsOpen(true)}>
        {trigger}
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="glass-morphism border-white/10 text-white sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription className="text-white/70">
              {description}
            </DialogDescription>
          </DialogHeader>
          
          {!success ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="amount">Amount</Label>
                <div className="glass-morphism border-white/10 p-2 rounded">
                  <span className="text-xl font-bold">${amount.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="card-name">Name on Card</Label>
                <Input
                  id="card-name"
                  placeholder="Reginald Von Spendthrift"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="glass-morphism border-white/10"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="card-number">Card Number</Label>
                <div className="relative">
                  <Input
                    id="card-number"
                    placeholder="4111 1111 1111 1111"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                    className="glass-morphism border-white/10 pl-10"
                    pattern="[\d\s]{16,19}"
                    required
                  />
                  <CreditCard className="absolute left-3 top-2.5 h-4 w-4 text-white/50" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry">Expiry</Label>
                  <Input
                    id="expiry"
                    placeholder="MM/YY"
                    value={expiry}
                    onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                    className="glass-morphism border-white/10"
                    maxLength={5}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvc">CVC</Label>
                  <Input
                    id="cvc"
                    placeholder="123"
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value.replace(/\D/g, '').slice(0, 3))}
                    className="glass-morphism border-white/10"
                    maxLength={3}
                    required
                  />
                </div>
              </div>
              
              <DialogFooter className="pt-2">
                <Button 
                  type="submit" 
                  disabled={processing}
                  className="w-full bg-gradient-to-r from-royal-crimson via-royal-gold to-royal-navy hover:opacity-90"
                >
                  {processing ? "Processing..." : `Pay $${amount.toFixed(2)}`}
                </Button>
              </DialogFooter>
            </form>
          ) : (
            <div className="flex flex-col items-center justify-center py-6">
              <div className="bg-green-500/20 p-3 rounded-full mb-4">
                <CheckCircle className="h-12 w-12 text-green-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Payment Successful!</h3>
              <p className="text-white/70 text-center mb-4">
                Thank you for your payment of ${amount.toFixed(2)}. Your royal status has been elevated!
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PaymentModal;
