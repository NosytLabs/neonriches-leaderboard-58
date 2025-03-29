
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { UserProfile } from '@/types/user';
import { Award, Crown, TrendingUp, Wallet, Users, Zap, Trophy, Star, Gift, BadgeCheck } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ProfileAchievementsProps {
  user: UserProfile;
}

const ProfileAchievements: React.FC<ProfileAchievementsProps> = ({ user }) => {
  // Mock achievements data
  const achievements = [
    {
      id: 'royal-donor',
      name: 'Royal Donor',
      description: 'Spend a total of $100 on the platform',
      icon: <Crown className="h-5 w-5 text-royal-gold" />,
      progress: Math.min(100, ((user.totalSpent || 0) / 100) * 100),
      unlocked: (user.totalSpent || 0) >= 100,
      rewardDescription: 'Royal Donor Badge'
    },
    {
      id: 'noble-climb',
      name: 'Noble Climb',
      description: 'Reach rank 50 or higher on the leaderboard',
      icon: <TrendingUp className="h-5 w-5 text-emerald-500" />,
      progress: Math.min(100, (((user.rank || 1000) <= 50 ? 50 : 0) / 50) * 100),
      unlocked: (user.rank || 1000) <= 50,
      rewardDescription: 'Noble Climber Badge'
    },
    {
      id: 'golden-treasury',
      name: 'Golden Treasury',
      description: 'Maintain a wallet balance of $500 or more',
      icon: <Wallet className="h-5 w-5 text-amber-400" />,
      progress: Math.min(100, ((user.walletBalance || 0) / 500) * 100),
      unlocked: (user.walletBalance || 0) >= 500,
      rewardDescription: 'Golden Treasury Badge'
    },
    {
      id: 'team-loyalist',
      name: 'Team Loyalist',
      description: 'Stay in the same team for 30 days',
      icon: <Users className="h-5 w-5 text-blue-500" />,
      progress: 100, // Mocked progress
      unlocked: true, // Mocked as unlocked
      rewardDescription: 'Team Loyalist Badge'
    },
    {
      id: 'swift-spender',
      name: 'Swift Spender',
      description: 'Make 5 transactions in a single day',
      icon: <Zap className="h-5 w-5 text-purple-500" />,
      progress: 80, // Mocked progress
      unlocked: false,
      rewardDescription: 'Swift Spender Badge'
    },
    {
      id: 'throne-climber',
      name: 'Throne Climber',
      description: 'Reach the top 10 on the leaderboard',
      icon: <Trophy className="h-5 w-5 text-royal-gold" />,
      progress: Math.min(100, (((user.rank || 1000) <= 10 ? 10 : 0) / 10) * 100),
      unlocked: (user.rank || 1000) <= 10,
      rewardDescription: 'Throne Climber Badge'
    },
    {
      id: 'premium-member',
      name: 'Premium Member',
      description: 'Subscribe to a premium membership tier',
      icon: <Star className="h-5 w-5 text-amber-400" />,
      progress: user.subscription === 'premium' || user.subscription === 'royal' ? 100 : 0,
      unlocked: user.subscription === 'premium' || user.subscription === 'royal',
      rewardDescription: 'Premium Member Badge'
    },
    {
      id: 'gift-giver',
      name: 'Gift Giver',
      description: 'Send gifts to 5 different users',
      icon: <Gift className="h-5 w-5 text-red-500" />,
      progress: 40, // Mocked progress
      unlocked: false,
      rewardDescription: 'Gift Giver Badge'
    }
  ];
  
  const unlockedCount = achievements.filter(a => a.unlocked).length;
  const totalAchievements = achievements.length;
  const completionPercentage = Math.round((unlockedCount / totalAchievements) * 100);
  
  return (
    <div className="space-y-6">
      <Card className="glass-morphism border-white/10">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-royal-gold" />
            <CardTitle>Royal Achievements</CardTitle>
          </div>
          <CardDescription>
            Track your progress and earn exclusive badges
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <span className="text-sm text-white/70">Achievement Progress</span>
              <span className="text-sm font-medium">{unlockedCount}/{totalAchievements} ({completionPercentage}%)</span>
            </div>
            <Progress value={completionPercentage} className="h-2" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement) => (
              <Card 
                key={achievement.id}
                className={`glass-morphism h-full ${
                  achievement.unlocked 
                    ? 'border-royal-gold/50 bg-gradient-to-br from-black/20 to-royal-gold/10' 
                    : 'border-white/10'
                }`}
              >
                <CardContent className="p-4 h-full flex flex-col">
                  <div className="flex items-start gap-3 mb-3">
                    <div className={`p-2 rounded-full ${achievement.unlocked ? 'bg-royal-gold/20' : 'bg-black/30'}`}>
                      {achievement.icon}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{achievement.name}</h3>
                        {achievement.unlocked && (
                          <BadgeCheck className="h-4 w-4 text-royal-gold" />
                        )}
                      </div>
                      <p className="text-sm text-white/70">{achievement.description}</p>
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <div className="flex justify-between mb-1 text-xs">
                      <span>Progress</span>
                      <span>{Math.round(achievement.progress)}%</span>
                    </div>
                    <Progress value={achievement.progress} className="h-1.5 mb-2" />
                    
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-white/60">Reward:</span>
                      <Badge variant={achievement.unlocked ? "default" : "outline"} className="text-xs">
                        {achievement.rewardDescription}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileAchievements;
