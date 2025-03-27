
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import RoyalDivider from '@/components/ui/royal-divider';
import RoyalDecoration from '@/components/ui/royal-decoration';
import { Shield } from 'lucide-react';

const DecorationsShowcase: React.FC = () => {
  return (
    <Card className="glass-morphism border-royal-gold/20">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Shield className="mr-2 text-royal-gold" size={20} />
          Royal Decorative Elements
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { variant: 'corner-flourish', label: 'Corner Flourish' },
            { variant: 'border-pattern', label: 'Border Pattern' },
            { variant: 'royal-banner', label: 'Royal Banner' },
            { variant: 'coat-of-arms', label: 'Coat of Arms' },
            { variant: 'crossed-swords', label: 'Crossed Swords' },
            { variant: 'royal-insignia', label: 'Royal Insignia' },
          ].map((decoration) => (
            <div key={decoration.variant} className="relative h-32 glass-morphism border border-white/10 rounded-lg flex flex-col items-center justify-center group overflow-hidden">
              <RoyalDecoration 
                variant={decoration.variant as any} 
                color="gold" 
                size="md"
                position="top-right"
                animate
              />
              <p className="mt-8 text-sm text-white/70">{decoration.label}</p>
              
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-black/40 flex items-center justify-center transition-opacity duration-300">
                <div className="text-xs text-white/90 text-center">
                  <code>{`<RoyalDecoration variant="${decoration.variant}" />`}</code>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <RoyalDivider variant="line" className="my-6" />
        
        <h3 className="text-lg font-semibold mb-3">Decoration Colors</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { color: 'gold', label: 'Gold' },
            { color: 'crimson', label: 'Crimson' },
            { color: 'navy', label: 'Navy' },
            { color: 'bronze', label: 'Bronze' },
            { color: 'silver', label: 'Silver' },
            { color: 'default', label: 'Default' },
          ].map((colorVariant) => (
            <div key={colorVariant.color} className="relative h-20 glass-morphism border border-white/10 rounded-lg flex flex-col items-center justify-center">
              <RoyalDecoration 
                variant="royal-insignia" 
                color={colorVariant.color as any} 
                size="sm" 
                position="top-center"
              />
              <p className="mt-8 text-xs text-white/70">{colorVariant.label}</p>
            </div>
          ))}
        </div>
        
        <RoyalDivider variant="line" className="my-6" />
        
        <h3 className="text-lg font-semibold mb-3">CSS Decorations</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="medieval-border medieval-corner p-4 text-center">
            <p className="text-sm">medieval-border medieval-corner</p>
          </div>
          <div className="royal-frame p-4 text-center">
            <p className="text-sm">royal-frame</p>
          </div>
          <div className="royal-corner-ornament p-4 text-center">
            <p className="text-sm">royal-corner-ornament</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DecorationsShowcase;
