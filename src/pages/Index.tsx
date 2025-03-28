
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RoyalHero from '@/components/RoyalHero';
import RoyalFeatures from '@/components/RoyalFeatures';
import RoyalShowcase from '@/components/RoyalShowcase';
import RoyalFAQ from '@/components/RoyalFAQ';
import TeamSection from '@/components/TeamSection';
import TopSpenderShowcase from '@/components/TopSpenderShowcase';
import useNotificationSounds from '@/hooks/use-notification-sounds';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import RoyalDivider from '@/components/ui/royal-divider';
import { Crown, ArrowRight } from 'lucide-react';
import { useAuth } from '@/contexts/auth';
import { mockLeaderboardData } from '@/components/leaderboard/LeaderboardData';
import { UserProfile } from '@/types/user';
import { ToastProvider } from '@/contexts/ToastContext';

const Index = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { playSound, preloadSounds } = useNotificationSounds();
  const { toast } = useToast();
  const [hasCheckedTerms, setHasCheckedTerms] = useState(false);
  const [hasAcceptedTerms, setHasAcceptedTerms] = useState(false);
  
  // Create a mock topSpender for the showcase components
  const mockTopSpender: UserProfile = {
    id: '1',
    username: 'LordMoneybags',
    displayName: 'Lord Moneybags',
    email: 'lordmoneybags@spendthrone.com',
    profileImage: 'https://source.unsplash.com/random/?royal,portrait',
    amountSpent: 25000,
    spentAmount: 25000,
    walletBalance: 1000,
    rank: 1,
    // Using optional previousRank now that we've updated the type
    spendStreak: 12,
    tier: 'whale',
    team: 'red',
    gender: 'king',
    joinDate: '2023-01-15T00:00:00.000Z',
    joinedAt: '2023-01-15T00:00:00.000Z',
    bio: "I've spent more on this meaningless digital status than most people spend on food. Behold my financial might!",
    socialLinks: [
      { platform: 'Twitter', url: 'https://twitter.com/lordmoneybags', clicks: 42 },
      { platform: 'Instagram', url: 'https://instagram.com/lordmoneybags', clicks: 28 }
    ],
    cosmetics: {
      borders: ['gold'],
      colors: ['royal-purple'],
      fonts: ['medieval'],
      emojis: ['crown', 'money'],
      titles: ['sovereign'],
      backgrounds: ['castle'],
      effects: ['sparkle'],
      badges: ['Monarch of the Deep'],
      themes: ['royal']
    }
  };

  useEffect(() => {
    // Load sounds for a better user experience
    preloadSounds();
    
    // Check if user has already accepted terms
    const acceptedTerms = localStorage.getItem('acceptedTerms');
    if (acceptedTerms === 'true') {
      setHasAcceptedTerms(true);
    }
    
    setHasCheckedTerms(true);
  }, [preloadSounds]);

  const handleGetStarted = () => {
    playSound('royalAnnouncement');
    
    if (!hasAcceptedTerms) {
      toast({
        title: "Noble Reminder",
        description: "You must accept our royal decree (Terms of Service) before joining the court.",
        variant: "default"
      });
      
      // Navigate to terms of service
      navigate('/terms');
      return;
    }
    
    if (user) {
      navigate('/dashboard');
    } else {
      // Open registration modal or navigate to registration page
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Helmet>
        <title>SpendThrone | The Ultimate Pay-to-Win Social Experiment</title>
        <meta 
          name="description" 
          content="Join SpendThrone, the satirical social platform where your rank is determined solely by how much money you spend. $1 = 1 unit of rank. No skills required."
        />
        <meta property="og:title" content="SpendThrone | The Ultimate Pay-to-Win Social Experiment" />
        <meta 
          property="og:description" 
          content="A satirical social platform where your rank is determined solely by how much money you spend. $1 = 1 unit of rank. No skills required."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <Header />
      
      <main className="flex-1">
        <RoyalHero />
        
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-14">
            <div className="inline-block mb-3">
              <Crown className="h-12 w-12 text-royal-gold animate-crown-glow" />
            </div>
            <h2 className="text-3xl font-bold royal-gradient mb-4 font-royal">
              Welcome to the Royal Court of Conspicuous Consumption
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Where you pay real money for fake status in a blatant parody of how actual status works.
              Who needs talent, hard work, or social contribution when you can just throw cash at the leaderboard?
            </p>
            
            <div className="mt-8">
              <Button 
                size="lg" 
                onClick={handleGetStarted}
                className="royal-button bg-royal-gold text-black hover:bg-royal-gold/90"
              >
                Begin Your Noble Ascent
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <p className="text-xs mt-3 text-white/50 italic">
                *No refunds for your questionable financial decisions
              </p>
            </div>
          </div>
          
          <RoyalDivider variant="crown" className="my-16" />
          
          <RoyalFeatures />
          
          <RoyalDivider variant="scroll" className="my-16" />
          
          <ToastProvider>
            <RoyalShowcase topSpender={mockTopSpender} />
          </ToastProvider>
          
          <TeamSection />
          
          <TopSpenderShowcase topSpender={mockTopSpender} />
          
          <div className="my-16">
            <RoyalFAQ />
            
            <div className="text-center mt-10">
              <Button 
                onClick={() => navigate('/faq')}
                variant="outline"
                className="border-royal-gold/30 text-royal-gold hover:bg-royal-gold/10"
              >
                View All FAQs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
