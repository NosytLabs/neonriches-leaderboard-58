// Import the necessary dependencies
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Event, EventStatus, EventType } from '@/types/events';

interface EventContextType {
  events: Event[];
  currentEvent: Event | null;
  upcomingEvents: Event[];
  pastEvents: Event[];
  loading: boolean;
  error: string | null;
  startDate: string;
  endDate: string;
  setStartDate: (date: Date | string) => void;
  setEndDate: (date: Date | string) => void;
  createEvent: (event: Omit<Event, 'id'>) => Promise<Event>;
  updateEvent: (id: string, event: Partial<Event>) => Promise<Event>;
  deleteEvent: (id: string) => Promise<boolean>;
  getEventById: (id: string) => Event | null;
  registerForEvent: (eventId: string, userId: string) => Promise<boolean>;
  unregisterFromEvent: (eventId: string, userId: string) => Promise<boolean>;
}

const EventContext = createContext<EventContextType | null>(null);

// Convert Date objects to ISO strings where needed
const handleDateParams = (date: Date | string) => {
  return typeof date === 'object' ? date.toISOString() : date;
};

export const EventProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [currentEvent, setCurrentEvent] = useState<Event | null>(null);
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);
  const [pastEvents, setPastEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [startDate, setStartDateState] = useState<string>(new Date().toISOString());
  const [endDate, setEndDateState] = useState<string>(new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString());

  const setStartDate = (date: Date | string) => {
    const formattedDate = handleDateParams(date);
    setStartDateState(formattedDate);
  };

  const setEndDate = (date: Date | string) => {
    const formattedDate = handleDateParams(date);
    setEndDateState(formattedDate);
  };

  useEffect(() => {
    // Convert Date to string before setting state
    const now = new Date();
    const startDateStr = now.toISOString();
    const endDateStr = new Date(now.getTime() + 86400000).toISOString(); // Add one day
    
    // Fetch events on component mount
    const fetchEvents = async () => {
      try {
        setLoading(true);
        // Mock API call - replace with actual API call
        const response = await fetch('/api/events');
        const data = await response.json();
        setEvents(data);
        
        // Categorize events
        const now = new Date();
        const current = data.find((event: Event) => {
          const start = new Date(event.startDate);
          const end = new Date(event.endDate);
          return start <= now && end >= now;
        }) || null;
        
        const upcoming = data.filter((event: Event) => {
          return new Date(event.startDate) > now;
        });
        
        const past = data.filter((event: Event) => {
          return new Date(event.endDate) < now;
        });
        
        setCurrentEvent(current);
        setUpcomingEvents(upcoming);
        setPastEvents(past);
      } catch (err) {
        setError('Failed to fetch events');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchEvents();
  }, []);

  const createEvent = async (event: Omit<Event, 'id'>): Promise<Event> => {
    try {
      setLoading(true);
      // Mock API call - replace with actual API call
      const response = await fetch('/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(event),
      });
      
      if (!response.ok) {
        throw new Error('Failed to create event');
      }
      
      const newEvent = await response.json();
      setEvents(prev => [...prev, newEvent]);
      
      // Update categorized events
      const now = new Date();
      if (new Date(newEvent.startDate) <= now && new Date(newEvent.endDate) >= now) {
        setCurrentEvent(newEvent);
      } else if (new Date(newEvent.startDate) > now) {
        setUpcomingEvents(prev => [...prev, newEvent]);
      }
      
      return newEvent;
    } catch (err) {
      setError('Failed to create event');
      console.error(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateEvent = async (id: string, eventUpdate: Partial<Event>): Promise<Event> => {
    try {
      setLoading(true);
      // Mock API call - replace with actual API call
      const response = await fetch(`/api/events/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventUpdate),
      });
      
      if (!response.ok) {
        throw new Error('Failed to update event');
      }
      
      const updatedEvent = await response.json();
      
      // Update events state
      setEvents(prev => prev.map(event => event.id === id ? updatedEvent : event));
      
      // Update categorized events
      const now = new Date();
      if (new Date(updatedEvent.startDate) <= now && new Date(updatedEvent.endDate) >= now) {
        setCurrentEvent(updatedEvent);
        setUpcomingEvents(prev => prev.filter(event => event.id !== id));
        setPastEvents(prev => prev.filter(event => event.id !== id));
      } else if (new Date(updatedEvent.startDate) > now) {
        if (currentEvent?.id === id) setCurrentEvent(null);
        setUpcomingEvents(prev => {
          const exists = prev.some(event => event.id === id);
          if (exists) {
            return prev.map(event => event.id === id ? updatedEvent : event);
          } else {
            return [...prev, updatedEvent];
          }
        });
        setPastEvents(prev => prev.filter(event => event.id !== id));
      } else {
        if (currentEvent?.id === id) setCurrentEvent(null);
        setPastEvents(prev => {
          const exists = prev.some(event => event.id === id);
          if (exists) {
            return prev.map(event => event.id === id ? updatedEvent : event);
          } else {
            return [...prev, updatedEvent];
          }
        });
        setUpcomingEvents(prev => prev.filter(event => event.id !== id));
      }
      
      return updatedEvent;
    } catch (err) {
      setError('Failed to update event');
      console.error(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteEvent = async (id: string): Promise<boolean> => {
    try {
      setLoading(true);
      // Mock API call - replace with actual API call
      const response = await fetch(`/api/events/${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete event');
      }
      
      // Update events state
      setEvents(prev => prev.filter(event => event.id !== id));
      
      // Update categorized events
      if (currentEvent?.id === id) setCurrentEvent(null);
      setUpcomingEvents(prev => prev.filter(event => event.id !== id));
      setPastEvents(prev => prev.filter(event => event.id !== id));
      
      return true;
    } catch (err) {
      setError('Failed to delete event');
      console.error(err);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const getEventById = (id: string): Event | null => {
    return events.find(event => event.id === id) || null;
  };

  const registerForEvent = async (eventId: string, userId: string): Promise<boolean> => {
    try {
      setLoading(true);
      // Mock API call - replace with actual API call
      const response = await fetch(`/api/events/${eventId}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to register for event');
      }
      
      // Update event with new participant
      const updatedEvent = await response.json();
      setEvents(prev => prev.map(event => event.id === eventId ? updatedEvent : event));
      
      // Update categorized events
      const now = new Date();
      if (new Date(updatedEvent.startDate) <= now && new Date(updatedEvent.endDate) >= now) {
        setCurrentEvent(updatedEvent);
      } else if (new Date(updatedEvent.startDate) > now) {
        setUpcomingEvents(prev => prev.map(event => event.id === eventId ? updatedEvent : event));
      } else {
        setPastEvents(prev => prev.map(event => event.id === eventId ? updatedEvent : event));
      }
      
      return true;
    } catch (err) {
      setError('Failed to register for event');
      console.error(err);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const unregisterFromEvent = async (eventId: string, userId: string): Promise<boolean> => {
    try {
      setLoading(true);
      // Mock API call - replace with actual API call
      const response = await fetch(`/api/events/${eventId}/unregister`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to unregister from event');
      }
      
      // Update event with removed participant
      const updatedEvent = await response.json();
      setEvents(prev => prev.map(event => event.id === eventId ? updatedEvent : event));
      
      // Update categorized events
      const now = new Date();
      if (new Date(updatedEvent.startDate) <= now && new Date(updatedEvent.endDate) >= now) {
        setCurrentEvent(updatedEvent);
      } else if (new Date(updatedEvent.startDate) > now) {
        setUpcomingEvents(prev => prev.map(event => event.id === eventId ? updatedEvent : event));
      } else {
        setPastEvents(prev => prev.map(event => event.id === eventId ? updatedEvent : event));
      }
      
      return true;
    } catch (err) {
      setError('Failed to unregister from event');
      console.error(err);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return (
    <EventContext.Provider
      value={{
        events,
        currentEvent,
        upcomingEvents,
        pastEvents,
        loading,
        error,
        startDate,
        endDate,
        setStartDate,
        setEndDate,
        createEvent,
        updateEvent,
        deleteEvent,
        getEventById,
        registerForEvent,
        unregisterFromEvent,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

export const useEvents = () => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error('useEvents must be used within an EventProvider');
  }
  return context;
};
