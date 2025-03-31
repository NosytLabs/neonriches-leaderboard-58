
import React, { useState } from 'react';
import { Crown, ArrowUpRight, Trophy, DollarSign, Sparkles } from 'lucide-react';

interface Announcement {
  id: string;
  type: 'rank_change' | 'achievement' | 'new_king' | 'event' | 'promotion';
  message: string;
  timestamp: Date;
  user?: {
    username: string;
    displayName?: string;
  };
}

// Fixed announcements that everyone will see
const announcements: Announcement[] = [
  {
    id: '1',
    type: 'rank_change',
    message: 'LordGolden has risen to rank #3 with a massive $1,500 contribution!',
    timestamp: new Date(Date.now() - 120000),
    user: {
      username: 'LordGolden',
      displayName: 'Lord of Gold'
    }
  },
  {
    id: '2',
    type: 'new_king',
    message: 'All hail our new reigning monarch: MoneyQueen who spent $2,800 to claim the throne!',
    timestamp: new Date(Date.now() - 3600000),
    user: {
      username: 'MoneyQueen',
      displayName: 'Queen of Wealth'
    }
  },
  {
    id: '3',
    type: 'event',
    message: 'Poke Party event starts in 2 hours! Get ready to drop ranks and create chaos!',
    timestamp: new Date(Date.now() - 7200000),
  }
];

const getAnnouncementIcon = (type: Announcement['type']) => {
  switch (type) {
    case 'rank_change':
      return <ArrowUpRight className="h-4 w-4 text-green-400" />;
    case 'new_king':
      return <Crown className="h-4 w-4 text-royal-gold animate-pulse-slow" />;
    case 'event':
      return <Trophy className="h-4 w-4 text-purple-400" />;
    case 'achievement':
      return <Trophy className="h-4 w-4 text-blue-400" />;
    case 'promotion':
      return <DollarSign className="h-4 w-4 text-royal-gold" />;
    default:
      return <Sparkles className="h-4 w-4 text-white" />;
  }
};

const getAnnouncementColor = (type: Announcement['type']) => {
  switch (type) {
    case 'rank_change':
      return 'text-green-400';
    case 'new_king':
      return 'text-royal-gold';
    case 'event':
      return 'text-purple-400';
    case 'achievement':
      return 'text-blue-400';
    case 'promotion':
      return 'text-royal-gold';
    default:
      return 'text-white';
  }
};

const AnnouncementTicker: React.FC = () => {
  // Always show the first announcement for consistency
  const [currentIndex] = useState(0);
  
  const currentAnnouncement = announcements[currentIndex];
  
  if (!currentAnnouncement) return null;
  
  return (
    <div className="w-full bg-black/50 backdrop-blur-sm border-b border-royal-gold/20 py-2 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center text-sm md:text-base">
          {getAnnouncementIcon(currentAnnouncement.type)}
          <span className={`mx-2 ${getAnnouncementColor(currentAnnouncement.type)}`}>
            {currentAnnouncement.message}
          </span>
          <span className="text-white/50 text-xs hidden md:inline-block">
            {new Date(currentAnnouncement.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementTicker;
