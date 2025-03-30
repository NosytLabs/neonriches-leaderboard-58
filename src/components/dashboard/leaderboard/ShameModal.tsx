
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ShameAction } from '@/types/mockery';
import { getShameActionIcon, getShameActionTitle, getShameActionPrice, getShameActionDescription } from '@/components/events/utils/shameUtils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Shield, Crown, Scroll } from 'lucide-react';
import { getTeamColor } from '@/utils/teamUtils';
import RoyalButton from '@/components/ui/royal-button';
import RoyalDivider from '@/components/ui/royal-divider';
import { PaymentModalProps } from '@/types/payment';
import { useNotificationSounds } from '@/hooks/use-notification-sounds';

interface LeaderboardUser {
  id: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  rank: number;
  team?: 'red' | 'green' | 'blue' | null;
  tier?: string;
  totalSpent: number;
  spendStreak?: number;
}

interface ShameModalProps {
  selectedUser: LeaderboardUser;
  shameAmount: number;
  shameType: string;
  onClose: () => void;
  onConfirm: () => void;
}

const PaymentModal = ({ title, description, amount, onSuccess, trigger }: PaymentModalProps) => {
  return (
    <Button onClick={() => {}}>
      {trigger}
    </Button>
  );
};

const ShameModal: React.FC<ShameModalProps> = ({ 
  selectedUser, 
  shameAmount,
  shameType, 
  onClose, 
  onConfirm 
}) => {
  const { playSound } = useNotificationSounds();

  React.useEffect(() => {
    playSound('notification', 0.2);
  }, []);

  const getShameEmoji = () => {
    switch (shameType.toLowerCase()) {
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
  
  const getShameDescription = () => {
    switch (shameType.toLowerCase()) {
      case 'tomatoes':
        return `Pelt ${selectedUser.username} with rotten tomatoes for all to see. A classic form of medieval public ridicule.`;
      case 'eggs':
        return `Hurl rotten eggs at ${selectedUser.username}, covering them in putrid yolk. The stench will follow them for a day.`;
      case 'stocks':
        return `Place ${selectedUser.username} in the public stocks for a day. The ultimate medieval humiliation.`;
      default:
        return `Publicly shame ${selectedUser.username} for all the kingdom to see.`;
    }
  };

  const getShameIcon = () => {
    switch (shameType.toLowerCase()) {
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
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <Card className="w-full max-w-md glass-morphism border-royal-gold/20 royal-shine">
        <CardHeader className="pb-2">
          <CardTitle className="font-royal flex items-center">
            <span className="mr-3 h-8 w-8 rounded-full bg-white/10 flex items-center justify-center">
              {getShameEmoji()}
            </span>
            <span className="royal-text-shimmer">
              {shameType}: {selectedUser.username}
            </span>
          </CardTitle>
        </CardHeader>
        
        <RoyalDivider variant="line" className="my-2" />
        
        <CardContent>
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full overflow-hidden mr-3 border border-royal-gold/30 gold-border-glow">
              <img 
                src={selectedUser.profileImage || '/placeholder.svg'} 
                alt={selectedUser.username} 
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
              {getShameIcon()}
              <p className="ml-3 text-sm text-white/80">
                This is a satirical feature that has no effect on actual rankings. It's purely for entertainment.
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between">
              <Button 
                variant="outline" 
                onClick={handleClose}
              >
                Cancel
              </Button>
              
              <PaymentModal 
                title={`${shameType} ${selectedUser.username}`}
                description={getShameDescription()}
                amount={shameAmount}
                onSuccess={handleConfirm}
                trigger={<Button>Open Payment</Button>}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ShameModal;
