
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { formatCurrency } from '@/utils/formatters';
import { Lock, Check } from 'lucide-react';

export interface CosmeticCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  type: string;
  rarity: string;
  isUnlocked: boolean;
  isActive: boolean;
  onPurchase: () => void;
  onApply: () => void;
}

const CosmeticCard: React.FC<CosmeticCardProps> = ({
  id,
  name,
  description,
  price,
  type,
  rarity,
  isUnlocked,
  isActive,
  onPurchase,
  onApply
}) => {
  // Get color class based on rarity
  const getRarityColorClass = (rarity: string): string => {
    const colorClasses: Record<string, string> = {
      'common': 'border-gray-400 bg-gray-800/40',
      'uncommon': 'border-green-500 bg-green-900/30',
      'rare': 'border-blue-400 bg-blue-900/30',
      'epic': 'border-purple-400 bg-purple-900/30',
      'legendary': 'border-orange-400 bg-amber-900/30'
    };
    
    return colorClasses[rarity] || colorClasses.common;
  };

  return (
    <Card className={`${getRarityColorClass(rarity)} relative overflow-hidden hover:shadow-md transition-all duration-300 h-full flex flex-col`}>
      <CardContent className="pt-4 pb-2 flex-grow">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-medium text-sm">{name}</h3>
          <div className="px-2 py-0.5 text-xs rounded bg-black/20 capitalize">
            {rarity}
          </div>
        </div>
        <p className="text-xs text-white/70 mb-2">{description}</p>
        <div className="text-xs text-white/50 mt-auto">Type: {type}</div>
      </CardContent>
      
      <CardFooter className="px-4 py-3 border-t border-white/10 bg-black/20">
        {isUnlocked ? (
          <Button 
            size="sm" 
            variant={isActive ? "default" : "outline"} 
            className="w-full flex items-center justify-center" 
            onClick={onApply}
            disabled={isActive}
          >
            {isActive ? (
              <>
                <Check className="h-3 w-3 mr-1" />
                Applied
              </>
            ) : 'Apply'}
          </Button>
        ) : (
          <Button 
            size="sm" 
            variant="outline" 
            className="w-full flex items-center justify-center" 
            onClick={onPurchase}
          >
            <Lock className="h-3 w-3 mr-1" />
            Buy for {formatCurrency(price)}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default CosmeticCard;
