
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import useNotificationSounds from '@/hooks/use-notification-sounds';
import { useHeroVisibility } from '@/hooks/use-hero-visibility';
import HeroContent from '@/components/ui/hero/HeroContent';
import HeroSoundToggle from '@/components/ui/hero/HeroSoundToggle';
import { Button } from './ui/button';
import { ArrowRight, Crown, Sparkles } from 'lucide-react';

const RoyalHero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { isMuted, toggleMute, playSound } = useNotificationSounds();
  const isVisible = useHeroVisibility(heroRef);
  const navigate = useNavigate();
  
  const handleAscend = () => {
    playSound('reward', 0.3);
    navigate('/dashboard');
  };
  
  return (
    <section 
      ref={heroRef} 
      className="w-full min-h-[80vh] pt-20 pb-12 relative overflow-hidden bg-gradient-to-b from-[#0D0D20] via-[#141428] to-[#141428]"
    >
      <HeroSoundToggle isMuted={isMuted} toggleMute={toggleMute} />
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.05)_0,transparent_70%)]"></div>
        
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-royal-gold/30 animate-float"
            style={{
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 5}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-2 inline-flex items-center rounded-full bg-royal-gold/10 px-3 py-1 text-sm font-medium text-royal-gold">
            <Crown size={14} className="mr-1" />
            <span>BETA</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-medieval mb-4 tracking-tight">
            <span className="royal-gradient">SpendThrone</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 font-medieval-text mb-6">
            Where digital nobility is purely cosmetic, and wealth buys status, not power.
          </p>
          
          <p className="italic text-white/60 mb-10 max-w-md mx-auto">
            "Every dollar spent is a step up the royal ladder, with no actual advantages."
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleAscend}
              size="lg"
              className="bg-royal-gold hover:bg-royal-gold/90 text-black font-medieval font-semibold text-lg px-8 royal-button"
            >
              <Crown className="mr-2 h-5 w-5" />
              Ascend Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-royal-gold/30 text-white hover:bg-royal-gold/10 font-medieval font-semibold text-lg px-8"
              onClick={() => navigate('/leaderboard')}
            >
              <Sparkles className="mr-2 h-5 w-5 text-royal-gold" />
              View Rankings
            </Button>
          </div>
        </div>
        
        {/* Stats banner */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="bg-black/30 border border-royal-gold/10 rounded-lg p-4 text-center">
            <p className="text-royal-gold text-2xl md:text-3xl font-bold">23,560</p>
            <p className="text-white/60 text-sm">Total Spent</p>
          </div>
          <div className="bg-black/30 border border-royal-gold/10 rounded-lg p-4 text-center">
            <p className="text-royal-gold text-2xl md:text-3xl font-bold">412</p>
            <p className="text-white/60 text-sm">Nobles</p>
          </div>
          <div className="bg-black/30 border border-royal-gold/10 rounded-lg p-4 text-center">
            <p className="text-royal-gold text-2xl md:text-3xl font-bold">$5,240</p>
            <p className="text-white/60 text-sm">Weekly Pool</p>
          </div>
          <div className="bg-black/30 border border-royal-gold/10 rounded-lg p-4 text-center">
            <p className="text-royal-gold text-2xl md:text-3xl font-bold">7</p>
            <p className="text-white/60 text-sm">Days to Crown</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoyalHero;
