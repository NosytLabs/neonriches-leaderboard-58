import React from 'react';
import { UserProfile } from '@/types/user';
import { Award } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import RoyalButton from '@/components/ui/royal-button';

interface BorderItem {
  id: string;
  name: string;
  description: string;
  price: number;
  previewImageUrl: string;
  cssClass: string;
  rarity: 'common' | 'rare' | 'legendary';
}

interface ProfileDecorationsProps {
  onPurchase: (name: string, price: number, category: string, itemId: string) => Promise<void>;
  user: UserProfile | null;
  onSelectBorder: (borderId: string | null) => Promise<void>;
  activeBorder?: string | null;
}

const ProfileDecorations: React.FC<ProfileDecorationsProps> = ({ 
  onPurchase, 
  user, 
  onSelectBorder,
  activeBorder 
}) => {
  const userBorders = user?.cosmetics?.borders || [];

  const getRarityClass = (rarity: string) => {
    switch (rarity) {
      case 'common':
        return 'bg-gray-500/20 text-gray-300 border-gray-500/40';
      case 'rare':
        return 'bg-royal-blue/20 text-royal-blue border-royal-blue/40';
      case 'legendary':
        return 'bg-royal-gold/20 text-royal-gold border-royal-gold/40';
      default:
        return 'bg-gray-500/20 text-gray-300 border-gray-500/40';
    }
  };

  const borders: BorderItem[] = [
    {
      id: 'gold-border',
      name: 'Golden Frame',
      description: 'A luxurious golden frame for your profile',
      price: 30,
      previewImageUrl: '/images/decorations/gold-border.png',
      cssClass: 'border-gold',
      rarity: 'common'
    },
    {
      id: 'silver-border',
      name: 'Silver Lining',
      description: 'A sleek silver border to highlight your profile',
      price: 30,
      previewImageUrl: '/images/decorations/silver-border.png',
      cssClass: 'border-silver',
      rarity: 'common'
    },
    {
      id: 'royal-crest',
      name: 'Royal Crest',
      description: 'A prestigious crest for true nobles',
      price: 40,
      previewImageUrl: '/images/decorations/royal-crest.png',
      cssClass: 'border-royal',
      rarity: 'rare'
    },
    {
      id: 'ancient-scroll',
      name: 'Ancient Scroll',
      description: 'An ancient scroll border for the wise and learned',
      price: 50,
      previewImageUrl: '/images/decorations/ancient-scroll.png',
      cssClass: 'border-scroll',
      rarity: 'legendary'
    },
    {
      id: 'gothic-frame',
      name: 'Gothic Frame',
      description: 'An ornate gothic frame for a touch of darkness',
      price: 40,
      previewImageUrl: '/images/decorations/gothic-frame.png',
      cssClass: 'border-gothic',
      rarity: 'rare'
    }
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold royal-gradient font-medieval">Profile Borders</h3>
      <p className="text-white/70">Adorn your profile with exclusive borders to showcase your status.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {borders.map((item) => {
          const isOwned = userBorders.includes(item.id);
          const isActive = activeBorder === item.id;
          
          return (
            <div key={item.id} className="glass-morphism border-white/10 rounded-lg p-4 transition-all duration-300 hover:border-royal-gold/30">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-royal-gold/10 mr-3">
                    <Award className="h-5 w-5 text-royal-gold" />
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
              
              <div className="bg-black/30 rounded-lg p-2 mb-4 flex items-center justify-center">
                <img 
                  src={item.previewImageUrl} 
                  alt={item.name} 
                  className="w-full h-20 object-contain" 
                />
              </div>
              
              <div className="flex flex-col space-y-2">
                <RoyalButton
                  variant={isOwned ? "outline" : "royalGold"}
                  size="sm"
                  className="w-full"
                  disabled={isOwned && !onSelectBorder}
                  onClick={() => isOwned && onSelectBorder ? 
                    onSelectBorder(item.id) : 
                    onPurchase(item.name, item.price, 'borders', item.id)}
                >
                  {isOwned ? 
                    (onSelectBorder ? (isActive ? 'Selected' : 'Select Border') : 'Already Owned') : 
                    `Purchase for $${item.price}`}
                </RoyalButton>
                
                {isOwned && onSelectBorder && isActive && (
                  <RoyalButton
                    variant="outline"
                    size="sm"
                    className="w-full border-royal-gold/30"
                    onClick={() => onSelectBorder(null)}
                  >
                    Remove Border
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

export default ProfileDecorations;
