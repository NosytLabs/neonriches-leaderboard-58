
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { EyeIcon, ZapIcon, SparklesIcon, CrownIcon, InfoIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BoostEffect } from '@/types/boostEffects';
import P5CrownEffect from '@/components/animations/P5CrownEffect';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface BoostEffectDemoProps {
  boost?: BoostEffect;
  className?: string;
}

const BoostEffectDemo: React.FC<BoostEffectDemoProps> = ({ boost, className }) => {
  const [activeEffect, setActiveEffect] = useState<'glow' | 'crown' | 'sparkle'>('crown');
  const [demoBoost, setDemoBoost] = useState<BoostEffect | null>(null);
  
  // Particles state for sparkle effect
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    delay: number;
    duration: number;
  }>>([]);
  
  // Generate new particles every 3 seconds
  useEffect(() => {
    if (activeEffect === 'sparkle') {
      const intervalId = setInterval(() => {
        generateParticles();
      }, 3000);
      
      generateParticles();
      
      return () => clearInterval(intervalId);
    }
  }, [activeEffect]);
  
  // Update when a boost is selected
  useEffect(() => {
    if (boost) {
      setDemoBoost(boost);
      
      // Set active effect based on boost type
      if (boost.type === 'effect' && boost.tier === 'royal') {
        setActiveEffect('crown');
      } else if (boost.type === 'animation') {
        setActiveEffect('sparkle');
      } else {
        setActiveEffect('glow');
      }
    }
  }, [boost]);
  
  const generateParticles = () => {
    const newParticles = Array.from({ length: 10 }).map((_, i) => ({
      id: Date.now() + i,
      x: 10 + Math.random() * 80,
      y: 10 + Math.random() * 80,
      size: 3 + Math.random() * 8,
      delay: Math.random() * 1,
      duration: 2 + Math.random() * 2
    }));
    
    setParticles(prev => [...prev.slice(-20), ...newParticles]);
  };
  
  const getActiveBoostInfo = () => {
    if (demoBoost) {
      return {
        name: demoBoost.name,
        tier: demoBoost.tier,
        price: demoBoost.price,
        duration: demoBoost.durationDays,
      };
    }
    
    // Default info based on active effect
    switch (activeEffect) {
      case 'glow':
        return {
          name: "Royal Glow Aura",
          tier: "premium",
          price: 25,
          duration: 30,
        };
      case 'crown':
        return {
          name: "Royal Crown Effect",
          tier: "royal",
          price: 50,
          duration: 30,
        };
      case 'sparkle':
        return {
          name: "Royal Sparkle",
          tier: "premium",
          price: 20,
          duration: 30,
        };
    }
  };
  
  const boostInfo = getActiveBoostInfo();
  
  return (
    <Card className={`glass-morphism border-royal-gold/20 overflow-hidden ${className}`}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center">
            <ZapIcon className="mr-2 h-5 w-5 text-royal-gold" />
            Profile Boost Effects
          </CardTitle>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="sm" className="p-0 w-8 h-8">
                  <InfoIcon className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Preview how profile boosts will enhance your presence</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardHeader>
      
      <CardContent>
        <Tabs 
          defaultValue="crown" 
          value={activeEffect} 
          onValueChange={(value) => setActiveEffect(value as 'glow' | 'crown' | 'sparkle')}
        >
          <TabsList className="grid grid-cols-3 glass-morphism border-white/10 mb-4">
            <TabsTrigger value="glow" className="flex items-center">
              <EyeIcon size={14} className="mr-1.5" />
              Glow
            </TabsTrigger>
            <TabsTrigger value="crown" className="flex items-center">
              <CrownIcon size={14} className="mr-1.5" />
              Crown
            </TabsTrigger>
            <TabsTrigger value="sparkle" className="flex items-center">
              <SparklesIcon size={14} className="mr-1.5" />
              Sparkle
            </TabsTrigger>
          </TabsList>
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeEffect}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-full aspect-square bg-gradient-to-br from-gray-900 to-black rounded-lg mb-4 overflow-hidden"
            >
              <div className="absolute inset-0 opacity-30 bg-grid-pattern"></div>
              
              {activeEffect === 'glow' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="relative w-36 h-36"
                  >
                    <motion.div 
                      className="absolute inset-0 rounded-full bg-royal-gold/10"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.4, 0.8, 0.4]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <motion.div 
                      className="absolute inset-0 -m-4 rounded-full bg-royal-gold/5"
                      animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                      }}
                    />
                    <motion.div 
                      className="absolute inset-0 -m-8 rounded-full bg-royal-gold/3"
                      animate={{ 
                        scale: [1, 1.4, 1],
                        opacity: [0.2, 0.4, 0.2]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                      }}
                    />
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div 
                        className="w-24 h-24 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center border border-white/10"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      >
                        <motion.div
                          className="text-2xl"
                          animate={{ 
                            rotateZ: [0, 10, -10, 0],
                          }}
                          transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          👑
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              )}
              
              {activeEffect === 'crown' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative w-full h-full"
                  >
                    <P5CrownEffect width={300} height={300} color="#D4AF37" animate={true} />
                    
                    <div className="absolute inset-x-0 bottom-16 flex items-center justify-center">
                      <motion.div 
                        className="w-24 h-24 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center border border-white/10"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      >
                        <motion.div
                          className="text-2xl"
                          animate={{ 
                            rotateZ: [0, 10, -10, 0],
                          }}
                          transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          😎
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              )}
              
              {activeEffect === 'sparkle' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="relative w-full h-full"
                  >
                    {/* Sparkle particles */}
                    {particles.map((particle) => (
                      <motion.div
                        key={particle.id}
                        className="absolute rounded-full bg-royal-gold"
                        style={{
                          left: `${particle.x}%`,
                          top: `${particle.y}%`,
                          width: particle.size,
                          height: particle.size,
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ 
                          opacity: [0, 0.8, 0],
                          scale: [0, 1, 0],
                          y: [0, -20]
                        }}
                        transition={{
                          duration: particle.duration,
                          delay: particle.delay,
                          ease: "easeOut"
                        }}
                      />
                    ))}
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div 
                        className="w-24 h-24 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center border border-white/10"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      >
                        <motion.div
                          className="text-2xl"
                          animate={{ 
                            rotateZ: [0, 10, -10, 0],
                          }}
                          transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          🤴
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="font-medium">Effect Name</div>
              <div className="text-royal-gold">{boostInfo.name}</div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="font-medium">Effect Tier</div>
              <Badge 
                className={`
                  ${boostInfo.tier === 'basic' ? 'bg-gray-700/50 text-gray-300 border-gray-600' : ''}
                  ${boostInfo.tier === 'premium' ? 'bg-royal-purple/20 text-royal-purple border-royal-purple/40' : ''}
                  ${boostInfo.tier === 'royal' ? 'bg-royal-gold/20 text-royal-gold border-royal-gold/40' : ''}
                `}
              >
                {boostInfo.tier.toUpperCase()}
              </Badge>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="font-medium">Duration</div>
              <div className="text-white/70">{boostInfo.duration} Days</div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="font-medium">Price</div>
              <div className="text-royal-gold font-bold">${boostInfo.price.toFixed(2)}</div>
            </div>
            
            <Button className="w-full mt-4 bg-royal-gold text-black hover:bg-royal-gold/90">
              <CrownIcon className="mr-2 h-4 w-4" />
              Apply This Effect
            </Button>
          </div>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default BoostEffectDemo;
