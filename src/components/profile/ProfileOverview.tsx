
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UserProfile } from '@/types/user';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Cake, Crown, CalendarDays, Users, Eye } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

interface ProfileOverviewProps {
  user: UserProfile;
  isOwnProfile: boolean;
}

const ProfileOverview: React.FC<ProfileOverviewProps> = ({ user, isOwnProfile }) => {
  return (
    <div className="space-y-6">
      <Card className="glass-morphism border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Crown className="h-5 w-5 text-royal-gold" />
            Royal Overview
          </CardTitle>
        </CardHeader>
        
        <CardContent>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <Avatar className="h-24 w-24 border-2 border-royal-gold">
              {user.profileImage ? (
                <AvatarImage src={user.profileImage} alt={user.username} />
              ) : (
                <AvatarFallback className="bg-royal-purple/20 text-royal-gold text-xl">
                  {user.username.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              )}
            </Avatar>
            
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold">{user.displayName || user.username}</h2>
              
              <div className="flex flex-wrap gap-2 justify-center md:justify-start my-2">
                <Badge variant="outline" className="border-royal-gold/30 text-royal-gold">
                  <Crown size={14} className="mr-1" /> Rank #{user.rank || 0}
                </Badge>
                
                {user.team && (
                  <Badge className="bg-royal-purple/20">
                    {user.team}
                  </Badge>
                )}
                
                {user.role && (
                  <Badge variant="secondary">
                    {user.role}
                  </Badge>
                )}
              </div>
              
              <p className="text-sm text-white/70 mt-2">
                {user.bio || (isOwnProfile ? "Add a bio to tell others about yourself..." : "No bio provided")}
              </p>
              
              <div className="flex flex-wrap gap-4 mt-4 justify-center md:justify-start text-sm text-white/60">
                <div className="flex items-center">
                  <CalendarDays size={14} className="mr-1" />
                  <span>Joined {new Date(user.joinedAt).toLocaleDateString()}</span>
                </div>
                
                <div className="flex items-center">
                  <Eye size={14} className="mr-1" />
                  <span>Last active {user.lastActive ? formatDistanceToNow(new Date(user.lastActive), { addSuffix: true }) : 'Unknown'}</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="glass-morphism border-white/10">
          <CardHeader>
            <CardTitle className="text-lg">Spending Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="space-y-2">
              <div className="flex justify-between">
                <dt className="text-white/70">Total Spent</dt>
                <dd className="font-medium">${user.totalSpent?.toLocaleString() || 0}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-white/70">Current Rank</dt>
                <dd className="font-medium">#{user.rank || 'N/A'}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-white/70">Team Contribution</dt>
                <dd className="font-medium">{user.team || 'None'}</dd>
              </div>
            </dl>
          </CardContent>
        </Card>
        
        <Card className="glass-morphism border-white/10">
          <CardHeader>
            <CardTitle className="text-lg">Social Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="space-y-2">
              <div className="flex justify-between">
                <dt className="text-white/70">Followers</dt>
                <dd className="font-medium">{user.followers || 0}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-white/70">Following</dt>
                <dd className="font-medium">{user.following || 0}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-white/70">Profile Views</dt>
                <dd className="font-medium">{user.lastActive ? Math.floor(Math.random() * 500) : 0}</dd>
              </div>
            </dl>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProfileOverview;
