import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy, Share } from 'lucide-react';
import { formatCurrency } from '@/utils/formatters';
import { useAuth } from '@/hooks/useAuth';

const ReferralCard: React.FC = () => {
  const { user } = useAuth();
  const referralCode = user?.username || 'N/A';
  const referralLink = `${window.location.origin}/signup?referral=${referralCode}`;
  const bonusAmount = 5;

  const handleCopyClick = () => {
    navigator.clipboard.writeText(referralLink);
  };

  const handleShareClick = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Join SpendThrone!',
        text: `Use my referral code ${referralCode} to get a bonus!`,
        url: referralLink,
      });
    } else {
      alert('Web Share API not supported, please copy the link manually.');
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Referral Program</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>
          Invite your friends to join SpendThrone and you'll both receive{' '}
          {formatCurrency(bonusAmount)}!
        </p>
        <div className="flex items-center justify-between">
          <div className="flex-1 truncate">
            <p className="text-sm font-medium">Your Referral Link:</p>
            <p className="text-xs text-muted-foreground truncate">{referralLink}</p>
          </div>
          <Button variant="outline" size="sm" onClick={handleCopyClick} className="ml-2">
            <Copy className="h-4 w-4 mr-2" />
            Copy
          </Button>
        </div>
        <Button className="w-full" onClick={handleShareClick}>
          <Share className="h-4 w-4 mr-2" />
          Share Referral Link
        </Button>
      </CardContent>
    </Card>
  );
};

export default ReferralCard;
