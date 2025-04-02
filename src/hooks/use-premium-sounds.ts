
import { useState } from 'react';
import { useSound } from './sounds/use-sound';

/**
 * Hook for premium sound effects
 */
export const usePremiumSounds = () => {
  const sound = useSound();
  const [premiumSounds, setPremiumSounds] = useState<Record<string, string>>({
    'royal': '/sounds/premium/royal_fanfare.mp3',
    'epic': '/sounds/premium/epic_achievement.mp3',
    'legendary': '/sounds/premium/legendary_unlock.mp3',
    'vip': '/sounds/premium/vip_notification.mp3',
    'gold': '/sounds/premium/gold_coins.mp3'
  });
  
  const [tierSounds, setTierSounds] = useState<Record<string, string>>({
    'royal': '/sounds/tiers/royal_tier.mp3',
    'premium': '/sounds/tiers/premium_tier.mp3',
    'gold': '/sounds/tiers/gold_tier.mp3',
    'diamond': '/sounds/tiers/diamond_tier.mp3',
    'platinum': '/sounds/tiers/platinum_tier.mp3',
    'silver': '/sounds/tiers/silver_tier.mp3',
    'bronze': '/sounds/tiers/bronze_tier.mp3'
  });
  
  const [eventSounds, setEventSounds] = useState<Record<string, string>>({
    'rank_up': '/sounds/events/rank_up.mp3',
    'leaderboard_enter': '/sounds/events/leaderboard_enter.mp3',
    'top_ten': '/sounds/events/top_ten.mp3',
    'team_victory': '/sounds/events/team_victory.mp3',
    'mockery': '/sounds/events/mockery.mp3',
    'crown': '/sounds/events/crown.mp3',
    'challenge': '/sounds/events/challenge.mp3'
  });
  
  const playPremiumSound = (type: string) => {
    if (premiumSounds[type]) {
      sound.playSound('success');
    }
  };
  
  const playTierSound = (tier: string) => {
    if (tierSounds[tier]) {
      sound.playSound('levelUp');
    }
  };
  
  const playEventSound = (event: string) => {
    if (eventSounds[event]) {
      sound.playSound('notification');
    }
  };
  
  return {
    playPremiumSound,
    playTierSound,
    playEventSound,
    premiumSounds,
    tierSounds,
    eventSounds
  };
};

export default usePremiumSounds;
