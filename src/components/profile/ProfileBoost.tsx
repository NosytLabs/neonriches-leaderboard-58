
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Zap, Trophy, ChevronRight } from "lucide-react";
import { formatTimeAgo } from "@/utils/formatters";
import { asConsolidatedUserProfile } from "@/utils/userTypes";
import { UserProfile } from '@/types/user-consolidated';

interface ProfileBoostProps {
  user: any;
  onBoost?: (boostType: string) => void;
}

const ProfileBoost: React.FC<ProfileBoostProps> = ({ user, onBoost }) => {
  const [loading, setLoading] = useState(false);
  
  // Format boost cost based on user's rank
  const getBoostCost = (rank: number): number => {
    if (rank <= 10) return 100;
    if (rank <= 50) return 50;
    if (rank <= 100) return 25;
    return 10;
  };
  
  // Format boost percentage based on user's tier
  const getBoostPercentage = (tier: string): number => {
    switch (tier) {
      case 'royal': return 100;
      case 'premium': return 75;
      case 'pro': return 50;
      default: return 25;
    }
  };
  
  // Calculate remaining boost time
  const getRemainingBoostTime = (): string => {
    // Check if user has active boosts
    const activeBoost = user.profileBoosts?.find((boost: any) => boost.isActive);
    if (!activeBoost) return 'No active boost';
    
    // Calculate remaining time
    const endDate = new Date(activeBoost.endDate);
    const now = new Date();
    
    if (endDate <= now) return 'Expired';
    
    return formatTimeAgo(endDate.toISOString());
  };
  
  const handleBoost = async (boostType: string) => {
    setLoading(true);
    try {
      // In a real app, this would call an API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (onBoost) onBoost(boostType);
      
      // Show success toast or notification
      console.log(`Applied ${boostType} boost`);
    } catch (error) {
      console.error('Error applying boost:', error);
    } finally {
      setLoading(false);
    }
  };
  
  // Convert user to consolidated format to ensure types
  const consolidatedUser = asConsolidatedUserProfile(user);
  
  const boostCost = getBoostCost(consolidatedUser.rank || 0);
  const boostPercentage = getBoostPercentage(consolidatedUser.tier);
  
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-semibold flex items-center">
          <Zap className="w-5 h-5 mr-2 text-yellow-400" />
          Profile Boost
        </CardTitle>
        <CardDescription>
          Temporarily boost your visibility and ranking
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col items-center p-3 bg-muted rounded-lg">
            <p className="text-muted-foreground text-sm">Boost Cost</p>
            <p className="text-2xl font-bold">${boostCost}</p>
          </div>
          <div className="flex flex-col items-center p-3 bg-muted rounded-lg">
            <p className="text-muted-foreground text-sm">Boost Amount</p>
            <p className="text-2xl font-bold">+{boostPercentage}%</p>
          </div>
        </div>
        
        <div className="p-3 bg-muted rounded-lg flex justify-between items-center">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2 text-muted-foreground" />
            <span className="text-sm">Time Remaining</span>
          </div>
          <span className="text-sm font-medium">{getRemainingBoostTime()}</span>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <Button 
          className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600"
          onClick={() => handleBoost('visibility')}
          disabled={loading}
        >
          <Zap className="w-4 h-4 mr-2" />
          Boost Visibility (${boostCost})
        </Button>
        <Button 
          variant="outline" 
          className="w-full"
          onClick={() => handleBoost('rank')}
          disabled={loading}
        >
          <Trophy className="w-4 h-4 mr-2" />
          View All Boosts
          <ChevronRight className="w-4 h-4 ml-auto" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProfileBoost;
