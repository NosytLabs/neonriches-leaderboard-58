import { useState, useCallback, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { formatDistanceToNow } from 'date-fns';
import { useNotificationSounds } from './sounds/use-notification-sounds';

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'rank_change' | 'achievement' | 'royal' | 'event' | 'deposit' | 'poke' | 'system' | 'milestone';
  read: boolean;
  timestamp: Date;
  actions?: Array<{
    label: string;
    action: () => void;
  }>;
}

interface UseNotificationsReturn {
  notifications: Notification[];
  unreadCount: number;
  open: boolean;
  setOpen: (open: boolean) => void;
  addNotification: (notification: Omit<Notification, 'id' | 'read' | 'timestamp'>) => void;
  handleMarkAllAsRead: () => void;
  handleMarkAsRead: (id: string) => void;
  handleDeleteNotification: (id: string) => void;
  formatTimestamp: (timestamp: Date) => string;
  playSound: (type: string, volume?: number) => void;
}

export const useNotifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [open, setOpen] = useState(false);
  const sound = useNotificationSounds();

  useEffect(() => {
    if (user) {
      const savedNotifications = localStorage.getItem(`notifications_${user.id}`);
      if (savedNotifications) {
        try {
          const parsed = JSON.parse(savedNotifications);
          const formattedNotifications = parsed.map((notification: any) => ({
            ...notification,
            timestamp: new Date(notification.timestamp)
          }));
          setNotifications(formattedNotifications);
        } catch (e) {
          console.error('Error parsing notifications from localStorage', e);
          setNotifications([]);
        }
      }
    }
  }, [user?.id]);

  useEffect(() => {
    if (user && notifications.length > 0) {
      localStorage.setItem(`notifications_${user.id}`, JSON.stringify(notifications));
    }
  }, [notifications, user?.id]);

  const addNotification = (notification: Omit<Notification, 'id' | 'read' | 'timestamp'>) => {
    const newNotification: Notification = {
      ...notification,
      id: uuidv4(),
      read: false,
      timestamp: new Date()
    };

    setNotifications(prev => [newNotification, ...prev].slice(0, 50));

    const notificationSounds: Record<string, SoundType> = {
      'rank_change': 'rank_up',
      'achievement': 'achievement',
      'royal': 'royal',
      'deposit': 'coin',
      'milestone': 'achievement',
      'event': 'notification',
      'poke': 'notification',
      'system': 'notification'
    };

    const soundType = notificationSounds[notification.type] || 'notification';
    sound.playSound(soundType, { volume: 0.4 });
  };

  const handleMarkAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const handleMarkAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notification => ({ ...notification, read: true }))
    );
    sound.playSound('notification', { volume: 0.3 });
  };

  const handleDeleteNotification = (id: string) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };

  const formatTimestamp = (timestamp: Date): string => {
    return formatDistanceToNow(timestamp, { addSuffix: true });
  };

  const playSound = (type: string = 'notification', volume: number = 0.5) => {
    sound.playNotificationSound(type, { volume });
  };

  return {
    notifications,
    unreadCount,
    open,
    setOpen,
    addNotification,
    handleMarkAllAsRead,
    handleMarkAsRead,
    handleDeleteNotification,
    formatTimestamp,
    playSound
  };
};

export default useNotifications;
