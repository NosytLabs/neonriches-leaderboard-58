
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Sparkles, Info, ShoppingCart, Crown } from 'lucide-react';
import { BoostEffect } from '@/types/boostEffects';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger 
} from '@/components/ui/tooltip';
import CrownEffectCanvas from '@/components/animations/CrownEffectCanvas';

interface BoostEffectDemoProps {
  boost: BoostEffect;
  onPurchase?: (boostId: string) => void;
}

const BoostEffectDemo: React.FC<BoostEffectDemoProps> = ({ 
  boost,
  onPurchase 
}) => {
  const [isHovering, setIsHovering] = useState(false);
  
  const handlePurchase = () => {
    if (onPurchase) {
      onPurchase(boost.id);
    }
  };
  
  // Determine badge color based on tier
  const getBadgeVariant = () => {
    switch (boost.tier) {
      case 'royal': return 'bg-royal-gold text-black border-none';
      case 'premium': return 'bg-royal-purple text-white border-none';
      default: return 'bg-blue-500 text-white border-none';
    }
  };
  
  // Determine icon based on type
  const getBoostIcon = () => {
    switch (boost.type) {
      case 'appearance': return <Sparkles className="h-4 w-4" />;
      case 'effect': return <Crown className="h-4 w-4" />;
      case 'visibility': return <Eye className="h-4 w-4" />;
      case 'animation': return <Zap className="h-4 w-4" />;
      default: return <Sparkles className="h-4 w-4" />;
    }
  };
  
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      onHoverStart={() => setIsHovering(true)}
      onHoverEnd={() => setIsHovering(false)}
      className="h-full"
    >
      <Card className={`h-full border-white/10 hover:border-white/20 ${boost.cssClass} relative overflow-hidden transition-all duration-300`}>
        {boost.tier === 'royal' && (
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <CrownEffectCanvas width={250} height={300} opacity={0.2} />
          </div>
        )}
        
        <CardContent className="p-4 h-full flex flex-col">
          <div className="flex justify-between items-start mb-3">
            <Badge className={getBadgeVariant()}>
              {boost.tier.charAt(0).toUpperCase() + boost.tier.slice(1)} Tier
            </Badge>
            
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-6 w-6">
                    <Info className="h-3 w-3" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="left">
                  <p className="text-xs">{boost.type.charAt(0).toUpperCase() + boost.type.slice(1)} effect</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          
          <h3 className="font-semibold text-lg mb-1">{boost.name}</h3>
          <p className="text-sm text-white/70 mb-4 flex-grow">{boost.description}</p>
          
          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center text-white/60 text-sm">
              <Clock className="h-3.5 w-3.5 mr-1" />
              <span>{boost.durationDays} days</span>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="text-royal-gold font-semibold">${boost.price}</div>
              <Button 
                size="sm" 
                className={`${boost.tier === 'royal' ? 'bg-royal-gold text-black hover:bg-royal-gold/90' : ''}`}
                onClick={handlePurchase}
              >
                <ShoppingCart className="h-3.5 w-3.5 mr-1" />
                Purchase
              </Button>
            </div>
          </div>
          
          {boost.tier === 'royal' && (
            <motion.div 
              className="absolute bottom-0 right-0 p-2 opacity-70"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: isHovering ? 1 : 0.7,
                scale: isHovering ? 1.1 : 1
              }}
              transition={{ duration: 0.3 }}
            >
              <Crown className="h-6 w-6 text-royal-gold animate-crown-glow" />
            </motion.div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default BoostEffectDemo;
