
import { useState, useEffect } from 'react';
import { EventStats } from '@/types/events';
import { eventStatsData } from '../data';

function useEventStatistics(eventId: string) {
  const [stats, setStats] = useState<EventStats>({
    id: '',
    eventId: '',
    participantsCount: 0,
    totalSpent: 0,
    totalPrizes: 0,
    averageSpent: 0,
    prizePool: 0,
    totalPokes: 0,
    mostPoked: []
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchEventStats = async () => {
      setIsLoading(true);
      try {
        // In a real application, this would be an API call
        // For this demo, we'll use the mock data
        await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
        
        // Simulate API response with mock data
        if (eventId === eventStatsData.eventId) {
          setStats(eventStatsData);
        } else {
          // Create empty stats object for events without data
          setStats({
            id: `stats-${eventId}`,
            eventId,
            participantsCount: 0,
            totalSpent: 0,
            totalPrizes: 0,
            averageSpent: 0,
            prizePool: 0,
            totalPokes: 0,
            mostPoked: []
          });
        }
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch event statistics'));
      } finally {
        setIsLoading(false);
      }
    };

    if (eventId) {
      fetchEventStats();
    }
  }, [eventId]);

  return { stats, isLoading, error };
}

export default useEventStatistics;
