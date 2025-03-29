
import React, { useState } from 'react';
import { Shell } from '@/components/ui/shell';
import { Helmet } from 'react-helmet-async';
import { HeadingText } from '@/components/ui/heading-text';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { CreditCard, DollarSign, Check, Info, Shield, Lock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/auth';
import { motion } from 'framer-motion';

const PayWithFiat: React.FC = () => {
  const [amount, setAmount] = useState<number>(10);
  const [cardNumber, setCardNumber] = useState<string>('');
  const [expiry, setExpiry] = useState<string>('');
  const [cvc, setCvc] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const { toast } = useToast();
  const { user } = useAuth();

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value) && value > 0) {
      setAmount(value);
    }
  };

  const handlePresetAmount = (value: number) => {
    setAmount(value);
  };

  const handlePayment = () => {
    if (!cardNumber || !expiry || !cvc || !name) {
      toast({
        title: "Incomplete Payment Information",
        description: "Please fill in all required payment details.",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      toast({
        title: "Payment Successful!",
        description: `You've contributed $${amount.toFixed(2)} to your royal treasury.`,
        variant: "default",
      });
      setIsProcessing(false);
      
      // Would update user's balance here in a real app
    }, 2000);
  };

  return (
    <Shell>
      <Helmet>
        <title>Pay With Fiat | SpendThrone</title>
        <meta name="description" content="Enhance your royal status using traditional currency on SpendThrone." />
      </Helmet>
      
      <HeadingText
        title="Royal Treasury"
        description="Enhance your status with traditional currency contributions"
        withIcon
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="glass-morphism border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-royal-gold" />
                Select Contribution Amount
              </CardTitle>
              <CardDescription>
                Choose how much to contribute to your royal status
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-2">
                  {[5, 10, 25, 50, 100, 200].map((value) => (
                    <Button
                      key={value}
                      variant={amount === value ? "default" : "outline"}
                      className={amount === value ? "bg-royal-gold text-black" : "border-white/20"}
                      onClick={() => handlePresetAmount(value)}
                    >
                      ${value}
                    </Button>
                  ))}
                </div>
                
                <div className="flex items-center">
                  <DollarSign className="h-5 w-5 mr-2 text-white/70" />
                  <Input
                    type="number"
                    value={amount}
                    onChange={handleAmountChange}
                    className="glass-morphism border-white/10"
                    min="1"
                    step="1"
                  />
                </div>
                
                <div className="p-3 bg-white/5 border border-white/10 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="text-white/70">Contribution</span>
                    <span>${amount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white/70">Processing Fee</span>
                    <span>$0.00</span>
                  </div>
                  <Separator className="my-2 bg-white/10" />
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span className="text-royal-gold">${amount.toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-white/60">
                  <Info className="h-4 w-4" />
                  <p>Your contribution directly affects your position on the leaderboard.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="glass-morphism border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-royal-gold" />
                Payment Details
              </CardTitle>
              <CardDescription>
                Enter your credit card information securely
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-1">Cardholder Name</label>
                  <Input
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="glass-morphism border-white/10"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Card Number</label>
                  <Input
                    placeholder="•••• •••• •••• ••••"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className="glass-morphism border-white/10"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-1">Expiry Date</label>
                    <Input
                      placeholder="MM/YY"
                      value={expiry}
                      onChange={(e) => setExpiry(e.target.value)}
                      className="glass-morphism border-white/10"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">CVC</label>
                    <Input
                      placeholder="•••"
                      value={cvc}
                      onChange={(e) => setCvc(e.target.value)}
                      className="glass-morphism border-white/10"
                    />
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-white/60">
                  <Lock className="h-4 w-4" />
                  <p>Your payment information is encrypted and secure</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full bg-royal-gold text-black hover:bg-royal-gold/90" 
                onClick={handlePayment}
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <>
                    <div className="h-4 w-4 border-2 border-black border-t-transparent rounded-full animate-spin mr-2"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <Check className="h-4 w-4 mr-2" />
                    Complete Payment
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
          
          <div className="mt-4 flex items-center justify-center gap-4 p-3 glass-morphism border-white/10 rounded-lg">
            <Shield className="h-5 w-5 text-royal-gold" />
            <span className="text-sm text-white/70">Secured by Royal Payment Processing</span>
          </div>
        </motion.div>
      </div>
    </Shell>
  );
};

export default PayWithFiat;
