
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { MockeryAction } from '@/types/mockery';
import { LeaderboardUser } from '@/types/leaderboard';
import { getShameActionDescription, getShameActionIcon } from '@/utils/mockeryHelpers';

export interface ShameModalProps {
  targetUser: LeaderboardUser;
  shameAmount: number;
  shameType: MockeryAction;
  onClose: () => void;
  onConfirm: () => void;
}

const ShameModal: React.FC<ShameModalProps> = ({
  targetUser,
  shameAmount,
  shameType,
  onClose,
  onConfirm,
}) => {
  const [isConfirming, setIsConfirming] = useState(false);

  const handleConfirm = () => {
    setIsConfirming(true);
    onConfirm();
    setTimeout(() => {
      setIsConfirming(false);
      onClose();
    }, 1000);
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Royal Shaming Confirmation</DialogTitle>
          <DialogDescription>
            You are about to publicly shame {targetUser.username} with {getShameActionIcon(shameType)}.
          </DialogDescription>
        </DialogHeader>
        
        <div className="p-4 bg-black/20 rounded-md mt-2 mb-4">
          <p className="text-sm text-white/70">
            {getShameActionDescription(shameType, targetUser.username)}
          </p>
          <p className="mt-2 text-sm font-semibold">
            This will cost ${shameAmount.toFixed(2)} from your wallet.
          </p>
          <p className="mt-1 text-xs text-white/60 italic">
            This action is purely cosmetic and for entertainment purposes. It has no impact on rankings.
          </p>
        </div>

        <DialogFooter className="flex space-x-2 sm:space-x-0">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button 
            onClick={handleConfirm} 
            disabled={isConfirming}
            className="bg-royal-crimson hover:bg-royal-crimson/90 text-white"
          >
            {isConfirming ? 'Processing...' : 'Confirm Shaming'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ShameModal;
