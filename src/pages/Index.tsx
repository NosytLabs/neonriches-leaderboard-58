import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RoyalHero from '@/components/RoyalHero';
import RoyalFeatures from '@/components/RoyalFeatures';
import RoyalFAQ from '@/components/RoyalFAQ';
import RoyalBadges from '@/components/RoyalBadges';
import TeamSection from '@/components/TeamSection';
import CombinedLeaderboard from '@/components/leaderboard/CombinedLeaderboard';
import RoyalDivider from '@/components/ui/royal-divider';
import RoyalParchment from '@/components/ui/royal-parchment';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Crown, Trophy, Shield, Sparkles, ArrowRight, Gem, Coins, DollarSign, Scroll } from 'lucide-react';
import useNotificationSounds from '@/hooks/use-notification-sounds';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';

const Index = () => {
  const { preloadAllSounds, playSound } = useNotificationSounds();
  const { toast } = useToast();
  const { user } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    preloadAllSounds();
    
    const timer = setTimeout(() => {
      playSound('royalAnnouncement', 0.1);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [preloadAllSounds, playSound]);
  
  const handleQuickAscension = () => {
    playSound('reward', 0.3);
    toast({
      title: "Nobility Beckons!",
      description: "Your journey to meaningless digital status begins now!",
      duration: 3000,
    });
    navigate('/dashboard');
  };
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main>
        <RoyalHero />
        
        <div className="container mx-auto px-4 py-12">
          <RoyalParchment 
            variant="gold" 
            className="mb-16 p-8 relative overflow-hidden"
            animateEntry={true}
            ribbons={true}
          >
            <div className="absolute -top-20 -right-20 opacity-10">
              <Crown size={240} className="text-royal-gold" />
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 text-center">
                <div className="relative inline-block animate-royal-pulse">
                  <div className="absolute -inset-2 bg-royal-gold/20 rounded-full blur-md"></div>
                  <div className="w-32 h-32 rounded-full bg-royal-gold/20 border-2 border-royal-gold flex items-center justify-center overflow-hidden">
                    <img 
                      src="https://source.unsplash.com/random/?royal,portrait" 
                      alt="Top Spender" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-royal-gold rounded-full p-1 animate-crown-glow">
                    <Crown size={20} className="text-background" />
                  </div>
                </div>
                <h3 className="mt-3 font-royal text-xl">Lord Moneybags</h3>
                <p className="text-white/70 text-sm">Royal Rank #1</p>
                <p className="text-royal-gold font-bold mt-1">$56,780 spent</p>
                
                <div className="mt-2 inline-flex items-center px-2 py-1 rounded-full bg-royal-gold/10 border border-royal-gold/20">
                  <Trophy size={12} className="text-royal-gold mr-1" />
                  <span className="text-xs">14 week spending streak</span>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <h2 className="text-2xl md:text-3xl font-bold royal-gradient mb-4 font-royal">
                  The Current Ruler of Our Digital Realm
                </h2>
                <p className="text-white/70 mb-6">
                  Through sheer financial might, Lord Moneybags has claimed the highest position in our hierarchy. 
                  Will you be the one to dethrone the current ruler? Remember, in this kingdom, power is purchased, 
                  not earned through trivial matters like "merit" or "talent."
                </p>
                
                <div className="mb-6 p-4 border border-royal-gold/20 rounded-lg bg-royal-gold/5 italic text-sm">
                  <div className="flex items-start">
                    <div className="mr-2 mt-1">
                      <Scroll size={16} className="text-royal-gold" />
                    </div>
                    <p>
                      "I, Lord Moneybags, declare my digital dominance through the most noble virtue of all: excessive spending. 
                      My wealth is my worth. My expenditure, my excellence. Challenge me if you dare, but know that only your 
                      currency—not your character—will determine your place in this glorious digital kingdom."
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <Button
                    className="royal-button bg-gradient-royal hover:opacity-90 text-white px-6 py-2 text-lg rounded-full font-royal"
                    onClick={handleQuickAscension}
                  >
                    <div className="relative z-10 flex items-center">
                      <Crown size={18} className="mr-2" />
                      Challenge for the Throne
                    </div>
                  </Button>
                  
                  <Link to="/leaderboard">
                    <Button
                      variant="outline"
                      className="glass-morphism border-white/20 text-white hover:bg-white/10 hover:text-white px-6 py-2 text-lg rounded-full royal-button"
                    >
                      <span className="relative z-10 flex items-center">
                        View Royal Court
                        <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                      </span>
                    </Button>
                  </Link>
                </div>
                
                <div className="mt-6 bg-background/40 rounded-lg p-3 backdrop-blur-sm border border-white/10">
                  <div className="text-xs text-white/60 mb-1">Overthrow Calculator:</div>
                  <div className="flex items-center">
                    <DollarSign size={14} className="text-royal-gold" />
                    <span className="text-white/80 text-sm">You need <span className="text-royal-gold font-bold">$56,781</span> to claim the throne</span>
                  </div>
                </div>
              </div>
            </div>
          </RoyalParchment>
          
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold royal-gradient mb-2 font-royal">
              A Hierarchy Built Purely on Wealth
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              On P2W.FUN, your status is directly proportional to your spending. $1 = 1 unit of rank. 
              The leaderboard never resets, making your investment in status eternal.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
            <div className="glass-morphism border-white/10 rounded-lg p-6 text-center shadow-lg transition-all duration-300 hover:shadow-royal-gold/10 hover:border-royal-gold/30">
              <div className="relative mb-4 inline-block">
                <div className="absolute -inset-3 bg-royal-crimson/10 rounded-full blur-md opacity-60"></div>
                <Crown className="h-12 w-12 text-royal-gold mx-auto animate-royal-pulse relative z-10" />
                <Sparkles className="h-4 w-4 text-royal-gold absolute -top-1 -right-1 animate-sparkle" />
              </div>
              <h3 className="text-xl font-bold mb-2 font-royal">Dollar-Driven Rank</h3>
              <p className="text-white/70 mb-4">
                Your rank is determined solely by your spending. Top spenders get exclusive perks and recognition.
              </p>
              <Link to="/leaderboard">
                <Button 
                  className="bg-white/10 hover:bg-white/20 text-white royal-button"
                  onClick={() => playSound('notification', 0.2)}
                >
                  <span className="relative z-10">View Court Rankings</span>
                </Button>
              </Link>
            </div>
            
            <div className="glass-morphism border-white/10 rounded-lg p-6 text-center shadow-lg transition-all duration-300 hover:shadow-royal-gold/10 hover:border-royal-gold/30">
              <div className="relative mb-4 inline-block">
                <div className="absolute -inset-3 bg-royal-gold/10 rounded-full blur-md opacity-60"></div>
                <Trophy className="h-12 w-12 text-royal-gold mx-auto animate-royal-pulse relative z-10" />
                <Sparkles className="h-4 w-4 text-royal-gold absolute -top-1 -right-1 animate-sparkle" style={{ animationDelay: '0.5s' }}/>
              </div>
              <h3 className="text-xl font-bold mb-2 font-royal">Royal Events</h3>
              <p className="text-white/70 mb-4">
                Participate in weekly events like the Public Shaming Festival where you can pay to shame other nobles.
              </p>
              <Link to="/events">
                <Button 
                  className="bg-white/10 hover:bg-white/20 text-white royal-button"
                  onClick={() => playSound('notification', 0.2)}
                >
                  <span className="relative z-10">View Royal Events</span>
                </Button>
              </Link>
            </div>
            
            <div className="glass-morphism border-white/10 rounded-lg p-6 text-center shadow-lg transition-all duration-300 hover:shadow-royal-gold/10 hover:border-royal-gold/30">
              <div className="relative mb-4 inline-block">
                <div className="absolute -inset-3 bg-royal-navy/10 rounded-full blur-md opacity-60"></div>
                <Shield className="h-12 w-12 text-royal-gold mx-auto animate-royal-pulse relative z-10" />
                <Sparkles className="h-4 w-4 text-royal-gold absolute -top-1 -right-1 animate-sparkle" style={{ animationDelay: '1s' }}/>
              </div>
              <h3 className="text-xl font-bold mb-2 font-royal">Noble Houses</h3>
              <p className="text-white/70 mb-4">
                Join one of three noble houses and compete for house glory and additional royal benefits.
              </p>
              <Link to="/dashboard">
                <Button 
                  className="bg-white/10 hover:bg-white/20 text-white royal-button"
                  onClick={() => playSound('notification', 0.2)}
                >
                  <span className="relative z-10">Join a Noble House</span>
                </Button>
              </Link>
            </div>
          </div>
          
          <RoyalDivider variant="treasure" label="ROYAL COURT STANDINGS" color="gold" className="mb-8" />
          
          <div className="mb-16">
            <CombinedLeaderboard limit={5} compact={true} />
            
            <div className="mt-6 text-center">
              <Link to="/dashboard">
                <Button 
                  className="royal-button bg-gradient-royal hover:opacity-90 text-white px-6 py-2 rounded-full"
                  onClick={() => playSound('notification', 0.2)}
                >
                  <span className="relative z-10 flex items-center">
                    <Coins size={16} className="mr-2" />
                    Secure Your Position
                  </span>
                </Button>
              </Link>
              <p className="mt-3 text-white/60 text-sm italic">
                Every dollar spent elevates your standing. Why earn respect when you can simply buy it?
              </p>
            </div>
          </div>
          
          <RoyalFeatures />
          
          <div className="mb-16">
            <RoyalDivider variant="crown" label="PATH TO NOBILITY" color="gold" className="mb-8" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <RoyalParchment variant="default" className="p-6">
                <h3 className="text-xl font-bold mb-4 font-royal royal-gradient">The Royal Spending Hierarchy</h3>
                <p className="text-white/70 mb-6">
                  Your journey from peasant to nobility is measured in dollars, not deeds. Ascend through our meticulously 
                  designed spending tiers and watch as your digital social status rises with each transaction.
                </p>
                
                <div className="space-y-4">
                  {[
                    { name: "Whale", title: "Monarch of the Deep", amount: "$25,000+", icon: <Crown size={18} />, color: "royal-purple" },
                    { name: "Shark", title: "Apex Predator", amount: "$10,000+", icon: <Shield size={18} />, color: "royal-crimson" },
                    { name: "Dolphin", title: "Speed of the Current", amount: "$5,000+", icon: <Trophy size={18} />, color: "royal-navy" },
                    { name: "Fish", title: "Abyssal Light", amount: "$1,000+", icon: <Gem size={18} />, color: "text-blue-400" },
                    { name: "Octopus", title: "Kraken's Ink", amount: "$250+", icon: <Sparkles size={18} />, color: "text-purple-400" },
                    { name: "Crab", title: "Crab's Riches", amount: "Up to $250", icon: <Coins size={18} />, color: "text-amber-700" }
                  ].map((tier, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`w-8 h-8 rounded-full bg-${tier.color}/20 flex items-center justify-center mr-3`}>
                          <span className={`${tier.color}`}>{tier.icon}</span>
                        </div>
                        <div>
                          <h4 className="font-semibold">{tier.name} Tier</h4>
                          <p className="text-xs text-white/60">{tier.title}</p>
                        </div>
                      </div>
                      <div className="text-royal-gold font-mono">{tier.amount}</div>
                    </div>
                  ))}
                </div>
              </RoyalParchment>
              
              <div className="flex flex-col gap-6">
                <RoyalParchment variant="gold" className="p-6 flex-1">
                  <h3 className="text-xl font-bold mb-3 font-royal">The Royal Promise</h3>
                  <p className="text-white/70 mb-4">
                    We solemnly swear that your rank will always be determined by a pure mathematical formula:
                  </p>
                  <div className="p-4 bg-royal-gold/10 rounded-lg border border-royal-gold/20 text-center mb-4">
                    <p className="text-lg font-bold font-royal">$1 Spent = 1 Rank Point</p>
                  </div>
                  <p className="text-white/70 italic">
                    No hidden algorithms. No secret formulas. Just the elegant simplicity of wealth equaling worth.
                  </p>
                </RoyalParchment>
                
                <RoyalParchment variant="crimson" className="p-6 flex-1">
                  <h3 className="text-xl font-bold mb-3 font-royal">Weekly Crown Ceremonies</h3>
                  <p className="text-white/70 mb-2">
                    Every Sunday at midnight, the week's top spender receives the coveted Digital Crown—a completely worthless 
                    badge that somehow manages to inspire irrational competition.
                  </p>
                  <div className="text-center mt-4">
                    <Crown size={40} className="text-royal-gold inline-block animate-crown-glow" />
                  </div>
                </RoyalParchment>
              </div>
            </div>
          </div>
          
          <TeamSection />
          <RoyalBadges />
          <RoyalFAQ />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
