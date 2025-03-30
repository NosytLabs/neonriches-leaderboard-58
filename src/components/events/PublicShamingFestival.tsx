import React from 'react';
import { Scroll, DollarSign, Sparkles } from 'lucide-react';
import { topUsers } from './data';
import { useShameEffect } from './hooks/useShameEffect';
import ShameUserCard from './components/ShameUserCard';
import { TooltipProvider } from '@/components/ui/tooltip';
import RankingDisclaimer from '@/components/shared/RankingDisclaimer';
import RoyalDivider from '@/components/ui/royal-divider';
import { Dialog } from '@/components/ui/dialog';
import ShameModal from './components/ShameModal';
import { ShameAction } from '@/types/mockery';
import useNotificationSounds from '@/hooks/use-notification-sounds';
import { 
  hasWeeklyDiscount, 
  getWeeklyDiscountedAction, 
  getShameActionPrice, 
  getDiscountedShamePrice 
} from './utils/shameUtils';
import MedievalIcon from '@/components/ui/medieval-icon';

const formatUserForShameCard = (user: any) => ({
  id: user.id,
  username: user.username,
  profileImage: user.profileImage,
  rank: user.rank,
  team: user.team,
  amountSpent: user.amountSpent
});

const PublicShamingDescription = () => {
  const discountedAction = getWeeklyDiscountedAction();
  const regularPrice = getShameActionPrice(discountedAction);
  const discountedPrice = getDiscountedShamePrice(discountedAction);
  const discountPercentage = Math.round((1 - (discountedPrice / regularPrice)) * 100);
  
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-6">
      <div>
        <h2 className="text-2xl font-bold royal-gradient mb-2 flex items-center">
          <MedievalIcon name="scroll" color="gold" className="mr-2 animate-pulse-slow" />
          Royal Public Shaming Festival
        </h2>
        <p className="text-white/70">
          Engage in medieval-style cosmetic shaming by visually marking nobles with rotten tomatoes, eggs, or placing them in stocks. A satirical feature with <strong>purely visual effects</strong> that don't affect leaderboard ranks.
        </p>
      </div>
      
      <div className="flex items-center space-x-2 mt-4 md:mt-0">
        <div className="glass-morphism border-white/10 rounded-full px-3 py-1.5 text-sm text-white/70 hover:border-royal-purple/20 transition-all">
          <Scroll size={14} className="inline-block mr-1.5 text-royal-purple" />
          24h visual effect
        </div>
        <div className="glass-morphism border-white/10 rounded-full px-3 py-1.5 text-sm text-white/70 hover:border-royal-gold/20 transition-all">
          <DollarSign size={14} className="inline-block mr-1.5 text-royal-gold" />
          $0.25 - $1.00
        </div>
      </div>
    </div>
  );
};

