
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useAuth } from '@/hooks/useAuth';
import useMockery from '@/hooks/use-mockery';
import MockeryEffect from './components/MockeryEffect';
import MockeryTabs from './components/MockeryTabs';
import MockeryHeader from './components/MockeryHeader';
import useMockeryActions from './hooks/useMockeryActions';
import useMockedUsers from './hooks/useMockedUsers';
import { MockeryAction } from '@/types/mockery-types';

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
  
  // Create a non-async wrapper to satisfy the expected function signature
  const onMockery = (username: string, action: string, amount: number) => {
    handleMockery(username, action as MockeryAction, amount).catch(error => {
      console.error("Error in mockery action:", error);
      return false;
    });
    return true;
  };
  
  // Modified getActiveMockeryWrapper to return a boolean instead of an object
  const getActiveMockeryBooleanWrapper = (username: string): boolean => {
    const mockery = getActiveMockery(username);
    return !!mockery; // Convert to boolean
  };
  
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
            getActiveMockery={getActiveMockeryBooleanWrapper}
            onMockery={onMockery}
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
