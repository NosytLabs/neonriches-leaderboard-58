
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { LeaderboardEntry } from '@/types/leaderboard';
import { MockeryAction } from '@/types/mockery';
import { ArrowRight, DollarSign } from 'lucide-react';
import { formatCurrency } from '@/utils/formatters';

export interface ShameModalProps {
  targetUser: LeaderboardEntry;
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
  onConfirm
}) => {
  const [confirmed, setConfirmed] = useState(false);
  
  const handleConfirm = () => {
    setConfirmed(true);
    onConfirm();
  };
  
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="glass-morphism border-crimson/40">
        <DialogHeader>
          <DialogTitle className="text-crimson">Confirm Public Shaming</DialogTitle>
          <DialogDescription>
            You are about to publicly shame {targetUser.displayName || targetUser.username} with {shameType}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Target:</span>
            <span className="font-medium">{targetUser.displayName || targetUser.username}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Mockery Type:</span>
            <span className="font-medium capitalize">{shameType.replace(/([A-Z])/g, ' $1')}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Cost:</span>
            <span className="font-medium flex items-center">
              <DollarSign className="h-4 w-4 mr-1" />
              {formatCurrency(shameAmount)}
            </span>
          </div>
          
          <div className="rounded-md bg-amber-950/20 p-3 mt-2">
            <p className="text-amber-300 text-sm">
              Warning: This action will be visible on the public leaderboard and cannot be undone.
            </p>
          </div>
        </div>
        
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button 
            className="bg-gradient-to-r from-crimson to-crimson/80 hover:from-crimson/90 hover:to-crimson/70"
            onClick={handleConfirm}
            disabled={confirmed}
          >
            {confirmed ? "Processing..." : "Confirm"} 
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ShameModal;
