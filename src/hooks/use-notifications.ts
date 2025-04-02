
import { useState, useEffect, useCallback } from 'react';
import { useToast } from './use-toast';
import useSound from './useSound';
import { Notification, SoundType, UseNotificationsResult } from '@/types/sound-types';
import { format, formatDistanceToNow } from 'date-fns';

export const useNotifications = (): UseNotificationsResult => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const sound = useSound();

  // Mock notifications for testing
  useEffect(() => {
    const mockNotifications: Notification[] = [
      {
        id: '1',
        title: 'Royal Rank Change',
        message: 'You have moved up in rank! You are now ranked #42.',
        type: 'rank_change',
        read: false,
        timestamp: new Date(Date.now() - 1000 * 60 * 30) // 30 minutes ago
      },
      {
        id: '2',
        title: 'New Achievement Unlocked',
        message: 'Congratulations! You have unlocked the "Royal Spender" achievement.',
        type: 'achievement',
        read: false,
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2) // 2 hours ago
      },
      {
        id: '3',
        title: 'Royal Announcement',
        message: 'The King has announced a new spending tournament. Top spenders will be rewarded!',
        type: 'royal',
        read: true,
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24) // 1 day ago
      },
      {
        id: '4',
        title: 'Upcoming Royal Event',
        message: 'Mark your calendar! The Royal Ball will be held this weekend.',
        type: 'event',
        read: true,
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 48) // 2 days ago
      }
    ];

    setNotifications(mockNotifications);
  }, []);

  // Update unread count whenever notifications change
  useEffect(() => {
    const count = notifications.filter(notification => !notification.read).length;
    setUnreadCount(count);
  }, [notifications]);

  // Mark a single notification as read
  const handleMarkAsRead = useCallback((id: string) => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  }, []);

  // Mark all notifications as read
  const handleMarkAllAsRead = useCallback(() => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification => ({ ...notification, read: true }))
    );
  }, []);

  // Delete a notification
  const handleDeleteNotification = useCallback((id: string) => {
    setNotifications(prevNotifications =>
      prevNotifications.filter(notification => notification.id !== id)
    );
  }, []);

  // Format timestamp
  const formatTimestamp = useCallback((timestamp: Date) => {
    const today = new Date();
    const notificationDate = new Date(timestamp);
    
    if (
      notificationDate.getDate() === today.getDate() &&
      notificationDate.getMonth() === today.getMonth() &&
      notificationDate.getFullYear() === today.getFullYear()
    ) {
      return `Today at ${format(notificationDate, 'h:mm a')}`;
    } else if (
      today.getTime() - notificationDate.getTime() < 1000 * 60 * 60 * 24 * 7 // Less than a week ago
    ) {
      return formatDistanceToNow(notificationDate, { addSuffix: true });
    } else {
      return format(notificationDate, 'MMM d, yyyy');
    }
  }, []);

  // Play a sound
  const playSound = useCallback((soundType: SoundType, volume?: number) => {
    sound.playSound(soundType, { volume });
  }, [sound]);

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

export default useNotifications;
