
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import MedievalIcon from '@/components/ui/medieval-icon';
import ParchmentTexture from '@/components/ui/parchment-texture';
import RoyalDivider from '@/components/ui/royal-divider';
import RoyalButton from '@/components/ui/royal-button';
import Icon from '@/components/Icon';

const MedievalShowcase = () => {
  return (
    <div className="py-8 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold royal-gradient mb-6 text-center">Royal Design Assets</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card className="glass-morphism border-royal-gold/20">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Icon icon="Crown" className="mr-2 text-royal-gold" size="sm" />
              Medieval Icons
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-6 justify-center">
              <div className="text-center">
                <MedievalIcon name="crown" size="lg" />
                <p className="mt-2 text-sm text-white/70">Crown</p>
              </div>
              <div className="text-center">
                <MedievalIcon name="scroll" size="lg" />
                <p className="mt-2 text-sm text-white/70">Scroll</p>
              </div>
              <div className="text-center">
                <MedievalIcon name="shield" size="lg" />
                <p className="mt-2 text-sm text-white/70">Seal</p>
              </div>
              <div className="text-center">
                <MedievalIcon name="coins" size="lg" />
                <p className="mt-2 text-sm text-white/70">Coin</p>
              </div>
            </div>
            
            <RoyalDivider variant="line" className="my-6" />
            
            <h3 className="text-lg font-semibold mb-3">Icon Colors</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <MedievalIcon name="crown" color="default" />
              <MedievalIcon name="crown" color="gold" />
              <MedievalIcon name="crown" color="silver" />
              <MedievalIcon name="crown" color="crimson" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="glass-morphism border-royal-gold/20">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Icon icon="Scroll" className="mr-2 text-royal-gold" size="sm" />
              Parchment & Textures
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              <ParchmentTexture className="p-4">
                <p className="text-black">Default parchment texture</p>
              </ParchmentTexture>
              
              <ParchmentTexture aged className="p-4">
                <p className="text-black">Aged parchment texture</p>
              </ParchmentTexture>
              
              <ParchmentTexture seal className="p-4">
                <p className="text-black">Parchment with royal seal</p>
              </ParchmentTexture>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card className="glass-morphism border-royal-gold/20 mb-12">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Icon icon="Coins" className="mr-2 text-royal-gold" size="sm" />
            Medieval Animations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center">
              <div className="animate-crown-glow">
                <Icon icon="Crown" size="lg" className="text-royal-gold" />
              </div>
              <p className="mt-2 text-sm text-white/70">Crown Glow</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="animate-quill-write">
                <Icon icon="Scroll" size="lg" className="text-royal-gold" />
              </div>
              <p className="mt-2 text-sm text-white/70">Quill Write</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="animate-coin-flip">
                <Icon icon="Coins" size="lg" className="text-royal-gold" />
              </div>
              <p className="mt-2 text-sm text-white/70">Coin Flip</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="animate-seal-stamp">
                <Icon icon="Shield" size="lg" className="text-royal-gold" />
              </div>
              <p className="mt-2 text-sm text-white/70">Seal Stamp</p>
            </div>
          </div>
          
          <RoyalDivider variant="crown" label="ANIMATED EFFECTS" color="gold" className="my-8" />
          
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="p-6 glass-morphism border border-royal-gold/30 royal-shine">
              <p className="royal-text-shimmer font-bold">Royal Shimmer Text</p>
            </div>
            
            <div className="p-6 medieval-border medieval-corner">
              <p>Medieval Border</p>
            </div>
            
            <div className="animate-parchment-unfurl delay-500">
              <RoyalButton variant="gold">
                Unfurling Effect
              </RoyalButton>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="text-center">
        <p className="text-white/70 mb-4">These medieval design assets can be used throughout the SpendThrone application to enhance the royal theme.</p>
        <RoyalButton 
          variant="royal" 
          size="lg" 
          className="royal-button-enhanced"
          icon={<Icon icon="Crown" size="sm" />}
        >
          Explore the Royal Kingdom
        </RoyalButton>
      </div>
    </div>
  );
};

export default MedievalShowcase;
