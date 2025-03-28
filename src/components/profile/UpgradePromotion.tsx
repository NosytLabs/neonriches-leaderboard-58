import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Crown, Sparkles, Shield, Zap } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import useNotificationSounds from '@/hooks/use-notification-sounds';
import { UserProfile, UserSubscription } from '@/types/user';

const UpgradePromotion: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { user, updateUserProfile } = useAuth();
  const { toast } = useToast();
  const { playSound } = useNotificationSounds();
  
  const handleSubscribe = async () => {
    if (!user) return;
    
    setIsLoading(true);
    
    try {
      // In a real app, this would connect to a payment processor
      // For now, we'll just update the user's subscription status
      const subscription: UserSubscription = {
        id: 'sub_' + Math.random().toString(36).substring(2, 15),
        status: 'active',
        tier: 'pro',
        interval: 'monthly',
        currentPeriodEnd: Date.now() + 30 * 24 * 60 * 60 * 1000, // 30 days from now
        cancelAtPeriodEnd: false
      };
      
      await updateUserProfile({
        ...user,
        tier: 'pro',
        subscription
      });
      
      playSound('reward');
      
      toast({
        title: 'Pro Subscription Activated!',
        description: 'You now have access to all Pro features.',
        variant: 'default',
      });
    } catch (error) {
      console.error('Error upgrading account:', error);
      toast({
        title: 'Upgrade Failed',
        description: 'There was an error processing your upgrade.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  // Rest of the component remains unchanged
  

  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Crown className="mr-2 h-5 w-5 text-royal-gold" />
          Unlock Pro Features
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center">
            <Shield className="mr-2 h-4 w-4 text-emerald-500" />
            <span>Ad-Free Experience</span>
          </div>
          <div className="flex items-center">
            <Sparkles className="mr-2 h-4 w-4 text-purple-500" />
            <span>Exclusive Cosmetics</span>
          </div>
          <div className="flex items-center">
            <Zap className="mr-2 h-4 w-4 text-blue-500" />
            <span>Priority Support</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button 
          className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 text-white hover:opacity-90"
          onClick={handleSubscribe}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              Upgrading...
            </>
          ) : (
            <>
              Upgrade to Pro
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default UpgradePromotion;
