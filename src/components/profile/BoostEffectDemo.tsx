
import React, { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ProfileBoostEffect } from '@/types/profile-boost';
import { Sparkles, Clock, Tag, Crown } from 'lucide-react';

interface BoostEffectDemoProps {
  boost: ProfileBoostEffect;
}

const BoostEffectDemo: React.FC<BoostEffectDemoProps> = ({ boost }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const getTierBadgeColor = (tier: string) => {
    switch (tier) {
      case 'basic':
        return 'bg-gray-700 hover:bg-gray-600';
      case 'premium':
        return 'bg-royal-purple hover:bg-royal-purple/90';
      case 'royal':
        return 'bg-royal-gold text-black hover:bg-royal-gold/90';
      default:
        return 'bg-gray-700 hover:bg-gray-600';
    }
  };
  
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'visibility':
        return <Crown className="h-4 w-4" />;
      case 'appearance':
        return <Sparkles className="h-4 w-4" />;
      case 'animation':
        return <Sparkles className="h-4 w-4" />;
      case 'effect':
        return <Sparkles className="h-4 w-4" />;
      default:
        return <Sparkles className="h-4 w-4" />;
    }
  };
  
  return (
    <Card 
      className={`overflow-hidden transition-all duration-300 hover:scale-105 border-white/10 ${boost.cssClass}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="relative h-48 bg-gradient-to-b from-black/50 to-black/20 flex items-center justify-center"
        style={{
          backgroundImage: boost.previewImage ? `url(${boost.previewImage})` : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
        
        <div className="relative z-10 p-6 text-center">
          <div className="mb-3 mx-auto w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center">
            {getTypeIcon(boost.type)}
          </div>
          <h3 className="text-xl font-bold">{boost.name}</h3>
          
          <div className="flex mt-2 gap-2 justify-center">
            <Badge variant="outline" className="bg-black/30 backdrop-blur-sm border-white/10">
              {boost.type.charAt(0).toUpperCase() + boost.type.slice(1)}
            </Badge>
            <Badge 
              variant="outline" 
              className={`${getTierBadgeColor(boost.tier)} border-none text-white`}
            >
              {boost.tier.charAt(0).toUpperCase() + boost.tier.slice(1)}
            </Badge>
          </div>
        </div>
        
        {/* Hover effect overlay */}
        <div 
          className={`absolute inset-0 bg-gradient-to-t from-black to-transparent transition-opacity duration-300 ${
            isHovered ? 'opacity-80' : 'opacity-0'
          }`}
        ></div>
      </div>
      
      <CardContent className="p-4">
        <p className="text-sm text-white/70">{boost.description}</p>
        
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-1 text-royal-gold">
            <Tag className="h-4 w-4" />
            <span className="font-bold">${boost.price}</span>
          </div>
          <div className="flex items-center gap-1 text-white/60">
            <Clock className="h-4 w-4" />
            <span>{boost.durationDays} days</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full" 
          variant={boost.tier === 'royal' ? 'royal' : 'default'}
        >
          <Sparkles className="mr-2 h-4 w-4" />
          Apply Boost
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BoostEffectDemo;
