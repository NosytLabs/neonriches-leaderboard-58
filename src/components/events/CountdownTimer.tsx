
import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import { getTimeLeft } from '@/utils/timeUtils';

interface CountdownTimerProps {
  targetDate: Date;
  variant?: 'default' | 'compact' | 'minimal';
  className?: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ 
  targetDate, 
  variant = 'default',
  className = '' 
}) => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    // Calculate time left on component mount
    setTimeLeft(getTimeLeft(targetDate));
    
    // Update every second
    const timer = setInterval(() => {
      const newTimeLeft = getTimeLeft(targetDate);
      setTimeLeft(newTimeLeft);
      
      // Stop timer when we reach the target date
      if (newTimeLeft.days === 0 && 
          newTimeLeft.hours === 0 && 
          newTimeLeft.minutes === 0 && 
          newTimeLeft.seconds === 0) {
        setIsActive(false);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (variant === 'minimal') {
    return (
      <div className={`flex items-center text-sm text-white/70 ${className}`}>
        <Clock size={16} className="mr-1.5 text-white/50" />
        <span>{timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m left</span>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`flex items-center space-x-1 ${className}`}>
        <Clock size={16} className="mr-1 text-white/50" />
        <div className="flex space-x-1 text-sm">
          <div className="bg-white/10 px-1.5 py-0.5 rounded">
            {timeLeft.days}d
          </div>
          <div className="bg-white/10 px-1.5 py-0.5 rounded">
            {timeLeft.hours}h
          </div>
          <div className="bg-white/10 px-1.5 py-0.5 rounded">
            {timeLeft.minutes}m
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${className}`}>
      <div className="flex items-center space-x-4">
        <div className="text-center">
          <div className="text-2xl font-bold bg-white/10 px-3 py-2 rounded-md">
            {timeLeft.days}
          </div>
          <span className="text-xs text-white/50 mt-1 block">Days</span>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold bg-white/10 px-3 py-2 rounded-md">
            {timeLeft.hours}
          </div>
          <span className="text-xs text-white/50 mt-1 block">Hours</span>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold bg-white/10 px-3 py-2 rounded-md">
            {timeLeft.minutes}
          </div>
          <span className="text-xs text-white/50 mt-1 block">Minutes</span>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold bg-white/10 px-3 py-2 rounded-md">
            {timeLeft.seconds}
          </div>
          <span className="text-xs text-white/50 mt-1 block">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
