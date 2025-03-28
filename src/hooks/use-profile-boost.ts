
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

export function useProfileBoost() {
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

  return {
    isBoostActive,
    getBoostTimeRemaining,
    formatBoostTimeRemaining
  };
}
