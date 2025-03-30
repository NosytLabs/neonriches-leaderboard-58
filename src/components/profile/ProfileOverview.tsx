
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { UserProfile } from '@/types/user';
import ProfileStats from './ProfileStats';
import ProfileBillboard from './ProfileBillboard';
import { 
  Users, 
  Calendar, 
  BookMarked, 
  Shield, 
  Crown, 
  UserCheck,
  Star
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';

interface ProfileOverviewProps {
  user: UserProfile;
  isOwnProfile: boolean;
}

const ProfileOverview: React.FC<ProfileOverviewProps> = ({ user, isOwnProfile }) => {
  const getRoleBadge = () => {
    if (!user.role) return null;
    
    const roleColors = {
      admin: "bg-red-500/20 text-red-400 border-red-500/30",
      moderator: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      founder: "bg-royal-gold/20 text-royal-gold border-royal-gold/30",
      developer: "bg-green-500/20 text-green-400 border-green-500/30",
      vip: "bg-purple-500/20 text-purple-400 border-purple-500/30"
    };
    
    const roleColor = roleColors[user.role.toLowerCase()] || "bg-gray-500/20 text-gray-400 border-gray-500/30";
    
    return (
      <Badge variant="outline" className={roleColor}>
        {user.role.toUpperCase()}
      </Badge>
    );
  };
  
  const formatDate = (date?: Date | string) => {
    if (!date) return 'N/A';
    try {
      return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    } catch (e) {
      return 'N/A';
    }
  };
  
  return (
    <div className="space-y-6">
      {/* Profile Overview Card */}
      <Card className="glass-morphism border-white/10">
        <CardHeader className="pb-3">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <Avatar className="h-20 w-20 border-2 border-white/20">
              <AvatarImage src={user.profileImage} alt={user.username} />
              <AvatarFallback>{user.username?.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>
            
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row gap-2 items-center md:items-start">
                <div>
                  <h2 className="text-2xl font-bold">{user.displayName || user.username}</h2>
                  <p className="text-sm text-white/70">@{user.username}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-2 md:mt-0 md:ml-auto">
                  {getRoleBadge()}
                  
                  {user.isVIP && (
                    <Badge variant="royal">
                      <Star className="h-3 w-3 mr-1" />
                      VIP
                    </Badge>
                  )}
                  
                  {user.isVerified && (
                    <Badge variant="secondary">
                      <UserCheck className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>
              </div>
              
              {user.bio && (
                <div className="mt-3 glass-morphism border-white/10 p-3 rounded-md">
                  <p className="text-sm">{user.bio}</p>
                </div>
              )}
              
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="flex flex-col items-center glass-morphism-highlight p-2 rounded-md">
                  <Crown className="h-4 w-4 text-royal-gold mb-1" />
                  <div className="text-lg font-bold">#{user.rank || 'N/A'}</div>
                  <div className="text-xs text-white/60">Rank</div>
                </div>
                
                <div className="flex flex-col items-center glass-morphism-highlight p-2 rounded-md">
                  <Shield className="h-4 w-4 text-royal-purple mb-1" />
                  <div className="text-lg font-bold capitalize">{user.team || 'None'}</div>
                  <div className="text-xs text-white/60">Team</div>
                </div>
                
                <div className="flex flex-col items-center glass-morphism-highlight p-2 rounded-md">
                  <Users className="h-4 w-4 text-blue-400 mb-1" />
                  <div className="text-lg font-bold">{user.followers || 0}</div>
                  <div className="text-xs text-white/60">Followers</div>
                </div>
                
                <div className="flex flex-col items-center glass-morphism-highlight p-2 rounded-md">
                  <Calendar className="h-4 w-4 text-green-400 mb-1" />
                  <div className="text-lg font-bold">{user.following || 0}</div>
                  <div className="text-xs text-white/60">Following</div>
                </div>
              </div>
            </div>
          </div>
        </CardHeader>
        
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 text-white/60 mr-2" />
              <div>
                <div className="text-white/60">Joined</div>
                <div>{formatDate(user.joinedAt)}</div>
              </div>
            </div>
            
            <div className="flex items-center">
              <BookMarked className="h-4 w-4 text-white/60 mr-2" />
              <div>
                <div className="text-white/60">Active</div>
                <div>{formatDate(user.lastActive)}</div>
              </div>
            </div>
            
            <div className="flex items-center">
              <Star className="h-4 w-4 text-white/60 mr-2" />
              <div>
                <div className="text-white/60">Tier</div>
                <div className="capitalize">{user.tier || 'Basic'}</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Profile Billboard - Marketing Features */}
      <ProfileBillboard user={user} isOwnProfile={isOwnProfile} />
      
      {/* Profile Stats */}
      <ProfileStats user={user} />
    </div>
  );
};

export default ProfileOverview;
