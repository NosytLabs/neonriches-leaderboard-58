
import React from 'react';
import { X, ArrowUp, Trophy, Crown, Calendar, Coins, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Notification } from './NotificationCenter';

interface NotificationItemProps {
  notification: Notification;
  formatTimestamp: (date: Date) => string;
  handleMarkAsRead: (id: string) => void;
  handleDeleteNotification: (id: string) => void;
}

export const getNotificationIcon = (type: Notification['type']) => {
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

const NotificationItem: React.FC<NotificationItemProps> = ({
  notification,
  formatTimestamp,
  handleMarkAsRead,
  handleDeleteNotification
}) => {
  return (
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
  );
};

export default NotificationItem;
