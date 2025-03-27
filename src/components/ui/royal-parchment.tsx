
import React from 'react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';

interface RoyalParchmentProps {
  children: React.ReactNode;
  variant?: 'default' | 'gold' | 'crimson' | 'navy';
  className?: string;
}

const RoyalParchment: React.FC<RoyalParchmentProps> = ({
  children,
  variant = 'default',
  className
}) => {
  const baseClasses = "glass-morphism border-royal-gold/20 shadow-xl royal-shine relative overflow-hidden";
  
  const variantClasses = {
    default: "border-royal-gold/20",
    gold: "border-royal-gold/30 bg-royal-gold/5",
    crimson: "border-royal-crimson/30 bg-royal-crimson/5",
    navy: "border-royal-navy/30 bg-royal-navy/5"
  };
  
  return (
    <Card className={cn(
      baseClasses,
      variantClasses[variant],
      className
    )}>
      {/* Decorative corner embellishments */}
      <div className="absolute top-0 left-0 w-16 h-16 opacity-10">
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-royal-gold"></div>
      </div>
      <div className="absolute top-0 right-0 w-16 h-16 opacity-10">
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-royal-gold"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-16 h-16 opacity-10">
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-royal-gold"></div>
      </div>
      <div className="absolute bottom-0 right-0 w-16 h-16 opacity-10">
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-royal-gold"></div>
      </div>
      
      {/* Subtle watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02]">
        <div className="w-72 h-72 rounded-full border-8 border-royal-gold flex items-center justify-center">
          <div className="text-9xl font-royal text-royal-gold">₮</div>
        </div>
      </div>
      
      {children}
    </Card>
  );
};

export default RoyalParchment;
