
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Shell from '@/components/Shell';
import RoyalHero from '@/components/RoyalHero';
import RoyalDivider from '@/components/ui/royal-divider';
import { Icon } from '@/components/ui/icon';
import { useAuth } from '@/contexts/auth';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import ThroneCoinsIcon from '@/components/icons/ThroneCoinsIcon';
import { generateAbsurdTitle, generateRandomAbsurdFact } from '@/utils/absurdityGenerator';
import RandomAbsurdFact from '@/components/ui/random-absurd-fact';
import { formatCurrency } from '@/utils/formatters';

const Index = () => {
  const { isAuthenticated, user } = useAuth();
  const [absurdityLevel, setAbsurdityLevel] = useState<'mild' | 'medium' | 'extreme' | 'ridiculous' | 'unhinged'>('medium');
  const [showFact, setShowFact] = useState<boolean>(false);
  const [factsShown, setFactsShown] = useState<number>(0);

  // Show a random fact occasionally for absurdity
  useEffect(() => {
    const timer = setTimeout(() => {
      if (Math.random() > 0.7 && factsShown < 2) {
        setShowFact(true);
        setFactsShown(prev => prev + 1);
      }
    }, 10000 + Math.random() * 20000);
    
    return () => clearTimeout(timer);
  }, [factsShown]);

  const handleDismissFact = () => {
    setShowFact(false);
  };

  // Easter egg - increase absurdity level when clicking certain elements
  const increaseAbsurdity = () => {
    const levels: ('mild' | 'medium' | 'extreme' | 'ridiculous' | 'unhinged')[] = [
      'mild', 'medium', 'extreme', 'ridiculous', 'unhinged'
    ];
    const currentIndex = levels.indexOf(absurdityLevel);
    const nextIndex = (currentIndex + 1) % levels.length;
    setAbsurdityLevel(levels[nextIndex]);
  };
  
  return (
    <Shell fullWidth>
      <RoyalHero absurdityLevel={absurdityLevel} />
      
      {/* Random absurd fact toast that appears */}
      <AnimatePresence>
        {showFact && (
          <div className="fixed bottom-4 right-4 z-50">
            <RandomAbsurdFact variant="toast" onClose={handleDismissFact} />
          </div>
        )}
      </AnimatePresence>
      
      {/* How It Works Section */}
      <section className="py-20 bg-bg-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              onClick={increaseAbsurdity} // Easter egg for absurdity
            >
              <span className="text-royal-gold">How</span> It Works
            </motion.h2>
            <motion.p
              className="text-white/70 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              SpendThrone is a revolutionary platform where your status is determined solely by your spending. No skill required, just your wallet!
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-black/20 rounded-lg p-6 border border-royal-gold/10 text-center relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-royal-gold/5 to-transparent opacity-20 pointer-events-none"></div>
              <div className={cn("w-16 h-16 rounded-full bg-black flex items-center justify-center mx-auto mb-4 relative")}>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-2 border-dashed border-royal-gold/30"
                ></motion.div>
                <Icon name="DollarSign" size="lg" className="text-royal-gold" />
              </div>
              <h3 className="text-xl font-bold mb-3">1. Deposit Funds</h3>
              <p className="text-white/70">Add money to your account using credit card, crypto, or by selling your dignity.</p>
            </motion.div>
            
            <motion.div 
              className="bg-black/20 rounded-lg p-6 border border-royal-gold/10 text-center relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-royal-gold/5 to-transparent opacity-20 pointer-events-none"></div>
              <div className={cn("w-16 h-16 rounded-full bg-black flex items-center justify-center mx-auto mb-4 relative")}>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-2 border-dashed border-royal-gold/30"
                ></motion.div>
                <Icon name="crown" size="lg" className="text-royal-gold" />
              </div>
              <h3 className="text-xl font-bold mb-3">2. Rise in Rank</h3>
              <p className="text-white/70">Watch your position climb the leaderboard as your wealth diminishes. A fair trade!</p>
            </motion.div>
            
            <motion.div 
              className="bg-black/20 rounded-lg p-6 border border-royal-gold/10 text-center relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-royal-gold/5 to-transparent opacity-20 pointer-events-none"></div>
              <div className={cn("w-16 h-16 rounded-full bg-black flex items-center justify-center mx-auto mb-4 relative")}>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-2 border-dashed border-royal-gold/30"
                ></motion.div>
                <Icon name="Sparkles" size="lg" className="text-royal-gold" />
              </div>
              <h3 className="text-xl font-bold mb-3">3. Unlock Perks</h3>
              <p className="text-white/70">Gain access to exclusive features, cosmetics, and the ability to mock those below you.</p>
            </motion.div>
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/register">
              <Button variant="royalGold" size="lg" className="relative">
                <span className="absolute inset-0 rounded-md bg-gradient-to-r from-royal-gold to-amber-300 opacity-20 blur-sm"></span>
                <motion.span 
                  className="relative flex items-center"
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Begin Your Reign
                  <Icon name="ArrowRight" className="ml-2" />
                </motion.span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <RoyalDivider variant="line" className="my-0" />
      
      {/* Features Highlight */}
      <section className="py-20 bg-gradient-to-b from-bg-dark to-bg-dark-lighter">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-royal-gold">Royal</span> Features
            </motion.h2>
            <motion.p
              className="text-white/70 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Experience the finest digital nobility money can buy, with features designed to make others jealous!
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              className="flex flex-col md:flex-row gap-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-royal-gold/20 to-royal-gold/5 border border-royal-gold/30 flex items-center justify-center">
                  <ThroneCoinsIcon size="lg" animated variant="royal" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Persistent Leaderboard</h3>
                <p className="text-white/70 mb-4">
                  Your rank never resets. Every dollar spent contributes to your eternal position in our royal hierarchy.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Icon name="Check" className="text-royal-gold mr-2" size="sm" />
                    <span className="text-white/80">Permanent rankings</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-royal-gold mr-2" size="sm" />
                    <span className="text-white/80">Real-time updates</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-royal-gold mr-2" size="sm" />
                    <span className="text-white/80">Historical rank tracking</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              className="flex flex-col md:flex-row gap-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-royal-gold/20 to-royal-gold/5 border border-royal-gold/30 flex items-center justify-center">
                  <Icon name="User" size="lg" className="text-royal-gold" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Profile Customization</h3>
                <p className="text-white/70 mb-4">
                  Unlock premium customization options based on your spending tier. The more you spend, the fancier your profile becomes.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Icon name="Check" className="text-royal-gold mr-2" size="sm" />
                    <span className="text-white/80">Animated borders and effects</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-royal-gold mr-2" size="sm" />
                    <span className="text-white/80">Custom titles and badges</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-royal-gold mr-2" size="sm" />
                    <span className="text-white/80">Exclusive profile themes</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              className="flex flex-col md:flex-row gap-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-royal-gold/20 to-royal-gold/5 border border-royal-gold/30 flex items-center justify-center">
                  <Icon name="Users" size="lg" className="text-royal-gold" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Team Competitions</h3>
                <p className="text-white/70 mb-4">
                  Join one of three royal teams and contribute to their collective power. Participate in special team events and win exclusive rewards.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Icon name="Check" className="text-royal-gold mr-2" size="sm" />
                    <span className="text-white/80">Red, Green, or Blue teams</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-royal-gold mr-2" size="sm" />
                    <span className="text-white/80">Team-exclusive cosmetics</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-royal-gold mr-2" size="sm" />
                    <span className="text-white/80">Weekly team challenges</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              className="flex flex-col md:flex-row gap-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-royal-gold/20 to-royal-gold/5 border border-royal-gold/30 flex items-center justify-center">
                  <Icon name="ThumbsDown" size="lg" className="text-royal-gold" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Public Shaming</h3>
                <p className="text-white/70 mb-4">
                  Higher-ranked users can shame those beneath them. Use your wealth to mock the peasants, as nature intended!
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Icon name="Check" className="text-royal-gold mr-2" size="sm" />
                    <span className="text-white/80">Throw virtual tomatoes</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-royal-gold mr-2" size="sm" />
                    <span className="text-white/80">Add shame badges to profiles</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-royal-gold mr-2" size="sm" />
                    <span className="text-white/80">Temporary nickname changes</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <RoyalDivider variant="line" className="my-0" />
      
      {/* Testimonials - with absurd testimonials */}
      <section className="py-20 bg-bg-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-royal-gold">Royal</span> Testimonials
            </motion.h2>
            <motion.p
              className="text-white/70 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              See what our users are saying about their experiences on SpendThrone
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-black/20 p-6 rounded-lg border border-royal-gold/10 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4">
                <Icon name="Quote" className="text-royal-gold/20 w-12 h-12" />
              </div>
              <p className="text-white/80 mb-6 italic">
                "I spent my child's college fund to reach Platinum tier. Now I have a glowing profile border AND my son works at a fast food restaurant. Double win!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center mr-4">
                  <span className="text-white font-bold">JD</span>
                </div>
                <div>
                  <p className="font-bold">John Doe</p>
                  <p className="text-royal-gold text-sm">Duke of Debt, Platinum Tier</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-black/20 p-6 rounded-lg border border-royal-gold/10 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4">
                <Icon name="Quote" className="text-royal-gold/20 w-12 h-12" />
              </div>
              <p className="text-white/80 mb-6 italic">
                "My wife left me after I spent our savings on SpendThrone. Now I'm in the top 10 AND single! Thanks SpendThrone for this amazing life upgrade!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center mr-4">
                  <span className="text-white font-bold">BS</span>
                </div>
                <div>
                  <p className="font-bold">Bob Smith</p>
                  <p className="text-royal-gold text-sm">Earl of Empty Bank Account, Gold Tier</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-black/20 p-6 rounded-lg border border-royal-gold/10 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4">
                <Icon name="Quote" className="text-royal-gold/20 w-12 h-12" />
              </div>
              <p className="text-white/80 mb-6 italic">
                "I sold my car to reach Silver tier. Now I walk everywhere but everyone on SpendThrone respects me! My feet hurt but my ego is THRIVING!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mr-4">
                  <span className="text-white font-bold">JJ</span>
                </div>
                <div>
                  <p className="font-bold">Jane Johnson</p>
                  <p className="text-royal-gold text-sm">Baroness of Bad Decisions, Silver Tier</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-bg-dark-lighter to-bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-5"></div>
        
        {/* Animated coins and crown effects for the CTA section */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.4, 0.8, 0.4],
                rotate: [0, 360]
              }}
              transition={{
                duration: 3 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
            >
              <Icon 
                name={Math.random() > 0.5 ? "coin" : "crown"} 
                size="sm" 
                className="text-royal-gold opacity-30" 
              />
            </motion.div>
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Ready to <span className="text-royal-gold">Waste Money</span> for Status?
            </motion.h2>
            <motion.p
              className="text-xl text-white/70 mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Join thousands of others who have found meaning in meaningless digital rankings!
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link to="/register">
                <Button variant="royalGold" size="lg" className="relative group">
                  <span className="absolute inset-0 w-full h-full rounded-md blur opacity-30 bg-gradient-to-r from-amber-400 to-yellow-300 group-hover:opacity-50 transition duration-300"></span>
                  <motion.span 
                    className="relative flex items-center"
                    animate={{ scale: [1, 1.03, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Icon name="crown" size="sm" className="mr-2" />
                    Start Spending Now
                  </motion.span>
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="border-royal-gold/50 text-royal-gold hover:bg-royal-gold/10">
                  Learn More
                </Button>
              </Link>
            </motion.div>
            
            {/* Financial disclaimer with absurd styling */}
            <motion.div
              className="mt-8 text-xs text-white/40 max-w-md mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p className="italic">
                * SpendThrone is not responsible for bankruptcy, divorce, existential crises, or the realization that you've spent real money on fake prestige. By using our platform, you acknowledge that you have questionable financial priorities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </Shell>
  );
};

export default Index;