const PublicShamingFestival = () => {
  const { playSound } = useNotificationSounds();
  const { shameCooldown, shameEffects, shameCount, getShameCount, handleShame } = useShameEffect({
    cooldownPeriod: 60000 * 60 * 24 // 24 hours cooldown
  });
  const [showModal, setShowModal] = React.useState(false);
  const [selectedUser, setSelectedUser] = React.useState<any>(null);
  const [selectedAction, setSelectedAction] = React.useState<ShameAction>('tomatoes');
  
  const discountedAction = getWeeklyDiscountedAction();
  
  const handleShameUser = (userId: number, username: string, type: ShameAction, amount: number) => {
    const user = topUsers.find(u => u.id === userId);
    if (!user) return false;
    
    setSelectedUser(user);
    setSelectedAction(type);
    setShowModal(true);
    
    playSound('notification');
    return true;
  };
  
  const confirmShame = (userId: string, action: ShameAction) => {
    const numericId = parseInt(userId, 10);
    const user = topUsers.find(u => u.id === numericId);
    
    if (user) {
      const finalPrice = hasWeeklyDiscount(action) 
        ? getDiscountedShamePrice(action) 
        : getShameActionPrice(action);
        
      handleShame(numericId, user.username, action, finalPrice);
      playSound('shame', 0.3);
    }
    
    setShowModal(false);
  };

  return (
    <TooltipProvider>
      <div className="mb-12 relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-royal-crimson/5 via-royal-gold/5 to-royal-navy/5 blur-lg -z-10 rounded-xl"></div>
        
        <PublicShamingDescription />
        
        <RankingDisclaimer 
          className="mb-6" 
          messagePrefix="Important:" 
          variant="info" 
          message="All shaming effects are purely cosmetic and do not affect a user's actual rank or standing. These are visual entertainment features only."
        />
        
        <div className="mb-6 p-4 glass-morphism border-white/10 rounded-lg">
          <h3 className="font-medium royal-gradient flex items-center mb-3">
            <MedievalIcon name="scroll" className="mr-2" /> Medieval Public Shaming Options
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className={`p-3 glass-morphism ${hasWeeklyDiscount('tomatoes') ? 'border-royal-gold/40 shadow-gold' : 'border-royal-crimson/20'} rounded-lg relative overflow-hidden`}>
              {hasWeeklyDiscount('tomatoes') && (
                <div className="absolute -right-6 -top-1 transform rotate-45 bg-royal-gold text-black px-6 py-1 text-xs font-bold shadow-md">
                  50% OFF
                </div>
              )}
              <div className="flex items-center mb-2">
                <div className="text-xl mr-2">🍅</div>
                <div className="font-medium">Throw Tomatoes</div>
                <div className="ml-auto text-royal-gold">
                  {hasWeeklyDiscount('tomatoes') ? (
                    <span className="flex flex-col items-end">
                      <span className="text-xs line-through text-white/50">${getShameActionPrice('tomatoes').toFixed(2)}</span>
                      <span>${getDiscountedShamePrice('tomatoes').toFixed(2)}</span>
                    </span>
                  ) : (
                    <span>${getShameActionPrice('tomatoes').toFixed(2)}</span>
                  )}
                </div>
              </div>
              <p className="text-white/70 text-sm">Pelt your target with rotten tomatoes. A classic form of public ridicule (visual effect only).</p>
            </div>
            
            <div className={`p-3 glass-morphism ${hasWeeklyDiscount('eggs') ? 'border-royal-gold/40 shadow-gold' : 'border-royal-gold/20'} rounded-lg relative overflow-hidden`}>
              {hasWeeklyDiscount('eggs') && (
                <div className="absolute -right-6 -top-1 transform rotate-45 bg-royal-gold text-black px-6 py-1 text-xs font-bold shadow-md">
                  50% OFF
                </div>
              )}
              <div className="flex items-center mb-2">
                <div className="text-xl mr-2">🥚</div>
                <div className="font-medium">Throw Rotten Eggs</div>
                <div className="ml-auto text-royal-gold">
                  {hasWeeklyDiscount('eggs') ? (
                    <span className="flex flex-col items-end">
                      <span className="text-xs line-through text-white/50">${getShameActionPrice('eggs').toFixed(2)}</span>
                      <span>${getDiscountedShamePrice('eggs').toFixed(2)}</span>
                    </span>
                  ) : (
                    <span>${getShameActionPrice('eggs').toFixed(2)}</span>
                  )}
                </div>
              </div>
              <p className="text-white/70 text-sm">Hurl rotten eggs at your target. The visual stench will follow them for a day.</p>
            </div>
            
            <div className={`p-3 glass-morphism ${hasWeeklyDiscount('stocks') ? 'border-royal-gold/40 shadow-gold' : 'border-royal-purple/20'} rounded-lg relative overflow-hidden`}>
              {hasWeeklyDiscount('stocks') && (
                <div className="absolute -right-6 -top-1 transform rotate-45 bg-royal-gold text-black px-6 py-1 text-xs font-bold shadow-md">
                  50% OFF
                </div>
              )}
              <div className="flex items-center mb-2">
                <div className="text-xl mr-2">🪵</div>
                <div className="font-medium">Place in Stocks</div>
                <div className="ml-auto text-royal-gold">
                  {hasWeeklyDiscount('stocks') ? (
                    <span className="flex flex-col items-end">
                      <span className="text-xs line-through text-white/50">${getShameActionPrice('stocks').toFixed(2)}</span>
                      <span>${getDiscountedShamePrice('stocks').toFixed(2)}</span>
                    </span>
                  ) : (
                    <span>${getShameActionPrice('stocks').toFixed(2)}</span>
                  )}
                </div>
              </div>
              <p className="text-white/70 text-sm">Place your target in the public stocks. The ultimate medieval visual humiliation.</p>
            </div>
          </div>
        </div>
        
        <RoyalDivider variant="line" label="CURRENT TARGETS" color="royal" className="my-8" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {topUsers.map((targetUser, index) => (
            <div 
              key={targetUser.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <ShameUserCard
                user={formatUserForShameCard(targetUser)}
                isShamed={shameEffects[targetUser.id] || null}
                isOnCooldown={!!shameCooldown[targetUser.id]}
                shameCount={getShameCount(targetUser.id)}
                onShame={handleShameUser}
                featuredAction={discountedAction}
              />
            </div>
          ))}
        </div>
        
        <div className="mt-8 p-4 glass-morphism border-white/10 rounded-lg">
          <h3 className="font-medium royal-gradient flex items-center mb-3">
            <Sparkles className="mr-2 h-4 w-4" /> Historical Context
          </h3>
          <p className="text-white/70 text-sm">
            Public shaming was a common form of punishment in medieval societies. People would throw rotten food at those placed in the stocks or pillory, 
            turning punishment into a communal entertainment. This feature is a satirical and harmless take on these historical practices with <strong>purely visual effects</strong>.
          </p>
        </div>
        
        <Dialog open={showModal} onOpenChange={setShowModal}>
          {selectedUser && (
            <ShameModal
              targetUser={{
                userId: selectedUser.id.toString(),
                username: selectedUser.username,
                profileImage: selectedUser.profileImage,
                totalSpent: selectedUser.amountSpent,
                rank: selectedUser.rank,
                team: selectedUser.team,
                tier: 'free',
                spendStreak: 0
              }}
              shameType={selectedAction}
              onConfirm={confirmShame}
              onCancel={() => setShowModal(false)}
              hasDiscount={hasWeeklyDiscount(selectedAction)}
            />
          )}
        </Dialog>
      </div>
    </TooltipProvider>
  );
};

export default PublicShamingFestival;
