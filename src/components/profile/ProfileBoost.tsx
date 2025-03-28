
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Gem, Sparkles, Clock, Crown, Zap, ShieldCheck } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { spendFromWallet } from '@/services/walletService';
import { useProfileBoost } from '@/hooks/use-profile-boost';
import useNotificationSounds from '@/hooks/use-notification-sounds';
import RoyalButton from '@/components/ui/royal-button';
import ProcessingButton from '@/components/payment/ProcessingButton';
import { UserProfile } from '@/types/user';
import { BoostEffect, BoostEffectDetails } from '@/hooks/use-profile-boost';

// Define boost pricing info separately
interface BoostPricingInfo {
  effectId: BoostEffect;
  price: number;
  duration: number; // in hours
  exclusive: boolean;
}

const boostPricing: BoostPricingInfo[] = [
  {
    effectId: 'glow',
    price: 2.99,
    duration: 48, // 48 hours
    exclusive: false
  },
  {
    effectId: 'rainbow',
    price: 4.99,
    duration: 72, // 72 hours
    exclusive: false
  },
  {
    effectId: 'pulse',
    price: 3.99,
    duration: 48, // 48 hours
    exclusive: false
  },
  {
    effectId: 'sparkle',
    price: 7.99,
    duration: 96, // 96 hours (4 days)
    exclusive: false
  },
  {
    effectId: 'crown',
    price: 9.99,
    duration: 120, // 120 hours (5 days)
    exclusive: true
  },
  {
    effectId: 'shimmer',
    price: 6.99,
    duration: 72, // 72 hours (3 days)
    exclusive: false
  },
  {
    effectId: 'flames',
    price: 14.99,
    duration: 168, // 168 hours (7 days)
    exclusive: true
  },
  {
    effectId: 'banner',
    price: 19.99,
    duration: 240, // 240 hours (10 days)
    exclusive: true
  }
];

