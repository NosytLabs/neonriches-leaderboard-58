
import React, { useEffect, useState } from 'react';
import { useToastContext } from '@/contexts/ToastContext';
import { UserProfile } from '@/contexts/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Crown, Sparkles, Coins } from 'lucide-react';
import useNotificationSounds from '@/hooks/use-notification-sounds';

interface DashboardWelcomeProps {
  user: UserProfile | null;
}

export const DashboardWelcome: React.FC<DashboardWelcomeProps> = ({ user }) => {
  const [showRoyalWelcome, setShowRoyalWelcome] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const { addToast } = useToastContext();
  const { playSound } = useNotificationSounds();
  const [particles, setParticles] = useState<Array<{ id: number, x: number, y: number, size: number, color: string }>>([]);

  // Display royal welcome after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowRoyalWelcome(true);
      playSound('royalAnnouncement', 0.15);
      
      // Generate decorative particles
      const newParticles = Array.from({ length: 12 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 3 + Math.random() * 4,
        color: i % 3 === 0 ? '#D4AF37' : i % 3 === 1 ? '#C93C20' : '#2A4B8C'
      }));
      
      setParticles(newParticles);
    }, 800);

    return () => clearTimeout(timer);
  }, [playSound]);

  useEffect(() => {
    if (showRoyalWelcome && user && !animationComplete) {
      const genderTitle = user.gender === 'king' ? 'King' : user.gender === 'queen' ? 'Queen' : 'Noble Jester';
      
      // Delay the toast to appear after the animation
      const toastTimer = setTimeout(() => {
        addToast({
          title: `Royal Presence Detected`,
          description: `Welcome back to your kingdom, ${genderTitle} ${user.username}. Your coffers await your generosity!`,
          duration: 5000,
        });
        setAnimationComplete(true);
      }, 1200);
      
      return () => clearTimeout(toastTimer);
    }
  }, [showRoyalWelcome, user, addToast, animationComplete]);

  if (!user) return null;

  const genderIcon = user.gender === 'king' ? 
    <Crown className="mr-2 h-6 w-6 text-royal-gold" /> : 
    user.gender === 'queen' ? 
    <Crown className="mr-2 h-6 w-6 text-royal-crimson" /> : 
    <Coins className="mr-2 h-6 w-6 text-royal-gold" />;

  return (
    <motion.div
      className="relative overflow-hidden rounded-lg glass-morphism border border-white/10 p-5 mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Decorative particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0],
            y: [0, -20, -40]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
            delay: particle.id * 0.2
          }}
        />
      ))}
      
      <AnimatePresence>
        {showRoyalWelcome && (
          <>
            <motion.div
              className="flex items-center mb-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {genderIcon}
              <motion.h2 
                className="text-2xl font-royal royal-gradient"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Welcome, {user.username}
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="ml-2"
              >
                <Sparkles className="h-4 w-4 text-royal-gold animate-pulse" />
              </motion.div>
            </motion.div>
            
            <motion.div
              className="flex justify-between items-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <p className="text-white/70 italic">
                Your royal treasury awaits your generous contributions. How much will you spend to climb the ranks today?
              </p>
              
              <motion.div 
                className="flex items-center space-x-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <div className="text-center">
                  <div className="text-xs text-white/60">Rank</div>
                  <div className="text-xl font-bold text-royal-gold">#{user.rank || '??'}</div>
                </div>
                
                <div className="text-center">
                  <div className="text-xs text-white/60">Spent</div>
                  <div className="text-xl font-bold text-royal-gold">${user.amountSpent?.toFixed(2) || '0.00'}</div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// For backward compatibility, also export the hook
export function useDashboardWelcome(user: UserProfile | null) {
  const [showRoyalWelcome, setShowRoyalWelcome] = React.useState(false);
  const { addToast } = useToastContext();

  useEffect(() => {
    // Display a grand royal welcome after a short delay
    const timer = setTimeout(() => {
      setShowRoyalWelcome(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showRoyalWelcome && user) {
      const genderTitle = user.gender === 'king' ? 'King' : user.gender === 'queen' ? 'Queen' : 'Noble Jester';
      
      addToast({
        title: `Royal Presence Detected`,
        description: `Welcome back to your kingdom, ${genderTitle} ${user.username}. Your coffers await your generosity!`,
        duration: 5000,
      });
    }
  }, [showRoyalWelcome, user, addToast]);

  return showRoyalWelcome;
}
