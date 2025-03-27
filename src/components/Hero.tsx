
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Crown, Coins, Gem, Scroll, Shield, Sparkles, DollarSign } from 'lucide-react';
import ThroneBackground from '@/components/ui/throne-background';
import { useNavigate } from 'react-router-dom';
import { toast } from "@/hooks/use-toast";

const Hero = () => {
  const navigate = useNavigate();
  
  const handleCrownClick = () => {
    toast({
      title: "Royal Decree",
      description: "The crown acknowledges your admiration. Now prove your worth with currency!",
      duration: 3000,
    });
  };
  
  const handleQuickAscension = () => {
    toast({
      title: "Nobility Beckons!",
      description: "Your journey to meaningless digital status begins now!",
      duration: 3000,
    });
    navigate('/dashboard');
  };

  return (
    <section className="w-full min-h-[90vh] pt-32 pb-20 relative overflow-hidden throne-bg">
      <ThroneBackground variant="default" density="high" animate={true} />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-block animate-floating">
            <div className="glass-morphism backdrop-blur-lg border border-white/10 rounded-full py-2 px-4 mb-6">
              <span className="text-sm text-white/70 flex items-center">
                <span className="inline-block w-2 h-2 rounded-full bg-royal-gold mr-2 animate-pulse"></span>
                <span className="royal-gradient font-bold">STATUS FOR SALE</span> — The Court Awaits Your Tribute
              </span>
            </div>
          </div>
          
          <div 
            className="relative mb-8 animate-crown-glow cursor-pointer transition-transform duration-300 hover:scale-110"
            onClick={handleCrownClick}
          >
            <Crown size={100} className="text-royal-gold animate-royal-pulse" />
            <div className="absolute -inset-8 bg-royal-gold/20 blur-xl rounded-full"></div>
            <Sparkles 
              size={24} 
              className="absolute -top-2 -right-2 text-royal-gold animate-royal-pulse" 
              style={{ animationDelay: '0.5s' }} 
            />
            <Sparkles 
              size={24} 
              className="absolute -bottom-2 -left-2 text-royal-gold animate-royal-pulse" 
              style={{ animationDelay: '1s' }} 
            />
          </div>
          
          <h1 className="relative text-6xl md:text-8xl font-royal tracking-tight mb-6 group">
            <span className="block royal-gradient font-black drop-shadow-[0_4px_16px_rgba(255,215,0,0.3)]">
              Buy Your Way
            </span>
            <span className="block royal-gradient font-black drop-shadow-[0_4px_16px_rgba(255,215,0,0.3)]">
              To The Throne
            </span>
            <div className="absolute -inset-x-8 -inset-y-4 bg-royal-gold/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mb-6 font-serif leading-relaxed">
            In the realm of digital nobility, your rank is determined by one thing only:
          </p>
          
          <div className="glass-morphism border-royal-gold/20 rounded-xl px-6 py-4 mb-8 max-w-lg mx-auto">
            <div className="flex items-center justify-center">
              <DollarSign size={30} className="text-royal-gold mr-3 animate-royal-pulse" />
              <span className="text-3xl font-royal royal-gradient">How Much You Spend</span>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mb-12 font-serif leading-relaxed italic">
            "Where the wealthy become royalty and everyone else becomes a statistic."
          </p>
          
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <Button 
              className="bg-gradient-to-r from-royal-purple via-royal-gold to-royal-blue hover:opacity-90 text-white px-8 py-7 text-lg rounded-full w-full sm:w-auto font-royal group relative overflow-hidden animate-royal-pulse"
              onClick={handleQuickAscension}
            >
              <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Coins size={24} className="mr-2" />
              Fund Your Ascension
            </Button>
            
            <Button 
              variant="outline" 
              className="glass-morphism border-white/10 text-white hover:bg-white/10 hover:text-white px-8 py-7 text-lg rounded-full w-full sm:w-auto group"
              onClick={() => navigate('/dashboard')}
            >
              <span className="relative z-10 flex items-center">
                View Royal Court
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mx-auto">
            {[{
              color: 'royal-purple',
              title: 'Rank = Money Spent',
              description: 'One dollar equals one rank point. No skills, talents, or merits considered—just pure, unadulterated wealth.',
              icon: <Crown size={24} className="text-royal-purple" />
            }, {
              color: 'royal-gold',
              title: 'Zero Actual Value',
              description: 'Spend real currency for completely digital, utterly meaningless prestige. The perfect satire of modern status seeking.',
              icon: <Gem size={24} className="text-royal-gold" />
            }, {
              color: 'royal-blue',
              title: 'Perpetual Hierarchy',
              description: 'The leaderboard never resets. Your financial contributions to this bizarre experiment are eternally recorded.',
              icon: <Shield size={24} className="text-royal-blue" />
            }].map((feature, index) => (
              <div 
                key={index} 
                className="royal-card rounded-2xl p-6 transition-all duration-300 hover:translate-y-[-5px]"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-${feature.color}/10 text-${feature.color} border border-${feature.color}/30`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-royal mb-2">{feature.title}</h3>
                <p className="text-white/70 font-serif">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-xs text-white/50 italic max-w-md mx-auto">
              * By participating, you acknowledge that you're spending real money for fake status in a satirical experiment about the absurdity of wealth-based hierarchies. And we think that's hilarious.
            </p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
