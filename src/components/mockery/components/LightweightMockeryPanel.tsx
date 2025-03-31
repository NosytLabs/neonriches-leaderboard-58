
import React from 'react';
import { Card } from '@/components/ui/card';
import useMockery from '@/hooks/use-mockery';
import { useAuth } from '@/hooks/useAuth';
import { MockeryAction } from '@/types/mockery';
import { Button } from '@/components/ui/button';
import { Shield, Target, Crown, Egg } from 'lucide-react';
import { getMockeryName, getMockeryDescription } from '@/utils/mockery';

const LightweightMockeryPanel = () => {
  const { user } = useAuth();
  const { 
    isUserProtected, 
    protectUser,
    mockUser 
  } = useMockery();
  
  const isProtected = user ? isUserProtected(user.username) : false;
  
  const mockeryOptions: MockeryAction[] = ['tomatoes', 'eggs', 'crown'];
  
  const handleApplyMockery = async (action: MockeryAction) => {
    if (!user) return;
    
    await mockUser('target-user-id', action);
  };
  
  const handleBuyProtection = async () => {
    if (!user) return;
    
    await protectUser(user.username);
  };
  
  return (
    <div className="space-y-6">
      <Card className="p-4 border border-royal-gold/20 bg-gradient-to-b from-black/50 to-royal-purple/5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium">Royal Protection</h3>
          <Shield className="h-5 w-5 text-royal-gold" />
        </div>
        
        <p className="text-sm text-muted-foreground mb-4">
          Purchase royal protection to shield yourself from mockery and public shame.
        </p>
        
        <div className="flex justify-end">
          <Button 
            variant="outline" 
            className="border-royal-gold/30 text-royal-gold hover:bg-royal-gold/10"
            onClick={handleBuyProtection}
            disabled={isProtected}
          >
            {isProtected ? 'Protected' : 'Buy Protection ($5.00)'}
          </Button>
        </div>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {mockeryOptions.map((action) => (
          <Card key={action} className="p-4 border border-gray-800">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium">{getMockeryName(action)}</h3>
              {action === 'tomatoes' && <Target className="h-5 w-5 text-red-500" />}
              {action === 'eggs' && <Egg className="h-5 w-5 text-yellow-500" />}
              {action === 'crown' && <Crown className="h-5 w-5 text-amber-500" />}
            </div>
            
            <p className="text-xs text-muted-foreground mb-3">
              {getMockeryDescription(action)}
            </p>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="w-full border border-gray-800"
              onClick={() => handleApplyMockery(action)}
            >
              Apply ($0.25)
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LightweightMockeryPanel;
