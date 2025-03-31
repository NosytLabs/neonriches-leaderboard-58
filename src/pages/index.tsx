
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import RoyalButton from '@/components/ui/royal-button';
import { Crown, Trophy, Gem, ArrowRight, Coins, Sparkles, Users } from 'lucide-react';
import { formatCurrency } from '@/utils/formatters';

// This component serves as the main landing page
const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/90 relative overflow-hidden">
      {/* Hero background with animated elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-bg-dark to-bg-dark-lighter"></div>
        
        {/* Animated floating elements */}
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-royal-gold/30"
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
              duration: 3 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 5,
              repeatDelay: Math.random() * 3
            }}
          >
            {i % 3 === 0 ? <Crown size={24} /> : 
             i % 3 === 1 ? <Coins size={24} /> : 
             <Trophy size={24} />}
          </motion.div>
        ))}
      </div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-6">
            <Crown className="h-20 w-20 text-royal-gold animate-pulse-slow" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 royal-gradient font-medieval">
            SPEND THRONE
          </h1>
          
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/80 mb-8">
            The ultimate pay-to-win leaderboard where your rank equals your spending.
            A satirical throne awaits those willing to part with their coin.
          </p>
          
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
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link to="/leaderboard">
              <RoyalButton 
                variant="royalGold" 
                size="lg" 
                className="px-8 py-6 text-lg font-bold relative group"
                glow
              >
                <Trophy className="mr-2 h-5 w-5" />
                View Leaderboard
              </RoyalButton>
            </Link>
            
            <Link to="/deposit">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-royal-gold/50 hover:bg-royal-gold/10 px-8 py-6 text-lg"
              >
                <Gem className="mr-2 h-5 w-5" />
                Make Your Deposit
              </Button>
            </Link>
          </div>
        </motion.div>
        
        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title}
              className="glass-morphism border-white/10 p-8 rounded-lg text-center h-full flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <div className="rounded-full w-16 h-16 flex items-center justify-center bg-gradient-to-br from-amber-400 to-yellow-600 mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-white/70 flex-grow">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        
        {/* CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="mb-20"
        >
          <div className="glass-morphism border-royal-gold/30 p-10 rounded-lg text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 royal-gradient">Ready to Claim Your Throne?</h2>
            <p className="text-white/80 mb-8 text-lg">
              Join our satirical kingdom where money equals status and the concept of "value" is hilariously distorted.
            </p>
            <Link to="/signup">
              <RoyalButton 
                variant="royalGold" 
                size="lg" 
                glow
                className="group"
              >
                Start Your Ascension
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </RoyalButton>
            </Link>
          </div>
        </motion.div>
        
        {/* Team section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="mb-12"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 royal-gradient">Join a Noble House</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Ally yourself with one of three royal houses and contribute to your team's standing in our satirical competition.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-morphism border-red-500/30 hover:border-red-500/50 p-6 rounded-lg text-center transition-all duration-300">
              <div className="w-20 h-20 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-4">
                <Crown className="h-10 w-10 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-red-500">House Crimson</h3>
              <p className="text-white/70">For the bold and ambitious who see money as power.</p>
            </div>
            
            <div className="glass-morphism border-green-500/30 hover:border-green-500/50 p-6 rounded-lg text-center transition-all duration-300">
              <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                <Crown className="h-10 w-10 text-green-500" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-green-500">House Emerald</h3>
              <p className="text-white/70">For the strategic minds who convert wealth to influence.</p>
            </div>
            
            <div className="glass-morphism border-blue-500/30 hover:border-blue-500/50 p-6 rounded-lg text-center transition-all duration-300">
              <div className="w-20 h-20 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                <Crown className="h-10 w-10 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-500">House Sapphire</h3>
              <p className="text-white/70">For the nobility who understand that wealth equals status.</p>
            </div>
          </div>
        </motion.div>
        
        {/* About link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="text-center"
        >
          <Link to="/about">
            <Button variant="ghost" className="text-white/60 hover:text-white hover:bg-white/5 group">
              <Sparkles className="mr-2 h-4 w-4" />
              <span>Learn more about our ridiculous kingdom</span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

// Feature card data
const features = [
  {
    title: "Permanent Rank",
    description: "Your rank on the leaderboard is determined solely by how much you've spent. Every dollar counts towards your eternal glory.",
    icon: <Trophy className="h-8 w-8 text-black" />
  },
  {
    title: "Public Recognition",
    description: "Showcase your wealth and commitment to frivolous spending to the world. Let everyone witness your dedication to the throne.",
    icon: <Crown className="h-8 w-8 text-black" />
  },
  {
    title: "Royal Privileges",
    description: "Unlock exclusive cosmetics, titles, and mockery powers as you ascend through the ranks of nobility.",
    icon: <Gem className="h-8 w-8 text-black" />
  }
];

export default Index;
