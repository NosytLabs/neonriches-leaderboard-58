
import React from 'react';
import { AlertCircle, Info, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RankingDisclaimerProps {
  className?: string;
  messagePrefix?: string;
  variant?: 'info' | 'warning' | 'neutral' | 'gold';
}

const RankingDisclaimer: React.FC<RankingDisclaimerProps> = ({
  className,
  messagePrefix = 'Note:',
  variant = 'neutral'
}) => {
  const getIcon = () => {
    switch (variant) {
      case 'info': return <Info size={16} className="text-blue-400" />;
      case 'warning': return <AlertTriangle size={16} className="text-yellow-400" />;
      case 'gold': return <AlertCircle size={16} className="text-royal-gold" />;
      default: return <AlertCircle size={16} className="text-white/60" />;
    }
  };
  
  const getBgColor = () => {
    switch (variant) {
      case 'info': return 'bg-blue-500/10 border-blue-500/20';
      case 'warning': return 'bg-yellow-500/10 border-yellow-500/20';
      case 'gold': return 'bg-royal-gold/10 border-royal-gold/20';
      default: return 'bg-white/5 border-white/10';
    }
  };
  
  return (
    <div className={cn(
      'p-3 rounded-md flex items-start gap-3 text-sm',
      getBgColor(),
      className
    )}>
      <span className="mt-0.5">{getIcon()}</span>
      <div>
        <span className="font-medium">{messagePrefix} </span>
        <span className="text-white/80">
          Public shaming has no effect on actual rankings. It's purely for satirical entertainment 
          and reflects the game's mockery of wealth-based status systems.
        </span>
      </div>
    </div>
  );
};

export default RankingDisclaimer;
