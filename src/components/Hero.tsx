
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Crown, Coins, Gem, Scroll, Shield } from 'lucide-react';
import ThroneBackground from '@/components/ui/throne-background';

const Hero = () => {
  return (
    <section className="w-full min-h-[90vh] pt-32 pb-20 relative overflow-hidden throne-bg">
      <ThroneBackground variant="default" density="high" animate={true} />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-block animate-float">
            <div className="glass-morphism backdrop-blur-lg border border-white/10 rounded-full py-2 px-4 mb-6">
              <span className="text-sm text-white/70 flex items-center">
                <span className="inline-block w-2 h-2 rounded-full bg-royal-gold mr-2 animate-pulse"></span>
                The Royal Court is now in session — Claim your rightful place
              </span>
            </div>
          </div>
          
          <div className="relative mb-4 animate-crown-glow">
            <Crown size={80} className="text-royal-gold animate-royal-pulse" />
            <div className="absolute -inset-4 bg-royal-gold/20 blur-xl rounded-full"></div>
          </div>
          
          <h1 className="relative text-6xl md:text-8xl font-royal tracking-tight mb-8 group">
            <span className="block royal-gradient font-black drop-shadow-[0_4px_16px_rgba(255,215,0,0.3)]">
              Ascend
            </span>
            <span className="block royal-gradient font-black drop-shadow-[0_4px_16px_rgba(255,215,0,0.3)]">
              the Throne
            </span>
            <div className="absolute -inset-x-8 -inset-y-4 bg-royal-gold/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mb-12 font-serif leading-relaxed">
            In the realm of digital nobility, your rank is determined by your contributions to the crown. 
            Spend more to ascend the royal hierarchy and claim your rightful place upon the throne.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <Button className="bg-gradient-to-r from-royal-purple via-royal-gold to-royal-blue hover:opacity-90 text-white px-8 py-7 text-lg rounded-full w-full sm:w-auto font-royal group relative overflow-hidden">
              <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Coins size={24} className="mr-2" />
              Fund Your Ascension
            </Button>
            
            <Button variant="outline" className="glass-morphism border-white/10 text-white hover:bg-white/10 hover:text-white px-8 py-7 text-lg rounded-full w-full sm:w-auto group">
              <span className="relative z-10 flex items-center">
                View Royal Court
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mx-auto">
            {[{
              color: 'royal-purple',
              title: 'Eternal Hierarchy',
              description: 'The Royal Court never dissolves. Your contributions to the crown secure your permanent position in the royal lineage.',
              icon: <Crown size={24} className="text-royal-purple" />
            }, {
              color: 'royal-gold',
              title: 'Noble Transparency',
              description: 'One gold coin equals one royal rank point. No hidden algorithms—just the honest power of wealth and patronage.',
              icon: <Gem size={24} className="text-royal-gold" />
            }, {
              color: 'royal-blue',
              title: 'Choose Your Dynasty',
              description: 'Pledge your allegiance to the Purple Dynasty, Gold Dominion, or Azure Order and compete for dynastic supremacy.',
              icon: <Shield size={24} className="text-royal-blue" />
            }].map((feature, index) => (
              <div key={index} className="royal-card rounded-2xl p-6 transition-all duration-300 hover:translate-y-[-5px]">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-${feature.color}/10 text-${feature.color} border border-${feature.color}/30`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-royal mb-2">{feature.title}</h3>
                <p className="text-white/70 font-serif">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
