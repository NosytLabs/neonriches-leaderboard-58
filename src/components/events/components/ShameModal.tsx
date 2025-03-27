
import React, { useState } from 'react';
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Crown, Scroll, AlertTriangle } from 'lucide-react';
import { UserRankData } from '@/services/spendingService';
import { ShameAction } from '../hooks/useShameEffect';
import { getShameActionTitle, getShameActionDescription, getShameActionPrice, getShameActionIcon, getShameActionColor } from '../utils/shameUtils';
import RankingDisclaimer from '@/components/shared/RankingDisclaimer';
import PaymentModal from '@/components/PaymentModal';

interface ShameModalProps {
  targetUser: UserRankData | null;
  shameType: ShameAction;
  onConfirm: (userId: string, type: ShameAction) => void;
  onCancel: () => void;
}

const ShameModal: React.FC<ShameModalProps> = ({ 
  targetUser, 
  shameType, 
  onConfirm, 
  onCancel 
}) => {
  const [isProcessing, setIsProcessing] = useState(false);
  
  if (!targetUser) return null;
  
  const price = getShameActionPrice(shameType);
  const title = getShameActionTitle(shameType);
  const description = getShameActionDescription(shameType, targetUser.username);
  const icon = getShameActionIcon(shameType);
  const colors = getShameActionColor(shameType);
  
  const handlePaymentSuccess = (amount: number) => {
    setIsProcessing(true);
    setTimeout(() => {
      onConfirm(targetUser.userId, shameType);
      setIsProcessing(false);
    }, 1000);
  };
  
  return (
    <DialogContent className="glass-morphism border-white/10 sm:max-w-md">
      <DialogHeader>
        <div className="flex items-center">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${colors.bg}`}>
            <span className="text-lg">{icon}</span>
          </div>
          <DialogTitle>{title}</DialogTitle>
        </div>
        <DialogDescription>
          This will cost ${price.toFixed(2)} and publicly shame {targetUser.username} for 24 hours.
        </DialogDescription>
      </DialogHeader>
      
      <div className="space-y-4 my-2">
        <div className={`p-4 rounded-lg ${colors.bg} ${colors.border} border`}>
          <p className={`${colors.text}`}>{description}</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <div className="relative">
              {targetUser.rank <= 3 && (
                <div className="absolute -top-1 -right-1 z-10">
                  <Crown size={14} className={
                    targetUser.rank === 1 ? "text-royal-gold" : 
                    targetUser.rank === 2 ? "text-gray-300" : 
                    "text-amber-700"
                  } />
                </div>
              )}
              <div className="w-12 h-12 rounded-full glass-morphism border-white/10 flex items-center justify-center">
                {targetUser.profileImage ? (
                  <img src={targetUser.profileImage} alt={targetUser.username} className="w-full h-full rounded-full object-cover" />
                ) : (
                  <span className="text-lg font-medium">{targetUser.username.charAt(0).toUpperCase()}</span>
                )}
              </div>
            </div>
          </div>
          
          <div>
            <div className="font-semibold">{targetUser.username}</div>
            <div className="text-sm text-white/60 flex items-center">
              <Scroll size={12} className="mr-1" />
              Rank #{targetUser.rank} • ${targetUser.totalSpent.toLocaleString()}
            </div>
          </div>
        </div>
        
        <RankingDisclaimer 
          variant="warning" 
          messagePrefix="Important:" 
          className="text-xs"
        />
      </div>
      
      <DialogFooter className="flex-col sm:flex-col gap-2">
        <PaymentModal 
          amount={price} 
          onSuccess={handlePaymentSuccess}
          title={`Purchase ${title}`}
          description={`Fund your public shaming of ${targetUser.username}`}
          trigger={
            <Button 
              className={`w-full ${colors.bg} ${colors.border} border hover:opacity-90 ${colors.text}`}
              disabled={isProcessing}
            >
              {isProcessing ? (
                <span className="animate-spin mr-2">⚙️</span>
              ) : (
                <span className="mr-2">{icon}</span>
              )}
              Pay ${price.toFixed(2)} to Shame
            </Button>
          }
        />
        
        <Button 
          variant="outline" 
          className="w-full glass-morphism border-white/10 hover:bg-white/10"
          onClick={onCancel}
        >
          Cancel
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default ShameModal;
