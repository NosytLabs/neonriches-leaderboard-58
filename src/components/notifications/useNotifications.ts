
import { useState } from 'react';
import { Notification } from './NotificationCenter';
import { useSound } from '@/hooks/sounds/use-sound';

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

export const useNotifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);
  const [open, setOpen] = useState(false);
  const { play } = useSound();
  
  const unreadCount = notifications.filter(n => !n.read).length;
  
  const handleMarkAllAsRead = () => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification => ({
        ...notification,
        read: true
      }))
    );
    play('notification', 0.3);
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

  const playSound = (soundType: string, volume = 0.5) => {
    play(soundType as any, { volume });
  };

  return {
    notifications,
    unreadCount,
    open,
    setOpen,
    handleMarkAllAsRead,
    handleMarkAsRead,
    handleDeleteNotification,
    formatTimestamp,
    playSound
  };
};
