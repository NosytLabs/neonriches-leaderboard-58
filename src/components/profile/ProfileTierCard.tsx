
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UserTier } from '@/types/user';
import { Badge } from '@/components/ui/badge';
import { Crown, Zap, ChevronUp, Star, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TierInfo {
  name: string;
  color: string;
  benefits: string[];
  description: string;
  icon: JSX.Element;
}

interface ProfileTierCardProps {
  tier: UserTier;
  canUpgrade?: boolean;
  onUpgrade?: () => void;
}

const tiers: Record<UserTier, TierInfo> = {
  'free': {
    name: 'Free Tier',
    color: 'text-gray-500',
    benefits: ['Basic access to the platform', 'Limited leaderboard visibility'],
    description: 'The starting tier with basic features.',
    icon: <Star className="h-5 w-5" />
  },
  'basic': {
    name: 'Basic',
    color: 'text-blue-500',
    benefits: ['Full platform access', 'Leaderboard participation', 'Basic profile customization'],
    description: 'The standard tier for engaged users.',
    icon: <Star className="h-5 w-5" />
  },
  'premium': {
    name: 'Premium',
    color: 'text-purple-500',
    benefits: ['Enhanced profile features', 'Premium badges', 'Higher spending impact'],
    description: 'Get more from your profile with premium features.',
    icon: <Zap className="h-5 w-5" />
  },
  'elite': {
    name: 'Elite',
    color: 'text-indigo-500',
    benefits: ['Elite badges and cosmetics', 'Amplified leaderboard presence', 'Special events access'],
    description: 'Stand out with elite status and features.',
    icon: <Shield className="h-5 w-5" />
  },
  'royal': {
    name: 'Royal',
    color: 'text-yellow-500',
    benefits: ['Royal insignia', 'Maximum leaderboard impact', 'Exclusive royal features'],
    description: 'The highest tier with royal privileges.',
    icon: <Crown className="h-5 w-5" />
  },
  'founder': {
    name: 'Founder',
    color: 'text-green-500',
    benefits: ['Early supporter badge', 'Founder recognition', 'Platform influence'],
    description: 'Special tier for our early supporters.',
    icon: <Star className="h-5 w-5" />
  },
  'pro': {
    name: 'Pro',
    color: 'text-blue-600',
    benefits: ['Enhanced tools', 'Profile boost', 'Pro community access'],
    description: 'Professional features for serious users.',
    icon: <Zap className="h-5 w-5" />
  },
  'gold': {
    name: 'Gold',
    color: 'text-yellow-400',
    benefits: ['Gold member status', 'Gold-tier features', 'Enhanced visibility'],
    description: 'Gold tier with exclusive benefits.',
    icon: <Star className="h-5 w-5" />
  },
  'silver': {
    name: 'Silver',
    color: 'text-gray-400',
    benefits: ['Silver privileges', 'Boosted features', 'Silver recognition'],
    description: 'Silver tier with custom benefits.',
    icon: <Star className="h-5 w-5" />
  },
  'bronze': {
    name: 'Bronze',
    color: 'text-amber-600',
    benefits: ['Bronze features', 'Enhanced profile', 'Bronze community'],
    description: 'Bronze tier with decent bonuses.',
    icon: <Star className="h-5 w-5" />
  },
  'vip': {
    name: 'VIP',
    color: 'text-pink-500',
    benefits: ['VIP treatment', 'Exclusive access', 'Premium support'],
    description: 'Very important person privileges.',
    icon: <Crown className="h-5 w-5" />
  },
  'whale': {
    name: 'Whale',
    color: 'text-blue-400',
    benefits: ['Maximum impact', 'Top tier benefits', 'Whale status'],
    description: 'Top-level contributors get whale status.',
    icon: <Crown className="h-5 w-5" />
  },
  'shark': {
    name: 'Shark',
    color: 'text-blue-600',
    benefits: ['Predator status', 'Enhanced impact', 'Shark recognition'],
    description: 'Second-tier heavy contributors.',
    icon: <Zap className="h-5 w-5" />
  },
  'dolphin': {
    name: 'Dolphin',
    color: 'text-blue-300',
    benefits: ['Notable contributor', 'Enhanced features', 'Dolphin badge'],
    description: 'Significant contributors get dolphin status.',
    icon: <Star className="h-5 w-5" />
  },
  'noble': {
    name: 'Noble',
    color: 'text-purple-400',
    benefits: ['Noble status', 'Court privileges', 'Royal recognition'],
    description: 'Noble status within the royal court.',
    icon: <Crown className="h-5 w-5" />
  },
  'standard': {
    name: 'Standard',
    color: 'text-gray-500',
    benefits: ['Full features', 'Standard benefits', 'Community access'],
    description: 'Standard tier for regular users.',
    icon: <Star className="h-5 w-5" />
  },
  'legendary': {
    name: 'Legendary',
    color: 'text-orange-500',
    benefits: ['Legendary status', 'Maximum benefits', 'Exclusive features'],
    description: 'Legendary tier with mythical status.',
    icon: <Crown className="h-5 w-5" />
  },
  'diamond': {
    name: 'Diamond',
    color: 'text-blue-300',
    benefits: ['Diamond privileges', 'Brilliant features', 'Rare status'],
    description: 'Diamond tier with the hardest benefits.',
    icon: <Star className="h-5 w-5" />
  },
  'platinum': {
    name: 'Platinum',
    color: 'text-gray-300',
    benefits: ['Platinum recognition', 'Enhanced features', 'Elevated status'],
    description: 'Platinum tier for distinguished users.',
    icon: <Shield className="h-5 w-5" />
  }
};

const ProfileTierCard: React.FC<ProfileTierCardProps> = ({ 
  tier, 
  canUpgrade = true, 
  onUpgrade 
}) => {
  // Ensure tier is valid
  const userTier = tier as UserTier || 'basic';
  
  // Get tier info or default to basic
  const tierInfo = tiers[userTier] || tiers.basic;
  
  return (
    <Card className="relative overflow-hidden">
      <div className={cn("h-1.5", tierInfo.color.replace('text-', 'bg-'))}></div>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2">
          <span className={tierInfo.color}>{tierInfo.icon}</span>
          <span>{tierInfo.name} Tier</span>
          <Badge variant="outline" className={cn("ml-2 border", tierInfo.color)}>
            {userTier.toUpperCase()}
          </Badge>
        </CardTitle>
        <p className="text-sm text-muted-foreground">{tierInfo.description}</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p className="text-sm font-medium">Benefits:</p>
          <ul className="text-sm space-y-1">
            {tierInfo.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <ChevronUp className="h-4 w-4 mr-2 shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
          
          {canUpgrade && onUpgrade && (
            <Button 
              onClick={onUpgrade} 
              className="w-full mt-4"
              variant="outline"
            >
              <ChevronUp className="h-4 w-4 mr-2" />
              Upgrade Tier
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileTierCard;
