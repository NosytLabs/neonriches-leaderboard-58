
import React, { useState } from 'react';
import profileBoostEffects from '@/data/boostEffects';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { UserProfile } from '@/types/user-consolidated';
import { useToast } from '@/components/ui/use-toast';
import { ToastAction } from '@/components/ui/toast';
import { Sparkles, Crown, Star, Zap, Clock, Tag } from 'lucide-react';
import { BoostEffect } from '@/types/boost';

interface ProfileBoostStoreProps {
  user: UserProfile;
  onBoostApplied?: () => void;
}

const ProfileBoostStore: React.FC<ProfileBoostStoreProps> = ({ user, onBoostApplied }) => {
  const [activeTab, setActiveTab] = useState('all');
  const { toast } = useToast();
  
  // Filter boosts based on active tab
  const getFilteredBoosts = () => {
    if (activeTab === 'all') {
      return profileBoostEffects;
    }
    return profileBoostEffects.filter(boost => boost.type === activeTab);
  };
  
  // Handle boost purchase
  const handlePurchaseBoost = (boostId: string, price: number) => {
    // In a real app, this would make an API call to purchase the boost
    console.log(`Purchasing boost ${boostId} for $${price}`);
    
    // Show success toast
    toast({
      title: "Boost applied successfully!",
      description: "Your profile has been enhanced with the selected boost effect.",
      action: (
        <ToastAction altText="View Profile">View Profile</ToastAction>
      ),
    });
    
    // Trigger parent callback to refresh active boosts
    if (onBoostApplied) {
      onBoostApplied();
    }
  };
  
  return (
    <div>
      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-4">
          <TabsTrigger value="all" className="flex items-center gap-1.5">
            <Star className="h-4 w-4" />
            All Boosts
          </TabsTrigger>
          <TabsTrigger value="appearance" className="flex items-center gap-1.5">
            <Crown className="h-4 w-4" />
            Appearance
          </TabsTrigger>
          <TabsTrigger value="animation" className="flex items-center gap-1.5">
            <Zap className="h-4 w-4" />
            Animation
          </TabsTrigger>
          <TabsTrigger value="visibility" className="flex items-center gap-1.5">
            <Star className="h-4 w-4" />
            Visibility
          </TabsTrigger>
          <TabsTrigger value="effect" className="flex items-center gap-1.5">
            <Sparkles className="h-4 w-4" />
            Special
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value={activeTab}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {getFilteredBoosts().map((boost: BoostEffect) => {
              const price = boost.price;
              
              // Check if user can access this tier
              const userSubscriptionTier = user.subscription?.tier;
              const boostSubscriptionTier = boost.tier || 'basic';
              const canAccess = 
                (boostSubscriptionTier === 'basic') || 
                (boostSubscriptionTier === 'premium' && ['premium', 'royal'].includes(userSubscriptionTier || '')) ||
                (boostSubscriptionTier === 'royal' && userSubscriptionTier === 'royal');
              
              return (
                <Card 
                  key={boost.id} 
                  className={`border-white/10 transition hover:border-white/20 ${
                    !canAccess ? 'opacity-60' : ''
                  }`}
                >
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-royal-gold/10 flex items-center justify-center">
                          <Sparkles className="h-5 w-5 text-royal-gold" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{boost.name}</h3>
                          <p className="text-xs text-white/60">{boost.description}</p>
                        </div>
                      </div>
                      <Badge 
                        variant="outline" 
                        className={`
                          ${boost.tier === 'basic' 
                            ? 'bg-gray-500/20 text-gray-300 border-gray-500/30' 
                            : boost.tier === 'premium'
                              ? 'bg-royal-purple/20 text-royal-purple border-royal-purple/30'
                              : 'bg-royal-gold/20 text-royal-gold border-royal-gold/30'
                          }
                        `}
                      >
                        {boost.tier.charAt(0).toUpperCase() + boost.tier.slice(1)}
                      </Badge>
                    </div>
                    
                    <div className="mt-4 flex justify-between items-center">
                      <div className="text-sm flex items-center text-white/60">
                        <Clock className="h-4 w-4 mr-1" />
                        {boost.durationDays} days
                      </div>
                      <div className="text-sm flex items-center text-white/60">
                        <Tag className="h-4 w-4 mr-1" />
                        ${price}
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <Button 
                        className="w-full"
                        onClick={() => handlePurchaseBoost(boost.id, price)}
                        disabled={!canAccess}
                      >
                        {canAccess ? 'Apply Boost' : 'Requires Upgrade'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProfileBoostStore;
