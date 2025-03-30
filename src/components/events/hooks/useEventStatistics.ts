
import { useState, useEffect } from 'react';
import { EventStats } from '@/types/events';
import { eventStats } from '../data';

/**
 * Custom hook to fetch and manage event statistics
 * @param eventId The ID of the event to fetch statistics for
 */
export const useEventStatistics = (eventId: string) => {
  const [stats, setStats] = useState<EventStats | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEventStats = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // In a real app, this would be an API call
        // For demo purposes, we're using mock data
        const mockStats = eventStats[eventId];
        
        if (mockStats) {
          // Simulate network delay
          setTimeout(() => {
            setStats(mockStats);
            setIsLoading(false);
          }, 500);
        } else {
          setError(`Stats not found for event ${eventId}`);
          setIsLoading(false);
        }
      } catch (err) {
        setError('Failed to load event statistics');
        setIsLoading(false);
        console.error('Error fetching event stats:', err);
      }
    };

    if (eventId) {
      fetchEventStats();
    }
  }, [eventId]);

  return { stats, isLoading, error };
};

export default useEventStatistics;
