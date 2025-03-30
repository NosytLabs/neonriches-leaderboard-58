
import React from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { CosmeticItem } from '@/types/cosmetics';
import confetti from 'canvas-confetti';
import { cn } from '@/lib/utils';

export type WishResultType = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'royal';

export interface WishResultModalProps {
  open: boolean;
  onClose: () => void;
  result: WishResultType;
  reward: CosmeticItem;
  rarity: string;
  title: string;
  message: string;
  onOpenChange?: (open: boolean) => void;
}

const WishResultModal: React.FC<WishResultModalProps> = ({
  open,
  onClose,
  result,
  reward,
  rarity,
  title,
  message,
  onOpenChange
}) => {
  React.useEffect(() => {
    if (open && result && reward) {
      // Trigger confetti effect
      confetti({
        particleCount: result === 'legendary' || result === 'epic' ? 200 : 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }, [open, result, reward]);

  const rewardImage = reward?.image || reward?.imageSrc || '/images/rewards/default.png';

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'text-gray-400 border-gray-400';
      case 'uncommon': return 'text-green-400 border-green-400';
      case 'rare': return 'text-blue-400 border-blue-400';
      case 'epic': return 'text-purple-400 border-purple-400';
      case 'legendary': return 'text-amber-400 border-amber-400';
      case 'royal': return 'text-pink-400 border-pink-400';
      default: return 'text-gray-400 border-gray-400';
    }
  };

  const getGlowColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return '';
      case 'uncommon': return 'shadow-green-400/20';
      case 'rare': return 'shadow-blue-400/30';
      case 'epic': return 'shadow-purple-400/40';
      case 'legendary': return 'shadow-amber-400/50 animate-pulse';
      case 'royal': return 'shadow-pink-400/50 animate-pulse';
      default: return '';
    }
  };

  const getRarityBg = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'bg-gradient-to-b from-gray-700 to-gray-900';
      case 'uncommon': return 'bg-gradient-to-b from-green-700/20 to-green-900/20';
      case 'rare': return 'bg-gradient-to-b from-blue-700/20 to-blue-900/20';
      case 'epic': return 'bg-gradient-to-b from-purple-700/20 to-purple-900/20';
      case 'legendary': return 'bg-gradient-to-b from-amber-700/20 to-amber-900/20';
      case 'royal': return 'bg-gradient-to-b from-pink-700/20 to-pink-900/20';
      default: return 'bg-gradient-to-b from-gray-700 to-gray-900';
    }
  };

  if (!open || !reward) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange || (() => onClose())}>
      <DialogContent className={cn(
        "p-0 overflow-hidden max-w-md w-full",
        getRarityBg(rarity),
        "border-2",
        getRarityColor(rarity),
        getGlowColor(rarity),
        "shadow-xl"
      )}>
        <div className="relative w-full h-full p-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className={cn("text-2xl font-bold mb-2", getRarityColor(rarity))}>
              {title}
            </h2>
            
            <div className="my-6">
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="relative mx-auto"
              >
                <div className={cn(
                  "w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center",
                  "border-2",
                  getRarityColor(rarity),
                  getGlowColor(rarity),
                  "shadow-lg"
                )}>
                  <img
                    src={rewardImage}
                    alt={reward.name}
                    className="w-20 h-20 object-contain"
                  />
                </div>
                
                <div className={cn(
                  "absolute -top-2 -right-2 text-xs px-2 py-1 rounded-full",
                  getRarityColor(rarity),
                  "border"
                )}>
                  {rarity}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <h3 className="text-xl font-semibold mb-2">{reward.name}</h3>
                <p className="text-gray-300 mb-4">{reward.description}</p>
                <p className="text-sm text-gray-400 italic mb-6">{message}</p>
              </motion.div>
            </div>
            
            <Button 
              onClick={onClose}
              className={cn(
                "mt-4 w-full", 
                getRarityColor(rarity).replace('text-', 'bg-').replace('border-', 'hover:bg-'),
                "text-black font-bold"
              )}
            >
              Close
            </Button>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WishResultModal;
