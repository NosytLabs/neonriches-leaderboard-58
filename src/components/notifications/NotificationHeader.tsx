
import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SheetHeader, SheetTitle } from '@/components/ui/sheet';

interface NotificationHeaderProps {
  unreadCount: number;
  handleMarkAllAsRead: () => void;
}

const NotificationHeader: React.FC<NotificationHeaderProps> = ({ 
  unreadCount, 
  handleMarkAllAsRead 
}) => {
  return (
    <SheetHeader className="flex-shrink-0">
      <div className="flex justify-between items-center">
        <SheetTitle className="text-xl font-medieval royal-gradient">Royal Notifications</SheetTitle>
        {unreadCount > 0 && (
          <Button variant="ghost" size="sm" onClick={handleMarkAllAsRead} className="text-xs">
            <Check className="h-4 w-4 mr-1" />
            Mark all as read
          </Button>
        )}
      </div>
    </SheetHeader>
  );
};

export default NotificationHeader;
