
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Bell } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import useMockery from '@/hooks/use-mockery';
import { MockeryAction, MockedUser } from '@/types/mockery';
import MockeryEffect from '@/components/mockery/components/MockeryEffect';
import { Link } from 'react-router-dom';
import { adaptUserProfileToUser } from '@/utils/userAdapter';
import { spendFromWallet } from '@/services/walletService';
import MockeryTabs from './components/MockeryTabs';
import { useSound } from '@/hooks/use-sound';

const RoyalMockeryFestival = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const sound = useSound();
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
      toast({
        title: "Authentication Required",
        description: "You must be logged in to perform mockery actions."
      });
      return false;
    }
    
    if (!username || !action) {
      toast({
        title: "Missing Information",
        description: "Please select a user and mockery action to proceed."
      });
      return false;
    }
    
    const fullUser = adaptUserProfileToUser(user);
    
    const successResult = spendFromWallet(
      fullUser,
      amount,
      'mockery' as any,
      `${action} mockery of ${username}`,
      { targetUser: username, mockeryType: action }
    );
    
    if (successResult) {
      mockUser(fullUser, username, action as MockeryAction);
      
      setMockeryEffectData({
        username,
        action: action as MockeryAction
      });
      setShowMockeryEffect(true);
      
      sound.playSound('mockery', { volume: 0.5 });
      
      return true;
    } else {
      toast({
        title: "Mockery Failed",
        description: "Your digital treasury is insufficient to finance this mockery. Consider adding more funds to your account."
      });
      
      return false;
    }
  };
  
  const handleBuyProtection = () => {
    if (!user) return;
    
    const fullUser = adaptUserProfileToUser(user);
    
    const protectionCost = 50;
    
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
      
      sound.playSound('success', { volume: 0.5 });
    } else {
      toast({
        title: "Purchase Failed",
        description: "You do not have enough funds to buy protection. Your digital castle remains vulnerable."
      });
      
      sound.playSound('error', { volume: 0.5 });
    }
  };
  
  const handleEffectComplete = () => {
    setShowMockeryEffect(false);
    
    toast({
        title: "Mockery Successful",
        description: `You have successfully subjected ${mockeryEffectData.username} to ${mockeryEffectData.action}! Your digital moat of superiority grows deeper.`,
        variant: "success"
    });
  };

  const mockedUsers: MockedUser[] = mockUsers
    .filter(user => isUserShamed(user.username))
    .map(user => ({
      id: user.id || `generated-${user.username}`,
      userId: user.id,
      username: user.username,
      displayName: user.displayName || user.username,
      profileImage: user.profileImage || '',
      mockedReason: `Subjected to ${user.tier || 'unknown'} mockery`,
      mockedTimestamp: user.lastMocked ? user.lastMocked : new Date().toISOString(),
      mockedBy: 'Unknown user',
      mockedTier: user.mockeryCount ? user.tier : 'basic',
      mockeryCount: user.mockeryCount || 1,
      lastMocked: user.lastMocked,
      team: user.team,
      tier: user.tier || 'basic'
    }));
  
  const getActiveMockeryWrapper = (username: string): MockeryAction => {
    const mockeryEvent = getActiveMockery(username);
    if (mockeryEvent && typeof mockeryEvent === 'object' && 'action' in mockeryEvent) {
      return mockeryEvent.action as MockeryAction || 'tomatoes';
    }
    return 'tomatoes';
  };
  
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
          
          <MockeryTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            user={user}
            targetUser={targetUser}
            selectedAction={selectedAction}
            onSelectAction={handleSelectAction}
            mockedUsers={mockedUsers}
            getUserMockeryCount={getUserMockeryCount}
            getUserMockedOthersCount={getUserMockedOthersCount}
            isUserProtected={isUserProtected}
            getActiveMockery={getActiveMockeryWrapper}
            onMockery={handleMockery}
            onPurchaseProtection={handleBuyProtection}
          />
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
