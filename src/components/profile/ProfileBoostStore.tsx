
import React, { useState } from 'react';
import profileBoostEffects from '@/data/boostEffects';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { UserProfile } from '@/types/user';
import { useToast } from '@/components/ui/use-toast';
import { ToastAction } from '@/components/ui/toast';
import { Sparkles, Crown, Star, Zap, Clock, Tag } from 'lucide-react';

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
            {getFilteredBoosts().map((boost) => {
              const price = boost.cost;
              
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
                            ? 'bg-gray-700' 
                            : boost.tier === 'premium' 
                              ? 'bg-royal-purple' 
                              : 'bg-royal-gold text-black'
                          } border-none
                        `}
                      >
                        {boost.tier ? boost.tier.toUpperCase() : 'BASIC'}
                      </Badge>
                    </div>
                    
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-1 text-white/60 text-sm">
                        <Clock className="h-3.5 w-3.5" />
                        <span>{boost.duration / 24} days</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <div className="text-right">
                          <div className="flex items-center gap-1">
                            <Tag className="h-3.5 w-3.5 text-royal-gold" />
                            <span className="font-bold">${price}</span>
                          </div>
                        </div>
                        
                        <Button 
                          size="sm" 
                          disabled={!canAccess}
                          onClick={() => handlePurchaseBoost(boost.id, price)}
                        >
                          {canAccess ? 'Purchase' : 'Locked'}
                        </Button>
                      </div>
                    </div>
                    
                    {!canAccess && (
                      <div className="mt-2 text-xs text-white/50 bg-black/20 p-2 rounded">
                        Upgrade your subscription to {boost.tier === 'premium' ? 'Premium' : 'Royal'} tier to unlock this boost.
                      </div>
                    )}
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
