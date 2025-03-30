
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Trophy, Crown, Target, Users, Activity, Zap, DollarSign } from 'lucide-react';
import { UserProfile } from '@/types/user';
import { Achievement } from '@/types/achievement';
import AchievementDisplay from '@/components/achievements/AchievementDisplay';
import RankProgressChart from '@/components/dashboard/RankProgressChart';
import TeamStatusCard from '@/components/dashboard/TeamStatusCard';
import SpendingVisualizer from '@/components/dashboard/SpendingVisualizer';
import UserStats from '@/components/dashboard/UserStats';
import RankStatusCard from '@/components/dashboard/RankStatusCard';
import CashThroneUpgrade from '@/components/dashboard/CashThroneUpgrade';
import { DashboardWelcome } from '@/components/dashboard/DashboardWelcome';
import BriberyBanner from '@/components/dashboard/BriberyBanner';
import { cn } from '@/lib/utils';
import { getAchievementIcon } from '@/utils/formatters';
import { useToast } from '@/hooks/use-toast';
import RoyalDivider from '@/components/ui/royal-divider';

const EnhancedDashboard = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('overview');
  
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  
  useEffect(() => {
    if (user) {
      const mockAchievements: Achievement[] = [
        {
          id: 'spend-100',
          name: 'Royal Patron',
          description: 'Spend $100 on the platform',
          type: 'royal',
          icon: 'crown',
          tier: 'gold',
          unlockedAt: new Date().toISOString(),
          amountSpent: 100
        },
        {
          id: 'spend-500',
          name: 'Throne Supporter',
          description: 'Spend $500 on the platform',
          type: 'deposit',
          icon: 'dollar',
          tier: 'platinum',
          unlockedAt: new Date().toISOString(),
          amountSpent: 500
        },
        {
          id: 'reach-rank-50',
          name: 'Rising Star',
          description: 'Reach rank 50 on the leaderboard',
          type: 'rank',
          icon: 'star',
          tier: 'silver',
          unlockedAt: new Date().toISOString()
        },
        {
          id: 'premium-purchase',
          name: 'Premium Buyer',
          description: 'Purchase premium features',
          type: 'purchase',
          icon: 'star',
          tier: 'gold',
          unlockedAt: new Date().toISOString()
        }
      ];
      
      setAchievements(mockAchievements);
    }
  }, [user]);
  
  if (!user) {
    return null;
  }

  const totalSpent = user.totalSpent || user.amountSpent || 0;

  const handleSpend = () => {
    toast({
      title: "Spending action",
      description: "This would trigger a spending action in a real app."
    });
  };

  const handlePaymentSuccess = () => {
    toast({
      title: "Bribery successful",
      description: "Your rank has been temporarily boosted for cosmetic display purposes.",
      variant: "success"
    });
  };
  
  const convertedAchievements = achievements.map(achievement => ({
    ...achievement,
    icon: achievement.icon as "star" | "zap" | "award" | "trophy" | "crown" | "dollar"
  }));

  return (
    <div className="container mx-auto px-4 py-6">
      <DashboardWelcome user={user} />
      
      <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-5 w-full bg-black/20">
          <TabsTrigger value="overview" className="flex items-center">
            <Activity className="h-4 w-4 mr-2" />
            Overview
          </TabsTrigger>
          <TabsTrigger value="rank" className="flex items-center">
            <Trophy className="h-4 w-4 mr-2" />
            Rank
          </TabsTrigger>
          <TabsTrigger value="team" className="flex items-center">
            <Users className="h-4 w-4 mr-2" />
            Team
          </TabsTrigger>
          <TabsTrigger value="achievements" className="flex items-center">
            <Crown className="h-4 w-4 mr-2" />
            Achievements
          </TabsTrigger>
          <TabsTrigger value="upgrade" className="flex items-center">
            <Zap className="h-4 w-4 mr-2" />
            Upgrade
          </TabsTrigger>
        </TabsList>
        
        <div className="mt-6">
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <RankStatusCard user={user} />
              <UserStats user={user} />
            </div>
            
            <div className="space-y-6">
              <SpendingVisualizer user={user} onSpend={handleSpend} />
              <BriberyBanner user={user} onPaymentSuccess={handlePaymentSuccess} />
            </div>
          </TabsContent>
          
          <TabsContent value="rank" className="space-y-6">
            <Card className="glass-morphism border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="mr-2 h-5 w-5 text-royal-gold" />
                  Rank Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <RankProgressChart />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="team" className="space-y-6">
            <TeamStatusCard user={user} />
          </TabsContent>
          
          <TabsContent value="achievements" className="space-y-6">
            <Card className="glass-morphism border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Crown className="mr-2 h-5 w-5 text-royal-gold" />
                  Your Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {convertedAchievements.map((achievement) => (
                    <AchievementDisplay 
                      key={achievement.id}
                      achievement={achievement}
                    />
                  ))}
                  
                  {achievements.length === 0 && (
                    <div className="col-span-full text-center py-8">
                      <p className="text-white/60">No achievements unlocked yet.</p>
                      <Button variant="outline" className="mt-4">
                        View Available Achievements
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="upgrade" className="space-y-6">
            <CashThroneUpgrade user={user} />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default EnhancedDashboard;
