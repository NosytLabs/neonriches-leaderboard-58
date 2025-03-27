
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import PaymentModal from '@/components/PaymentModal';
import { Scroll } from 'lucide-react';
import { ShameAction } from '../hooks/useShameEffect';
import { getShameActionPrice, getShameActionTitle, getShameActionDescription, getShameActionIcon } from '../utils/shameUtils';

interface ShameModalProps {
  targetUser: {
    id: number;
    username: string;
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
  const actionPrice = getShameActionPrice(shameAction);
  const actionTitle = getShameActionTitle(shameAction);
  const actionDesc = getShameActionDescription(shameAction, targetUser.username);

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <Card className="w-full max-w-md glass-morphism border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center">
            <span className="mr-2 text-xl">{getShameActionIcon(shameAction)}</span>
            {actionTitle}: {targetUser.username}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full overflow-hidden mr-3 border border-white/20">
              <img 
                src={targetUser.profileImage} 
                alt={targetUser.username} 
                className="w-full h-full"
              />
            </div>
            <div>
              <p className="mb-4">
                {actionDesc}
              </p>
              <div className="text-sm text-white/60">
                <span className="inline-flex items-center bg-white/10 px-2 py-1 rounded text-xs">
                  <Scroll className="h-3 w-3 mr-1 text-amber-500" />
                  Medieval Public Shaming
                </span>
              </div>
            </div>
          </div>
          
          <div className="my-4 p-3 bg-white/5 rounded border border-white/10">
            <p className="text-sm text-white/80">
              This is a satirical feature that allows you to "shame" another user for 24 hours. 
              This has no effect on their actual rank or standing, it's just a visual effect and bragging rights.
            </p>
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
                title={`${actionTitle}`}
                description={actionDesc}
                amount={actionPrice}
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
