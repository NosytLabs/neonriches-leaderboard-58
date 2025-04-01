
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Lock, Check } from 'lucide-react';
import { CosmeticItem } from '@/types/user-types';

interface CosmeticCardProps {
  cosmetic: CosmeticItem;
  isUnlocked: boolean;
  isActive: boolean;
  onActivate?: () => void;
  onPurchase?: () => void;
}

const CosmeticCard: React.FC<CosmeticCardProps> = ({
  cosmetic,
  isUnlocked,
  isActive,
  onActivate,
  onPurchase
}) => {
  // Get color based on rarity
  const getRarityColor = () => {
    switch (cosmetic.rarity) {
      case 'legendary': return 'bg-gradient-to-r from-amber-500 to-yellow-300 text-black';
      case 'epic': return 'bg-purple-600';
      case 'rare': return 'bg-blue-600';
      case 'uncommon': return 'bg-green-600';
      default: return 'bg-gray-600'; // common
    }
  };

  return (
    <Card className="overflow-hidden border-white/10 bg-black/40 backdrop-blur-sm">
      <div className={`h-1 ${getRarityColor()}`}></div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold">{cosmetic.name}</h3>
          <Badge variant="outline" className={`uppercase text-xs ${
            cosmetic.rarity === 'legendary' ? 'text-yellow-400 border-yellow-400/30' :
            cosmetic.rarity === 'epic' ? 'text-purple-400 border-purple-400/30' :
            cosmetic.rarity === 'rare' ? 'text-blue-400 border-blue-400/30' :
            cosmetic.rarity === 'uncommon' ? 'text-green-400 border-green-400/30' :
            'text-gray-400 border-gray-400/30'
          }`}>
            {cosmetic.rarity}
          </Badge>
        </div>
        
        <p className="text-sm text-gray-400 mb-4">{cosmetic.description}</p>
        
        <div className="flex items-center justify-between">
          {isUnlocked ? (
            <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/20">
              <Check className="h-3 w-3 mr-1" />
              Unlocked
            </Badge>
          ) : (
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 mr-1" />
              <span>${cosmetic.price}</span>
            </div>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="bg-black/30 p-3">
        {isUnlocked ? (
          <Button 
            variant={isActive ? "secondary" : "outline"} 
            className={`w-full ${isActive ? "bg-green-600 hover:bg-green-700" : ""}`}
            onClick={onActivate}
            disabled={isActive}
          >
            {isActive ? "Active" : "Activate"}
          </Button>
        ) : (
          <Button 
            className="w-full" 
            onClick={onPurchase}
          >
            <Lock className="h-4 w-4 mr-2" />
            Purchase
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default CosmeticCard;
