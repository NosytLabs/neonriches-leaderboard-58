
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Crown, Coins, Gem, Shield, DollarSign } from 'lucide-react';
import ThroneBackground from '@/components/ui/throne-background';
import { useToast } from "@/hooks/use-toast";
import useNotificationSounds from '@/hooks/use-notification-sounds';
import HeroTitle from '@/components/ui/hero/HeroTitle';
import HeroSubtitle from '@/components/ui/hero/HeroSubtitle';
import HeroQuote from '@/components/ui/hero/HeroQuote';
import HeroActionButtons from '@/components/ui/hero/HeroActionButtons';
import HeroCrown from '@/components/ui/hero/HeroCrown';
import HeroStatusTag from '@/components/ui/hero/HeroStatusTag';
import HeroValueDisplay from '@/components/ui/hero/HeroValueDisplay';
import HeroFeatureSection from '@/components/ui/hero/HeroFeatureSection';
import HeroFooter from '@/components/ui/hero/HeroFooter';

const RoyalHero = () => {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLElement>(null);
  const { toast } = useToast();
  const { playSound } = useNotificationSounds();
  const [isVisible, setIsVisible] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  
  useEffect(() => {
    if (!heroRef.current) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    observer.observe(heroRef.current);
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);
  
  const handleCrownClick = () => {
    setHasInteracted(true);
    playSound('royalAnnouncement', 0.2);
    toast({
      title: "Royal Decree",
      description: "The crown acknowledges your admiration. Now prove your worth with currency!",
      duration: 3000,
    });
    
    if (heroRef.current) {
      const sparkleContainer = document.createElement('div');
      sparkleContainer.className = 'absolute w-full h-full top-0 left-0 pointer-events-none';
      
      for (let i = 0; i < 10; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute rounded-full bg-royal-gold animate-float';
        particle.style.width = `${Math.random() * 10 + 5}px`;
        particle.style.height = particle.style.width;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `50%`;
        particle.style.opacity = '0.8';
        sparkleContainer.appendChild(particle);
      }
      
      heroRef.current.appendChild(sparkleContainer);
      
      setTimeout(() => {
        sparkleContainer.remove();
      }, 5000);
    }
  };
  
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

  useEffect(() => {
    if (!heroRef.current || !isVisible) return;
    
    const interval = setInterval(() => {
      if (heroRef.current && Math.random() > 0.8) {
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
        coin.style.willChange = 'transform, opacity';
        
        heroRef.current.appendChild(coin);
        
        setTimeout(() => {
          if (coin.parentNode) {
            coin.remove();
          }
        }, 8000);
      }
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isVisible]);

  const features = [
    {
      color: 'royal-crimson',
      title: 'Wealth Equals Status',
      description: 'One dollar equals one rank point. No skills, talents, or merits considered—just pure, unadulterated wealth.',
      icon: <Crown size={28} className="text-royal-crimson" />
    }, 
    {
      color: 'royal-gold',
      title: 'Digital Prestige',
      description: 'Spend real currency for completely digital, utterly meaningless prestige. The perfect satire of modern status seeking.',
      icon: <Gem size={28} className="text-royal-gold" />
    }, 
    {
      color: 'royal-navy',
      title: 'Eternal Rankings',
      description: 'The leaderboard never resets. Your financial contributions to this absurd hierarchy are eternally recorded.',
      icon: <Shield size={28} className="text-royal-navy" />
    }
  ];

  return (
    <section ref={heroRef} className="w-full min-h-[90vh] pt-32 pb-20 relative overflow-hidden bg-gradient-to-b from-[#0D0D20] via-[#141428] to-background">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-royal-crimson/10 filter blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-royal-gold/10 filter blur-[120px]"></div>
        <div className="absolute top-2/3 left-2/3 w-72 h-72 rounded-full bg-royal-navy/10 filter blur-[80px]"></div>
      </div>
      
      <ThroneBackground variant="default" density="low" animate={isVisible} particles={isVisible} />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <HeroStatusTag>
            <span className="text-sm text-white/80 flex items-center">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-royal-gold mr-2 animate-pulse"></span>
              <span className="font-bold tracking-wide text-royal-gold">NOBILITY FOR SALE</span> — The Throne Awaits Your Tribute
            </span>
          </HeroStatusTag>
          
          <HeroCrown onClick={handleCrownClick} />
          
          <HeroTitle>
            <span className="block text-royal-gold drop-shadow-[0_4px_20px_rgba(255,215,0,0.4)]">
              Purchase Your
            </span>
            <span className="block text-royal-gold drop-shadow-[0_4px_20px_rgba(255,215,0,0.4)]">
              Place in Nobility
            </span>
          </HeroTitle>
          
          <HeroSubtitle text="In our digital kingdom, your rank is determined by one factor alone:" />
          
          <HeroValueDisplay>The Size of Your Tribute</HeroValueDisplay>
          
          <HeroQuote text="&quot;Where the wealthy become nobility and everyone else becomes inconsequential.&quot;" />
          
          <HeroActionButtons 
            primaryText="Secure Your Nobility"
            secondaryText="View The Royal Court"
            onPrimaryClick={handleQuickAscension}
            secondaryLink="/leaderboard"
          />
          
          <HeroFeatureSection features={features} />
          
          <HeroFooter text="* By participating, you acknowledge that you're spending real money for fake status in a satirical experiment about the absurdity of wealth-based hierarchies. And we think that's hilarious." />
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default RoyalHero;
