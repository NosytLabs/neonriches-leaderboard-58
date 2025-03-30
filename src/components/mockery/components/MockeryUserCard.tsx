
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { MockeryAction } from '@/types/mockery';
import { User } from '@/types/user';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Shield, Target, AlertTriangle, LucideIcon, User as UserIcon, Crown, Bell } from 'lucide-react';
import { MOCKERY_COSTS, getActiveMockeryClass } from '@/utils/mockeryUtils';
import { useToast } from '@/hooks/use-toast';
import PaymentModal from '@/components/PaymentModal';

interface MockeryUserCardProps {
  user: User;
  isMocked?: boolean;
  isOnCooldown?: boolean;
  mockeryCount?: number;
  mockedOthersCount?: number;
  isProtected?: boolean;
  activeMockery?: MockeryAction;
  onMockery: (username: string, action: string, amount: number) => boolean;
}

const MockeryUserCard: React.FC<MockeryUserCardProps> = ({
  user,
  isMocked = false,
  isOnCooldown = false,
  mockeryCount = 0,
  mockedOthersCount = 0,
  isProtected = false,
  activeMockery,
  onMockery
}) => {
  const [username, setUsername] = useState<string>('');
  const [selectedAction, setSelectedAction] = useState<string>('');
  const { toast } = useToast();
  
  const handleMockery = async () => {
    if (!username) {
      toast({
        title: "Username Required",
        description: "Please enter a username to mock.",
        variant: "destructive"
      });
      return false;
    }
    
    if (!selectedAction) {
      toast({
        title: "Action Required",
        description: "Please select a mockery action above.",
        variant: "destructive"
      });
      return false;
    }
    
    const cost = MOCKERY_COSTS[selectedAction as MockeryAction] || 10;
    
    const success = await onMockery(username, selectedAction, cost);
    
    if (success) {
      setUsername('');
      setSelectedAction('');
    }
    
    return success;
  };
  
  // Get active mockery class
  const mockeryClass = activeMockery ? getActiveMockeryClass(activeMockery) : '';
  
  return (
    <Card className={`glass-morphism border-white/10 ${mockeryClass}`}>
      <CardContent className="p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-shrink-0">
            <Avatar className="h-20 w-20 border border-white/10">
              <AvatarImage src={user.profileImage} alt={user.username} />
              <AvatarFallback>
                {user.username?.substring(0, 2).toUpperCase() || 'U'}
              </AvatarFallback>
            </Avatar>
            
            <div className="mt-2 flex flex-col items-center">
              <div className="text-xs text-white/50">Your Stats</div>
              <div className="grid grid-cols-2 gap-1 text-center mt-1 w-full">
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-royal-crimson">{mockeryCount}</span>
                  <span className="text-xs text-white/50">Mocked</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-royal-gold">{mockedOthersCount}</span>
                  <span className="text-xs text-white/50">Targets</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-grow space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-medium">{user.username}</h3>
              
              {isProtected && (
                <Badge variant="outline" className="bg-royal-purple/10 text-royal-purple border-royal-purple/30">
                  <Shield className="h-3 w-3 mr-1" />
                  Protected
                </Badge>
              )}
              
              {activeMockery && (
                <Badge variant="outline" className="bg-royal-crimson/10 text-royal-crimson border-royal-crimson/30">
                  <Target className="h-3 w-3 mr-1" />
                  {activeMockery === 'tomatoes' && 'Tomatoed'}
                  {activeMockery === 'putridEggs' && 'Egged'}
                  {activeMockery === 'stocks' && 'In Stocks'}
                  {activeMockery === 'silence' && 'Silenced'}
                  {activeMockery === 'courtJester' && 'Court Jester'}
                  {activeMockery === 'dunce' && 'Dunce'}
                  {activeMockery === 'smokeBomb' && 'Smoke Bombed'}
                </Badge>
              )}
            </div>
            
            <div className="p-3 bg-royal-navy/10 border border-royal-navy/20 rounded flex items-start">
              <AlertTriangle className="h-4 w-4 text-royal-navy mr-2 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-white/70">
                Enter a username to apply the selected mockery effect. This will apply a <strong>purely visual</strong> effect to the user's profile for a limited time.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="flex-grow">
                <Input
                  placeholder="Enter username to mock"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-white/5"
                />
              </div>
              
              <div>
                <PaymentModal
                  title="Apply Mockery Effect"
                  description={`Apply the selected mockery effect to ${username || 'the target'}`}
                  buttonText={
                    <>
                      <Target className="mr-2 h-4 w-4" />
                      Apply Mockery
                    </>
                  }
                  amount={selectedAction ? MOCKERY_COSTS[selectedAction as MockeryAction] || 10 : 0}
                  onSuccess={handleMockery}
                  disabled={!username || !selectedAction}
                  buttonVariant="default"
                  buttonClassName="w-full sm:w-auto"
                />
              </div>
            </div>
            
            <div className="pt-2 text-xs text-white/60 flex items-center justify-between">
              <div className="flex items-center">
                <Bell className="h-3.5 w-3.5 mr-1 text-white/40" />
                <span>Mockery effects are purely cosmetic and do not affect rankings</span>
              </div>
              
              {selectedAction && (
                <span className="ml-auto">
                  Selected: <span className="font-medium text-royal-gold">{selectedAction}</span>
                </span>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MockeryUserCard;
