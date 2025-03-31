
import React from 'react';
import { UserProfile } from '@/types/user';
import { Type } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import RoyalButton from '@/components/ui/royal-button';

interface FontItem {
  id: string;
  name: string;
  description: string;
  price: number;
  fontFamily: string;
  sample: string;
  rarity: 'common' | 'rare' | 'legendary';
}

interface ProfileFontsProps {
  onPurchase: (name: string, price: number, category: string, itemId: string) => Promise<void>;
  user: UserProfile | null;
  onSelectFont?: (fontId: string | null) => Promise<void>;
  activeFont?: string | null;
}

const ProfileFonts: React.FC<ProfileFontsProps> = ({ 
  onPurchase, 
  user,
  onSelectFont,
  activeFont
}) => {
  // Fixed array check for userFonts
  const userFonts = user?.cosmetics?.font ? 
    (Array.isArray(user.cosmetics.font) ? user.cosmetics.font : []) : [];

  const fonts: FontItem[] = [
    {
      id: 'medieval',
      name: 'Medieval Script',
      description: 'An elegant font worthy of royal proclamations',
      price: 30,
      fontFamily: 'Cinzel, serif',
      sample: 'The Royal Court',
      rarity: 'common'
    },
    {
      id: 'royal-script',
      name: 'Royal Script',
      description: 'A flowing script used by the nobility',
      price: 30,
      fontFamily: 'Playfair Display, serif',
      sample: 'Noble Lineage',
      rarity: 'common'
    },
    {
      id: 'noble-sans',
      name: 'Noble Sans',
      description: 'A refined sans-serif font with royal proportions',
      price: 40,
      fontFamily: 'Spectral, serif',
      sample: 'Regal Presence',
      rarity: 'rare'
    },
    {
      id: 'courtly-display',
      name: 'Courtly Display',
      description: 'An ornate display font for prestigious titles',
      price: 50,
      fontFamily: 'Fredericka the Great, cursive',
      sample: 'Sovereign Ruler',
      rarity: 'legendary'
    },
    {
      id: 'royal-modern',
      name: 'Royal Modern',
      description: 'A contemporary font with classic royal styling',
      price: 40,
      fontFamily: 'Crimson Text, serif',
      sample: 'Modern Monarchy',
      rarity: 'rare'
    }
  ];
  
  const getRarityClass = (rarity: string) => {
    switch (rarity) {
      case 'common':
        return 'bg-gray-500/20 text-gray-300 border-gray-500/40';
      case 'rare':
        return 'bg-royal-navy/20 text-blue-300 border-royal-navy/40';
      case 'legendary':
        return 'bg-royal-gold/20 text-royal-gold border-royal-gold/40';
      default:
        return 'bg-gray-500/20 text-gray-300 border-gray-500/40';
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold royal-gradient font-medieval">Noble Fonts</h3>
      <p className="text-white/70">Express your status with exclusive typography for your profile.</p>
      
      <div className="grid grid-cols-1 gap-4 mt-6">
        {fonts.map((item) => {
          // Fixed check for owned items
          const isOwned = userFonts.some(font => font === item.id);
          const isActive = activeFont === item.id;
          
          return (
            <div key={item.id} className="glass-morphism border-white/10 rounded-lg p-4 transition-all duration-300 hover:border-royal-gold/30">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-royal-gold/10 mr-3">
                    <Type className="h-5 w-5 text-royal-gold" />
                  </div>
                  <div>
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="text-xs text-white/60">${item.price}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Badge className={getRarityClass(item.rarity)}>
                    {item.rarity.charAt(0).toUpperCase() + item.rarity.slice(1)}
                  </Badge>
                  {isOwned && isActive && (
                    <Badge variant="outline" className="ml-2 bg-royal-gold/20 border-royal-gold/40 text-royal-gold">
                      Active
                    </Badge>
                  )}
                </div>
              </div>
              
              <p className="text-sm text-white/70 mb-4">
                {item.description}
              </p>
              
              <div className="bg-black/30 rounded-lg p-6 mb-4 flex items-center justify-center">
                <span style={{ fontFamily: item.fontFamily, fontSize: '24px' }}>
                  {item.sample}
                </span>
              </div>
              
              <div className="flex flex-col space-y-2">
                <RoyalButton
                  variant={isOwned ? "outline" : "royalGold"}
                  size="sm"
                  className="w-full"
                  disabled={isOwned && !onSelectFont}
                  onClick={() => isOwned && onSelectFont ? 
                    onSelectFont(item.id) : 
                    onPurchase(item.name, item.price, 'font', item.id)}
                >
                  {isOwned ? 
                    (onSelectFont ? (isActive ? 'Selected' : 'Select Font') : 'Already Owned') : 
                    `Purchase for $${item.price}`}
                </RoyalButton>
                
                {isOwned && onSelectFont && isActive && (
                  <RoyalButton
                    variant="outline"
                    size="sm"
                    className="w-full border-royal-gold/30"
                    onClick={() => onSelectFont(null)}
                  >
                    Remove Font
                  </RoyalButton>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileFonts;
