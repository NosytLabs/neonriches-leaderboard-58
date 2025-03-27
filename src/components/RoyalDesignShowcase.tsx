
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MedievalIcon from '@/components/ui/medieval-icon';
import RoyalDivider from '@/components/ui/royal-divider';
import RoyalButton from '@/components/ui/royal-button';
import RoyalParchment from '@/components/ui/royal-parchment';
import RoyalDecoration from '@/components/ui/royal-decoration';
import { Crown, Scroll, Shield, Sword } from 'lucide-react';

const RoyalDesignShowcase = () => {
  return (
    <div className="py-8 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold royal-gradient mb-6 text-center">Royal Design System</h2>
      
      <Tabs defaultValue="icons" className="w-full mb-12">
        <TabsList className="w-full glass-morphism border-white/10 grid grid-cols-3 mb-6">
          <TabsTrigger value="icons" className="data-[state=active]:bg-white/10">
            <Crown className="mr-2 h-4 w-4" /> Icons
          </TabsTrigger>
          <TabsTrigger value="decorations" className="data-[state=active]:bg-white/10">
            <Shield className="mr-2 h-4 w-4" /> Decorations
          </TabsTrigger>
          <TabsTrigger value="components" className="data-[state=active]:bg-white/10">
            <Scroll className="mr-2 h-4 w-4" /> Components
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="icons" className="space-y-6">
          <Card className="glass-morphism border-royal-gold/20">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Crown className="mr-2 text-royal-gold" size={20} />
                Medieval Icons Collection
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {[
                  { name: 'crown', label: 'Crown' },
                  { name: 'scroll', label: 'Scroll' },
                  { name: 'seal', label: 'Seal' },
                  { name: 'coins', label: 'Coins' },
                  { name: 'sword', label: 'Sword' },
                  { name: 'parchment', label: 'Parchment' },
                  { name: 'treasure', label: 'Treasure' },
                  { name: 'chalice', label: 'Chalice' },
                  { name: 'key', label: 'Key' },
                  { name: 'shield', label: 'Shield' },
                  { name: 'quill', label: 'Quill' },
                  { name: 'torch', label: 'Torch' },
                ].map((icon) => (
                  <div key={icon.name} className="flex flex-col items-center">
                    <MedievalIcon 
                      name={icon.name as any} 
                      size="lg" 
                      animate 
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
                  { color: 'mahogany', label: 'Mahogany' },
                ].map((colorVariant) => (
                  <div key={colorVariant.color} className="flex flex-col items-center">
                    <MedievalIcon 
                      name="crown" 
                      color={colorVariant.color as any} 
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
                    <MedievalIcon 
                      name="crown" 
                      size={sizeVariant.size as any} 
                      color="gold" 
                    />
                    <p className="mt-1 text-xs text-white/70">{sizeVariant.label}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="decorations" className="space-y-6">
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
        </TabsContent>
        
        <TabsContent value="components" className="space-y-6">
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
                    <RoyalDivider variant="scroll" label="ANCIENT KNOWLEDGE" color="crimson" />
                    <RoyalDivider variant="quill" label="NOBLE WRITINGS" color="navy" />
                    <RoyalDivider variant="treasure" label="PRECIOUS CONTENT" color="gold" />
                    <RoyalDivider variant="ornate" label="DISTINGUISHED AREA" color="crimson" />
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
        </TabsContent>
      </Tabs>
      
      <div className="relative glass-morphism border-royal-gold/20 rounded-lg p-8 mb-8">
        <RoyalDecoration variant="corner-flourish" position="top-left" size="lg" color="gold" />
        <RoyalDecoration variant="corner-flourish" position="top-right" size="lg" color="gold" />
        <RoyalDecoration variant="corner-flourish" position="bottom-left" size="lg" color="gold" />
        <RoyalDecoration variant="corner-flourish" position="bottom-right" size="lg" color="gold" />
        
        <div className="text-center mx-auto max-w-2xl">
          <h3 className="text-2xl font-bold royal-gradient mb-2">Royal Design System</h3>
          <p className="text-white/70 mb-6">
            This collection of medieval-themed design elements can be used to enhance the royal aesthetic 
            of SpendThrone. Use these components throughout the application to create a consistent 
            and immersive experience.
          </p>
          
          <div className="flex justify-center">
            <RoyalButton 
              variant="royalGold" 
              size="lg" 
              className="royal-button-enhanced" 
              glow 
              icon={<Crown size={16} />}
            >
              Explore the Kingdom
            </RoyalButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoyalDesignShowcase;
