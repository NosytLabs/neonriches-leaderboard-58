
import React from 'react';
import { Crown, Trophy, Shield, Scroll, Coins, Sparkles } from 'lucide-react';
import MedievalIcon from '@/components/ui/medieval-icon';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const RoyalFeatures = () => {
  const navigate = useNavigate();
  
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
              <MedievalIcon name="crown" size="md" color="gold" animate />
              <div className="absolute -inset-4 bg-royal-gold/20 blur-xl rounded-full"></div>
            </div>
          </div>
          <h2 className="text-4xl font-royal royal-gradient mb-4">Royal Patronage System</h2>
          <p className="text-white/70 max-w-2xl mx-auto font-serif">
            Contribute to the crown and climb the social hierarchy with our innovative pay-to-win mechanics that 
            directly translate your patronage into noble status.
          </p>
        </div>
        
        <div className="mb-16 glass-morphism rounded-xl p-8 border border-royal-gold/30">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-8">
              <div className="relative">
                <MedievalIcon name="seal" size="lg" color="gold" animate />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-royal royal-gradient mb-4">Founder's Pass - Limited Time Offer</h3>
              <p className="text-white/70 font-serif mb-6">
                Secure your permanent place in royal history with the Founder's Pass.
                For $100, you'll receive exclusive permanent benefits including the prestigious "Founder" title,
                royal coat of arms, extended profile customization, and permanent Pro tier features.
              </p>
              <Button 
                onClick={() => navigate('/cosmetics')}
                className="bg-gradient-to-r from-royal-gold via-amber-600 to-royal-gold text-black font-medieval text-lg py-6 px-8"
              >
                <MedievalIcon name="crown" size="sm" color="default" className="mr-2" />
                Claim Your Founder's Status
              </Button>
              <p className="text-sm text-white/50 italic mt-4">
                "All cosmetic enhancements are purely ornamental and have no effect on gameplay mechanics."
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1: Royal Titles */}
          <div className="royal-card rounded-2xl p-8 transform transition-all duration-500 hover:scale-[1.02]">
            <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6 bg-royal-purple/20 border border-royal-purple/30">
              <Scroll size={28} className="text-royal-purple" />
            </div>
            <h3 className="text-2xl font-royal mb-4">Royal Titles</h3>
            <p className="text-white/70 font-serif mb-6">
              Purchase prestigious titles that appear alongside your name on your profile and in the leaderboard.
              From humble Squire to the magnificent Duke.
            </p>
            <ul className="space-y-2 text-white/60 font-serif">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-royal-purple mr-2"></span>
                Basic Titles ($0.50-$5) - Squire, Yeoman, Jester
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-royal-purple mr-2"></span>
                Noble Titles ($5-$25) - Knight, Baron, Earl
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-royal-purple mr-2"></span>
                Royal Titles ($25+) - Duke, Prince, King
              </li>
            </ul>
          </div>
          
          {/* Feature 2: Profile Decorations */}
          <div className="royal-card rounded-2xl p-8 transform transition-all duration-500 hover:scale-[1.02]">
            <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6 bg-royal-gold/20 border border-royal-gold/30">
              <Trophy size={28} className="text-royal-gold" />
            </div>
            <h3 className="text-2xl font-royal mb-4">Profile Decorations</h3>
            <p className="text-white/70 font-serif mb-6">
              Enhance your profile with medieval-themed decorative elements, borders, and visual effects
              that showcase your royal status.
            </p>
            <ul className="space-y-2 text-white/60 font-serif">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-royal-gold mr-2"></span>
                Parchment Borders ($0.99) - Simple elegance
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-royal-gold mr-2"></span>
                Dragon Scale Frames ($5.00) - Rare grandeur
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-royal-gold mr-2"></span>
                Royal Insignias ($8+) - Elite status symbols
              </li>
            </ul>
          </div>
          
          {/* Feature 3: Fonts & Colors */}
          <div className="royal-card rounded-2xl p-8 transform transition-all duration-500 hover:scale-[1.02]">
            <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6 bg-royal-blue/20 border border-royal-blue/30">
              <Coins size={28} className="text-royal-blue" />
            </div>
            <h3 className="text-2xl font-royal mb-4">Fonts & Colors</h3>
            <p className="text-white/70 font-serif mb-6">
              Customize your profile with medieval-inspired typography and royal color schemes
              from affordable commoner styles to luxurious royal palettes.
            </p>
            <ul className="space-y-2 text-white/60 font-serif">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-royal-blue mr-2"></span>
                Scribe Script ($0.75) - Simple medieval text
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-royal-blue mr-2"></span>
                Royal Purple ($1.50) - The color of nobility
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-royal-blue mr-2"></span>
                Illuminated Text ($5+) - Ornate manuscripts
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoyalFeatures;
