
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { CreditCard } from 'lucide-react';

interface CreditCardFormProps {
  amount: number;
  isProcessing: boolean;
  onSubmit: () => void;
}

const CreditCardForm = ({ amount, isProcessing, onSubmit }: CreditCardFormProps) => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  const formatExpiry = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    
    if (v.length >= 2) {
      return `${v.substring(0, 2)}/${v.substring(2, 4)}`;
    }
    
    return v;
  };

  return (
    <>
      <Card className="glass-morphism border-white/10">
        <CardContent className="pt-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="card-number">Card Number</Label>
            <Input 
              id="card-number" 
              placeholder="4242 4242 4242 4242" 
              className="glass-morphism border-white/10"
              value={cardNumber}
              onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
              maxLength={19}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="card-name">Name on Card</Label>
            <Input 
              id="card-name" 
              placeholder="John Doe" 
              className="glass-morphism border-white/10"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="expiry">Expiry Date</Label>
              <Input 
                id="expiry" 
                placeholder="MM/YY" 
                className="glass-morphism border-white/10"
                value={expiry}
                onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                maxLength={5}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="cvc">CVC</Label>
              <Input 
                id="cvc" 
                placeholder="123" 
                className="glass-morphism border-white/10"
                value={cvc}
                onChange={(e) => setCvc(e.target.value.replace(/[^0-9]/g, ''))}
                maxLength={3}
              />
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="mt-6">
        <Button 
          className="w-full bg-gradient-to-r from-team-red via-team-green to-team-blue hover:opacity-90 text-white"
          onClick={onSubmit}
          disabled={isProcessing}
        >
          {isProcessing ? (
            <div className="flex items-center">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Processing...
            </div>
          ) : (
            <>
              <CreditCard size={16} className="mr-2" />
              Pay ${amount}
            </>
          )}
        </Button>
      </div>
    </>
  );
};

export default CreditCardForm;
