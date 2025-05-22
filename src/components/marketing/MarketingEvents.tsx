
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Users, Award, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { MarketingEvent } from '@/types/marketing';

interface MarketingEventsProps {
  events: MarketingEvent[];
}

const MarketingEvents: React.FC<MarketingEventsProps> = ({ events }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium">Upcoming Marketing Events</h3>
      
      <div className="grid grid-cols-1 gap-4">
        {events.map((event) => (
          <Card key={event.id} className="overflow-hidden bg-black/20 border-white/10">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                {event.imageUrl && (
                  <div className="md:w-1/4">
                    <div 
                      className="h-48 md:h-full bg-cover bg-center" 
                      style={{ backgroundImage: `url(${event.imageUrl})` }}
                    />
                  </div>
                )}
                
                <div className="p-4 flex-1">
                  <div className="flex flex-wrap gap-2 mb-2">
                    <Badge variant="outline" className="bg-purple-900/30 text-purple-300 border-purple-500/30">
                      {event.type}
                    </Badge>
                    
                    <Badge variant="outline" className="bg-blue-900/30 text-blue-300 border-blue-500/30">
                      <Users className="h-3 w-3 mr-1" />
                      {event.participants} Participants
                    </Badge>
                  </div>
                  
                  <h4 className="text-lg font-semibold mb-2">{event.title}</h4>
                  <p className="text-white/70 text-sm mb-4">{event.description}</p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-white/60 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(event.startDate).toLocaleDateString()} - {new Date(event.endDate).toLocaleDateString()}
                    </div>
                    
                    {event.rewards && (
                      <div className="flex items-center">
                        <Award className="h-4 w-4 mr-1" />
                        {event.rewards}
                      </div>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm">Register</Button>
                    <Button variant="outline" size="sm">Learn More</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="flex justify-end">
        <Button variant="link" className="text-royal-gold">
          <Calendar className="h-4 w-4 mr-2" />
          View All Events
        </Button>
      </div>
    </div>
  );
};

export default MarketingEvents;
