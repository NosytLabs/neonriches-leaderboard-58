
/**
 * Animation utility functions and helpers
 */

/**
 * Generate a random delay for staggered animations
 */
export const randomDelay = (min = 0, max = 1000): number => {
  return Math.floor(Math.random() * (max - min)) + min;
};

/**
 * Generate a random duration for varied animations
 */
export const randomDuration = (min = 500, max = 2000): number => {
  return Math.floor(Math.random() * (max - min)) + min;
};

/**
 * Get animation class for a specific effect type
 */
export const getAnimationClass = (effect: string): string => {
  const animationMap: Record<string, string> = {
    'glow': 'animate-glow-pulse',
    'shimmer': 'animate-royal-shimmer',
    'float': 'animate-float',
    'spin': 'animate-spin-slow',
    'pulse': 'animate-pulse-slow',
    'crown-glow': 'animate-crown-glow',
    'sparkle': 'animate-sparkle',
    'bounce': 'animate-bounce',
    'fade-in': 'animate-fade-in',
    'fade-out': 'animate-fade-out',
    'parchment': 'animate-parchment-unfurl',
    'coin-flip': 'animate-coin-flip',
    'wobble': 'animate-wobble',
    'shake': 'animate-shake'
  };

  return animationMap[effect] || '';
};

/**
 * Get CSS for inline animation styles
 */
export const getAnimationStyle = (
  effect: string, 
  duration = 1000, 
  delay = 0, 
  iterationCount = 'infinite'
): React.CSSProperties => {
  const baseStyle: React.CSSProperties = {
    animationDuration: `${duration}ms`,
    animationDelay: `${delay}ms`,
    animationIterationCount: iterationCount as any,
    animationFillMode: 'both'
  };

  // Add any specific styles needed for certain animations
  switch (effect) {
    case 'glow':
      return {
        ...baseStyle,
        animationName: 'glow-pulse',
        animationTimingFunction: 'ease-in-out'
      };
    case 'float':
      return {
        ...baseStyle,
        animationName: 'float',
        animationTimingFunction: 'ease-in-out'
      };
    default:
      return baseStyle;
  }
};

/**
 * Get staggered delays for multiple elements
 */
export const getStaggeredDelays = (count: number, baseDelay = 50): number[] => {
  return Array.from({ length: count }, (_, i) => i * baseDelay);
};

/**
 * Get shame effect animation class
 */
export const getShameEffectClass = (effect: string): string => {
  const effectMap: Record<string, string> = {
    'tomatoes': 'shame-effect-tomatoes',
    'eggs': 'shame-effect-eggs',
    'stocks': 'shame-effect-stocks'
  };

  return effectMap[effect] || 'shame-effect-tomatoes';
};

export default {
  randomDelay,
  randomDuration,
  getAnimationClass,
  getAnimationStyle,
  getStaggeredDelays,
  getShameEffectClass
};
