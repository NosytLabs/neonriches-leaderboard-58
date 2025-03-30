
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Users, UserCheck, Clock, DollarSign } from 'lucide-react';
import { getUserReferrals, getUserReferralRewards } from '@/services/referralService';
import { Referral, ReferralReward } from '@/types/referral';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ReferralsListProps {
  userId: string;
  className?: string;
}

const ReferralsList: React.FC<ReferralsListProps> = ({ userId, className }) => {
  const [referrals, setReferrals] = useState<Referral[]>([]);
  const [rewards, setRewards] = useState<ReferralReward[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const loadReferrals = async () => {
      try {
        const [userReferrals, userRewards] = await Promise.all([
          getUserReferrals(userId),
          getUserReferralRewards(userId)
        ]);
        
        setReferrals(userReferrals);
        setRewards(userRewards);
      } catch (error) {
        console.error('Error loading referrals:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadReferrals();
  }, [userId]);
  
  // Set up real-time subscription
  useEffect(() => {
    const channel = supabase
      .channel('referrals-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'referrals'
        },
        async (payload) => {
          if (payload.new.referrer_id === userId) {
            // Refresh the referrals when there's a change
            const newReferrals = await getUserReferrals(userId);
            setReferrals(newReferrals);
          }
        }
      )
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'referral_rewards'
        },
        async (payload) => {
          if (payload.new.referrer_id === userId) {
            // Refresh the rewards when there's a change
            const newRewards = await getUserReferralRewards(userId);
            setRewards(newRewards);
          }
        }
      )
      .subscribe();
    
    return () => {
      supabase.removeChannel(channel);
    };
  }, [userId]);
  
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return (
          <Badge variant="outline" className="bg-yellow-500/10 border-yellow-500/20 text-yellow-400">
            <Clock className="h-3 w-3 mr-1" />
            Pending
          </Badge>
        );
      case 'completed':
        return (
          <Badge variant="outline" className="bg-green-500/10 border-green-500/20 text-green-400">
            <UserCheck className="h-3 w-3 mr-1" />
            Completed
          </Badge>
        );
      case 'rewarded':
        return (
          <Badge variant="outline" className="bg-royal-gold/10 border-royal-gold/20 text-royal-gold">
            <DollarSign className="h-3 w-3 mr-1" />
            Rewarded
          </Badge>
        );
      default:
        return (
          <Badge variant="outline" className="bg-white/10 border-white/20">
            {status}
          </Badge>
        );
    }
  };
  
  return (
    <Card className={cn("glass-morphism border-white/10", className)}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="h-5 w-5 text-royal-gold" />
          <span>Your Court Members</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="referrals">
          <TabsList className="glass-morphism w-full">
            <TabsTrigger value="referrals" className="flex-1">Referrals</TabsTrigger>
            <TabsTrigger value="rewards" className="flex-1">Rewards</TabsTrigger>
          </TabsList>
          
          <TabsContent value="referrals" className="mt-4">
            <ScrollArea className="h-[300px] pr-4">
              {loading ? (
                <div className="py-8 text-center text-white/50">
                  Loading referrals...
                </div>
              ) : referrals.length === 0 ? (
                <div className="py-8 text-center text-white/50">
                  <Users className="h-12 w-12 mx-auto mb-2 text-white/20" />
                  <p>You haven't referred anyone yet</p>
                  <p className="text-xs mt-1">Share your referral code to start earning rewards</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {referrals.map(referral => (
                    <div 
                      key={referral.id}
                      className={cn(
                        "p-3 rounded-lg border",
                        referral.status === 'rewarded' 
                          ? "bg-royal-gold/10 border-royal-gold/30" 
                          : referral.status === 'completed'
                            ? "bg-green-500/10 border-green-500/20"
                            : "bg-white/5 border-white/10"
                      )}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center mr-2">
                            <span>U</span>
                          </div>
                          <div>
                            <div className="font-medium">User {referral.referred_id.substring(0, 6)}</div>
                            <div className="text-xs text-white/50">
                              Joined {format(new Date(referral.created_at), 'MMM d, yyyy')}
                            </div>
                          </div>
                        </div>
                        
                        {getStatusBadge(referral.status)}
                      </div>
                      
                      <div className="flex justify-between text-xs text-white/70 mt-2">
                        <div>
                          Code: <span className="font-mono">{referral.referral_code}</span>
                        </div>
                        
                        {referral.first_deposit_amount && (
                          <div>
                            First deposit: <span className="font-mono">${referral.first_deposit_amount.toLocaleString()}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </ScrollArea>
          </TabsContent>
          
          <TabsContent value="rewards" className="mt-4">
            <ScrollArea className="h-[300px] pr-4">
              {loading ? (
                <div className="py-8 text-center text-white/50">
                  Loading rewards...
                </div>
              ) : rewards.length === 0 ? (
                <div className="py-8 text-center text-white/50">
                  <DollarSign className="h-12 w-12 mx-auto mb-2 text-white/20" />
                  <p>No rewards earned yet</p>
                  <p className="text-xs mt-1">Complete referrals to earn rewards</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {rewards.map(reward => (
                    <div 
                      key={reward.id}
                      className="p-3 rounded-lg border bg-royal-gold/10 border-royal-gold/30"
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <DollarSign className="h-5 w-5 text-royal-gold mr-2" />
                          <div>
                            <div className="font-medium">{reward.reward_type} Reward</div>
                            <div className="text-xs text-white/50">
                              Earned {format(new Date(reward.created_at), 'MMM d, yyyy')}
                            </div>
                          </div>
                        </div>
                        
                        <div className="font-mono text-lg text-royal-gold">
                          ${reward.reward_amount.toLocaleString()}
                        </div>
                      </div>
                      
                      <div className="text-xs text-white/70 mt-2">
                        From referral: <span className="font-mono">{reward.referral_id.substring(0, 8)}...</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ReferralsList;
