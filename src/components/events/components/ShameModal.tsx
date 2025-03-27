
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import RoyalButton from '@/components/ui/royal-button';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { ShameAction } from '../hooks/useShameEffect';
import { Scroll, Wallet, X, Shield, Target, Crown } from 'lucide-react';
import RoyalDivider from '@/components/ui/royal-divider';
import { 
  getShameActionPrice, 
  getShameActionTitle, 
  getShameActionDescription, 
  getShameActionIcon,
  getShameActionColor
} from '../utils/shameUtils';
import useNotificationSounds from '@/hooks/use-notification-sounds';
import PaymentModal from '@/components/PaymentModal';

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
  const shamePrice = getShameActionPrice(shameAction);
  
  // Play shame-related sound when modal opens
  React.useEffect(() => {
    playSound('notification', 0.2);
  }, [playSound]);

  // Get shame emoji and icon
  const shameEmoji = getShameActionIcon(shameAction);
  
  // Get shame icon based on type
  const getShameIcon = () => {
    switch (shameAction.toLowerCase()) {
      case 'tomatoes':
        return <Target className="h-6 w-6 text-royal-crimson" />;
      case 'eggs':
        return <Shield className="h-6 w-6 text-royal-gold" />;
      case 'stocks':
        return <Crown className="h-6 w-6 text-royal-navy" />;
      default:
        return <Scroll className="h-6 w-6 text-white/60" />;
    }
  };

  const handleClose = () => {
    playSound('swordClash', 0.1);
    onClose();
  };

  const handleConfirm = () => {
    playSound('shame', 0.3);
    onConfirm();
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 backdrop-blur-sm">
      <Card className="w-full max-w-md glass-morphism border-royal-gold/20 royal-shine">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="font-royal flex items-center">
              <span className="mr-3 h-8 w-8 rounded-full bg-white/10 flex items-center justify-center">
                {shameEmoji}
              </span>
              <span className="royal-text-shimmer">
                {getShameActionTitle(shameAction)}: {targetUser.username}
              </span>
            </CardTitle>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 rounded-full hover:bg-white/10"
              onClick={handleClose}
            >
              <X size={16} />
            </Button>
          </div>
        </CardHeader>
        
        <RoyalDivider variant="line" className="my-2" />
        
        <CardContent>
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full overflow-hidden mr-3 border border-royal-gold/30 gold-border-glow">
              <img 
                src={targetUser.profileImage || '/placeholder.svg'} 
                alt={targetUser.username} 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="mb-4">
                {getShameActionDescription(shameAction, targetUser.username)}
              </p>
            </div>
          </div>
          
          <div className="my-4 glass-morphism border-white/10 p-3 rounded">
            <div className="flex items-center">
              {getShameIcon()}
              <p className="ml-3 text-sm text-white/80">
                This is a satirical feature that has no effect on actual rankings. It's purely for entertainment.
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between">
              <Button 
                variant="glass" 
                onClick={handleClose}
              >
                Cancel
              </Button>
              
              <PaymentModal 
                title={`${getShameActionTitle(shameAction)} ${targetUser.username}`}
                description={getShameActionDescription(shameAction, targetUser.username)}
                amount={shamePrice}
                onSuccess={handleConfirm}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ShameModal;
