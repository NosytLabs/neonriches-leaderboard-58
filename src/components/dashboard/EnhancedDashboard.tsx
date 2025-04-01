
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Trophy, Crown, Users, Activity, Zap } from 'lucide-react';
import { Achievement } from '@/components/achievements/AchievementDisplay';
import TeamStatusCard from '@/components/dashboard/TeamStatusCard';
import CashThroneUpgrade from '@/components/dashboard/CashThroneUpgrade';
import { DashboardWelcome } from '@/components/dashboard/DashboardWelcome';
import { useToast } from '@/hooks/use-toast';
import { useSound } from '@/hooks/use-sound';
import OverviewTab from './tabs/OverviewTab';
import RankTab from './tabs/RankTab';
import AchievementsTab from './tabs/AchievementsTab';
import { adaptToStandardUserProfile, ensureTotalSpent } from '@/utils/userTypeAdapter';
import { UserProfile } from '@/types/user';

const EnhancedDashboard = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const sound = useSound();
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

  // First ensure totalSpent and amountSpent properties are present
  const userWithRequired = ensureTotalSpent(user as UserProfile);
  
  // Then adapt to ensure all other properties are correctly set
  const standardUser = adaptToStandardUserProfile(userWithRequired);

  // Now enhance the profile boosts with required properties
  const enhancedUserForProps = {
    ...standardUser,
    profileBoosts: standardUser.profileBoosts?.map(boost => ({
      ...boost,
      // Make sure required properties are present to satisfy both interfaces
      strength: boost.strength || 1,
      isActive: boost.isActive ?? true,
      level: boost.level || 1,
      appliedBy: boost.appliedBy || 'system' // Ensure appliedBy is always present
    })) || []
  };

  const handleSpend = () => {
    toast({
      title: "Spending action",
      description: "This would trigger a spending action in a real app."
    });
    sound.playSound('click');
  };

  const handlePaymentSuccess = () => {
    toast({
      title: "Bribery successful",
      description: "Your rank has been temporarily boosted for cosmetic display purposes.",
      variant: "success"
    });
    sound.playSound('success');
  };

  // Explicitly cast to UserProfile type to ensure compatibility with component props
  const userForComponents = enhancedUserForProps as unknown as UserProfile;

  return (
    <div className="container mx-auto px-4 py-6">
      <DashboardWelcome user={userForComponents} />
      
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
          <TabsContent value="overview">
            <OverviewTab 
              user={userForComponents}
              onSpend={handleSpend} 
              onPaymentSuccess={handlePaymentSuccess} 
            />
          </TabsContent>
          
          <TabsContent value="rank">
            <RankTab />
          </TabsContent>
          
          <TabsContent value="team">
            <TeamStatusCard user={userForComponents} />
          </TabsContent>
          
          <TabsContent value="achievements">
            <AchievementsTab achievements={achievements} />
          </TabsContent>
          
          <TabsContent value="upgrade">
            <CashThroneUpgrade user={userForComponents} />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default EnhancedDashboard;
