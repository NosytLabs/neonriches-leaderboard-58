
import { MockeryAction, MockeryTier } from '@/types/mockery';
import { 
  Target, 
  Egg, 
  Shield, 
  Crown, 
  UserX, 
  AlertTriangle, 
  Laugh, 
  MessageCircle, 
  Flame, 
  Sparkles 
} from 'lucide-react';

// Get the cost of a mockery action
export const getMockeryCost = (action: MockeryAction): number => {
  const costs: Record<MockeryAction, number> = {
    tomatoes: 5,
    eggs: 10,
    stocks: 25,
    silence: 50,
    courtJester: 100,
    jester: 15,
    protected: 30,
    immune: 75,
    dunce: 20,
    roast: 35,
    ridicule: 40,
    taunt: 15,
    drama: 25,
    common: 5,
    uncommon: 15,
    rare: 25,
    epic: 50,
    legendary: 100
  };
  
  return costs[action] || 10;
};

// Get the duration of a mockery effect in hours
export const getMockeryDuration = (action: MockeryAction): number => {
  const durations: Record<MockeryAction, number> = {
    tomatoes: 24,
    eggs: 48,
    stocks: 72,
    silence: 120,
    courtJester: 168,
    jester: 48,
    protected: 168,
    immune: 336,
    dunce: 72,
    roast: 96,
    ridicule: 120,
    taunt: 48,
    drama: 72,
    common: 24,
    uncommon: 48,
    rare: 72,
    epic: 120,
    legendary: 168
  };
  
  return durations[action] || 24;
};

// Get the icon for a mockery action
export const getMockeryIcon = (action: MockeryAction) => {
  const icons: Record<MockeryAction, React.ElementType> = {
    tomatoes: Target,
    eggs: Egg,
    stocks: AlertTriangle,
    silence: UserX,
    courtJester: Crown,
    jester: Laugh,
    protected: Shield,
    immune: Shield,
    dunce: AlertTriangle,
    roast: Flame,
    ridicule: Laugh,
    taunt: MessageCircle,
    drama: Flame,
    common: Target,
    uncommon: Egg,
    rare: AlertTriangle,
    epic: Crown,
    legendary: Sparkles
  };
  
  return icons[action] || Target;
};

// Get the color for a mockery action
export const getMockeryColor = (action: MockeryAction): string => {
  const colors: Record<MockeryAction, string> = {
    tomatoes: 'royal-crimson',
    eggs: 'amber-300',
    stocks: 'amber-800',
    silence: 'royal-purple',
    courtJester: 'royal-gold',
    jester: 'emerald-400',
    protected: 'royal-navy',
    immune: 'royal-gold',
    dunce: 'gray-400',
    roast: 'royal-crimson',
    ridicule: 'pink-400',
    taunt: 'blue-400',
    drama: 'purple-400',
    common: 'gray-400',
    uncommon: 'green-400',
    rare: 'blue-400',
    epic: 'purple-400',
    legendary: 'royal-gold'
  };
  
  return colors[action] || 'royal-crimson';
};

// Get the description for a mockery action
export const getMockeryDescription = (action: MockeryAction): string => {
  const descriptions: Record<MockeryAction, string> = {
    tomatoes: "Pelts the target with virtual rotten tomatoes, staining their profile with public ridicule.",
    eggs: "Bombards the unfortunate noble with eggs, leaving their reputation a sticky mess.",
    stocks: "Places the user in the village stocks for public humiliation and mockery.",
    silence: "Removes the user's ability to comment or post for a period of time.",
    courtJester: "The ultimate shame - appoints this lavish spender as the royal court's jester.",
    jester: "Assigns a jester's hat to the user's profile, marking them as a fool.",
    protected: "Protects from mockery effects for a period of time.",
    immune: "Grants immunity from all mockery, regardless of price paid.",
    dunce: "Places a dunce cap on the user, marking them as particularly foolish.",
    roast: "Subjects the user to a blistering public roast of their spending habits.",
    ridicule: "Publicly ridicules the user with specially written mocking statements.",
    taunt: "Shows taunting messages whenever the user tries to interact.",
    drama: "Creates a dramatic announcement about the user's foolish spending.",
    common: "A basic mockery effect that costs little but does little.",
    uncommon: "An uncommon mockery with moderate effects and visibility.",
    rare: "A rare mockery that will draw significant attention to the target.",
    epic: "An epic mockery that few can afford but many will notice.",
    legendary: "The ultimate mockery, reserved for those who truly deserve magnificently public humiliation."
  };
  
  return descriptions[action] || "A mysterious form of mockery with unknown effects.";
};

// Get the tier of a mockery action
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  const tiers: Record<MockeryAction, MockeryTier> = {
    tomatoes: 'common',
    eggs: 'uncommon',
    stocks: 'rare',
    silence: 'epic',
    courtJester: 'legendary',
    jester: 'uncommon',
    protected: 'rare',
    immune: 'legendary',
    dunce: 'uncommon',
    roast: 'rare',
    ridicule: 'epic',
    taunt: 'uncommon',
    drama: 'rare',
    common: 'common',
    uncommon: 'uncommon',
    rare: 'rare',
    epic: 'epic',
    legendary: 'legendary'
  };
  
  return tiers[action] || 'common';
};

// Get the tier level of a mockery tier (1-5)
export const getMockeryTierLevel = (tier: MockeryTier): number => {
  const levels: Record<MockeryTier, number> = {
    common: 1,
    uncommon: 2,
    rare: 3,
    epic: 4,
    legendary: 5
  };
  
  return levels[tier] || 1;
};
