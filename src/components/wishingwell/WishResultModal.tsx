import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';
import { CosmeticItem } from '@/types/cosmetics';

interface WishResultModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  item: CosmeticItem | null;
  onClose: () => void;
}

const WishResultModal: React.FC<WishResultModalProps> = ({ open, setOpen, item, onClose }) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md glass-morphism border-white/10">
        <DialogHeader>
          <DialogTitle className="text-center">
            {item ? 'You Got a Wish!' : 'No Luck This Time!'}
          </DialogTitle>
          <DialogDescription className="text-center">
            {item ? `Congratulations! You've received a ${item.rarity} item!` : 'Better luck next time. Keep wishing!'}
          </DialogDescription>
        </DialogHeader>

        {item && (
          <div className="flex items-center justify-center py-8">
            <div className="w-24 h-24 relative">
              <img 
                src={item.image || item.imageSrc || `/images/cosmetics/${item.id}.png`}
                alt={item.name}
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        )}

        <DialogFooter>
          <Button onClick={onClose} className="w-full">
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default WishResultModal;
