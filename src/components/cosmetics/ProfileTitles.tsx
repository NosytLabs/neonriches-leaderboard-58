import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UserProfile } from '@/types/user';
import { Badge } from '@/components/ui/badge';
import { Check, DollarSign, Lock } from 'lucide-react';
import RoyalButton from '@/components/cosmetics/RoyalButton';

// Title data structure
const titles = [
  { 
    id: 'newcomer', 
    name: 'Newcomer', 
    description: 'Awarded to all new users', 
    price: 0, 
    rarity: 'common',
    unlockCondition: 'Join SpendThrone'
  },
  { 
    id: 'bronze-spender', 
    name: 'Bronze Spender', 
    description: 'Reach Bronze tier by spending $10', 
    price: 0, 
    rarity: 'common',
    unlockCondition: 'Reach Bronze tier'
  },
  { 
    id: 'silver-spender', 
    name: 'Silver Spender', 
    description: 'Reach Silver tier by spending $50', 
    price: 0, 
    rarity: 'uncommon',
    unlockCondition: 'Reach Silver tier'
  },
  { 
    id: 'gold-spender', 
    name: 'Gold Spender', 
    description: 'Reach Gold tier by spending $200', 
    price: 0, 
    rarity: 'rare',
    unlockCondition: 'Reach Gold tier'
  },
  { 
    id: 'royal-spender', 
    name: 'Royal Spender', 
    description: 'Reach Royal tier by spending $1000', 
    price: 0, 
    rarity: 'legendary',
    unlockCondition: 'Reach Royal tier'
  },
  { 
    id: 'the-generous', 
    name: 'The Generous', 
    description: 'A title for the true philanthropists', 
    price: 5, 
    rarity: 'uncommon',
    unlockCondition: 'Purchase'
  },
  { 
    id: 'moneybags', 
    name: 'Moneybags', 
    description: 'Show off your wealth', 
    price: 10, 
    rarity: 'rare',
    unlockCondition: 'Purchase'
  },
  { 
    id: 'the-noble', 
    name: 'The Noble', 
    description: 'A title of nobility and grace', 
    price: 15, 
    rarity: 'rare',
    unlockCondition: 'Purchase'
  },
  { 
    id: 'lord-of-spending', 
    name: 'Lord of Spending', 
    description: 'Rule over the realm of expenditure', 
    price: 25, 
    rarity: 'epic',
    unlockCondition: 'Purchase'
  },
  { 
    id: 'the-magnificent', 
    name: 'The Magnificent', 
    description: 'A truly magnificent title', 
    price: 50, 
    rarity: 'legendary',
    unlockCondition: 'Purchase'
  },
  { 
    id: 'founder', 
    name: 'Founder', 
    description: 'An exclusive title for founding members', 
    price: 0, 
    rarity: 'legendary',
    unlockCondition: 'Purchase Founder\'s Pass'
  }
];

const getRarityClass = (rarity: string) => {
  switch (rarity) {
    case 'legendary': return 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10';
    case 'epic': return 'text-purple-400 border-purple-400/30 bg-purple-400/10';
    case 'rare': return 'text-blue-400 border-blue-400/30 bg-blue-400/10';
    case 'uncommon': return 'text-green-400 border-green-400/30 bg-green-400/10';
    default: return 'text-gray-400 border-gray-400/30 bg-gray-400/10';
  }
};

interface ProfileTitlesProps {
  user: UserProfile | null;
  onPurchase: (itemName: string, price: number, category: string, itemId: string) => Promise<void>;
  onSelectTitle?: (titleId: string | null) => Promise<void>;
  activeTitle?: string | null;
}

const ProfileTitles: React.FC<ProfileTitlesProps> = ({ 
  user, 
  onPurchase, 
  onSelectTitle,
  activeTitle 
}) => {
  const userTitles = user?.cosmetics?.titles || [];
  
  const handlePurchase = (title: typeof titles[0]) => {
    onPurchase(title.name, title.price, 'titles', title.id);
  };
  
  const handleSelectTitle = (titleId: string) => {
    if (onSelectTitle) {
      onSelectTitle(titleId === activeTitle ? null : titleId);
    }
  };
  
  return (
    <div className="space-y-4">
      {titles.map((title) => {
        const isOwned = userTitles.includes(title.id);
        const isActive = activeTitle === title.id;
        
        return (
          <Card 
            key={title.id} 
            className={`glass-morphism border-white/10 transition-all ${isActive ? 'border-yellow-400/50 shadow-glow-gold' : ''}`}
          >
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium">{title.name}</h3>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${getRarityClass(title.rarity)}`}
                    >
                      {title.rarity}
                    </Badge>
                    {isActive && (
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/20">
                        <Check size={12} className="mr-1" /> Active
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-white/60 mt-1">{title.description}</p>
                  <p className="text-xs text-white/40 mt-2">
                    {title.unlockCondition === 'Purchase' 
                      ? `Price: $${title.price.toFixed(2)}` 
                      : `Unlock: ${title.unlockCondition}`}
                  </p>
                </div>
                <div className="flex gap-2">
                  {isOwned ? (
                    <RoyalButton
                      variant={isActive ? "gold" : "default"}
                      size="sm"
                      onClick={() => handleSelectTitle(title.id)}
                      glow={isActive}
                    >
                      {isActive ? 'Remove' : 'Select'}
                    </RoyalButton>
                  ) : (
                    title.price > 0 ? (
                      <RoyalButton
                        variant="default"
                        size="sm"
                        onClick={() => handlePurchase(title)}
                      >
                        <DollarSign size={14} className="mr-1" />
                        Purchase
                      </RoyalButton>
                    ) : (
                      <RoyalButton
                        variant="default"
                        size="sm"
                        disabled
                      >
                        <Lock size={14} className="mr-1" />
                        Locked
                      </RoyalButton>
                    )
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default ProfileTitles;
