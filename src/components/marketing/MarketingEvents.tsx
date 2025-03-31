
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, ArrowUpRight, Award, Users, Clock } from 'lucide-react';
import { MarketingEvent, MarketingEventsProps } from '@/types/marketing';
import { formatDate } from '@/utils/formatters';

const MarketingEvents: React.FC<MarketingEventsProps> = ({ events }) => {
  if (!events || events.length === 0) {
    return (
      <div className="text-center py-8">
        <Calendar className="h-12 w-12 mx-auto text-gray-400 mb-4" />
        <h3 className="text-lg font-semibold mb-2">No Marketing Events</h3>
        <p className="text-white/60">There are no active marketing events at this time.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {events.map((event) => (
        <Card key={event.id} className="glass-morphism border-white/10">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              {event.title}
              <Badge variant="secondary">{event.type}</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-white/70">{event.description}</p>
            <div className="flex items-center space-x-2 mt-2">
              <Calendar className="h-4 w-4 text-white/60" />
              <span className="text-xs text-white/60">
                {formatDate(event.startDate)} - {formatDate(event.endDate)}
              </span>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <Users className="h-4 w-4 text-white/60" />
              <span className="text-xs text-white/60">
                {event.participants} Participants
              </span>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="ghost">
              <ArrowUpRight className="h-4 w-4 mr-2" />
              Learn More
            </Button>
            <Badge variant="outline">
              <Award className="h-4 w-4 mr-2" />
              {event.rewards}
            </Badge>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default MarketingEvents;
