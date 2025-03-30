
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Award, Star, Crown, Zap, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';
import SocialShare from '@/components/social/SocialShare';
import { formatCurrency } from '@/utils/formatters';

export interface Achievement {
  id: string;
  name: string;
  description: string;
  type: 'milestone' | 'rank' | 'deposit' | 'streak' | 'royal';
  icon: 'trophy' | 'award' | 'star' | 'crown' | 'zap' | 'dollar';
  tier: 'bronze' | 'silver' | 'gold' | 'platinum' | 'diamond';
  unlockedAt?: string;
  amountSpent?: number;
  rank?: number;
}

interface AchievementDisplayProps {
  achievement: Achievement;
  unlocked?: boolean;
  showShare?: boolean;
  username?: string;
  highlight?: boolean;
}

const AchievementDisplay: React.FC<AchievementDisplayProps> = ({
  achievement,
  unlocked = false,
  showShare = true,
  username,
  highlight = false
}) => {
  // Get the tier color class
  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'bronze': return 'bg-amber-700/20 text-amber-500 border-amber-700/30';
      case 'silver': return 'bg-slate-300/20 text-slate-300 border-slate-300/30';
      case 'gold': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'platinum': return 'bg-slate-400/20 text-slate-200 border-slate-400/30';
      case 'diamond': return 'bg-sky-300/20 text-sky-300 border-sky-300/30';
      default: return 'bg-white/20 text-white border-white/30';
    }
  };
  
  // Get the icon for the achievement
  const getIcon = (iconName: string, className: string = 'h-5 w-5') => {
    switch (iconName) {
      case 'trophy': return <Trophy className={className} />;
      case 'award': return <Award className={className} />;
      case 'star': return <Star className={className} />;
      case 'crown': return <Crown className={className} />;
      case 'zap': return <Zap className={className} />;
      case 'dollar': return <DollarSign className={className} />;
      default: return <Trophy className={className} />;
    }
  };
  
  return (
    <motion.div
      initial={highlight ? { scale: 0.9, opacity: 0 } : undefined}
      animate={highlight ? { scale: 1, opacity: 1 } : undefined}
      transition={{ duration: 0.5 }}
      className={`${highlight ? 'achievement-highlight' : ''}`}
    >
      <Card
        className={`glass-morphism border-white/10 group overflow-hidden transition-all ${
          unlocked ? 'opacity-100' : 'opacity-50 grayscale'
        } ${highlight ? 'ring-2 ring-royal-gold' : ''}`}
      >
        <CardHeader className="p-4 pb-2 flex flex-row items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className={`p-1.5 rounded-full ${getTierColor(achievement.tier)}`}>
              {getIcon(achievement.icon)}
            </div>
            <CardTitle className="text-base font-semibold line-clamp-1">
              {achievement.name}
            </CardTitle>
          </div>
          
          <Badge variant="outline" className={`${getTierColor(achievement.tier)}`}>
            {achievement.tier.charAt(0).toUpperCase() + achievement.tier.slice(1)}
          </Badge>
        </CardHeader>
        
        <CardContent className="p-4 pt-2">
          <CardDescription className={`text-sm ${unlocked ? 'text-white/70' : 'text-white/50'}`}>
            {achievement.description}
          </CardDescription>
          
          {unlocked && achievement.unlockedAt && (
            <div className="mt-2 flex items-center justify-between">
              <span className="text-xs text-white/50">
                Unlocked {new Date(achievement.unlockedAt).toLocaleDateString()}
              </span>
              
              {showShare && (
                <SocialShare
                  type="milestone"
                  data={{
                    milestone: achievement.name,
                    amountSpent: achievement.amountSpent,
                    rank: achievement.rank,
                    username
                  }}
                  iconOnly
                  className="h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity"
                />
              )}
            </div>
          )}
          
          {!unlocked && achievement.type === 'milestone' && achievement.amountSpent && (
            <div className="mt-2 text-xs text-white/50">
              Spend {formatCurrency(achievement.amountSpent)} to unlock
            </div>
          )}
          
          {!unlocked && achievement.type === 'rank' && achievement.rank && (
            <div className="mt-2 text-xs text-white/50">
              Reach rank #{achievement.rank} to unlock
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AchievementDisplay;
