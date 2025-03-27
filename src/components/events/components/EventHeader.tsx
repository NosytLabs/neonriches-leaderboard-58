
import React from 'react';
import { DollarSign, Info, Sparkles } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import OptimizedImage from '@/components/ui/optimized-image';

interface EventHeaderProps {
  name: string;
  image: string;
}

const EventHeader = ({ name, image }: EventHeaderProps) => {
  return (
    <div className="relative h-48 md:h-64 overflow-hidden rounded-t-lg">
      <OptimizedImage 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover"
        loadingStrategy="eager" // Load this immediately as it's a hero image
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
      
      {/* Animated overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-amber-500/10 to-blue-500/10 mix-blend-overlay opacity-60"></div>
      
      {/* Sparkles */}
      <div className="absolute top-5 right-5 animate-float opacity-70">
        <Sparkles size={20} className="text-amber-500" />
      </div>
      <div className="absolute bottom-20 right-10 animate-float opacity-50" style={{ animationDelay: '1s', animationDuration: '6s' }}>
        <Sparkles size={16} className="text-purple-500" />
      </div>
      <div className="absolute top-20 left-10 animate-float opacity-30" style={{ animationDelay: '2s', animationDuration: '8s' }}>
        <Sparkles size={12} className="text-blue-400" />
      </div>
      
      <div className="absolute bottom-0 left-0 p-6">
        <div className="flex items-center space-x-2 mb-2">
          <span className="bg-purple-500 text-white text-xs px-2 py-1 rounded-full animate-pulse-slow">
            ACTIVE EVENT
          </span>
          <span className="glass-morphism text-white text-xs px-2 py-1 rounded-full flex items-center gap-1 border border-white/10">
            <DollarSign size={10} className="text-amber-500" />
            <span>COSMETIC ONLY</span>
          </span>
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="glass-morphism text-white rounded-full p-1 border border-white/10 hover:border-white/30 transition-all">
                <Info size={12} />
              </button>
            </TooltipTrigger>
            <TooltipContent className="glass-morphism border-white/10">
              This event only provides cosmetic effects and doesn't affect the $1 = 1 rank calculation
            </TooltipContent>
          </Tooltip>
        </div>
        <h2 className="text-2xl font-bold text-white text-gradient animate-text-flicker">{name}</h2>
      </div>
    </div>
  );
};

export default EventHeader;
