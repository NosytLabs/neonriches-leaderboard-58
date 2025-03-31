
import { useCallback, useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useSound } from '@/hooks/use-sound';
import { SoundType } from '@/types/sound-types';
import { v4 as uuidv4 } from 'uuid';
import { useAuth } from '@/hooks/useAuth';

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'rank_change' | 'achievement' | 'royal' | 'event' | 'poke' | 'system' | 'milestone' | 'deposit';
  read: boolean;
  timestamp: Date;
  data?: any;
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
  playSound: (sound: SoundType, volume?: number) => void;
}

export const useNotifications = (): UseNotificationsReturn => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [open, setOpen] = useState(false);
  const sound = useSound();
  const { user } = useAuth();
  const { toast } = useToast();

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

    // Map notification types to sounds
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

    // Play the appropriate sound
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

  const formatTimestamp = (timestamp: Date) => {
    const now = new Date();
    const diff = now.getTime() - timestamp.getTime();
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (seconds < 60) {
      return 'Just now';
    } else if (minutes < 60) {
      return `${minutes}m ago`;
    } else if (hours < 24) {
      return `${hours}h ago`;
    } else if (days < 7) {
      return `${days}d ago`;
    } else {
      return timestamp.toLocaleDateString();
    }
  };

  const playSound = (soundType: SoundType, volume?: number) => {
    sound.playSound(soundType, { volume });
  };

  const unreadCount = notifications.filter(n => !n.read).length;

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
