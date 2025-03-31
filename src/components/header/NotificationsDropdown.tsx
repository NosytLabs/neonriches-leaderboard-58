
import React, { useState } from 'react';
import { Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import MedievalIcon from '../ui/medieval-icon';

// Mock notification data - in a real app, this would likely come from a context or API
const mockNotifications = [
  {
    id: 1,
    title: 'New follower',
    message: 'RoyalSpender is now following you',
    time: '2 min ago',
    read: false,
    type: 'social'
  },
  {
    id: 2,
    title: 'Rank update',
    message: 'You moved up 2 positions on the leaderboard',
    time: '1 hour ago',
    read: true,
    type: 'rank'
  },
  {
    id: 3,
    title: 'Team news',
    message: 'Red Team is now leading the weekly competition',
    time: '5 hours ago',
    read: true,
    type: 'team'
  }
];

const NotificationsDropdown: React.FC = () => {
  const [notifications, setNotifications] = useState(mockNotifications);
  const unreadCount = notifications.filter(notification => !notification.read).length;
  
  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({
      ...notification,
      read: true
    })));
  };
  
  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'social':
        return <MedievalIcon name="shield" size="sm" color="crimson" />;
      case 'rank':
        return <MedievalIcon name="crown" size="sm" color="gold" />;
      case 'team':
        return <MedievalIcon name="shield" size="sm" color="royal" />;
      default:
        return <MedievalIcon name="scroll" size="sm" />;
    }
  };
  
  return (
    <TooltipProvider>
      <DropdownMenu>
        <Tooltip>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="h-5 w-5" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                    {unreadCount}
                  </span>
                )}
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p>Notifications</p>
          </TooltipContent>
        </Tooltip>
        
        <DropdownMenuContent className="w-72 glass-morphism border-white/10">
          <DropdownMenuLabel className="flex justify-between items-center">
            <span>Notifications</span>
            {unreadCount > 0 && (
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-7 text-xs" 
                onClick={markAllAsRead}
              >
                Mark all read
              </Button>
            )}
          </DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-white/10" />
          
          <DropdownMenuGroup className="max-h-80 overflow-y-auto">
            {notifications.length > 0 ? (
              notifications.map((notification) => (
                <DropdownMenuItem 
                  key={notification.id}
                  className={`flex flex-col items-start px-3 py-2 ${!notification.read ? 'bg-white/5' : ''}`}
                >
                  <div className="flex items-center w-full">
                    <div className="mr-2">
                      {getNotificationIcon(notification.type)}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium mb-0.5">{notification.title}</p>
                      <p className="text-xs text-white/70">{notification.message}</p>
                    </div>
                    <div className="text-xs text-white/50 ml-2">{notification.time}</div>
                  </div>
                </DropdownMenuItem>
              ))
            ) : (
              <div className="py-4 text-center text-white/50 text-sm">
                No notifications
              </div>
            )}
          </DropdownMenuGroup>
          
          <DropdownMenuSeparator className="bg-white/10" />
          <DropdownMenuItem className="justify-center text-sm text-white/70">
            View all notifications
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </TooltipProvider>
  );
};

export default NotificationsDropdown;
