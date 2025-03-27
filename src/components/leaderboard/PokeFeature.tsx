
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowDown, Search, Zap } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { UserRankData, getUserRanking, applyUserSpending } from '@/services/spendingService';
import { toast } from '@/hooks/use-toast';

interface PokeFeatureProps {
  onSuccess?: () => void;
  trigger?: React.ReactNode;
}

const PokeFeature: React.FC<PokeFeatureProps> = ({ 
  onSuccess,
  trigger 
}) => {
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [users, setUsers] = useState<UserRankData[]>([]);
  const [selectedUser, setSelectedUser] = useState<UserRankData | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [open, setOpen] = useState(false);
  
  // Search for users
  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    
    const allUsers = getUserRanking();
    
    // Filter users based on search query
    const filteredUsers = allUsers.filter(u => 
      u.username.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    // Don't include the current user
    const results = filteredUsers.filter(u => u.userId !== user?.id);
    
    setUsers(results);
  };
  
  // Handle poke user
  const handlePokeUser = async () => {
    if (!selectedUser || !user) return;
    
    setIsProcessing(true);
    
    try {
      // Pay $0.50 to poke
      const success = await applyUserSpending(
        user,
        0.5,
        `Poked ${selectedUser.username}`
      );
      
      if (success) {
        // Apply poke effect (this would be more sophisticated in a real app)
        // Here we're just simulating the effect
        
        toast({
          title: 'User Poked!',
          description: `You poked ${selectedUser.username} down one rank for 24 hours.`,
        });
        
        if (onSuccess) {
          onSuccess();
        }
        
        setOpen(false);
      }
    } catch (error) {
      toast({
        title: 'Poke Failed',
        description: 'Could not poke the user. Try again later.',
        variant: 'destructive'
      });
    } finally {
      setIsProcessing(false);
    }
  };
  
  // Check if a user can be poked
  const canPoke = (targetUser: UserRankData): boolean => {
    // In a real app, we'd check cooldown periods and other restrictions
    // For now, we'll just allow poking of any user
    
    // Check if user has already been poked in last 24 hours
    const lastPokeTime = localStorage.getItem(`lastPoke_${targetUser.userId}`);
    if (lastPokeTime) {
      const pokeTime = parseInt(lastPokeTime, 10);
      const now = Date.now();
      const hoursSinceLastPoke = (now - pokeTime) / (60 * 60 * 1000);
      
      if (hoursSinceLastPoke < 24) {
        return false;
      }
    }
    
    return true;
  };
  
  // Get the time until a user can be poked again
  const getPokeTimeRemaining = (targetUser: UserRankData): string => {
    const lastPokeTime = localStorage.getItem(`lastPoke_${targetUser.userId}`);
    if (lastPokeTime) {
      const pokeTime = parseInt(lastPokeTime, 10);
      const now = Date.now();
      const hoursSinceLastPoke = (now - pokeTime) / (60 * 60 * 1000);
      
      if (hoursSinceLastPoke < 24) {
        const hoursRemaining = Math.ceil(24 - hoursSinceLastPoke);
        return `${hoursRemaining}h remaining`;
      }
    }
    
    return '';
  };
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="outline" className="glass-morphism border-white/10 hover:bg-white/10">
            <Zap className="mr-2 h-4 w-4" />
            Poke ($0.50)
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="glass-morphism border-white/10 sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Poke a User</DialogTitle>
          <DialogDescription>
            Pay $0.50 to poke another user down one rank for 24 hours.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="search">Find user by username</Label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-white/40" />
                <Input
                  id="search"
                  placeholder="Search username..."
                  className="pl-8 glass-morphism border-white/10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                />
              </div>
              <Button onClick={handleSearch}>Search</Button>
            </div>
          </div>
          
          {users.length > 0 ? (
            <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
              {users.map((user) => (
                <div 
                  key={user.userId}
                  className={`flex items-center justify-between p-2 rounded-lg transition-colors cursor-pointer ${
                    selectedUser?.userId === user.userId 
                      ? 'glass-morphism-highlight border border-white/20 bg-white/5' 
                      : 'hover:bg-white/5'
                  }`}
                  onClick={() => setSelectedUser(user)}
                >
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-7 h-7 rounded-full glass-morphism border-white/10 mr-2">
                      <span className="text-xs font-bold">#{user.rank}</span>
                    </div>
                    
                    <Avatar className="h-8 w-8 mr-2">
                      {user.profileImage ? (
                        <AvatarImage src={user.profileImage} alt={user.username} />
                      ) : (
                        <AvatarFallback className="bg-gradient-to-br from-royal-purple to-royal-gold">
                          {user.username.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      )}
                    </Avatar>
                    
                    <div>
                      <div className="font-medium text-sm">{user.username}</div>
                      <div className="text-xs text-white/60">${user.totalSpent}</div>
                    </div>
                  </div>
                  
                  {canPoke(user) ? (
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="text-xs h-7"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedUser(user);
                      }}
                    >
                      <ArrowDown className="h-3 w-3 mr-1" />
                      Poke
                    </Button>
                  ) : (
                    <span className="text-xs text-white/40">
                      {getPokeTimeRemaining(user)}
                    </span>
                  )}
                </div>
              ))}
            </div>
          ) : searchQuery ? (
            <div className="text-center py-4 text-white/50">
              No users found matching "{searchQuery}"
            </div>
          ) : null}
          
          {selectedUser && (
            <div className="glass-morphism border-white/10 rounded-lg p-4">
              <div className="text-sm font-medium mb-2">Confirm Poke</div>
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-3">
                  {selectedUser.profileImage ? (
                    <AvatarImage src={selectedUser.profileImage} alt={selectedUser.username} />
                  ) : (
                    <AvatarFallback className="bg-gradient-to-br from-royal-purple to-royal-gold">
                      {selectedUser.username.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  )}
                </Avatar>
                <div>
                  <div className="font-medium">{selectedUser.username}</div>
                  <div className="text-sm text-white/70">Rank #{selectedUser.rank}</div>
                </div>
              </div>
              <div className="mt-3 text-sm text-white/70">
                This will cost you $0.50 and move {selectedUser.username} down one rank for 24 hours.
              </div>
            </div>
          )}
        </div>
        
        <div className="flex justify-end gap-2">
          <Button variant="outline" className="glass-morphism border-white/10" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button 
            onClick={handlePokeUser}
            disabled={!selectedUser || isProcessing || (selectedUser && !canPoke(selectedUser))}
            className="bg-gradient-to-r from-team-red via-team-green to-team-blue hover:opacity-90 text-white"
          >
            {isProcessing ? (
              <>
                <span className="animate-spin mr-2">⚙️</span> Processing...
              </>
            ) : (
              <>
                <Zap className="mr-2 h-4 w-4" />
                Poke for $0.50
              </>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PokeFeature;
