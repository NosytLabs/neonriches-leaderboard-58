
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Event } from '@/types/events';
import { Button } from '@/components/ui/button';
import { Calendar, ChevronRight } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import EventDetailsModal from './components/EventDetailsModal';
import { eventsData, eventDetailsData } from './data';

interface UpcomingEventsProps {
  maxEvents?: number;
}

const UpcomingEvents: React.FC<UpcomingEventsProps> = ({ maxEvents = 3 }) => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  
  // Filter to show only upcoming events
  const upcomingEvents = eventsData
    .filter(event => event.status === 'upcoming' || event.status === 'active')
    .slice(0, maxEvents);
  
  const handleViewDetails = (event: Event) => {
    setSelectedEvent(event);
    setIsDetailsModalOpen(true);
  };
  
  const handleCloseModal = () => {
    setIsDetailsModalOpen(false);
    setSelectedEvent(null);
  };
  
  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'firesale': return 'bg-red-500/20 text-red-400 border-red-500/20';
      case 'tournament': return 'bg-blue-500/20 text-blue-400 border-blue-500/20';
      case 'challenge': return 'bg-green-500/20 text-green-400 border-green-500/20';
      case 'seasonal': return 'bg-amber-500/20 text-amber-400 border-amber-500/20';
      case 'special': return 'bg-purple-500/20 text-purple-400 border-purple-500/20';
      case 'treasure': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/20';
      case 'shame': return 'bg-pink-500/20 text-pink-400 border-pink-500/20';
      case 'team': return 'bg-sky-500/20 text-sky-400 border-sky-500/20';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/20';
    }
  };
  
  return (
    <Card className="border-royal-gold/20 glass-morphism">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-royal-gold" />
          Upcoming Events
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        {upcomingEvents.length === 0 ? (
          <div className="text-center py-8 text-white/60">
            No upcoming events at this time. Check back soon!
          </div>
        ) : (
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <div 
                key={event.id} 
                className="flex items-center justify-between p-3 rounded-lg bg-black/20 hover:bg-black/30 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="hidden sm:block w-12 h-12 rounded overflow-hidden">
                    <img 
                      src={event.image || '/event-placeholder.jpg'} 
                      alt={event.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">{event.title}</h4>
                    <div className="flex flex-wrap gap-2 items-center mt-1">
                      <span className={cn("px-2 py-0.5 rounded-full text-xs", getEventTypeColor(event.type))}>
                        {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                      </span>
                      <span className="text-xs text-white/60">
                        {format(new Date(event.startDate), 'MMM d, yyyy')}
                      </span>
                    </div>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-royal-gold hover:text-royal-gold/80"
                  onClick={() => handleViewDetails(event)}
                >
                  <span className="sr-only sm:not-sr-only mr-1 text-sm">View</span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        )}
      </CardContent>
      
      {selectedEvent && (
        <EventDetailsModal
          isOpen={isDetailsModalOpen}
          onClose={handleCloseModal}
          event={selectedEvent}
        />
      )}
    </Card>
  );
};

export default UpcomingEvents;
