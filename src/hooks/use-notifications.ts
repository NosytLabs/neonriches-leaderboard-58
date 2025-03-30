
import { useState, useEffect } from 'react';
import useNotificationSounds from '@/hooks/use-notification-sounds';
import { useAuth } from '@/contexts/auth';
import { v4 as uuidv4 } from 'uuid';

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
  playSound: (sound: string, volume?: number) => void;
}

export const useNotifications = (): UseNotificationsReturn => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [open, setOpen] = useState(false);
  const { playSound } = useNotificationSounds();
  const { user } = useAuth();
  
  // Load notifications from local storage on mount
  useEffect(() => {
    if (user) {
      const savedNotifications = localStorage.getItem(`notifications_${user.id}`);
      if (savedNotifications) {
        try {
          const parsed = JSON.parse(savedNotifications);
          // Convert string timestamps back to Date objects
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
  
  // Save notifications to local storage when they change
  useEffect(() => {
    if (user && notifications.length > 0) {
      localStorage.setItem(`notifications_${user.id}`, JSON.stringify(notifications));
    }
  }, [notifications, user?.id]);
  
  // Add a new notification
  const addNotification = (notification: Omit<Notification, 'id' | 'read' | 'timestamp'>) => {
    const newNotification: Notification = {
      ...notification,
      id: uuidv4(),
      read: false,
      timestamp: new Date()
    };
    
    setNotifications(prev => [newNotification, ...prev].slice(0, 50)); // Keep only the 50 most recent
    
    // Play notification sound based on the type
    switch (notification.type) {
      case 'rank_change':
        playSound('rankChange', 0.4);
        break;
      case 'achievement':
      case 'milestone':
        playSound('achievement', 0.5);
        break;
      case 'royal':
        playSound('royal', 0.4);
        break;
      case 'deposit':
        playSound('coin', 0.4);
        break;
      default:
        playSound('notification', 0.3);
    }
  };
  
  // Mark a notification as read
  const handleMarkAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };
  
  // Mark all notifications as read
  const handleMarkAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notification => ({ ...notification, read: true }))
    );
  };
  
  // Delete a notification
  const handleDeleteNotification = (id: string) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };
  
  // Format timestamp for display
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
  
  // Count unread notifications
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
