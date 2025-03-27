
import React from 'react';
import { Trophy } from 'lucide-react';
import OptimizedImage from '@/components/ui/optimized-image';

interface EventHeaderProps {
  name: string;
  image: string;
}

const EventHeader: React.FC<EventHeaderProps> = ({ name, image }) => {
  return (
    <div className="relative h-48 overflow-hidden rounded-t-lg">
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
      
      <OptimizedImage 
        src={image} 
        alt={name}
        className="w-full h-full object-cover"
        loadingStrategy="eager"
        placeholderColor="#1a1a2a"
      />
      
      <div className="absolute bottom-0 left-0 p-6 z-20">
        <div className="flex items-center space-x-2 mb-1">
          <span className="bg-white/20 text-white text-xs px-2 py-0.5 rounded-full flex items-center">
            <Trophy size={12} className="mr-1" /> ACTIVE EVENT
          </span>
        </div>
        <h2 className="text-2xl font-bold text-white">{name}</h2>
      </div>
    </div>
  );
};

export default EventHeader;
