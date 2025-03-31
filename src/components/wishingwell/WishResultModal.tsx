
import React from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { CosmeticItem } from '@/types/cosmetics';
import { formatCurrency } from '@/utils/formatters';

export type WishResultType = 'success' | 'failure' | 'jackpot';

export interface WishResultModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  resultType: WishResultType;
  amount?: number;
  winAmount?: number;
  cosmeticItem?: CosmeticItem;
}

const WishResultModal: React.FC<WishResultModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  resultType,
  amount = 0,
  winAmount = 0,
  cosmeticItem
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className={`sm:max-w-md ${
        resultType === 'success' ? 'bg-green-950/90' : 
        resultType === 'jackpot' ? 'bg-royal-gold/20' : 'bg-red-950/80'
      }`}>
        <DialogHeader>
          <DialogTitle className="text-xl">{title}</DialogTitle>
          <DialogDescription className="text-white/90">
            {description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="p-6 flex flex-col items-center">
          {resultType === 'success' && (
            <div className="text-center mb-4">
              <p className="text-xl mb-2">You won:</p>
              <p className="text-3xl font-bold text-royal-gold">{formatCurrency(winAmount)}</p>
            </div>
          )}
          
          {resultType === 'jackpot' && cosmeticItem && (
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 mb-4 bg-black/20 rounded-lg p-2 flex items-center justify-center">
                <img 
                  src={cosmeticItem.imageSrc || cosmeticItem.image || '/images/cosmetics/default.png'} 
                  alt={cosmeticItem.name} 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <p className="text-lg font-semibold mb-1">{cosmeticItem.name}</p>
              <p className="text-sm text-center text-white/70 mb-2">{cosmeticItem.description}</p>
              <div className="glass-card px-3 py-1 rounded-full text-sm">
                {cosmeticItem.rarity} {cosmeticItem.type}
              </div>
            </div>
          )}
          
          {resultType === 'failure' && (
            <div className="text-center mb-4">
              <p className="text-xl mb-2">Your wish of {formatCurrency(amount)} was not granted</p>
              <p className="text-md italic text-white/60">Perhaps the well requires a greater sacrifice...</p>
            </div>
          )}
        </div>
        
        <DialogFooter>
          <Button 
            onClick={onClose} 
            className={resultType === 'jackpot' ? 'bg-royal-gold text-black hover:bg-royal-gold/90' : ''}
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default WishResultModal;
