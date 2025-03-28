
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
import RoyalShowcase from '@/components/RoyalShowcase';

// Lazy load heavy components
const RoyalHero = lazy(() => import('@/components/RoyalHero'));
const RoyalDivider = lazy(() => import('@/components/ui/royal-divider'));
const RoyalParchment = lazy(() => import('@/components/ui/royal-parchment'));
const CombinedLeaderboard = lazy(() => import('@/components/leaderboard/CombinedLeaderboard'));
const RoyalFeatures = lazy(() => import('@/components/RoyalFeatures'));
const RoyalFAQ = lazy(() => import('@/components/RoyalFAQ'));
const RoyalBadges = lazy(() => import('@/components/RoyalBadges'));
const TeamSection = lazy(() => import('@/components/TeamSection'));
const WishingWell = lazy(() => import('@/components/wishingwell/WishingWell'));

// Simple loading fallback
const LoadingPlaceholder = () => (
  <div className="w-full h-48 flex items-center justify-center">
    <div className="h-8 w-8 animate-spin rounded-full border-2 border-royal-gold border-t-transparent"></div>
  </div>
);

// Mock top spender data - in real app, this would come from API
const topSpender = {
  id: "top-1",
  username: "Moneybags",
  displayName: "Lord Moneybags",
  email: "lordmoneybags@example.com",
  profileImage: "https://source.unsplash.com/random/?royal,portrait",
  amountSpent: 56780,
  spentAmount: 56780,
  rank: 1,
  team: "red" as const,
  spendingStreak: 14,
  gender: "king" as const,
  bio: "I've spent a small fortune for this meaningless digital crown. Worth every penny for the satirical royal status.",
  socialLinks: [
    {
      platform: "Twitter",
      url: "https://twitter.com/example",
      clicks: 123
    },
    {
      platform: "My Blog",
      url: "https://example.com/blog",
      clicks: 87
    },
    {
      platform: "YouTube",
      url: "https://youtube.com/example",
      clicks: 45
    }
  ],
  joinDate: "2023-05-15",
  joinedAt: "2023-05-15T12:00:00Z"
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
        
        {/* Featured Current Monarch Section - Prominently displayed below header */}
        <div className="bg-gradient-to-b from-[#141428] to-[#0D0D20] py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-6">
              <h2 className="text-3xl md:text-4xl font-bold font-medieval royal-gradient">
                <Crown className="inline-block mr-2 text-royal-gold" />
                Current Reigning Monarch
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto mt-2">
                Behold the highest paying member of our digital court, with purely cosmetic privileges and absolutely no real power.
              </p>
            </div>
            
            <Suspense fallback={<LoadingPlaceholder />}>
              <RoyalShowcase topSpender={topSpender} />
            </Suspense>
            
            <div className="text-center mt-8">
              <Button
                onClick={handleQuickAscension}
                className="bg-royal-gold hover:bg-royal-gold/90 text-black royal-button text-lg px-8 py-6"
              >
                <DollarSign className="mr-2 h-5 w-5" />
                Ascend the Throne
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="mt-3 text-white/50 italic max-w-md mx-auto">
                Every dollar spent raises your cosmetic rank. No actual benefits or advantages.
              </p>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <Suspense fallback={<LoadingPlaceholder />}>
            <RoyalDivider variant="crown" label="ROYAL COURT STANDINGS" color="gold" className="mb-8 mt-12" />
            
            <div className="mb-12">
              <CombinedLeaderboard limit={5} compact={true} />
              
              <div className="mt-6 text-center">
                <Link to="/dashboard">
                  <Button 
                    className="royal-button bg-gradient-to-r from-royal-crimson to-royal-gold hover:opacity-90 text-white px-6 py-2 rounded-full"
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
                <p className="mt-3 text-foreground/60 text-sm italic font-medieval-text">
                  Every dollar spent elevates your cosmetic standing. All purely visual without any actual power or advantages.
                </p>
              </div>
            </div>
          </Suspense>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="col-span-2">
              <Suspense fallback={<LoadingPlaceholder />}>
                <RoyalFeatures />
              </Suspense>
            </div>
            <div>
              <Suspense fallback={<LoadingPlaceholder />}>
                <WishingWell />
              </Suspense>
            </div>
          </div>
          
          <Suspense fallback={<LoadingPlaceholder />}>
            <RoyalDivider variant="crown" label="PATH TO VISUAL NOBILITY" color="gold" className="mb-8" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <RoyalParchment variant="default" className="p-6">
                <h3 className="text-xl font-bold mb-4 font-medieval royal-gradient">The Royal Cosmetic Hierarchy</h3>
                <p className="text-foreground/70 mb-6">
                  Your journey from peasant to visual nobility is measured in dollars, not deeds. Ascend through our meticulously 
                  designed cosmetic tiers and watch as your digital social status rises with each transaction.
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
                    We solemnly swear that your cosmetic rank will always be determined by a pure mathematical formula:
                  </p>
                  <div className="p-4 bg-royal-gold/10 rounded-lg border border-royal-gold/20 text-center mb-4">
                    <p className="text-lg font-bold font-medieval">$1 Spent = 1 Rank Point</p>
                  </div>
                  <p className="text-foreground/70 italic">
                    No hidden algorithms. No secret formulas. Just the elegant simplicity of a leaderboard based on spending.
                  </p>
                </RoyalParchment>
                
                <RoyalParchment variant="crimson" className="p-6 flex-1">
                  <h3 className="text-xl font-bold mb-3 font-medieval">Weekly Crown Ceremonies</h3>
                  <p className="text-foreground/70 mb-2">
                    Every Sunday at midnight, the week's top spender receives the coveted Digital Crown—a purely cosmetic 
                    badge that somehow manages to inspire playful competition.
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
