
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { CosmeticItem } from '@/types/cosmetics';
import { formatCurrency } from '@/utils/formatters';

interface WishResultModalProps {
  isOpen: boolean;
  onClose: () => void;
  result: {
    type: 'cosmetic' | 'money' | 'token';
    item?: CosmeticItem;
    amount?: number;
    message?: string;
  } | null;
}

const WishResultModal: React.FC<WishResultModalProps> = ({ isOpen, onClose, result }) => {
  if (!result) return null;
  
  const renderResult = () => {
    switch (result.type) {
      case 'cosmetic':
        if (!result.item) return null;
        return (
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-r from-gold-400/30 to-gold-600/30 rounded-lg flex items-center justify-center">
              <img 
                src={result.item.previewUrl || result.item.imageSrc || result.item.image || '/images/cosmetics/default.png'} 
                alt={result.item.name} 
                className="w-24 h-24 object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-gold-400 mb-2">{result.item.name}</h3>
            <p className="text-gray-300 mb-4">{result.item.description}</p>
            <p className="text-sm text-gray-400">Value: {formatCurrency(result.item.price || 0)}</p>
          </div>
        );
        
      case 'money':
        return (
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-r from-emerald-400/30 to-emerald-600/30 rounded-lg flex items-center justify-center">
              <div className="text-5xl font-bold text-emerald-400">$</div>
            </div>
            <h3 className="text-xl font-bold text-emerald-400 mb-2">Money Reward!</h3>
            <p className="text-gray-300 mb-4">You received {formatCurrency(result.amount || 0)}!</p>
            <p className="text-sm text-gray-400">Your wish has been granted</p>
          </div>
        );
        
      case 'token':
        return (
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-r from-purple-400/30 to-purple-600/30 rounded-lg flex items-center justify-center">
              <div className="text-5xl font-bold text-purple-400">🪙</div>
            </div>
            <h3 className="text-xl font-bold text-purple-400 mb-2">Special Token!</h3>
            <p className="text-gray-300 mb-4">{result.message || 'You received a special token!'}</p>
            <p className="text-sm text-gray-400">Use it wisely</p>
          </div>
        );
        
      default:
        return null;
    }
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md glass-morphism border-white/10">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">Wish Result</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          {renderResult()}
        </div>
        <div className="flex justify-center mt-4">
          <Button onClick={onClose}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WishResultModal;
