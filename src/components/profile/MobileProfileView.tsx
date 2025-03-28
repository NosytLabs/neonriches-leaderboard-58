
import React from 'react';
import { UserProfile } from '@/types/user'; 
import { formatCurrency } from '@/lib/utils';
import { Shield, Crown, Coins, Calendar } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MedievalIcon from '@/components/ui/medieval-icon';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface MobileProfileViewProps {
  user: UserProfile;
  isOwnProfile: boolean;
}

const MobileProfileView: React.FC<MobileProfileViewProps> = ({ user, isOwnProfile }) => {
  const joinDate = user.joinDate ? new Date(user.joinDate) : new Date();
  const formattedJoinDate = joinDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  return (
    <div className="space-y-4">
      {/* Profile Header */}
      <div className="glass-morphism border-white/10 rounded-lg overflow-hidden">
        <div className="h-24 bg-gradient-to-r from-black/40 to-black/20 relative">
          <div className="absolute -bottom-12 left-4 w-24 h-24 rounded-full border-4 border-black bg-black/40 flex items-center justify-center">
            {user.profileImage ? (
              <img 
                src={user.profileImage} 
                alt={user.displayName || user.username} 
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <div className="w-full h-full rounded-full bg-royal-purple/30 flex items-center justify-center">
                <span className="text-2xl font-bold">
                  {(user.displayName || user.username)?.charAt(0).toUpperCase()}
                </span>
              </div>
            )}
          </div>
          
          {isOwnProfile && (
            <div className="absolute top-2 right-2">
              <Link to="/profile/edit">
                <Button size="sm" variant="ghost" className="h-8 bg-black/30 hover:bg-black/50">
                  Edit Profile
                </Button>
              </Link>
            </div>
          )}
        </div>
        
        <div className="pt-14 pb-4 px-4">
          <h1 className="text-xl font-bold">{user.displayName || user.username}</h1>
          <p className="text-white/70 text-sm">@{user.username}</p>
          
          {user.bio && (
            <p className="mt-2 text-sm text-white/80">
              {user.bio}
            </p>
          )}
        </div>
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-3">
        <div className="glass-morphism border-white/10 p-3 rounded-lg">
          <div className="flex items-center text-royal-gold mb-1">
            <Crown className="w-4 h-4 mr-1" />
            <span className="text-xs">Rank</span>
          </div>
          <div className="text-lg font-bold">#{user.rank}</div>
        </div>
        
        <div className="glass-morphism border-white/10 p-3 rounded-lg">
          <div className="flex items-center text-royal-gold mb-1">
            <Coins className="w-4 h-4 mr-1" />
            <span className="text-xs">Spent</span>
          </div>
          <div className="text-lg font-bold">{formatCurrency(user.amountSpent || 0)}</div>
        </div>
        
        <div className="glass-morphism border-white/10 p-3 rounded-lg">
          <div className="flex items-center text-royal-gold mb-1">
            <Shield className="w-4 h-4 mr-1" />
            <span className="text-xs">Team</span>
          </div>
          <div className="text-lg font-bold capitalize">
            {user.team || 'None'}
          </div>
        </div>
        
        <div className="glass-morphism border-white/10 p-3 rounded-lg">
          <div className="flex items-center text-royal-gold mb-1">
            <Calendar className="w-4 h-4 mr-1" />
            <span className="text-xs">Joined</span>
          </div>
          <div className="text-lg font-bold">{formattedJoinDate}</div>
        </div>
      </div>
      
      {/* Profile Tabs */}
      <Tabs defaultValue="cosmetics" className="glass-morphism border-white/10 rounded-lg p-4">
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="cosmetics">Cosmetics</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
          <TabsTrigger value="items">Items</TabsTrigger>
        </TabsList>
        
        <TabsContent value="cosmetics" className="space-y-3">
          {user.cosmetics && Object.entries(user.cosmetics).some(([_, items]) => items && items.length > 0) ? (
            Object.entries(user.cosmetics).map(([category, items]) => {
              if (!items || items.length === 0) return null;
              
              return (
                <div key={category} className="glass-morphism border-white/10 p-3 rounded-lg">
                  <h3 className="text-sm font-medium capitalize mb-2">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item, idx) => (
                      <div key={idx} className="p-2 bg-black/30 rounded-md">
                        <MedievalIcon name="crown" size="sm" color="gold" />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-8 text-white/50">
              No cosmetics to display
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="activity" className="space-y-3">
          <div className="text-center py-8 text-white/50">
            Activity log is empty
          </div>
        </TabsContent>
        
        <TabsContent value="items" className="space-y-3">
          <div className="text-center py-8 text-white/50">
            No items to display
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MobileProfileView;
