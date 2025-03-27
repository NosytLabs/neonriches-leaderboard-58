
import React from 'react';
import { cn } from '@/lib/utils';

interface ParchmentTextureProps {
  children: React.ReactNode;
  className?: string;
  aged?: boolean;
  seal?: boolean;
  border?: boolean;
}

const ParchmentTexture: React.FC<ParchmentTextureProps> = ({
  children,
  className,
  aged = false,
  seal = false,
  border = true
}) => {
  return (
    <div className={cn(
      'relative overflow-hidden rounded-md',
      border && 'border border-royal-gold/30',
      aged ? 'bg-[#EFE8D8]' : 'bg-[#F5F0E0]',
      className
    )}>
      {/* Parchment texture overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n' x='0' y='0'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)' opacity='0.3'/%3E%3C/svg%3E\")",
          backgroundSize: '150px 150px',
        }}
      />
      
      {/* Age spots */}
      {aged && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute h-4 w-4 rounded-full bg-royal-gold/10 blur-md" style={{ top: '20%', left: '10%' }}></div>
          <div className="absolute h-5 w-5 rounded-full bg-royal-crimson/5 blur-md" style={{ top: '60%', left: '75%' }}></div>
          <div className="absolute h-6 w-6 rounded-full bg-royal-gold/5 blur-md" style={{ top: '35%', left: '68%' }}></div>
          <div className="absolute h-3 w-3 rounded-full bg-royal-crimson/10 blur-md" style={{ top: '78%', left: '23%' }}></div>
        </div>
      )}
      
      {/* Seal */}
      {seal && (
        <div className="absolute -right-6 -top-6 w-20 h-20 flex items-center justify-center z-10 animate-seal-stamp opacity-90">
          <img
            src="/throne-assets/royal-seal.svg"
            alt="Royal Seal"
            className="w-full h-full object-contain"
          />
        </div>
      )}
      
      {/* Border flourish */}
      {border && (
        <>
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-royal-gold/30 rounded-tl-sm pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-royal-gold/30 rounded-tr-sm pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-royal-gold/30 rounded-bl-sm pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-royal-gold/30 rounded-br-sm pointer-events-none"></div>
        </>
      )}
      
      {/* Content */}
      <div className="relative z-0">
        {children}
      </div>
    </div>
  );
};

export default ParchmentTexture;
