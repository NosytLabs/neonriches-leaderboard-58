
import React, { useState } from 'react';
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Crown, Scroll, AlertTriangle } from 'lucide-react';
import { UserRankData } from '@/services/spendingService';
import { ShameAction } from '../hooks/useShameEffect';
import { getShameActionTitle, getShameActionDescription, getShameActionPrice, getShameActionIcon, getShameActionColor } from '../utils/shameUtils';
import RankingDisclaimer from '@/components/shared/RankingDisclaimer';
import PaymentModal from '@/components/PaymentModal';
import RoyalButton from '@/components/ui/royal-button';

interface ShameModalProps {
  targetUser: UserRankData | null;
  shameType: ShameAction;
  onConfirm: (userId: string, type: ShameAction) => void;
  onCancel: () => void;
}

const ShameModal: React.FC<ShameModalProps> = ({ 
  targetUser, 
  shameType, 
  onConfirm, 
  onCancel 
}) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  
  if (!targetUser) return null;
  
  const price = getShameActionPrice(shameType);
  const title = getShameActionTitle(shameType);
  const description = getShameActionDescription(shameType, targetUser.username);
  const icon = getShameActionIcon(shameType);
  const colors = getShameActionColor(shameType);
  
  const handlePaymentSuccess = (amount: number) => {
    setIsProcessing(true);
    setShowAnimation(true);
    
    // Create floating particles effect based on shame type
    setTimeout(() => {
      const modalElement = document.querySelector('.shame-modal-content');
      if (modalElement) {
        const getEmojis = (type: ShameAction) => {
          switch(type) {
            case 'tomatoes': return ['🍅', '🍎', '🥫', '💥'];
            case 'eggs': return ['🥚', '🍳', '🧀', '🦴'];
            case 'stocks': return ['🪵', '⛓️', '🔒', '📜'];
          }
        };
        
        const emojis = getEmojis(shameType);
        
        for (let i = 0; i < 12; i++) {
          const particle = document.createElement('div');
          particle.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
          particle.classList.add('floating-shame-particle', 'text-xl');
          
          // Random position
          const randomX = Math.random() * modalElement.clientWidth;
          const randomY = Math.random() * modalElement.clientHeight / 2 + modalElement.clientHeight / 2;
          
          particle.style.left = `${randomX}px`;
          particle.style.top = `${randomY}px`;
          particle.style.animationDuration = `${2 + Math.random() * 2}s`;
          
          modalElement.appendChild(particle);
          
          // Remove particle after animation completes
          setTimeout(() => {
            if (modalElement.contains(particle)) {
              modalElement.removeChild(particle);
            }
          }, 4000);
        }
      }
    }, 100);
    
    // Complete the shame action
    setTimeout(() => {
      onConfirm(targetUser.userId, shameType);
      setIsProcessing(false);
      setShowAnimation(false);
    }, 2000);
  };
  
  return (
    <DialogContent className="glass-morphism border-white/10 sm:max-w-md shame-modal-content">
      <div className={`absolute inset-0 rounded-lg transition-opacity duration-500 ${showAnimation ? 'opacity-10' : 'opacity-0'}`} style={{ 
        background: shameType === 'tomatoes' ? '#ff0000' : 
                   shameType === 'eggs' ? '#ffff00' : 
                   '#a52a2a'
      }}></div>
      
      <DialogHeader>
        <div className="flex items-center">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${colors.bg} ${colors.border} border`}>
            <span className="text-2xl">{icon}</span>
          </div>
          <DialogTitle className="text-xl royal-text-shimmer">{title}</DialogTitle>
        </div>
        <DialogDescription>
          This will cost ${price.toFixed(2)} and publicly shame {targetUser.username} for 24 hours.
        </DialogDescription>
      </DialogHeader>
      
      <div className="space-y-4 my-2">
        <div className={`p-4 rounded-lg ${colors.bg} ${colors.border} border relative overflow-hidden`}>
          {showAnimation && (
            <div className="absolute inset-0 bg-white/10 animate-pulse"></div>
          )}
          <p className={`${colors.text} relative z-10`}>{description}</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <div className="relative">
              {targetUser.rank <= 3 && (
                <div className="absolute -top-1 -right-1 z-10">
                  <Crown size={14} className={
                    targetUser.rank === 1 ? "text-royal-gold" : 
                    targetUser.rank === 2 ? "text-gray-300" : 
                    "text-amber-700"
                  } />
                </div>
              )}
              <div className={`w-16 h-16 rounded-full glass-morphism ${targetUser.rank <= 3 ? 'royal-shine' : 'border-white/10'} flex items-center justify-center overflow-hidden ${
                showAnimation ? `shame-active-${shameType}` : ''
              }`}>
                {targetUser.profileImage ? (
                  <img src={targetUser.profileImage} alt={targetUser.username} className="w-full h-full rounded-full object-cover" />
                ) : (
                  <span className="text-lg font-medium">{targetUser.username.charAt(0).toUpperCase()}</span>
                )}
              </div>
            </div>
          </div>
          
          <div>
            <div className="font-semibold flex items-center">
              {targetUser.username}
              <span className="ml-2 bg-white/10 text-xs px-1.5 py-0.5 rounded-full flex items-center">
                <Crown size={10} className="mr-1 text-royal-gold" /> #{targetUser.rank}
              </span>
            </div>
            <div className="text-sm text-white/60 flex items-center">
              <Scroll size={12} className="mr-1" />
              ${targetUser.totalSpent.toLocaleString()} contributed
            </div>
            <div className="text-xs text-white/40 mt-1">
              {targetUser.team && (
                <span className={`inline-block px-2 py-0.5 rounded-full ${colors.bg}`}>
                  {targetUser.team.toUpperCase()} COURT
                </span>
              )}
            </div>
          </div>
        </div>
        
        <RankingDisclaimer 
          variant="warning" 
          messagePrefix="Important:" 
          className="text-xs"
        />
        
        {showAnimation && (
          <div className="p-3 border border-white/10 rounded-lg bg-white/5 animate-pulse">
            <p className="text-center text-sm">Preparing medieval shame...</p>
          </div>
        )}
      </div>
      
      <DialogFooter className="flex-col sm:flex-col gap-2">
        {!isProcessing ? (
          <>
            <PaymentModal 
              amount={price} 
              onSuccess={handlePaymentSuccess}
              title={`Purchase ${title}`}
              description={`Fund your public shaming of ${targetUser.username}`}
              trigger={
                <RoyalButton 
                  variant={
                    shameType === 'tomatoes' ? 'royalCrimson' :
                    shameType === 'eggs' ? 'royalGold' : 'royalNavy'
                  }
                  className="w-full"
                  shimmer={true}
                  glow={true}
                  icon={<span className="mr-2">{icon}</span>}
                >
                  Pay ${price.toFixed(2)} to Shame
                </RoyalButton>
              }
            />
            
            <Button 
              variant="outline" 
              className="w-full glass-morphism border-white/10 hover:bg-white/10"
              onClick={onCancel}
            >
              Cancel
            </Button>
          </>
        ) : (
          <div className="w-full flex justify-center">
            <div className="animate-spin text-2xl">⚙️</div>
          </div>
        )}
      </DialogFooter>
    </DialogContent>
  );
};

export default ShameModal;
