
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useAuth } from '@/hooks/useAuth';
import useMockery from '@/hooks/use-mockery';
import MockeryEffect from './components/MockeryEffect';
import MockeryTabs from './components/MockeryTabs';
import MockeryHeader from './components/MockeryHeader';
import useMockeryActions from './hooks/useMockeryActions';
import useMockedUsers from './hooks/useMockedUsers';

const RoyalMockeryFestival = () => {
  const { user } = useAuth();
  
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
  
  const {
    selectedAction,
    targetUser,
    showMockeryEffect,
    mockeryEffectData,
    handleSelectAction,
    handleMockery,
    handleBuyProtection,
    handleEffectComplete,
    setTargetUser
  } = useMockeryActions(mockUser, protectUser);
  
  const { mockedUsers, getActiveMockeryWrapper } = useMockedUsers(
    mockUsers, 
    isUserShamed, 
    getActiveMockery
  );
  
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
