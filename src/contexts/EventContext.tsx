import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useAuth } from './auth';
import { useToast } from '@/hooks/use-toast';

export interface EventContextType {
  hasJoinedEvent: (eventId: string) => boolean;
  joinEvent: () => Promise<boolean>;
  daysUntilNextMonday: number;
  activeEvents: string[];
  joinedEvents: string[];
}

const EventContext = createContext<EventContextType | null>(null);

export const EventProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [activeEvents, setActiveEvents] = useState<string[]>(['weekly-challenge']);
  const [joinedEvents, setJoinedEvents] = useState<string[]>([]);
  const [daysUntilNextMonday, setDaysUntilNextMonday] = useState(0);

  // Calculate days until next Monday
  useEffect(() => {
    const calculateDaysUntilNextMonday = () => {
      const today = new Date();
      const dayOfWeek = today.getDay(); // 0 is Sunday, 1 is Monday, etc.
      // If today is Monday (1), then it's 7 days until next Monday
      // Otherwise, it's (8 - dayOfWeek) days until next Monday
      const daysUntil = dayOfWeek === 1 ? 7 : 8 - dayOfWeek;
      setDaysUntilNextMonday(daysUntil);
    };

    calculateDaysUntilNextMonday();
    // Update every day
    const interval = setInterval(calculateDaysUntilNextMonday, 24 * 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  // Load joined events from localStorage
  useEffect(() => {
    if (user) {
      const savedEvents = localStorage.getItem(`joinedEvents_${user.id}`);
      if (savedEvents) {
        setJoinedEvents(JSON.parse(savedEvents));
      }
    }
  }, [user]);

  // Save joined events to localStorage when they change
  useEffect(() => {
    if (user && joinedEvents.length > 0) {
      localStorage.setItem(`joinedEvents_${user.id}`, JSON.stringify(joinedEvents));
    }
  }, [joinedEvents, user]);

  const hasJoinedEvent = (eventId: string): boolean => {
    return joinedEvents.includes(eventId);
  };

  const joinEvent = async (): Promise<boolean> => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "You need to be logged in to join events",
        variant: "destructive"
      });
      return false;
    }

    try {
      // Add "weekly-challenge" to joined events
      if (!joinedEvents.includes('weekly-challenge')) {
        setJoinedEvents(prev => [...prev, 'weekly-challenge']);
        
        toast({
          title: "Event Joined",
          description: "You've successfully joined the weekly challenge!",
          variant: "success"
        });
      }
      return true;
    } catch (error) {
      console.error("Error joining event:", error);
      toast({
        title: "Error",
        description: "Failed to join the event",
        variant: "destructive"
      });
      return false;
    }
  };

  return (
    <EventContext.Provider value={{
      hasJoinedEvent,
      joinEvent,
      daysUntilNextMonday,
      activeEvents,
      joinedEvents
    }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEventContext = () => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error('useEventContext must be used within an EventProvider');
  }
  return context;
};
