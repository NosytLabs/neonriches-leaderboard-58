
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { wallet } from '@/services/walletService';
import { formatCurrency } from '@/utils/formatters';

interface SolanaPaymentFormProps {
  onSuccess?: (amount: number) => void;
  autoFocus?: boolean;
  className?: string;
}

const SolanaPaymentForm: React.FC<SolanaPaymentFormProps> = ({ 
  onSuccess,
  autoFocus = false,
  className
}) => {
  const { user } = useAuth();
  const [amount, setAmount] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numbers and a single decimal point
    const value = e.target.value;
    if (/^(\d+)?(\.\d{0,2})?$/.test(value) || value === '') {
      setAmount(value);
      setError(null);
    }
  };

  const handlePayment = async () => {
    if (!user) {
      setError('You must be logged in to make a deposit');
      return;
    }

    if (!amount || parseFloat(amount) <= 0) {
      setError('Please enter a valid amount');
      return;
    }

    setIsProcessing(true);
    setError(null);

    try {
      // Convert string to number for the payment
      const paymentAmount = parseFloat(amount);
      
      // Process payment through wallet service
      const result = await wallet.addFunds(user, paymentAmount, 'solana');

      if (result.success) {
        // Clear the form
        setAmount('');
        
        // Call success callback if provided
        if (onSuccess) {
          onSuccess(paymentAmount);
        }
      } else {
        setError(result.error || 'Payment failed');
      }
    } catch (err) {
      console.error('Payment error:', err);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleQuickAmount = (quickAmount: number) => {
    setAmount(quickAmount.toString());
    setError(null);
  };

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Deposit Funds</CardTitle>
        <CardDescription>
          Add funds to your wallet using Solana
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label htmlFor="amount" className="block text-sm font-medium mb-1">
            Amount to Deposit
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">$</span>
            </div>
            <Input
              id="amount"
              name="amount"
              type="text"
              autoFocus={autoFocus}
              placeholder="0.00"
              value={amount}
              onChange={handleAmountChange}
              className="pl-7"
            />
          </div>
          {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
        </div>

        <div className="grid grid-cols-3 gap-2">
          <Button 
            variant="outline" 
            type="button" 
            onClick={() => handleQuickAmount(5)}
            className="w-full"
          >
            $5
          </Button>
          <Button 
            variant="outline" 
            type="button" 
            onClick={() => handleQuickAmount(10)}
            className="w-full"
          >
            $10
          </Button>
          <Button 
            variant="outline" 
            type="button" 
            onClick={() => handleQuickAmount(25)}
            className="w-full"
          >
            $25
          </Button>
          <Button 
            variant="outline" 
            type="button" 
            onClick={() => handleQuickAmount(50)}
            className="w-full"
          >
            $50
          </Button>
          <Button 
            variant="outline" 
            type="button" 
            onClick={() => handleQuickAmount(100)}
            className="w-full"
          >
            $100
          </Button>
          <Button 
            variant="outline" 
            type="button" 
            onClick={() => handleQuickAmount(500)}
            className="w-full"
          >
            $500
          </Button>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Current balance: {formatCurrency(user?.walletBalance || 0)}
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={handlePayment} 
          disabled={isProcessing || !amount || parseFloat(amount) <= 0}
          className="w-full"
        >
          {isProcessing ? 'Processing...' : 'Deposit Funds'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SolanaPaymentForm;
