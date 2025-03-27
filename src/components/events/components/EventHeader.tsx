
import React from 'react';
import { DollarSign, Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface EventHeaderProps {
  name: string;
  image: string;
}

const EventHeader = ({ name, image }: EventHeaderProps) => {
  return (
    <div className="relative h-48 md:h-64">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-6">
        <div className="flex items-center space-x-2 mb-2">
          <span className="bg-team-red text-white text-xs px-2 py-1 rounded-full">
            ACTIVE EVENT
          </span>
          <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
            <DollarSign size={10} className="text-royal-gold" />
            <span>COSMETIC ONLY</span>
          </span>
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="bg-white/10 text-white rounded-full p-1">
                <Info size={12} />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              This event only provides cosmetic effects and doesn't affect the $1 = 1 rank calculation
            </TooltipContent>
          </Tooltip>
        </div>
        <h2 className="text-2xl font-bold text-white">{name}</h2>
      </div>
    </div>
  );
};

export default EventHeader;
