import React from 'react';
import { UserProfile } from '@/types/user';
import { Palette } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import RoyalButton from '@/components/ui/royal-button';

interface ColorItem {
  id: string;
  name: string;
  description: string;
  price: number;
  previewColors: string[];
  rarity: 'common' | 'rare' | 'legendary';
}

interface ProfileColorsProps {
  onPurchase: (name: string, price: number, category: string, itemId: string) => Promise<void>;
  user: UserProfile | null;
  onSelectColor: (colorId: string | null) => Promise<void>;
  activeColor?: string | null;
}

const ProfileColors: React.FC<ProfileColorsProps> = ({ 
  onPurchase, 
  user, 
  onSelectColor,
  activeColor 
}) => {
  const userColors = user?.cosmetics?.colors || [];

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

  const colors: ColorItem[] = [
    {
      id: 'crimson-theme',
      name: 'Crimson Theme',
      description: 'A bold theme with deep red accents',
      price: 30,
      previewColors: ['#370617', '#9D0208', '#F2B880'],
      rarity: 'common'
    },
    {
      id: 'navy-theme',
      name: 'Navy Theme',
      description: 'A classic theme with deep blue hues',
      price: 30,
      previewColors: ['#03045E', '#0077B6', '#90E0EF'],
      rarity: 'common'
    },
    {
      id: 'emerald-theme',
      name: 'Emerald Theme',
      description: 'A vibrant theme with lush green tones',
      price: 40,
      previewColors: ['#1B4332', '#3D8361', '#A7D1AB'],
      rarity: 'rare'
    },
    {
      id: 'gold-theme',
      name: 'Golden Theme',
      description: 'A luxurious theme with rich gold accents',
      price: 50,
      previewColors: ['#795500', '#FFC857', '#FFF8E1'],
      rarity: 'legendary'
    },
    {
      id: 'purple-theme',
      name: 'Amethyst Theme',
      description: 'A mystical theme with deep purple shades',
      price: 40,
      previewColors: ['#4C1D95', '#6D28D9', '#EDE9FE'],
      rarity: 'rare'
    }
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold royal-gradient font-medieval">Noble Colors</h3>
      <p className="text-white/70">Express your status with exclusive color schemes for your profile.</p>
      
      <div className="grid grid-cols-1 gap-4 mt-6">
        {colors.map((item) => {
          const isOwned = userColors.includes(item.id);
          const isActive = activeColor === item.id;
          
          return (
            <div key={item.id} className="glass-morphism border-white/10 rounded-lg p-4 transition-all duration-300 hover:border-royal-gold/30">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-royal-gold/10 mr-3">
                    <Palette className="h-5 w-5 text-royal-gold" />
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
              
              <div className="flex space-x-2 mb-4">
                {item.previewColors.map((color, index) => (
                  <div 
                    key={index} 
                    className="w-8 h-8 rounded-full" 
                    style={{ backgroundColor: color }} 
                  />
                ))}
              </div>
              
              <RoyalButton
                variant={isOwned ? "outline" : "royalGold"}
                size="sm"
                className="w-full"
                disabled={isOwned && !onSelectColor}
                onClick={() => isOwned && onSelectColor ? onSelectColor(item.id) : onPurchase(item.name, item.price, 'colors', item.id)}
              >
                {isOwned ? (onSelectColor ? (isActive ? 'Selected' : 'Select Color') : 'Already Owned') : `Purchase for $${item.price}`}
              </RoyalButton>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileColors;
