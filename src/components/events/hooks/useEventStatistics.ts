
import { useState, useEffect } from 'react';
import { eventStats, currentEvent } from '../data';
import { EventStats } from '@/types/events';

export function useEventStatistics() {
  const [stats, setStats] = useState<EventStats>(eventStats);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  
  // In a real app, this would fetch from an API
  useEffect(() => {
    // Simulate API loading
    setIsLoading(true);
    
    // Simulate API call delay
    const timer = setTimeout(() => {
      try {
        // In a real app, this would be an API call
        setStats(eventStats);
        setIsLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to load event statistics'));
        setIsLoading(false);
      }
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  return {
    stats,
    currentEvent,
    isLoading,
    error
  };
}
