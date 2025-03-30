
import React from 'react';
import { 
  Bell, 
  Trophy, 
  Crown, 
  Calendar, 
  DollarSign, 
  AlertCircle, 
  MessageCircle, 
  X,
  Check
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Notification } from '@/hooks/use-notifications';

interface NotificationItemProps {
  notification: Notification;
  formatTimestamp: (timestamp: Date) => string;
  handleMarkAsRead: (id: string) => void;
  handleDeleteNotification: (id: string) => void;
}

const NotificationItem: React.FC<NotificationItemProps> = ({
  notification,
  formatTimestamp,
  handleMarkAsRead,
  handleDeleteNotification
}) => {
  // Get the icon based on notification type
  const getNotificationIcon = () => {
    switch (notification.type) {
      case 'rank_change':
        return <Crown className="text-royal-gold" />;
      case 'achievement':
      case 'milestone':
        return <Trophy className="text-yellow-500" />;
      case 'royal':
        return <Crown className="text-purple-400" />;
      case 'event':
        return <Calendar className="text-blue-400" />;
      case 'deposit':
        return <DollarSign className="text-green-400" />;
      case 'poke':
        return <MessageCircle className="text-pink-400" />;
      case 'system':
      default:
        return <Bell className="text-white" />;
    }
  };
  
  // Get background color based on notification type
  const getNotificationBgColor = () => {
    switch (notification.type) {
      case 'rank_change':
        return 'bg-royal-gold/5 hover:bg-royal-gold/10';
      case 'achievement':
      case 'milestone':
        return 'bg-yellow-500/5 hover:bg-yellow-500/10';
      case 'royal':
        return 'bg-purple-500/5 hover:bg-purple-500/10';
      case 'event':
        return 'bg-blue-500/5 hover:bg-blue-500/10';
      case 'deposit':
        return 'bg-green-500/5 hover:bg-green-500/10';
      case 'poke':
        return 'bg-pink-500/5 hover:bg-pink-500/10';
      case 'system':
      default:
        return 'bg-white/5 hover:bg-white/10';
    }
  };
  
  // Handle mark as read
  const onMarkAsRead = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!notification.read) {
      handleMarkAsRead(notification.id);
    }
  };
  
  // Handle delete notification
  const onDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleDeleteNotification(notification.id);
  };
  
  return (
    <div 
      className={`relative rounded-lg transition-all cursor-pointer ${getNotificationBgColor()} ${
        notification.read ? 'opacity-75' : 'border-l-2 border-l-royal-gold'
      }`}
      onClick={onMarkAsRead}
    >
      <div className="flex p-3">
        {/* Icon */}
        <div className="h-9 w-9 rounded-full bg-black/20 flex items-center justify-center mr-3 shrink-0">
          {getNotificationIcon()}
        </div>
        
        {/* Content */}
        <div className="flex-1">
          <div className="font-medium text-sm line-clamp-1">{notification.title}</div>
          <div className="text-xs text-white/70 mt-0.5 line-clamp-2">{notification.message}</div>
          
          {/* Time */}
          <div className="text-xs text-white/50 mt-1">{formatTimestamp(notification.timestamp)}</div>
          
          {/* Actions */}
          {notification.actions && notification.actions.length > 0 && (
            <div className="flex mt-2 gap-2">
              {notification.actions.map((action, index) => (
                <Button 
                  key={index} 
                  size="sm" 
                  variant="outline" 
                  className="h-7 px-2 py-0 text-xs"
                  onClick={(e) => {
                    e.stopPropagation();
                    action.action();
                  }}
                >
                  {action.label}
                </Button>
              ))}
            </div>
          )}
        </div>
        
        {/* Controls */}
        <div className="flex flex-col ml-2 gap-1">
          {!notification.read && (
            <Button 
              size="icon" 
              variant="ghost" 
              className="h-6 w-6 opacity-50 hover:opacity-100"
              onClick={onMarkAsRead}
            >
              <Check className="h-3.5 w-3.5" />
            </Button>
          )}
          <Button 
            size="icon" 
            variant="ghost" 
            className="h-6 w-6 opacity-50 hover:opacity-100 hover:text-red-400"
            onClick={onDelete}
          >
            <X className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotificationItem;
