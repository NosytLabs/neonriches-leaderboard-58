
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Coins } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface HeroActionButtonsProps {
  primaryText: string;
  secondaryText: string;
  onPrimaryClick: () => void;
  secondaryLink: string;
  className?: string;
}

const HeroActionButtons = ({ 
  primaryText, 
  secondaryText, 
  onPrimaryClick, 
  secondaryLink,
  className = '' 
}: HeroActionButtonsProps) => {
  const navigate = useNavigate();

  return (
    <div className={`flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-20 ${className}`}>
      <Button 
        className="royal-button bg-gradient-to-r from-royal-crimson via-royal-gold to-royal-navy hover:opacity-90 text-white px-10 py-7 text-lg rounded-full w-full sm:w-auto font-royal group relative overflow-hidden"
        onClick={onPrimaryClick}
      >
        <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative z-10 flex items-center">
          <Coins size={24} className="mr-3" />
          {primaryText}
        </div>
      </Button>
      
      <Button 
        variant="outline" 
        className="glass-morphism border-white/20 text-white hover:bg-white/10 hover:text-white px-10 py-7 text-lg rounded-full w-full sm:w-auto group royal-button"
        onClick={() => navigate(secondaryLink)}
      >
        <span className="relative z-10 flex items-center">
          {secondaryText}
          <ArrowRight size={20} className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
        </span>
      </Button>
    </div>
  );
};

export default HeroActionButtons;