const ProfileBoost: React.FC = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const { playSound } = useNotificationSounds();
  const { 
    getActiveBoosts, 
    boostEffects 
  } = useProfileBoost(user);
  const [isProcessing, setIsProcessing] = useState<string | null>(null);
  
  if (!user) {
    return null;
  }
  
  const activeBoosts = getActiveBoosts();
  
  const handleBoostPurchase = async (boostInfo: BoostPricingInfo) => {
    setIsProcessing(boostInfo.effectId);
    
    try {
      const boostEffect = boostEffects[boostInfo.effectId];
      
      // Check if the user already has this boost active
      const hasActiveBoost = activeBoosts.some(boost => boost.effectId === boostInfo.effectId);
      if (hasActiveBoost) {
        toast({
          title: "Boost Already Active",
          description: `You already have the ${boostEffect.name} effect active.`,
          variant: "destructive"
        });
        return;
      }
      
      // Check if user has enough balance
      if (user.walletBalance < boostInfo.price) {
        toast({
          title: "Insufficient Funds",
          description: `You need $${boostInfo.price.toFixed(2)} to purchase this boost.`,
          variant: "destructive"
        });
        return;
      }
      
      // Check if boost is exclusive and user already has another exclusive boost
      if (boostInfo.exclusive) {
        const hasExclusiveBoost = activeBoosts.some(boost => {
          const boostDetails = boostPricing.find(bp => bp.effectId === boost.effectId);
          return boostDetails?.exclusive;
        });
        
        if (hasExclusiveBoost) {
          toast({
            title: "Exclusive Boost Conflict",
            description: "You already have an exclusive boost active. Only one can be active at a time.",
            variant: "destructive"
          });
          return;
        }
      }
      
      // Process the purchase
      const purchaseSuccess = await spendFromWallet(
        user,
        boostInfo.price,
        'profile_boost',
        `Purchased ${boostEffect.name} profile boost`,
        { 
          boostEffect: boostInfo.effectId,
          duration: boostInfo.duration 
        }
      );
      
      if (purchaseSuccess) {
        // Create the new boost
        const newBoost = {
          id: `boost_${Date.now()}`,
          effectId: boostInfo.effectId,
          startTime: Date.now(),
          endTime: Date.now() + (boostInfo.duration * 60 * 60 * 1000)
        };
        
        // Add the boost to the user's profile boosts
        const updatedBoosts = [...(user.profileBoosts || []), newBoost];
        
        // In a real app, this would be an API call to update the user profile
        // For now, we'll just update the local state
        user.profileBoosts = updatedBoosts;
        
        playSound('reward');
        toast({
          title: "Boost Purchased!",
          description: `Your profile now has the ${boostEffect.name} effect for ${boostInfo.duration / 24} days.`,
          variant: "default"
        });
      } else {
        throw new Error("Transaction failed");
      }
    } catch (error) {
      toast({
        title: "Purchase Failed",
        description: "There was an error processing your purchase.",
        variant: "destructive"
      });
    } finally {
      setIsProcessing(null);
    }
  };
  
  // Group boosts by rarity
  const boostsByRarity: Record<string, BoostPricingInfo[]> = {
    common: [],
    uncommon: [],
    rare: [],
    legendary: []
  };
  
  boostPricing.forEach(boost => {
    const rarity = boostEffects[boost.effectId].rarity;
    boostsByRarity[rarity].push(boost);
  });
  
  // Render the boost card
  const renderBoostCard = (boost: BoostPricingInfo) => {
    const isActive = activeBoosts.some(activeBoost => activeBoost.effectId === boost.effectId);
    const boostDetails = boostEffects[boost.effectId];
    
    return (
      <div key={boost.effectId} className="relative glass-morphism border-white/10 p-3 rounded-lg">
        {isActive && (
          <Badge className="absolute top-2 right-2 bg-green-600">Active</Badge>
        )}
        
        {boost.exclusive && (
          <Badge className="absolute top-2 left-2 bg-purple-700 text-xs">Exclusive</Badge>
        )}
        
        <div className={`flex items-center mb-2 ${boostDetails.cssClass}`}>
          <span className="text-lg mr-2">{boostDetails.icon}</span>
          <h3 className="font-semibold">{boostDetails.name}</h3>
        </div>
        
        <p className="text-xs text-white/70 mb-3">{boostDetails.description}</p>
        
        <div className="flex justify-between items-center mt-2">
          <Badge variant="outline" className={`text-xs ${
            boostDetails.rarity === 'legendary' ? 'border-purple-500 text-purple-400' :
            boostDetails.rarity === 'rare' ? 'border-blue-500 text-blue-400' :
            boostDetails.rarity === 'uncommon' ? 'border-green-500 text-green-400' :
            'border-gray-500 text-gray-400'
          }`}>
            {boostDetails.rarity.charAt(0).toUpperCase() + boostDetails.rarity.slice(1)}
          </Badge>
          
          <Badge variant="outline" className="text-xs flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            {boost.duration / 24} days
          </Badge>
        </div>
        
        <div className="mt-3">
          <ProcessingButton
            text={`$${boost.price.toFixed(2)} - Boost`}
            processingText="Processing..."
            isProcessing={isProcessing === boost.effectId}
            onClick={() => handleBoostPurchase(boost)}
            disabled={isActive || isProcessing !== null}
            className={`w-full text-xs h-8 ${
              isActive ? 'bg-gray-700 cursor-not-allowed' : 'bg-gradient-to-r from-purple-700 to-indigo-700'
            }`}
            icon={Sparkles}
          />
        </div>
      </div>
    );
  };
  
  return (
    <Card className="glass-morphism border-purple-400/20">
      <CardHeader>
        <div className="flex items-center">
          <Sparkles className="mr-3 h-6 w-6 text-purple-400" />
          <CardTitle>Profile Boosts</CardTitle>
        </div>
        <CardDescription>
          Enhance your royal presence with visual effects
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {activeBoosts.length > 0 && (
          <div className="glass-morphism border-white/10 p-3 rounded-lg mb-4">
            <div className="flex items-center mb-2">
              <Crown className="h-4 w-4 text-royal-gold mr-2" />
              <h3 className="text-sm font-semibold">Active Boosts</h3>
            </div>
            <div className="space-y-2">
              {activeBoosts.map(boost => {
                const effect = boostEffects[boost.effectId as BoostEffect];
                const boostPricingInfo = boostPricing.find(bp => bp.effectId === boost.effectId);
                
                return (
                  <div key={boost.id} className="flex items-center justify-between text-xs">
                    <div className="flex items-center">
                      <span className="mr-1">{effect.icon}</span>
                      <span className={effect.cssClass}>{effect.name}</span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {Math.ceil((boost.endTime - Date.now()) / (1000 * 60 * 60 * 24))} days left
                    </Badge>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {boostPricing.filter(boost => boostEffects[boost.effectId].rarity === 'legendary').map(renderBoostCard)}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {boostPricing.filter(boost => boostEffects[boost.effectId].rarity === 'rare').map(renderBoostCard)}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {boostPricing.filter(boost => 
            boostEffects[boost.effectId].rarity === 'uncommon' || 
            boostEffects[boost.effectId].rarity === 'common'
          ).map(renderBoostCard)}
        </div>
        
        <div className="p-3 bg-black/20 rounded-lg text-sm">
          <p className="flex items-center text-white/70 mb-2">
            <ShieldCheck size={16} className="text-royal-gold mr-2" />
            <span>Profile boosts are purely cosmetic and do not affect your rank.</span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileBoost;
