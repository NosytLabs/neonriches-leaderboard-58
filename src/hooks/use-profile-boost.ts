
import { useCallback } from 'react';
import { UserProfile } from '@/types/user';

export function useProfileBoost(user: UserProfile) {
  const hasActiveBoosts = useCallback(() => {
    if (!user) return false;
    
    // Check if user has any active boosts
    return !!(
      user.tier === 'pro' || 
      user.tier === 'whale' || 
      user.tier === 'shark' || 
      user.tier === 'dolphin' ||
      (user.boosts && user.boosts.length > 0)
    );
  }, [user]);

  const getBoostClasses = useCallback(() => {
    if (!user) return '';
    
    let classes: string[] = [];
    
    // Apply tier-based boosts
    if (user.tier === 'pro') {
      classes.push('profile-boost-pro');
    } else if (user.tier === 'whale') {
      classes.push('profile-boost-whale');
    } else if (user.tier === 'shark') {
      classes.push('profile-boost-shark');
    } else if (user.tier === 'dolphin') {
      classes.push('profile-boost-dolphin');
    }
    
    // Apply specific boosts
    if (user.boosts) {
      user.boosts.forEach(boost => {
        if (boost.type === 'border') {
          classes.push(`profile-boost-border-${boost.style}`);
        } else if (boost.type === 'effect') {
          classes.push(`profile-boost-effect-${boost.style}`);
        } else if (boost.type === 'background') {
          classes.push(`profile-boost-bg-${boost.style}`);
        }
      });
    }
    
    // Apply team-specific boost
    if (user.team === 'red') {
      classes.push('profile-boost-team-red');
    } else if (user.team === 'green') {
      classes.push('profile-boost-team-green');
    } else if (user.team === 'blue') {
      classes.push('profile-boost-team-blue');
    }
    
    return classes.join(' ');
  }, [user]);

  return { hasActiveBoosts, getBoostClasses };
}
