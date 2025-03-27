
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Crown, Coins, Gem, Scroll, Shield, Sparkles, DollarSign } from 'lucide-react';
import ThroneBackground from '@/components/ui/throne-background';
import { useNavigate } from 'react-router-dom';
import { toast } from "@/hooks/use-toast";

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

  return (
    <section ref={heroRef} className="w-full min-h-[90vh] pt-32 pb-20 relative overflow-hidden throne-bg">
      <ThroneBackground variant="default" density="high" animate={true} particles={true} />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-block animate-bounce-subtle">
            <div className="glass-morphism backdrop-blur-xl border border-white/10 rounded-full py-2 px-6 mb-6">
              <span className="text-sm text-white/80 flex items-center">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-royal-gold mr-2 animate-pulse"></span>
                <span className="royal-gradient font-bold tracking-wide">STATUS FOR SALE</span> — The Court Awaits Your Tribute
              </span>
            </div>
          </div>
          
          <div 
            className="relative mb-10 animate-crown-glow cursor-pointer transition-transform duration-500 hover:scale-125"
            onClick={handleCrownClick}
          >
            <div className="absolute -inset-10 bg-royal-gold/10 blur-xl rounded-full"></div>
            <Crown size={120} className="text-royal-gold animate-royal-pulse" />
            <Sparkles 
              size={30} 
              className="absolute -top-4 -right-4 text-royal-gold animate-sparkle" 
              style={{ animationDelay: '0.5s' }} 
            />
            <Sparkles 
              size={30} 
              className="absolute -bottom-4 -left-4 text-royal-gold animate-sparkle" 
              style={{ animationDelay: '1s' }} 
            />
            <Sparkles 
              size={20} 
              className="absolute top-1/4 -left-8 text-royal-gold animate-sparkle" 
              style={{ animationDelay: '1.5s' }} 
            />
            <Sparkles 
              size={20} 
              className="absolute bottom-1/4 -right-8 text-royal-gold animate-sparkle" 
              style={{ animationDelay: '2s' }} 
            />
          </div>
          
          <h1 className="relative text-6xl md:text-8xl font-royal tracking-tight mb-6 group">
            <span className="block royal-gradient font-black drop-shadow-[0_4px_20px_rgba(255,215,0,0.4)]">
              Buy Your Way
            </span>
            <span className="block royal-gradient font-black drop-shadow-[0_4px_20px_rgba(255,215,0,0.4)]">
              To The Throne
            </span>
            <div className="absolute -inset-x-8 -inset-y-4 bg-royal-gold/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mb-8 font-serif leading-relaxed">
            In the realm of digital nobility, your rank is determined by one thing only:
          </p>
          
          <div className="glass-morphism border-royal-gold/30 rounded-xl px-8 py-5 mb-10 max-w-lg mx-auto royal-shine">
            <div className="flex items-center justify-center">
              <DollarSign size={36} className="text-royal-gold mr-4 animate-royal-pulse" />
              <span className="text-3xl font-royal royal-gradient">How Much You Spend</span>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mb-16 font-serif leading-relaxed italic">
            "Where the wealthy become royalty and everyone else becomes a statistic."
          </p>
          
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-20">
            <Button 
              className="royal-button bg-gradient-royal hover:opacity-90 text-white px-10 py-7 text-lg rounded-full w-full sm:w-auto font-royal group relative overflow-hidden animate-pulse-slow"
              onClick={handleQuickAscension}
            >
              <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex items-center">
                <Coins size={24} className="mr-3" />
                Fund Your Ascension
              </div>
            </Button>
            
            <Button 
              variant="outline" 
              className="glass-morphism border-white/20 text-white hover:bg-white/10 hover:text-white px-10 py-7 text-lg rounded-full w-full sm:w-auto group royal-button"
              onClick={() => navigate('/dashboard')}
            >
              <span className="relative z-10 flex items-center">
                View Royal Court
                <ArrowRight size={20} className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mx-auto">
            {[{
              color: 'royal-purple',
              title: 'Rank = Money Spent',
              description: 'One dollar equals one rank point. No skills, talents, or merits considered—just pure, unadulterated wealth.',
              icon: <Crown size={28} className="text-royal-purple" />
            }, {
              color: 'royal-gold',
              title: 'Zero Actual Value',
              description: 'Spend real currency for completely digital, utterly meaningless prestige. The perfect satire of modern status seeking.',
              icon: <Gem size={28} className="text-royal-gold" />
            }, {
              color: 'royal-blue',
              title: 'Perpetual Hierarchy',
              description: 'The leaderboard never resets. Your financial contributions to this bizarre experiment are eternally recorded.',
              icon: <Shield size={28} className="text-royal-blue" />
            }].map((feature, index) => (
              <div 
                key={index} 
                className="royal-card rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:border-royal-gold/30 group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-5 bg-${feature.color}/20 border border-${feature.color}/30 group-hover:ring-2 group-hover:ring-${feature.color}/20 transition-all duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-royal mb-3">{feature.title}</h3>
                <p className="text-white/80 font-serif">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <p className="text-xs text-white/60 italic max-w-md mx-auto">
              * By participating, you acknowledge that you're spending real money for fake status in a satirical experiment about the absurdity of wealth-based hierarchies. And we think that's hilarious.
            </p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
