
import React, { useState } from 'react';
import { Bell, X, Check, Crown, Trophy, Coins, ArrowUp, Calendar, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import useNotificationSounds from '@/hooks/use-notification-sounds';

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'rank_change' | 'achievement' | 'royal' | 'event' | 'poke' | 'system';
  read: boolean;
  timestamp: Date;
  actions?: Array<{
    label: string;
    action: () => void;
  }>;
}

// Mock notifications
const mockNotifications: Notification[] = [
  {
    id: '1',
    title: 'Rank Change Alert!',
    message: 'You have moved up 3 positions in the global leaderboard!',
    type: 'rank_change',
    read: false,
    timestamp: new Date(Date.now() - 300000),
  },
  {
    id: '2',
    title: 'Royal Announcement',
    message: 'Lord Moneybags has claimed the throne with a contribution of $5,200!',
    type: 'royal',
    read: false,
    timestamp: new Date(Date.now() - 7200000),
  },
  {
    id: '3',
    title: 'Achievement Unlocked',
    message: 'You have earned the "Big Spender" badge for spending $500 in one week!',
    type: 'achievement',
    read: true,
    timestamp: new Date(Date.now() - 86400000),
  },
  {
    id: '4',
    title: 'Poke Event',
    message: 'DarkKnight has poked you, dropping your rank by 1 for 24 hours!',
    type: 'poke',
    read: true,
    timestamp: new Date(Date.now() - 172800000),
    actions: [
      {
        label: 'Poke Back',
        action: () => console.log('Poke back action triggered'),
      },
    ],
  },
  {
    id: '5',
    title: 'New Event',
    message: 'Weekend Bonus: Earn double rank points for all contributions!',
    type: 'event',
    read: true,
    timestamp: new Date(Date.now() - 259200000),
    actions: [
      {
        label: 'View Details',
        action: () => console.log('View event details'),
      },
    ],
  },
];

const getNotificationIcon = (type: Notification['type']) => {
  switch (type) {
    case 'rank_change':
      return <ArrowUp className="h-5 w-5 text-green-400" />;
    case 'achievement':
      return <Trophy className="h-5 w-5 text-blue-400" />;
    case 'royal':
      return <Crown className="h-5 w-5 text-royal-gold" />;
    case 'event':
      return <Calendar className="h-5 w-5 text-purple-400" />;
    case 'poke':
      return <Coins className="h-5 w-5 text-red-400" />;
    case 'system':
      return <Bell className="h-5 w-5 text-gray-400" />;
    default:
      return <Bell className="h-5 w-5" />;
  }
};

const NotificationCenter: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);
  const [open, setOpen] = useState(false);
  const { playSound } = useNotificationSounds();
  
  const unreadCount = notifications.filter(n => !n.read).length;
  
  const handleMarkAllAsRead = () => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification => ({
        ...notification,
        read: true
      }))
    );
    playSound('notification', 0.3);
  };
  
  const handleMarkAsRead = (id: string) => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification =>
        notification.id === id
          ? { ...notification, read: true }
          : notification
      )
    );
  };
  
  const handleDeleteNotification = (id: string) => {
    setNotifications(prevNotifications =>
      prevNotifications.filter(notification => notification.id !== id)
    );
  };
  
  // Format timestamp to be more readable
  const formatTimestamp = (date: Date) => {
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes} min ago`;
    
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours} hr ago`;
    
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
    
    return date.toLocaleDateString();
  };
  
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button 
          size="icon" 
          variant="ghost" 
          className="relative"
          onClick={() => {
            if (unreadCount > 0) {
              playSound('notification', 0.3);
            }
          }}
        >
          <Bell className={`h-5 w-5 ${unreadCount > 0 ? 'text-royal-gold animate-pulse' : 'text-white/70'}`} />
          {unreadCount > 0 && (
            <Badge 
              className="absolute -top-1 -right-1 px-1 min-w-[18px] h-[18px] flex items-center justify-center bg-royal-gold text-black text-xs"
            >
              {unreadCount}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="glass-morphism border-royal-gold/20 w-full sm:max-w-md flex flex-col">
        <SheetHeader className="flex-shrink-0">
          <div className="flex justify-between items-center">
            <SheetTitle className="text-xl font-medieval royal-gradient">Royal Notifications</SheetTitle>
            {unreadCount > 0 && (
              <Button variant="ghost" size="sm" onClick={handleMarkAllAsRead} className="text-xs">
                <Check className="h-4 w-4 mr-1" />
                Mark all as read
              </Button>
            )}
          </div>
        </SheetHeader>
        
        <div className="flex-grow overflow-y-auto mt-6 mb-4 pr-2 -mr-2">
          {notifications.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-white/50">
              <Gift className="h-12 w-12 mb-4 text-white/30" />
              <p className="text-center">No notifications yet</p>
              <p className="text-center text-sm mt-1">Spend more to earn achievements and announcements!</p>
            </div>
          ) : (
            <div className="space-y-3">
              {notifications.map((notification) => (
                <div 
                  key={notification.id} 
                  className={`glass-morphism rounded-lg p-4 border ${notification.read ? 'border-white/10' : 'border-royal-gold/40'} relative`}
                  onClick={() => handleMarkAsRead(notification.id)}
                >
                  {!notification.read && (
                    <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-royal-gold" />
                  )}
                  <div className="flex">
                    <div className="mr-3 mt-1">
                      {getNotificationIcon(notification.type)}
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-medium ${notification.read ? 'text-white/90' : 'royal-gradient'}`}>
                        {notification.title}
                      </h4>
                      <p className="text-sm text-white/70 mt-1">{notification.message}</p>
                      
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-white/50">
                          {formatTimestamp(notification.timestamp)}
                        </span>
                        
                        <div className="flex space-x-2">
                          {notification.actions?.map((action, idx) => (
                            <Button 
                              key={idx} 
                              size="sm" 
                              variant="outline" 
                              className="text-xs h-7 px-2 py-0"
                              onClick={(e) => {
                                e.stopPropagation();
                                action.action();
                              }}
                            >
                              {action.label}
                            </Button>
                          ))}
                          
                          <Button 
                            size="icon" 
                            variant="ghost" 
                            className="h-7 w-7"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDeleteNotification(notification.id);
                            }}
                          >
                            <X className="h-3 w-3 text-white/50" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NotificationCenter;
