
import React from 'react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';

interface RoyalParchmentProps {
  children: React.ReactNode;
  variant?: 'default' | 'gold' | 'crimson' | 'navy' | 'purple';
  className?: string;
  waxSeal?: boolean;
  ribbons?: boolean;
  animateEntry?: boolean;
  ornate?: boolean;
}

const RoyalParchment: React.FC<RoyalParchmentProps> = ({
  children,
  variant = 'default',
  className,
  waxSeal = false,
  ribbons = false,
  animateEntry = false,
  ornate = false
}) => {
  const baseClasses = "glass-morphism border-royal-gold/20 shadow-xl royal-shine relative overflow-hidden";
  
  const variantClasses = {
    default: "border-royal-gold/20",
    gold: "border-royal-gold/30 bg-royal-gold/5",
    crimson: "border-royal-crimson/30 bg-royal-crimson/5",
    navy: "border-royal-navy/30 bg-royal-navy/5",
    purple: "border-royal-purple/30 bg-royal-purple/5"
  };
  
  return (
    <Card className={cn(
      baseClasses,
      variantClasses[variant],
      animateEntry && "animate-parchment-unfurl",
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
      
      {/* Enhanced parchment texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23${variant === 'gold' ? 'D4AF37' : variant === 'crimson' ? '8B0000' : variant === 'navy' ? '000080' : variant === 'purple' ? '4B0082' : 'D4AF37'}' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }}
      ></div>
      
      {/* Subtle watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02]">
        <div className="w-72 h-72 rounded-full border-8 border-royal-gold flex items-center justify-center">
          <div className="text-9xl font-royal text-royal-gold">₮</div>
        </div>
      </div>
      
      {/* Optional ornate border */}
      {ornate && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-2 left-2 right-2 bottom-2 border-2 border-royal-gold/10 rounded-lg"></div>
          <div className="absolute top-4 left-4 right-4 bottom-4 border border-royal-gold/5 rounded-lg"></div>
        </div>
      )}
      
      {/* Optional decorative ribbons */}
      {ribbons && (
        <>
          <div className="absolute -left-10 top-8 w-20 h-4 bg-gradient-to-r from-royal-crimson via-royal-crimson to-royal-crimson/0 transform -rotate-45 opacity-40"></div>
          <div className="absolute -right-10 top-8 w-20 h-4 bg-gradient-to-l from-royal-navy via-royal-navy to-royal-navy/0 transform rotate-45 opacity-40"></div>
        </>
      )}
      
      {/* Optional wax seal */}
      {waxSeal && (
        <div className="absolute -right-8 -top-8 w-24 h-24 flex items-center justify-center animate-seal-stamp">
          <div className="relative">
            <div className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-royal-crimson to-royal-gold filter blur-sm opacity-60"></div>
            <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-royal-crimson to-royal-crimson/80 flex items-center justify-center shadow-lg">
              <div className="text-white font-royal text-xs tracking-wider">ROYAL SEAL</div>
            </div>
            <div className="absolute inset-0 w-14 h-14 rounded-full border-2 border-royal-gold/30 opacity-80"></div>
          </div>
        </div>
      )}
      
      {children}
    </Card>
  );
};

export default RoyalParchment;
