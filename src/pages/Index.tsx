
import React, { useState, useEffect } from 'react';
import { Shell } from '@/components/ui/shell';
import RoyalHero from '@/components/RoyalHero';
import HeroShowcase from '@/components/home/HeroShowcase';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Trophy, DollarSign, Shield, Crown, ChevronRight, AlertTriangle, 
  Sparkles, Eye, BarChart, Gem, Target
} from 'lucide-react';
import { RoyalSection } from '@/components/ui/theme-components';
import RoyalDivider from '@/components/ui/decorations/RoyalDivider';
import { Card, CardContent } from '@/components/ui/card';
import EnhancedCrownEffect from '@/components/animations/EnhancedCrownEffect';
import RoyalTrophyModel from '@/components/3d/RoyalTrophyModel';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

// Sample data for spending distribution
const spendingData = [
  { id: '1', label: 'Boosts', value: 2500, color: '#D4AF37' },
  { id: '2', label: 'Mockery', value: 1800, color: '#6B46C1' },
  { id: '3', label: 'Teams', value: 1200, color: '#2563EB' },
  { id: '4', label: 'Rank', value: 3500, color: '#E24F55' }
];

const Index = () => {
  const [showTrophy, setShowTrophy] = useState(false);

  useEffect(() => {
    // Show trophy after a delay for a nice entrance effect
    const timer = setTimeout(() => {
      setShowTrophy(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Shell hideFooter={false}>
      <RoyalHero />
      
      <div className="relative">
        <HeroShowcase />
        
        {/* Floating crown effect */}
        <div className="absolute top-10 right-10 w-32 h-32 opacity-70 pointer-events-none">
          <EnhancedCrownEffect width={128} height={128} opacity={0.5} interactive={false} />
        </div>
      </div>
      
      <RoyalSection
        title="The Noble's Path To Prestige"
        description="Follow these steps to establish thy dominance in our kingdom of monetary excess"
        centered={true}
      >
        {/* Trophy showcase */}
        {showTrophy && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="relative mx-auto mb-12 max-w-sm"
          >
            <div className="mx-auto w-64 h-64">
              <RoyalTrophyModel width={256} height={256} />
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center w-full">
              <Badge variant="outline" className="bg-royal-gold/10 border-royal-gold/30 text-white">
                Top Spender Trophy
              </Badge>
              <p className="text-white/60 text-xs mt-1">
                Awarded to the #1 ranked noble
              </p>
            </div>
          </motion.div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="glass-morphism p-6 rounded-lg border border-white/10 hover:border-royal-gold/20 transition-colors"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-royal-gold/10 flex items-center justify-center mb-4">
                <Crown className="h-7 w-7 text-royal-gold" />
              </div>
              <h3 className="text-xl font-bold mb-2">Create Thy Noble Identity</h3>
              <p className="text-white/70 mb-4">
                Register for an account and personalize thy coat of arms (profile) to establish thy presence in the court. No actual nobility required – just a functioning payment method!
              </p>
              <Link to="/signup">
                <Button variant="outline" className="border-white/20 hover:border-royal-gold/30">
                  <span>Establish Thy Lineage</span>
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="glass-morphism p-6 rounded-lg border border-white/10 hover:border-royal-gold/20 transition-colors"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-royal-gold/10 flex items-center justify-center mb-4">
                <DollarSign className="h-7 w-7 text-royal-gold" />
              </div>
              <h3 className="text-xl font-bold mb-2">Contribute To Thy Rank</h3>
              <p className="text-white/70 mb-4">
                Make "generous contributions" (completely frivolous payments) to increase thy standing in our aristocratic hierarchy. Remember: your worth is directly proportional to your expenditure!
              </p>
              <Link to="/pay/fiat">
                <Button variant="outline" className="border-white/20 hover:border-royal-gold/30">
                  <span>Fund Thy Noble Status</span>
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="glass-morphism p-6 rounded-lg border border-white/10 hover:border-royal-gold/20 transition-colors"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-royal-gold/10 flex items-center justify-center mb-4">
                <Shield className="h-7 w-7 text-royal-gold" />
              </div>
              <h3 className="text-xl font-bold mb-2">Join A Noble House</h3>
              <p className="text-white/70 mb-4">
                Pledge thy allegiance to House Red, Green, or Blue and compete for thy house's collective prestige. Just like political tribes, but with more honesty about the pay-to-win mechanics!
              </p>
              <Link to="/teams">
                <Button variant="outline" className="border-white/20 hover:border-royal-gold/30">
                  <span>Choose Thy Banner</span>
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
        
        <div className="text-center mt-6 space-y-4">
          <Link to="/features">
            <Button variant="royal" size="lg" className="px-6 mr-4">
              <Trophy className="mr-2 h-5 w-5" />
              <span>Explore All Noble Features</span>
            </Button>
          </Link>
          
          <Link to="/profile-enhancements">
            <Button variant="outline" size="lg" className="px-6 border-royal-gold/30 hover:bg-royal-gold/10">
              <Sparkles className="mr-2 h-5 w-5" />
              <span>Discover Profile Enhancements</span>
            </Button>
          </Link>
        </div>

        <div className="mt-8 max-w-3xl mx-auto">
          <Card className="glass-morphism border-royal-gold/20 bg-gradient-to-r from-royal-gold/5 to-royal-purple/5">
            <CardContent className="p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <AlertTriangle className="h-5 w-5 text-royal-gold mr-2" />
                <p className="text-royal-gold text-sm font-medium">ROYAL TREASURY NOTICE</p>
              </div>
              <p className="text-white/70 text-sm italic">
                All funds contributed to SpendThrone go directly to our developers' exotic coffee habits and mechanical keyboard collections. This is a social experiment, not a charity – though our developers' spouses might disagree when they see our office setup!
              </p>
            </CardContent>
          </Card>
        </div>
      </RoyalSection>
      
      <RoyalDivider variant="ornate" color="gold" />
      
      {/* New Feature Showcase Section */}
      <RoyalSection
        title="Royal Extravagances"
        description="Explore the lavish features that await those with coin to spare"
        centered={true}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="glass-morphism border-white/10 rounded-lg p-5 hover:border-royal-gold/20 transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-royal-purple/20 flex items-center justify-center mr-4">
                <Gem className="h-6 w-6 text-royal-purple" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Profile Boosts</h3>
                <p className="text-white/60 text-sm">Enhance your digital presence</p>
              </div>
            </div>
            <p className="text-white/70 mb-4">
              Purchase extravagant visual enhancements that boost your profile's appearance and visibility. From animated backgrounds to royal crowns, make sure everyone knows you've spent more than they have!
            </p>
            <Link to="/profile-enhancements">
              <Button variant="outline" size="sm" className="w-full">
                <Sparkles className="mr-2 h-4 w-4" />
                <span>View Enhancements</span>
              </Button>
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="glass-morphism border-white/10 rounded-lg p-5 hover:border-royal-gold/20 transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-royal-crimson/20 flex items-center justify-center mr-4">
                <Target className="h-6 w-6 text-royal-crimson" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Mockery Arena</h3>
                <p className="text-white/60 text-sm">Shame thy rivals with style</p>
              </div>
            </div>
            <p className="text-white/70 mb-4">
              Spend your hard-earned money to add humiliating visual effects to other users' profiles. Choose from tomatoes, eggs, stocks, and more to assert your digital dominance through pettiness!
            </p>
            <Link to="/mockery">
              <Button variant="outline" size="sm" className="w-full">
                <Target className="mr-2 h-4 w-4" />
                <span>Enter The Arena</span>
              </Button>
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="glass-morphism border-white/10 rounded-lg p-5 hover:border-royal-gold/20 transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-royal-gold/20 flex items-center justify-center mr-4">
                <Crown className="h-6 w-6 text-royal-gold" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Leaderboard Glory</h3>
                <p className="text-white/60 text-sm">Compete for the top position</p>
              </div>
            </div>
            <p className="text-white/70 mb-4">
              Monitor thy standing in our royal court with interactive 3D leaderboards. Watch as your rank rises with each lavish contribution, and bask in the envy of the lower-ranked peasants!
            </p>
            <Link to="/leaderboard">
              <Button variant="outline" size="sm" className="w-full">
                <Trophy className="mr-2 h-4 w-4" />
                <span>View Leaderboard</span>
              </Button>
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="glass-morphism border-white/10 rounded-lg p-5 hover:border-royal-gold/20 transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-royal-blue/20 flex items-center justify-center mr-4">
                <BarChart className="h-6 w-6 text-royal-blue" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Spending Analytics</h3>
                <p className="text-white/60 text-sm">Track thy wasteful expenditures</p>
              </div>
            </div>
            <p className="text-white/70 mb-4">
              View detailed visualizations of your completely unnecessary spending patterns. Compare your frivolous purchases with others and identify opportunities to waste even more money!
            </p>
            <Link to="/analytics">
              <Button variant="outline" size="sm" className="w-full">
                <BarChart className="mr-2 h-4 w-4" />
                <span>View Analytics</span>
              </Button>
            </Link>
          </motion.div>
        </div>
      </RoyalSection>
      
      <RoyalDivider variant="ornate" color="gold" />
      
      <RoyalSection
        title="Royal Testimonials"
        description="Hear from our distinguished nobles who have traded real currency for imaginary status"
        centered={true}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="glass-morphism border border-white/10 p-6 rounded-lg relative"
          >
            <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-royal-crimson flex items-center justify-center border-2 border-royal-crimson/50">
              <Crown className="h-4 w-4 text-white" />
            </div>
            <p className="italic text-white/80 mb-4">
              "I've spent thousands on designer shoes that sit unworn in my closet, so why not spend a few hundred on completely virtual status? At least here I'm honest about my materialism! Plus, I can market my business through my profile, which almost makes it a legitimate business expense... almost."
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                <img src="/throne-assets/avatars/noble-1.jpg" alt="Noble testimonial" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-bold">Lady Goldencoin</div>
                <div className="text-royal-gold text-sm">#4 on Leaderboard</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="glass-morphism border border-white/10 p-6 rounded-lg relative"
          >
            <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-royal-navy flex items-center justify-center border-2 border-royal-navy/50">
              <Crown className="h-4 w-4 text-white" />
            </div>
            <p className="italic text-white/80 mb-4">
              "After years of trying to climb the corporate ladder through actual work and skill development, I discovered I could just buy my way to the top here! It's like nepotism but without needing to be related to anyone important. My marketing ROI from promoting on my high-ranked profile has been surprisingly effective!"
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                <img src="/throne-assets/avatars/noble-2.jpg" alt="Noble testimonial" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-bold">Duke Digitalworth</div>
                <div className="text-royal-gold text-sm">#7 on Leaderboard</div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="text-center mt-8 text-sm text-white/50 italic max-w-lg mx-auto">
          <p>* These testimonials are from actual users, though we've taken the liberty of enhancing their eloquence. Your experience may vary, though your money will definitely be gone regardless.</p>
        </div>
      </RoyalSection>
    </Shell>
  );
};

export default Index;
