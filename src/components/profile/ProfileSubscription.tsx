
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { UserProfile } from '@/types/user';
import { CreditCard, Check, Crown, Star, ArrowRight } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface ProfileSubscriptionProps {
  user: UserProfile;
  isOwnProfile: boolean;
}

const ProfileSubscription: React.FC<ProfileSubscriptionProps> = ({ user, isOwnProfile }) => {
  const tiers = [
    {
      id: 'basic',
      name: 'Basic',
      description: 'The standard tier for all nobles',
      price: 0,
      features: [
        'Access to the royal leaderboard',
        'Basic profile customization',
        'Join a noble house',
        'Standard crown icon'
      ],
      current: user.tier === 'basic'
    },
    {
      id: 'premium',
      name: 'Premium',
      description: 'Enhanced benefits for serious contenders',
      price: 9.99,
      features: [
        'All Basic tier features',
        'Premium profile decorations',
        'Custom title selection',
        'Special leaderboard effects',
        '10% discount on profile boosts'
      ],
      current: user.tier === 'premium'
    },
    {
      id: 'royal',
      name: 'Royal',
      description: 'The ultimate experience for true monarchs',
      price: 29.99,
      features: [
        'All Premium tier features',
        'Exclusive royal decorations',
        'Animated profile effects',
        'Custom color schemes',
        'Royal badge beside username',
        'Priority support',
        '25% discount on all purchases'
      ],
      current: user.tier === 'royal'
    }
  ];
  
  const handleUpgrade = (tierId: string) => {
    if (!isOwnProfile) {
      toast({
        title: "Permission Denied",
        description: "You can only upgrade your own subscription.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Coming Soon",
      description: "Subscription upgrades will be available soon!",
    });
  };
  
  return (
    <div className="space-y-6">
      <Card className="glass-morphism border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Crown className="h-5 w-5 text-royal-gold" />
            Subscription Tier
          </CardTitle>
          <CardDescription>
            Your current subscription status and available upgrades
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <div 
                key={tier.id}
                className={`relative overflow-hidden rounded-lg border ${
                  tier.current 
                    ? 'border-royal-gold bg-royal-gold/5' 
                    : 'border-white/10 bg-black/20'
                }`}
              >
                {tier.current && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-royal-gold text-black text-xs font-bold py-1 px-3 transform rotate-45 translate-x-2 -translate-y-1">
                      ACTIVE
                    </div>
                  </div>
                )}
                
                <div className="p-5">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    {tier.id === 'basic' && <Star className="h-5 w-5 text-gray-400" />}
                    {tier.id === 'premium' && <Star className="h-5 w-5 text-royal-purple" />}
                    {tier.id === 'royal' && <Crown className="h-5 w-5 text-royal-gold" />}
                    {tier.name}
                  </h3>
                  
                  <div className="mt-2 mb-4">
                    <span className="text-2xl font-bold">
                      ${tier.price}
                    </span>
                    <span className="text-white/60 text-sm">
                      /month
                    </span>
                  </div>
                  
                  <p className="text-sm text-white/70 mb-4">
                    {tier.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <Check className="h-4 w-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {tier.current ? (
                    <Badge className="w-full flex justify-center py-2 bg-royal-gold/20 text-royal-gold border-0">
                      Current Plan
                    </Badge>
                  ) : (
                    <Button 
                      className="w-full"
                      onClick={() => handleUpgrade(tier.id)}
                      disabled={!isOwnProfile || tier.price === 0}
                    >
                      {tier.price === 0 ? 'Default Plan' : 'Upgrade'} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        
        {isOwnProfile && (
          <CardFooter className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <Button variant="outline" className="w-full md:w-auto">
              <CreditCard className="mr-2 h-4 w-4" />
              Manage Payment Methods
            </Button>
            <Button variant="outline" className="w-full md:w-auto">
              View Billing History
            </Button>
          </CardFooter>
        )}
      </Card>
    </div>
  );
};

export default ProfileSubscription;
