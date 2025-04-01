
import React from 'react';
import { cn } from '@/lib/utils';
import MedievalIcon from '@/components/ui/medieval-icon';
import { BaseDecorationProps, sizeClasses } from '@/types/ui/decorations/types';

interface BorderPatternProps extends BaseDecorationProps {
  pattern?: 'diamonds' | 'crosses' | 'dots' | 'lines';
  borderWidth?: string;
}

const BorderPattern: React.FC<BorderPatternProps> = ({
  color = 'gold',
  size = 'md',
  className,
  pattern = 'diamonds',
  borderWidth = '2px',
}) => {
  const sizeClass = sizeClasses[size];
  const patternClass = 
    pattern === 'diamonds' ? 'bg-[linear-gradient(45deg,transparent_25%,currentColor_25%,currentColor_50%,transparent_50%,transparent_75%,currentColor_75%)]' :
    pattern === 'crosses' ? 'bg-[repeating-linear-gradient(45deg,currentColor,currentColor_2px,transparent_2px,transparent_10px)]' :
    pattern === 'dots' ? 'bg-[radial-gradient(circle,currentColor_1px,transparent_1px)]' :
    'bg-[repeating-linear-gradient(90deg,currentColor,currentColor_1px,transparent_1px,transparent_10px)]';

  const bgSize = 
    pattern === 'diamonds' ? 'bg-[size:12px_12px]' :
    pattern === 'crosses' ? 'bg-[size:10px_10px]' :
    pattern === 'dots' ? 'bg-[size:6px_6px]' :
    'bg-[size:10px_10px]';

  const colorClass = 
    color === 'gold' ? 'text-royal-gold/30' :
    color === 'royal' ? 'text-royal-purple/30' :
    color === 'crimson' ? 'text-royal-crimson/30' :
    color === 'navy' ? 'text-royal-navy/30' : 
    'text-white/20';

  return (
    <div className={cn("relative p-2", className)}>
      <div 
        className={cn(
          "absolute inset-0 rounded",
          patternClass,
          bgSize,
          colorClass
        )}
      ></div>
      <div 
        className={cn(
          "border rounded",
          colorClass,
          "relative z-10"
        )}
        style={{ borderWidth }}
      >
        <div className="px-4 py-2">
          {/* Content slot */}
        </div>
      </div>
    </div>
  );
};

export default BorderPattern;
