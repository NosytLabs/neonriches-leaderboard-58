
import { useState, useEffect } from 'react';
import { ShameAction } from '@/types/mockery';

export type ShameEffect = {
  active: boolean;
  action: ShameAction;
  expiresAt: string | null;
  appliedBy: string | null;
};

export const useShameEffect = (username: string) => {
  const [shameEffect, setShameEffect] = useState<ShameEffect>({
    active: false,
    action: 'tomatoes',
    expiresAt: null,
    appliedBy: null
  });

  const getShameEffectIcon = (action: ShameAction) => {
    switch (action) {
      case 'tomatoes':
        return '🍅';
      case 'eggs':
        return '🥚';
      case 'putridEggs':
        return '🥚';
      case 'stocks':
        return '🔒';
      case 'silence':
        return '🤐';
      case 'courtJester':
        return '🃏';
      case 'dunce':
        return '🧢';
      case 'smokeBomb':
        return '💨';
      case 'jester':
        return '🤡';
      case 'ridicule':
        return '😂';
      case 'humiliate':
        return '😱';
      case 'expose':
        return '👁️';
      case 'mock':
        return '🤨';
      case 'shame':
        return '😓';
      default:
        return '🍅';
    }
  };

  const getShameEffectName = (action: ShameAction) => {
    switch (action) {
      case 'tomatoes':
        return 'Tomatoes';
      case 'eggs':
        return 'Egg Shower';
      case 'putridEggs':
        return 'Putrid Eggs';
      case 'stocks':
        return 'Public Stocks';
      case 'silence':
        return 'Royal Silence';
      case 'courtJester':
        return 'Court Jester';
      case 'dunce':
        return 'Dunce Cap';
      case 'smokeBomb':
        return 'Smoke Bomb';
      case 'jester':
        return 'Jester Curse';
      case 'ridicule':
        return 'Public Ridicule';
      case 'humiliate':
        return 'Royal Humiliation';
      case 'expose':
        return 'Exposed Secrets';
      case 'mock':
        return 'Mockery';
      case 'shame':
        return 'Walk of Shame';
      default:
        return 'Unknown Shame';
    }
  };

  const getShameEffectDescription = (action: ShameAction) => {
    switch (action) {
      case 'tomatoes':
        return 'This user has been pelted with rotten tomatoes by the crowd.';
      case 'eggs':
        return 'This user has been showered with eggs for their dishonor.';
      case 'putridEggs':
        return 'This user reeks of the putrid eggs thrown at them.';
      case 'stocks':
        return 'This user has been placed in the public stocks for general mockery.';
      case 'silence':
        return 'This user has been silenced by royal decree.';
      case 'courtJester':
        return 'This user has been demoted to court jester status.';
      case 'dunce':
        return 'This user wears the dunce cap for their foolish spending.';
      case 'smokeBomb':
        return 'This user is obscured by a cloud of smoke from their embarrassment.';
      case 'jester':
        return 'This user has been cursed to appear as a jester to all.';
      case 'ridicule':
        return 'This user is being openly ridiculed throughout the kingdom.';
      case 'humiliate':
        return 'This user suffers from royal humiliation.';
      case 'expose':
        return 'This user\'s darkest secrets have been exposed to the public.';
      case 'mock':
        return 'This user is being mocked by all who see them.';
      case 'shame':
        return 'This user is on a public walk of shame.';
      default:
        return 'This user is suffering from an unknown shame...';
    }
  };

  const applyShameEffect = (action: ShameAction, duration = 3600000, appliedBy = null) => {
    const expiresAt = new Date(Date.now() + duration).toISOString();
    setShameEffect({
      active: true,
      action,
      expiresAt,
      appliedBy
    });

    return true;
  };

  const removeShameEffect = () => {
    setShameEffect({
      active: false,
      action: 'tomatoes',
      expiresAt: null,
      appliedBy: null
    });
  };

  const checkShameEffectExpiration = () => {
    if (shameEffect.active && shameEffect.expiresAt) {
      const expiryTime = new Date(shameEffect.expiresAt).getTime();
      if (Date.now() > expiryTime) {
        removeShameEffect();
      }
    }
  };

  useEffect(() => {
    // Check if the shame effect has expired
    checkShameEffectExpiration();

    // Set up a timer to check for expiration
    const interval = setInterval(checkShameEffectExpiration, 60000);
    return () => clearInterval(interval);
  }, [shameEffect]);

  return {
    shameEffect,
    applyShameEffect,
    removeShameEffect,
    getShameEffectIcon,
    getShameEffectName,
    getShameEffectDescription
  };
};

export default useShameEffect;
