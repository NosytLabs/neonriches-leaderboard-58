
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Crown, Coins, ChevronsUp } from 'lucide-react';
import { formatCurrency } from '@/utils/formatters';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';

interface RoyalWishingWellProps {
  className?: string;
  currentPool?: number;
  recentWishes?: Array<{
    username: string;
    amount: number;
    result: string;
    timestamp: string;
  }>;
}

const RoyalWishingWell: React.FC<RoyalWishingWellProps> = ({ className, currentPool = 0, recentWishes = [] }) => {
  const [donationAmount, setDonationAmount] = useState<number | string>('');
  const { toast } = useToast();
  const { user, updateUserProfile } = useAuth();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow only numbers
    if (/^\d*$/.test(value)) {
      setDonationAmount(value);
    }
  };

  const handleDonate = async () => {
    if (!user) {
      toast({
        title: 'Not authenticated.',
        description: 'You must be logged in to donate.',
        variant: 'destructive',
      });
      return;
    }

    const amount = Number(donationAmount);

    if (isNaN(amount) || amount <= 0) {
      toast({
        title: 'Invalid donation amount.',
        description: 'Please enter a valid amount greater than zero.',
        variant: 'destructive',
      });
      return;
    }

    // Optimistically update the user's totalSpent
    const newTotalSpent = (user.totalSpent || 0) + amount;

    const success = await updateUserProfile({
      totalSpent: newTotalSpent,
    });

    if (success) {
      toast({
        title: 'Thank you for your donation!',
        description: `You have donated ${formatCurrency(amount)} to the Royal Wishing Well.`,
      });
    } else {
      toast({
        title: 'Donation failed.',
        description: 'There was an error processing your donation. Please try again.',
        variant: 'destructive',
      });
    }

    // Clear the input field after donation
    setDonationAmount('');
  };

  // Display recent wishes if available
  const renderRecentWishes = () => {
    if (recentWishes.length === 0) {
      return null;
    }

    return (
      <div className="mt-4 border-t border-white/10 pt-4">
        <h4 className="text-sm font-medium mb-2">Recent Wishes</h4>
        <div className="space-y-2">
          {recentWishes.slice(0, 3).map((wish, index) => (
            <div key={index} className="text-xs flex justify-between">
              <span>{wish.username}</span>
              <span>{formatCurrency(wish.amount)}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium flex items-center">
          <Crown className="mr-2 h-4 w-4 text-yellow-500" />
          Royal Wishing Well
        </CardTitle>
        <Coins className="h-4 w-4 text-yellow-500" />
      </CardHeader>
      <CardContent>
        {currentPool > 0 && (
          <div className="mb-4 text-center">
            <p className="text-sm text-muted-foreground">Current Pool</p>
            <p className="text-2xl font-bold">{formatCurrency(currentPool)}</p>
          </div>
        )}
        
        <div className="mb-4 text-sm text-muted-foreground">
          Donate to the Royal Wishing Well and increase your total spending. Every coin counts towards your
          ascension!
        </div>
        <div className="flex items-center space-x-2">
          <Input
            type="number"
            placeholder="0.00"
            value={donationAmount}
            onChange={handleInputChange}
            className="w-32"
          />
          <Button onClick={handleDonate} className="bg-yellow-500 text-black hover:bg-yellow-500/90">
            <ChevronsUp className="mr-2 h-4 w-4" />
            Donate
          </Button>
        </div>
        
        {renderRecentWishes()}
      </CardContent>
    </Card>
  );
};

export default RoyalWishingWell;
