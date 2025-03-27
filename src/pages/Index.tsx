
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Leaderboard from '@/components/Leaderboard';
import TeamSection from '@/components/TeamSection';
import RoyalFeatures from '@/components/RoyalFeatures';
import ProfilePreview from '@/components/ProfilePreview';
import RoyalBadges from '@/components/RoyalBadges';
import RoyalFAQ from '@/components/RoyalFAQ';
import Footer from '@/components/Footer';
import { Crown, Sparkles } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Index = () => {
  const [showWelcomeToast, setShowWelcomeToast] = useState(true);

  // Add smooth entrance animation for page elements
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    if (showWelcomeToast) {
      setTimeout(() => {
        toast({
          title: "Royal Decree",
          description: "Welcome to SpendThrone, where your worth is measured in dollars, not deeds!",
          duration: 5000,
        });
        setShowWelcomeToast(false);
      }, 2000);
    }

    return () => {
      observer.disconnect();
    };
  }, [showWelcomeToast]);

  // Easter egg - random gold coin animations
  useEffect(() => {
    const interval = setInterval(() => {
      const shouldShowCoin = Math.random() > 0.7;
      
      if (shouldShowCoin) {
        const coin = document.createElement('div');
        coin.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-coins"><circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18"/><path d="M7 6h1v4"/><path d="m16.71 13.88.7.71-2.82 2.82"/></svg>';
        coin.className = 'fixed z-50 text-royal-gold animate-float';
        coin.style.top = `${Math.random() * 100}vh`;
        coin.style.left = `${Math.random() * 100}vw`;
        coin.style.animationDuration = `${3 + Math.random() * 4}s`;
        coin.style.opacity = '0.7';
        
        document.body.appendChild(coin);
        
        setTimeout(() => {
          document.body.removeChild(coin);
        }, 5000);
      }
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <Header />
      
      {/* Royal Cursor Enhancement */}
      <div className="fixed top-4 right-4 z-50 glass-morphism rounded-full p-2 flex space-x-2 opacity-70 hover:opacity-100 transition-opacity">
        <button 
          className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-royal-gold/20 transition-colors"
          onClick={() => document.body.classList.toggle('cursor-crown')}
          title="Toggle Crown Cursor"
        >
          <Crown size={18} className="text-royal-gold" />
        </button>
        <button 
          className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-royal-gold/20 transition-colors"
          onClick={() => document.body.classList.toggle('cursor-coin')}
          title="Toggle Coin Cursor"
        >
          <Sparkles size={18} className="text-royal-gold" />
        </button>
      </div>
      
      <main>
        <Hero />
        <Leaderboard />
        <TeamSection />
        <RoyalFeatures />
        <RoyalBadges />
        <ProfilePreview />
        <RoyalFAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
