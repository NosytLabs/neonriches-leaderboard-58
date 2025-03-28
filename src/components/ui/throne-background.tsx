
import React from 'react';
import { motion } from 'framer-motion';
import { ThroneBackgroundProps } from '@/types/ui-types';

const ThroneBackground: React.FC<ThroneBackgroundProps> = ({
  variant = 'royal',
  particles = false,
  animate = true,
  opacity = 0.1,
  className = '',
  density = 'medium',
}) => {
  // Get background gradient based on variant
  const getBackgroundGradient = () => {
    switch (variant) {
      case 'crimson':
        return 'bg-gradient-to-br from-royal-crimson/20 via-royal-crimson/10 to-black';
      case 'navy':
        return 'bg-gradient-to-br from-royal-navy/20 via-royal-navy/10 to-black';
      case 'purple':
        return 'bg-gradient-to-br from-purple-700/20 via-purple-500/10 to-black';
      case 'royal':
      default:
        return 'bg-gradient-to-br from-royal-gold/20 via-royal-crimson/10 to-black';
    }
  };

  // Determine the number of particles based on density
  const getParticleCount = () => {
    switch (density) {
      case 'low':
        return 10;
      case 'high':
        return 25;
      case 'medium':
      default:
        return 15;
    }
  };

  return (
    <div className={`fixed inset-0 -z-10 ${getBackgroundGradient()} ${className}`}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.2' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Throne silhouette */}
        {animate && (
          <motion.div 
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 opacity-5"
            initial={{ y: 10 }}
            animate={{ y: [10, 0, 10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="120" height="160" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 36H36V42H12V36Z" fill="currentColor" strokeWidth="1"/>
              <path d="M14 20H34V36H14V20Z" fill="currentColor" strokeWidth="1"/>
              <path d="M16 22H20V26H16V22Z" fill="currentColor"/>
              <path d="M28 22H32V26H28V22Z" fill="currentColor"/>
              <path d="M20 30H28V34H20V30Z" fill="currentColor"/>
              <path d="M24 8L18 14L16 12L24 6L32 12L30 14L24 8Z" fill="currentColor" strokeWidth="0.5"/>
              <path d="M18 14H30V18H18V14Z" fill="currentColor" strokeWidth="0.5"/>
            </svg>
          </motion.div>
        )}

        {/* Royal crown silhouette */}
        {animate && (
          <motion.div 
            className={`absolute top-10 right-10 opacity-5 text-${variant === 'royal' ? 'royal-gold' : variant}`}
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, 2, 0, -2, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="200" 
              height="200" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M12 2L15 5.5L18.5 3L16.5 7.5L22 8L17 11L19 15L15.5 13L12 17L8.5 13L5 15L7 11L2 8L7.5 7.5L5.5 3L9 5.5L12 2Z"/>
            </svg>
          </motion.div>
        )}

        {/* Background particles */}
        {particles && Array.from({ length: getParticleCount() }).map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full bg-${variant === 'royal' ? 'royal-gold' : variant}-500/30`}
            style={{
              width: Math.random() * 6 + 2,
              height: Math.random() * 6 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0.3, scale: 0.8 }}
            animate={{ 
              opacity: [0.2, 0.6, 0.2], 
              y: [0, -20, 0],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
        
        {/* Floating coins */}
        {particles && variant === 'royal' && Array.from({ length: Math.floor(getParticleCount() / 3) }).map((_, i) => (
          <motion.div
            key={`coin-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: '-20px',
            }}
            initial={{ opacity: 0, y: 0 }}
            animate={{ 
              opacity: [0, 0.8, 0],
              y: [0, -100 - (Math.random() * 100)],
              rotate: Math.random() * 360,
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 10,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="8" cy="8" r="7" fill="#D4AF37" opacity="0.7" />
              <text x="8" y="11" fontFamily="Arial" fontSize="8" fill="#9B2335" textAnchor="middle">$</text>
            </svg>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ThroneBackground;
