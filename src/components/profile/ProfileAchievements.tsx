
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { UserProfile } from '@/types/user';
import { Award, Crown, Star, Target, Zap, CheckCircle2, Lock } from 'lucide-react';

interface ProfileAchievementsProps {
  user: UserProfile;
}

const ACHIEVEMENTS = [
  {
    id: 'first-deposit',
    title: 'Royal Patron',
    description: 'Made your first deposit to the royal treasury',
    icon: <Crown />,
    requirement: (user: UserProfile) => (user.totalSpent || 0) > 0,
    progress: (user: UserProfile) => Math.min(1, ((user.totalSpent || 0) > 0 ? 1 : 0)),
    unlocked: (user: UserProfile) => (user.totalSpent || 0) > 0,
  },
  {
    id: 'big-spender',
    title: 'Lavish Spender',
    description: 'Spent at least $500 on the platform',
    icon: <Zap />,
    requirement: (user: UserProfile) => (user.totalSpent || 0) >= 500,
    progress: (user: UserProfile) => Math.min(1, (user.totalSpent || 0) / 500),
    unlocked: (user: UserProfile) => (user.totalSpent || 0) >= 500,
  },
  {
    id: 'elite-status',
    title: 'Elite Status',
    description: 'Reached the top 100 on the leaderboard',
    icon: <Star />,
    requirement: (user: UserProfile) => (user.rank || 1000) <= 100,
    progress: (user: UserProfile) => Math.min(1, (1000 - (user.rank || 1000)) / 900),
    unlocked: (user: UserProfile) => (user.rank || 1000) <= 100,
  },
  {
    id: 'team-player',
    title: 'Team Player',
    description: 'Joined a noble house and contributed to its glory',
    icon: <Target />,
    requirement: (user: UserProfile) => !!user.team,
    progress: (user: UserProfile) => user.team ? 1 : 0,
    unlocked: (user: UserProfile) => !!user.team,
  },
  {
    id: 'premium-member',
    title: 'Premium Member',
    description: 'Subscribed to a premium tier membership',
    icon: <Award />,
    requirement: (user: UserProfile) => user.tier === 'premium' || user.tier === 'royal',
    progress: (user: UserProfile) => (user.tier === 'premium' || user.tier === 'royal') ? 1 : 0,
    unlocked: (user: UserProfile) => user.tier === 'premium' || user.tier === 'royal',
  },
  {
    id: 'royal-elite',
    title: 'Royal Elite',
    description: 'Reached the exclusive royal tier membership',
    icon: <Crown />,
    requirement: (user: UserProfile) => user.tier === 'royal',
    progress: (user: UserProfile) => user.tier === 'royal' ? 1 : 0,
    unlocked: (user: UserProfile) => user.tier === 'royal',
  }
];

const ProfileAchievements: React.FC<ProfileAchievementsProps> = ({ user }) => {
  return (
    <div className="space-y-6">
      <Card className="glass-morphism border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5 text-royal-gold" />
            Royal Achievements
          </CardTitle>
          <CardDescription>
            View your earned achievements and progress
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ACHIEVEMENTS.map((achievement) => {
              const isUnlocked = achievement.unlocked(user);
              const progress = achievement.progress(user);
              
              return (
                <div 
                  key={achievement.id}
                  className={`relative p-4 rounded-lg border ${isUnlocked 
                    ? 'border-royal-gold/30 bg-royal-gold/5' 
                    : 'border-white/10 bg-black/30'}`}
                >
                  <div className="absolute top-2 right-2">
                    {isUnlocked ? (
                      <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                    ) : (
                      <Lock className="h-5 w-5 text-white/30" />
                    )}
                  </div>
                  
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
                    isUnlocked ? 'bg-royal-gold/20' : 'bg-white/10'
                  }`}>
                    <div className={isUnlocked ? 'text-royal-gold' : 'text-white/50'}>
                      {React.cloneElement(achievement.icon, { size: 24 })}
                    </div>
                  </div>
                  
                  <h3 className={`text-lg font-bold ${isUnlocked ? 'text-royal-gold' : 'text-white/70'}`}>
                    {achievement.title}
                  </h3>
                  
                  <p className="text-sm text-white/60 mt-1 mb-3">
                    {achievement.description}
                  </p>
                  
                  <div className="w-full h-2 bg-black/50 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${isUnlocked ? 'bg-royal-gold' : 'bg-white/30'}`}
                      style={{ width: `${progress * 100}%` }}
                    ></div>
                  </div>
                  
                  <div className="flex justify-between mt-2 text-xs">
                    <span className="text-white/50">Progress</span>
                    <span className={isUnlocked ? 'text-royal-gold' : 'text-white/70'}>
                      {Math.round(progress * 100)}%
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileAchievements;
