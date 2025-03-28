
import React from 'react';
import { UserProfile } from '@/contexts/AuthContext';
import { Type } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import RoyalButton from '@/components/ui/royal-button';
import { getDiscountedPrice } from '@/services/cosmeticService';

interface FontItem {
  id: string;
  name: string;
  description: string;
  price: number;
  fontFamily: string;
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
}

interface ProfileFontsProps {
  onPurchase: (name: string, price: number, category: string, itemId: string) => Promise<void>;
  user: UserProfile | null;
}

const ProfileFonts: React.FC<ProfileFontsProps> = ({ onPurchase, user }) => {
  const userFonts = user?.cosmetics?.fonts || [];

  const fonts: FontItem[] = [
    {
      id: 'scribe-font',
      name: 'Scribe Script',
      description: 'The simple handwriting of a medieval scribe',
      price: 0.75,
      fontFamily: "'Times New Roman', serif",
      rarity: 'common'
    },
    {
      id: 'monastic-font',
      name: 'Monastic Text',
      description: 'The careful lettering of monastery manuscripts',
      price: 1.25,
      fontFamily: "'Georgia', serif",
      rarity: 'common'
    },
    {
      id: 'gothic-font',
      name: 'Gothic Script',
      description: 'Bold, angular medieval lettering',
      price: 2.50,
      fontFamily: "'Copperplate Gothic', 'Copperplate', serif",
      rarity: 'uncommon'
    },
    {
      id: 'chancellery-font',
      name: 'Chancellery Script',
      description: 'The elegant handwriting of royal courts',
      price: 3.75,
      fontFamily: "'Snell Roundhand', 'Brush Script MT', cursive",
      rarity: 'rare'
    },
    {
      id: 'illuminated-font',
      name: 'Illuminated Manuscript',
      description: 'Ornate text from decorated manuscripts',
      price: 5.00,
      fontFamily: "'Luminari', 'Fantasy', fantasy",
      rarity: 'epic'
    },
    {
      id: 'royal-decree-font',
      name: 'Royal Decree',
      description: 'The official font of royal proclamations',
      price: 8.50,
      fontFamily: "'Trajan Pro', 'Cinzel', serif",
      rarity: 'legendary'
    },
    {
      id: 'runic-font',
      name: 'Ancient Runes',
      description: 'Mysterious runic characters of forgotten kingdoms',
      price: 10.00,
      fontFamily: "'Runic', 'Old English Text MT', fantasy",
      rarity: 'legendary'
    }
  ];

  const getRarityClass = (rarity: string) => {
    switch (rarity) {
      case 'common':
        return 'bg-gray-500/20 text-gray-300 border-gray-500/40';
      case 'uncommon':
        return 'bg-green-500/20 text-green-400 border-green-500/40';
      case 'rare':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/40';
      case 'epic':
        return 'bg-purple-400/20 text-purple-400 border-purple-400/40';
      case 'legendary':
        return 'bg-royal-gold/20 text-royal-gold border-royal-gold/40';
      default:
        return 'bg-gray-500/20 text-gray-300 border-gray-500/40';
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold royal-gradient font-medieval">Royal Typography</h3>
      <p className="text-white/70">Display your status with prestigious fonts for your profile.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {fonts.map((item) => {
          const isOwned = userFonts.includes(item.id);
          const discountedPrice = user ? getDiscountedPrice(item.price, user.amountSpent) : item.price;
          
          return (
            <div key={item.id} className="glass-morphism border-white/10 rounded-lg p-4 transition-all duration-300 hover:border-royal-gold/30">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3 bg-white/10 border border-white/20">
                    <Type className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="text-xs text-white/60">${discountedPrice.toFixed(2)}</p>
                  </div>
                </div>
                {isOwned && (
                  <Badge variant="outline" className="bg-royal-gold/20 border-royal-gold/40 text-royal-gold">
                    Owned
                  </Badge>
                )}
                <Badge className={getRarityClass(item.rarity)}>
                  {item.rarity.charAt(0).toUpperCase() + item.rarity.slice(1)}
                </Badge>
              </div>
              
              <p className="text-sm text-white/70 mb-4">
                {item.description}
              </p>
              
              <div className="bg-black/30 rounded-lg p-3 mb-4 flex flex-col items-center justify-center">
                <p className="text-sm mb-2">Font Preview:</p>
                <span style={{ fontFamily: item.fontFamily }} className="text-xl text-white">
                  {user?.username || 'Your Royal Name'}
                </span>
              </div>
              
              <RoyalButton
                variant={isOwned ? "outline" : "royalGold"}
                size="sm"
                className="w-full"
                disabled={isOwned}
                onClick={() => onPurchase(item.name, discountedPrice, 'fonts', item.id)}
              >
                {isOwned ? 'Already Owned' : `Purchase for $${discountedPrice.toFixed(2)}`}
              </RoyalButton>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileFonts;
