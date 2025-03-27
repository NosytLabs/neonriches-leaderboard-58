
import React from 'react';
import { Crown, Trophy, Shield, Scroll, Coins, Sparkles } from 'lucide-react';

const RoyalFeatures = () => {
  return (
    <section className="w-full py-20 px-6 relative overflow-hidden throne-bg">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 -left-1/4 w-96 h-96 rounded-full bg-royal-purple/20 filter blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 -right-1/4 w-96 h-96 rounded-full bg-royal-blue/20 filter blur-[100px] animate-pulse-slow" 
             style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-3/4 left-1/3 w-72 h-72 rounded-full bg-royal-gold/20 filter blur-[100px] animate-pulse-slow" 
             style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="relative">
              <Crown size={40} className="text-royal-gold mx-auto" />
              <div className="absolute -inset-4 bg-royal-gold/20 blur-xl rounded-full"></div>
            </div>
          </div>
          <h2 className="text-4xl font-royal royal-gradient mb-4">Royal Patronage System</h2>
          <p className="text-white/70 max-w-2xl mx-auto font-serif">
            Contribute to the crown and climb the social hierarchy with our innovative pay-to-win mechanics that 
            directly translate your patronage into noble status.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1: Royal Decrees */}
          <div className="royal-card rounded-2xl p-8 transform transition-all duration-500 hover:scale-[1.02]">
            <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6 bg-royal-purple/20 border border-royal-purple/30">
              <Scroll size={28} className="text-royal-purple" />
            </div>
            <h3 className="text-2xl font-royal mb-4">Royal Decrees</h3>
            <p className="text-white/70 font-serif mb-6">
              Purchase special cosmetic powers that affect your profile appearance. Issue edicts that temporarily add visual flair,
              special animations, or temporary exclusive profile enhancements.
            </p>
            <ul className="space-y-2 text-white/60 font-serif">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-royal-purple mr-2"></span>
                Force Abdication ($5) - Visually poke a rival
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-royal-purple mr-2"></span>
                Royal Protection ($10) - Special profile shield icon
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-royal-purple mr-2"></span>
                Grand Proclamation ($25) - Animated profile effects for 24h
              </li>
            </ul>
          </div>
          
          {/* Feature 2: Royal Tournaments */}
          <div className="royal-card rounded-2xl p-8 transform transition-all duration-500 hover:scale-[1.02]">
            <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6 bg-royal-gold/20 border border-royal-gold/30">
              <Trophy size={28} className="text-royal-gold" />
            </div>
            <h3 className="text-2xl font-royal mb-4">Royal Tournaments</h3>
            <p className="text-white/70 font-serif mb-6">
              Regular competitions where patrons can compete for exclusive titles, special privileges, and unique
              profile enhancements only available to tournament victors.
            </p>
            <ul className="space-y-2 text-white/60 font-serif">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-royal-gold mr-2"></span>
                Entry Fee ($15) - Required to participate
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-royal-gold mr-2"></span>
                Champion's Purse - Exclusive profile badge
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-royal-gold mr-2"></span>
                Tournament Alliances - Form temporary teams
              </li>
            </ul>
          </div>
          
          {/* Feature 3: Treasury Raids */}
          <div className="royal-card rounded-2xl p-8 transform transition-all duration-500 hover:scale-[1.02]">
            <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6 bg-royal-blue/20 border border-royal-blue/30">
              <Coins size={28} className="text-royal-blue" />
            </div>
            <h3 className="text-2xl font-royal mb-4">Treasury Raids</h3>
            <p className="text-white/70 font-serif mb-6">
              Special events where patrons can spend to earn exclusive cosmetic rewards. The more you spend
              during a raid, the more impressive your cosmetic rewards.
            </p>
            <ul className="space-y-2 text-white/60 font-serif">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-royal-blue mr-2"></span>
                Raid Entry ($5) - Minimum contribution to participate
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-royal-blue mr-2"></span>
                Raider's Rewards - Exclusive profile decorations
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-royal-blue mr-2"></span>
                Strategic Timing - Raids occur at random intervals
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 glass-morphism rounded-xl p-8 border border-royal-gold/30">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-8">
              <div className="relative">
                <Sparkles size={40} className="text-royal-gold" />
                <div className="absolute -inset-4 bg-royal-gold/20 blur-xl rounded-full"></div>
              </div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-royal royal-gradient mb-2">Limited Time: Founder's Pass</h3>
              <p className="text-white/70 font-serif mb-0">
                For a limited time, secure your place in court history with the Founder's Pass. 
                $100 grants you exclusive permanent profile features, including animated borders, special titles, and unique visual effects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoyalFeatures;
