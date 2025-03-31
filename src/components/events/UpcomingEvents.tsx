
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from 'lucide-react';
import { EventDetails } from '@/types/events';

interface UpcomingEventsProps {
  events: EventDetails[];
  onSelectEvent?: (event: EventDetails) => void;
}

const UpcomingEvents: React.FC<UpcomingEventsProps> = ({ events, onSelectEvent }) => {
  // Sort events by start date
  const sortedEvents = [...events].sort((a, b) => 
    new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
  );

  // Only show upcoming events (events that have not ended)
  const upcomingEvents = sortedEvents.filter(event => 
    new Date(event.endDate) > new Date()
  );

  // Show at most 3 events
  const displayEvents = upcomingEvents.slice(0, 3);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center text-xl">
          <Calendar className="h-5 w-5 mr-2" />
          Upcoming Events
        </CardTitle>
      </CardHeader>
      <CardContent>
        {displayEvents.length === 0 ? (
          <div className="text-center py-6 text-gray-400">
            No upcoming events at this time. Check back soon!
          </div>
        ) : (
          <div className="space-y-4">
            {displayEvents.map((event) => {
              // Format dates
              const startDate = new Date(event.startDate).toLocaleDateString();
              const endDate = new Date(event.endDate).toLocaleDateString();
              
              // Find the event detail (compatible with old pattern)
              const findEventDetail = (searchId: string) => {
                return events.find(detail => detail.id === searchId);
              };
              
              return (
                <div 
                  key={event.id}
                  className="border border-gray-700 rounded-lg p-4 hover:bg-black/20 cursor-pointer transition-colors"
                  onClick={() => onSelectEvent && onSelectEvent(event)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg">{event.name}</h3>
                    <span className={`
                      px-2 py-1 text-xs rounded-full
                      ${event.status === 'upcoming' ? 'bg-blue-900 text-blue-200' : ''}
                      ${event.status === 'active' ? 'bg-green-900 text-green-200' : ''}
                      ${event.status === 'ended' ? 'bg-gray-700 text-gray-300' : ''}
                      ${event.status === 'cancelled' ? 'bg-red-900 text-red-200' : ''}
                    `}>
                      {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-400 mb-2">
                    {startDate === endDate 
                      ? `${startDate}` 
                      : `${startDate} - ${endDate}`
                    }
                  </p>
                  
                  <p className="text-sm text-gray-300 line-clamp-2">
                    {event.description}
                  </p>
                  
                  {event.rewards && event.rewards.length > 0 && (
                    <div className="mt-2">
                      <p className="text-xs font-medium text-gray-400">Rewards:</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {event.rewards.map((reward, index) => (
                          <span key={index} className="text-xs bg-black/40 border border-gray-700 px-2 py-0.5 rounded-full">
                            {reward}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
            
            {upcomingEvents.length > 3 && (
              <div className="text-center">
                <button className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
                  View All Events ({upcomingEvents.length})
                </button>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default UpcomingEvents;
