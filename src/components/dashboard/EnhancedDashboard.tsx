
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Trophy, Crown, Target, Users, Activity, Zap, DollarSign } from 'lucide-react';
import { UserProfile } from '@/types/user';

// Import achievement types from our custom type definition
import type { Achievement, AchievementType } from '@/types/achievement';

// Import other components
import AchievementDisplay from '@/components/achievements/AchievementDisplay';
import RankProgressChart from '@/components/dashboard/RankProgressChart';
import TeamStatusCard from '@/components/dashboard/TeamStatusCard';
import SpendingVisualizer from '@/components/dashboard/SpendingVisualizer';
import UserStats from '@/components/dashboard/UserStats';
import RankStatusCard from '@/components/dashboard/RankStatusCard';
import CashThroneUpgrade from '@/components/dashboard/CashThroneUpgrade';
import DashboardWelcome from '@/components/dashboard/DashboardWelcome';
import BriberyBanner from '@/components/dashboard/BriberyBanner';

// Import utilities and hooks
import { cn, formatCurrency } from '@/lib/utils';
import { useTabState } from '@/hooks/useTabState';
import { getAchievementIcon, formatDate } from '@/utils/formatters';
import { useToast } from '@/hooks/use-toast';

// UI components
import RoyalDivider from '@/components/ui/royal-divider';

const EnhancedDashboard = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('overview');
  
  // Mock achievements data - this would come from an API in a real app
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  
  // Generate mock achievements
  useEffect(() => {
    if (user) {
      const mockAchievements: Achievement[] = [
        {
          id: 'spend-100',
          name: 'Royal Patron',
          description: 'Spend $100 on the platform',
          type: 'royal' as AchievementType,
          icon: 'crown',
          tier: 'gold',
          unlockedAt: new Date().toISOString(),
          amountSpent: 100
        },
        {
          id: 'spend-500',
          name: 'Throne Supporter',
          description: 'Spend $500 on the platform',
          type: 'deposit' as AchievementType,
          icon: 'dollar',
          tier: 'platinum',
          unlockedAt: new Date().toISOString(),
          amountSpent: 500
        },
        {
          id: 'reach-rank-50',
          name: 'Rising Star',
          description: 'Reach rank 50 on the leaderboard',
          type: 'rank' as AchievementType,
          icon: 'star',
          tier: 'silver',
          unlockedAt: new Date().toISOString()
        }
      ];
      
      setAchievements(mockAchievements);
    }
  }, [user]);
  
  // Ensure we have a user before rendering
  if (!user) {
    return null;
  }

  // Get formatted total spent amount
  const totalSpent = user.totalSpent || user.amountSpent || 0;
  const formattedTotalSpent = formatCurrency(totalSpent);
  
  // Convert string achievement icons to lucide icon components for the AchievementDisplay
  const convertedAchievements = achievements.map(achievement => ({
    ...achievement,
    // This is a simple mapping that the AchievementDisplay component needs
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
              <SpendingVisualizer user={user} />
              <BriberyBanner />
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
