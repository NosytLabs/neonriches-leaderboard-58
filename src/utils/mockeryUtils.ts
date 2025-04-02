
import { MockeryAction, MockeryTier } from '@/types/mockery-types';
import { AlertCircle, Crown, Egg, Award, MessageCircle, Flame, Heart, Skull, ThumbsDown, Shield, UserX, CloudOff } from 'lucide-react';

// Get readable name for mockery action
export const getMockeryName = (action: MockeryAction | string): string => {
  switch (action) {
    case 'tomato': return 'Tomatoes';
    case 'egg': return 'Eggs';
    case 'putridEgg': return 'Putrid Egg';
    case 'crown': return 'Crown Flip';
    case 'thumbsDown': return 'Thumbs Down';
    case 'mock': return 'Mock';
    case 'stocks': return 'Stocks';
    case 'jester': return 'Jester Hat';
    case 'courtJester': return 'Court Jester';
    case 'silence': return 'Silence';
    case 'taunt': return 'Royal Taunt';
    case 'smokeBomb': return 'Smoke Bomb';
    case 'protection': return 'Royal Protection';
    case 'shame': return 'Public Shame';
    case 'challenge': return 'Challenge';
    case 'joust': return 'Joust';
    case 'duel': return 'Royal Duel';
    case 'flame': return 'Flame';
    case 'heart': return 'Heart';
    case 'skull': return 'Skull';
    case 'thumbs_down': return 'Thumbs Down';
    case 'royal_decree': return 'Royal Decree';
    default: return action;
  }
};

// Get mockery tier
export const getMockeryTier = (action: MockeryAction | string): MockeryTier => {
  switch (action) {
    case 'tomato':
    case 'egg':
    case 'mock':
    case 'thumbsDown':
    case 'taunt':
      return 'common';
    case 'putridEgg':
    case 'jester':
    case 'flame':
    case 'heart':
      return 'uncommon';
    case 'crown':
    case 'stocks':
    case 'skull':
    case 'shame':
      return 'rare';
    case 'courtJester':
    case 'silence':
      return 'epic';
    case 'smokeBomb':
    case 'protection':
    case 'joust':
    case 'duel':
    case 'royal_decree':
      return 'legendary';
    default:
      return 'common';
  }
};

// Get mockery cost
export const getMockeryCost = (action: MockeryAction | string): number => {
  switch (action) {
    case 'tomato': return 10;
    case 'egg': return 15;
    case 'putridEgg': return 25;
    case 'crown': return 50;
    case 'thumbsDown': return 5;
    case 'mock': return 10;
    case 'stocks': return 35;
    case 'jester': return 30;
    case 'courtJester': return 30;
    case 'silence': return 40;
    case 'taunt': return 10;
    case 'smokeBomb': return 45;
    case 'protection': return 75;
    case 'shame': return 20;
    case 'challenge': return 30;
    case 'joust': return 40;
    case 'duel': return 50;
    case 'royal_decree': return 100;
    case 'flame': return 15;
    case 'heart': return 20;
    case 'skull': return 25;
    case 'thumbs_down': return 10;
    default: return 10;
  }
};

// Mockery descriptions
export const mockeryDescriptions: Record<string, string> = {
  tomato: "Throw a tomato at the target, causing temporary embarrassment.",
  egg: "Pelt the target with eggs, creating a messy situation.",
  putridEgg: "Throw a rotten egg that leaves a lingering unpleasant odor.",
  crown: "Topple the target's crown, reducing their royal status temporarily.",
  thumbsDown: "Express your disapproval of the target's actions.",
  mock: "Openly mock the target with jeering and ridicule.",
  stocks: "Place the target in the public stocks for all to see.",
  jester: "Assign the target a jester hat, making them the butt of jokes.",
  courtJester: "Demote the target to court jester, requiring them to entertain the court.",
  silence: "Temporarily prevent the target from speaking in royal discussions.",
  taunt: "Taunt the target with insulting words and gestures.",
  smokeBomb: "Throw a smoke bomb that temporarily obscures the target's visibility.",
  protection: "Shield yourself from mockery with royal protection.",
  shame: "Publicly shame the target for their dishonorable behavior.",
  challenge: "Challenge the target to prove their worth.",
  joust: "Challenge the target to a virtual jousting match.",
  duel: "Engage the target in a prestigious royal duel.",
  royal_decree: "Issue a royal decree declaring the target's embarrassment.",
  laugh: "Laugh at the target's expense, diminishing their social standing."
};

// Get icon component for mockery action
export const getMockeryActionIcon = (action: MockeryAction | string) => {
  switch (action) {
    case 'tomato': return AlertCircle;
    case 'egg': return Egg;
    case 'putridEgg': return Egg;
    case 'crown': return Crown;
    case 'thumbsDown': return ThumbsDown;
    case 'mock': return MessageCircle;
    case 'stocks': return Award;
    case 'jester': return Award;
    case 'courtJester': return Award;
    case 'silence': return UserX;
    case 'taunt': return MessageCircle;
    case 'smokeBomb': return CloudOff;
    case 'protection': return Shield;
    case 'shame': return UserX;
    case 'challenge': return Award;
    case 'joust': return Award;
    case 'duel': return Award;
    case 'flame': return Flame;
    case 'heart': return Heart;
    case 'skull': return Skull;
    case 'thumbs_down': return ThumbsDown;
    case 'royal_decree': return Crown;
    case 'laugh': return MessageCircle;
    default: return AlertCircle;
  }
};
