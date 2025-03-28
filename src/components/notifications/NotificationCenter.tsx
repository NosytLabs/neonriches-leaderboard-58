
import React from 'react';
import { Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import NotificationItem from './NotificationItem';
import EmptyNotifications from './EmptyNotifications';
import NotificationHeader from './NotificationHeader';
import { useNotifications } from './useNotifications';

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

const NotificationCenter: React.FC = () => {
  const {
    notifications,
    unreadCount,
    open,
    setOpen,
    handleMarkAllAsRead,
    handleMarkAsRead,
    handleDeleteNotification,
    formatTimestamp,
    playSound
  } = useNotifications();
  
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
        <NotificationHeader 
          unreadCount={unreadCount}
          handleMarkAllAsRead={handleMarkAllAsRead}
        />
        
        <div className="flex-grow overflow-y-auto mt-6 mb-4 pr-2 -mr-2">
          {notifications.length === 0 ? (
            <EmptyNotifications />
          ) : (
            <div className="space-y-3">
              {notifications.map((notification) => (
                <NotificationItem 
                  key={notification.id}
                  notification={notification}
                  formatTimestamp={formatTimestamp}
                  handleMarkAsRead={handleMarkAsRead}
                  handleDeleteNotification={handleDeleteNotification}
                />
              ))}
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NotificationCenter;
