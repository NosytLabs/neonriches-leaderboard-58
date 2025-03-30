
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Trophy, UserPlus, CreditCard } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import { getUserReferralStats, getReferralTiers } from '@/services/referralService';
import { ReferralStats as ReferralStatsType, ReferralTier } from '@/types/referral';
import { Skeleton } from '@/components/ui/skeleton';

interface ReferralStatsProps {
  userId: string;
  className?: string;
}

const ReferralStats: React.FC<ReferralStatsProps> = ({ userId, className }) => {
  const [stats, setStats] = useState<ReferralStatsType | null>(null);
  const [tiers, setTiers] = useState<ReferralTier[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const loadStats = async () => {
      try {
        const [userStats, allTiers] = await Promise.all([
          getUserReferralStats(userId),
          getReferralTiers()
        ]);
        
        setStats(userStats);
        setTiers(allTiers);
      } catch (error) {
        console.error('Error loading referral stats:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadStats();
  }, [userId]);
  
  // Find the next tier
  const getNextTier = () => {
    if (!stats || !tiers.length) return null;
    
    const currentTierIndex = tiers.findIndex(t => t.id === stats.current_tier.id);
    if (currentTierIndex === -1 || currentTierIndex === tiers.length - 1) return null;
    
    return tiers[currentTierIndex + 1];
  };
  
  // Calculate progress to next tier
  const calculateProgress = () => {
    if (!stats || !tiers.length) return 0;
    
    const nextTier = getNextTier();
    if (!nextTier) return 100;
    
    const currentReferrals = stats.completed_referrals;
    const currentTierMin = stats.current_tier.min_referrals;
    const nextTierMin = nextTier.min_referrals;
    
    const range = nextTierMin - currentTierMin;
    const progress = ((currentReferrals - currentTierMin) / range) * 100;
    
    return Math.min(Math.max(progress, 0), 100);
  };
  
  if (loading) {
    return (
      <Card className={cn("glass-morphism border-white/10", className)}>
        <CardHeader>
          <Skeleton className="h-5 w-40" />
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <Skeleton className="h-20" />
            <Skeleton className="h-20" />
            <Skeleton className="h-20" />
            <Skeleton className="h-20" />
          </div>
          <Skeleton className="h-16" />
        </CardContent>
      </Card>
    );
  }
  
  const nextTier = getNextTier();
  const progress = calculateProgress();
  
  return (
    <Card className={cn("glass-morphism border-white/10", className)}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-royal-gold" />
          <span>Your Royal Emissary Status</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {stats && (
          <>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white/5 p-3 rounded-lg flex items-center">
                <UserPlus className="h-8 w-8 text-green-400 mr-3" />
                <div>
                  <div className="text-xs text-white/60">Total Referrals</div>
                  <div className="text-xl font-bold">{stats.total_referrals}</div>
                </div>
              </div>
              
              <div className="bg-white/5 p-3 rounded-lg flex items-center">
                <Users className="h-8 w-8 text-blue-400 mr-3" />
                <div>
                  <div className="text-xs text-white/60">Completed</div>
                  <div className="text-xl font-bold">{stats.completed_referrals}</div>
                </div>
              </div>
              
              <div className="bg-white/5 p-3 rounded-lg flex items-center">
                <CreditCard className="h-8 w-8 text-royal-gold mr-3" />
                <div>
                  <div className="text-xs text-white/60">Total Rewards</div>
                  <div className="text-xl font-bold">${stats.total_rewards.toLocaleString()}</div>
                </div>
              </div>
              
              <div className="bg-royal-gold/10 p-3 rounded-lg flex items-center border border-royal-gold/20">
                <Trophy className="h-8 w-8 text-royal-gold mr-3" />
                <div>
                  <div className="text-xs text-royal-gold">Current Tier</div>
                  <div className="text-xl font-bold text-royal-gold">{stats.current_tier.tier_name}</div>
                </div>
              </div>
            </div>
            
            {nextTier ? (
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <div className="text-white/70">Current: {stats.current_tier.tier_name}</div>
                  <div className="text-white/70">Bonus: {stats.current_tier.bonus_multiplier}x</div>
                </div>
                
                <div className="space-y-2">
                  <Progress value={progress} className="h-2" />
                  <div className="flex justify-between text-xs text-white/50">
                    <span>
                      {stats.completed_referrals} / {nextTier.min_referrals} referrals
                    </span>
                    <span>{progress.toFixed(0)}% to next tier</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center text-sm bg-white/5 p-2 rounded">
                  <div className="text-royal-gold">Next: {nextTier.tier_name}</div>
                  <div className="text-royal-gold">Bonus: {nextTier.bonus_multiplier}x</div>
                </div>
                
                <div className="text-sm text-white/70">
                  <span className="font-semibold text-royal-gold">
                    {nextTier.min_referrals - stats.completed_referrals}
                  </span> more completed referrals needed to advance
                </div>
              </div>
            ) : (
              <div className="text-center py-4 bg-royal-gold/10 rounded-lg border border-royal-gold/20">
                <Trophy className="h-10 w-10 text-royal-gold mx-auto mb-2" />
                <p className="text-white/70">
                  Congratulations! You've reached the highest tier: <span className="text-royal-gold font-bold">{stats.current_tier.tier_name}</span>
                </p>
                <p className="text-sm text-white/50 mt-1">
                  You're enjoying maximum rewards with a {stats.current_tier.bonus_multiplier}x bonus
                </p>
              </div>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default ReferralStats;
