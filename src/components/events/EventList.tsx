
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  status: 'upcoming' | 'ongoing' | 'completed';
}

interface EventListProps {
  events?: Event[];
}

const EventList: React.FC<EventListProps> = ({ events = [] }) => {
  if (events.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">No events scheduled at this time.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {events.map(event => (
        <Card key={event.id} className="glass-morphism border-white/10">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">{event.title}</CardTitle>
              <Badge variant={
                event.status === 'upcoming' ? 'outline' : 
                event.status === 'ongoing' ? 'gold' : 'secondary'
              }>
                {event.status}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-white/70 mb-2">{event.description}</p>
            <p className="text-xs text-white/50">{event.date}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default EventList;
