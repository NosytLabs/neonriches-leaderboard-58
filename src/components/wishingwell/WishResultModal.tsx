
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { CosmeticItem } from '@/types/cosmetics';
import { Sparkles } from 'lucide-react';

export type WishResultType = 'win' | 'lose' | 'pending';

export interface WishResultModalProps {
  result: WishResultType;
  reward?: CosmeticItem;
  rarity?: string;
  title: string;
  message: string;
  onClose: () => void;
  onOpenChange?: (open: boolean) => void;
}

const WishResultModal: React.FC<WishResultModalProps> = ({
  result,
  reward,
  rarity,
  title,
  message,
  onClose,
  onOpenChange
}) => {
  return (
    <Dialog onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-royal-gold" />
            {title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex flex-col items-center py-6 gap-4">
          {result === 'win' && reward && (
            <div className="p-6 border rounded-lg bg-black/30 border-royal-gold/50 animate-pulse">
              <img 
                src={reward.imageSrc || '/placeholder-item.png'} 
                alt={reward.name} 
                className="w-24 h-24 mx-auto"
              />
              <h3 className="text-lg font-bold mt-2 text-center">{reward.name}</h3>
              <p className="text-sm text-white/70 text-center">{reward.description}</p>
            </div>
          )}
          
          <p className="text-center text-white/80">{message}</p>
          
          {result === 'win' && (
            <div className="text-center text-royal-gold font-medium animate-bounce">
              <Sparkles className="h-4 w-4 inline-block mr-1" />
              {rarity} item acquired!
            </div>
          )}
        </div>
        
        <DialogFooter>
          <Button 
            onClick={onClose} 
            className={result === 'win' ? 'bg-royal-gold text-black hover:bg-royal-gold/90' : ''}
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default WishResultModal;
