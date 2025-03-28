import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Crown, Coins, Users, Scroll, ArrowRight, Flame, Sparkles, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { RoyalSection, RoyalCard, RoyalBadge, TeamBadge, TierBadge, SpendAmount } from '@/components/ui/theme-components';
import { useToastContext } from '@/contexts/ToastContext';
import { useAuth } from '@/contexts/auth';
import RoyalDivider from '@/components/ui/royal-divider';
import MedievalIcon from '@/components/ui/medieval-icon';
import { useTheme } from '@/providers/theme-provider';

const Home = () => {
  const { addToast } = useToastContext();
  const { user } = useAuth();
  const { theme } = useTheme();
  const [scrollProgress, setScrollProgress] = useState(0);

  // Top spenders data for showcase (in a real app, would be fetched from an API)
  const topSpenders = [
    { id: 1, username: 'LordGoldpurse', avatar: 'https://source.unsplash.com/random/100x100/?king', spent: 25000, team: 'red' as const, tier: 'whale' as const },
    { id: 2, username: 'DuchessRich', avatar: 'https://source.unsplash.com/random/100x100/?queen', spent: 15000, team: 'green' as const, tier: 'whale' as const },
    { id: 3, username: 'SirSpendsalot', avatar: 'https://source.unsplash.com/random/100x100/?knight', spent: 10000, team: 'blue' as const, tier: 'shark' as const },
  ];
  
  // Features list for feature section
  const features = [
    {
      title: 'Dollar-Driven Rank',
      description: 'Your rank is determined solely by how much you spend. $1 = 1 unit of rank. The more you spend, the higher you climb.',
      icon: <Coins className="h-5 w-5 text-royal-gold" />,
    },
    {
      title: 'Team Rivalries',
      description: 'Join one of three royal houses and compete for team dominance. Your contributions boost your team\'s power.',
      icon: <Users className="h-5 w-5 text-royal-gold" />,
    },
    {
      title: 'Profile Customization',
      description: 'Unlock exclusive profile enhancements, animated effects, and status symbols as you spend more.',
      icon: <Sparkles className="h-5 w-5 text-royal-gold" />,
    },
    {
      title: 'Royal Mockery',
      description: 'Spend to mock other users with visual effects on their profiles. The ultimate form of medieval ridicule.',
      icon: <Flame className="h-5 w-5 text-royal-gold" />,
    },
    {
      title: 'Pay to Win',
      description: 'The more you spend, the higher you rank. It\'s that simple.',
      icon: <TrendingUp className="h-8 w-8 text-royal-gold" />,
      reversed: true,
    },
  ];
  
  // Event types for event section
  const events = [
    {
      title: 'Poke Party',
      description: 'Pay to drop other users down the leaderboard temporarily.',
      date: 'Every Monday',
      badge: 'Weekly Event',
    },
    {
      title: 'Team Tournament',
      description: 'Teams compete for the highest collective spending.',
      date: 'Monthly',
      badge: 'Monthly Event',
    },
    {
      title: 'Royal Sale',
      description: 'Limited-time discounts on Premium features.',
      date: 'Weekends',
      badge: 'Featured',
    },
  ];
  
  // Handle scroll event to track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Helmet>
        <title>SpendThrone | Where Money Determines Your Worth</title>
        <meta 
          name="description" 
          content="SpendThrone - A satirical pay-to-win social platform where your rank is determined solely by how much you spend. Join the medieval mockery today!"
        />
      </Helmet>
      
      {/* Fixed progress bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-royal-gold z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />
      
      <Header transparent />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-bg-dark to-bg-dark-lighter z-0" />
          
          <div className="absolute inset-0 z-0 opacity-5">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(13,13,32,0.1)_0.5px,transparent_0.5px),linear-gradient(90deg,rgba(13,13,32,0.1)_0.5px,transparent_0.5px)]" style={{ backgroundSize: '50px 50px' }} />
          </div>
          
          <div className="container px-4 mx-auto z-10 relative pt-16">
            <motion.div 
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <MedievalIcon name="crown" size="xl" color="gold" animate="glow" className="mx-auto mb-6" />
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-royal royal-gradient mb-4">
                Where Your Wallet <br />Determines Your Worth
              </h1>
              
              <p className="text-xl md:text-2xl text-white/70 mb-8">
                A satirical pay-to-win social experiment
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Link to="/leaderboard">
                  <Button 
                    size="lg" 
                    className="bg-royal-gold text-black hover:bg-royal-gold/90 royal-button-enhanced"
                  >
                    <Crown className="h-5 w-5 mr-2" />
                    View the Hierarchy
                  </Button>
                </Link>
                
                <Link to="/about">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-royal-gold/30 text-royal-gold hover:bg-royal-gold/10"
                  >
                    <Scroll className="h-5 w-5 mr-2" />
                    Learn More
                  </Button>
                </Link>
              </div>
              
              <div className="flex flex-wrap justify-center gap-3 max-w-xl mx-auto">
                <RoyalBadge variant="outlineGold" size="md">$1 = 1 Rank Point</RoyalBadge>
                <RoyalBadge variant="outlineGold" size="md">No Skills Required</RoyalBadge>
                <RoyalBadge variant="outlineGold" size="md">Just Pure Spending</RoyalBadge>
                <RoyalBadge variant="outlineGold" size="md">Join a Royal House</RoyalBadge>
                <RoyalBadge variant="outlineGold" size="md">Mock Your Rivals</RoyalBadge>
              </div>
            </motion.div>
          </div>
          
          {/* Bottom wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none">
              <path d="M0 0L48 8C96 16 192 32 288 40C384 48 480 48 576 48C672 48 768 48 864 40C960 32 1056 16 1152 16C1248 16 1344 32 1392 40L1440 48V80H1392C1344 80 1248 80 1152 80C1056 80 960 80 864 80C768 80 672 80 576 80C480 80 384 80 288 80C192 80 96 80 48 80H0V0Z" fill="#0D0D20" />
            </svg>
          </div>
        </section>
        
        {/* Top Spenders Showcase */}
        <RoyalSection 
          title="Current Nobility" 
          description="The elite few who've proven their worth through spending"
          centered
          className="py-16"
        >
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {topSpenders.map((spender, index) => (
              <motion.div key={spender.id} variants={itemVariants}>
                <RoyalCard 
                  variant={index === 0 ? 'gold' : index === 1 ? 'silver' : index === 2 ? 'bronze' : 'default'} 
                  hover="glow"
                  className="text-center transform"
                >
                  <div className="relative mx-auto w-24 h-24 mb-4">
                    <div className="w-full h-full rounded-full overflow-hidden border-2 border-royal-gold/50">
                      <img src={spender.avatar} alt={spender.username} className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -top-2 -right-2">
                      <div className={`flex items-center justify-center rounded-full w-8 h-8 ${index === 0 ? 'bg-royal-gold text-black' : index === 1 ? 'bg-gray-300 text-black' : 'bg-amber-600 text-white'}`}>
                        #{index + 1}
                      </div>
                    </div>
                    
                    <div className="absolute bottom-0 right-0">
                      <TeamBadge team={spender.team} size="sm" />
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-1">{spender.username}</h3>
                  
                  <div className="flex justify-center mb-3">
                    <TierBadge tier={spender.tier} size="sm" />
                  </div>
                  
                  <p className="text-white/70 text-sm mb-1">Amount Spent:</p>
                  <SpendAmount amount={spender.spent} size="lg" />
                </RoyalCard>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="text-center mt-8">
            <Link to="/leaderboard">
              <Button className="border-royal-gold/30 text-royal-gold hover:bg-royal-gold/10" variant="outline">
                View Full Leaderboard
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </RoyalSection>
        
        <RoyalDivider variant="royal" className="my-0" />
        
        {/* Features Section */}
        <RoyalSection
          title="Royal Features" 
          description="Experience the unique mechanics of our satirical platform"
          className="py-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <RoyalCard hover="scale" className="h-full">
                  <div className="flex items-start">
                    <div className="mr-4 flex-shrink-0 h-10 w-10 rounded-full bg-royal-gold/10 flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                      <p className="text-white/70">{feature.description}</p>
                    </div>
                  </div>
                </RoyalCard>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/features">
              <Button className="bg-royal-gold text-black hover:bg-royal-gold/90 royal-button-enhanced">
                <Sparkles className="h-4 w-4 mr-2" />
                Explore All Features
              </Button>
            </Link>
          </div>
        </RoyalSection>
        
        {/* Teams Section */}
        <section className="py-16 bg-gradient-to-b from-bg-dark to-bg-dark-lighter">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold royal-gradient mb-4 font-royal">
                Choose Your Allegiance
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Join one of three royal houses and contribute to your team's collective power
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="glass-morphism border-royal-crimson/30 rounded-lg p-6 text-center hover:shadow-[0_0_15px_rgba(155,35,53,0.3)] transition-shadow duration-300">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-royal-crimson/20 flex items-center justify-center">
                    <MedievalIcon name="flame" size="lg" color="red" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-royal-crimson-bright">House Crimson</h3>
                  <p className="text-white/70 mb-4">
                    Fierce, ambitious nobles who believe power should be seized and flaunted.
                  </p>
                  <TeamBadge team="red" size="lg">House Crimson</TeamBadge>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="glass-morphism border-royal-gold/30 rounded-lg p-6 text-center hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-shadow duration-300">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-royal-gold/20 flex items-center justify-center">
                    <MedievalIcon name="sunburst" size="lg" color="gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-royal-gold">House Gold</h3>
                  <p className="text-white/70 mb-4">
                    Shrewd merchants and bankers who value wealth as the ultimate measure of success.
                  </p>
                  <TeamBadge team="green" size="lg">House Gold</TeamBadge>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="glass-morphism border-royal-navy/30 rounded-lg p-6 text-center hover:shadow-[0_0_15px_rgba(31,71,136,0.3)] transition-shadow duration-300">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-royal-navy/20 flex items-center justify-center">
                    <MedievalIcon name="water" size="lg" color="blue" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-royal-navy-bright">House Azure</h3>
                  <p className="text-white/70 mb-4">
                    Strategic thinkers who leverage their wealth for influence and social standing.
                  </p>
                  <TeamBadge team="blue" size="lg">House Azure</TeamBadge>
                </div>
              </motion.div>
            </div>
            
            <div className="text-center mt-10">
              <Link to={user ? "/dashboard" : "/auth"}>
                <Button className="border-royal-gold/30 text-royal-gold hover:bg-royal-gold/10" variant="outline">
                  {user ? "Change Your Allegiance" : "Join a Royal House"}
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Upcoming Events */}
        <RoyalSection title="Royal Tournaments" description="Special events to spice up your experience" centered className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {events.map((event, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <RoyalCard className="text-center h-full">
                  <RoyalBadge variant="gold" className="mb-3">{event.badge}</RoyalBadge>
                  <h3 className="text-lg font-bold mb-2">{event.title}</h3>
                  <p className="text-white/70 mb-3">{event.description}</p>
                  <p className="text-sm text-royal-gold">{event.date}</p>
                </RoyalCard>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/events">
              <Button 
                className="border-royal-gold/30 text-royal-gold hover:bg-royal-gold/10" 
                variant="outline"
                onClick={() => {
                  // If events page not built yet, show toast
                  addToast({
                    title: "Coming Soon",
                    description: "The Events calendar is being prepared by the royal scribes.",
                    variant: "default",
                  });
                }}
              >
                View Event Calendar
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </RoyalSection>
        
        <RoyalDivider variant="ornate" className="my-0" />
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-royal-purple-dark/50 via-bg-dark to-royal-navy-dark/50 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(106,13,173,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(106,13,173,0.1)_1px,transparent_1px)]" style={{ backgroundSize: '20px 20px' }} />
          </div>
          
          <div className="container px-4 mx-auto relative z-10">
            <motion.div 
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <MedievalIcon name="crown" size="lg" color="gold" animate="glow" className="mx-auto mb-6" />
              
              <h2 className="text-3xl md:text-4xl font-royal royal-gradient mb-6">
                Ready to Ascend the Ranks?
              </h2>
              
              <p className="text-xl text-white/70 mb-10">
                Join SpendThrone today and begin your journey to the top of our satirical hierarchy.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to={user ? "/dashboard" : "/auth"}>
                  <Button 
                    size="lg" 
                    className="bg-royal-gold text-black hover:bg-royal-gold/90 royal-button-enhanced"
                  >
                    <Crown className="h-5 w-5 mr-2" />
                    {user ? "Enter Your Royal Court" : "Claim Your Title"}
                  </Button>
                </Link>
                
                <Link to="/leaderboard">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-royal-gold/30 text-royal-gold hover:bg-royal-gold/10"
                  >
                    <Coins className="h-5 w-5 mr-2" />
                    View Current Hierarchy
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
