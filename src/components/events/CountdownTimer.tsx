
import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

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
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference <= 0) {
        setIsActive(false);
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
      
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    };

    setTimeLeft(calculateTimeLeft());
    
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
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
