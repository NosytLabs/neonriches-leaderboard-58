
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Target, Shield, Crown, Info, User, Bell, Cloud } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/auth';
import { useToast } from '@/hooks/use-toast';
import useMockery from '@/hooks/use-mockery';
import { MockeryAction } from '@/types/mockery';
import MockeryProtectionCard from '@/components/mockery/components/MockeryProtectionCard';
import HallOfShame from '@/components/mockery/components/HallOfShame';
import MockeryCard from '@/components/mockery/components/MockeryCard';
import MockeryUserCard from '@/components/mockery/components/MockeryUserCard';
import MockeryEffect from '@/components/mockery/MockeryEffect';
import MockeryHowItWorks from '@/components/mockery/components/MockeryHowItWorks';
import { adaptUserProfileToUser } from '@/utils/userAdapter';
import { spendFromWallet } from '@/services/walletService';
import { getMockeryDescription } from '@/utils/mockeryUtils';

const RoyalMockeryFestival = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('mockery');
  const [selectedAction, setSelectedAction] = useState<MockeryAction | null>(null);
  const [targetUser, setTargetUser] = useState<string>('');
  const [showMockeryEffect, setShowMockeryEffect] = useState(false);
  const [mockeryEffectData, setMockeryEffectData] = useState({
    username: '',
    action: 'tomatoes' as MockeryAction
  });
  
  const { 
    mockUsers, 
    isUserProtected, 
    protectUser, 
    isUserShamed, 
    canUserBeMocked, 
    mockUser,
    getUserMockeryCount,
    getUserMockedOthersCount,
    getActiveMockery
  } = useMockery();
  
  const handleSelectAction = (action: MockeryAction) => {
    setSelectedAction(action);
    return true;
  };
  
  const handleMockery = (username: string, action: string, amount: number) => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "You must be logged in to perform mockery actions.",
        variant: "destructive"
      });
      return false;
    }
    
    if (!username || !action) {
      toast({
        title: "Missing Information",
        description: "Please select a user and mockery action to proceed.",
        variant: "destructive"
      });
      return false;
    }
    
    // Convert user to full User type
    const fullUser = adaptUserProfileToUser(user);
    
    // Attempt to spend money for the mockery
    const success = spendFromWallet(
      fullUser,
      amount,
      'mockery' as any,
      `${action} mockery of ${username}`,
      { targetUser: username, mockeryType: action }
    );
    
    if (success) {
      // Mockery successful
      mockUser(fullUser, username, action as MockeryAction);
      
      // Show mockery effect
      setMockeryEffectData({
        username,
        action: action as MockeryAction
      });
      setShowMockeryEffect(true);
      
      return true;
    } else {
      toast({
        title: "Mockery Failed",
        description: "Your digital treasury is insufficient to finance this mockery. Consider adding more funds to your account.",
        variant: "destructive"
      });
      
      return false;
    }
  };
  
  const handleBuyProtection = () => {
    if (!user) return;
    
    // Convert to full User
    const fullUser = adaptUserProfileToUser(user);
    
    const protectionCost = 50; // Updated protection cost
    
    const success = spendFromWallet(
      fullUser,
      protectionCost,
      'protection' as any,
      'Purchased royal mockery protection',
      {}
    );
    
    if (success) {
      protectUser(user.username);
      
      toast({
        title: "Royal Protection Purchased",
        description: "You are now protected from mockery for 7 days. Your digital fortress is secure, with moat filled and drawbridge raised!",
        variant: "success"
      });
    } else {
      toast({
        title: "Purchase Failed",
        description: "You do not have enough funds to buy protection. Your digital castle remains vulnerable.",
        variant: "destructive"
      });
    }
  };
  
  const handleEffectComplete = () => {
    setShowMockeryEffect(false);
    
    toast({
      title: "Mockery Successful",
      description: `You have successfully subjected ${mockeryEffectData.username} to ${mockeryEffectData.action}! Your digital moat of superiority grows deeper.`,
      variant: "default"
    });
  };

  // Transform the mockUsers to match the MockedUser interface
  const mockedUsers = mockUsers
    .filter(user => isUserShamed(user.username))
    .map(user => ({
      username: user.username,
      displayName: user.username,
      avatarUrl: user.profileImage,
      mockedReason: `Subjected to ${user.tier || 'unknown'} mockery`,
      mockedTimestamp: user.lastMocked ? new Date(user.lastMocked).toISOString() : new Date().toISOString(),
      mockedBy: 'Unknown user',
      mockedTier: user.tier,
      mockeryCount: user.mockeryCount || 1
    }));
  
  return (
    <>
      <Card className="glass-morphism border-royal-crimson/20">
        <CardHeader>
          <div className="flex items-center">
            <Target className="mr-3 h-6 w-6 text-royal-crimson" />
            <CardTitle>Royal Mockery Festival</CardTitle>
          </div>
          <CardDescription>
            A satirical take on medieval public shaming - apply purely cosmetic effects to other users' profiles
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <div className="mb-4 p-3 bg-royal-crimson/10 border border-royal-crimson/20 rounded-md">
            <p className="text-sm flex items-start">
              <Bell className="h-4 w-4 text-royal-crimson mr-2 mt-0.5 flex-shrink-0" />
              <span>
                <strong>Important:</strong> Mockery effects are purely visual and have no impact on rankings or functionality. They're designed as a satirical take on digital status.
              </span>
            </p>
          </div>
          
          <Tabs defaultValue="mockery" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="glass-morphism border-white/10 grid grid-cols-4">
              <TabsTrigger value="mockery" className="flex items-center gap-2">
                <Target size={16} />
                <span>Mock Others</span>
              </TabsTrigger>
              <TabsTrigger value="protection" className="flex items-center gap-2">
                <Shield size={16} />
                <span>Protection</span>
              </TabsTrigger>
              <TabsTrigger value="hall" className="flex items-center gap-2">
                <Crown size={16} />
                <span>Hall of Shame</span>
              </TabsTrigger>
              <TabsTrigger value="howto" className="flex items-center gap-2">
                <Info size={16} />
                <span>How It Works</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="mockery" className="space-y-4 mt-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="col-span-1 md:col-span-3 glass-morphism border-royal-gold/30 p-4 rounded-lg shadow-gold">
                  <div className="flex items-center">
                    <Badge className="bg-royal-gold text-black font-bold">NEW!</Badge>
                    <h3 className="ml-2 font-medium">Premium Mockery Effect</h3>
                  </div>
                  <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <div className="col-span-2">
                      <p className="text-white/80">
                        Deploy our exclusive Royal Smoke Bomb effect! Completely shroud a user's profile in thick, dramatic smoke for 8 hours.
                      </p>
                      <p className="text-sm text-white/60 mt-2">
                        The profile remains accessible, but visitors must peer through the royal fog to see it!
                      </p>
                    </div>
                    <div className="col-span-1">
                      <MockeryCard 
                        action="smokeBomb" 
                        tier="legendary"
                        username={targetUser}
                        onSelect={handleSelectAction}
                        selected={selectedAction === 'smokeBomb'}
                        className=""
                      />
                    </div>
                  </div>
                </div>
                
                <MockeryCard 
                  action="tomatoes" 
                  tier="common"
                  username={targetUser}
                  onSelect={handleSelectAction} 
                  selected={selectedAction === 'tomatoes'}
                  className=""
                />
                
                <MockeryCard 
                  action="putridEggs" 
                  tier="uncommon"
                  username={targetUser}
                  onSelect={handleSelectAction}
                  selected={selectedAction === 'putridEggs'}
                  className=""
                />
                
                <MockeryCard 
                  action="stocks" 
                  tier="rare"
                  username={targetUser}
                  onSelect={handleSelectAction}
                  selected={selectedAction === 'stocks'}
                  className=""
                />
                
                <MockeryCard 
                  action="silence" 
                  tier="epic"
                  username={targetUser}
                  onSelect={handleSelectAction}
                  selected={selectedAction === 'silence'}
                  className=""
                />
                
                <MockeryCard 
                  action="courtJester" 
                  tier="legendary"
                  username={targetUser}
                  onSelect={handleSelectAction}
                  selected={selectedAction === 'courtJester'}
                  className=""
                />
                
                <MockeryCard 
                  action="dunce" 
                  tier="common"
                  username={targetUser}
                  onSelect={handleSelectAction}
                  selected={selectedAction === 'dunce'}
                  className=""
                />
              </div>
              
              <div className="mt-6">
                {user && (
                  <MockeryUserCard 
                    user={adaptUserProfileToUser(user)}
                    isMocked={false}
                    isOnCooldown={false}
                    mockeryCount={getUserMockeryCount(user.username)}
                    mockedOthersCount={getUserMockedOthersCount(user.username)}
                    isProtected={isUserProtected(user.username)}
                    activeMockery={getActiveMockery(user.username)?.action as MockeryAction}
                    onMockery={(username, action, amount) => {
                      setTargetUser(username);
                      return handleMockery(username, action, Number(amount));
                    }}
                  />
                )}
              </div>
              
              <div className="mt-4 p-4 glass-morphism border-white/10 rounded-lg">
                <div className="flex items-center mb-3">
                  <User className="h-5 w-5 text-white/60 mr-2" />
                  <h3 className="font-medium">Mockery Counts & Statistics</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="glass-morphism border-white/10 p-3 rounded">
                    <div className="text-2xl font-bold text-center text-royal-crimson">
                      {mockedUsers.length}
                    </div>
                    <div className="text-center text-sm text-white/70">
                      Active Mocked Users
                    </div>
                  </div>
                  
                  <div className="glass-morphism border-white/10 p-3 rounded">
                    <div className="text-2xl font-bold text-center text-royal-gold">
                      {user ? getUserMockedOthersCount(user.username) : 0}
                    </div>
                    <div className="text-center text-sm text-white/70">
                      Users You've Mocked
                    </div>
                  </div>
                  
                  <div className="glass-morphism border-white/10 p-3 rounded">
                    <div className="text-2xl font-bold text-center text-royal-purple">
                      {user ? getUserMockeryCount(user.username) : 0}
                    </div>
                    <div className="text-center text-sm text-white/70">
                      Times You've Been Mocked
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="protection" className="mt-4">
              <MockeryProtectionCard 
                isProtected={user ? isUserProtected(user.username) : false}
                onPurchase={handleBuyProtection}
              />
            </TabsContent>
            
            <TabsContent value="hall" className="mt-4">
              <HallOfShame mockedUsers={mockedUsers} />
            </TabsContent>
            
            <TabsContent value="howto" className="mt-4">
              <MockeryHowItWorks />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      
      <MockeryEffect 
        username={mockeryEffectData.username}
        action={mockeryEffectData.action}
        isActive={showMockeryEffect}
        onComplete={handleEffectComplete}
      />
    </>
  );
};

export default RoyalMockeryFestival;
