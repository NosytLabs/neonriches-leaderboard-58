
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Toast } from '@/components/ui/toast';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/auth';
import NotificationToast, { NotificationType } from '@/components/notifications/NotificationToast';
import useNotificationSounds from '@/hooks/use-notification-sounds';

interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  description: string;
  user_id?: string;
  username?: string;
  profile_image?: string;
  rank?: number;
  created_at: string;
  read: boolean;
  action_url?: string;
}

interface NotificationContextType {
  notifications: Notification[];
  unreadCount: number;
  markAsRead: (id: string) => Promise<void>;
  markAllAsRead: () => Promise<void>;
  pushNotification: (notification: Omit<Notification, 'id' | 'created_at' | 'read'>) => Promise<void>;
}

const NotificationContext = createContext<NotificationContextType | null>(null);

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const { user } = useAuth();
  const { toast } = useToast();
  const { playSound } = useNotificationSounds();

  // Fetch notifications when user changes
  useEffect(() => {
    if (!user) {
      setNotifications([]);
      setUnreadCount(0);
      return;
    }

    const fetchNotifications = async () => {
      try {
        const { data, error } = await supabase
          .from('notifications')
          .select('*')
          .eq('recipient_id', user.id)
          .order('created_at', { ascending: false })
          .limit(50);

        if (error) {
          console.error('Error fetching notifications:', error);
          return;
        }

        // Transform data to match Notification interface
        const formattedNotifications: Notification[] = data.map(n => ({
          id: n.id,
          type: n.type,
          title: n.title,
          description: n.description,
          user_id: n.sender_id,
          username: n.sender_username,
          profile_image: n.sender_profile_image,
          rank: n.sender_rank,
          created_at: n.created_at,
          read: n.read,
          action_url: n.action_url
        }));

        setNotifications(formattedNotifications);
        setUnreadCount(formattedNotifications.filter(n => !n.read).length);
      } catch (err) {
        console.error('Error fetching notifications:', err);
      }
    };

    fetchNotifications();
  }, [user]);

  // Set up real-time subscription
  useEffect(() => {
    if (!user) return;

    // Subscribe to new notifications
    const channel = supabase
      .channel('notifications_channel')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'notifications',
          filter: `recipient_id=eq.${user.id}`
        },
        async (payload) => {
          const newNotification: Notification = {
            id: payload.new.id,
            type: payload.new.type,
            title: payload.new.title,
            description: payload.new.description,
            user_id: payload.new.sender_id,
            username: payload.new.sender_username,
            profile_image: payload.new.sender_profile_image,
            rank: payload.new.sender_rank,
            created_at: payload.new.created_at,
            read: false,
            action_url: payload.new.action_url
          };

          // Add to notifications state
          setNotifications(prev => [newNotification, ...prev]);
          setUnreadCount(prev => prev + 1);

          // Show a toast notification
          toast({
            title: newNotification.title,
            description: (
              <NotificationToast
                type={newNotification.type}
                title={newNotification.title}
                description={newNotification.description}
                user={newNotification.username ? {
                  username: newNotification.username,
                  profileImage: newNotification.profile_image,
                  rank: newNotification.rank
                } : undefined}
                timestamp="Just now"
              />
            ),
            duration: 5000,
          });

          // Play notification sound based on type
          switch(newNotification.type) {
            case 'message':
              playSound('message');
              break;
            case 'rank-change':
              playSound('rankUp');
              break;
            case 'award':
              playSound('reward');
              break;
            case 'mockery':
              playSound('mockery');
              break;
            default:
              playSound('notification');
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [user, toast, playSound]);

  const markAsRead = async (id: string) => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('notifications')
        .update({ read: true })
        .eq('id', id)
        .eq('recipient_id', user.id);

      if (error) {
        console.error('Error marking notification as read:', error);
        return;
      }

      setNotifications(prev => 
        prev.map(n => n.id === id ? { ...n, read: true } : n)
      );
      setUnreadCount(prev => Math.max(0, prev - 1));
    } catch (err) {
      console.error('Error marking notification as read:', err);
    }
  };

  const markAllAsRead = async () => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('notifications')
        .update({ read: true })
        .eq('recipient_id', user.id)
        .eq('read', false);

      if (error) {
        console.error('Error marking all notifications as read:', error);
        return;
      }

      setNotifications(prev => 
        prev.map(n => ({ ...n, read: true }))
      );
      setUnreadCount(0);
    } catch (err) {
      console.error('Error marking all notifications as read:', err);
    }
  };

  const pushNotification = async (notification: Omit<Notification, 'id' | 'created_at' | 'read'>) => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('notifications')
        .insert({
          recipient_id: user.id,
          type: notification.type,
          title: notification.title,
          description: notification.description,
          sender_id: notification.user_id,
          sender_username: notification.username,
          sender_profile_image: notification.profile_image,
          sender_rank: notification.rank,
          action_url: notification.action_url,
          read: false
        });

      if (error) {
        console.error('Error creating notification:', error);
      }
    } catch (err) {
      console.error('Error creating notification:', err);
    }
  };

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        unreadCount,
        markAsRead,
        markAllAsRead,
        pushNotification
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
};
