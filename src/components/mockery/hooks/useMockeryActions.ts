
import { useState, useCallback } from 'react';
import { MockeryAction, MockeryEffectData } from '@/types/mockery';

const useMockeryActions = (
  mockUser: (userId: string, action: MockeryAction, reason?: string) => Promise<boolean>,
  protectUser: (username: string) => Promise<boolean>
) => {
  const [selectedAction, setSelectedAction] = useState<MockeryAction | null>(null);
  const [targetUser, setTargetUser] = useState<string>('');
  const [showMockeryEffect, setShowMockeryEffect] = useState<boolean>(false);
  const [mockeryEffectData, setMockeryEffectData] = useState<MockeryEffectData>({
    username: '',
    action: 'tomatoes'
  });
  
  const handleSelectAction = useCallback((action: MockeryAction) => {
    setSelectedAction(action);
    return true;
  }, []);
  
  const handleMockery = useCallback(async (username: string, action: string, amount: number) => {
    if (!selectedAction) return false;
    
    const success = await mockUser(username, selectedAction);
    
    if (success) {
      setMockeryEffectData({
        username,
        action: selectedAction
      });
      
      setShowMockeryEffect(true);
    }
    
    return success;
  }, [selectedAction, mockUser]);
  
  const handleBuyProtection = useCallback(async () => {
    return await protectUser(targetUser || 'current-user');
  }, [protectUser, targetUser]);
  
  const handleEffectComplete = useCallback(() => {
    setShowMockeryEffect(false);
  }, []);
  
  return {
    selectedAction,
    targetUser,
    showMockeryEffect,
    mockeryEffectData,
    handleSelectAction,
    handleMockery,
    handleBuyProtection,
    handleEffectComplete,
    setTargetUser
  };
};

export default useMockeryActions;
