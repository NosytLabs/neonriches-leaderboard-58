import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MockeryAction } from '@/types/mockery';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Shield } from 'lucide-react';
import { 
  getShameActionIcon,
  hasWeeklyDiscount,
  getDiscountedShamePrice,
  getShameActionPrice
} from '@/components/events/utils/shameUtils';
import { formatCurrency } from '@/utils/formatters';

interface ShameUserCardProps {
  user: {
    id: string | number;
    username: string;
    profileImage?: string;
    rank: number;
    team?: string;
    amountSpent: number;
  };
  isShamed: { type: MockeryAction; timestamp: string } | null;
  isOnCooldown: boolean;
  shameCount: number;
  onShame: (userId: number, action: MockeryAction) => boolean;
  featuredAction?: MockeryAction;
}

const ShameUserCard: React.FC<ShameUserCardProps> = ({
  user,
  isShamed,
  isOnCooldown,
  shameCount,
  onShame,
  featuredAction = 'tomatoes'
}) => {
  const userId = typeof user.id === 'string' ? parseInt(user.id, 10) : user.id;
  const isProtected = false; // Example logic, replace with real protected status check
  
  const ShameIcon = isShamed ? getShameActionIcon(isShamed.type) : null;
  
  // Get base and discounted prices
  const basePrice = getShameActionPrice(featuredAction);
  const discountedPrice = hasWeeklyDiscount(featuredAction) 
    ? getDiscountedShamePrice(featuredAction) 
    : basePrice;
  
  const handleShameClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isOnCooldown || isProtected) return;
    onShame(userId, featuredAction);
  };
  
  return (
    <Card className={`glass-morphism border-white/10 ${isShamed ? 'bg-black/40' : ''}`}>
      <CardContent className="p-4 relative">
        
        {/* Main content */}
        <div className="flex items-center">
          <div className="relative">
            <Avatar className="h-12 w-12 border border-white/20">
              <AvatarImage src={user.profileImage} alt={user.username} />
              <AvatarFallback>{user.username.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>
            
            {isShamed && ShameIcon && (
              <div className="absolute -top-2 -right-2 bg-black/60 rounded-full p-1 border border-white/10">
                <ShameIcon size={16} className="text-royal-crimson" />
              </div>
            )}
          </div>
          
          <div className="ml-4 flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-sm">{user.username}</h3>
                <p className="text-xs text-white/60">Rank #{user.rank}</p>
              </div>
              
              <div className="text-right">
                <p className="text-xs text-white/60">Total Spent</p>
                <p className="text-xs font-medium">{formatCurrency(user.amountSpent)}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-4 flex justify-between items-center">
          <div className="text-xs text-white/70">
            {isShamed ? (
              <span>Currently Shamed</span>
            ) : isProtected ? (
              <span className="flex items-center">
                <Shield className="h-3 w-3 mr-1 text-royal-gold" />
                Protected
              </span>
            ) : (
              <span>Ready for Mockery</span>
            )}
          </div>
          
          <Button
            onClick={handleShameClick}
            variant="outline"
            size="sm"
            disabled={isOnCooldown || isProtected}
            className={hasWeeklyDiscount(featuredAction) ? 'border-royal-gold/30 text-royal-gold' : ''}
          >
            {hasWeeklyDiscount(featuredAction) ? (
              <>
                <span className="line-through mr-1 text-white/50">${basePrice.toFixed(2)}</span>
                <span>${discountedPrice.toFixed(2)}</span>
              </>
            ) : (
              <>${basePrice.toFixed(2)}</>
            )}
          </Button>
        </div>
        
        {shameCount > 0 && (
          <div className="absolute top-2 right-2 text-xs bg-black/40 px-2 py-1 rounded-full">
            {shameCount}x shamed
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ShameUserCard;
