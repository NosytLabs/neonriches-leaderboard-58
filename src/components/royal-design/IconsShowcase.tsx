
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import RoyalDivider from '@/components/ui/royal-divider';
import { Icon } from '@/components/ui/icon';
import MedievalIcon from '@/components/ui/medieval-icon';

const IconsShowcase: React.FC = () => {
  return (
    <Card className="glass-morphism border-royal-gold/20">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Icon name="Crown" className="mr-2 text-royal-gold" size="sm" />
          Medieval Icons Collection
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[
            { name: 'Crown', label: 'Crown' },
            { name: 'Scroll', label: 'Scroll' },
            { name: 'Shield', label: 'Shield' },
            { name: 'Coins', label: 'Coins' },
            { name: 'Sword', label: 'Sword' },
            { name: 'Trophy', label: 'Trophy' },
            { name: 'Medal', label: 'Medal' },
            { name: 'Key', label: 'Key' },
            { name: 'castle', label: 'Castle' },
            { name: 'Heart', label: 'Heart' },
            { name: 'star', label: 'Star' },
            { name: 'Gem', label: 'Gem' },
          ].map((icon) => (
            <div key={icon.name} className="flex flex-col items-center">
              <Icon 
                name={icon.name}
                size="lg" 
                className="text-royal-gold" 
              />
              <p className="mt-2 text-sm text-white/70">{icon.label}</p>
            </div>
          ))}
        </div>
        
        <RoyalDivider variant="line" className="my-6" />
        
        <h3 className="text-lg font-semibold mb-3">Icon Colors</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {[
            { color: 'default', label: 'Default' },
            { color: 'gold', label: 'Gold' },
            { color: 'crimson', label: 'Crimson' },
            { color: 'navy', label: 'Navy' },
            { color: 'bronze', label: 'Bronze' },
            { color: 'silver', label: 'Silver' },
            { color: 'royal', label: 'Royal' },
          ].map((colorVariant) => (
            <div key={colorVariant.label} className="flex flex-col items-center">
              <Icon 
                name="Crown" 
                color={colorVariant.color}
                size="md" 
              />
              <p className="mt-1 text-xs text-white/70">{colorVariant.label}</p>
            </div>
          ))}
        </div>
        
        <RoyalDivider variant="line" className="my-6" />
        
        <h3 className="text-lg font-semibold mb-3">Icon Sizes</h3>
        <div className="flex items-end justify-center gap-4">
          {[
            { size: 'xs', label: 'XS' },
            { size: 'sm', label: 'SM' },
            { size: 'md', label: 'MD' },
            { size: 'lg', label: 'LG' },
            { size: 'xl', label: 'XL' },
            { size: '2xl', label: '2XL' },
          ].map((sizeVariant) => (
            <div key={sizeVariant.size} className="flex flex-col items-center">
              <Icon 
                name="Crown" 
                size={sizeVariant.size as any} 
                className="text-royal-gold" 
              />
              <p className="mt-1 text-xs text-white/70">{sizeVariant.label}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default IconsShowcase;
