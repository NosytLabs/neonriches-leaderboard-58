import React from 'react';
import { UserProfile } from '@/types/user';
import { ScrollText } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface TitleItem {
  id: string;
  name: string;
  description: string;
  price: number;
  title: string;
  rarity: 'common' | 'rare' | 'legendary';
}

interface ProfileTitlesProps {
  onPurchase: (name: string, price: number, category: string, itemId: string) => Promise<void>;
  user: UserProfile | null;
  onSelectTitle: (titleId: string | null) => Promise<void>;
  activeTitle?: string | null;
}

const ProfileTitles: React.FC<ProfileTitlesProps> = ({ 
  onPurchase, 
  user, 
  onSelectTitle,
  activeTitle
}) => {
  const userTitles = user?.cosmetics?.titles || [];

  const titles: TitleItem[] = [
    {
      id: 'royal-patron',
      name: 'Royal Patron',
      description: 'A title for loyal supporters of the kingdom',
      price: 30,
      title: 'Royal Patron',
      rarity: 'common'
    },
    {
      id: 'noble-benefactor',
      name: 'Noble Benefactor',
      description: 'A title for those who contribute to the realm',
      price: 40,
      title: 'Noble Benefactor',
      rarity: 'rare'
    },
    {
      id: 'digital-aristocrat',
      name: 'Digital Aristocrat',
      description: 'A title for those of refined digital taste',
      price: 50,
      title: 'Digital Aristocrat',
      rarity: 'rare'
    },
    {
      id: 'crown-collector',
      name: 'Crown Collector',
      description: 'A title for those who amass digital wealth',
      price: 60,
      title: 'Crown Collector',
      rarity: 'legendary'
    },
    {
      id: 'grand-spender',
      name: 'Grand Spender',
      description: 'A title acknowledging financial contributions',
      price: 75,
      title: 'Grand Spender',
      rarity: 'legendary'
    },
    {
      id: 'founder',
      name: 'Founder',
      description: 'Reserved for those who were present at the beginning',
      price: 100,
      title: 'Founder',
      rarity: 'legendary'
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
      <h3 className="text-lg font-bold royal-gradient font-medieval">Royal Titles</h3>
      <p className="text-white/70">Adorn your profile with exclusive titles befitting nobility.</p>
      
      <div className="grid grid-cols-1 gap-4 mt-6">
        {titles.map((item) => {
          const isOwned = userTitles.includes(item.id);
          const isActive = activeTitle === item.id;
          
          return (
            <div key={item.id} className="glass-morphism border-white/10 rounded-lg p-4 transition-all duration-300 hover:border-royal-gold/30">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-royal-gold/10 mr-3">
                    <ScrollText className="h-5 w-5 text-royal-gold" />
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
                <span className="font-medieval text-lg text-royal-gold">
                  {item.title}
                </span>
              </div>
              
              <div className="flex flex-col space-y-2">
                <RoyalButton
                  variant={isOwned ? "outline" : "royalGold"}
                  size="sm"
                  className="w-full"
                  disabled={isOwned && !onSelectTitle}
                  onClick={() => isOwned && onSelectTitle ? 
                    onSelectTitle(item.id) : 
                    onPurchase(item.name, item.price, 'titles', item.id)}
                >
                  {isOwned ? 
                    (onSelectTitle ? (isActive ? 'Selected' : 'Select Title') : 'Already Owned') : 
                    `Purchase for $${item.price}`}
                </RoyalButton>
                
                {isOwned && onSelectTitle && isActive && (
                  <RoyalButton
                    variant="outline"
                    size="sm"
                    className="w-full border-royal-gold/30"
                    onClick={() => onSelectTitle(null)}
                  >
                    Remove Title
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

export default ProfileTitles;
