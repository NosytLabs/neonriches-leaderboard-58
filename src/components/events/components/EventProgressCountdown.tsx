
import React from 'react';
import { Progress } from '@/components/ui/progress';
import CountdownTimer from '../CountdownTimer';

interface EventProgressCountdownProps {
  progress: number;
  endDate: Date;
}

const EventProgressCountdown = ({ progress, endDate }: EventProgressCountdownProps) => {
  return (
    <div className="w-full md:w-64">
      <div className="mb-2 flex justify-between items-center">
        <span className="text-sm text-white/70">Event Progress</span>
        <span className="text-sm font-medium">{progress}%</span>
      </div>
      <Progress 
        value={progress} 
        className="h-2 bg-white/10" 
        indicatorClassName="bg-gradient-to-r from-team-red via-team-green to-team-blue" 
      />
      <div className="mt-3">
        <CountdownTimer targetDate={endDate} variant="compact" />
      </div>
    </div>
  );
};

export default EventProgressCountdown;
