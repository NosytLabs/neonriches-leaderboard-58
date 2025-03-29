import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShieldQuestion, Crown, UserX } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useToast } from '@/hooks/use-toast';
import { UserProfile } from '@/types/user';
import { adaptUserProfileToUser } from '@/utils/userAdapter';

// Mock users for demonstration
const mockUsers = [
  {
    id: '1',
    username: 'LuxuryLover',
    profileImage: 'https://api.dicebear.com/7.x/personas/svg?seed=Felix',
    lastActive: '2023-09-15T14:30:00',
    tier: 'premium'
  },
  {
    id: '2',
    username: 'MoneyMonarch',
    profileImage: 'https://api.dicebear.com/7.x/personas/svg?seed=Aneka',
    lastActive: '2023-09-14T11:20:00',
    tier: 'pro'
  },
  {
    id: '3',
    username: 'RoyalSpender',
    profileImage: 'https://api.dicebear.com/7.x/personas/svg?seed=Mimi',
    lastActive: '2023-09-13T09:45:00',
    tier: 'royal'
  }
];

export interface PublicShamingFeatureProps {
  isEnabled?: boolean;
  children?: React.ReactNode;
}

const PublicShamingFeature: React.FC<PublicShamingFeatureProps> = ({ 
  isEnabled = true,
  children
}) => {
  const [selectedUser, setSelectedUser] = useState<UserProfile | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isShaming, setIsShaming] = useState(false);
  const { toast } = useToast();

  const handleShameUser = async () => {
    if (!selectedUser) return;
    
    setIsShaming(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Public Shaming Initiated",
        description: `${selectedUser.username} has been publicly shamed!`,
      });
      
      setIsShaming(false);
      setIsDialogOpen(false);
      setSelectedUser(null);
    }, 1500);
  };

  const openShameDialog = (user: any) => {
    // Convert to full UserProfile
    const userProfile: UserProfile = {
      id: user.id,
      username: user.username,
      email: `${user.username.toLowerCase()}@example.com`,
      profileImage: user.profileImage,
      lastActive: user.lastActive,
      tier: user.tier,
      walletBalance: 0,
      joinDate: '2023-01-01T00:00:00Z',
      createdAt: '2023-01-01T00:00:00Z'
    };
    
    setSelectedUser(userProfile);
    setIsDialogOpen(true);
  };

  if (!isEnabled) {
    return null;
  }

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  return (
    <>
      {children && (
        <div onClick={handleOpenDialog}>
          {children}
        </div>
      )}
      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="glass-morphism border-royal-crimson/30">
          <DialogHeader>
            <DialogTitle className="flex items-center text-lg">
              <ShieldQuestion className="mr-2 h-5 w-5 text-royal-crimson" />
              Public Shaming
            </DialogTitle>
            <DialogDescription>
              Shame users who haven't been active or contributed to the community recently.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            {mockUsers.map((user) => (
              <div key={user.id} className="flex justify-between items-center p-2 rounded-md glass-morphism-subtle">
                <div className="flex items-center">
                  <Avatar className="h-8 w-8 mr-2">
                    <AvatarImage src={user.profileImage} alt={user.username} />
                    <AvatarFallback>{user.username.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-sm font-medium">{user.username}</div>
                    <div className="text-xs text-white/60">Last active: {new Date(user.lastActive).toLocaleDateString()}</div>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-8 text-royal-crimson hover:text-royal-crimson/80 hover:bg-royal-crimson/20"
                  onClick={() => openShameDialog(user)}
                >
                  <UserX className="h-4 w-4 mr-1" />
                  Shame
                </Button>
              </div>
            ))}
            
            {selectedUser && (
              <div className="mt-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={selectedUser.profileImage} alt={selectedUser.username} />
                    <AvatarFallback>{selectedUser.username.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold">{selectedUser.username}</h3>
                    <p className="text-sm text-white/60">
                      Tier: {selectedUser.tier}
                    </p>
                  </div>
                </div>
                
                <p className="text-sm mt-4">
                  By shaming {selectedUser.username}, they will be publicly displayed on the shame board for 24 hours.
                </p>
                
                <div className="flex justify-end space-x-2 mt-4">
                  <Button 
                    variant="outline" 
                    onClick={() => setIsDialogOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button 
                    variant="destructive"
                    className="bg-royal-crimson hover:bg-royal-crimson/90"
                    onClick={handleShameUser}
                    disabled={isShaming}
                  >
                    {isShaming ? 'Shaming...' : 'Confirm Shaming'}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PublicShamingFeature;
