
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import RoyalButton from '@/components/ui/royal-button';
import RoyalDivider from '@/components/ui/royal-divider';
import RoyalParchment from '@/components/ui/royal-parchment';
import { Scroll, Crown, Sword, Shield } from 'lucide-react';

const ComponentsShowcase: React.FC = () => {
  return (
    <Card className="glass-morphism border-royal-gold/20">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Scroll className="mr-2 text-royal-gold" size={20} />
          Royal UI Components
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Royal Buttons</h3>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <RoyalButton variant="royal" icon={<Crown size={14} />}>Royal</RoyalButton>
                <RoyalButton variant="royalGold" icon={<Crown size={14} />}>Gold</RoyalButton>
                <RoyalButton variant="royalCrimson" icon={<Sword size={14} />}>Crimson</RoyalButton>
                <RoyalButton variant="royalNavy" icon={<Shield size={14} />}>Navy</RoyalButton>
              </div>
              <div className="flex flex-wrap gap-2">
                <RoyalButton variant="glass" icon={<Crown size={14} />}>Glass</RoyalButton>
                <RoyalButton variant="outline" icon={<Crown size={14} />}>Outline</RoyalButton>
                <RoyalButton variant="mahogany" icon={<Crown size={14} />}>Mahogany</RoyalButton>
              </div>
              <div className="flex flex-wrap gap-2">
                <RoyalButton variant="royal" glow icon={<Crown size={14} />}>Glow</RoyalButton>
                <RoyalButton variant="royalGold" shimmer icon={<Crown size={14} />}>Shimmer</RoyalButton>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Royal Dividers</h3>
            <div className="space-y-6">
              <RoyalDivider variant="crown" label="ROYAL SECTION" color="gold" />
              <RoyalDivider variant="ornate" label="ANCIENT KNOWLEDGE" color="crimson" />
              <RoyalDivider variant="line" label="NOBLE WRITINGS" color="royal" />
              <RoyalDivider variant="crown" label="PRECIOUS CONTENT" color="gold" />
              <RoyalDivider variant="ornate" label="DISTINGUISHED AREA" color="purple" />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Royal Parchment Variants</h3>
            <div className="space-y-4">
              <RoyalParchment variant="default" className="p-4">
                <p className="text-sm">Default parchment</p>
              </RoyalParchment>
              <RoyalParchment variant="gold" className="p-4">
                <p className="text-sm">Gold parchment</p>
              </RoyalParchment>
              <RoyalParchment variant="crimson" className="p-4">
                <p className="text-sm">Crimson parchment</p>
              </RoyalParchment>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Royal Parchment Features</h3>
            <div className="space-y-4">
              <RoyalParchment variant="default" waxSeal className="p-4">
                <p className="text-sm">With wax seal</p>
              </RoyalParchment>
              <RoyalParchment variant="gold" ribbons className="p-4">
                <p className="text-sm">With ribbons</p>
              </RoyalParchment>
              <RoyalParchment variant="navy" ornate className="p-4">
                <p className="text-sm">With ornate border</p>
              </RoyalParchment>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ComponentsShowcase;
