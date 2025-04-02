
import { useState, useEffect } from 'react';

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  status: 'upcoming' | 'ongoing' | 'completed';
}

export function useEvents() {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setIsLoading(true);
        // In a real application, this would be an API call
        // Mock data for now
        const mockEvents: Event[] = [
          {
            id: '1',
            title: 'Royal Tournament',
            description: 'Compete with other nobles for glory and prizes.',
            date: 'Coming Soon',
            status: 'upcoming'
          },
          {
            id: '2',
            title: 'Kingdom Festival',
            description: 'Celebrate with special rewards and activities.',
            date: 'Coming Soon',
            status: 'upcoming'
          }
        ];
        
        // Simulate API delay
        setTimeout(() => {
          setEvents(mockEvents);
          setIsLoading(false);
        }, 500);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch events'));
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return {
    events,
    isLoading,
    error
  };
}
