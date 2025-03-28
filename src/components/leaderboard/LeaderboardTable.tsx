
import React from 'react';
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import {
  Crown,
  TrendingUp,
  TrendingDown,
  Shield,
  BadgeCheck,
  Award,
  Egg
} from 'lucide-react';
import { UserProfile } from '@/types/user';
import { getTeamColorHex } from '@/lib/colors';
import { Button } from '../ui/button';
import { useToast } from '@/hooks/use-toast';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

interface LeaderboardTableProps {
  leaderboardData: UserProfile[];
  onShameUser?: (userId: string) => void;
}

const LeaderboardTable: React.FC<LeaderboardTableProps> = ({ 
  leaderboardData,
  onShameUser
}) => {
  const { toast } = useToast();

  const handleShameClick = (userId: string, username: string) => {
    if (onShameUser) {
      onShameUser(userId);
    } else {
      toast({
        title: "Coming Soon",
        description: `Public shaming for ${username} will be available in the Public Shaming Festival.`,
      });
    }
  };

  const getTeamIcon = (team?: string) => {
    if (!team) return null;
    const color = getTeamColorHex(team);
    return <Shield size={14} style={{ color }} />;
  };

  const getRankChangeIcon = (change: number) => {
    if (change > 0) return <TrendingUp size={14} className="text-green-500" />;
    if (change < 0) return <TrendingDown size={14} className="text-red-500" />;
    return null;
  };

  const getRoyaltyBadge = (rank: number) => {
    if (rank === 1) return <Crown size={14} className="text-royal-gold animate-pulse-slow" />;
    if (rank === 2) return <Crown size={14} className="text-slate-300" />;
    if (rank === 3) return <Crown size={14} className="text-amber-700" />;
    return null;
  };

  const getFounderBadge = (isFounder: boolean) => {
    if (isFounder) return <Award size={14} className="text-royal-gold" />;
    return null;
  };

  const getVerifiedBadge = (isVerified: boolean) => {
    if (isVerified) return <BadgeCheck size={14} className="text-blue-400" />;
    return null;
  };

  return (
    <div className="rounded-md overflow-auto max-h-[600px] scrollbar-thin scrollbar-thumb-royal-gold/20 scrollbar-track-black/20">
      <Table>
        <TableCaption>Royal Leaderboard of the Realm</TableCaption>
        <TableHeader className="sticky top-0 bg-gray-900/90 backdrop-blur-sm z-10">
          <TableRow>
            <TableHead className="w-16 text-center">Rank</TableHead>
            <TableHead>Noble</TableHead>
            <TableHead className="text-right">Tribute</TableHead>
            <TableHead className="text-right">Streak</TableHead>
            <TableHead>Team</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {leaderboardData.map((user) => (
            <TableRow key={user.id} className="hover:bg-white/5 transition-colors">
              <TableCell className="font-medium text-center">
                <div className="flex flex-col items-center justify-center">
                  <div className="flex items-center space-x-1">
                    {getRoyaltyBadge(user.rank)}
                    <span className={user.rank <= 3 ? 'font-bold' : ''}>{user.rank}</span>
                  </div>
                  <div className="text-xs text-gray-400 flex items-center mt-0.5">
                    {getRankChangeIcon(1)}
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.profileImage} alt={user.username} />
                    <AvatarFallback className="bg-primary/10">
                      {user.username.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center space-x-1">
                      <span className="font-medium">{user.username}</span>
                      {getFounderBadge(!!user.cosmetics?.foundersPass)}
                      {getVerifiedBadge(!!user.role && user.role === 'verified')}
                    </div>
                    <div className="text-xs text-gray-400">
                      {user.tier.charAt(0).toUpperCase() + user.tier.slice(1)} Tier
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-right">
                <span className="font-bold text-royal-gold">${user.amountSpent.toLocaleString()}</span>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex items-center justify-end">
                  <span>{user.spendStreak} days</span>
                  {user.spendStreak >= 7 && (
                    <span className="ml-1 text-yellow-500">🔥</span>
                  )}
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center">
                  {getTeamIcon(user.team)}
                  <span className="ml-1 capitalize text-sm">
                    {user.team !== 'none' ? user.team : '-'}
                  </span>
                </div>
              </TableCell>
              <TableCell className="text-right">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-red-500/30 text-red-400 hover:bg-red-950/30 hover:text-red-300"
                  onClick={() => handleShameClick(user.id, user.username)}
                >
                  <Egg size={14} className="mr-1.5" />
                  Shame
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default LeaderboardTable;
