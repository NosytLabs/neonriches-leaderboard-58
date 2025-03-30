
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, ChevronRight, Info } from 'lucide-react';
import { formatDate } from '@/utils/dates';
import { EventDetails, Event } from '@/types/events';
import EventDetailsModal from './components/EventDetailsModal';
import { events, eventDetails } from './data';

const UpcomingEvents: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventDetails | null>(null);
  const upcomingEvents = events.filter(event => event.status === 'upcoming');

  const handleOpenDetails = (eventId: string) => {
    const details = eventDetails.find(ed => ed.eventId === eventId);
    const event = events.find(e => e.id === eventId);
    
    if (details) {
      setSelectedEvent({
        ...details,
        id: eventId,
        title: event?.title || details.title,
        name: event?.name || details.title,
        description: event?.description || details.description,
        image: event?.image || details.image,
        startDate: event?.startDate || '',
        endDate: event?.endDate || '',
        type: event?.type || 'special',
        status: event?.status || 'upcoming'
      });
    }
  };

  const handleCloseDetails = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold mb-4">Upcoming Events</h2>
      
      {upcomingEvents.length === 0 ? (
        <Card className="glass-morphism border-white/10">
          <CardContent className="pt-6">
            <p className="text-center text-white/70">No upcoming events at the moment.</p>
          </CardContent>
        </Card>
      ) : (
        upcomingEvents.map(event => (
          <Card key={event.id} className="glass-morphism border-white/10 hover:border-white/20 transition-all">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </div>
                <Badge variant="outline" className="bg-purple-500/30 border-purple-500/30 text-white">
                  {event.type.toUpperCase()}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="flex items-center text-sm text-white/70 mb-4">
                <CalendarDays className="mr-2 h-4 w-4" />
                <span>{formatDate(event.startDate)} - {formatDate(event.endDate)}</span>
              </div>
              
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full glass-morphism border-white/10"
                onClick={() => handleOpenDetails(event.id)}
              >
                <Info className="mr-2 h-4 w-4" />
                View Details
                <ChevronRight className="ml-auto h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))
      )}
      
      {selectedEvent && (
        <EventDetailsModal 
          event={selectedEvent}
          onClose={handleCloseDetails}
        />
      )}
    </div>
  );
};

export default UpcomingEvents;
