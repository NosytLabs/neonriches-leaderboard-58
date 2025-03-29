
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Sparkles, Clock, CreditCard, ShoppingCart, Eye, Paintbrush, Zap, Crown } from 'lucide-react';
import { UserProfile } from '@/types/user';
import { ProfileBoostEffect } from '@/types/profile-boost';
import { getBoostsByType, profileBoostEffects } from '@/data/boostEffects';
import useUserCosmetics from '@/hooks/useUserCosmetics';

interface ProfileBoostStoreProps {
  user: UserProfile;
  onBoostApplied?: () => void;
}

const BOOST_TYPES = [
  { id: 'visibility', label: 'Visibility', icon: <Eye className="h-4 w-4" /> },
  { id: 'appearance', label: 'Appearance', icon: <Paintbrush className="h-4 w-4" /> },
  { id: 'animation', label: 'Animation', icon: <Zap className="h-4 w-4" /> },
  { id: 'effect', label: 'Special Effects', icon: <Crown className="h-4 w-4" /> }
];

const ProfileBoostStore: React.FC<ProfileBoostStoreProps> = ({ user, onBoostApplied }) => {
  const [selectedType, setSelectedType] = useState('visibility');
  const [selectedBoost, setSelectedBoost] = useState<ProfileBoostEffect | null>(null);
  const [isApplying, setIsApplying] = useState(false);
  const { toast } = useToast();
  const { boostProfile } = useUserCosmetics(user, async () => {
    if (onBoostApplied) onBoostApplied();
  });
  
  const boostsByType = getBoostsByType(selectedType);
  
  const handleSelectBoost = (boost: ProfileBoostEffect) => {
    setSelectedBoost(boost);
  };
  
  const handleApplyBoost = async () => {
    if (!selectedBoost) return;
    
    try {
      setIsApplying(true);
      
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Apply the boost to the user's profile
      const result = await boostProfile(selectedBoost.durationDays, 
        selectedBoost.tier === 'royal' ? 3 : selectedBoost.tier === 'premium' ? 2 : 1);
      
      if (result) {
        toast({
          title: "Profile Boost Applied!",
          description: `Your profile now has the "${selectedBoost.name}" effect for ${selectedBoost.durationDays} days.`,
        });
        
        if (onBoostApplied) {
          onBoostApplied();
        }
      } else {
        throw new Error("Failed to apply boost");
      }
    } catch (error) {
      console.error("Error applying boost:", error);
      toast({
        title: "Failed to Apply Boost",
        description: "Something went wrong. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsApplying(false);
      setSelectedBoost(null);
    }
  };

  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center">
          <Sparkles className="mr-2 h-5 w-5 text-royal-gold" />
          Profile Boost Store
        </CardTitle>
        <CardDescription>
          Enhance your profile's visibility and appearance with temporary boosts
        </CardDescription>
      </CardHeader>
      
      <CardContent className="p-0">
        <Tabs defaultValue="visibility" value={selectedType} onValueChange={setSelectedType} className="w-full">
          <TabsList className="mx-4 my-2 grid w-auto grid-cols-4">
            {BOOST_TYPES.map(type => (
              <TabsTrigger key={type.id} value={type.id} className="flex items-center gap-1.5">
                {type.icon}
                <span className="hidden sm:inline">{type.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {BOOST_TYPES.map(type => (
            <TabsContent key={type.id} value={type.id} className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {getBoostsByType(type.id).map(boost => (
                  <div 
                    key={boost.id}
                    className={`glass-morphism-highlight rounded-lg p-3 cursor-pointer transition-all duration-200 border ${
                      selectedBoost?.id === boost.id 
                        ? 'border-royal-gold/50 bg-royal-gold/10' 
                        : 'border-white/5 hover:border-white/20'
                    }`}
                    onClick={() => handleSelectBoost(boost)}
                  >
                    <div className="flex justify-between">
                      <div className="font-medium">{boost.name}</div>
                      <Badge 
                        variant="outline" 
                        className="bg-royal-gold/10 text-royal-gold border-royal-gold/20"
                      >
                        ${boost.price}
                      </Badge>
                    </div>
                    
                    <div className="text-xs text-white/60 mt-1 mb-2">{boost.description}</div>
                    
                    <div className="flex items-center text-xs text-white/70">
                      <Clock className="h-3 w-3 mr-1" />
                      {boost.durationDays} days
                    </div>
                    
                    {boost.previewImage && (
                      <div className="mt-2 h-12 w-full overflow-hidden rounded bg-black/20">
                        <div className={`h-full w-full ${boost.cssClass}`}>
                          <div className="flex h-full w-full items-center justify-center text-xs">
                            Preview Effect
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              {getBoostsByType(type.id).length === 0 && (
                <div className="text-center py-8 text-white/40">
                  No {type.label.toLowerCase()} boosts available at this time
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
      
      <CardFooter className="flex justify-between p-4 pt-2">
        <div className="text-sm">
          {selectedBoost ? (
            <div className="text-royal-gold">
              <span className="font-semibold">{selectedBoost.name}</span> - ${selectedBoost.price}
            </div>
          ) : (
            <div className="text-white/60">Select a boost to apply</div>
          )}
        </div>
        
        <Button
          onClick={handleApplyBoost}
          disabled={!selectedBoost || isApplying}
          className="bg-royal-gold text-black hover:bg-royal-gold/90"
        >
          {isApplying ? (
            <>
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-black border-t-transparent mr-2"></div>
              Processing...
            </>
          ) : (
            <>
              <CreditCard className="h-4 w-4 mr-2" />
              Purchase Boost
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProfileBoostStore;
