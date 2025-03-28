
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollText, Crown, Target, Shield, Package, History } from 'lucide-react';
import { useMockery, MockeryAction, MockeryTier } from '@/components/mockery/hooks/useMockery';
import { 
  getMockeryActionsByTier, 
  getMockeryBundles,
  getMockeryLeaderboardMessage
} from '@/components/mockery/utils/mockeryUtils';
import RankingDisclaimer from '@/components/shared/RankingDisclaimer';
import RoyalDivider from '@/components/ui/royal-divider';
import MockeryCard from '@/components/mockery/components/MockeryCard';
import HallOfShame from '@/components/mockery/components/HallOfShame';
import { useToastContext } from '@/contexts/ToastContext';
import useNotificationSounds from '@/hooks/use-notification-sounds';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

// Mock user data for development
const mockUsers = [
  { id: 1, username: 'RoyalSpender', profileImage: '/avatars/user1.jpg', rank: 1, team: 'red', amountSpent: 25000 },
  { id: 2, username: 'GoldKnight', profileImage: '/avatars/user2.jpg', rank: 2, team: 'blue', amountSpent: 18500 },
  { id: 3, username: 'CrownSeeker', profileImage: '/avatars/user3.jpg', rank: 3, team: 'green', amountSpent: 15000 },
  { id: 4, username: 'MedievalMagnate', profileImage: '/avatars/user4.jpg', rank: 4, team: 'red', amountSpent: 12000 },
  { id: 5, username: 'DungeonMaster', profileImage: '/avatars/user5.jpg', rank: 5, team: 'blue', amountSpent: 9500 },
  { id: 6, username: 'RoyalJester', profileImage: '/avatars/user6.jpg', rank: 6, team: 'green', amountSpent: 7000 },
  { id: 7, username: 'KingdomBuilder', profileImage: '/avatars/user7.jpg', rank: 7, team: 'red', amountSpent: 5500 },
  { id: 8, username: 'ThroneWarrior', profileImage: '/avatars/user8.jpg', rank: 8, team: 'blue', amountSpent: 4000 },
];

const MockeryDescription = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-6">
      <div>
        <h1 className="text-3xl font-bold font-royal royal-gradient mb-2 flex items-center">
          <Crown className="mr-2 h-7 w-7 text-royal-gold" />
          Royal Mockery Hall
        </h1>
        <p className="text-white/70">
          Welcome to the Royal Mockery Hall, where you can engage in medieval-style satirical mockery 
          with purely cosmetic effects. Choose from a variety of mockery options across different tiers.
        </p>
      </div>
    </div>
  );
};

