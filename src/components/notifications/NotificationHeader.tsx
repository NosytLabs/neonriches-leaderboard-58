
import React from 'react';
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SheetTitle, SheetDescription } from '@/components/ui/sheet';

interface NotificationHeaderProps {
  unreadCount: number;
  handleMarkAllAsRead: () => void;
}

const NotificationHeader: React.FC<NotificationHeaderProps> = ({
  unreadCount,
  handleMarkAllAsRead
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between">
        <div>
          <SheetTitle className="text-xl font-bold">Notifications</SheetTitle>
          <SheetDescription className="text-white/70">
            {unreadCount > 0 ? (
              <span>You have <span className="text-royal-gold font-medium">{unreadCount}</span> unread notifications</span>
            ) : (
              <span>No new notifications</span>
            )}
          </SheetDescription>
        </div>
        
        {unreadCount > 0 && (
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleMarkAllAsRead}
            className="h-8 px-2 text-xs"
          >
            <Check className="h-3.5 w-3.5 mr-1" />
            Mark all read
          </Button>
        )}
      </div>
    </div>
  );
};

export default NotificationHeader;
