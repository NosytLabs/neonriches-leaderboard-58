
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

export type EventType = 'poke-party' | 'fire-sale' | 'tournament' | 'auction' | 'team-battle' | 'king-making' | 'none';

export interface EventInfo {
  type: EventType;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
  discount?: number;
  rewards?: any;
  rules?: any;
  participants?: number;
}

interface EventContextType {
  currentEvent: EventInfo | null;
  nextEvent: EventInfo | null;
  setCurrentEvent: (event: EventInfo | null) => void;
  setNextEvent: (event: EventInfo | null) => void;
  isEventActive: (eventType: EventType) => boolean;
  getEventTimeRemaining: () => string;
  eventHistory: EventInfo[];
}

const EventContext = createContext<EventContextType | null>(null);

export const EventProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentEvent, setCurrentEvent] = useState<EventInfo | null>(null);
  const [nextEvent, setNextEvent] = useState<EventInfo | null>(null);
  const [eventHistory, setEventHistory] = useState<EventInfo[]>([]);

  useEffect(() => {
    // Initialize with mock data
    const mockCurrentEvent: EventInfo = {
      type: 'fire-sale',
      name: 'Royal Fire Sale',
      description: 'Limited time discounts on all cosmetic items!',
      startDate: new Date().toISOString(),
      endDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days from now
      isActive: true,
      discount: 25,
    };

    setCurrentEvent(mockCurrentEvent);

    const mockNextEvent: EventInfo = {
      type: 'poke-party',
      name: 'Poke Party Extravaganza',
      description: 'Poke others down the ranks for half the price!',
      startDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days from now
      endDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 days from now
      isActive: false,
    };

    setNextEvent(mockNextEvent);

    // Fetch event history or initialize with mock data
    const mockHistory: EventInfo[] = [
      {
        type: 'team-battle',
        name: 'Team Color War',
        description: 'Teams competed for glory and rewards!',
        startDate: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(), // 10 days ago
        endDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days ago
        isActive: false,
        participants: 156
      },
      {
        type: 'auction',
        name: 'Royal Auction',
        description: 'Exclusive items were auctioned to the highest bidders!',
        startDate: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString(), // 20 days ago
        endDate: new Date(Date.now() - 18 * 24 * 60 * 60 * 1000).toISOString(), // 18 days ago
        isActive: false,
        participants: 78
      }
    ];

    setEventHistory(mockHistory);
  }, []);

  const isEventActive = (eventType: EventType): boolean => {
    if (!currentEvent) return false;
    return currentEvent.type === eventType && currentEvent.isActive;
  };

  const getEventTimeRemaining = (): string => {
    if (!currentEvent) return 'No active event';
    
    const endTime = new Date(currentEvent.endDate).getTime();
    const now = Date.now();
    
    if (now > endTime) return 'Event ended';
    
    const timeRemaining = endTime - now;
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    
    return `${days}d ${hours}h ${minutes}m`;
  };

  return (
    <EventContext.Provider
      value={{
        currentEvent,
        nextEvent,
        setCurrentEvent,
        setNextEvent,
        isEventActive,
        getEventTimeRemaining,
        eventHistory
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

// Export the useEventContext hook
export const useEventContext = () => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error('useEventContext must be used within an EventProvider');
  }
  return context;
};
