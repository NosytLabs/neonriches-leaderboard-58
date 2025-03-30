
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { UserCircle, CreditCard, Settings, LogOut, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { UserProfile } from '@/types/user';
import TeamSwitchModal, { TeamColor } from './TeamSwitchModal';

interface ProfileSidebarProps {
  user: UserProfile;
  onLogout: () => Promise<void>;
  onUpdateProfile: (profileData: Partial<UserProfile>) => Promise<void>;
}

const ProfileSidebar = ({ user, onLogout, onUpdateProfile }: ProfileSidebarProps) => {
  const navigate = useNavigate();
  const [teamModalOpen, setTeamModalOpen] = useState(false);

  const handleLogout = async () => {
    await onLogout();
    navigate('/');
  };

  const handleTeamChange = async (team: TeamColor) => {
    await onUpdateProfile({ team });
  };

  return (
    <div className="glass-morphism rounded-xl p-6 sticky top-24">
      <div className="text-center mb-6">
        <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-background mb-4">
          <img 
            src={user.profileImage || "https://i.pravatar.cc/150?img=1"} 
            alt={user.username} 
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-xl font-bold">{user.username}</h2>
        <div className="mt-1 text-xs bg-white/10 px-2 py-0.5 rounded-full text-white/70 inline-block">
          {user.tier === 'pro' ? 'Pro Tier' : 'Free Tier'}
        </div>
      </div>
      
      <div className="space-y-2 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-white/70">Rank</span>
          <span className="font-mono font-bold">#{user.rank}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-white/70">Total Spent</span>
          <span className="font-mono font-bold">${user.amountSpent}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-white/70">Team</span>
          <div className="flex items-center">
            {user.team ? (
              <span className={`font-bold text-team-${user.team || 'red'}`}>
                {user.team.charAt(0).toUpperCase()}{user.team.slice(1)}
              </span>
            ) : (
              <span className="text-white/50">None</span>
            )}
            <Button
              variant="ghost"
              size="sm"
              className="ml-1 px-1.5 h-6 text-white/50 hover:text-white hover:bg-white/10"
              onClick={() => setTeamModalOpen(true)}
            >
              Change
            </Button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-white/70">Spend Streak</span>
          <span className="font-mono font-bold">{user.spendStreak} weeks</span>
        </div>
      </div>
      
      <div className="space-y-2">
        <Button variant="outline" size="sm" className="w-full glass-morphism border-white/10 text-white hover:bg-white/10">
          <UserCircle size={14} className="mr-2" />
          Your Profile
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full glass-morphism border-white/10 text-white hover:bg-white/10"
          onClick={() => setTeamModalOpen(true)}
        >
          <Users size={14} className="mr-2" />
          Change Team
        </Button>
        <Button variant="outline" size="sm" className="w-full glass-morphism border-white/10 text-white hover:bg-white/10">
          <CreditCard size={14} className="mr-2" />
          Payment Methods
        </Button>
        <Button variant="outline" size="sm" className="w-full glass-morphism border-white/10 text-white hover:bg-white/10">
          <Settings size={14} className="mr-2" />
          Settings
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full glass-morphism border-white/10 text-white hover:bg-white/10"
          onClick={handleLogout}
        >
          <LogOut size={14} className="mr-2" />
          Sign Out
        </Button>
      </div>

      <TeamSwitchModal 
        open={teamModalOpen} 
        onOpenChange={setTeamModalOpen} 
        user={user} 
        onTeamChange={handleTeamChange} 
      />
    </div>
  );
};

export default ProfileSidebar;
