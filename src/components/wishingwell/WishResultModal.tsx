
import React from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Trophy, X } from 'lucide-react';

interface WishResultModalProps {
  isOpen: boolean;
  onClose: () => void;
  result: 'win' | 'lose' | 'pending';
  title?: string;
  message?: string;
  rarity?: string;
}

const WishResultModal = ({ isOpen, onClose, result, title, message, rarity }: WishResultModalProps) => {
  const getResultContent = () => {
    switch (result) {
      case 'win':
        return {
          icon: <Trophy className="h-12 w-12 text-royal-gold" />,
          title: title || 'Congratulations!',
          message: message || 'Your wish has been granted!',
          buttonText: 'Claim Reward',
          buttonClass: 'bg-royal-gold text-black hover:bg-royal-gold/90'
        };
      case 'lose':
        return {
          icon: <X className="h-12 w-12 text-red-500" />,
          title: title || 'Better luck next time!',
          message: message || 'Your wish was not granted this time.',
          buttonText: 'Try Again',
          buttonClass: 'bg-gray-700 hover:bg-gray-600'
        };
      default:
        return {
          icon: null,
          title: 'Processing...',
          message: 'Your wish is being processed.',
          buttonText: 'Close',
          buttonClass: 'bg-gray-700 hover:bg-gray-600'
        };
    }
  };

  const resultContent = getResultContent();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="glass-morphism border-white/10 max-w-md">
        <DialogHeader className="flex flex-col items-center text-center">
          <div className="mb-4">{resultContent.icon}</div>
          <DialogTitle className="text-xl font-bold">{resultContent.title}</DialogTitle>
        </DialogHeader>
        
        <div className="py-4 text-center">
          <p className="text-white/80">{resultContent.message}</p>
          {rarity && (
            <p className="mt-2 text-royal-gold font-medium">{rarity} Rarity</p>
          )}
        </div>
        
        <DialogFooter>
          <Button 
            className={`w-full ${resultContent.buttonClass}`} 
            onClick={onClose}
          >
            {resultContent.buttonText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default WishResultModal;
