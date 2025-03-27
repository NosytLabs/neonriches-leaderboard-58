
import React from 'react';
import { Button } from '@/components/ui/button';
import { Crown, ArrowRight } from 'lucide-react';

export interface HeroActionButtonsProps {
  onAscend?: () => void;
}

const HeroActionButtons: React.FC<HeroActionButtonsProps> = ({ onAscend }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
      <Button 
        size="lg" 
        className="bg-gradient-to-r from-royal-purple to-royal-gold hover:opacity-90 text-white royal-button"
        onClick={onAscend}
      >
        <Crown className="mr-2 h-5 w-5" />
        <span className="relative z-10">Ascend to Nobility</span>
      </Button>
      
      <Button 
        variant="outline" 
        size="lg" 
        className="glass-morphism border-white/10 hover:bg-white/10 text-white royal-button"
      >
        <span className="relative z-10">Learn More</span>
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </div>
  );
};

export default HeroActionButtons;
