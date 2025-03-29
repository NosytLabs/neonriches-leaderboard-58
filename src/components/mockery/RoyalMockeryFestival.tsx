
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Target, Shield, Hourglass, Crown, Star } from 'lucide-react';
import { useAuth } from '@/contexts/auth';
import { useToast } from '@/hooks/use-toast';
import useMockery from '@/hooks/use-mockery';
import { MockeryAction } from '@/types/mockery';
import MockeryProtectionCard from '@/components/mockery/components/MockeryProtectionCard';
import HallOfShame from '@/components/mockery/components/HallOfShame';
import MockeryCard from '@/components/mockery/components/MockeryCard';
import MockeryUserCard from '@/components/mockery/components/MockeryUserCard';
import MockeryEffect from '@/components/mockery/MockeryEffect';
import { adaptUserProfileToUser } from '@/utils/userAdapter';
import { spendFromWallet } from '@/services/walletService';

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
    mockUser 
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
      mockUser(username, action as MockeryAction);
      
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
    
    const protectionCost = 10;
    
    const success = spendFromWallet(
      fullUser,
      protectionCost,
      'protection' as any,
      'Purchased mockery protection',
      {}
    );
    
    if (success) {
      protectUser(user.username);
      
      toast({
        title: "Protection Purchased",
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
      mockedTier: user.tier
    }));
  
  return (
    <>
      <Card className="glass-morphism border-royal-crimson/20">
        <CardHeader>
          <div className="flex items-center">
            <Target className="mr-3 h-6 w-6 text-royal-crimson" />
            <CardTitle>Digital Mockery Arena</CardTitle>
          </div>
          <CardDescription>
            Pay to apply cosmetic mockery effects to other users - purely visual satire with no functional impact
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <Tabs defaultValue="mockery" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="glass-morphism border-white/10 grid grid-cols-3">
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
            </TabsList>
            
            <TabsContent value="mockery" className="space-y-4 mt-4">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <MockeryCard 
                  action="tomatoes" 
                  tier="common"
                  username={targetUser}
                  onSelect={handleSelectAction} 
                  selected={selectedAction === 'tomatoes'}
                  className="md:col-span-1"
                />
                
                <MockeryCard 
                  action="eggs" 
                  tier="uncommon"
                  username={targetUser}
                  onSelect={handleSelectAction}
                  selected={selectedAction === 'eggs'}
                  className="md:col-span-1"
                />
                
                <MockeryCard 
                  action="stocks" 
                  tier="rare"
                  username={targetUser}
                  onSelect={handleSelectAction}
                  selected={selectedAction === 'stocks'}
                  className="md:col-span-1"
                />
                
                <MockeryCard 
                  action="silence" 
                  tier="epic"
                  username={targetUser}
                  onSelect={handleSelectAction}
                  selected={selectedAction === 'silence'}
                  className="md:col-span-1"
                />
                
                <MockeryCard 
                  action="courtJester" 
                  tier="legendary"
                  username={targetUser}
                  onSelect={handleSelectAction}
                  selected={selectedAction === 'courtJester'}
                  className="md:col-span-1"
                />
              </div>
              
              <div className="mt-6">
                {user && (
                  <MockeryUserCard 
                    user={adaptUserProfileToUser(user)}
                    isMocked={false}
                    isOnCooldown={false}
                    mockeryCount={0}
                    isProtected={false}
                    onMockery={(username, action, amount) => {
                      setTargetUser(username);
                      return handleMockery(username, action, Number(amount));
                    }}
                  />
                )}
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
