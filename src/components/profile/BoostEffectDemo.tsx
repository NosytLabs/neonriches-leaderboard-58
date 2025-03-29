
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { EyeIcon, ZapIcon } from 'lucide-react';
import { BoostEffect } from '@/types/boostEffects';
import P5CrownEffect from '@/components/animations/P5CrownEffect';

interface BoostEffectDemoProps {
  boost?: BoostEffect;
  className?: string;
}

const BoostEffectDemo: React.FC<BoostEffectDemoProps> = ({ boost, className }) => {
  const [activeEffect, setActiveEffect] = useState<'glow' | 'crown' | 'sparkle'>('crown');
  
  return (
    <Card className={`glass-morphism border-royal-gold/20 overflow-hidden ${className}`}>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center">
          <ZapIcon className="mr-2 h-5 w-5 text-royal-gold" />
          Profile Boost Effects
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <Tabs defaultValue="crown" value={activeEffect} onValueChange={(value) => setActiveEffect(value as 'glow' | 'crown' | 'sparkle')}>
          <TabsList className="grid grid-cols-3 glass-morphism border-white/10 mb-4">
            <TabsTrigger value="glow" className="flex items-center">
              <EyeIcon size={14} className="mr-1.5" />
              Glow
            </TabsTrigger>
            <TabsTrigger value="crown" className="flex items-center">
              <span className="mr-1.5">👑</span>
              Crown
            </TabsTrigger>
            <TabsTrigger value="sparkle" className="flex items-center">
              <ZapIcon size={14} className="mr-1.5" />
              Sparkle
            </TabsTrigger>
          </TabsList>
          
          <div className="relative w-full aspect-square bg-gradient-to-br from-gray-900 to-black rounded-lg mb-4 overflow-hidden">
            <div className="absolute inset-0 opacity-30 bg-grid-pattern"></div>
            
            <TabsContent value="glow" className="absolute inset-0 m-0 flex items-center justify-center">
              <div className="relative w-3/4 h-3/4">
                <div className="absolute inset-0 rounded-full bg-royal-gold/10 animate-pulse-slow"></div>
                <div className="absolute inset-0 -m-4 rounded-full bg-royal-gold/5 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute inset-0 -m-8 rounded-full bg-royal-gold/3 animate-pulse" style={{ animationDelay: '1s' }}></div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="royal-text text-2xl royal-gradient font-royal">Royal Glow</div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="crown" className="absolute inset-0 m-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                <div className="absolute top-0 left-0 w-full h-full">
                  <P5CrownEffect width={300} height={300} color="#D4AF37" animate={true} />
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="royal-text text-2xl royal-gradient font-royal mt-24">Royal Crown</div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="sparkle" className="absolute inset-0 m-0 flex items-center justify-center">
              <div className="relative w-3/4 h-3/4">
                {/* Generate randomly positioned sparkles */}
                {Array.from({ length: 20 }).map((_, i) => (
                  <div 
                    key={i}
                    className="absolute w-2 h-2 bg-royal-gold rounded-full animate-pulse-slow"
                    style={{ 
                      left: `${Math.random() * 100}%`, 
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 2}s`,
                      opacity: 0.6 + Math.random() * 0.4
                    }}
                  ></div>
                ))}
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="royal-text text-2xl royal-gradient font-royal">Royal Sparkle</div>
                </div>
              </div>
            </TabsContent>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="font-medium">Effect Name</div>
              <div className="text-royal-gold">
                {activeEffect === 'glow' && 'Royal Glow Aura'}
                {activeEffect === 'crown' && 'Royal Crown Effect'}
                {activeEffect === 'sparkle' && 'Royal Sparkle'}
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="font-medium">Effect Tier</div>
              <Badge className="bg-royal-gold/20 text-royal-gold border border-royal-gold/40">
                {activeEffect === 'glow' && 'Premium'}
                {activeEffect === 'crown' && 'Royal'}
                {activeEffect === 'sparkle' && 'Premium'}
              </Badge>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="font-medium">Duration</div>
              <div className="text-white/70">30 Days</div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="font-medium">Price</div>
              <div className="text-royal-gold font-bold">
                {activeEffect === 'glow' && '$25.00'}
                {activeEffect === 'crown' && '$50.00'}
                {activeEffect === 'sparkle' && '$20.00'}
              </div>
            </div>
            
            <Button className="w-full mt-4 bg-royal-gold text-black hover:bg-royal-gold/90">
              Apply This Effect
            </Button>
          </div>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default BoostEffectDemo;
