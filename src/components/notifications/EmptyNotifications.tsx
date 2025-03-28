
import React from 'react';
import { Gift } from 'lucide-react';

const EmptyNotifications: React.FC = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center text-white/50">
      <Gift className="h-12 w-12 mb-4 text-white/30" />
      <p className="text-center">No notifications yet</p>
      <p className="text-center text-sm mt-1">Spend more to earn achievements and announcements!</p>
    </div>
  );
};

export default EmptyNotifications;
