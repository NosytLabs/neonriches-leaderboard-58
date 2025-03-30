
import React from 'react';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Trophy, Award, Star, Sparkles } from 'lucide-react';
import { CosmeticItem } from '@/types/cosmetics';
import { motion } from 'framer-motion';

export type WishResultType = 'success' | 'failure' | 'jackpot';

export interface WishResultModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  result: WishResultType;
  reward: CosmeticItem;
  rarity: string;
  title: string;
  message: string;
  onClose: () => void;
}

const WishResultModal: React.FC<WishResultModalProps> = ({
  open,
  onOpenChange,
  result,
  reward,
  rarity,
  title,
  message,
  onClose
}) => {
  const getRarityColor = () => {
    switch (rarity.toLowerCase()) {
      case 'common': return 'text-gray-300';
      case 'uncommon': return 'text-green-400';
      case 'rare': return 'text-blue-400';
      case 'epic': return 'text-purple-400';
      case 'legendary': return 'text-orange-400';
      case 'royal': return 'text-royal-gold';
      default: return 'text-gray-300';
    }
  };
  
  const getBgGradient = () => {
    switch (result) {
      case 'jackpot': return 'bg-gradient-to-b from-royal-gold/30 to-transparent';
      case 'success': return 'bg-gradient-to-b from-green-500/30 to-transparent';
      case 'failure': return 'bg-gradient-to-b from-red-500/30 to-transparent';
      default: return 'bg-gradient-to-b from-white/10 to-transparent';
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={`glass-morphism border-white/10 max-w-md ${getBgGradient()}`}>
        <DialogHeader>
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            {result === 'jackpot' && (
              <Trophy className="h-16 w-16 text-royal-gold" />
            )}
            {result === 'success' && (
              <Award className="h-16 w-16 text-green-400" />
            )}
            {result === 'failure' && (
              <Star className="h-16 w-16 text-gray-400" />
            )}
          </motion.div>
          
          <DialogTitle className="text-center mt-2 text-xl">
            {title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="text-center space-y-4">
          <p className="text-white/70">
            {message}
          </p>
          
          {result !== 'failure' && reward && (
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="p-4 glass-morphism border-white/10 rounded-lg"
            >
              <div className="mb-2">
                <span className={`text-sm font-medium uppercase ${getRarityColor()}`}>
                  {rarity}
                </span>
              </div>
              
              <h3 className="text-lg font-bold mb-1">{reward.name}</h3>
              <p className="text-sm text-white/70">{reward.description}</p>
              
              <div className="mt-4 flex justify-center">
                <div className="h-20 w-20 rounded-full bg-black/20 flex items-center justify-center overflow-hidden">
                  {reward.image ? (
                    <img src={reward.image} alt={reward.name} className="h-full w-full object-cover" />
                  ) : (
                    <Sparkles className="h-10 w-10 text-royal-gold" />
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </div>
        
        <DialogFooter className="mt-4">
          <Button onClick={onClose} className="w-full">
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default WishResultModal;
