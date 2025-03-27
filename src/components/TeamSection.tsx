
import React from 'react';
import { Button } from '@/components/ui/button';
import { Crown, Shield, Trophy } from 'lucide-react';

const TeamSection = () => {
  return (
    <section id="teams" className="w-full py-20 px-6 relative overflow-hidden throne-bg">
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-1/4 -left-1/4 w-96 h-96 rounded-full bg-royal-purple/20 filter blur-[100px] animate-pulse-slow"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-96 h-96 rounded-full bg-royal-blue/20 filter blur-[100px] animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-royal-gold/20 filter blur-[100px] animate-pulse-slow"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-royal royal-gradient mb-4">Choose Your Dynasty</h2>
          <p className="text-white/70 max-w-2xl mx-auto font-serif">
            Pledge your allegiance to one of three royal houses and contribute to your dynasty's collective influence.
            Each dynasty's power is measured by the combined patronage of all its noble members.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: 'Purple Dynasty',
              color: 'royal-purple',
              icon: Crown,
              description: 'The ancient House of Wisdom and Magic. Known for their mystical influence and visionary leadership across the digital realm.',
              members: 245,
              totalSpent: 24500,
              rank: 2
            },
            {
              name: 'Gold Dominion',
              color: 'royal-gold',
              icon: Trophy, // Changed from Scepter to Trophy since Scepter isn't available
              description: 'The opulent House of Wealth and Prosperity. Their golden touch turns influence into power through strategic investments and alliances.',
              members: 278,
              totalSpent: 28900,
              rank: 1
            },
            {
              name: 'Azure Order',
              color: 'royal-blue',
              icon: Shield,
              description: 'The noble House of Honor and Diplomacy. Their calculated approach to power relies on loyalty and deep tradition.',
              members: 203,
              totalSpent: 19800,
              rank: 3
            }
          ].map((team, index) => (
            <div 
              key={index} 
              className={`royal-card rounded-2xl p-8 border border-${team.color}/30 relative group overflow-hidden transition-all duration-500 hover:transform hover:scale-[1.02]`}
            >
              <div className={`absolute -inset-1.5 bg-gradient-to-r from-${team.color}/0 via-${team.color}/50 to-${team.color}/0 opacity-20 group-hover:opacity-100 transition-opacity duration-700 blur-xl`}></div>
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br from-white/5 to-transparent"></div>
              
              <div className="relative">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-${team.color}/10 border border-${team.color}/30`}>
                      <span className={`w-6 h-6 rounded-full bg-${team.color} animate-pulse-slow`}></span>
                    </div>
                    <h3 className={`text-2xl font-royal text-${team.color} mb-1`}>{team.name}</h3>
                    <div className="flex items-center">
                      <span className="text-xs bg-white/10 px-2 py-0.5 rounded-full text-white/70">
                        Rank #{team.rank}
                      </span>
                    </div>
                  </div>
                  
                  <div className={`font-mono text-${team.color} text-right`}>
                    <div className="text-3xl font-bold">${team.totalSpent.toLocaleString()}</div>
                    <div className="text-sm text-white/50">Royal Treasury</div>
                  </div>
                </div>
                
                <p className="text-white/70 mb-6 font-serif">
                  {team.description}
                </p>
                
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-2xl font-bold">{team.members}</div>
                    <div className="text-sm text-white/50">Noble Members</div>
                  </div>
                  
                  <div>
                    <div className="text-2xl font-bold">${(team.totalSpent / team.members).toFixed(2)}</div>
                    <div className="text-sm text-white/50">Avg. Contribution</div>
                  </div>
                </div>
                
                <Button 
                  className={`w-full bg-${team.color}/20 hover:bg-${team.color}/30 text-${team.color} border border-${team.color}/30 font-royal uppercase tracking-wide`}
                >
                  Pledge Allegiance
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
