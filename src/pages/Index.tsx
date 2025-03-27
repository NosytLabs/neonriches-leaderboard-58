
import React, { useEffect, useState, Suspense, lazy } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Crown, DollarSign, ArrowRight, Trophy, Shield, Sparkles, Gem, Coins } from 'lucide-react';
import useNotificationSounds from '@/hooks/use-notification-sounds';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import HeroSpotlight from '@/components/hero/HeroSpotlight';

// Lazy load heavy components
const RoyalHero = lazy(() => import('@/components/RoyalHero'));
const RoyalDivider = lazy(() => import('@/components/ui/royal-divider'));
const RoyalParchment = lazy(() => import('@/components/ui/royal-parchment'));
const CombinedLeaderboard = lazy(() => import('@/components/leaderboard/CombinedLeaderboard'));
const RoyalFeatures = lazy(() => import('@/components/RoyalFeatures'));
const RoyalFAQ = lazy(() => import('@/components/RoyalFAQ'));
const RoyalBadges = lazy(() => import('@/components/RoyalBadges'));
const TeamSection = lazy(() => import('@/components/TeamSection'));

// Simple loading fallback
const LoadingPlaceholder = () => (
  <div className="w-full h-48 flex items-center justify-center">
    <div className="h-8 w-8 animate-spin rounded-full border-2 border-royal-gold border-t-transparent"></div>
  </div>
);

// Mock top spender data - in real app, this would come from API
const topSpender = {
  username: "Moneybags",
  profileImage: "https://source.unsplash.com/random/?royal,portrait",
  amountSpent: 56780,
  rank: 1,
  team: "gold",
  spendingStreak: 14
};

