/**
 * Consolidated animations file
 * This file replaces the three previous animation files to eliminate duplication
 */

// Animation keyframes for use in styles
export const keyframes = {
  // Fade animations
  fadeIn: `
    @keyframes fadeIn {
      0% { opacity: 0; transform: translateY(10px); }
      100% { opacity: 1; transform: translateY(0); }
    }
  `,
  fadeOut: `
    @keyframes fadeOut {
      0% { opacity: 1; transform: translateY(0); }
      100% { opacity: 0; transform: translateY(10px); }
    }
  `,
  
  // Pulse animations
  pulse: `
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.7; }
    }
  `,
  pulseSlow: `
    @keyframes pulseSlow {
      0%, 100% { opacity: 0.5; }
      50% { opacity: 1; }
    }
  `,
  pulseGlow: `
    @keyframes pulseGlow {
      0%, 100% { opacity: 0.4; transform: scale(1); }
      50% { opacity: 0.7; transform: scale(1.05); }
    }
  `,
  
  // Float animations
  float: `
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-5px); }
    }
  `,
  floatRotate: `
    @keyframes floatRotate {
      0% { transform: translateY(0) rotate(0deg); }
      50% { transform: translateY(-10px) rotate(5deg); }
      100% { transform: translateY(0) rotate(0deg); }
    }
  `,
  
  // Shine and shimmer
  royalShimmer: `
    @keyframes royalShimmer {
      0% { background-position: -1000px; }
      100% { background-position: 1000px; }
    }
  `,
  shimmer: `
    @keyframes shimmer {
      0% { transform: rotate(30deg) translateX(-100%); }
      100% { transform: rotate(30deg) translateX(100%); }
    }
  `,
  
  // Glow animations
  crownGlow: `
    @keyframes crownGlow {
      0%, 100% { filter: drop-shadow(0 0 3px rgba(212, 175, 55, 0.7)); }
      50% { filter: drop-shadow(0 0 8px rgba(212, 175, 55, 1)); }
    }
  `,
  glowPulse: `
    @keyframes glowPulse {
      0%, 100% { box-shadow: 0 0 10px rgba(212, 175, 55, 0.5); }
      50% { box-shadow: 0 0 25px rgba(212, 175, 55, 0.8); }
    }
  `,
  
  // Rotation animations
  spinSlow: `
    @keyframes spinSlow {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `,
  coinFlip: `
    @keyframes coinFlip {
      0% { transform: rotateY(0deg); }
      100% { transform: rotateY(360deg); }
    }
  `,
  
  // Scale animations
  sparkle: `
    @keyframes sparkle {
      0% { transform: scale(0.8); opacity: 0.3; }
      50% { transform: scale(1.2); opacity: 1; }
      100% { transform: scale(0.8); opacity: 0.3; }
    }
  `,
  
  // Mockery effect animations
  shake: `
    @keyframes shake {
      10%, 90% { transform: translate3d(-1px, 0, 0); }
      20%, 80% { transform: translate3d(2px, 0, 0); }
      30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
      40%, 60% { transform: translate3d(4px, 0, 0); }
    }
  `,
  wobble: `
    @keyframes wobble {
      0% { transform: translateX(0%); }
      15% { transform: translateX(-3%) rotate(-5deg); }
      30% { transform: translateX(2%) rotate(3deg); }
      45% { transform: translateX(-2%) rotate(-3deg); }
      60% { transform: translateX(2%) rotate(2deg); }
      75% { transform: translateX(-1%) rotate(-1deg); }
      100% { transform: translateX(0%); }
    }
  `,
  bounce: `
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
      40% { transform: translateY(-10px); }
      60% { transform: translateY(-5px); }
    }
  `,
  
  // Other animations
  ripple: `
    @keyframes ripple {
      0% { transform: scale(0) translate(-50%, -50%); opacity: 1; }
      50% { opacity: 0.5; }
      100% { transform: scale(3) translate(-50%, -50%); opacity: 0; }
    }
  `,
  badgePulse: `
    @keyframes badgePulse {
      0%, 100% { box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.4); }
      50% { box-shadow: 0 0 0 5px rgba(212, 175, 55, 0); }
    }
  `,
  badgeGlow: `
    @keyframes badgeGlow {
      0%, 100% { box-shadow: 0 0 0 rgba(59, 130, 246, 0.5); }
      50% { box-shadow: 0 0 10px rgba(59, 130, 246, 0.8); }
    }
  `
};

// Animation utility classes
export const animationClasses = {
  fadeIn: 'animate-fadeIn',
  fadeOut: 'animate-fadeOut',
  pulseSlow: 'animate-pulseSlow',
  float: 'animate-float',
  crownGlow: 'animate-crownGlow',
  royalShimmer: 'animate-royalShimmer',
  spinSlow: 'animate-spinSlow',
  glowPulse: 'animate-glowPulse',
  coinFlip: 'animate-coinFlip',
  sparkle: 'animate-sparkle',
  badgePulse: 'animate-badgePulse',
  badgeGlow: 'animate-badgeGlow',
  
  // Mockery effects
  shakeEffect: 'shame-effect-tomatoes',
  wobbleEffect: 'shame-effect-eggs',
  bounceEffect: 'shame-effect-stocks',
  
  // Hover effects
  hoverScale: 'hover:scale-105 transition-transform duration-200',
  hoverGlow: 'hover:shadow-glow transition-shadow duration-200'
};

// CSS to be included in global.css or equivalent
export const animationStyles = `
  ${Object.values(keyframes).join('\n')}
  
  /* Animation utility classes */
  .animate-fadeIn {
    animation: fadeIn 0.5s ease-out forwards;
  }
  
  .animate-fadeOut {
    animation: fadeOut 0.5s ease-out forwards;
  }
  
  .animate-pulseSlow {
    animation: pulseSlow 3s ease-in-out infinite;
  }
  
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
  
  .animate-crownGlow {
    animation: crownGlow 2s ease-in-out infinite;
  }
  
  .animate-royalShimmer {
    animation: royalShimmer 7s linear infinite;
  }
  
  .animate-spinSlow {
    animation: spinSlow 12s linear infinite;
  }
  
  .animate-glowPulse {
    animation: glowPulse 2s ease-in-out infinite;
  }
  
  .animate-coinFlip {
    animation: coinFlip 1.5s ease-in-out infinite;
  }
  
  .animate-sparkle {
    animation: sparkle 1.5s infinite;
  }
  
  /* Mockery effect animations */
  .shame-effect-tomatoes {
    animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
  }
  
  .shame-effect-eggs {
    animation: wobble 0.75s cubic-bezier(.36,.07,.19,.97) both;
  }
  
  .shame-effect-stocks {
    animation: bounce 0.75s cubic-bezier(.36,.07,.19,.97) both;
  }
  
  /* Badge animations */
  .animate-badgePulse {
    animation: badgePulse 2s infinite;
  }
  
  .animate-badgeGlow {
    animation: badgeGlow 2s infinite;
  }
  
  /* Style utils */  
  .shadow-glow {
    box-shadow: 0 0 15px rgba(212, 175, 55, 0.7);
  }
`;
