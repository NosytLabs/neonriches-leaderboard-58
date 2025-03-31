
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useAuth } from '@/hooks/useAuth';
import MockeryHeader from './components/MockeryHeader';
import MockeryTabs from './components/MockeryTabs';
import MockeryEffect from './components/MockeryEffect';
import { MockeryAction } from '@/types/mockery-types';

const RoyalMockeryFestival = () => {
  const { user } = useAuth();
  
  // Simplified mockery state
  const [targetUser, setTargetUser] = React.useState(null);
  const [selectedAction, setSelectedAction] = React.useState<MockeryAction>('tomatoes');
  const [showMockeryEffect, setShowMockeryEffect] = React.useState(false);
  const [mockeryEffectData, setMockeryEffectData] = React.useState({
    username: '',
    action: 'tomatoes' as MockeryAction
  });
  
  // Simplified user protection check
  const isUserProtected = (username: string): boolean => {
    // In real app, check if user has active protection
    return false;
  };
  
  // Simplified getActiveMockery function that returns a MockeryAction or null
  const getActiveMockery = (username: string): MockeryAction | null => {
    // In real app, check if user has active mockery
    return null;
  };
  
  // Mock counts
  const getUserMockeryCount = (username: string): number => 0;
  const getUserMockedOthersCount = (username: string): number => 0;
  
  // Simplified handlers
  const handleSelectAction = (action: MockeryAction): boolean => {
    setSelectedAction(action);
    return true;
  };
  
  const handleMockery = async (username: string, action: string, amount: number): boolean => {
    setMockeryEffectData({
      username,
      action: action as MockeryAction
    });
    setShowMockeryEffect(true);
    return true;
  };
  
  const handleBuyProtection = async (): boolean => {
    return true;
  };
  
  const handleEffectComplete = () => {
    setShowMockeryEffect(false);
  };
  
  // Prepare mocked users
  const mockedUsers = [
    {
      id: "user1", // Added id field
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
  ];
  
  return (
    <>
      <Card className="glass-morphism border-royal-crimson/20">
        <MockeryHeader />
        
        <CardContent>
          <MockeryTabs
            activeTab="mockery"
            setActiveTab={() => {}}
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
