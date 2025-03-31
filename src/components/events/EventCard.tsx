
import React from 'react';
import { Calendar, Clock, Users, Trophy } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Event, EventType } from '@/types/events';
import { formatDate } from '@/utils/dateUtils';
import { Image } from '@/components/ui/image';
import { cn } from '@/lib/utils';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

interface EventCardProps {
  event: Event;
  onViewDetails?: () => void;
  onParticipate?: () => void;
  compact?: boolean;
  active?: boolean;
  className?: string;
  isPast?: boolean;
}

const EventCard: React.FC<EventCardProps> = ({
  event,
  onViewDetails,
  onParticipate,
  compact = false,
  active = false,
  className,
  isPast = false
}) => {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: '100px',
    once: true
  });
  
  const isActive = active || isEventActive(event);
  const eventName = event.title || event.name || '';
  const eventImage = event.imageUrl || event.image || '';
  
  // Helper function to check if event is active
  function isEventActive(event: Event): boolean {
    const now = new Date();
    const startDate = new Date(event.startDate);
    const endDate = new Date(event.endDate);
    return now >= startDate && now <= endDate;
  }
  
  return (
    <Card 
      ref={ref}
      className={cn(
        "glass-morphism overflow-hidden border-white/10 transition-all duration-300 hover:border-royal-gold/30",
        isActive && "border-l-royal-gold border-l-2",
        className
      )}
      onClick={onViewDetails}
    >
      {!compact && eventImage && isVisible && (
        <div className="relative h-40 w-full overflow-hidden">
          <Image
            src={eventImage}
            alt={eventName}
            className="w-full h-full object-cover"
          />
          {isActive && !isPast && (
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
            <span className="ml-2">{eventName}</span>
          </h3>
          
          {!compact && (
            <p className="text-white/70 my-2 text-sm line-clamp-2">
              {event.description}
            </p>
          )}
          
          <div className="mt-2 flex items-center gap-4 text-xs text-white/60">
            <div className="flex items-center">
              <Calendar size={12} className="mr-1" />
              <span>{formatDate(event.startDate)}</span>
            </div>
            
            {compact ? null : (
              <div className="flex items-center">
                <Clock size={12} className="mr-1" />
                <span>
                  {isActive && !isPast ? 'Ends' : 'Starts'}: {formatDate(
                    isActive && !isPast ? event.endDate : event.startDate
                  )}
                </span>
              </div>
            )}
          </div>
        </div>
        
        {!isPast && onParticipate && (
          <Button 
            variant="outline" 
            size="sm" 
            className="ml-2 border-royal-gold/30 hover:bg-royal-gold/10"
            onClick={(e) => {
              e.stopPropagation();
              onParticipate();
            }}
          >
            Participate
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

// Helper function to get the appropriate icon based on event type
function getEventIcon(type: EventType) {
  if (type === 'treasure') {
    return <Trophy size={18} className="text-royal-gold" />;
  } else if (type === 'shame') {
    return <Users size={18} className="text-royal-crimson" />;
  } else if (type === 'team') {
    return <Trophy size={18} className="text-royal-navy" />;
  } else {
    return <Calendar size={18} className="text-white/60" />;
  }
}

export default EventCard;
