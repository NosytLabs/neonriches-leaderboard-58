
import React, { useState } from 'react';
import { Dialog } from '@/components/ui/dialog';
import { upcomingEvents } from './data';
import EventDetailsModal from './components/EventDetailsModal';
import EventCard from './EventCard';
import { daysUntil } from '@/utils/dateUtils';

const UpcomingEvents = () => {
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  
  const handleEventClick = (eventId: string) => {
    setSelectedEventId(eventId);
  };
  
  const handleCloseModal = () => {
    setSelectedEventId(null);
  };
  
  // Sort events by start date
  const sortedEvents = [...upcomingEvents].sort((a, b) => {
    return daysUntil(a.startDate) - daysUntil(b.startDate);
  });
  
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold royal-gradient">Upcoming Royal Events</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedEvents.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            onClick={() => handleEventClick(event.id)}
            className="animate-fade-in"
          />
        ))}
        
        {sortedEvents.length === 0 && (
          <div className="col-span-full text-center p-8 glass-morphism border-white/10 rounded-lg">
            <p className="text-white/70">No upcoming events at this time. Check back soon for more royal gatherings!</p>
          </div>
        )}
      </div>
      
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

export default UpcomingEvents;
