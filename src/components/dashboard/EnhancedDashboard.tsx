
import React, { useState, useEffect } from 'react';
import useAuth from '@/hooks/useAuth';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Trophy, Crown, Users, Activity, Zap } from 'lucide-react';
import { Achievement } from '@/components/achievements/AchievementDisplay';
import TeamStatusCard from '@/components/dashboard/TeamStatusCard';
import CashThroneUpgrade from '@/components/dashboard/CashThroneUpgrade';
import { DashboardWelcome } from '@/components/dashboard/DashboardWelcome';
import { useToast } from '@/hooks/use-toast';
import { useSound } from '@/hooks/sounds/use-sound';
import OverviewTab from './tabs/OverviewTab';
import RankTab from './tabs/RankTab';
import AchievementsTab from './tabs/AchievementsTab';
import { UserProfile as ConsolidatedUserProfile } from '@/types/user-consolidated';
import { UserProfile as UserProfileType } from '@/types/user';
import { TeamColor } from '@/types/mockery-types';
import { toTeamColor } from '@/utils/typeConverters';

/**
 * Converts a consolidated user profile to a format compatible with components
 * that expect the user.UserProfile type
 */
function adaptUserProfileForComponents(user: ConsolidatedUserProfile): UserProfileType {
  if (!user) return null as any;
  
  // Convert the team property to ensure it's a valid TeamColor
  const teamColor = toTeamColor(user.team as string) as TeamColor;
  
  return {
    id: user.id,
    username: user.username,
    displayName: user.displayName || '',
    email: user.email || '',
    profileImage: user.profileImage || '',
    bio: user.bio || '',
    joinedDate: user.joinedDate || '',
    isVerified: user.isVerified || false,
    isProtected: user.isProtected || false,
    isVIP: user.isVIP || false,
    isFounder: user.isFounder || false,
    isAdmin: user.isAdmin || false,
    team: teamColor,
    tier: user.tier || 'basic',
    rank: user.rank || 0,
    previousRank: user.previousRank || 0,
    totalSpent: user.totalSpent || 0, // Ensure totalSpent is set
    amountSpent: user.amountSpent || 0,
    walletBalance: user.walletBalance || 0,
    settings: {
      profileVisibility: (user.settings?.profileVisibility as "public" | "private" | "followers" | "friends") || 'public',
      allowProfileLinks: Boolean(user.settings?.allowProfileLinks),
      theme: (user.settings?.theme as "light" | "dark" | "royal" | "system") || 'dark',
      notifications: Boolean(user.settings?.notifications),
      emailNotifications: Boolean(user.settings?.emailNotifications),
      marketingEmails: Boolean(user.settings?.marketingEmails),
      showRank: Boolean(user.settings?.showRank),
      darkMode: Boolean(user.settings?.darkMode),
      soundEffects: Boolean(user.settings?.soundEffects),
      showBadges: Boolean(user.settings?.showBadges),
      showTeam: Boolean(user.settings?.showTeam || true),
      showSpending: Boolean(user.settings?.showSpending || true)
    },
    profileBoosts: user.profileBoosts || [],
    cosmetics: user.cosmetics || {
      border: [],
      color: [],
      font: [],
      emoji: [],
      title: [],
      background: [],
      effect: [],
      badge: [],
      theme: []
    },
    spendStreak: user.spendStreak || 0
  };
}

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

  // Adapt the user to a version that components can use
  const adaptedUser = user as unknown as ConsolidatedUserProfile;
  
  // Create a UserProfile compatible with the user.UserProfile type
  const userForComponents = adaptUserProfileForComponents(adaptedUser);

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
