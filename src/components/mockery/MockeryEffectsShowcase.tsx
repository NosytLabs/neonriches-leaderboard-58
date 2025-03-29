
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Target, Egg, Flame, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import { MockeryAction } from '@/types/mockery';
import { getShameActionPrice, hasWeeklyDiscount, getDiscountedShamePrice } from '@/components/events/utils/shameUtils';

interface MockeryEffectsShowcaseProps {
  onSelect?: (action: MockeryAction, price: number) => void;
  className?: string;
}

const MockeryEffectsShowcase: React.FC<MockeryEffectsShowcaseProps> = ({ onSelect, className }) => {
  const [activeEffect, setActiveEffect] = useState<MockeryAction>('tomatoes');
  
  const getEffectIcon = (effect: MockeryAction) => {
    switch (effect) {
      case 'tomatoes': return <Flame className="h-5 w-5 text-red-500" />;
      case 'eggs': return <Egg className="h-5 w-5 text-amber-300" />;
      case 'stocks': return <Lock className="h-5 w-5 text-slate-400" />;
      case 'silence': return <Target className="h-5 w-5 text-royal-purple" />;
      case 'courtJester': return <Target className="h-5 w-5 text-royal-gold" />;
      default: return <Target className="h-5 w-5" />;
    }
  };
  
  const getEffectName = (effect: MockeryAction) => {
    switch (effect) {
      case 'tomatoes': return 'Rotten Tomatoes';
      case 'eggs': return 'Rancid Eggs';
      case 'stocks': return 'Royal Stocks';
      case 'silence': return 'Royal Silence';
      case 'courtJester': return 'Court Jester';
      default: return 'Unknown Effect';
    }
  };
  
  const getEffectDescription = (effect: MockeryAction) => {
    switch (effect) {
      case 'tomatoes': return 'Splatter their profile with rotten tomatoes for 24 hours';
      case 'eggs': return 'Pelt their profile with rancid eggs for 24 hours';
      case 'stocks': return 'Lock them in the royal stocks for public ridicule for 48 hours';
      case 'silence': return 'Prevent them from commenting for 12 hours';
      case 'courtJester': return 'Force them to wear the court jester outfit for 72 hours';
      default: return 'Unknown effect';
    }
  };
  
  const getEffectPrice = (effect: MockeryAction) => {
    const basePrice = getShameActionPrice(effect as any);
    const hasDiscount = hasWeeklyDiscount(effect as any);
    return hasDiscount ? getDiscountedShamePrice(effect as any) : basePrice;
  };
  
  const getEffectDuration = (effect: MockeryAction) => {
    switch (effect) {
      case 'tomatoes': return '24 hours';
      case 'eggs': return '24 hours';
      case 'stocks': return '48 hours';
      case 'silence': return '12 hours';
      case 'courtJester': return '72 hours';
      default: return '24 hours';
    }
  };

  const isDiscounted = (effect: MockeryAction) => {
    return hasWeeklyDiscount(effect as any);
  };
  
  return (
    <Card className={`glass-morphism border-royal-gold/20 overflow-hidden ${className}`}>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center">
          <Target className="mr-2 h-5 w-5 text-royal-crimson" />
          Mockery Effects
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <Tabs 
          defaultValue="tomatoes" 
          value={activeEffect} 
          onValueChange={(value) => setActiveEffect(value as MockeryAction)}
        >
          <TabsList className="grid grid-cols-5 glass-morphism border-white/10 mb-4">
            <TabsTrigger value="tomatoes" className="flex items-center">
              <Flame size={14} className="mr-1.5 text-red-500" />
              Tomatoes
            </TabsTrigger>
            <TabsTrigger value="eggs" className="flex items-center">
              <Egg size={14} className="mr-1.5 text-amber-300" />
              Eggs
            </TabsTrigger>
            <TabsTrigger value="stocks" className="flex items-center">
              <Lock size={14} className="mr-1.5 text-slate-400" />
              Stocks
            </TabsTrigger>
            <TabsTrigger value="silence" className="flex items-center">
              <Target size={14} className="mr-1.5 text-royal-purple" />
              Silence
            </TabsTrigger>
            <TabsTrigger value="courtJester" className="flex items-center">
              <Target size={14} className="mr-1.5 text-royal-gold" />
              Jester
            </TabsTrigger>
          </TabsList>
          
          <div className="relative w-full aspect-square bg-gradient-to-br from-gray-900 to-black rounded-lg mb-4 overflow-hidden">
            <div className="absolute inset-0 opacity-30 bg-grid-pattern"></div>
            
            <TabsContent value="tomatoes" className="absolute inset-0 m-0 flex items-center justify-center">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative w-3/4 h-3/4 flex items-center justify-center"
              >
                {/* Tomato splatter effect */}
                {Array.from({ length: 8 }).map((_, i) => (
                  <motion.div 
                    key={i}
                    className="absolute w-12 h-12 bg-red-600 rounded-full z-10"
                    initial={{ 
                      x: 0, 
                      y: 0, 
                      scale: 0 
                    }}
                    animate={{ 
                      x: Math.cos(i * Math.PI / 4) * 100, 
                      y: Math.sin(i * Math.PI / 4) * 100, 
                      scale: 0.6 + Math.random() * 0.4 
                    }}
                    transition={{ 
                      duration: 0.5, 
                      delay: i * 0.1,
                      type: "spring"
                    }}
                    style={{
                      boxShadow: "0 0 20px rgba(220, 38, 38, 0.5)",
                      filter: "blur(2px)"
                    }}
                  />
                ))}
                
                <div className="relative z-20 bg-gray-800 rounded-full w-24 h-24 flex items-center justify-center border-2 border-gray-700">
                  <motion.div 
                    className="text-2xl"
                    initial={{ rotateZ: 0 }}
                    animate={{ rotateZ: 360 }}
                    transition={{ 
                      duration: 20, 
                      repeat: Infinity,
                      ease: "linear" 
                    }}
                  >
                    😫
                  </motion.div>
                </div>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="eggs" className="absolute inset-0 m-0 flex items-center justify-center">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative w-3/4 h-3/4 flex items-center justify-center"
              >
                {/* Egg splatter effect */}
                {Array.from({ length: 6 }).map((_, i) => (
                  <motion.div 
                    key={i}
                    className="absolute w-14 h-14 bg-amber-200 rounded-full"
                    initial={{ 
                      x: 0, 
                      y: 0, 
                      scale: 0 
                    }}
                    animate={{ 
                      x: Math.cos(i * Math.PI / 3) * 100, 
                      y: Math.sin(i * Math.PI / 3) * 100, 
                      scale: 0.5 + Math.random() * 0.5 
                    }}
                    transition={{ 
                      duration: 0.6, 
                      delay: i * 0.1,
                      type: "spring" 
                    }}
                    style={{
                      boxShadow: "0 0 20px rgba(253, 230, 138, 0.5)",
                      filter: "blur(1px)"
                    }}
                  />
                ))}
                
                <div className="relative z-20 bg-gray-800 rounded-full w-24 h-24 flex items-center justify-center border-2 border-gray-700">
                  <motion.div 
                    className="text-2xl"
                    initial={{ rotateZ: 0 }}
                    animate={{ rotateZ: 360 }}
                    transition={{ 
                      duration: 20, 
                      repeat: Infinity,
                      ease: "linear" 
                    }}
                  >
                    🤢
                  </motion.div>
                </div>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="stocks" className="absolute inset-0 m-0 flex items-center justify-center">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative w-3/4 h-3/4 flex items-center justify-center"
              >
                {/* Stocks effect */}
                <motion.div 
                  className="absolute w-48 h-20 bg-amber-900 rounded-lg"
                  initial={{ y: 30 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.5, type: "spring" }}
                />
                
                <motion.div 
                  className="absolute w-48 h-6 bg-amber-800 rounded-t-lg"
                  style={{ top: "-10%", zIndex: 30 }}
                  initial={{ y: -50 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
                />
                
                <div className="relative z-20 flex items-center justify-center">
                  <motion.div 
                    className="text-2xl"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut" 
                    }}
                  >
                    😭
                  </motion.div>
                </div>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="silence" className="absolute inset-0 m-0 flex items-center justify-center">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative w-3/4 h-3/4 flex items-center justify-center"
              >
                {/* Silence effect */}
                <motion.div 
                  className="relative z-20 bg-gray-800 rounded-full w-24 h-24 flex items-center justify-center border-2 border-gray-700"
                >
                  <motion.div className="text-2xl">
                    😶
                  </motion.div>
                </motion.div>
                
                <motion.div
                  className="absolute w-32 h-6 bg-royal-purple/50 rounded"
                  initial={{ width: 0 }}
                  animate={{ width: 128 }}
                  transition={{ duration: 0.4 }}
                  style={{ bottom: "30%", zIndex: 30 }}
                />
              </motion.div>
            </TabsContent>
            
            <TabsContent value="courtJester" className="absolute inset-0 m-0 flex items-center justify-center">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative w-3/4 h-3/4 flex items-center justify-center"
              >
                {/* Court Jester effect */}
                <motion.div 
                  className="absolute w-40 h-40 rounded-full"
                  style={{ 
                    background: 'conic-gradient(#F97316, #D946EF, #8B5CF6, #0EA5E9, #F97316)',
                    opacity: 0.6,
                    filter: 'blur(10px)'
                  }}
                  animate={{ 
                    rotate: 360
                  }}
                  transition={{ 
                    duration: 10, 
                    repeat: Infinity,
                    ease: "linear" 
                  }}
                />
                
                <div className="relative z-20 bg-gray-800 rounded-full w-24 h-24 flex items-center justify-center border-2 border-gray-700">
                  <motion.div 
                    className="text-2xl"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ 
                      duration: 1, 
                      repeat: Infinity,
                      ease: "easeInOut" 
                    }}
                  >
                    🤡
                  </motion.div>
                </div>
              </motion.div>
            </TabsContent>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="font-medium">Effect Name</div>
              <div className="text-royal-gold">{getEffectName(activeEffect)}</div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="font-medium">Description</div>
              <div className="text-white/70 text-sm text-right">{getEffectDescription(activeEffect)}</div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="font-medium">Duration</div>
              <div className="text-white/70">{getEffectDuration(activeEffect)}</div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="font-medium">Price</div>
              <div className="flex items-center">
                {isDiscounted(activeEffect) && (
                  <Badge className="mr-2 bg-royal-crimson/20 text-royal-crimson border border-royal-crimson/40">
                    50% OFF
                  </Badge>
                )}
                <div className="text-royal-gold font-bold">
                  ${getEffectPrice(activeEffect).toFixed(2)}
                </div>
              </div>
            </div>
            
            <Button 
              className="w-full mt-4 bg-royal-crimson text-white hover:bg-royal-crimson/90"
              onClick={() => onSelect && onSelect(activeEffect, getEffectPrice(activeEffect))}
            >
              Apply This Effect
            </Button>
          </div>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default MockeryEffectsShowcase;
