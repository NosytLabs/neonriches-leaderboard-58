
import React from 'react';
import { Bell } from 'lucide-react';

const EmptyNotifications: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-64 text-white/50">
      <Bell className="h-12 w-12 mb-3 opacity-25" />
      <h3 className="text-lg font-medium mb-1">No Notifications</h3>
      <p className="text-sm text-center max-w-xs">
        You don't have any notifications yet. They will appear here when you receive achievements, rank changes, or important updates.
      </p>
    </div>
  );
};

export default EmptyNotifications;
