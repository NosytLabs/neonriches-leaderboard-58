import React, { createContext, useContext, useState, useEffect } from 'react';
import { getWeeklyDiscountedAction, getWeeklyDiscountPercentage, isFireSaleMonth, getFireSaleDiscountPercentage, getFireSaleFeaturedCategories } from '@/components/events/utils/shameUtils';
import { getDaysUntilEndOfMonth, getNextMondayDate } from '@/utils/dateUtils';
import { ShameAction } from '@/components/events/hooks/useShameEffect';

interface EventContextType {
  currentDiscountedAction: ShameAction;
  discountPercentage: number;
  isFireSaleActive: boolean;
  fireSaleDiscount: number;
  fireSaleFeaturedCategories: string[];
  daysUntilNextMonday: number;
  daysRemainingInFireSale: number;
  nextMondayDate: string;
  refreshEventData: () => void;
  joinEvent: () => Promise<boolean>;
  hasJoinedEvent: (eventId: string) => boolean;
}

const EventContext = createContext<EventContextType | undefined>(undefined);

export const EventProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentDiscountedAction, setCurrentDiscountedAction] = useState<ShameAction>(getWeeklyDiscountedAction());
  const [discountPercentage, setDiscountPercentage] = useState<number>(getWeeklyDiscountPercentage(currentDiscountedAction));
  const [isFireSaleActive, setIsFireSaleActive] = useState<boolean>(isFireSaleMonth());
  const [fireSaleDiscount, setFireSaleDiscount] = useState<number>(getFireSaleDiscountPercentage());
  const [fireSaleFeaturedCategories, setFireSaleFeaturedCategories] = useState<string[]>(getFireSaleFeaturedCategories());
  const [daysUntilNextMonday, setDaysUntilNextMonday] = useState<number>(0);
  const [daysRemainingInFireSale, setDaysRemainingInFireSale] = useState<number>(getDaysUntilEndOfMonth());
  const [nextMondayDate, setNextMondayDate] = useState<string>(getNextMondayDate());
  const [joinedEvents, setJoinedEvents] = useState<string[]>([]);

  const joinEvent = async () => {
    if (!currentUser || !currentEvent) return false;
    
    try {
      // In a real app, you would make an API call to join the event
      console.log(`User ${currentUser.username} is joining event: ${currentEvent.name}`);
      
      // For demo, we'll simulate a successful join
      setJoinedEvents([...joinedEvents, currentEvent.id]);
      
      // Update localStorage
      localStorage.setItem(`joinedEvents_${currentUser.id}`, JSON.stringify([...joinedEvents, currentEvent.id]));
      
      return true;
    } catch (error) {
      console.error("Error joining event:", error);
      return false;
    }
  };

  const hasJoinedEvent = (eventId: string) => {
    if (!joinedEvents) return false;
    return joinedEvents.includes(eventId);
  };

  const calculateDaysUntilNextMonday = (): number => {
    const today = new Date();
    const day = today.getDay(); // 0 is Sunday, 1 is Monday
    return day === 1 ? 7 : (8 - day) % 7; // If today is Monday, get next Monday
  };

  const refreshEventData = () => {
    const action = getWeeklyDiscountedAction();
    setCurrentDiscountedAction(action);
    setDiscountPercentage(getWeeklyDiscountPercentage(action));
    setIsFireSaleActive(isFireSaleMonth());
    setFireSaleDiscount(getFireSaleDiscountPercentage());
    setFireSaleFeaturedCategories(getFireSaleFeaturedCategories());
    setDaysUntilNextMonday(calculateDaysUntilNextMonday());
    setDaysRemainingInFireSale(getDaysUntilEndOfMonth());
    setNextMondayDate(getNextMondayDate());
  };

  useEffect(() => {
    refreshEventData();
    setDaysUntilNextMonday(calculateDaysUntilNextMonday());
    
    // Refresh data at midnight
    const intervalId = setInterval(() => {
      const now = new Date();
      if (now.getHours() === 0 && now.getMinutes() === 0) {
        refreshEventData();
      }
    }, 60000); // Check every minute
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <EventContext.Provider
      value={{
        currentDiscountedAction,
        discountPercentage,
        isFireSaleActive,
        fireSaleDiscount,
        fireSaleFeaturedCategories,
        daysUntilNextMonday,
        daysRemainingInFireSale,
        nextMondayDate,
        refreshEventData,
        joinEvent,
        hasJoinedEvent
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

export const useEventContext = () => {
  const context = useContext(EventContext);
  
  if (context === undefined) {
    throw new Error('useEventContext must be used within an EventProvider');
  }
  
  return context;
};
