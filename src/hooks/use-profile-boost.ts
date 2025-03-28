
// Define the types for profile boosts
export type BoostEffectType = "glow" | "sparkle" | "crown" | string;

export interface ProfileBoost {
  id: string;
  effectId: BoostEffectType;
  startTime: number;
  endTime: number;
  type: "visibility" | "rank" | "appearance";
  strength: number;
  appliedBy: string;
}

// Define the boost effect interface
export interface BoostEffect {
  id: BoostEffectType;
  name: string;
  description: string;
  icon?: string;
  bonusText: string;
  cssClass: string;
}

// Available boost effects
const boostEffects: Record<string, BoostEffect> = {
  glow: {
    id: "glow",
    name: "Golden Glow",
    description: "A subtle golden glow surrounds your profile",
    icon: "✨",
    bonusText: "+10% Visibility",
    cssClass: "profile-boost-glow"
  },
  sparkle: {
    id: "sparkle",
    name: "Royal Sparkle",
    description: "Sparkling effects add prestige to your profile",
    icon: "💫",
    bonusText: "+25% Visibility",
    cssClass: "profile-boost-sparkle"
  },
  crown: {
    id: "crown",
    name: "Crown Aura",
    description: "A majestic crown aura appears above your profile",
    icon: "👑",
    bonusText: "+50% Visibility",
    cssClass: "profile-boost-crown"
  }
};

export function useProfileBoost(user?: any) {
  // Get all active boosts for a user
  const getActiveBoosts = () => {
    if (!user || !user.profileBoosts) return [];
    const now = Date.now();
    return user.profileBoosts.filter((boost: ProfileBoost) => 
      boost.startTime <= now && boost.endTime >= now
    );
  };

  // Check if a boost is active
  const isBoostActive = (boost: ProfileBoost): boolean => {
    const now = Date.now();
    return boost.startTime <= now && boost.endTime >= now;
  };

  // Get time remaining for a boost
  const getBoostTimeRemaining = (boost: ProfileBoost): number => {
    const now = Date.now();
    if (boost.endTime <= now) return 0;
    return boost.endTime - now;
  };

  // Format time remaining as a string
  const formatBoostTimeRemaining = (timeMs: number): string => {
    if (timeMs <= 0) return "Expired";
    
    const seconds = Math.floor(timeMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    
    if (days > 0) return `${days}d ${hours % 24}h`;
    if (hours > 0) return `${hours}h ${minutes % 60}m`;
    if (minutes > 0) return `${minutes}m ${seconds % 60}s`;
    return `${seconds}s`;
  };

  // Get boost effect details by ID
  const getBoostEffect = (effectId: BoostEffectType): BoostEffect | null => {
    return boostEffects[effectId] || null;
  };

  // Format time remaining in a user-friendly format
  const formatTimeRemaining = (timeMs: number): string => {
    return formatBoostTimeRemaining(timeMs);
  };

  // Check if user has any active boosts
  const hasActiveBoosts = (): boolean => {
    return getActiveBoosts().length > 0;
  };

  // Get CSS classes for active boosts
  const getBoostClasses = (): string => {
    const activeBoosts = getActiveBoosts();
    if (activeBoosts.length === 0) return '';
    
    return activeBoosts
      .map(boost => boostEffects[boost.effectId]?.cssClass || '')
      .filter(Boolean)
      .join(' ');
  };

  return {
    isBoostActive,
    getBoostTimeRemaining,
    formatBoostTimeRemaining,
    getActiveBoosts,
    activeBoosts: getActiveBoosts(),
    getBoostEffect,
    formatTimeRemaining,
    hasActiveBoosts,
    getBoostClasses
  };
}
