
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
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Crown, Trophy, Shield, Sparkles, ArrowRight } from 'lucide-react';
import useNotificationSounds from '@/hooks/use-notification-sounds';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';

const Index = () => {
  const { preloadAllSounds, playSound } = useNotificationSounds();
  const { toast } = useToast();
  const { user } = useAuth();
  const navigate = useNavigate();
  
  // Preload all sound effects when the homepage loads
  useEffect(() => {
    preloadAllSounds();
    
    // Play a subtle royal announcement when the page loads
    const timer = setTimeout(() => {
      playSound('royalAnnouncement', 0.1);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [preloadAllSounds, playSound]);
  
  const handleQuickAscension = () => {
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
          {/* Top Spender Showcase */}
          <div className="mb-16 glass-morphism border-royal-gold/30 rounded-xl p-8 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 opacity-10">
              <Crown size={240} className="text-royal-gold" />
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 text-center">
                <div className="relative inline-block">
                  <div className="w-32 h-32 rounded-full bg-royal-gold/20 border-2 border-royal-gold flex items-center justify-center overflow-hidden">
                    <img 
                      src="https://source.unsplash.com/random/?royal,portrait" 
                      alt="Top Spender" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-royal-gold rounded-full p-1">
                    <Crown size={20} className="text-background" />
                  </div>
                </div>
                <h3 className="mt-3 font-royal text-xl">Lord Moneybags</h3>
                <p className="text-white/70 text-sm">Royal Rank #1</p>
                <p className="text-royal-gold font-bold mt-1">$56,780 spent</p>
              </div>
              
              <div className="md:w-2/3">
                <h2 className="text-2xl md:text-3xl font-bold royal-gradient mb-4 font-royal">
                  The Current Ruler of Our Digital Realm
                </h2>
                <p className="text-white/70 mb-4">
                  Through sheer financial might, Lord Moneybags has claimed the highest position in our hierarchy. 
                  Will you be the one to dethrone the current ruler? Remember, in this kingdom, power is purchased, 
                  not earned through trivial matters like "merit" or "talent."
                </p>
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
              </div>
            </div>
          </div>
          
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
            <div className="glass-morphism border-white/10 rounded-lg p-6 text-center">
              <Crown className="h-12 w-12 text-royal-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 font-royal">Dollar-Driven Rank</h3>
              <p className="text-white/70 mb-4">
                Your rank is determined solely by your spending. Top spenders get exclusive perks and recognition.
              </p>
              <Link to="/leaderboard">
                <Button 
                  className="bg-white/10 hover:bg-white/20 text-white"
                  onClick={() => playSound('notification', 0.2)}
                >
                  View Court Rankings
                </Button>
              </Link>
            </div>
            
            <div className="glass-morphism border-white/10 rounded-lg p-6 text-center">
              <Trophy className="h-12 w-12 text-royal-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 font-royal">Royal Events</h3>
              <p className="text-white/70 mb-4">
                Participate in weekly events like the Public Shaming Festival where you can pay to shame other nobles.
              </p>
              <Link to="/events">
                <Button 
                  className="bg-white/10 hover:bg-white/20 text-white"
                  onClick={() => playSound('notification', 0.2)}
                >
                  View Royal Events
                </Button>
              </Link>
            </div>
            
            <div className="glass-morphism border-white/10 rounded-lg p-6 text-center">
              <Shield className="h-12 w-12 text-royal-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 font-royal">Noble Houses</h3>
              <p className="text-white/70 mb-4">
                Join one of three noble houses and compete for house glory and additional royal benefits.
              </p>
              <Link to="/dashboard">
                <Button 
                  className="bg-white/10 hover:bg-white/20 text-white"
                  onClick={() => playSound('notification', 0.2)}
                >
                  Join a Noble House
                </Button>
              </Link>
            </div>
          </div>
          
          <RoyalDivider variant="line" label="ROYAL COURT STANDINGS" color="royal" className="mb-8" />
          
          <div className="mb-16">
            <CombinedLeaderboard limit={5} compact={true} />
          </div>
          
          <RoyalFeatures />
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
