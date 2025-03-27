
import React from 'react';
import { UserProfile } from '@/contexts/AuthContext';
import { Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import RoyalButton from '@/components/ui/royal-button';

interface EmojiItem {
  id: string;
  name: string;
  description: string;
  price: number;
  emoji: string;
  rarity: 'common' | 'rare' | 'legendary';
}

interface ProfileEmojisProps {
  onPurchase: (name: string, price: number, category: string, itemId: string) => Promise<void>;
  user: UserProfile | null;
}

const ProfileEmojis: React.FC<ProfileEmojisProps> = ({ onPurchase, user }) => {
  const userEmojis = user?.cosmetics?.emojis || [];

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

  const emojis: EmojiItem[] = [
    {
      id: 'crown-emoji',
      name: 'Crown Emoji',
      description: 'A regal crown to display your status',
      price: 20,
      emoji: '👑',
      rarity: 'common'
    },
    {
      id: 'gem-emoji',
      name: 'Gem Emoji',
      description: 'A sparkling gem to show your wealth',
      price: 20,
      emoji: '💎',
      rarity: 'common'
    },
    {
      id: 'money-bag-emoji',
      name: 'Money Bag Emoji',
      description: 'A bag of gold to flaunt your riches',
      price: 20,
      emoji: '💰',
      rarity: 'common'
    },
    {
      id: 'trophy-emoji',
      name: 'Trophy Emoji',
      description: 'A golden trophy for the winners',
      price: 30,
      emoji: '🏆',
      rarity: 'rare'
    },
    {
      id: 'star-emoji',
      name: 'Star Emoji',
      description: 'A shining star for the elite',
      price: 30,
      emoji: '⭐',
      rarity: 'rare'
    },
    {
      id: 'sparkle-emoji',
      name: 'Sparkle Emoji',
      description: 'Add some sparkle to your presence',
      price: 30,
      emoji: '✨',
      rarity: 'rare'
    },
    {
      id: 'unicorn-emoji',
      name: 'Royal Unicorn Emoji',
      description: 'A mythical symbol of prestige',
      price: 50,
      emoji: '🦄',
      rarity: 'legendary'
    },
    {
      id: 'dragon-emoji',
      name: 'Dragon Emoji',
      description: 'A powerful symbol of strength and wealth',
      price: 50,
      emoji: '🐉',
      rarity: 'legendary'
    },
    {
      id: 'castle-emoji',
      name: 'Castle Emoji',
      description: 'Your very own digital castle',
      price: 50,
      emoji: '🏰',
      rarity: 'legendary'
    }
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold royal-gradient font-medieval">Exclusive Emojis</h3>
      <p className="text-white/70">Express yourself with premium emojis only available to paying nobles.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {emojis.map((item) => {
          const isOwned = userEmojis.includes(item.id);
          
          return (
            <div key={item.id} className="glass-morphism border-white/10 rounded-lg p-4 transition-all duration-300 hover:border-royal-gold/30">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-royal-gold/10 mr-3">
                    <Sparkles className="h-5 w-5 text-royal-gold" />
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
              
              <div className="bg-black/30 rounded-lg p-6 mb-4 flex items-center justify-center">
                <span className="text-4xl">{item.emoji}</span>
              </div>
              
              {isOwned ? (
                <Badge variant="outline" className="w-full bg-royal-gold/20 border-royal-gold/40 text-royal-gold py-2 flex justify-center">
                  Already Owned
                </Badge>
              ) : (
                <RoyalButton
                  variant="royalGold"
                  size="sm"
                  className="w-full"
                  onClick={() => onPurchase(item.name, item.price, 'emojis', item.id)}
                >
                  Purchase for ${item.price}
                </RoyalButton>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileEmojis;
