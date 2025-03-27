
import React from 'react';
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
import { Crown, Gem, Shield, Coins, Trophy, DollarSign } from 'lucide-react';

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
      icon: <Crown className="h-10 w-10 text-royal-crimson" />,
      title: "Royal Status",
      description: "Showcase your rank proudly in our digital hierarchy"
    },
    {
      color: 'royal-gold',
      icon: <Coins className="h-10 w-10 text-royal-gold" />,
      title: "Wealth Display",
      description: "Flaunt your financial triumph for all to envy"
    },
    {
      color: 'royal-navy',
      icon: <Shield className="h-10 w-10 text-royal-navy" />,
      title: "Team Glory",
      description: "Join a noble house and compete for collective prestige"
    },
    {
      color: 'royal-purple',
      icon: <Gem className="h-10 w-10 text-royal-purple" />,
      title: "Profile Prestige",
      description: "Unlock exclusive profile customization options"
    },
    {
      color: 'royal-mahogany',
      icon: <Trophy className="h-10 w-10 text-royal-mahogany" />,
      title: "Spending Badges",
      description: "Collect prestigious badges based on your expenditure"
    },
    {
      color: 'royal-velvet',
      icon: <DollarSign className="h-10 w-10 text-royal-velvet" />,
      title: "Weekly Rewards",
      description: "Compete in weekly tournaments for additional benefits"
    }
  ];

  return (
    <div className="container mx-auto px-4 relative z-10 pt-10 pb-20">
      <div className="text-center mb-16 animate-parchment-unfurl">
        <HeroStatusTag />
        
        <div className="my-6">
          <HeroCrown onClick={handleCrownClick} />
        </div>
        
        <HeroTitle />
        <HeroSubtitle />
        
        <div className="flex justify-center space-x-12 mt-8">
          <HeroValueDisplay 
            label="Court Members" 
            value="10,568" 
            icon={<Shield size={18} className="text-royal-gold" />} 
          />
          <HeroValueDisplay 
            label="Gold Spent" 
            value="$1,245,789" 
            icon={<Coins size={18} className="text-royal-gold" />} 
          />
          <HeroValueDisplay 
            label="Active Nobles" 
            value="1,287" 
            icon={<Crown size={18} className="text-royal-gold" />} 
          />
        </div>
        
        <HeroQuote />
        
        <HeroActionButtons onAscend={handleQuickAscension} />
      </div>
      
      <HeroFeatureSection features={features} />
      
      <HeroFooter />
    </div>
  );
};

export default HeroContent;
