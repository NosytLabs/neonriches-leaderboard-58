
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import useMockeryEffect from './hooks/useMockeryEffect';
import { Shield, Crown, Target, AlertTriangle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/auth';
import MockeryCard from './components/MockeryCard';
import MockeryUserCard from './components/MockeryUserCard';
import MockeryProtectionCard from './components/MockeryProtectionCard';
import { spendFromWallet } from '@/services/walletService';
import { convertToBasicAction } from './utils/mockeryUtils';
import { MockeryTier, MockeryAction } from '@/types/mockery';

const RoyalMockeryFestival: React.FC = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const mockeryEffect = useMockeryEffect();
  
  const [isProtected, setIsProtected] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);
  
  useEffect(() => {
    if (user) {
      setIsProtected(mockeryEffect.isUserProtected(Number(user.id)));
    }
  }, [user, mockeryEffect]);
  
  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    
    if (isProtected && user) {
      const calculateTimeRemaining = () => {
        const protection = mockeryEffect.protections.find(p => String(p.userId) === String(user.id));
        if (protection) {
          const timeLeft = protection.expiresAt - Date.now();
          setTimeRemaining(timeLeft > 0 ? timeLeft : 0);
          
          if (timeLeft <= 0) {
            setIsProtected(false);
          }
        } else {
          setIsProtected(false);
          setTimeRemaining(0);
        }
      };
      
      calculateTimeRemaining();
      intervalId = setInterval(calculateTimeRemaining, 10000); // Update every 10 seconds
    } else {
      setTimeRemaining(0);
    }
    
    return () => clearInterval(intervalId);
  }, [isProtected, user, mockeryEffect]);
  
  const handlePurchaseProtection = async () => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "You must be logged in to purchase protection.",
        variant: "destructive"
      });
      return;
    }
    
    const success = await spendFromWallet(
      user,
      5,
      'mockery_protection',
      'Purchased Mockery Protection',
      {}
    );
    
    if (success) {
      mockeryEffect.addMockeryProtection(Number(user.id), 24); // 24 hours protection
      setIsProtected(true);
      
      toast({
        title: "Mockery Protection Activated",
        description: "You are now protected from mockery for 24 hours.",
      });
    }
  };
  
  const handleMockeryAction = (userId: string, username: string, action: string, amount: number): boolean => {
    const basicAction = convertToBasicAction(action as any);
    const success = mockeryEffect.handleMockery(userId, username, basicAction, Number(userId));
    
    if (success) {
      toast({
        title: "Mockery Action Sent",
        description: `You have successfully performed ${action} on ${username}.`,
      });
      return true;
    } else {
      toast({
        title: "User is Protected",
        description: `${username} is protected from mockery.`,
        variant: "destructive"
      });
      return false;
    }
  };
  
  if (!user) {
    return (
      <Card className="glass-morphism border-royal-crimson/20">
        <CardContent className="text-center">
          <AlertTriangle className="h-6 w-6 inline-block mr-2" />
          You must be logged in to participate in the Mockery Festival.
        </CardContent>
      </Card>
    );
  }
  
  return (
    <div className="space-y-6">
      <Card className="glass-morphism border-royal-crimson/20">
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <Crown className="h-5 w-5 text-royal-crimson mr-2" />
            Mockery Actions
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <MockeryCard
            action="tomatoes"
            tier="common"
            username="User"
            onSelect={(action) => handleMockeryAction(user.id, "User", action, 10)}
            className="border-red-500/20"
          />
          <MockeryCard
            action="eggs"
            tier="uncommon"
            username="User"
            onSelect={(action) => handleMockeryAction(user.id, "User", action, 15)}
            className="border-yellow-500/20"
          />
          <MockeryCard
            action="stocks"
            tier="rare"
            username="User"
            onSelect={(action) => handleMockeryAction(user.id, "User", action, 20)}
            className="border-blue-500/20"
          />
          <MockeryCard
            action="silence"
            tier="epic"
            username="User"
            onSelect={(action) => handleMockeryAction(user.id, "User", action, 25)}
            className="border-purple-500/20"
          />
          <MockeryCard
            action="courtJester"
            tier="legendary"
            username="User"
            onSelect={(action) => handleMockeryAction(user.id, "User", action, 30)}
            className="border-royal-gold/20"
          />
        </CardContent>
      </Card>
      
      <MockeryProtectionCard
        isProtected={isProtected}
        timeRemaining={timeRemaining}
        onPurchaseProtection={handlePurchaseProtection}
      />
      
      <Card className="glass-morphism border-royal-crimson/20">
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <Target className="h-5 w-5 text-royal-crimson mr-2" />
            Target a User
          </CardTitle>
        </CardHeader>
        <CardContent>
          <MockeryUserCard 
            user={user}
            isMocked={false}
            isOnCooldown={false}
            mockeryCount={0}
            isProtected={false}
            onMockery={(username, action, amount) => {
              const basicAction = convertToBasicAction(action as any);
              return handleMockeryAction(user.id, username, basicAction, amount);
            }} 
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default RoyalMockeryFestival;
