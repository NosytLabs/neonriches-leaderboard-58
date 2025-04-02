
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shell } from '@/components/ui/shell'; // Fixed lowercase import
import EventList from '@/components/events/EventList';
import { useEvents } from '@/hooks/useEvents';

const Events = () => {
  const navigate = useNavigate();
  const { events, isLoading, error } = useEvents();

  return (
    <Shell className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Upcoming Events</h1>
      
      {error ? (
        <div className="glass-morphism p-8 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-4 text-red-500">Error Loading Events</h2>
          <p className="text-lg text-muted-foreground mb-6">
            There was a problem loading event data. Please try again later.
          </p>
          <Button 
            onClick={() => navigate('/')}
            className="px-4 py-2 bg-royal-gold text-black rounded hover:bg-royal-gold/80 transition"
          >
            Return to Dashboard
          </Button>
        </div>
      ) : events && events.length > 0 ? (
        <div className="space-y-6">
          <EventList events={events} isLoading={isLoading} />
          <div className="flex justify-center mt-4">
            <Button 
              onClick={() => navigate('/')}
              variant="outline"
              className="mt-4"
            >
              Return to Dashboard
            </Button>
          </div>
        </div>
      ) : (
        <div className="glass-morphism p-8 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Stay tuned for exciting events in the kingdom! Royal gatherings, spending competitions, and exclusive opportunities are in the works.
          </p>
          <Button 
            onClick={() => navigate('/')}
            className="px-4 py-2 bg-royal-gold text-black rounded hover:bg-royal-gold/80 transition"
          >
            Return to Dashboard
          </Button>
        </div>
      )}
    </Shell>
  );
};

export default Events;
