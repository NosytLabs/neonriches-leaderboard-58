
import React from 'react';
import RoyalButton from '@/components/ui/royal-button';
import RoyalDecoration from '@/components/ui/royal-decoration';
import { Crown } from 'lucide-react';

const ShowcaseFooter: React.FC = () => {
  return (
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
  );
};

export default ShowcaseFooter;