const Index = () => {
  const { preloadSounds, playSound } = useNotificationSounds();
  const { toast } = useToast();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Delay sound preloading until after initial render
  useEffect(() => {
    const timer = setTimeout(() => {
      preloadSounds();
      setIsLoaded(true);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, [preloadSounds]);
  
  // Only play sounds after user has interacted with the page
  useEffect(() => {
    if (isLoaded && hasInteracted) {
      playSound('royalAnnouncement', 0.1);
    }
  }, [isLoaded, hasInteracted, playSound]);
  
  const handleQuickAscension = () => {
    setHasInteracted(true);
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
        <Suspense fallback={<LoadingPlaceholder />}>
          <RoyalHero />
        </Suspense>
        
        <div className="container mx-auto px-4 py-12">
          <Suspense fallback={<LoadingPlaceholder />}>
            <HeroSpotlight topSpender={topSpender} currentUserAmount={user?.amountSpent || 0} />
          </Suspense>
          
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold royal-gradient mb-2 font-medieval">
              A Hierarchy Built Purely on Wealth
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
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
              <h3 className="text-xl font-bold mb-2 font-medieval">Dollar-Driven Rank</h3>
              <p className="text-foreground/70 mb-4">
                Your rank is determined solely by your spending. Top spenders get exclusive perks and recognition.
              </p>
              <Link to="/leaderboard">
                <Button 
                  className="bg-foreground/10 hover:bg-foreground/20 text-foreground royal-button"
                  onClick={() => {
                    setHasInteracted(true);
                    playSound('notification', 0.2);
                  }}
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
              <h3 className="text-xl font-bold mb-2 font-medieval">Royal Events</h3>
              <p className="text-foreground/70 mb-4">
                Participate in weekly events like the Public Shaming Festival where you can pay to shame other nobles.
              </p>
              <Link to="/events">
                <Button 
                  className="bg-foreground/10 hover:bg-foreground/20 text-foreground royal-button"
                  onClick={() => {
                    setHasInteracted(true);
                    playSound('notification', 0.2);
                  }}
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
              <h3 className="text-xl font-bold mb-2 font-medieval">Noble Houses</h3>
              <p className="text-foreground/70 mb-4">
                Join one of three noble houses and compete for house glory and additional royal benefits.
              </p>
              <Link to="/dashboard">
                <Button 
                  className="bg-foreground/10 hover:bg-foreground/20 text-foreground royal-button"
                  onClick={() => {
                    setHasInteracted(true);
                    playSound('notification', 0.2);
                  }}
                >
                  <span className="relative z-10">Join a Noble House</span>
                </Button>
              </Link>
            </div>
          </div>
          
          <Suspense fallback={<LoadingPlaceholder />}>
            <RoyalDivider variant="treasure" label="ROYAL COURT STANDINGS" color="gold" className="mb-8" />
            
            <div className="mb-16">
              <CombinedLeaderboard limit={5} compact={true} />
              
              <div className="mt-6 text-center">
                <Link to="/dashboard">
                  <Button 
                    className="royal-button bg-gradient-to-r from-royal-purple to-royal-gold hover:opacity-90 text-white px-6 py-2 rounded-full"
                    onClick={() => {
                      setHasInteracted(true);
                      playSound('notification', 0.2);
                    }}
                  >
                    <span className="relative z-10 flex items-center">
                      <Coins size={16} className="mr-2" />
                      Secure Your Position
                    </span>
                  </Button>
                </Link>
                <p className="mt-3 text-foreground/60 text-sm italic">
                  Every dollar spent elevates your standing. Why earn respect when you can simply buy it?
                </p>
              </div>
            </div>
          </Suspense>
          
          <Suspense fallback={<LoadingPlaceholder />}>
            <RoyalFeatures />
          </Suspense>
          
          <Suspense fallback={<LoadingPlaceholder />}>
            <RoyalDivider variant="crown" label="PATH TO NOBILITY" color="gold" className="mb-8" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <RoyalParchment variant="default" className="p-6">
                <h3 className="text-xl font-bold mb-4 font-medieval royal-gradient">The Royal Spending Hierarchy</h3>
                <p className="text-foreground/70 mb-6">
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
                          <p className="text-xs text-foreground/60">{tier.title}</p>
                        </div>
                      </div>
                      <div className="text-royal-gold font-mono">{tier.amount}</div>
                    </div>
                  ))}
                </div>
              </RoyalParchment>
              
              <div className="flex flex-col gap-6">
                <RoyalParchment variant="gold" className="p-6 flex-1">
                  <h3 className="text-xl font-bold mb-3 font-medieval">The Royal Promise</h3>
                  <p className="text-foreground/70 mb-4">
                    We solemnly swear that your rank will always be determined by a pure mathematical formula:
                  </p>
                  <div className="p-4 bg-royal-gold/10 rounded-lg border border-royal-gold/20 text-center mb-4">
                    <p className="text-lg font-bold font-medieval">$1 Spent = 1 Rank Point</p>
                  </div>
                  <p className="text-foreground/70 italic">
                    No hidden algorithms. No secret formulas. Just the elegant simplicity of wealth equaling worth.
                  </p>
                </RoyalParchment>
                
                <RoyalParchment variant="crimson" className="p-6 flex-1">
                  <h3 className="text-xl font-bold mb-3 font-medieval">Weekly Crown Ceremonies</h3>
                  <p className="text-foreground/70 mb-2">
                    Every Sunday at midnight, the week's top spender receives the coveted Digital Crown—a completely worthless 
                    badge that somehow manages to inspire irrational competition.
                  </p>
                  <div className="text-center mt-4">
                    <Crown size={40} className="text-royal-gold inline-block animate-crown-glow" />
                  </div>
                </RoyalParchment>
              </div>
            </div>
          </Suspense>
          
          <Suspense fallback={<LoadingPlaceholder />}>
            <TeamSection />
          </Suspense>
          
          <Suspense fallback={<LoadingPlaceholder />}>
            <RoyalBadges />
          </Suspense>
          
          <Suspense fallback={<LoadingPlaceholder />}>
            <RoyalFAQ />
          </Suspense>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
