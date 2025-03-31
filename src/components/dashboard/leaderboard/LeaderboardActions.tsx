
import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, AlertTriangle, Award, ArrowUpRight } from 'lucide-react';
import { LeaderboardUser } from '@/types/leaderboard';

export interface LeaderboardActionsProps {
  user: LeaderboardUser;
  onAction: (action: 'protect' | 'challenge' | 'reward', userId: string) => void;
  children?: React.ReactNode;
}

const LeaderboardActions: React.FC<LeaderboardActionsProps> = ({ user, onAction, children }) => {
  return (
    <div className="flex items-center gap-2">
      <Button 
        variant="outline" 
        size="sm" 
        className="h-8 text-xs border-muted-foreground/20"
        onClick={() => onAction('protect', user.id)}
      >
        <Shield className="h-3 w-3 mr-1" />
        Protect
      </Button>
      
      <Button 
        variant="outline" 
        size="sm" 
        className="h-8 text-xs border-muted-foreground/20"
        onClick={() => onAction('challenge', user.id)}
      >
        <AlertTriangle className="h-3 w-3 mr-1" />
        Challenge
      </Button>
      
      <Button 
        variant="outline" 
        size="sm" 
        className="h-8 text-xs border-muted-foreground/20"
        onClick={() => onAction('reward', user.id)}
      >
        <Award className="h-3 w-3 mr-1" />
        Reward
      </Button>
      
      {children}
    </div>
  );
};

export default LeaderboardActions;
