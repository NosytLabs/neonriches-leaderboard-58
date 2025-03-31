import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { Copy, Check, UserPlus, Gift } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { formatCurrency } from '@/utils/formatters';
import { useNotificationSounds } from '@/hooks/sounds/use-notification-sounds';
import { AudioOptions } from '@/types/sound-types';

const ReferralCard = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [isCopied, setIsCopied] = useState(false);
  const { playSound } = useNotificationSounds();
  
  const referralLink = `${window.location.origin}/register?referral=${user?.id}`;
  const discountAmount = 10;
  
  const handleCopyClick = () => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "You must be logged in to get a referral link.",
        variant: "destructive"
      });
      return;
    }
    
    navigator.clipboard.writeText(referralLink);
    setIsCopied(true);
    playSound('click');
    
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <Card className="glass-morphism border-royal-gold/20">
      <CardHeader>
        <div className="flex items-center">
          <UserPlus className="mr-3 h-6 w-6 text-royal-gold" />
          <CardTitle>Refer a Noble</CardTitle>
        </div>
        <CardDescription>
          Share the royal court with your friends and earn rewards
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-2">
          <Input
            type="text"
            value={referralLink}
            readOnly
            className="flex-1"
          />
          <Button 
            variant="outline" 
            onClick={handleCopyClick}
            disabled={!user}
          >
            {isCopied ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </div>
        
        <div className="bg-black/20 p-4 rounded-lg">
          <h4 className="mb-2 flex items-center text-sm font-medium">
            <Gift className="mr-2 h-4 w-4" />
            Referral Rewards
          </h4>
          
          <p className="text-xs text-white/70">
            When a friend uses your referral link, they'll receive {formatCurrency(discountAmount)} off their first purchase.
          </p>
          
          <p className="text-xs text-white/70 mt-2">
            As a thank you, you'll receive a special badge on your profile and a small boost to your royal rank.
          </p>
        </div>
        
        {!user && (
          <div className="text-center">
            <Link to="/login">
              <Button variant="link" className="text-sm">
                Sign In to Get Referral Link
              </Button>
            </Link>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ReferralCard;
