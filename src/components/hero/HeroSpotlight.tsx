
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Crown, Coins, Award, TrendingUp, Gem, Shield, Trophy, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import MedievalFrame from '@/components/ui/medieval-frame';

interface HeroSpotlightProps {
  topSpender: {
    username: string;
    profileImage: string;
    amountSpent: number;
    rank: number;
    team: string;
    spendingStreak: number;
  };
  currentUserAmount: number;
}

const HeroSpotlight: React.FC<HeroSpotlightProps> = ({ topSpender, currentUserAmount }) => {
  const benefitsList = [
    {
      icon: <Crown className="h-5 w-5 text-royal-gold" />,
      title: "Royal Status",
      description: "Attain medieval nobility through the power of your wallet"
    },
    {
      icon: <Gem className="h-5 w-5 text-royal-purple" />,
      title: "Profile Customization",
      description: "Unlock exclusive design elements for your royal profile"
    },
    {
      icon: <Shield className="h-5 w-5 text-royal-navy" />,
      title: "Team Glory",
      description: "Contribute to your house's standing in the royal court"
    },
    {
      icon: <Trophy className="h-5 w-5 text-royal-gold" />,
      title: "Weekly Tournaments",
      description: "Win additional benefits in the weekly crown tournaments"
    }
  ];

  return (
    <div className="mb-16 relative">
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-gradient-radial from-royal-purple/20 to-transparent opacity-80"></div>
      
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2 font-medieval">
          <span className="royal-gradient">Royal Court Spotlight</span>
        </h2>
        <p className="text-white/80 max-w-2xl mx-auto font-medieval-text">
          Behold the current monarch of meaningless digital prestige. Will you challenge their reign with your wealth?
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Top Spender Showcase */}
        <MedievalFrame variant="royal" cornerDecoration borderDecoration seal className="col-span-1 h-full">
          <div className="absolute top-2 left-2">
            <div className="flex items-center gap-1 bg-royal-gold/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs">
              <Crown className="h-3 w-3 text-royal-gold animate-crown-glow" />
              <span className="text-royal-gold font-medieval">Top Spender</span>
            </div>
          </div>
          
          <CardContent className="pt-12 pb-6 flex flex-col items-center">
            <div className="relative mb-4">
              <div className="absolute -inset-1 rounded-full bg-royal-gold/30 animate-pulse-slow"></div>
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-royal-gold">
                <img 
                  src={topSpender.profileImage} 
                  alt={topSpender.username} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-royal-gold rounded-full p-1.5 shadow-lg animate-crown-glow">
                <Crown className="h-5 w-5 text-black" />
              </div>
            </div>
            
            <h3 className="text-xl font-bold royal-gradient font-medieval">{topSpender.username}</h3>
            
            <div className="space-y-2 w-full mt-4">
              <div className="bg-foreground/10 backdrop-blur-md border border-foreground/10 px-3 py-2 rounded-lg flex justify-between items-center hover:border-royal-gold/30 transition-colors duration-300">
                <span className="text-sm text-white/80 flex items-center">
                  <Coins className="h-4 w-4 mr-1.5 text-royal-gold" />
                  Royal Tribute
                </span>
                <span className="font-mono text-royal-gold-bright font-bold">${topSpender.amountSpent.toLocaleString()}</span>
              </div>
              
              <div className="bg-foreground/10 backdrop-blur-md border border-foreground/10 px-3 py-2 rounded-lg flex justify-between items-center hover:border-royal-gold/30 transition-colors duration-300">
                <span className="text-sm text-white/80 flex items-center">
                  <TrendingUp className="h-4 w-4 mr-1.5 text-royal-gold" />
                  Current Rank
                </span>
                <span className="font-mono text-royal-gold-bright font-bold">#{topSpender.rank}</span>
              </div>
              
              <div className="bg-foreground/10 backdrop-blur-md border border-foreground/10 px-3 py-2 rounded-lg flex justify-between items-center hover:border-royal-gold/30 transition-colors duration-300">
                <span className="text-sm text-white/80 flex items-center">
                  <Award className="h-4 w-4 mr-1.5 text-royal-gold" />
                  Spending Streak
                </span>
                <span className="font-mono text-royal-gold-bright font-bold">{topSpender.spendingStreak} weeks</span>
              </div>
            </div>
            
            <div className="mt-6 bg-foreground/5 backdrop-blur-md border border-foreground/10 px-4 py-3 rounded-lg w-full text-center">
              <p className="text-sm text-white/80 italic font-medieval-text">
                "A noble achievement that cost real money for digital prestige."
              </p>
            </div>
          </CardContent>
        </MedievalFrame>
        
        {/* Benefits Section */}
        <MedievalFrame variant="noble" className="col-span-2 h-full">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold royal-gradient mb-5 font-medieval">Royal Benefits</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
              {benefitsList.map((benefit, index) => (
                <div 
                  key={index} 
                  className="bg-foreground/5 backdrop-blur-md border border-foreground/10 p-4 rounded-lg transition-all duration-300 hover:border-royal-gold/30 hover:-translate-y-1 group"
                >
                  <div className="flex items-start">
                    <div className="mr-3 mt-0.5 relative">
                      {benefit.icon}
                      <Sparkles className="h-2.5 w-2.5 absolute -top-1 -right-1 text-royal-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 text-royal-gold font-medieval">{benefit.title}</h4>
                      <p className="text-sm text-white/80 font-medieval-text">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-foreground/5 backdrop-blur-md border border-royal-gold/20 p-4 rounded-lg mb-6 relative overflow-hidden">
              <div className="absolute -right-16 -top-16 w-32 h-32 bg-royal-gold/5 rounded-full blur-2xl"></div>
              <div className="flex items-start">
                <div className="mr-3">
                  <Crown className="h-6 w-6 text-royal-gold animate-crown-glow" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 royal-gradient font-medieval">Your Current Status</h4>
                  <p className="text-white/80 mb-2 font-medieval-text">
                    You've contributed <span className="text-royal-gold font-bold">${currentUserAmount}</span> to your digital prestige.
                  </p>
                  
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden mt-3">
                    <div 
                      className="h-full bg-gradient-to-r from-royal-crimson to-royal-gold" 
                      style={{ width: `${Math.min((currentUserAmount / 1000) * 100, 100)}%` }}
                    ></div>
                  </div>
                  
                  <div className="flex justify-between text-xs text-white/60 mt-1">
                    <span>$0</span>
                    <span>$1,000</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/dashboard" className="flex-1">
                <Button className="w-full bg-gradient-to-r from-royal-purple to-royal-gold hover:opacity-90 text-white royal-button">
                  <Crown className="mr-2 h-4 w-4" />
                  Ascend the Ranks
                </Button>
              </Link>
              
              <Link to="/leaderboard" className="flex-1">
                <Button variant="outline" className="w-full bg-foreground/5 hover:bg-foreground/10 text-white border-white/10 hover:border-royal-gold/30">
                  <Shield className="mr-2 h-4 w-4" />
                  View Full Court
                </Button>
              </Link>
            </div>
          </CardContent>
        </MedievalFrame>
      </div>
    </div>
  );
};

export default HeroSpotlight;
