
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Crown, ChevronUp } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

interface ChatUser {
  id: string;
  username: string;
  profileImage?: string;
  rank?: number;
  tier?: 'free' | 'basic' | 'premium' | 'pro' | 'royal' | 'legendary' | 'crab' | 'octopus' | 'fish' | 'dolphin' | 'shark' | 'whale';
}

interface MessageBubbleProps {
  user: ChatUser;
  message: string;
  date: string;
  isCurrentUser?: boolean;
}

const getTierColor = (tier?: string) => {
  switch (tier) {
    case 'royal':
    case 'legendary':
    case 'whale':
      return 'text-royal-gold';
    case 'premium':
    case 'pro':
    case 'shark':
    case 'dolphin':
      return 'text-blue-400';
    case 'fish':
    case 'octopus':
      return 'text-green-400';
    default:
      return 'text-white/80';
  }
};

const getTierBadge = (tier?: string) => {
  switch (tier) {
    case 'royal':
    case 'legendary':
    case 'whale':
      return 'border-royal-gold/30 bg-royal-gold/10 text-royal-gold';
    case 'premium':
    case 'pro':
    case 'shark':
    case 'dolphin':
      return 'border-blue-500/30 bg-blue-500/10 text-blue-400';
    case 'fish':
    case 'octopus':
      return 'border-green-500/30 bg-green-500/10 text-green-400';
    default:
      return 'border-white/20 bg-white/5 text-white/70';
  }
};

const MessageBubble: React.FC<MessageBubbleProps> = ({
  user,
  message,
  date,
  isCurrentUser = false,
}) => {
  const formattedDate = formatDistanceToNow(new Date(date), { addSuffix: true });
  const userInitials = user.username
    .split(' ')
    .map(name => name[0])
    .join('')
    .toUpperCase()
    .substring(0, 2);

  return (
    <div className={cn(
      "flex gap-3",
      isCurrentUser ? "flex-row-reverse" : "flex-row"
    )}>
      <Avatar className={cn(
        "h-9 w-9 border-2",
        user.tier && getTierBadge(user.tier)
      )}>
        <AvatarImage src={user.profileImage} alt={user.username} />
        <AvatarFallback className="bg-white/10">{userInitials}</AvatarFallback>
      </Avatar>
      
      <div className={cn(
        "flex flex-col max-w-[80%]",
        isCurrentUser ? "items-end" : "items-start"
      )}>
        <div className="flex items-center gap-2 mb-1">
          <span className={cn(
            "font-medium text-sm",
            getTierColor(user.tier)
          )}>
            {user.username}
          </span>
          
          {user.rank && user.rank <= 10 && (
            <Badge variant="royal" className="text-xs px-1.5 py-0">
              <Crown className="h-3 w-3 mr-1" />
              #{user.rank}
            </Badge>
          )}
        </div>
        
        <div className={cn(
          "rounded-lg p-3 text-sm",
          isCurrentUser
            ? "bg-royal-gold/20 text-white royal-shadow-sm"
            : "glass-morphism border-white/10 text-white/90"
        )}>
          {message}
        </div>
        
        <span className="text-xs text-white/50 mt-1">{formattedDate}</span>
      </div>
    </div>
  );
};

export default MessageBubble;
