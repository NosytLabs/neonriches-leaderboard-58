
import React from 'react';
import { UserProfile } from '@/contexts/AuthContext';
import { Crown, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import RoyalButton from '@/components/ui/royal-button';

interface DecorationItem {
  id: string;
  name: string;
  description: string;
  price: number;
  preview: string;
  rarity: 'common' | 'rare' | 'legendary';
}

interface ProfileDecorationsProps {
  onPurchase: (name: string, price: number, category: string, itemId: string) => Promise<void>;
  user: UserProfile | null;
}

const ProfileDecorations: React.FC<ProfileDecorationsProps> = ({ onPurchase, user }) => {
  const userDecorations = user?.cosmetics?.borders || [];

  const decorations: DecorationItem[] = [
    {
      id: 'gold-border',
      name: 'Royal Gold Border',
      description: 'A shimmering gold border for your profile',
      price: 25,
      preview: 'linear-gradient(to right, #FFD700, #FFC107)',
      rarity: 'common'
    },
    {
      id: 'purple-aura',
      name: 'Purple Aura',
      description: 'A mysterious purple aura that pulses around your profile',
      price: 35,
      preview: 'linear-gradient(to right, #7E69AB, #9B59B6)',
      rarity: 'rare'
    },
    {
      id: 'royal-frame',
      name: 'Royal Frame',
      description: 'An ornate frame with royal embellishments',
      price: 50,
      preview: 'linear-gradient(to right, #D4AF37, #FFC107)',
      rarity: 'rare'
    },
    {
      id: 'animated-sparkles',
      name: 'Animated Sparkles',
      description: 'Twinkling sparkles that animate around your profile',
      price: 75,
      preview: 'linear-gradient(to right, #FFEB3B, #FFF59D)',
      rarity: 'legendary'
    },
    {
      id: 'royal-crown',
      name: 'Royal Crown Badge',
      description: 'A prestigious crown badge for your profile header',
      price: 100,
      preview: 'linear-gradient(to right, #FFD700, #FFA000)',
      rarity: 'legendary'
    },
    {
      id: 'purple-flames',
      name: 'Purple Flames',
      description: 'Ethereal purple flames that dance around your profile',
      price: 85,
      preview: 'linear-gradient(to right, #6D28D9, #8B5CF6)',
      rarity: 'legendary'
    }
  ];

  const getRarityClass = (rarity: string) => {
    switch (rarity) {
      case 'common':
        return 'bg-gray-500/20 text-gray-300 border-gray-500/40';
      case 'rare':
        return 'bg-purple-400/20 text-purple-400 border-purple-400/40';
      case 'legendary':
        return 'bg-purple-600/20 text-purple-500 border-purple-600/40';
      default:
        return 'bg-gray-500/20 text-gray-300 border-gray-500/40';
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold royal-gradient font-medieval">Profile Decorations</h3>
      <p className="text-white/70">Enhance your profile with exclusive decorations to stand out.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {decorations.map((item) => {
          const isOwned = userDecorations.includes(item.id);
          
          return (
            <div key={item.id} className="glass-morphism border-white/10 rounded-lg p-4 transition-all duration-300 hover:border-purple-400/30">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3" 
                       style={{ background: item.preview }}>
                    <Crown className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="text-xs text-white/60">${item.price}</p>
                  </div>
                </div>
                <Badge className={getRarityClass(item.rarity)}>
                  {item.rarity.charAt(0).toUpperCase() + item.rarity.slice(1)}
                </Badge>
              </div>
              
              <p className="text-sm text-white/70 mb-4">
                {item.description}
              </p>
              
              <div className="h-16 rounded-lg mb-4 flex items-center justify-center" 
                   style={{ background: item.preview, position: 'relative' }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Sparkles className="h-8 w-8 text-white animate-pulse" />
                </div>
              </div>
              
              <RoyalButton
                variant={isOwned ? "outline" : "royalGold"}
                size="sm"
                className="w-full"
                disabled={isOwned}
                onClick={() => onPurchase(item.name, item.price, 'borders', item.id)}
              >
                {isOwned ? 'Already Owned' : `Purchase for $${item.price}`}
              </RoyalButton>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileDecorations;
