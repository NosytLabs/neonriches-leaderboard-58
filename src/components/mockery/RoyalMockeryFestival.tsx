
import React, { useState } from 'react';
import { ScrollText, DollarSign, Sparkles, Shield, TrendingUp, Crown } from 'lucide-react';
import { topUsers } from '@/components/events/data';
import { useMockeryEffect, MockeryAction } from './hooks/useMockeryEffect';
import MockeryUserCard from './components/MockeryUserCard';
import { TooltipProvider } from '@/components/ui/tooltip';
import RankingDisclaimer from '@/components/shared/RankingDisclaimer';
import RoyalDivider from '@/components/ui/royal-divider';
import { Dialog } from '@/components/ui/dialog';
import MockeryModal from './components/MockeryModal';
import useNotificationSounds from '@/hooks/use-notification-sounds';
import { 
  getMockeryLeaderboardMessage, 
  hasWeeklyDiscount, 
  getWeeklyDiscountedAction, 
  getFireSaleFeaturedCategories,
  isFireSaleMonth
} from './utils/mockeryUtils';
import MedievalIcon from '@/components/ui/medieval-icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MockeryProtectionCard from './components/MockeryProtectionCard';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';

// Format user data for MockeryUserCard
const formatUserForMockeryCard = (user: any) => ({
  id: user.id,
  username: user.username,
  profileImage: user.profileImage,
  rank: user.rank,
  team: user.team,
  amountSpent: user.amountSpent
});

const RoyalMockeryDescription = () => {
  // Get this week's featured discount
  const discountedAction = getWeeklyDiscountedAction();
  const isFireSale = isFireSaleMonth();
  
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-6">
      <div>
        <h2 className="text-2xl font-bold royal-gradient mb-2 flex items-center">
          <MedievalIcon name="scroll" color="gold" className="mr-2 animate-pulse-slow" />
          Royal Mockery Festival
          {isFireSale && (
            <span className="text-sm ml-2 px-2 py-0.5 bg-royal-gold/20 text-royal-gold rounded-full animate-pulse-slow">
              Fire Sale Month!
            </span>
          )}
        </h2>
        <p className="text-white/70">
          Engage in medieval-style cosmetic mockery by visually marking nobles with humorous effects. A satirical feature with <strong>purely visual results</strong> that don't affect leaderboard rankings.
        </p>
      </div>
      
      <div className="flex items-center space-x-2 mt-4 md:mt-0">
        <div className="glass-morphism border-white/10 rounded-full px-3 py-1.5 text-sm text-white/70 hover:border-royal-purple/20 transition-all">
          <ScrollText size={14} className="inline-block mr-1.5 text-royal-purple" />
          24h visual effect
        </div>
        <div className="glass-morphism border-white/10 rounded-full px-3 py-1.5 text-sm text-white/70 hover:border-royal-gold/20 transition-all">
          <DollarSign size={14} className="inline-block mr-1.5 text-royal-gold" />
          $0.50 - $3.00
        </div>
      </div>
    </div>
  );
};

