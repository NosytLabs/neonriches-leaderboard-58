
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import PaymentModal from '@/components/PaymentModal';
import { LeaderboardUser } from './LeaderboardUtils';

interface PokeModalProps {
  selectedUser: LeaderboardUser;
  pokeAmount: number;
  onClose: () => void;
  onConfirm: () => void;
}

const PokeModal: React.FC<PokeModalProps> = ({ 
  selectedUser, 
  pokeAmount, 
  onClose, 
  onConfirm 
}) => {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <Card className="w-full max-w-md glass-morphism border-white/10">
        <CardHeader>
          <CardTitle>Poke {selectedUser.username}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Spend ${pokeAmount} to temporarily drop {selectedUser.username} down one rank in the standings.
          </p>
          
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
                title={`Poke ${selectedUser.username}`}
                description={`Drop ${selectedUser.username} down one rank for 24 hours.`}
                amount={pokeAmount}
                onSuccess={onConfirm}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PokeModal;
