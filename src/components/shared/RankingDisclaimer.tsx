
import React from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { DollarSign, Info } from 'lucide-react';

export interface RankingDisclaimerProps {
  variant?: 'default' | 'info' | 'gold';
  className?: string;
  messagePrefix?: string;
}

const RankingDisclaimer: React.FC<RankingDisclaimerProps> = ({ 
  variant = 'default', 
  className = '',
  messagePrefix = 'Important:'
}) => {
  // Determine style based on variant
  const getStyles = () => {
    switch (variant) {
      case 'gold':
        return 'bg-royal-gold/5 border-royal-gold/20';
      case 'info':
        return 'bg-white/5 border-white/10';
      default:
        return 'border-white/10 bg-white/5';
    }
  };

  // Determine icon based on variant
  const getIcon = () => {
    switch (variant) {
      case 'gold':
      case 'default':
        return <DollarSign className="h-4 w-4 text-royal-gold" />;
      case 'info':
        return <Info className="h-4 w-4 text-white" />;
    }
  };
  
  return (
    <Alert className={`${getStyles()} ${className}`}>
      {getIcon()}
      <AlertDescription className="text-white/80">
        <strong>{messagePrefix}</strong> Your rank is always determined by your total spending. $1 = 1 rank point. 
        All events offer purely cosmetic rewards and don't affect this calculation.
      </AlertDescription>
    </Alert>
  );
};

export default RankingDisclaimer;
