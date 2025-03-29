
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Crown, Star, Zap, Clock, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BoostEffect } from '@/types/boostEffects';
import BoostEffectPreview from './BoostEffectPreview';

interface EnhancedBoostCardProps {
  boost: BoostEffect;
  onSelect?: (boost: BoostEffect) => void;
  userTier?: string;
}

const EnhancedBoostCard: React.FC<EnhancedBoostCardProps> = ({ 
  boost, 
  onSelect,
  userTier = 'free'
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  
  const getBoostIcon = () => {
    switch (boost.type) {
      case 'appearance':
        return <Sparkles className="h-5 w-5 text-royal-gold" />;
      case 'visibility':
        return <Star className="h-5 w-5 text-royal-gold" />;
      case 'effect':
        return <Crown className="h-5 w-5 text-royal-gold" />;
      case 'animation':
        return <Zap className="h-5 w-5 text-royal-gold" />;
      default:
        return <Sparkles className="h-5 w-5 text-royal-gold" />;
    }
  };
  
  // Check if user tier is high enough
  const canAccess = 
    (boost.tier === 'basic') || 
    (boost.tier === 'premium' && ['premium', 'royal'].includes(userTier)) ||
    (boost.tier === 'royal' && userTier === 'royal');
  
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => setIsExpanded(!isExpanded)}
      className="cursor-pointer"
    >
      <Card 
        className={`
          glass-morphism overflow-hidden transition-all duration-300 relative
          ${canAccess 
            ? 'border-white/10 hover:border-royal-gold/30' 
            : 'border-white/5 opacity-60'}
        `}
      >
        {/* Gold corner accent for Royal tier */}
        {boost.tier === 'royal' && (
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-royal-gold/20 transform rotate-45"></div>
        )}
        
        <CardContent className="p-0">
          <div className="grid grid-cols-5">
            {/* Image preview - 2 columns on left */}
            <div className="col-span-2">
              <BoostEffectPreview boost={boost} isActive={isHovered || isExpanded} />
            </div>
            
            {/* Details - 3 columns on right */}
            <div className="col-span-3 p-4">
              <div className="flex items-start justify-between mb-1">
                <div className="flex items-center">
                  {getBoostIcon()}
                  <h3 className="font-bold ml-2">{boost.name}</h3>
                </div>
                
                <Badge 
                  className={`
                    ${boost.tier === 'basic' ? 'bg-gray-700/50 text-gray-300 border-gray-600' : ''}
                    ${boost.tier === 'premium' ? 'bg-royal-purple/20 text-royal-purple border-royal-purple/40' : ''}
                    ${boost.tier === 'royal' ? 'bg-royal-gold/20 text-royal-gold border-royal-gold/40' : ''}
                  `}
                >
                  {boost.tier.toUpperCase()}
                </Badge>
              </div>
              
              <p className="text-sm text-white/70 mb-4">{boost.description}</p>
              
              <div className="flex items-center justify-between text-sm mb-2">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 text-white/50 mr-1" />
                  <span className="text-white/70">{boost.durationDays} days</span>
                </div>
                
                <div className="font-bold text-royal-gold">${boost.price.toFixed(2)}</div>
              </div>
              
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mb-4 text-xs text-white/60 bg-black/20 p-2 rounded overflow-hidden"
                  >
                    <h4 className="font-medium mb-1">Effect Details:</h4>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Type: {boost.type.charAt(0).toUpperCase() + boost.type.slice(1)}</li>
                      <li>Priority visibility: {boost.tier === 'royal' ? 'Very High' : boost.tier === 'premium' ? 'High' : 'Standard'}</li>
                      {boost.tier === 'royal' && <li>Special particle effects included</li>}
                      <li>Applicable to: Profile, comments, and leaderboard entries</li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <Button 
                variant={canAccess ? "default" : "secondary"}
                size="sm" 
                className="w-full"
                disabled={!canAccess}
                onClick={(e) => {
                  e.stopPropagation();
                  if (canAccess && onSelect) {
                    onSelect(boost);
                  }
                }}
              >
                {canAccess ? (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Apply Boost
                  </>
                ) : (
                  <>
                    <ArrowRight className="mr-2 h-4 w-4" />
                    Upgrade Required
                  </>
                )}
              </Button>
              
              {!canAccess && (
                <p className="text-xs text-white/40 mt-2 text-center">
                  Requires {boost.tier === 'premium' ? 'Premium' : 'Royal'} subscription
                </p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default EnhancedBoostCard;
