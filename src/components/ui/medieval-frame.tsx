
import React from 'react';
import { cn } from '@/lib/utils';

interface MedievalFrameProps {
  children: React.ReactNode;
  variant?: 'royal' | 'parchment' | 'noble' | 'ornate';
  className?: string;
  cornerDecoration?: boolean;
  borderDecoration?: boolean;
  seal?: boolean;
}

const MedievalFrame: React.FC<MedievalFrameProps> = ({
  children,
  variant = 'royal',
  className,
  cornerDecoration = true,
  borderDecoration = true,
  seal = false
}) => {
  // Base classes for all variants
  const baseClasses = "relative overflow-hidden rounded-lg border";
  
  // Variant-specific classes
  const variantClasses = {
    royal: "border-royal-gold/30 bg-foreground/5 backdrop-blur-md shadow-lg",
    parchment: "border-amber-700/30 bg-amber-50/10 backdrop-blur-sm shadow-md",
    noble: "border-royal-purple/30 bg-foreground/5 backdrop-blur-md shadow-lg",
    ornate: "border-royal-crimson/30 bg-foreground/5 backdrop-blur-md shadow-lg"
  };
  
  return (
    <div className={cn(baseClasses, variantClasses[variant], className)}>
      {/* Corner decorations */}
      {cornerDecoration && (
        <>
          <div className="absolute top-0 left-0 w-12 h-12 pointer-events-none">
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-royal-gold/30 rounded-tl-sm"></div>
          </div>
          <div className="absolute top-0 right-0 w-12 h-12 pointer-events-none">
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-royal-gold/30 rounded-tr-sm"></div>
          </div>
          <div className="absolute bottom-0 left-0 w-12 h-12 pointer-events-none">
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-royal-gold/30 rounded-bl-sm"></div>
          </div>
          <div className="absolute bottom-0 right-0 w-12 h-12 pointer-events-none">
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-royal-gold/30 rounded-br-sm"></div>
          </div>
        </>
      )}
      
      {/* Border decoration */}
      {borderDecoration && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 border border-royal-gold/10 rounded-lg m-3"></div>
        </div>
      )}
      
      {/* Wax seal */}
      {seal && (
        <div className="absolute -right-6 -top-6 w-16 h-16 flex items-center justify-center animate-seal-stamp opacity-80">
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-royal-crimson to-royal-crimson/80 flex items-center justify-center shadow-lg">
              <div className="text-white font-medieval text-[10px] tracking-wider">ROYAL SEAL</div>
            </div>
            <div className="absolute inset-0 rounded-full border-2 border-royal-gold/30 opacity-80"></div>
          </div>
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-0">
        {children}
      </div>
    </div>
  );
};

export default MedievalFrame;
