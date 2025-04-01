
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UserProfile } from '@/types/user';
import { CalendarDays, Medal, Users, Shield, Edit, Crown, Gem } from 'lucide-react';
import { formatDate } from '@/utils/formatters';
import TeamSwitchModal from './TeamSwitchModal';
import { TeamColor } from '@/types/user'; // Import TeamColor from user.ts

interface ProfileSidebarProps {
  user: UserProfile;
  isOwnProfile: boolean;
  onEditProfile?: () => void;
  onTeamChange?: (team: TeamColor) => Promise<void>;
}

const ProfileSidebar: React.FC<ProfileSidebarProps> = ({
  user,
  isOwnProfile,
  onEditProfile,
  onTeamChange
}) => {
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);
  
  // Calculate how long ago the user joined
  const joinedDate = user.joinedDate ? new Date(user.joinedDate) : null;
  const joinedDaysAgo = joinedDate ? Math.floor((Date.now() - joinedDate.getTime()) / (1000 * 60 * 60 * 24)) : null;
  
  // Handle team change if the user is allowed to change teams
  const handleTeamChange = async (team: TeamColor) => {
    if (onTeamChange) {
      await onTeamChange(team);
      setIsTeamModalOpen(false);
    }
  };
  
  // Determine what tier badge to show
  const getTierBadge = () => {
    const tier = user.tier?.toLowerCase() || 'basic';
    
    switch (tier) {
      case 'royal':
        return (
          <div className="flex items-center gap-1 text-royal-gold">
            <Crown className="h-4 w-4" /> 
            <span>Royal</span>
          </div>
        );
      case 'premium':
      case 'gold':
        return (
          <div className="flex items-center gap-1 text-amber-400">
            <Gem className="h-4 w-4" /> 
            <span>Premium</span>
          </div>
        );
      case 'pro':
      case 'silver':
        return (
          <div className="flex items-center gap-1 text-blue-400">
            <Shield className="h-4 w-4" /> 
            <span>Pro</span>
          </div>
        );
      default:
        return (
          <div className="flex items-center gap-1 text-gray-400">
            <Shield className="h-4 w-4" /> 
            <span>Basic</span>
          </div>
        );
    }
  };
  
  return (
    <div className="space-y-4">
      {/* Profile Quick Actions */}
      {isOwnProfile && (
        <Card className="glass-morphism border-white/10">
          <CardContent className="p-4">
            <h3 className="font-medium mb-3">Profile Actions</h3>
            <div className="flex flex-col gap-2">
              <Button 
                variant="outline" 
                className="w-full justify-start glass-morphism border-white/10"
                onClick={onEditProfile}
              >
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full justify-start glass-morphism border-white/10"
                onClick={() => setIsTeamModalOpen(true)}
              >
                <Users className="h-4 w-4 mr-2" />
                Change Team
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
      
      {/* Profile Stats */}
      <Card className="glass-morphism border-white/10">
        <CardContent className="p-4">
          <h3 className="font-medium mb-3">Profile Info</h3>
          
          <div className="space-y-3">
            {/* Tier */}
            <div className="flex items-center justify-between">
              <div className="text-sm text-white/70 flex items-center gap-2">
                <Crown className="h-4 w-4" />
                Tier
              </div>
              <div className="font-medium">
                {getTierBadge()}
              </div>
            </div>
            
            {/* Rank */}
            {user.rank && (
              <div className="flex items-center justify-between">
                <div className="text-sm text-white/70 flex items-center gap-2">
                  <Medal className="h-4 w-4" />
                  Rank
                </div>
                <div className="font-medium">#{user.rank.toLocaleString()}</div>
              </div>
            )}
            
            {/* Team */}
            <div className="flex items-center justify-between">
              <div className="text-sm text-white/70 flex items-center gap-2">
                <Users className="h-4 w-4" />
                Team
              </div>
              <div className="font-medium capitalize">
                {user.team || 'None'}
              </div>
            </div>
            
            {/* Joined */}
            {joinedDate && (
              <div className="flex items-center justify-between">
                <div className="text-sm text-white/70 flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" />
                  Joined
                </div>
                <div className="font-medium text-sm">
                  {formatDate(user.joinedDate)}
                  {joinedDaysAgo && <span className="ml-1 text-xs text-white/50">({joinedDaysAgo} days ago)</span>}
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
      
      {isOwnProfile && onTeamChange && (
        <TeamSwitchModal 
          open={isTeamModalOpen}
          onOpenChange={setIsTeamModalOpen}
          user={user}
          onTeamChange={handleTeamChange}
        />
      )}
    </div>
  );
};

export default ProfileSidebar;
