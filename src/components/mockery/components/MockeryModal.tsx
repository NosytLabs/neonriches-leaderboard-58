
import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { MockeryAction } from '../hooks/useMockery';
import { 
  getMockeryActionIcon, 
  getMockeryActionTitle, 
  getMockeryActionDescription,
  getMockeryActionPrice,
  hasWeeklyDiscount,
  getDiscountedMockeryPrice
} from '../utils/mockeryUtils';
import RoyalDivider from '@/components/ui/royal-divider';
import { Target, Crown, CreditCard } from 'lucide-react';

interface MockeryModalProps {
  targetUser: {
    userId: string;
    username: string;
    profileImage?: string;
    totalSpent: number;
    rank: number;
    team?: string | null;
  };
  mockeryType: MockeryAction;
  onConfirm: (userId: string, mockeryType: MockeryAction) => void;
  onCancel: () => void;
  hasDiscount?: boolean;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const MockeryModal: React.FC<MockeryModalProps> = ({
  targetUser,
  mockeryType,
  onConfirm,
  onCancel,
  hasDiscount = false,
  open,
  onOpenChange
}) => {
  const regularPrice = getMockeryActionPrice(mockeryType);
  const finalPrice = hasDiscount 
    ? getDiscountedMockeryPrice(mockeryType) 
    : regularPrice;
  const discountPercentage = hasDiscount 
    ? Math.round((1 - (finalPrice / regularPrice)) * 100) 
    : 0;
  
  const handleConfirm = () => {
    onConfirm(targetUser.userId, mockeryType);
  };
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass-morphism border-white/10 sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center text-royal-gold">
            <Crown className="mr-2 h-5 w-5" />
            Confirm Royal Mockery
          </DialogTitle>
          <DialogDescription>
            You are about to mock {targetUser.username} with {getMockeryActionTitle(mockeryType)}
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex items-center space-x-4 my-4">
          <div className="h-16 w-16 rounded-full overflow-hidden border border-white/20">
            {targetUser.profileImage ? (
              <img 
                src={targetUser.profileImage} 
                alt={targetUser.username} 
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="h-full w-full bg-white/10 flex items-center justify-center text-xl font-bold">
                {targetUser.username[0]}
              </div>
            )}
          </div>
          
          <div>
            <h3 className="font-bold">{targetUser.username}</h3>
            <p className="text-sm text-white/70">
              Rank #{targetUser.rank} • ${targetUser.totalSpent.toLocaleString()} spent
            </p>
          </div>
        </div>
        
        <RoyalDivider variant="line" className="my-2" />
        
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="text-2xl">
              {getMockeryActionIcon(mockeryType)}
            </div>
            <div>
              <h4 className="font-bold">{getMockeryActionTitle(mockeryType)}</h4>
              <p className="text-sm text-white/70">
                {getMockeryActionDescription(mockeryType, targetUser.username)}
              </p>
            </div>
          </div>
          
          <div className="bg-white/5 rounded-md p-3 text-sm text-white/70">
            <p className="flex items-center">
              <Target className="h-4 w-4 mr-2 text-royal-crimson" />
              This mockery effect will be visible to all users for 24 hours.
            </p>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="text-sm text-white/70">Price:</div>
            <div className="text-lg font-bold text-royal-gold">
              {hasDiscount && (
                <span className="text-sm line-through text-white/50 mr-2">
                  ${regularPrice.toFixed(2)}
                </span>
              )}
              ${finalPrice.toFixed(2)}
              {hasDiscount && (
                <span className="ml-2 text-xs bg-royal-gold/20 text-royal-gold px-2 py-0.5 rounded-full">
                  {discountPercentage}% OFF
                </span>
              )}
            </div>
          </div>
        </div>
        
        <DialogFooter className="mt-4">
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button className="bg-royal-crimson hover:bg-royal-crimson/90" onClick={handleConfirm}>
            <CreditCard className="mr-2 h-4 w-4" />
            Confirm Mockery
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MockeryModal;
