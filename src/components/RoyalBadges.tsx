
import React from 'react';
import { Crown, Award, Shield, Gem, Trophy, Swords } from 'lucide-react';
import RoyalDivider from '@/components/ui/royal-divider';

const badges = [
  {
    name: "Crab's Riches",
    tier: "Crab Tier",
    icon: <Shield size={32} className="text-royal-purple" />,
    amount: "$0 - $50",
    description: "The first step into nobility. A modest tribute to the crown.",
    color: "royal-purple",
    glow: false
  },
  {
    name: "Kraken's Ink",
    tier: "Octopus Tier",
    icon: <Swords size={32} className="text-royal-gold" />,
    amount: "$250+",
    description: "The resourceful noble, extending influence through cunning strategy.",
    color: "royal-gold", 
    glow: false
  },
  {
    name: "Abyssal Light",
    tier: "Fish Tier",
    icon: <Gem size={32} className="text-royal-blue" />,
    amount: "$1,000+",
    description: "A beacon of dedication. Your contribution illuminates the royal treasury.",
    color: "royal-blue",
    glow: false
  },
  {
    name: "Speed of the Current",
    tier: "Dolphin Tier",
    icon: <Award size={32} className="text-royal-purple" />,
    amount: "$5,000+",
    description: "Swift and respected. Your generous patronage carries significant weight at court.",
    color: "royal-purple",
    glow: true
  },
  {
    name: "Apex Predator",
    tier: "Shark Tier",
    icon: <Trophy size={32} className="text-royal-gold" />,
    amount: "$10,000+",
    description: "A fearsome presence in the royal court. Your influence shapes the realm's destiny.",
    color: "royal-gold",
    glow: true
  },
  {
    name: "Monarch of the Deep",
    tier: "Whale Tier",
    icon: <Crown size={32} className="text-royal-blue" />,
    amount: "$25,000+",
    description: "The true power behind the throne. Your magnificent patronage commands universal respect.",
    color: "royal-blue",
    glow: true
  }
];

const RoyalBadges = () => {
  return (
    <section className="w-full py-20 px-6 relative overflow-hidden throne-bg">
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-1/4 -left-1/4 w-96 h-96 rounded-full bg-royal-purple/20 filter blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 -right-1/4 w-96 h-96 rounded-full bg-royal-blue/20 filter blur-[100px] animate-pulse-slow" 
             style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-royal-gold/20 filter blur-[100px] animate-pulse-slow" 
             style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="relative">
              <Award size={40} className="text-royal-gold mx-auto" />
              <div className="absolute -inset-4 bg-royal-gold/20 blur-xl rounded-full"></div>
            </div>
          </div>
          <h2 className="text-4xl font-royal royal-gradient mb-4">Royal Insignias</h2>
          <p className="text-white/70 max-w-2xl mx-auto font-serif">
            Display your status with prestigious badges that reflect your contributions to the crown.
            Each tier unlocks new privileges and honors within the royal court.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {badges.map((badge, index) => (
            <div 
              key={index} 
              className={`royal-card rounded-2xl p-8 border border-${badge.color}/30 hover:border-${badge.color}/50 transition-all duration-300 hover:transform hover:scale-[1.03] relative group overflow-hidden`}
            >
              {badge.glow && (
                <div className={`absolute inset-0 bg-${badge.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              )}
              
              <div className="flex items-center justify-between mb-6">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center bg-${badge.color}/10 border border-${badge.color}/30 ${badge.glow ? `group-hover:ring-2 group-hover:ring-${badge.color}/30 transition-all duration-300` : ''}`}>
                  {badge.icon}
                </div>
                <div className="glass-morphism px-3 py-1 rounded-full">
                  <span className="text-white/80 text-sm font-royal">{badge.amount}</span>
                </div>
              </div>
              
              <h3 className={`text-xl font-royal ${badge.glow ? `text-${badge.color} group-hover:text-${badge.color} transition-colors duration-300` : ''} mb-1`}>
                {badge.name}
              </h3>
              <div className="text-xs text-white/50 font-royal uppercase tracking-wider mb-4">{badge.tier}</div>
              
              <p className="text-white/70 font-serif">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoyalBadges;
