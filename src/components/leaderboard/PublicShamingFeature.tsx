import React from 'react';
import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowDown, Search, Scroll } from 'lucide-react';
import { ShameAction } from '@/components/events/hooks/useShameEffect';
import { useAuth } from '@/contexts/AuthContext';
import { UserRankData, getUserRanking, applyUserSpending } from '@/services/spendingService';
import { useToastContext } from '@/contexts/ToastContext';
import { getShameActionPrice, getShameActionTitle, getShameActionDescription, getShameActionIcon } from '@/components/events/utils/shameUtils';

interface PublicShamingFeatureProps {
  onSuccess?: () => void;
  trigger?: React.ReactNode;
}

const PublicShamingFeature: React.FC<PublicShamingFeatureProps> = ({ 
  onSuccess,
  trigger 
}) => {
  const { user } = useAuth();
  const { addToast } = useToastContext();
  const [searchQuery, setSearchQuery] = useState('');
  const [users, setUsers] = useState<UserRankData[]>([]);
  const [selectedUser, setSelectedUser] = useState<UserRankData | null>(null);
  const [selectedAction, setSelectedAction] = useState<ShameAction>('tomatoes');
  const [isProcessing, setIsProcessing] = useState(false);
  const [open, setOpen] = useState(false);
  
  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    
    const allUsers = getUserRanking();
    
    const filteredUsers = allUsers.filter(u => 
      u.username.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    const results = filteredUsers.filter(u => u.userId !== user?.id);
    
    setUsers(results);
  };
  
  const handleShameUser = async () => {
    if (!selectedUser || !user) return;
    
    setIsProcessing(true);
    
    try {
      const amount = getShameActionPrice(selectedAction);
      const actionTitle = getShameActionTitle(selectedAction);
      
      const success = await applyUserSpending(
        user,
        amount,
        `${actionTitle} on ${selectedUser.username}`
      );
      
      if (success) {
        const userShameKey = `user_shame_count_${selectedUser.userId}`;
        const currentCount = parseInt(localStorage.getItem(userShameKey) || '0');
        localStorage.setItem(userShameKey, (currentCount + 1).toString());
        
        localStorage.setItem(`lastShame_${selectedUser.userId}`, Date.now().toString());
        
        addToast({
          title: 'Public Shaming Successful!',
          description: getShameActionDescription(selectedAction, selectedUser.username),
        });
        
        if (onSuccess) {
          onSuccess();
        }
        
        setOpen(false);
      }
    } catch (error) {
      addToast({
        title: 'Shaming Failed',
        description: 'Could not shame the user. Try again later.',
        variant: 'destructive'
      });
    } finally {
      setIsProcessing(false);
    }
  };
  
  const canShame = (targetUser: UserRankData): boolean => {
    const lastShameTime = localStorage.getItem(`lastShame_${targetUser.userId}`);
    if (lastShameTime) {
      const shameTime = parseInt(lastShameTime, 10);
      const now = Date.now();
      const hoursSinceLastShame = (now - shameTime) / (60 * 60 * 1000);
      
      if (hoursSinceLastShame < 24) {
        return false;
      }
    }
    
    return true;
  };
  
  const getShameTimeRemaining = (targetUser: UserRankData): string => {
    const lastShameTime = localStorage.getItem(`lastShame_${targetUser.userId}`);
    if (lastShameTime) {
      const shameTime = parseInt(lastShameTime, 10);
      const now = Date.now();
      const hoursSinceLastShame = (now - shameTime) / (60 * 60 * 1000);
      
      if (hoursSinceLastShame < 24) {
        const hoursRemaining = Math.ceil(24 - hoursSinceLastShame);
        return `${hoursRemaining}h remaining`;
      }
    }
    
    return '';
  };
  
  const getShameCount = (targetUser: UserRankData): number => {
    const userShameKey = `user_shame_count_${targetUser.userId}`;
    return parseInt(localStorage.getItem(userShameKey) || '0');
  };
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="outline" className="glass-morphism border-white/10 hover:bg-white/10">
            <Scroll className="mr-2 h-4 w-4" />
            Public Shaming
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="glass-morphism border-white/10 sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Medieval Public Shaming</DialogTitle>
          <DialogDescription>
            Shame another noble publicly in medieval style. Select a target and a form of public ridicule.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="search">Find noble by username</Label>
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
                      <div className="flex items-center text-xs text-white/60">
                        <span>${user.totalSpent}</span>
                        {getShameCount(user) > 0 && (
                          <span className="ml-2 bg-red-500/20 px-1.5 py-0.5 rounded-full text-red-300 text-xs">
                            {getShameCount(user)} {getShameCount(user) === 1 ? 'shame' : 'shames'}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {canShame(user) ? (
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="text-xs h-7"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedUser(user);
                      }}
                    >
                      <Scroll className="h-3 w-3 mr-1" />
                      Shame
                    </Button>
                  ) : (
                    <span className="text-xs text-white/40">
                      {getShameTimeRemaining(user)}
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
            <>
              <div className="glass-morphism border-white/10 rounded-lg p-4">
                <div className="text-sm font-medium mb-2">Confirm Target</div>
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
              </div>
              
              <div className="space-y-2">
                <Label>Select Shaming Method</Label>
                <div className="grid grid-cols-3 gap-2">
                  <Button 
                    variant="outline" 
                    className={`flex flex-col p-2 h-auto ${selectedAction === 'tomatoes' ? 'bg-white/10 border-red-500/30' : ''}`}
                    onClick={() => setSelectedAction('tomatoes')}
                  >
                    <span className="text-2xl mb-1">🍅</span>
                    <span className="text-xs">Tomatoes</span>
                    <span className="text-xs text-amber-500 mt-1">$0.50</span>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className={`flex flex-col p-2 h-auto ${selectedAction === 'eggs' ? 'bg-white/10 border-yellow-500/30' : ''}`}
                    onClick={() => setSelectedAction('eggs')}
                  >
                    <span className="text-2xl mb-1">🥚</span>
                    <span className="text-xs">Rotten Eggs</span>
                    <span className="text-xs text-amber-500 mt-1">$1.00</span>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className={`flex flex-col p-2 h-auto ${selectedAction === 'stocks' ? 'bg-white/10 border-purple-500/30' : ''}`}
                    onClick={() => setSelectedAction('stocks')}
                  >
                    <span className="text-2xl mb-1">🪵</span>
                    <span className="text-xs">Stocks</span>
                    <span className="text-xs text-amber-500 mt-1">$2.00</span>
                  </Button>
                </div>
              </div>
              
              <div className="mt-3 text-sm text-white/70 bg-white/5 p-3 rounded border border-white/10">
                {getShameActionDescription(selectedAction, selectedUser.username)}
              </div>
            </>
          )}
        </div>
        
        <div className="flex justify-end gap-2">
          <Button variant="outline" className="glass-morphism border-white/10" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button 
            onClick={handleShameUser}
            disabled={!selectedUser || isProcessing || (selectedUser && !canShame(selectedUser))}
            className="bg-gradient-to-r from-team-red via-team-green to-team-blue hover:opacity-90 text-white"
          >
            {isProcessing ? (
              <>
                <span className="animate-spin mr-2">⚙️</span> Processing...
              </>
            ) : (
              <>
                <Scroll className="mr-2 h-4 w-4" />
                {getShameActionTitle(selectedAction)} for ${getShameActionPrice(selectedAction)}
              </>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PublicShamingFeature;
