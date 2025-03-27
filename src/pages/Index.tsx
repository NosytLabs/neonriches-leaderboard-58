
import React, { useEffect, useState, useRef } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Leaderboard from '@/components/Leaderboard';
import TeamSection from '@/components/TeamSection';
import RoyalFeatures from '@/components/RoyalFeatures';
import ProfilePreview from '@/components/ProfilePreview';
import RoyalBadges from '@/components/RoyalBadges';
import RoyalFAQ from '@/components/RoyalFAQ';
import Footer from '@/components/Footer';
import { Sparkles } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import ThroneBackground from '@/components/ui/throne-background';

const Index = () => {
  const [showWelcomeToast, setShowWelcomeToast] = useState(true);
  const coinEffectsRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLElement[]>([]);
  
  // Add smooth entrance animation for page elements
  useEffect(() => {
    try {
      const sections = document.querySelectorAll('section');
      
      if (typeof IntersectionObserver !== 'undefined' && sections.length > 0) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting && entry.target instanceof HTMLElement) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.1 }
        );

        sections.forEach((section) => {
          if (section instanceof HTMLElement) {
            sectionsRef.current.push(section);
            observer.observe(section);
          }
        });

        return () => {
          observer.disconnect();
        };
      }
    } catch (error) {
      console.error('Error setting up IntersectionObserver:', error);
    }
  }, []);

  // Show welcome toast
  useEffect(() => {
    if (showWelcomeToast) {
      const timer = setTimeout(() => {
        toast({
          title: "Royal Decree",
          description: "Welcome to SpendThrone, where your worth is measured in dollars, not deeds!",
          duration: 5000,
        });
        setShowWelcomeToast(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [showWelcomeToast]);

  // Easter egg - random gold coin animations
  useEffect(() => {
    const coinContainer = coinEffectsRef.current;
    if (!coinContainer) return;

    const interval = setInterval(() => {
      try {
        const shouldShowCoin = Math.random() > 0.7;
        
        if (shouldShowCoin) {
          const coin = document.createElement('div');
          coin.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-coins"><circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18"/><path d="M7 6h1v4"/><path d="m16.71 13.88.7.71-2.82 2.82"/></svg>';
          coin.className = 'absolute z-50 text-royal-gold animate-float';
          coin.style.top = `${Math.random() * 100}vh`;
          coin.style.left = `${Math.random() * 100}vw`;
          coin.style.animationDuration = `${3 + Math.random() * 4}s`;
          coin.style.opacity = '0.7';
          
          coinContainer.appendChild(coin);
          
          setTimeout(() => {
            if (coin.parentNode === coinContainer) {
              coinContainer.removeChild(coin);
            }
          }, 5000);
        }
      } catch (error) {
        console.error('Error creating coin animation:', error);
      }
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <ThroneBackground variant="default" density="medium" animate={true} />
      <Header />
      
      <main className="mt-20 pt-4">
        <Hero />
        <Leaderboard />
        <TeamSection />
        <RoyalFeatures />
        <RoyalBadges />
        <ProfilePreview />
        <RoyalFAQ />
      </main>
      
      {/* Container for coin effects */}
      <div ref={coinEffectsRef} className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true"></div>
      
      <Footer />
    </div>
  );
};

export default Index;
