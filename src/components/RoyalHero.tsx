
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/Icon';
import { cn } from '@/lib/utils';
import useAuth from '@/hooks/useAuth';
import SpendThroneLogo from '@/components/brand/SpendThroneLogo';
import { motion, AnimatePresence } from 'framer-motion';
import { generateAbsurdCTA } from '@/utils/absurdityGenerator';
import RandomAbsurdFact from '@/components/ui/random-absurd-fact';
import { formatCurrency } from '@/utils/formatters';
import { preloadImage } from '@/utils/resourcePreload';

interface RoyalHeroProps {
  className?: string;
}

const RoyalHero: React.FC<RoyalHeroProps> = ({ className }) => {
  const { isAuthenticated, user } = useAuth();
  const [ctaText, setCtaText] = useState<string>(generateAbsurdCTA());
  const [showFact, setShowFact] = useState<boolean>(false);
  
  useEffect(() => {
    const criticalHeroImages = [
      '/throne-assets/crown-icon.svg',
      '/throne-assets/throne-icon.svg',
      '/throne-assets/royal-seal.svg'
    ];
    
    Promise.all(criticalHeroImages.map(src => preloadImage(src)))
      .then(() => console.info('[Performance] Hero images preloaded'))
      .catch(err => console.warn('[Performance] Error preloading hero images:', err));
      
  }, []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCtaText(generateAbsurdCTA());
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFact(true);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className={cn(
      'relative py-20 overflow-hidden',
      className
    )}>
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 opacity-80" />
      
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div 
            key={i}
            className="absolute animate-floating-coin"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ 
              opacity: 0, 
              scale: 0.5, 
              y: 100, 
              rotate: Math.random() * 360 
            }}
            animate={{ 
              opacity: [0, 0.3 + Math.random() * 0.4, 0],
              scale: [0.5, 1, 0.5],
              y: [100, -100],
              rotate: [Math.random() * 360, Math.random() * 720]
            }}
            transition={{ 
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              repeatDelay: Math.random() * 3
            }}
          >
            <Icon 
              icon="Coins" 
              size={Math.random() > 0.5 ? 'md' : 'lg'}
            />
          </motion.div>
        ))}
      </div>
      
      <div className="container relative z-10 mx-auto px-4 py-12">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="mb-6 animate-royal-entrance">
            <SpendThroneLogo variant="full" size="2xl" className="h-24 md:h-32" animated />
          </div>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight animate-royal-entrance animation-delay-100"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <motion.span 
              className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 text-transparent bg-clip-text inline-block"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              SpendThrone
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto animate-royal-entrance animation-delay-200"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            The ultimate pay-to-win social experience where your status is determined by how much you spend!
          </motion.p>
          
          <motion.div
            className="mt-6 text-lg md:text-xl text-royal-gold"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <span className="font-medium">Total Money Wasted: </span>
            <motion.span
              className="font-bold"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {formatCurrency(Math.floor(Math.random() * 1000000) + 500000)}
            </motion.span>
          </motion.div>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-royal-entrance animation-delay-300">
            {!isAuthenticated ? (
              <>
                <Link to="/register">
                  <Button 
                    variant="royalGold" 
                    size="lg" 
                    className="relative group"
                  >
                    <span className="absolute inset-0 w-full h-full rounded-md blur opacity-30 bg-gradient-to-r from-amber-400 to-yellow-300 group-hover:opacity-50 transition duration-300"></span>
                    <motion.span 
                      className="relative flex items-center"
                      animate={{ scale: [1, 1.03, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <Icon icon="Crown" size="sm" className="mr-2" />
                      Claim Your Throne
                    </motion.span>
                  </Button>
                </Link>
                <Link to="/leaderboard">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-royal-gold/50 text-royal-gold hover:bg-royal-gold/10 hover:text-royal-gold/90"
                  >
                    <Icon icon="Trophy" size="sm" className="mr-2" />
                    View Leaderboard
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/deposit">
                  <Button 
                    variant="royalGold" 
                    size="lg" 
                    className="relative group"
                  >
                    <span className="absolute inset-0 w-full h-full rounded-md blur opacity-30 bg-gradient-to-r from-amber-400 to-yellow-300 group-hover:opacity-50 transition duration-300"></span>
                    <motion.span 
                      className="relative flex items-center"
                      whileHover={{ 
                        scale: 1.05
                      }}
                    >
                      <Icon icon="Coins" size="sm" className="mr-2" />
                      {ctaText}
                    </motion.span>
                  </Button>
                </Link>
                <Link to="/leaderboard">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-royal-gold/50 text-royal-gold hover:bg-royal-gold/10 hover:text-royal-gold/90"
                  >
                    <Icon icon="Trophy" size="sm" className="mr-2" />
                    View Your Rank
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <motion.div 
            className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-white/10 animate-royal-entrance animation-delay-400"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="rounded-full w-12 h-12 flex items-center justify-center bg-gradient-to-br from-amber-400 to-yellow-600 mb-4">
              <Icon icon="Crown" size="md" />
            </div>
            <h3 className="text-xl font-bold mb-2">Pay To Win</h3>
            <p className="text-white/70">Your rank is determined solely by how much you spend. It's that simple.</p>
          </motion.div>
          
          <motion.div 
            className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-white/10 animate-royal-entrance animation-delay-500"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="rounded-full w-12 h-12 flex items-center justify-center bg-gradient-to-br from-amber-400 to-yellow-600 mb-4">
              <Icon icon="Users" size="md" />
            </div>
            <h3 className="text-xl font-bold mb-2">Join A Team</h3>
            <p className="text-white/70">Ally with Red, Green, or Blue teams and compete for glory and rewards.</p>
          </motion.div>
          
          <motion.div 
            className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-white/10 animate-royal-entrance animation-delay-600"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="rounded-full w-12 h-12 flex items-center justify-center bg-gradient-to-br from-amber-400 to-yellow-600 mb-4">
              <Icon icon="Sparkles" size="md" />
            </div>
            <h3 className="text-xl font-bold mb-2">Special Perks</h3>
            <p className="text-white/70">Unlock exclusive profile features, badges, and more as you spend.</p>
          </motion.div>
        </div>
        
        <AnimatePresence>
          {showFact && (
            <div className="mt-12 flex justify-center">
              <RandomAbsurdFact 
                facts={[
                  "Despite all evidence to the contrary, some nobles still believe that throwing more money at the throne will eventually bring them happiness.",
                  "Studies show that 9 out of 10 royal economists agree: paying for digital status is definitely a sound financial decision.",
                  "The average noble spends more on digital crowns than on their actual retirement plan.",
                  "Legend says if you send enough money to SpendThrone, you'll develop an immunity to buyer's remorse.",
                  "Royal psychologists confirm that watching your rank number decrease is more addictive than any known substance."
                ]}
                interval={15000}
                className="max-w-2xl"
                onClose={() => setShowFact(false)}
              />
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default RoyalHero;
