
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Sparkles, Zap, Clock, CreditCard, Shield } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { UserProfile } from '@/types/user';
import { spendFromWallet } from '@/services/walletService';
import useProfileBoost, { boostEffects, BoostEffect } from '@/hooks/use-profile-boost';
import { useAuth } from '@/contexts/AuthContext';

interface ProfileBoostProps {
  user: UserProfile;
}

const ProfileBoost: React.FC<ProfileBoostProps> = ({ user }) => {
  const { toast } = useToast();
  const { updateUserProfile } = useAuth();
  const { activeBoosts, addBoost, removeBoost, hasActiveBoost, getBoostRemaining } = useProfileBoost(user);
  const [isPurchasing, setIsPurchasing] = useState<string | null>(null);
  
  const handlePurchaseBoost = async (boostId: string) => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "You must be logged in to purchase a boost.",
        variant: "destructive"
      });
      return;
    }
    
    const effect = boostEffects[boostId];
    
    if (!effect) {
      toast({
        title: "Invalid Boost",
        description: "The selected boost is not available.",
        variant: "destructive"
      });
      return;
    }
    
    if (user.walletBalance < effect.price) {
      toast({
        title: "Insufficient Funds",
        description: `You need $${effect.price} to purchase this boost.`,
        variant: "destructive"
      });
      return;
    }
    
    setIsPurchasing(boostId);
    
    try {
      const success = await spendFromWallet(
        user,
        effect.price,
        'profile_boost',
        `Purchased the ${effect.name} boost`,
        { boostId, duration: effect.duration }
      );
      
      if (!success) {
        throw new Error("Transaction failed");
      }
      
      // Update user wallet balance
      if (updateUserProfile) {
        await updateUserProfile({
          ...user,
          walletBalance: user.walletBalance - effect.price
        });
      }
      
      // Add the boost to active boosts
      const boostAdded = await addBoost(boostId);
      
      if (boostAdded) {
        toast({
          title: "Boost Activated",
          description: `Your profile now has the ${effect.name} effect for ${effect.duration} hours!`,
        });
      } else {
        throw new Error("Failed to activate boost");
      }
    } catch (error) {
      console.error("Boost purchase failed:", error);
      toast({
        title: "Boost Purchase Failed",
        description: "There was an error purchasing the boost.",
        variant: "destructive"
      });
    } finally {
      setIsPurchasing(null);
    }
  };
  
  const formatRemainingTime = (hours: number): string => {
    if (hours < 1) return "Less than 1 hour";
    if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''}`;
    const days = Math.floor(hours / 24);
    const remainingHours = hours % 24;
    return `${days} day${days > 1 ? 's' : ''} ${remainingHours > 0 ? `and ${remainingHours} hour${remainingHours > 1 ? 's' : ''}` : ''}`;
  };
  
  const boostCategories = {
    essential: ['glow', 'pulse', 'sparkle', 'crown'],
    premium: ['rainbow', 'shimmer', 'flames', 'banner']
  };
  
  return (
    <Card className="glass-morphism border-purple-400/20">
      <CardHeader>
        <CardTitle className="text-lg flex items-center">
          <Zap size={18} className="text-purple-400 mr-2" />
          Profile Boost
        </CardTitle>
        <CardDescription>
          Stand out with exclusive visual effects for your profile
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="essential">
          <TabsList className="grid grid-cols-2 mb-4">
            <TabsTrigger value="essential">Essential Boosts</TabsTrigger>
            <TabsTrigger value="premium">Premium Boosts</TabsTrigger>
          </TabsList>
          
          <TabsContent value="essential">
            <div className="grid grid-cols-1 gap-3">
              {boostCategories.essential.map(boostId => {
                const boost = boostEffects[boostId as BoostEffect];
                const isActive = hasActiveBoost(boostId);
                const remainingHours = getBoostRemaining(boostId);
                
                return (
                  <div 
                    key={boostId} 
                    className={`glass-morphism rounded-lg p-3 border ${isActive ? 'border-purple-400/40' : 'border-white/10'} flex justify-between items-center`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isActive ? 'bg-purple-500/20' : 'bg-white/10'}`}>
                        <Sparkles size={20} className={isActive ? 'text-purple-400' : 'text-white/60'} />
                      </div>
                      <div>
                        <h4 className="font-medium flex items-center">
                          {boost.name}
                          {isActive && <Shield size={14} className="text-green-400 ml-2" />}
                        </h4>
                        <p className="text-xs text-white/60">
                          {boost.description}
                        </p>
                        {isActive && (
                          <div className="flex items-center mt-1 text-xs text-purple-300">
                            <Clock size={12} className="mr-1" />
                            {formatRemainingTime(remainingHours)} remaining
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <Button
                      variant={isActive ? "outline" : "default"}
                      size="sm"
                      className={isActive ? "border-purple-400/30 text-purple-300" : "bg-purple-500 hover:bg-purple-600"}
                      disabled={isPurchasing === boostId || (isActive && remainingHours > 0)}
                      onClick={() => !isActive && handlePurchaseBoost(boostId)}
                    >
                      {isPurchasing === boostId ? (
                        <div className="h-4 w-4 border-2 border-t-transparent border-current rounded-full animate-spin mr-1"></div>
                      ) : isActive ? (
                        'Active'
                      ) : (
                        <>
                          <CreditCard size={14} className="mr-1.5" />
                          ${boost.price}
                        </>
                      )}
                    </Button>
                  </div>
                );
              })}
            </div>
          </TabsContent>
          
          <TabsContent value="premium">
            <div className="grid grid-cols-1 gap-3">
              {boostCategories.premium.map(boostId => {
                const boost = boostEffects[boostId as BoostEffect];
                const isActive = hasActiveBoost(boostId);
                const remainingHours = getBoostRemaining(boostId);
                
                return (
                  <div 
                    key={boostId} 
                    className={`glass-morphism rounded-lg p-3 border ${isActive ? 'border-royal-gold/40' : 'border-white/10'} flex justify-between items-center`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isActive ? 'bg-royal-gold/20' : 'bg-white/10'}`}>
                        <Sparkles size={20} className={isActive ? 'text-royal-gold' : 'text-white/60'} />
                      </div>
                      <div>
                        <h4 className="font-medium flex items-center">
                          {boost.name}
                          {isActive && <Shield size={14} className="text-green-400 ml-2" />}
                        </h4>
                        <p className="text-xs text-white/60">
                          {boost.description}
                        </p>
                        <p className="text-xs text-white/60 mt-0.5">
                          {boost.exclusive && "Exclusive: replaces other exclusive effects"}
                        </p>
                        {isActive && (
                          <div className="flex items-center mt-1 text-xs text-royal-gold">
                            <Clock size={12} className="mr-1" />
                            {formatRemainingTime(remainingHours)} remaining
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <Button
                      variant={isActive ? "outline" : "default"}
                      size="sm"
                      className={isActive ? "border-royal-gold/30 text-royal-gold" : "bg-gradient-to-r from-purple-600 to-royal-gold text-white"}
                      disabled={isPurchasing === boostId || (isActive && remainingHours > 0)}
                      onClick={() => !isActive && handlePurchaseBoost(boostId)}
                    >
                      {isPurchasing === boostId ? (
                        <div className="h-4 w-4 border-2 border-t-transparent border-current rounded-full animate-spin mr-1"></div>
                      ) : isActive ? (
                        'Active'
                      ) : (
                        <>
                          <CreditCard size={14} className="mr-1.5" />
                          ${boost.price}
                        </>
                      )}
                    </Button>
                  </div>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-4 p-3 bg-black/20 rounded-lg">
          <p className="text-sm text-white/70">
            <span className="text-purple-300 font-semibold">Note:</span> Boosts are visual effects only and don't affect your rank or position on the leaderboard. They're purely cosmetic to make your profile stand out.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileBoost;
