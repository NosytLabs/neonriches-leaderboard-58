
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Crown, MessageSquare, Bell, Award, Coins } from 'lucide-react';
import { cn } from '@/lib/utils';

export type NotificationType = 
  | 'message'
  | 'rank-change'
  | 'team-event'
  | 'award'
  | 'deposit'
  | 'mockery'
  | 'boost'
  | 'decree';

interface NotificationToastProps {
  type: NotificationType;
  title: string;
  description: string;
  user?: {
    username: string;
    profileImage?: string;
    rank?: number;
  };
  timestamp?: string;
  onClick?: () => void;
}

const NotificationToast: React.FC<NotificationToastProps> = ({
  type,
  title,
  description,
  user,
  timestamp,
  onClick
}) => {
  const getIcon = () => {
    switch (type) {
      case 'message':
        return <MessageSquare className="h-5 w-5 text-blue-400" />;
      case 'rank-change':
        return <Crown className="h-5 w-5 text-royal-gold" />;
      case 'team-event':
        return <Users className="h-5 w-5 text-green-400" />;
      case 'award':
        return <Award className="h-5 w-5 text-purple-400" />;
      case 'deposit':
        return <Coins className="h-5 w-5 text-amber-400" />;
      case 'mockery':
        return <Target className="h-5 w-5 text-red-400" />;
      case 'boost':
        return <Zap className="h-5 w-5 text-yellow-400" />;
      case 'decree':
        return <Scroll className="h-5 w-5 text-indigo-400" />;
      default:
        return <Bell className="h-5 w-5 text-white" />;
    }
  };

  const getBackground = () => {
    switch (type) {
      case 'message':
        return 'bg-blue-500/10 border-blue-500/20';
      case 'rank-change':
        return 'bg-royal-gold/10 border-royal-gold/20';
      case 'team-event':
        return 'bg-green-500/10 border-green-500/20';
      case 'award':
        return 'bg-purple-500/10 border-purple-500/20';
      case 'deposit':
        return 'bg-amber-500/10 border-amber-500/20';
      case 'mockery':
        return 'bg-red-500/10 border-red-500/20';
      case 'boost':
        return 'bg-yellow-500/10 border-yellow-500/20';
      case 'decree':
        return 'bg-indigo-500/10 border-indigo-500/20';
      default:
        return 'bg-white/10 border-white/20';
    }
  };

  const userInitials = user?.username
    ? user.username
        .split(' ')
        .map(name => name[0])
        .join('')
        .toUpperCase()
        .substring(0, 2)
    : 'ST';

  return (
    <div 
      className={cn(
        "flex items-start gap-3 p-4 rounded-lg border royal-shadow-sm cursor-pointer",
        getBackground()
      )}
      onClick={onClick}
    >
      {user ? (
        <Avatar className="h-9 w-9 border-2 border-white/20">
          <AvatarImage src={user.profileImage} alt={user.username} />
          <AvatarFallback className="bg-white/10">{userInitials}</AvatarFallback>
        </Avatar>
      ) : (
        <div className="flex items-center justify-center h-9 w-9 rounded-full bg-white/10">
          {getIcon()}
        </div>
      )}
      
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h4 className="font-medium text-sm">{title}</h4>
          {user?.rank && user.rank <= 10 && (
            <Badge variant="royal" className="text-xs px-1.5 py-0">
              <Crown className="h-3 w-3 mr-1" />
              #{user.rank}
            </Badge>
          )}
        </div>
        
        <p className="text-sm text-white/80 mt-1">{description}</p>
        
        {timestamp && (
          <p className="text-xs text-white/50 mt-2">{timestamp}</p>
        )}
      </div>
    </div>
  );
};

export default NotificationToast;