const RoyalMockeryFestival = () => {
  const { user } = useAuth();
  const { playSound } = useNotificationSounds();
  const { 
    mockeryCooldown, 
    mockeryEffects, 
    mockeryCount, 
    getMockeryCount, 
    handleMockery,
    isUserProtected,
    addMockeryProtection
  } = useMockeryEffect({
    cooldownPeriod: 60000 * 60 * 24 // 24 hours cooldown
  });
  
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [selectedAction, setSelectedAction] = useState<MockeryAction>('tomatoes');
  const [currentTab, setCurrentTab] = useState('mock');
  
  // Get the discounted action for this week
  const discountedAction = getWeeklyDiscountedAction();
  const fireSaleCategories = getFireSaleFeaturedCategories();
  
  // Find current user's protection status
  const currentUserProtected = user ? isUserProtected(parseInt(user.id)) : false;
  
  // Calculate protection time remaining - in a real app this would come from API
  const protectionTimeRemaining = 20; // hours
  
  // Sort users by mockery count for "Most Mocked" tab
  const mostMockedUsers = [...topUsers].sort((a, b) => {
    const aCount = getMockeryCount(a.id);
    const bCount = getMockeryCount(b.id);
    return bCount - aCount;
  }).filter(user => getMockeryCount(user.id) > 0);
  
  const handleMockeryUser = (userId: number, username: string, type: MockeryAction, amount: number) => {
    // First, find the user
    const user = topUsers.find(u => u.id === userId);
    if (!user) return false;
    
    // Set selected user and action for the modal
    setSelectedUser(user);
    setSelectedAction(type);
    setShowModal(true);
    
    playSound('notification');
    return true;
  };
  
  const confirmMockery = (userId: string, action: MockeryAction) => {
    // Convert userId to number since our mock data uses numbers
    const numericId = parseInt(userId, 10);
    const user = topUsers.find(u => u.id === numericId);
    
    if (user) {
      // Apply discount if this is the weekly featured action or fire sale
      const isDiscounted = hasWeeklyDiscount(action);
      handleMockery(numericId, user.username, action, 0); // Price is 0 for demo
      playSound('shame', 0.3);
    }
    
    setShowModal(false);
  };
  
  const handlePurchaseProtection = () => {
    if (user) {
      addMockeryProtection(parseInt(user.id), 24);
      playSound('purchase', 0.3);
    }
  };

  return (
    <TooltipProvider>
      <div className="mb-12 relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-royal-crimson/5 via-royal-gold/5 to-royal-navy/5 blur-lg -z-10 rounded-xl"></div>
        
        <RoyalMockeryDescription />
        
        <RankingDisclaimer 
          className="mb-6" 
          messagePrefix="Important:" 
          variant="info" 
          message={getMockeryLeaderboardMessage()}
        />
        
        <Tabs defaultValue="mock" value={currentTab} onValueChange={setCurrentTab} className="mb-6">
          <TabsList className="w-full glass-morphism border-white/10 bg-transparent">
            <TabsTrigger value="mock" className="flex-1 data-[state=active]:bg-white/10">
              <ScrollText className="h-4 w-4 mr-2" /> Royal Mockery
            </TabsTrigger>
            <TabsTrigger value="protection" className="flex-1 data-[state=active]:bg-white/10">
              <Shield className="h-4 w-4 mr-2" /> Protection
            </TabsTrigger>
            <TabsTrigger value="most-mocked" className="flex-1 data-[state=active]:bg-white/10">
              <TrendingUp className="h-4 w-4 mr-2" /> Most Mocked
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="mock" className="mt-6">
            <div className="mb-6 p-4 glass-morphism border-white/10 rounded-lg">
              <h3 className="font-medium royal-gradient flex items-center mb-3">
                <MedievalIcon name="scroll" className="mr-2" /> Royal Mockery Options
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className={`p-3 glass-morphism ${hasWeeklyDiscount('tomatoes') ? 'border-royal-gold/40 shadow-gold' : 'border-royal-crimson/20'} rounded-lg relative overflow-hidden`}>
                  {hasWeeklyDiscount('tomatoes') && (
                    <div className="absolute -right-6 -top-1 transform rotate-45 bg-royal-gold text-black px-6 py-1 text-xs font-bold shadow-md">
                      50% OFF
                    </div>
                  )}
                  <div className="flex items-center mb-2">
                    <div className="text-xl mr-2">🍅</div>
                    <div className="font-medium">Throw Tomatoes</div>
                  </div>
                  <p className="text-white/70 text-sm">Pelt your target with rotten tomatoes. A classic form of public ridicule.</p>
                </div>
                
                <div className={`p-3 glass-morphism ${hasWeeklyDiscount('jester') ? 'border-royal-gold/40 shadow-gold' : 'border-royal-purple/20'} rounded-lg relative overflow-hidden`}>
                  {hasWeeklyDiscount('jester') && (
                    <div className="absolute -right-6 -top-1 transform rotate-45 bg-royal-gold text-black px-6 py-1 text-xs font-bold shadow-md">
                      30% OFF
                    </div>
                  )}
                  <div className="flex items-center mb-2">
                    <div className="text-xl mr-2">🃏</div>
                    <div className="font-medium">Crown as Jester</div>
                  </div>
                  <p className="text-white/70 text-sm">Crown your target as the realm's fool with a jester's hat and bells.</p>
                </div>
                
                <div className={`p-3 glass-morphism ${hasWeeklyDiscount('roast') ? 'border-royal-gold/40 shadow-gold' : 'border-orange-500/20'} rounded-lg relative overflow-hidden`}>
                  {hasWeeklyDiscount('roast') && (
                    <div className="absolute -right-6 -top-1 transform rotate-45 bg-royal-gold text-black px-6 py-1 text-xs font-bold shadow-md">
                      30% OFF
                    </div>
                  )}
                  <div className="flex items-center mb-2">
                    <div className="text-xl mr-2">🔥</div>
                    <div className="font-medium">Royal Roast</div>
                  </div>
                  <p className="text-white/70 text-sm">Subject your target to a royal roasting with flames of mockery.</p>
                </div>
                
                <div className={`p-3 glass-morphism ${hasWeeklyDiscount('stocks') ? 'border-royal-gold/40 shadow-gold' : 'border-amber-800/20'} rounded-lg relative overflow-hidden`}>
                  {hasWeeklyDiscount('stocks') && (
                    <div className="absolute -right-6 -top-1 transform rotate-45 bg-royal-gold text-black px-6 py-1 text-xs font-bold shadow-md">
                      30% OFF
                    </div>
                  )}
                  <div className="flex items-center mb-2">
                    <div className="text-xl mr-2">🪵</div>
                    <div className="font-medium">Place in Stocks</div>
                  </div>
                  <p className="text-white/70 text-sm">Place your target in the public stocks. The ultimate medieval humiliation.</p>
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
                  <MockeryUserCard
                    user={formatUserForMockeryCard(targetUser)}
                    isMocked={mockeryEffects[targetUser.id] || null}
                    isOnCooldown={mockeryCooldown[targetUser.id] || false}
                    mockeryCount={getMockeryCount(targetUser.id)}
                    isProtected={isUserProtected(targetUser.id)}
                    onMockery={handleMockeryUser}
                    featuredAction={discountedAction}
                  />
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="protection" className="mt-6">
            <div className="max-w-lg mx-auto">
              <MockeryProtectionCard 
                isProtected={currentUserProtected}
                timeRemaining={protectionTimeRemaining}
                onPurchaseProtection={handlePurchaseProtection}
              />
            </div>
          </TabsContent>
          
          <TabsContent value="most-mocked" className="mt-6">
            {mostMockedUsers.length > 0 ? (
              <div className="space-y-4">
                <h3 className="font-medium text-lg flex items-center">
                  <Crown className="mr-2 h-5 w-5 text-royal-crimson" />
                  Most Ridiculed Nobles
                </h3>
                
                <div className="grid grid-cols-1 gap-2">
                  {mostMockedUsers.slice(0, 5).map((user, index) => (
                    <div 
                      key={user.id}
                      className="glass-morphism border-white/10 p-3 rounded-lg flex items-center justify-between"
                    >
                      <div className="flex items-center">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full glass-morphism border-royal-crimson/30 bg-royal-crimson/10 mr-3 font-bold text-royal-crimson">
                          #{index + 1}
                        </div>
                        <div>
                          <div className="font-medium">{user.username}</div>
                          <div className="text-sm text-white/60">
                            Leaderboard Rank: #{user.rank}
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-royal-crimson flex items-center bg-royal-crimson/10 px-3 py-1 rounded-full">
                        <span className="font-bold mr-1">{getMockeryCount(user.id)}</span>
                        <span className="text-sm">mockeries</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-center mt-6">
                  <Button 
                    onClick={() => setCurrentTab('mock')}
                    className="glass-morphism border-royal-crimson/20 bg-royal-crimson/10 text-royal-crimson hover:bg-royal-crimson/20"
                  >
                    <ScrollText className="mr-2 h-4 w-4" />
                    Back to Royal Mockery
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="mb-4 w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto">
                  <ScrollText className="h-8 w-8 text-white/30" />
                </div>
                <h3 className="text-lg font-medium text-white/70">No Mockeries Yet</h3>
                <p className="text-white/50 max-w-md mx-auto mt-2">
                  No nobles have been mocked yet. Be the first to unleash the royal mockery!
                </p>
                <Button 
                  onClick={() => setCurrentTab('mock')}
                  className="mt-6 glass-morphism border-royal-gold/20 bg-royal-gold/10 text-royal-gold hover:bg-royal-gold/20"
                >
                  <ScrollText className="mr-2 h-4 w-4" />
                  Start Mocking
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
        
        <div className="mt-8 p-4 glass-morphism border-white/10 rounded-lg">
          <h3 className="font-medium royal-gradient flex items-center mb-3">
            <Sparkles className="mr-2 h-4 w-4" /> Leaderboard Rankings Explained
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-white/70">
            <div className="flex items-start">
              <div className="bg-royal-gold/20 p-2 rounded-full mr-3 flex-shrink-0">
                <DollarSign className="h-4 w-4 text-royal-gold" />
              </div>
              <div>
                <h4 className="font-medium text-white mb-1">Leaderboard Rankings</h4>
                <p>Your leaderboard position is determined solely by funds <strong>deposited</strong> to your SpendThrone account. Only actual deposits count toward your rank.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-royal-purple/20 p-2 rounded-full mr-3 flex-shrink-0">
                <ScrollText className="h-4 w-4 text-royal-purple" />
              </div>
              <div>
                <h4 className="font-medium text-white mb-1">Mockery Effects</h4>
                <p>Spending on mockery features or protection is purely cosmetic and visual. These purchases do not affect your or others' leaderboard positions.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Confirmation modal */}
        <Dialog open={showModal} onOpenChange={setShowModal}>
          {selectedUser && (
            <MockeryModal
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
              mockeryType={selectedAction}
              onConfirm={confirmMockery}
              onCancel={() => setShowModal(false)}
              hasDiscount={hasWeeklyDiscount(selectedAction)}
            />
          )}
        </Dialog>
      </div>
    </TooltipProvider>
  );
};

export default RoyalMockeryFestival;
