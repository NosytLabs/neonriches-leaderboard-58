
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Crown, Coins, Gem, Shield, DollarSign } from 'lucide-react';
import ThroneBackground from '@/components/ui/throne-background';
import { toast } from "@/hooks/use-toast";
import HeroTitle from '@/components/ui/hero/HeroTitle';
import HeroSubtitle from '@/components/ui/hero/HeroSubtitle';
import HeroQuote from '@/components/ui/hero/HeroQuote';
import HeroActionButtons from '@/components/ui/hero/HeroActionButtons';
import HeroCrown from '@/components/ui/hero/HeroCrown';
import HeroStatusTag from '@/components/ui/hero/HeroStatusTag';
import HeroValueDisplay from '@/components/ui/hero/HeroValueDisplay';
import HeroFeatureSection from '@/components/ui/hero/HeroFeatureSection';
import HeroFooter from '@/components/ui/hero/HeroFooter';

const Hero = () => {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLElement>(null);
  
  const handleCrownClick = () => {
    toast({
      title: "Royal Decree",
      description: "The crown acknowledges your admiration. Now prove your worth with currency!",
      duration: 3000,
    });
    
    // Add sparkle effect on click
    if (heroRef.current) {
      const sparkle = document.createElement('div');
      sparkle.className = 'absolute w-full h-full top-0 left-0 pointer-events-none';
      
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute rounded-full bg-royal-gold animate-float';
        particle.style.width = `${Math.random() * 10 + 5}px`;
        particle.style.height = particle.style.width;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `50%`;
        particle.style.opacity = '0.8';
        sparkle.appendChild(particle);
      }
      
      heroRef.current.appendChild(sparkle);
      
      setTimeout(() => {
        sparkle.remove();
      }, 5000);
    }
  };
  
  const handleQuickAscension = () => {
    toast({
      title: "Nobility Beckons!",
      description: "Your journey to meaningless digital status begins now!",
      duration: 3000,
    });
    navigate('/dashboard');
  };

  // Add subtle floating coins effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (heroRef.current && Math.random() > 0.7) {
        const coin = document.createElement('div');
        coin.className = 'absolute';
        coin.innerHTML = `<div class="flex items-center justify-center w-8 h-8 rounded-full bg-royal-gold/20">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-royal-gold">
            <circle cx="12" cy="12" r="10"/>
            <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/>
            <path d="M12 18V6"/>
          </svg>
        </div>`;
        
        coin.style.left = `${Math.random() * 80 + 10}%`;
        coin.style.top = `${Math.random() * 80 + 10}%`;
        coin.style.animation = 'float 8s ease-in forwards';
        
        heroRef.current.appendChild(coin);
        
        setTimeout(() => {
          coin.remove();
        }, 8000);
      }
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      color: 'royal-purple',
      title: 'Rank = Money Spent',
      description: 'One dollar equals one rank point. No skills, talents, or merits considered—just pure, unadulterated wealth.',
      icon: <Crown size={28} className="text-royal-purple" />
    }, 
    {
      color: 'royal-gold',
      title: 'Zero Actual Value',
      description: 'Spend real currency for completely digital, utterly meaningless prestige. The perfect satire of modern status seeking.',
      icon: <Gem size={28} className="text-royal-gold" />
    }, 
    {
      color: 'royal-blue',
      title: 'Perpetual Hierarchy',
      description: 'The leaderboard never resets. Your financial contributions to this bizarre experiment are eternally recorded.',
      icon: <Shield size={28} className="text-royal-blue" />
    }
  ];

  return (
    <section ref={heroRef} className="w-full min-h-[90vh] pt-32 pb-20 relative overflow-hidden throne-bg">
      <ThroneBackground variant="default" density="high" animate={true} particles={true} />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <HeroStatusTag>
            <span className="text-sm text-white/80 flex items-center">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-royal-gold mr-2 animate-pulse"></span>
              <span className="royal-gradient font-bold tracking-wide">STATUS FOR SALE</span> — The Court Awaits Your Tribute
            </span>
          </HeroStatusTag>
          
          <HeroCrown onClick={handleCrownClick} />
          
          <HeroTitle>
            <span className="block royal-gradient font-black drop-shadow-[0_4px_20px_rgba(255,215,0,0.4)]">
              Buy Your Way
            </span>
            <span className="block royal-gradient font-black drop-shadow-[0_4px_20px_rgba(255,215,0,0.4)]">
              To The Throne
            </span>
          </HeroTitle>
          
          <HeroSubtitle text="In the realm of digital nobility, your rank is determined by one thing only:" />
          
          <HeroValueDisplay>How Much You Spend</HeroValueDisplay>
          
          <HeroQuote text="&quot;Where the wealthy become royalty and everyone else becomes a statistic.&quot;" />
          
          <HeroActionButtons 
            primaryText="Fund Your Ascension"
            secondaryText="View Royal Court"
            onPrimaryClick={handleQuickAscension}
            secondaryLink="/dashboard"
          />
          
          <HeroFeatureSection features={features} />
          
          <HeroFooter text="* By participating, you acknowledge that you're spending real money for fake status in a satirical experiment about the absurdity of wealth-based hierarchies. And we think that's hilarious." />
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
