
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Crown, Trophy, ArrowRight, DollarSign, Scroll, Globe, Shield, Gift, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import useNotificationSounds from '@/hooks/use-notification-sounds';

interface SpotlightBenefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface HeroSpotlightProps {
  topSpender: {
    username: string;
    profileImage?: string;
    amountSpent: number;
    rank: number;
    team: string | null;
    spendingStreak: number;
  };
  currentUserAmount?: number;
}

const HeroSpotlight: React.FC<HeroSpotlightProps> = ({ 
  topSpender, 
  currentUserAmount = 0 
}) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { playSound } = useNotificationSounds();
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Calculate how much more is needed to beat the top spender
  const amountNeeded = topSpender.amountSpent - currentUserAmount + 1;
  
  const handleQuickAscension = () => {
    playSound('reward', 0.3);
    toast({
      title: "Nobility Beckons!",
      description: "Your journey to meaningless digital status begins now!",
      duration: 3000,
    });
    navigate('/dashboard');
  };

  // Enhanced benefits of being the top spender
  const benefits: SpotlightBenefit[] = [
    {
      icon: <Crown size={20} className="text-royal-gold" />,
      title: "Royal Recognition",
      description: "Your profile crowned and featured across the kingdom"
    },
    {
      icon: <Shield size={20} className="text-royal-gold" />,
      title: "Noble Privileges",
      description: "Exclusive access to royal customization options"
    },
    {
      icon: <Globe size={20} className="text-royal-gold" />,
      title: "Kingdom Influence",
      description: "Drive subjects to your external domains"
    },
    {
      icon: <Gift size={20} className="text-royal-gold" />,
      title: "Royal Treasury",
      description: "First access to special events and rewards"
    }
  ];
  
  // Preload the background image
  useEffect(() => {
    const img = new Image();
    img.src = "https://source.unsplash.com/random/?medieval,throne,castle,royal";
    img.onload = () => setImageLoaded(true);
  }, []);
  
  return (
    <div className="royal-card-enhanced mb-16 p-0 relative overflow-hidden animate-parchment-unfurl">
      {/* Enhanced background with better image selection and effects */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className={`transition-opacity duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ 
              backgroundImage: `url(https://source.unsplash.com/random/?medieval,throne,castle,royal)`,
              filter: 'brightness(0.35) contrast(1.1)'
            }}
          ></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-royal-navy/90 via-transparent to-royal-crimson/90"></div>
      </div>
      
      {/* Ornamental corners - more detailed */}
      <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-royal-gold/40 rounded-tl-sm pointer-events-none z-10"></div>
      <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-royal-gold/40 rounded-tr-sm pointer-events-none z-10"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-royal-gold/40 rounded-bl-sm pointer-events-none z-10"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-royal-gold/40 rounded-br-sm pointer-events-none z-10"></div>
      
      <div className="relative z-10 p-10">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/3 text-center">
            <div className="relative inline-block animate-royal-pulse">
              <div className="absolute -inset-3 bg-royal-gold/30 rounded-full blur-md"></div>
              <div className="w-36 h-36 rounded-full bg-royal-gold/20 border-4 border-royal-gold/60 flex items-center justify-center overflow-hidden">
                <img 
                  src={topSpender.profileImage || "https://source.unsplash.com/random/?royal,portrait,medieval"}
                  alt={topSpender.username}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Crown decoration with animation */}
              <div className="absolute -top-4 -right-2 bg-royal-gold rounded-full p-2 animate-crown-glow">
                <Crown size={24} className="text-background" />
              </div>
              {/* Sparkle effects */}
              <Sparkles size={16} className="absolute top-3 -left-2 text-royal-gold animate-sparkle" />
              <Sparkles size={12} className="absolute bottom-5 -right-3 text-royal-gold animate-sparkle" style={{ animationDelay: '0.5s' }} />
            </div>
            <h3 className="mt-4 font-medieval text-2xl text-foreground">Lord {topSpender.username}</h3>
            <p className="text-foreground/70 text-sm">Sovereign Ruler #{topSpender.rank}</p>
            <p className="text-royal-gold font-bold mt-1 text-xl">${topSpender.amountSpent.toLocaleString()} spent</p>
            
            <div className="mt-3 inline-flex items-center px-3 py-1 rounded-full bg-royal-gold/20 border border-royal-gold/40">
              <Trophy size={14} className="text-royal-gold mr-2" />
              <span className="text-sm">{topSpender.spendingStreak} week spending streak</span>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <h2 className="text-2xl md:text-3xl font-bold royal-gradient mb-4 font-medieval">
              The Current Sovereign of Our Digital Realm
            </h2>
            <p className="text-foreground/70 mb-6 leading-relaxed">
              Through sheer financial conquest, Lord {topSpender.username} has claimed the throne of our hierarchy. 
              Will you be the one to challenge this ruler's reign? In this kingdom, power isn't earned through 
              trivial matters like "merit" or "talent" — it is purchased with cold, hard currency.
            </p>
            
            <div className="mb-6 p-5 border-2 border-royal-gold/30 rounded-lg bg-royal-gold/5 backdrop-blur-sm italic royal-corner-ornament">
              <div className="flex items-start">
                <div className="mr-3 mt-1">
                  <Scroll size={20} className="text-royal-gold" />
                </div>
                <p className="font-medieval text-white/90 leading-relaxed">
                  "I, Lord {topSpender.username}, proclaim my digital dominance through the most noble virtue: excessive spending. 
                  My wealth defines my worth. My expenditure, my excellence. Challenge me if you dare, but know that only your 
                  treasury—not your character—shall determine your place in this glorious digital kingdom."
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-start p-3 backdrop-blur-sm bg-background/10 rounded-md border border-royal-gold/20 hover:border-royal-gold/40 transition-all duration-300"
                >
                  <div className="mr-3 mt-1">{benefit.icon}</div>
                  <div>
                    <h4 className="text-sm font-bold text-royal-gold">{benefit.title}</h4>
                    <p className="text-xs text-foreground/80">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-5">
              <Button
                className="royal-button-enhanced bg-gradient-to-r from-royal-crimson via-royal-gold to-royal-navy hover:opacity-90 text-white px-6 py-3 text-lg rounded-full font-medieval"
                onClick={handleQuickAscension}
              >
                <div className="relative z-10 flex items-center">
                  <Crown size={20} className="mr-2 animate-crown-glow" />
                  Challenge for the Throne
                </div>
              </Button>
              
              <Button
                variant="outline"
                className="glass-morphism border-white/30 text-foreground hover:bg-foreground/10 hover:text-foreground px-6 py-3 text-lg rounded-full royal-button"
                onClick={() => navigate('/leaderboard')}
              >
                <span className="relative z-10 flex items-center">
                  View Royal Court
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Button>
            </div>
            
            <div className="mt-6 bg-background/50 rounded-lg p-4 backdrop-blur-md border border-foreground/20">
              <div className="text-sm text-foreground/60 mb-1 font-medieval">Royal Overthrow Calculator:</div>
              <div className="flex items-center">
                <DollarSign size={16} className="text-royal-gold mr-2" />
                <span className="text-foreground/90 text-base">You need <span className="text-royal-gold font-bold text-lg">${amountNeeded.toLocaleString()}</span> to claim the throne</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSpotlight;
