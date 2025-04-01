
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { formatRelativeTime } from '@/utils/formatters/dateFormatters';
import { safeToString } from '@/utils/safeToString';

interface ProfileFeedItemProps {
  id: string | number;
  username: string;
  profileImage?: string;
  timestamp: string;
  content: string;
  type: 'spend' | 'achievement' | 'rank' | 'mockery' | 'boost';
}

const ProfileFeedItem = ({ id, username, profileImage, timestamp, content, type }: ProfileFeedItemProps) => {
  const safeId = safeToString(id);
  
  return (
    <div key={safeId} className="p-4 border-b border-gray-200 dark:border-gray-800">
      <div className="flex items-start space-x-3">
        <Avatar className="h-10 w-10 border border-gray-200 dark:border-gray-700">
          <AvatarImage src={profileImage} alt={username} />
          <AvatarFallback>{username.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <span className="font-medium">{username}</span>
            <Badge variant="outline" className="text-xs">
              {type === 'spend' && 'Spent'}
              {type === 'achievement' && 'Achievement'}
              {type === 'rank' && 'Rank'}
              {type === 'mockery' && 'Mockery'}
              {type === 'boost' && 'Boost'}
            </Badge>
            <span className="text-xs text-gray-500">{formatRelativeTime(timestamp)}</span>
          </div>
          <p className="mt-1 text-sm">{content}</p>
        </div>
      </div>
    </div>
  );
};

interface ProfileFeedProps {
  items: ProfileFeedItemProps[];
  loading?: boolean;
}

const ProfileFeed = ({ items, loading = false }: ProfileFeedProps) => {
  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="p-4 border rounded-lg animate-pulse">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-full bg-gray-300 dark:bg-gray-700"></div>
              <div className="space-y-2 flex-1">
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/3"></div>
                <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-full"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No activity to show</p>
      </div>
    );
  }

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-800 rounded-lg border border-gray-200 dark:border-gray-800">
      {items.map((item) => (
        <ProfileFeedItem key={safeToString(item.id)} {...item} />
      ))}
    </div>
  );
};

export default ProfileFeed;
