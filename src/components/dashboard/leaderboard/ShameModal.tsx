
import React from 'react';
import { DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { formatCurrency } from '@/utils/formatters';
import { MockeryAction } from '@/types/mockery';
import { TeamColor } from '@/types/mockery';
import { getMockeryDescription, getMockeryName } from '@/utils/mockery';

export interface ShameModalProps {
  targetUser: {
    userId: string;
    username: string;
    profileImage?: string;
    totalSpent?: number;
    rank?: number;
    team?: TeamColor;
    tier?: string;
    spendStreak?: number;
  };
  shameType: MockeryAction;
  onConfirm: () => void;
  onCancel: () => void;
  hasDiscount?: boolean;
}

const getMockeryActionIcon = (action: MockeryAction): string => {
  const icons: Record<string, string> = {
    tomatoes: '🍅',
    eggs: '🥚',
    shame: '🔔',
    stocks: '🪵',
    crown: '👑',
    jester: '🎭',
    protection: '🛡️'
  };
  return icons[action] || '🎭';
};

const ShameModal: React.FC<ShameModalProps> = ({
  targetUser,
  shameType,
  onConfirm,
  onCancel,
  hasDiscount = false
}) => {
  const cost = 1.25; // Placeholder cost
  const discountedCost = hasDiscount ? cost * 0.8 : cost;
  
  return (
    <DialogContent className="sm:max-w-[425px] bg-black border-red-900/50">
      <DialogHeader>
        <DialogTitle className="text-xl flex items-center">
          <span className="mr-2 text-xl">{getMockeryActionIcon(shameType)}</span>
          {getMockeryName(shameType)}
        </DialogTitle>
        <DialogDescription>
          {getMockeryDescription(shameType)}
        </DialogDescription>
      </DialogHeader>
      
      <div className="py-4">
        <Card className="bg-black/30 border-white/5 p-4 mb-4">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img
                src={targetUser.profileImage || '/images/default-avatar.png'}
                alt={targetUser.username}
                className="h-12 w-12 rounded-full object-cover"
              />
              {targetUser.team && (
                <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-${targetUser.team}-500 border border-black`} />
              )}
            </div>
            <div>
              <h3 className="font-semibold">{targetUser.username}</h3>
              <div className="flex items-center space-x-2 text-xs text-white/70">
                {targetUser.rank && (
                  <span>Rank #{targetUser.rank}</span>
                )}
                {targetUser.tier && (
                  <Badge variant="outline" className="px-1 py-0 h-5 text-[10px]">
                    {targetUser.tier}
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </Card>
        
        <div className="flex flex-col space-y-2 text-sm">
          <div className="flex justify-between py-1 border-b border-white/10">
            <span>Base cost:</span>
            <span>{formatCurrency(cost)}</span>
          </div>
          
          {hasDiscount && (
            <div className="flex justify-between py-1 border-b border-white/10 text-green-400">
              <span>Discount:</span>
              <span>-{formatCurrency(cost - discountedCost)}</span>
            </div>
          )}
          
          <div className="flex justify-between py-1 font-bold">
            <span>Total:</span>
            <span>{formatCurrency(discountedCost)}</span>
          </div>
        </div>
      </div>
      
      <DialogFooter className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button 
          variant="destructive" 
          className="bg-red-900 hover:bg-red-800" 
          onClick={onConfirm}
        >
          Confirm & Pay
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default ShameModal;
