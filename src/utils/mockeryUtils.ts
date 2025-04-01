
import { MockeryAction, MockeryTier } from '@/types/mockery-types';
import { AlertCircle, Egg, Crown, Award, UserX, CloudOff, Flag, MessageCircle, Laugh, Swords, Shield } from 'lucide-react';

/**
 * Get the appropriate icon for a mockery action
 */
export const getMockeryActionIcon = (action: MockeryAction) => {
  switch (action) {
    case 'tomatoes': return AlertCircle;
    case 'eggs': return Egg;
    case 'putridEggs': return Egg;
    case 'crown': return Crown;
    case 'stocks': return Award;
    case 'jester': return Award;
    case 'shame': return UserX;
    case 'silence': return UserX;
    case 'courtJester': return Award;
    case 'smokeBomb': return CloudOff;
    case 'protection': return Shield;
    case 'taunt': return MessageCircle;
    case 'mock': return Laugh;
    case 'challenge': return Flag;
    case 'joust': return Swords;
    case 'duel': return Shield;
    default: return AlertCircle;
  }
};

/**
 * Get the tier of a mockery action
 */
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  switch (action) {
    case 'crown':
    case 'jester':
      return 'legendary';
    case 'shame':
    case 'courtJester':
    case 'duel':
      return 'epic';
    case 'stocks':
    case 'silence':
    case 'joust':
      return 'rare';
    case 'putridEggs':
    case 'challenge':
    case 'mock':
      return 'uncommon';
    case 'tomatoes':
    case 'eggs':
    case 'smokeBomb':
    case 'protection':
    case 'taunt':
      return 'common';
    default:
      return 'common';
  }
};

/**
 * Get the price of a mockery action
 */
export const getMockeryActionPrice = (action: MockeryAction): number => {
  switch (action) {
    case 'crown': return 1000;
    case 'jester': return 800;
    case 'shame': return 500;
    case 'courtJester': return 400;
    case 'stocks': return 300;
    case 'silence': return 250;
    case 'putridEggs': return 150;
    case 'smokeBomb': return 100;
    case 'tomatoes': return 50;
    case 'eggs': return 30;
    case 'protection': return 200;
    case 'taunt': return 75;
    case 'mock': return 100;
    case 'challenge': return 150;
    case 'joust': return 300;
    case 'duel': return 450;
    default: return 50;
  }
};

/**
 * Alias for getMockeryActionPrice to maintain backward compatibility
 */
export const getMockeryCost = getMockeryActionPrice;

/**
 * Get the color of a mockery action icon
 */
export const getMockeryActionIconColor = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes': return 'text-red-500';
    case 'eggs': return 'text-yellow-500';
    case 'putridEggs': return 'text-green-500';
    case 'crown': return 'text-royal-gold';
    case 'stocks': return 'text-amber-600';
    case 'jester': return 'text-purple-500';
    case 'shame': return 'text-royal-crimson';
    case 'silence': return 'text-gray-400';
    case 'courtJester': return 'text-indigo-400';
    case 'smokeBomb': return 'text-gray-600';
    case 'protection': return 'text-green-400';
    case 'taunt': return 'text-orange-500';
    case 'mock': return 'text-blue-500';
    case 'challenge': return 'text-teal-500';
    case 'joust': return 'text-indigo-600';
    case 'duel': return 'text-red-600';
    default: return 'text-gray-400';
  }
};

/**
 * Get the name of a mockery action
 */
export const getMockeryName = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes': return 'Throw Tomatoes';
    case 'eggs': return 'Throw Eggs';
    case 'putridEggs': return 'Throw Putrid Eggs';
    case 'crown': return 'Mockery Crown';
    case 'stocks': return 'Place in Stocks';
    case 'jester': return 'Make a Jester';
    case 'shame': return 'Public Shame';
    case 'silence': return 'Silent Treatment';
    case 'courtJester': return 'Court Jester';
    case 'smokeBomb': return 'Smoke Bomb';
    case 'protection': return 'Royal Protection';
    case 'taunt': return 'Royal Taunt';
    case 'mock': return 'Public Mockery';
    case 'challenge': return 'Royal Challenge';
    case 'joust': return 'Challenge to Joust';
    case 'duel': return 'Royal Duel';
    default: return 'Unknown Action';
  }
};

/**
 * Get the description of a mockery action
 */
export const getMockeryDescription = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes': return 'Throw tomatoes at this user, a classic form of public mockery.';
    case 'eggs': return 'Throw eggs at this user, leaving them with egg on their face.';
    case 'putridEggs': return 'Throw putrid eggs at this user. The smell lingers for days.';
    case 'crown': return 'Place a mockery crown on their head, showing their foolishness to all.';
    case 'stocks': return 'Place this user in the stocks for public ridicule.';
    case 'jester': return 'Force them to wear the jester\'s hat and entertain the royal court.';
    case 'shame': return 'Ring the bell of shame! Shame! Shame! Shame!';
    case 'silence': return 'Subject them to the silent treatment. Their messages go unheard.';
    case 'courtJester': return 'Appoint them as the official court jester, to be mocked by all.';
    case 'smokeBomb': return 'Throw a smoke bomb, temporarily obscuring their profile from view.';
    case 'protection': return 'Shield yourself from mockery with royal protection.';
    case 'taunt': return 'Publicly taunt this user with royal proclamations.';
    case 'mock': return 'Subject them to public mockery in the town square.';
    case 'challenge': return 'Challenge them to prove their worth before the kingdom.';
    case 'joust': return 'Challenge them to a joust, where honor is at stake.';
    case 'duel': return 'Challenge them to a royal duel, the highest form of contest.';
    default: return 'An unknown form of mockery.';
  }
};

/**
 * Get the CSS class for a mockery tier color
 */
export const getMockeryTierColorClass = (tier: MockeryTier): string => {
  switch (tier) {
    case 'legendary': return 'text-royal-gold';
    case 'epic': return 'text-purple-500';
    case 'rare': return 'text-blue-500';
    case 'uncommon': return 'text-green-500';
    case 'common': return 'text-gray-400';
    default: return 'text-gray-400';
  }
};
