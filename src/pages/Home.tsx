
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Shell from '@/components/Shell';
import RoyalButton from '@/components/ui/royal-button';
import { Crown, Trophy, Coins, ArrowRight, Sparkles, Users } from 'lucide-react';
import HeroBackground from '@/components/ui/hero/HeroBackground';
import HeroShowcase from '@/components/ui/hero/HeroShowcase';
import RoyalShowcase from '@/components/RoyalShowcase';
import usePageTracking from '@/hooks/usePageTracking';

const Home = () => {
  usePageTracking();

  return (
    <Shell transparent>
      <main className="relative overflow-hidden">
        {/* Hero Section with Background */}
        <section className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center py-20 px-4">
          {/* Background elements */}
          <HeroBackground intensity="high" color="gold" />
          
          {/* Main hero content */}
          <div className="container mx-auto relative z-10">
            <motion.div 
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <Crown className="h-20 w-20 text-royal-gold animate-pulse-slow" />
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 font-medieval">
                <span className="royal-gradient">SPEND THRONE</span>
              </h1>
              
              <p className="text-xl md:text-2xl max-w-3xl text-white/80 mb-10">
                The ultimate pay-to-win social experience where your status is determined 
                solely by how much you spend. $1 = 1 unit of rank. The leaderboard never resets.
              </p>
              
              <div className="flex flex-wrap justify-center gap-5 mb-12">
                <Link to="/signup">
                  <RoyalButton 
                    variant="royalGold" 
                    size="lg" 
                    className="px-8 py-6 text-lg font-bold"
                    icon={<Crown className="w-5 h-5" />}
                  >
                    Claim Your Throne
                  </RoyalButton>
                </Link>
                
                <Link to="/leaderboard">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-royal-gold/50 hover:bg-royal-gold/10 px-8 py-6 text-lg"
                  >
                    <Trophy className="mr-2 h-5 w-5" />
                    View the Nobility
                  </Button>
                </Link>
              </div>
              
              <div className="glass-morphism p-6 rounded-lg max-w-2xl">
                <p className="text-xl italic text-royal-gold">
                  "SpendThrone: Where your wallet determines your worth and mockery is an art form."
                </p>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Showcase Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-black/90 to-bg-dark">
          <div className="container mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 royal-gradient">
                Top Nobility
              </h2>
              <p className="text-white/70 max-w-3xl mx-auto">
                Behold those who have ascended our royal ranks through the noble virtue of spending!
              </p>
            </div>
            
            <RoyalShowcase />
          </div>
        </section>
        
        {/* Stats Showcase */}
        <section className="py-16 px-4 bg-gradient-to-b from-bg-dark to-bg-dark-lighter">
          <div className="container mx-auto">
            <HeroShowcase />
          </div>
        </section>
        
        {/* Feature Cards Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-bg-dark-lighter to-bg-dark relative">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 royal-gradient font-medieval">
                How Our Kingdom Works
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                In our medieval pay-to-win society, everything is transparent and upfront.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="glass-morphism border-white/10 rounded-lg p-8 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                >
                  <div className="rounded-full w-16 h-16 flex items-center justify-center bg-gradient-to-br from-amber-400 to-yellow-600 mx-auto mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-white/70">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-bg-dark to-bg-dark-lighter">
          <div className="container mx-auto">
            <div className="glass-morphism border-royal-gold/30 rounded-lg p-10 max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold royal-gradient mb-6 font-medieval">
                Ready to Waste Your Money on Digital Status?
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Join our satirical kingdom where your social standing is directly proportional to your spending. 
                At least we're honest about it!
              </p>
              <Link to="/signup">
                <RoyalButton 
                  variant="royalGold" 
                  size="lg" 
                  glow={true}
                  className="px-8 py-6 text-lg font-bold"
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  Start Your Ascension
                  <ArrowRight className="ml-2 h-5 w-5" />
                </RoyalButton>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Shell>
  );
};

// Feature card data
const features = [
  {
    title: "$1 = 1 Rank Point",
    description: "Your position on the leaderboard is determined solely by how much you spend. Simple, transparent, and utterly ridiculous.",
    icon: <Coins className="h-8 w-8" />
  },
  {
    title: "Permanent Leaderboard",
    description: "The hierarchy never resets. Your investment in digital status is eternal, or at least until we shut down the servers.",
    icon: <Trophy className="h-8 w-8" />
  },
  {
    title: "Team Warfare",
    description: "Join one of three noble houses and contribute to collective dominance. It's tribalism with a medieval twist!",
    icon: <Users className="h-8 w-8" />
  }
];

export default Home;
