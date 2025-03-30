
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { DollarSign } from 'lucide-react';

interface PaymentModalProps {
  title: string;
  description: string;
  amount: number;
  onSuccess: () => void;
  buttonText?: string;
  buttonVariant?: 'royal' | 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  customIcon?: React.ReactNode;
}

const PaymentModal: React.FC<PaymentModalProps> = ({
  title,
  description,
  amount,
  onSuccess,
  buttonText = 'Confirm Payment',
  buttonVariant = 'royal',
  customIcon
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const handlePayment = async () => {
    setIsProcessing(true);
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Payment success
      setIsOpen(false);
      onSuccess();
      
      toast({
        title: "Payment Successful",
        description: `You have successfully paid $${amount.toFixed(2)}`
      });
      
    } catch (error) {
      toast({
        title: "Payment Failed",
        description: "There was an error processing your payment.",
        variant: "destructive"
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <>
      <Button 
        onClick={() => setIsOpen(true)}
        variant={buttonVariant as any}
      >
        {customIcon || <DollarSign className="mr-2 h-4 w-4" />}
        {buttonText || `Pay $${amount.toFixed(2)}`}
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="glass-morphism border-royal-gold/20">
          <DialogHeader>
            <DialogTitle className="text-xl">{title}</DialogTitle>
            <DialogDescription>
              {description}
            </DialogDescription>
          </DialogHeader>

          <div className="my-4 p-4 bg-black/20 rounded-md flex items-center justify-between">
            <span>Amount:</span>
            <span className="text-xl font-bold">${amount.toFixed(2)}</span>
          </div>

          <div className="flex justify-end space-x-2">
            <Button 
              variant="outline" 
              onClick={() => setIsOpen(false)}
              disabled={isProcessing}
            >
              Cancel
            </Button>
            <Button 
              variant="royal"
              onClick={handlePayment}
              disabled={isProcessing}
              className="min-w-[120px]"
            >
              {isProcessing ? (
                <>
                  <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-t-transparent"></div>
                  Processing...
                </>
              ) : (
                buttonText
              )}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PaymentModal;
