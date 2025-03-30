
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Target, Shield, Crown, Info, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import useMockery from '@/hooks/use-mockery';
import { MockeryAction } from '@/types/mockery';
import MockeryProtectionCard from '@/components/mockery/components/MockeryProtectionCard';
import HallOfShame from '@/components/mockery/components/HallOfShame';
import MockeryEffect from '@/components/mockery/MockeryEffect';
import Link from '@/components/ui/link';
import { adaptUserProfileToUser } from '@/utils/userAdapter';
import { spendFromWallet } from '@/services/walletService';
import MockeryTabContent from './components/MockeryTabContent';

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
      toast.error({
        title: "Authentication Required",
        description: "You must be logged in to perform mockery actions."
      });
      return false;
    }
    
    if (!username || !action) {
      toast.error({
        title: "Missing Information",
        description: "Please select a user and mockery action to proceed."
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
      toast.error({
        title: "Mockery Failed",
        description: "Your digital treasury is insufficient to finance this mockery. Consider adding more funds to your account."
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
      
      toast.success({
        title: "Royal Protection Purchased",
        description: "You are now protected from mockery for 7 days. Your digital fortress is secure, with moat filled and drawbridge raised!"
      });
    } else {
      toast.error({
        title: "Purchase Failed",
        description: "You do not have enough funds to buy protection. Your digital castle remains vulnerable."
      });
    }
  };
  
  const handleEffectComplete = () => {
    setShowMockeryEffect(false);
    
    toast.success({
      title: "Mockery Successful",
      description: `You have successfully subjected ${mockeryEffectData.username} to ${mockeryEffectData.action}! Your digital moat of superiority grows deeper.`
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
                <Link to="/features#mockery-section" className="ml-1 text-royal-gold hover:underline">Learn more</Link>
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
              <MockeryTabContent 
                user={user}
                targetUser={targetUser}
                selectedAction={selectedAction}
                onSelectAction={handleSelectAction}
                mockedUsers={mockedUsers}
                getUserMockeryCount={getUserMockeryCount}
                getUserMockedOthersCount={getUserMockedOthersCount}
                isUserProtected={isUserProtected}
                getActiveMockery={getActiveMockery}
                onMockery={handleMockery}
              />
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
              <div className="text-center p-6 glass-morphism border-white/10 rounded-lg">
                <h3 className="text-xl font-bold mb-4">How the Royal Mockery Festival Works</h3>
                <p className="text-white/70 mb-6">
                  The Royal Mockery Festival allows you to apply purely cosmetic effects to other users' profiles.
                  These effects are entirely visual and have no impact on rankings or functionality.
                </p>
                <Link to="/features#mockery-section">
                  <Button className="bg-royal-purple hover:bg-royal-purple/90">
                    View Complete Mockery Guide
                  </Button>
                </Link>
              </div>
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
