
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Crown, Trophy, ArrowRight, DollarSign, Scroll } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import useNotificationSounds from '@/hooks/use-notification-sounds';

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
  
  const handleQuickAscension = () => {
    playSound('reward', 0.3);
    toast({
      title: "Nobility Beckons!",
      description: "Your journey to meaningless digital status begins now!",
      duration: 3000,
    });
    navigate('/dashboard');
  };
  
  // Calculate how much more is needed to beat the top spender
  const amountNeeded = topSpender.amountSpent - currentUserAmount + 1;
  
  return (
    <div className="royal-card-enhanced animate-parchment-unfurl mb-16 p-8 relative overflow-hidden">
      <div className="absolute -top-20 -right-20 opacity-10">
        <Crown size={240} className="text-royal-gold" />
      </div>
      
      {/* Medieval ornamental corners */}
      <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-royal-gold/30 rounded-tl-sm pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-royal-gold/30 rounded-tr-sm pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-royal-gold/30 rounded-bl-sm pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-royal-gold/30 rounded-br-sm pointer-events-none"></div>
      
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/3 text-center">
          <div className="relative inline-block animate-royal-pulse">
            <div className="absolute -inset-2 bg-royal-gold/20 rounded-full blur-md"></div>
            <div className="w-32 h-32 rounded-full bg-royal-gold/20 border-2 border-royal-gold flex items-center justify-center overflow-hidden">
              <img 
                src={topSpender.profileImage || "https://source.unsplash.com/random/?royal,portrait"} 
                alt={topSpender.username}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -top-2 -right-2 bg-royal-gold rounded-full p-1 animate-crown-glow">
              <Crown size={20} className="text-background" />
            </div>
          </div>
          <h3 className="mt-3 font-medieval text-xl text-foreground">Lord {topSpender.username}</h3>
          <p className="text-foreground/70 text-sm">Royal Rank #{topSpender.rank}</p>
          <p className="text-royal-gold font-bold mt-1">${topSpender.amountSpent.toLocaleString()} spent</p>
          
          <div className="mt-2 inline-flex items-center px-2 py-1 rounded-full bg-royal-gold/10 border border-royal-gold/20">
            <Trophy size={12} className="text-royal-gold mr-1" />
            <span className="text-xs">{topSpender.spendingStreak} week spending streak</span>
          </div>
        </div>
        
        <div className="md:w-2/3">
          <h2 className="text-2xl md:text-3xl font-bold royal-gradient mb-4 font-medieval">
            The Current Ruler of Our Digital Realm
          </h2>
          <p className="text-foreground/70 mb-6">
            Through sheer financial might, Lord {topSpender.username} has claimed the highest position in our hierarchy. 
            Will you be the one to dethrone the current ruler? Remember, in this kingdom, power is purchased, 
            not earned through trivial matters like "merit" or "talent."
          </p>
          
          <div className="mb-6 p-4 border border-royal-gold/20 rounded-lg bg-royal-gold/5 italic text-sm">
            <div className="flex items-start">
              <div className="mr-2 mt-1">
                <Scroll size={16} className="text-royal-gold" />
              </div>
              <p>
                "I, Lord {topSpender.username}, declare my digital dominance through the most noble virtue of all: excessive spending. 
                My wealth is my worth. My expenditure, my excellence. Challenge me if you dare, but know that only your 
                currency—not your character—will determine your place in this glorious digital kingdom."
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button
              className="royal-button bg-gradient-to-r from-royal-crimson via-royal-gold to-royal-navy hover:opacity-90 text-white px-6 py-2 text-lg rounded-full font-medieval"
              onClick={handleQuickAscension}
            >
              <div className="relative z-10 flex items-center">
                <Crown size={18} className="mr-2" />
                Challenge for the Throne
              </div>
            </Button>
            
            <Button
              variant="outline"
              className="glass-morphism border-white/20 text-foreground hover:bg-foreground/10 hover:text-foreground px-6 py-2 text-lg rounded-full royal-button"
              onClick={() => navigate('/leaderboard')}
            >
              <span className="relative z-10 flex items-center">
                View Royal Court
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Button>
          </div>
          
          <div className="mt-6 bg-background/40 rounded-lg p-3 backdrop-blur-sm border border-foreground/10">
            <div className="text-xs text-foreground/60 mb-1">Overthrow Calculator:</div>
            <div className="flex items-center">
              <DollarSign size={14} className="text-royal-gold" />
              <span className="text-foreground/80 text-sm">You need <span className="text-royal-gold font-bold">${amountNeeded.toLocaleString()}</span> to claim the throne</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSpotlight;
