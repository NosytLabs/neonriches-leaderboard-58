
import React, { useState, useCallback } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useAuth } from '@/hooks/useAuth';
import MockeryHeader from './components/MockeryHeader';
import MockeryTabs from './components/MockeryTabs';
import MockeryEffect from './components/MockeryEffect';
import { MockeryAction, MockedUser } from '@/types/mockery';
import { useToast } from '@/hooks/use-toast';

const RoyalMockeryFestival = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  
  // Mockery state
  const [activeTab, setActiveTab] = useState('mockery');
  const [targetUser, setTargetUser] = useState('');
  const [selectedAction, setSelectedAction] = useState<MockeryAction | null>(null);
  const [showMockeryEffect, setShowMockeryEffect] = useState(false);
  const [mockeryEffectData, setMockeryEffectData] = useState({
    username: '',
    action: 'tomatoes' as MockeryAction
  });
  
  // Mocked users for demonstration
  const [mockedUsers, setMockedUsers] = useState<MockedUser[]>([
    {
      id: "user1",
      username: 'KingMidas',
      displayName: 'King Midas',
      profileImage: 'https://randomuser.me/api/portraits/men/1.jpg',
      totalSpent: 15000,
      rank: 1,
      tier: 'royal',
      team: 'gold',
      isMocked: false,
      isProtected: false
    }
  ]);
  
  // Mockery handlers
  const handleSelectAction = useCallback((action: MockeryAction): boolean => {
    setSelectedAction(action);
    return true;
  }, []);
  
  const isUserProtected = useCallback((username: string): boolean => {
    // In real app, check if user has active protection
    return false;
  }, []);
  
  const getActiveMockery = useCallback((username: string): MockeryAction | null => {
    // In real app, check if user has active mockery
    return null;
  }, []);
  
  const getUserMockeryCount = useCallback((username: string): number => {
    return 0;
  }, []);
  
  const getUserMockedOthersCount = useCallback((username: string): number => {
    return 0;
  }, []);
  
  const handleMockery = useCallback((username: string, action: string, amount: number): boolean => {
    if (!selectedAction) return false;
    
    setMockeryEffectData({
      username,
      action: selectedAction
    });
    
    setShowMockeryEffect(true);
    
    toast({
      title: "Mockery Applied",
      description: `You've successfully applied ${action} to ${username}`,
    });
    
    return true;
  }, [selectedAction, toast]);
  
  const handleBuyProtection = useCallback((): boolean => {
    toast({
      title: "Protection Purchased",
      description: "You are now protected from mockery",
    });
    return true;
  }, [toast]);
  
  const handleEffectComplete = useCallback(() => {
    setShowMockeryEffect(false);
  }, []);
  
  return (
    <>
      <Card className="glass-morphism border-royal-crimson/20">
        <MockeryHeader />
        
        <CardContent>
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
            getActiveMockery={getActiveMockery}
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
