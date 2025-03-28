
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Target, Shield } from 'lucide-react';
import { MockeryAction } from '@/types/mockery';
import { User } from '@/types/user';

export interface MockeryUserCardProps {
  user: User;
  isMocked: boolean;
  isOnCooldown: boolean;
  mockeryCount: number;
  isProtected: boolean;
  onMockery: (username: string, action: string, amount: number) => boolean;
}

const MockeryUserCard: React.FC<MockeryUserCardProps> = ({ 
  user,
  isMocked,
  isOnCooldown,
  mockeryCount,
  isProtected,
  onMockery 
}) => {
  const [username, setUsername] = useState('');
  const [selectedAction, setSelectedAction] = useState<MockeryAction>('tomatoes');
  const [amount, setAmount] = useState(10);
  
  const handleSearch = () => {
    if (!username.trim()) return;
    
    // In a real implementation, this would validate if the user exists
    // and show their profile card
  };
  
  const handleMockery = () => {
    if (!username.trim()) return;
    
    onMockery(username, selectedAction, amount);
  };
  
  return (
    <div className="space-y-4">
      <div className="flex">
        <Input
          type="text"
          placeholder="Enter username to mock..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="rounded-r-none glass-morphism border-white/10"
        />
        <Button 
          onClick={handleSearch}
          className="rounded-l-none bg-black/20 border border-white/10 hover:bg-black/30"
        >
          <Search className="h-4 w-4" />
        </Button>
      </div>
      
      {username && (
        <div className="p-4 rounded-lg glass-morphism border-royal-crimson/20">
          <div className="flex justify-between items-center mb-4">
            <div className="font-medium">{username}</div>
            {isProtected ? (
              <Badge variant="outline" className="bg-royal-gold/10 border-royal-gold/30 text-royal-gold px-2 py-1 flex items-center text-xs">
                <Shield className="h-3 w-3 mr-1" />
                Protected
              </Badge>
            ) : null}
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-white/70">Select mockery type:</span>
              <select 
                value={selectedAction}
                onChange={(e) => setSelectedAction(e.target.value as MockeryAction)}
                className="bg-black/20 border border-white/10 rounded px-2 py-1 text-sm"
              >
                <option value="tomatoes">Throw Tomatoes (10 coins)</option>
                <option value="eggs">Throw Eggs (15 coins)</option>
                <option value="stocks">Put in Stocks (20 coins)</option>
                <option value="silence">Silence (25 coins)</option>
                <option value="courtJester">Court Jester (30 coins)</option>
              </select>
            </div>
            
            <Button 
              onClick={handleMockery}
              className="w-full text-red-400 hover:text-red-300 bg-red-900/20 hover:bg-red-900/30 border border-red-700/30"
              disabled={isProtected || isOnCooldown}
            >
              <Target className="h-4 w-4 mr-2" />
              Mock {username}
            </Button>
            
            {isOnCooldown && (
              <div className="text-xs text-white/60 text-center">
                You can mock this user again in 24 hours
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MockeryUserCard;
