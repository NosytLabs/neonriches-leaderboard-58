
import { MockeryAction, MockeryTier } from '@/types/mockery';
import { 
  Crown, 
  Egg, 
  MessageSquare, 
  Music, 
  VolumeX, 
  User, 
  Flame, 
  Star, 
  Shield, 
  AlertTriangle, 
  ThumbsDown, 
  CloudLightning 
} from 'lucide-react';

export const getMockeryIcon = (action: MockeryAction) => {
  switch (action) {
    case 'tomatoes': return Egg;
    case 'eggs': return Egg;
    case 'stocks': return AlertTriangle;
    case 'silence': return VolumeX;
    case 'courtJester': return Crown;
    case 'jester': return Crown;
    case 'protected': return Shield;
    case 'immune': return Star;
    case 'dunce': return User;
    case 'roast': return Flame;
    case 'ridicule': return ThumbsDown;
    case 'taunt': return MessageSquare;
    case 'drama': return CloudLightning;
    default: return Crown;
  }
};

export const getMockeryColor = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes': return 'text-red-500';
    case 'eggs': return 'text-yellow-300';
    case 'stocks': return 'text-amber-700';
    case 'silence': return 'text-gray-400';
    case 'courtJester': return 'text-purple-400';
    case 'jester': return 'text-indigo-400';
    case 'protected': return 'text-blue-400';
    case 'immune': return 'text-royal-gold';
    case 'dunce': return 'text-gray-400';
    case 'roast': return 'text-orange-500';
    case 'ridicule': return 'text-pink-400';
    case 'taunt': return 'text-green-400';
    case 'drama': return 'text-violet-400';
    default: return 'text-gray-400';
  }
};

export const getMockeryPrice = (action: MockeryAction): number => {
  switch (action) {
    case 'tomatoes': return 0.25;
    case 'eggs': return 0.50;
    case 'stocks': return 1.00;
    case 'silence': return 1.50;
    case 'courtJester': return 2.00;
    case 'jester': return 2.50;
    case 'protected': return 5.00;
    case 'immune': return 10.00;
    case 'dunce': return 1.75;
    case 'roast': return 1.25;
    case 'ridicule': return 1.50;
    case 'taunt': return 1.00;
    case 'drama': return 3.00;
    default: return 1.00;
  }
};

export const getMockeryText = (action: MockeryAction, targetName: string = 'this user'): string => {
  switch (action) {
    case 'tomatoes': return `Pelt ${targetName} with rotten tomatoes`;
    case 'eggs': return `Hurl rotten eggs at ${targetName}`;
    case 'stocks': return `Place ${targetName} in the public stocks`;
    case 'silence': return `Silence ${targetName} with a royal decree`;
    case 'courtJester': return `Appoint ${targetName} as the court jester`;
    case 'jester': return `Make ${targetName} the fool of the court`;
    case 'protected': return `Grant ${targetName} royal protection`;
    case 'immune': return `Grant ${targetName} royal immunity`;
    case 'dunce': return `Place a dunce cap on ${targetName}`;
    case 'roast': return `Subject ${targetName} to a royal roasting`;
    case 'ridicule': return `Subject ${targetName} to public ridicule`;
    case 'taunt': return `Publicly taunt ${targetName}`;
    case 'drama': return `Create court drama involving ${targetName}`;
    default: return `Shame ${targetName}`;
  }
};

export const convertActionToTier = (action: MockeryAction): MockeryTier => {
  if (['tomatoes', 'dunce', 'taunt'].includes(action)) {
    return 'common';
  } else if (['eggs', 'roast', 'ridicule'].includes(action)) {
    return 'uncommon';
  } else if (['stocks', 'silence', 'drama'].includes(action)) {
    return 'rare';
  } else if (['courtJester', 'jester', 'protected'].includes(action)) {
    return 'epic';
  } else if (['immune'].includes(action)) {
    return 'legendary';
  }
  return 'common';
};

export const getMockeryDuration = (action: MockeryAction): number => {
  switch (action) {
    case 'tomatoes': return 24;
    case 'eggs': return 48;
    case 'stocks': return 72;
    case 'silence': return 24;
    case 'courtJester': return 48;
    case 'jester': return 48;
    case 'protected': return 24;
    case 'immune': return 72;
    case 'dunce': return 36;
    case 'roast': return 24;
    case 'ridicule': return 48;
    case 'taunt': return 24;
    case 'drama': return 72;
    default: return 24;
  }
};
