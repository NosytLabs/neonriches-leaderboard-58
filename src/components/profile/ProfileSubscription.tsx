
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Crown, CreditCard, Sparkles, Star, Lock } from 'lucide-react';
import { UserProfile } from '@/types/user';
import { SubscriptionTier } from '@/types/subscription';
import { useToast } from '@/hooks/use-toast';

interface ProfileSubscriptionProps {
  user: UserProfile;
  isOwnProfile: boolean;
}

const ProfileSubscription: React.FC<ProfileSubscriptionProps> = ({ user, isOwnProfile }) => {
  const { toast } = useToast();
  
  // Mock subscription plans
  const subscriptionPlans: SubscriptionTier[] = [
    {
      id: 'free',
      name: 'Free',
      description: 'Basic access to the royal court',
      priceMonthly: 0,
      priceYearly: 0,
      features: [
        'Basic profile customization',
        'Join a noble house',
        'Appear on the leaderboard',
        'Limited mockery options'
      ],
      recommended: false
    },
    {
      id: 'premium',
      name: 'Premium',
      description: 'Enhanced standing in the royal court',
      priceMonthly: 9.99,
      priceYearly: 99.99,
      features: [
        'All Free features',
        'Premium profile customization',
        'Exclusive mockery options',
        'Profile boosts',
        'Reduced cooldown timers',
        'Premium badge'
      ],
      recommended: true
    },
    {
      id: 'royal',
      name: 'Royal',
      description: 'The pinnacle of prestige',
      priceMonthly: 24.99,
      priceYearly: 249.99,
      features: [
        'All Premium features',
        'Royal profile effects',
        'Unlimited mockery options',
        'Premium boosts included',
        'Exclusive Royal Court access',
        'Custom title',
        'No cooldown timers',
        'Royal badge'
      ],
      recommended: false
    }
  ];
  
  const handleUpgrade = (plan: SubscriptionTier) => {
    if (!isOwnProfile) {
      toast({
        title: "Not Your Profile",
        description: "You can only upgrade your own subscription.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Subscription Update",
      description: `You've selected the ${plan.name} plan. Redirecting to payment...`,
    });
    
    // In a real app, this would redirect to a payment page
    setTimeout(() => {
      window.location.href = '/subscription';
    }, 2000);
  };
  
  // Get the user's current subscription tier or default to 'free'
  const currentTier = user.subscription || 'free';
  
  return (
    <div className="space-y-6">
      <Card className="glass-morphism border-white/10">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Crown className="h-5 w-5 text-royal-gold" />
            <CardTitle>Subscription Status</CardTitle>
          </div>
          <CardDescription>
            Your current standing in the royal hierarchy
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <div className="flex items-center gap-4 mb-4">
            <div>
              <h3 className="text-lg font-semibold flex items-center gap-2">
                {currentTier === 'royal' ? (
                  <Crown className="h-5 w-5 text-royal-gold" />
                ) : currentTier === 'premium' ? (
                  <Star className="h-5 w-5 text-amber-400" />
                ) : (
                  <Badge className="h-5 px-2">Free</Badge>
                )}
                <span>
                  {currentTier === 'royal' ? 'Royal' : 
                   currentTier === 'premium' ? 'Premium' : 'Free'} Tier
                </span>
              </h3>
              <p className="text-sm text-white/70">
                {currentTier === 'royal' ? 'You have the highest rank possible' : 
                 currentTier === 'premium' ? 'You have an enhanced standing' : 
                 'Basic access to the throne'}
              </p>
            </div>
          </div>
          
          {isOwnProfile && currentTier !== 'royal' && (
            <div className="bg-black/20 rounded-lg p-4 border border-white/10">
              <p className="text-sm">
                Upgrade your subscription to unlock additional features and enhance your standing in the royal court.
              </p>
              <Button 
                className="mt-2 bg-royal-gold hover:bg-royal-gold/90 text-black"
                onClick={() => handleUpgrade(
                  currentTier === 'premium' ? 
                  subscriptionPlans.find(p => p.id === 'royal')! : 
                  subscriptionPlans.find(p => p.id === 'premium')!
                )}
              >
                <CreditCard className="h-4 w-4 mr-2" />
                Upgrade to {currentTier === 'premium' ? 'Royal' : 'Premium'}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
      
      <h2 className="text-xl font-semibold mt-8 mb-4 flex items-center gap-2">
        <Sparkles className="h-5 w-5 text-royal-gold" />
        Subscription Plans
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {subscriptionPlans.map((plan) => (
          <Card 
            key={plan.id}
            className={`glass-morphism ${plan.recommended ? 'border-royal-gold/50' : 'border-white/10'}`}
          >
            <CardHeader className={plan.recommended ? 'bg-royal-gold/10 rounded-t-lg' : ''}>
              {plan.recommended && (
                <Badge className="w-fit mb-2 bg-royal-gold text-black">
                  Recommended
                </Badge>
              )}
              <CardTitle className="text-xl">{plan.name}</CardTitle>
              <CardDescription>
                {plan.description}
              </CardDescription>
              
              <div className="mt-4">
                <span className="text-3xl font-bold">${plan.priceMonthly}</span>
                <span className="text-white/70">/month</span>
              </div>
            </CardHeader>
            
            <CardContent className="pt-4">
              <ul className="space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-royal-gold mt-1 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            
            <CardFooter>
              {currentTier === plan.id ? (
                <Button className="w-full" disabled>
                  Current Plan
                </Button>
              ) : (
                <Button 
                  className={`w-full ${plan.recommended ? 'bg-royal-gold hover:bg-royal-gold/90 text-black' : 'glass-morphism border-white/10'}`}
                  onClick={() => handleUpgrade(plan)}
                  disabled={!isOwnProfile}
                >
                  {currentTier === 'royal' && plan.id !== 'royal' ? (
                    <span className="flex items-center">
                      <Lock className="h-4 w-4 mr-2" />
                      Downgrade
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <CreditCard className="h-4 w-4 mr-2" />
                      {isOwnProfile ? 'Upgrade' : 'Not Available'}
                    </span>
                  )}
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProfileSubscription;
