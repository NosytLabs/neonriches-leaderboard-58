
import React, { useState, useRef } from 'react';
import { UserProfile } from '@/types/user';
import { getBoostById } from '@/data/boostEffects';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Sparkles, AlertTriangle, Info, Zap, Crown, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import CrownEffectCanvas from '@/components/animations/CrownEffectCanvas';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useCrownInteraction } from '@/hooks/use-crown-interaction';

interface ProfileBoostDisplayProps {
  user: UserProfile;
}

const ProfileBoostDisplay: React.FC<ProfileBoostDisplayProps> = ({ user }) => {
  const [expandedBoost, setExpandedBoost] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { handleCrownClick } = useCrownInteraction();
  
  // Get active boosts from the user profile
  const activeBoosts = user.boosts || [];
  
  // Calculate time remaining for each boost
  const getTimeRemaining = (endDate: string) => {
    const end = new Date(endDate);
    const now = new Date();
    const diffTime = end.getTime() - now.getTime();
    
    if (diffTime <= 0) {
      return 'Expired';
    }
    
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    if (diffDays > 0) {
      return `${diffDays}d ${diffHours}h remaining`;
    } else {
      return `${diffHours}h remaining`;
    }
  };

  // Toggle expanded state for a boost
  const toggleExpand = (boostId: string) => {
    if (expandedBoost === boostId) {
      setExpandedBoost(null);
    } else {
      setExpandedBoost(boostId);
    }
  };
  
  // Get appropriate icon based on boost type
  const getBoostIcon = (type: string) => {
    switch (type) {
      case 'appearance': return <Sparkles className="h-5 w-5" />;
      case 'visibility': return <Star className="h-5 w-5" />;
      case 'effect': return <Crown className="h-5 w-5" />;
      case 'animation': return <Zap className="h-5 w-5" />;
      default: return <Sparkles className="h-5 w-5" />;
    }
  };
  
  return (
    <div className="space-y-4" ref={containerRef}>
      {activeBoosts.length > 0 ? (
        <AnimatePresence>
          {activeBoosts.map((boost) => {
            const boostDetails = getBoostById(boost.boostId);
            
            if (!boostDetails) return null;
            
            const isExpanded = expandedBoost === boost.id;
            const isRoyalTier = boostDetails.tier === 'royal';
            const icon = getBoostIcon(boostDetails.type);
            
            return (
              <motion.div
                key={boost.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, type: 'spring' }}
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <Card 
                  className={`border-white/10 ${boostDetails.cssClass} transition-all duration-300 overflow-hidden cursor-pointer hover:border-white/20`}
                  onClick={() => toggleExpand(boost.id)}
                >
                  {isRoyalTier && (
                    <div 
                      className="absolute top-0 right-0 w-full h-full pointer-events-none"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCrownClick(containerRef);
                      }}
                    >
                      <CrownEffectCanvas width={300} height={150} opacity={0.3} />
                    </div>
                  )}
                  
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full ${isRoyalTier ? 'bg-royal-gold/20' : 'bg-royal-gold/10'} flex items-center justify-center`}>
                          {React.cloneElement(icon, { 
                            className: `${isRoyalTier ? 'text-royal-gold animate-crown-glow' : 'text-royal-gold'}`
                          })}
                        </div>
                        <div>
                          <h3 className="font-semibold">{boostDetails.name}</h3>
                          <p className="text-xs text-white/60">{boostDetails.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className={`bg-black/30 border-white/10 ${isRoyalTier ? 'animate-pulse-slow' : ''}`}>
                          {boostDetails.type.charAt(0).toUpperCase() + boostDetails.type.slice(1)}
                        </Badge>
                        
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Info className="h-4 w-4" />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Click to view boost details</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </div>
                    
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden mt-4"
                        >
                          <div className="p-3 bg-black/20 rounded-md backdrop-blur-sm">
                            <h4 className="text-sm font-medium mb-2">Boost Effects:</h4>
                            <ul className="text-xs text-white/70 list-disc pl-4 space-y-1">
                              <li>Increased profile visibility by {boostDetails.tier === 'royal' ? '300%' : boostDetails.tier === 'premium' ? '150%' : '50%'}</li>
                              <li>{boostDetails.tier === 'royal' ? 'Royal' : boostDetails.tier === 'premium' ? 'Premium' : 'Basic'} appearance effects</li>
                              {boostDetails.tier === 'royal' && (
                                <li>Special animations and particles</li>
                              )}
                              {(boostDetails.tier === 'royal' || boostDetails.tier === 'premium') && (
                                <li>Priority placement in leaderboards</li>
                              )}
                              <li>Active until: {new Date(boost.endDate).toLocaleDateString()}</li>
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-1 text-white/60 text-sm">
                        <Clock className="h-3.5 w-3.5" />
                        <span className={getTimeRemaining(boost.endDate).includes('Expired') ? 'text-red-400' : ''}>
                          {getTimeRemaining(boost.endDate)}
                        </span>
                      </div>
                      
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-8 hover:bg-white/5"
                      >
                        Renew Boost
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </AnimatePresence>
      ) : (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-900/50 rounded-lg p-6 text-center backdrop-blur-sm"
        >
          <div className="mx-auto w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mb-4">
            <AlertTriangle className="h-6 w-6 text-gray-400" />
          </div>
          <h3 className="text-xl font-bold mb-2">No Active Boosts</h3>
          <p className="text-white/70 mb-4">
            You don't have any active profile boosts. Purchase boosts to enhance your profile's visibility and appearance.
          </p>
          <Button className="group">
            <Sparkles className="mr-2 h-4 w-4 group-hover:animate-spin-slow" />
            Explore Available Boosts
          </Button>
        </motion.div>
      )}
    </div>
  );
};

export default ProfileBoostDisplay;
