
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Event } from '@/types/events';
import { formatDate } from '@/utils/formatters';
import OptimizedImage from '@/components/ui/optimized-image';

interface EventHeaderProps {
  event: Event;
}

const EventHeader: React.FC<EventHeaderProps> = ({ event }) => {
  return (
    <Card className="bg-card/50 border-primary/10 overflow-hidden relative">
      <div className="absolute inset-0 blur-sm opacity-30 z-0">
        <OptimizedImage
          src={event.imageUrl || '/assets/events/default-banner.jpg'}
          alt={event.title}
          className="w-full h-full object-cover"
          placeholderColor="#111827"
        />
      </div>
      <CardHeader className="relative z-10">
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="mb-2">
            {event.type}
          </Badge>
          <Badge 
            variant={event.status === 'active' ? 'default' : 'outline'} 
            className={event.status === 'active' ? 'bg-green-500' : ''}
          >
            {event.status}
          </Badge>
        </div>
        <CardTitle className="text-2xl">{event.title}</CardTitle>
        <CardDescription>
          {formatDate(event.startDate)} - {formatDate(event.endDate)}
        </CardDescription>
        <p className="mt-2 text-sm text-card-foreground/80">{event.description}</p>
      </CardHeader>
    </Card>
  );
};

export default EventHeader;
