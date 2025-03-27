
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import PaymentModal from '@/components/PaymentModal';
import { LeaderboardUser } from './LeaderboardUtils';
import { Scroll } from 'lucide-react';

interface ShameModalProps {
  selectedUser: LeaderboardUser;
  shameAmount: number;
  shameType: string;
  onClose: () => void;
  onConfirm: () => void;
}

const ShameModal: React.FC<ShameModalProps> = ({ 
  selectedUser, 
  shameAmount,
  shameType, 
  onClose, 
  onConfirm 
}) => {
  // Get shame emoji based on type
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
  
  // Get description based on type
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

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <Card className="w-full max-w-md glass-morphism border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center">
            <span className="mr-2">{getShameEmoji()}</span>
            {shameType}: {selectedUser.username}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            {getShameDescription()}
          </p>
          
          <div className="my-4 glass-morphism border-white/10 p-3 rounded">
            <div className="flex items-center">
              <Scroll className="h-4 w-4 mr-2 text-white/60" />
              <p className="text-sm text-white/80">
                This is a satirical feature that has no effect on actual rankings. It's purely for entertainment.
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between">
              <Button 
                variant="outline" 
                className="glass-morphism border-white/10"
                onClick={onClose}
              >
                Cancel
              </Button>
              
              <PaymentModal 
                title={`${shameType} ${selectedUser.username}`}
                description={getShameDescription()}
                amount={shameAmount}
                onSuccess={onConfirm}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ShameModal;
