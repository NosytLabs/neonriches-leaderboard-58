
import React from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { MoreHorizontal, Crown, Target, Shield, Flag } from 'lucide-react';
import { LeaderboardUser } from '@/types/leaderboard';

interface LeaderboardActionsProps {
  user: LeaderboardUser;
  onAction: (action: string, user: LeaderboardUser) => void;
}

const LeaderboardActions: React.FC<LeaderboardActionsProps> = ({ user, onAction }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="p-0 h-8 w-8">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => onAction('view', user)}>
          <Crown className="h-4 w-4 mr-2" />
          View Profile
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onAction('mock', user)}>
          <Target className="h-4 w-4 mr-2" />
          Mock User
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onAction('protect', user)}>
          <Shield className="h-4 w-4 mr-2" />
          Protect User
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onAction('report', user)}>
          <Flag className="h-4 w-4 mr-2" />
          Report User
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LeaderboardActions;
