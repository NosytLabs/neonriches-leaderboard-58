
import React, { useState } from 'react';
import { Dialog } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { upcomingEvents, currentEvent } from '@/components/events/data';
import EventCard from '@/components/events/EventCard';
import EventStats from '@/components/events/EventStats';
import EventDetailsModal from '@/components/events/components/EventDetailsModal';
import { useEventStatistics } from '@/components/events/hooks/useEventStatistics';

const Events: React.FC = () => {
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const { stats, isLoading } = useEventStatistics();
  
  const handleEventClick = (eventId: string) => {
    setSelectedEventId(eventId);
  };
  
  const handleCloseModal = () => {
    setSelectedEventId(null);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center royal-gradient">
        Royal Events Calendar
      </h1>
      
      <Tabs defaultValue="current" className="w-full">
        <TabsList className="glass-morphism border-white/10 w-full mb-6">
          <TabsTrigger value="current" className="flex-1">Current Event</TabsTrigger>
          <TabsTrigger value="upcoming" className="flex-1">Upcoming Events</TabsTrigger>
          <TabsTrigger value="past" className="flex-1">Past Events</TabsTrigger>
        </TabsList>
        
        <TabsContent value="current" className="animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <EventCard
                event={currentEvent}
                onClick={() => handleEventClick(currentEvent.id)}
                active={true}
              />
              
              <div className="mt-6 glass-morphism border-white/10 p-4 rounded-lg">
                <h2 className="text-xl font-bold mb-4">Event Description</h2>
                <p className="text-white/80">
                  Join the Royal Treasure Hunt and embark on a quest to find hidden treasures throughout the kingdom! 
                  Solve riddles, follow clues, and discover valuable artifacts to earn exclusive rewards and climb the ranks.
                </p>
                
                <div className="mt-4 flex justify-end">
                  <button 
                    className="text-royal-gold hover:underline flex items-center"
                    onClick={() => handleEventClick(currentEvent.id)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
            
            <div>
              <EventStats />
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="upcoming" className="animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onClick={() => handleEventClick(event.id)}
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="past" className="animate-fade-in">
          <div className="glass-morphism border-white/10 p-8 text-center rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Past Royal Events</h2>
            <p className="text-white/70">
              The archives of past events are currently being organized by the royal historians.
              Check back soon to view the history of our magnificent gatherings.
            </p>
          </div>
        </TabsContent>
      </Tabs>
      
      <Dialog open={!!selectedEventId} onOpenChange={() => setSelectedEventId(null)}>
        {selectedEventId && (
          <EventDetailsModal 
            eventId={selectedEventId} 
            onClose={handleCloseModal} 
          />
        )}
      </Dialog>
    </div>
  );
};

export default Events;
