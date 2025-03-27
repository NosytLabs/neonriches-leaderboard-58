
import React, { useRef } from 'react';
import useFloatingCoins from '@/hooks/use-floating-coins';
import { useCrownInteraction } from '@/hooks/use-crown-interaction';
import { useQuickAscension } from '@/hooks/use-quick-ascension';
import HeroStatusTag from './HeroStatusTag';
import HeroCrown from './HeroCrown';
import HeroTitle from './HeroTitle';
import HeroSubtitle from './HeroSubtitle';
import HeroValueDisplay from './HeroValueDisplay';
import HeroQuote from './HeroQuote';
import HeroActionButtons from './HeroActionButtons';
import HeroFeatureSection from './HeroFeatureSection';
import HeroFooter from './HeroFooter';
import { Crown, Gem, Shield } from 'lucide-react';

interface HeroContentProps {
  isVisible: boolean;
  heroRef: React.RefObject<HTMLElement>;
}

const HeroContent: React.FC<HeroContentProps> = ({ isVisible, heroRef }) => {
  const { handleCrownClick } = useCrownInteraction();
  const handleQuickAscension = useQuickAscension();
  
  // Use the floating coins hook
  useFloatingCoins({
    containerRef: heroRef,
    enabled: isVisible,
    frequency: 0.8,
    duration: 8000,
    minDelay: 3000,
    maxDelay: 5000
  });

  const features = [
    {
      color: 'royal-crimson',
      title: 'Wealth Equals Status',
      description: 'One dollar equals one rank point. No skills, talents, or merits considered—just pure, unadulterated wealth.',
      icon: <Crown size={28} className="text-royal-crimson" />
    }, 
    {
      color: 'royal-gold',
      title: 'Digital Prestige',
      description: 'Spend real currency for completely digital, utterly meaningless prestige. The perfect satire of modern status seeking.',
      icon: <Gem size={28} className="text-royal-gold" />
    }, 
    {
      color: 'royal-navy',
      title: 'Eternal Rankings',
      description: 'The leaderboard never resets. Your financial contributions to this absurd hierarchy are eternally recorded.',
      icon: <Shield size={28} className="text-royal-navy" />
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="flex flex-col items-center text-center">
        <HeroStatusTag>
          <span className="text-sm text-white/80 flex items-center">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-royal-gold mr-2 animate-pulse"></span>
            <span className="font-bold tracking-wide text-royal-gold">NOBILITY FOR SALE</span> — The Throne Awaits Your Tribute
          </span>
        </HeroStatusTag>
        
        <HeroCrown onClick={() => handleCrownClick(heroRef)} />
        
        <HeroTitle>
          <span className="block text-royal-gold drop-shadow-[0_4px_20px_rgba(255,215,0,0.4)]">
            Purchase Your
          </span>
          <span className="block text-royal-gold drop-shadow-[0_4px_20px_rgba(255,215,0,0.4)]">
            Place in Nobility
          </span>
        </HeroTitle>
        
        <HeroSubtitle text="In our digital kingdom, your rank is determined by one factor alone:" />
        
        <HeroValueDisplay>The Size of Your Tribute</HeroValueDisplay>
        
        <HeroQuote text="&quot;Where the wealthy become nobility and everyone else becomes inconsequential.&quot;" />
        
        <HeroActionButtons 
          primaryText="Secure Your Nobility"
          secondaryText="View The Royal Court"
          onPrimaryClick={handleQuickAscension}
          secondaryLink="/leaderboard"
        />
        
        <HeroFeatureSection features={features} />
        
        <HeroFooter text="* By participating, you acknowledge that you're spending real money for fake status in a satirical experiment about the absurdity of wealth-based hierarchies. And we think that's hilarious." />
      </div>
    </div>
  );
};

export default HeroContent;
