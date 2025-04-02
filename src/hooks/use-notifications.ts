
import { useState, useEffect, useCallback } from 'react';
import { useToast } from './use-toast';
import { useSound } from './useSound';
import { SoundType } from '@/types/sound-types';
import useAuth from './useAuth';

interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
  sound?: SoundType;
  read: boolean;
  timestamp: string;
}

interface UseNotificationsResult {
  notifications: Notification[];
  unreadCount: number;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
  clearNotifications: () => void;
  sendNotification: (notification: Omit<Notification, 'id' | 'read' | 'timestamp'>) => void;
  dismissNotification: (id: string) => void;
}

export const useNotifications = (): UseNotificationsResult => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const { toast } = useToast();
  const sound = useSound();
  const { user } = useAuth();

  // Initial load of notifications
  useEffect(() => {
    if (user) {
      // Simulate fetching notifications from an API
      const mockNotifications: Notification[] = [
        {
          id: '1',
          title: 'Welcome!',
          message: `Welcome to the platform, ${user.displayName}!`,
          type: 'success',
          sound: 'success',
          read: false,
          timestamp: new Date(Date.now() - 1000 * 60 * 5).toISOString()
        },
        {
          id: '2',
          title: 'Team Update',
          message: 'Your team has moved up in the rankings!',
          type: 'info',
          sound: 'notification',
          read: false,
          timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString()
        }
      ];
      
      setNotifications(mockNotifications);
    }
  }, [user]);

  const markAsRead = useCallback((id: string) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  }, []);

  const markAllAsRead = useCallback(() => {
    setNotifications(prev => 
      prev.map(notification => ({ ...notification, read: true }))
    );
  }, []);

  const clearNotifications = useCallback(() => {
    setNotifications([]);
  }, []);

  const sendNotification = useCallback((notification: Omit<Notification, 'id' | 'read' | 'timestamp'>) => {
    const newNotification: Notification = {
      ...notification,
      id: `notification-${Date.now()}`,
      read: false,
      timestamp: new Date().toISOString()
    };
    
    setNotifications(prev => [newNotification, ...prev]);
    
    toast({
      title: notification.title,
      description: notification.message,
      variant: notification.type === 'error' ? 'destructive' : 'default',
    });
    
    if (notification.sound) {
      sound.playSound(notification.sound as SoundType);
    }
  }, [toast, sound]);

  const dismissNotification = useCallback((id: string) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  }, []);

  const unreadCount = notifications.filter(notification => !notification.read).length;

  return {
    notifications,
    unreadCount,
    markAsRead,
    markAllAsRead,
    clearNotifications,
    sendNotification,
    dismissNotification
  };
};

export default useNotifications;
