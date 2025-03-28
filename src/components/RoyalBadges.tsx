
import React from 'react';
import { Crown, Award, Shield, Gem, Trophy, Swords, Scroll, User, Coins } from 'lucide-react';
import RoyalDivider from '@/components/ui/royal-divider';
import MedievalIcon from '@/components/ui/medieval-icon';

const badges = [
  {
    name: "Peasant's Pittance",
    tier: "Peasant Tier",
    icon: <User size={32} className="text-gray-400" />,
    amount: "$0 - $5",
    description: "The humble commoner, contributing what little they have to the royal treasury.",
    color: "gray-400",
    glow: false
  },
  {
    name: "Merchant's Contribution",
    tier: "Merchant Tier",
    icon: <Coins size={32} className="text-amber-700" />,
    amount: "$5 - $15",
    description: "A respectable trader making modest contributions to gain standing in the court.",
    color: "amber-700", 
    glow: false
  },
  {
    name: "Knight's Honor",
    tier: "Knight Tier",
    icon: <Swords size={32} className="text-blue-500" />,
    amount: "$15 - $30",
    description: "A loyal servant of the crown, sworn to uphold the royal status.",
    color: "blue-500",
    glow: false
  },
  {
    name: "Baron's Patronage",
    tier: "Baron Tier",
    icon: <Shield size={32} className="text-royal-purple" />,
    amount: "$30 - $75",
    description: "A noble with land and title, regularly contributing to royal projects.",
    color: "royal-purple",
    glow: true
  },
  {
    name: "Duke's Fortune",
    tier: "Duke Tier",
    icon: <Gem size={32} className="text-royal-gold" />,
    amount: "$75 - $150",
    description: "A powerful noble, second only to the royal family in wealth and influence.",
    color: "royal-gold",
    glow: true
  },
  {
    name: "Royal Benefactor",
    tier: "Royal Tier",
    icon: <Crown size={32} className="text-royal-blue" />,
    amount: "$150+",
    description: "A true royal patron whose exceptional contributions sustain the entire kingdom.",
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
              <MedievalIcon name="crown" size="md" color="gold" animate />
              <div className="absolute -inset-4 bg-royal-gold/20 blur-xl rounded-full"></div>
            </div>
          </div>
          <h2 className="text-4xl font-royal royal-gradient mb-4">Royal Insignias</h2>
          <p className="text-white/70 max-w-2xl mx-auto font-serif">
            Your contributions to the royal treasury determine your standing in court.
            Each tier of patronage grants cosmetic distinctions reflecting your status.
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

        <div className="mt-16 glass-morphism rounded-xl p-8 border border-royal-gold/30">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-8">
              <div className="relative">
                <MedievalIcon name="seal" size="lg" color="gold" animate />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-royal royal-gradient mb-2">Founder's Pass - Limited Time Offer</h3>
              <p className="text-white/70 font-serif mb-4">
                For a limited time, secure your place in court history with the Founder's Pass. 
                $100 grants you exclusive permanent profile features, including the prestigious "Founder" title, animated borders, and extended profile customization.
              </p>
              <div className="text-sm text-white/50 italic">
                "All cosmetic enhancements are purely ornamental and have no effect on gameplay mechanics."
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoyalBadges;
