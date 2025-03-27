
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { spendFromWallet } from '@/services/walletService';
import { ShameAction } from '../hooks/useShameEffect';
import { Scroll, Wallet } from 'lucide-react';
import useNotificationSounds from '@/hooks/use-notification-sounds';

interface ShameModalProps {
  targetUser: {
    id: number;
    username: string;
    amountSpent: number;
    rank: number;
    team: string;
    profileImage: string;
  };
  shameAction: ShameAction;
  onClose: () => void;
  onConfirm: () => void;
}

const ShameModal: React.FC<ShameModalProps> = ({ 
  targetUser, 
  shameAction, 
  onClose, 
  onConfirm 
}) => {
  const { playSound } = useNotificationSounds();
  const { user } = useAuth();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Get shame price based on type
  const getShamePrice = () => {
    switch (shameAction.toLowerCase()) {
      case 'tomatoes': return 2;
      case 'eggs': return 5;
      case 'stocks': return 10;
      default: return 5;
    }
  };
  
  const shamePrice = getShamePrice();
  const hasWalletBalance = user?.walletBalance && user.walletBalance >= shamePrice;
  
  // Play shame-related sound when modal opens
  React.useEffect(() => {
    playSound('notification', 0.2);
  }, []);

  // Get shame emoji based on type
  const getShameEmoji = () => {
    switch (shameAction.toLowerCase()) {
      case 'tomatoes':
        return '🍅';
      case 'eggs':
        return '🥚';
      case 'stocks':
        return '🪵';
      default:
        return '📜';
    }
  };
  
  // Get description based on type
  const getShameDescription = () => {
    switch (shameAction.toLowerCase()) {
      case 'tomatoes':
        return `Pelt ${targetUser.username} with rotten tomatoes for all to see. A classic form of medieval public ridicule.`;
      case 'eggs':
        return `Hurl rotten eggs at ${targetUser.username}, covering them in putrid yolk. The stench will follow them for a day.`;
      case 'stocks':
        return `Place ${targetUser.username} in the public stocks for a day. The ultimate medieval humiliation.`;
      default:
        return `Publicly shame ${targetUser.username} for all the kingdom to see.`;
    }
  };

  const handleClose = () => {
    playSound('swordClash', 0.1);
    onClose();
  };

  const handleWalletPayment = async () => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "You must be logged in to shame other nobles.",
        variant: "destructive"
      });
      return;
    }
    
    if (!hasWalletBalance) {
      toast({
        title: "Insufficient Funds",
        description: "Your royal purse doesn't have enough gold for this shameful act.",
        variant: "destructive"
      });
      return;
    }
    
    setIsProcessing(true);
    
    try {
      const success = await spendFromWallet(
        user,
        shamePrice,
        'shame',
        `Shamed ${targetUser.username} with ${shameAction}`,
        { shameType: shameAction, targetId: targetUser.id.toString() }
      );
      
      if (success) {
        setIsProcessing(false);
        playSound('shame', 0.3);
        onConfirm();
      } else {
        throw new Error("Transaction failed");
      }
    } catch (error) {
      setIsProcessing(false);
      toast({
        title: "Shaming Failed",
        description: error.message || "Your shameful intentions could not be realized.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <Card className="w-full max-w-md glass-morphism border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center">
            <span className="mr-2">{getShameEmoji()}</span>
            {shameAction}: {targetUser.username}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full overflow-hidden mr-3 border border-white/20">
              <img 
                src={targetUser.profileImage || '/placeholder.svg'} 
                alt={targetUser.username} 
                className="w-full h-full"
              />
            </div>
            <div>
              <p className="mb-4">
                {getShameDescription()}
              </p>
            </div>
          </div>
          
          <div className="my-4 glass-morphism border-white/10 p-3 rounded">
            <div className="flex items-center">
              <Scroll className="h-4 w-4 mr-2 text-white/60" />
              <p className="text-sm text-white/80">
                This is a satirical feature that has no effect on actual rankings. It's purely for entertainment.
              </p>
            </div>
          </div>
          
          {user && (
            <div className="my-4 glass-morphism border-white/10 p-3 rounded">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <Wallet className="h-4 w-4 mr-2 text-royal-gold" />
                  <span className="text-sm">Royal Purse Balance:</span>
                </div>
                <span className="text-royal-gold font-mono font-medium">${user.walletBalance || 0}</span>
              </div>
              
              <div className="flex justify-between text-sm text-white/70">
                <span>Cost for this shame:</span>
                <span>${shamePrice}</span>
              </div>
            </div>
          )}
          
          <div className="space-y-4">
            <div className="flex justify-between">
              <Button 
                variant="outline" 
                className="glass-morphism border-white/10"
                onClick={handleClose}
              >
                Cancel
              </Button>
              
              <Button
                variant="default"
                className="bg-gradient-to-r from-royal-crimson via-royal-gold to-royal-navy"
                disabled={isProcessing || !hasWalletBalance}
                onClick={handleWalletPayment}
              >
                {isProcessing ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Processing...
                  </div>
                ) : (
                  `Shame for $${shamePrice}`
                )}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ShameModal;
