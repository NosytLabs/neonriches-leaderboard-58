import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Zap, Award, Trophy, Crown, DollarSign } from 'lucide-react';
import { cn } from '@/lib/utils';

// Make sure this matches the type in achievement.d.ts
export type AchievementType = 
  'royal' | 
  'deposit' | 
  'rank' | 
  'milestone' | 
  'streak' |
  'purchase';

export type AchievementTier = 
  'bronze' | 
  'silver' | 
  'gold' | 
  'platinum' | 
  'diamond';

export interface Achievement {
  id: string;
  name: string;
  description: string;
  type: AchievementType;
  tier: AchievementTier;
  icon: 'star' | 'zap' | 'award' | 'trophy' | 'crown' | 'dollar';
  unlockedAt?: string;
  amountSpent?: number;
}

interface AchievementDisplayProps {
  achievement: Achievement;
  className?: string;
}

const AchievementDisplay: React.FC<AchievementDisplayProps> = ({ 
  achievement, 
  className 
}) => {
  
  const getIcon = () => {
    switch (achievement.icon) {
      case 'star': return <Star className={iconClass} />;
      case 'zap': return <Zap className={iconClass} />;
      case 'award': return <Award className={iconClass} />;
      case 'trophy': return <Trophy className={iconClass} />;
      case 'crown': return <Crown className={iconClass} />;
      case 'dollar': return <DollarSign className={iconClass} />;
      default: return <Trophy className={iconClass} />;
    }
  };
  
  const getTierColor = () => {
    switch (achievement.tier) {
      case 'bronze': return 'bg-amber-700';
      case 'silver': return 'bg-gray-400';
      case 'gold': return 'bg-yellow-500';
      case 'platinum': return 'bg-blue-300';
      case 'diamond': return 'bg-cyan-300';
      default: return 'bg-gray-500';
    }
  };
  
  const borderClass = `border-${getTierColor().split('bg-')[1]}`;
  const iconClass = "h-6 w-6 text-white";
  
  return (
    <Card className={cn("overflow-hidden relative", borderClass, className)}>
      <div className={`absolute top-0 right-0 p-2 ${getTierColor()} rounded-bl-md`}>
        {getIcon()}
      </div>
      <CardContent className="pt-12 pb-4">
        <h3 className="font-bold mb-1">{achievement.name}</h3>
        <p className="text-sm text-white/70">{achievement.description}</p>
        {achievement.unlockedAt && (
          <div className="text-xs text-white/50 mt-2">
            Unlocked on {new Date(achievement.unlockedAt).toLocaleDateString()}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AchievementDisplay;
