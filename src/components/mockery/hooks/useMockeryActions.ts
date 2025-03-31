
import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { useSound } from '@/hooks/use-sound';
import { User } from '@/types/user';
import { MockeryAction } from '@/types/mockery-types';
import { adaptUserProfileToUser } from '@/utils/userAdapter';
import { spendFromWallet } from '@/services/walletService';

export interface UseMockeryActionsReturn {
  selectedAction: MockeryAction | null;
  targetUser: string;
  showMockeryEffect: boolean;
  mockeryEffectData: {
    username: string;
    action: MockeryAction;
  };
  handleSelectAction: (action: MockeryAction) => boolean;
  handleMockery: (username: string, action: string, amount: number) => boolean;
  handleBuyProtection: () => void;
  handleEffectComplete: () => void;
  setTargetUser: (username: string) => void;
}

const useMockeryActions = (mockUser: (user: any, targetUsername: string, action: MockeryAction) => void, protectUser: (username: string) => void): UseMockeryActionsReturn => {
  const { user } = useAuth();
  const { toast } = useToast();
  const sound = useSound();
  
  const [selectedAction, setSelectedAction] = useState<MockeryAction | null>(null);
  const [targetUser, setTargetUser] = useState<string>('');
  const [showMockeryEffect, setShowMockeryEffect] = useState(false);
  const [mockeryEffectData, setMockeryEffectData] = useState({
    username: '',
    action: 'tomatoes' as MockeryAction
  });
  
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
