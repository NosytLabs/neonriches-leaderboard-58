import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, TrendingUp } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { formatCurrency } from '@/utils/formatters';
import { spendFromWallet } from '@/services/walletService';
import { ensureUser } from '@/utils/userAdapter';

const AdvertisementBanner = () => {
  const { user, updateUserProfile } = useAuth();
  const { toast } = useToast();
  
  const handleBoostProfile = async () => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "You must be logged in to boost your profile.",
        variant: "destructive"
      });
      return;
    }
    
    if (user.walletBalance < 2) {
      toast({
        title: "Insufficient Funds",
        description: "You need at least $2 to boost your profile.",
        variant: "destructive"
      });
      return;
    }
    
    // Simulate API call to boost profile
    try {
      // Deduct funds from wallet
      const success = await spendFromWallet(
        ensureUser(user),
        2,
        'advertisement',
        'Purchased advertisement boost for 24 hours',
        {}
      );
      
      if (success) {
        // Update user profile with boost info
        const boostEndDate = new Date();
        boostEndDate.setDate(boostEndDate.getDate() + 1); // 24 hours
        
        await updateUserProfile({
          ...user,
          profileBoosts: [
            ...(user.profileBoosts || []),
            {
              startDate: new Date().toISOString(),
              endDate: boostEndDate.toISOString(),
              level: 1,
              type: 'advertisement',
              strength: 1
            }
          ]
        });
        
        toast({
          title: "Profile Boosted",
          description: "Your profile will be boosted for 24 hours!",
        });
      } else {
        toast({
          title: "Transaction Failed",
          description: "There was an error processing your transaction.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Boost Failed",
        description: "There was an error boosting your profile.",
        variant: "destructive"
      });
    }
  };
  
  const hasActiveBoost = user && user.profileBoosts && user.profileBoosts.length > 0;
  
  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle className="flex items-center">
          <TrendingUp className="mr-2 h-5 w-5 text-royal-gold" />
          Boost Your Profile
        </CardTitle>
        <CardDescription>
          Get more visibility and attract more followers
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-white/70">
            For just {formatCurrency(2)}, boost your profile for 24 hours and get featured on the leaderboard and profile listings.
          </p>
          
          {hasActiveBoost ? (
            <div className="text-green-500 font-semibold">
              Your profile is currently being boosted!
            </div>
          ) : (
            <Button 
              className="w-full bg-royal-gold hover:bg-royal-gold/90 text-black"
              onClick={handleBoostProfile}
            >
              <Sparkles className="mr-2 h-4 w-4" />
              Boost Profile for 24 Hours
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default AdvertisementBanner;