const MockeryPage = () => {
  const { addToast } = useToastContext();
  const { playSound } = useNotificationSounds();
  const [currentTier, setCurrentTier] = useState<MockeryTier>('common');
  const [selectedMockery, setSelectedMockery] = useState<MockeryAction | null>(null);
  const [selectedTarget, setSelectedTarget] = useState<number | null>(null);
  
  const { 
    handleMockery, 
    mockeryCooldown, 
    mockeryEffects, 
    getMockeryCount, 
    isUserProtected,
    purchaseHistory,
    getMostMockedUsers
  } = useMockery();
  
  // Get mockery options for current tier
  const mockeryOptions = getMockeryActionsByTier(currentTier);
  
  // Get mockery bundles
  const mockeryBundles = getMockeryBundles();
  
  // Get most mocked users
  const mostMockedUsers = getMostMockedUsers(5);
  
  // Handle mockery selection
  const handleSelectMockery = (action: MockeryAction) => {
    setSelectedMockery(action);
    playSound('click', 0.2);
  };
  
  // Handle target selection
  const handleSelectTarget = (userId: number) => {
    setSelectedTarget(userId);
    playSound('click', 0.2);
  };
  
  // Handle mockery submission
  const handleSubmitMockery = () => {
    if (!selectedMockery || selectedTarget === null) {
      addToast({
        title: "Selection Required",
        description: "Please select both a mockery type and a target.",
        variant: "destructive"
      });
      return;
    }
    
    const targetUser = mockUsers.find(user => user.id === selectedTarget);
    if (!targetUser) return;
    
    const success = handleMockery(selectedTarget, targetUser.username, selectedMockery, 0);
    
    if (success) {
      playSound('purchase', 0.3);
      addToast({
        title: "Mockery Applied!",
        description: `You have successfully mocked ${targetUser.username} with ${selectedMockery}.`,
      });
      setSelectedMockery(null);
      setSelectedTarget(null);
    }
  };
  
  // Handle bundle purchase
  const handleBundlePurchase = (bundleId: string) => {
    const bundle = mockeryBundles.find(b => b.id === bundleId);
    if (!bundle) return;
    
    playSound('purchase', 0.3);
    addToast({
      title: "Bundle Purchased!",
      description: `You have purchased the ${bundle.name} for $${bundle.bundlePrice.toFixed(2)}.`,
    });
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <MockeryDescription />
      
      <RankingDisclaimer 
        className="mb-8" 
        messagePrefix="Important:" 
        variant="info" 
        message={getMockeryLeaderboardMessage()}
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Tabs defaultValue="common" value={currentTier} onValueChange={(value) => setCurrentTier(value as MockeryTier)}>
            <TabsList className="w-full mb-6">
              <TabsTrigger value="common" className="flex-1">Common</TabsTrigger>
              <TabsTrigger value="uncommon" className="flex-1">Uncommon</TabsTrigger>
              <TabsTrigger value="rare" className="flex-1">Rare</TabsTrigger>
              <TabsTrigger value="epic" className="flex-1">Epic</TabsTrigger>
              <TabsTrigger value="legendary" className="flex-1">Legendary</TabsTrigger>
            </TabsList>
            
            <TabsContent value="common" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mockeryOptions.map(option => (
                  <MockeryCard 
                    key={option.type}
                    action={option.type}
                    tier={option.tier}
                    username="Target Noble"
                    onSelect={handleSelectMockery}
                    selected={selectedMockery === option.type}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="uncommon" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mockeryOptions.map(option => (
                  <MockeryCard 
                    key={option.type}
                    action={option.type}
                    tier={option.tier}
                    username="Target Noble"
                    onSelect={handleSelectMockery}
                    selected={selectedMockery === option.type}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="rare" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mockeryOptions.map(option => (
                  <MockeryCard 
                    key={option.type}
                    action={option.type}
                    tier={option.tier}
                    username="Target Noble"
                    onSelect={handleSelectMockery}
                    selected={selectedMockery === option.type}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="epic" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mockeryOptions.map(option => (
                  <MockeryCard 
                    key={option.type}
                    action={option.type}
                    tier={option.tier}
                    username="Target Noble"
                    onSelect={handleSelectMockery}
                    selected={selectedMockery === option.type}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="legendary" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mockeryOptions.map(option => (
                  <MockeryCard 
                    key={option.type}
                    action={option.type}
                    tier={option.tier}
                    username="Target Noble"
                    onSelect={handleSelectMockery}
                    selected={selectedMockery === option.type}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <RoyalDivider variant="line" label="SELECT TARGET" className="my-6" />
          
          <div className="space-y-4">
            <h3 className="font-medium flex items-center text-lg">
              <Target className="mr-2 h-5 w-5 text-royal-crimson" />
              Choose a Noble to Mock
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mockUsers.map(user => (
                <div
                  key={user.id}
                  className={`glass-morphism border p-4 rounded-lg cursor-pointer transition-all ${
                    selectedTarget === user.id 
                      ? 'border-royal-crimson' 
                      : 'border-white/10 hover:border-white/30'
                  }`}
                  onClick={() => handleSelectTarget(user.id)}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-white/10">
                      {user.profileImage ? (
                        <img 
                          src={user.profileImage} 
                          alt={user.username} 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center font-bold text-lg">
                          {user.username[0]}
                        </div>
                      )}
                    </div>
                    
                    <div>
                      <div className="flex items-center">
                        <h4 className="font-medium">{user.username}</h4>
                        <span className="ml-2 text-xs bg-white/10 px-1.5 py-0.5 rounded-full text-white/70">
                          #{user.rank}
                        </span>
                      </div>
                      <p className="text-sm text-white/60">
                        ${user.amountSpent.toLocaleString()} spent
                      </p>
                    </div>
                    
                    {isUserProtected(user.id) && (
                      <div className="ml-auto text-royal-purple">
                        <Shield className="h-5 w-5" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-end mt-6">
              <Button 
                size="lg"
                className={`${
                  selectedMockery && selectedTarget !== null
                    ? 'bg-royal-crimson hover:bg-royal-crimson/90'
                    : 'bg-gray-500 hover:bg-gray-500/90 cursor-not-allowed'
                }`}
                disabled={!selectedMockery || selectedTarget === null}
                onClick={handleSubmitMockery}
              >
                Apply Mockery
              </Button>
            </div>
          </div>
        </div>
        
        <div className="space-y-8">
          <HallOfShame 
            mostMockedUsers={mostMockedUsers}
            recentMockeries={purchaseHistory.slice(0, 10)}
          />
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5 text-royal-gold" />
                Mockery Bundles
              </CardTitle>
              <CardDescription>
                Save on mockery options with these bundles
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {mockeryBundles.map(bundle => (
                <div 
                  key={bundle.id}
                  className="glass-morphism border-white/10 p-4 rounded-lg"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-royal-gold">{bundle.name}</h4>
                    <div className="text-right">
                      <div className="text-xs line-through text-white/50">
                        ${bundle.originalPrice.toFixed(2)}
                      </div>
                      <div className="font-bold text-royal-gold">
                        ${bundle.bundlePrice.toFixed(2)}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 mb-3">
                    {bundle.actions.map(action => (
                      <div 
                        key={action}
                        className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"
                      >
                        {mockeryOptions.find(opt => opt.type === action)?.emoji || '📜'}
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-sm text-white/70 mb-3">
                    Save {((1 - (bundle.bundlePrice / bundle.originalPrice)) * 100).toFixed(0)}% with this bundle!
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => handleBundlePurchase(bundle.id)}
                  >
                    Purchase Bundle
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-royal-purple" />
                Royal Protection
              </CardTitle>
              <CardDescription>
                Shield yourself from mockery
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="glass-morphism border-royal-purple/30 p-4 rounded-lg bg-royal-purple/10">
                <h4 className="font-bold text-royal-purple mb-2">24-Hour Protection</h4>
                <p className="text-sm text-white/80 mb-3">
                  Secure royal immunity from all mockery effects for 24 hours.
                </p>
                <Button className="w-full bg-royal-purple hover:bg-royal-purple/90">
                  Purchase for $5.00
                </Button>
              </div>
              
              <div className="glass-morphism border-white/10 p-4 rounded-lg">
                <h4 className="font-bold mb-2">7-Day Protection</h4>
                <p className="text-sm text-white/80 mb-3">
                  Extended royal protection for a full week at a discounted rate.
                </p>
                <Button variant="outline" className="w-full">
                  Purchase for $30.00
                </Button>
              </div>
              
              <div className="glass-morphism border-white/10 p-4 rounded-lg">
                <h4 className="font-bold mb-2">30-Day Protection</h4>
                <p className="text-sm text-white/80 mb-3">
                  Premium royal protection for a full month, our best value.
                </p>
                <Button variant="outline" className="w-full">
                  Purchase for $100.00
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MockeryPage;
