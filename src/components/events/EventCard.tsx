
import React from 'react';
import { Calendar, Clock, Users, Trophy } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Event } from '@/types/events';
import { formatDate, isEventActive } from '@/utils/dateUtils';
import OptimizedImage from '@/components/ui/optimized-image';
import { cn } from '@/lib/utils';

interface EventCardProps {
  event: Event;
  onClick?: () => void;
  compact?: boolean;
  active?: boolean;
  className?: string;
}

const EventCard: React.FC<EventCardProps> = ({
  event,
  onClick,
  compact = false,
  active = false,
  className
}) => {
  const isActive = active || isEventActive(event.startDate, event.endDate);
  
  return (
    <Card 
      className={cn(
        "glass-morphism overflow-hidden border-white/10 transition-all duration-300 hover:border-royal-gold/30",
        isActive && "border-l-royal-gold border-l-2",
        className
      )}
      onClick={onClick}
    >
      {!compact && (
        <div className="relative h-40 w-full overflow-hidden">
          <OptimizedImage
            src={event.image}
            alt={event.name}
            className="w-full h-full"
          />
          {isActive && (
            <div className="absolute top-2 right-2">
              <Badge variant="outline" className="bg-royal-gold/90 text-black font-bold">
                Active
              </Badge>
            </div>
          )}
        </div>
      )}
      
      <CardContent className={cn("p-4", compact && "flex items-center")}>
        <div className={compact ? "flex-1" : ""}>
          <h3 className="font-bold text-lg flex items-center">
            {getEventIcon(event.type)}
            <span className="ml-2">{event.name}</span>
          </h3>
          
          {!compact && (
            <p className="text-white/70 my-2 text-sm line-clamp-2">
              {event.description}
            </p>
          )}
          
          <div className="mt-2 flex items-center gap-4 text-xs text-white/60">
            <div className="flex items-center">
              <Calendar size={12} className="mr-1" />
              <span>{formatDate(event.startDate, { month: 'short', day: 'numeric' })}</span>
            </div>
            
            {compact ? null : (
              <div className="flex items-center">
                <Clock size={12} className="mr-1" />
                <span>
                  {isActive ? 'Ends' : 'Starts'}: {formatDate(
                    isActive ? event.endDate : event.startDate, 
                    { month: 'short', day: 'numeric', weekday: undefined }
                  )}
                </span>
              </div>
            )}
          </div>
        </div>
        
        {compact && (
          <Button 
            variant="outline" 
            size="sm" 
            className="ml-2 border-royal-gold/30 hover:bg-royal-gold/10"
            onClick={onClick}
          >
            Details
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

// Helper function to get the appropriate icon based on event type
function getEventIcon(type: EventType) {
  switch (type) {
    case 'treasure':
      return <Trophy size={18} className="text-royal-gold" />;
    case 'shame':
      return <Users size={18} className="text-royal-crimson" />;
    case 'team':
      return <Trophy size={18} className="text-royal-navy" />;
    default:
      return <Calendar size={18} className="text-white/60" />;
  }
}

export default EventCard;
