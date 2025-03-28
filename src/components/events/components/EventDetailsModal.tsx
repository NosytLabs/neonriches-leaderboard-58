
import React from 'react';
import { 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogDescription
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Users, Trophy, Sparkles, ShieldCheck } from 'lucide-react';
import { eventDetailsData } from '../data';
import CountdownTimer from '../CountdownTimer';
import { formatDate, isEventActive } from '@/utils/dateUtils';
import OptimizedImage from '@/components/ui/optimized-image';
import { EventDetails } from '@/types/events';

interface EventDetailsModalProps {
  eventId: string;
  onClose: () => void;
}

const EventDetailsModal: React.FC<EventDetailsModalProps> = ({ 
  eventId, 
  onClose 
}) => {
  const eventDetails = eventDetailsData[eventId];
  
  if (!eventDetails) {
    return (
      <DialogContent className="glass-morphism border-white/10 sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Event Not Found</DialogTitle>
          <DialogDescription>
            The event details could not be found.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    );
  }
  
  const isActive = isEventActive(eventDetails.startDate, eventDetails.endDate);
  
  return (
    <DialogContent className="glass-morphism border-white/10 sm:max-w-3xl">
      <DialogHeader>
        <DialogTitle className="text-2xl royal-gradient flex items-center">
          {getEventTypeIcon(eventDetails.type)}
          <span className="ml-2">{eventDetails.name}</span>
        </DialogTitle>
      </DialogHeader>
      
      <ScrollArea className="max-h-[70vh]">
        <div className="relative h-52 w-full mb-6 overflow-hidden rounded-md">
          <OptimizedImage 
            src={eventDetails.image}
            alt={eventDetails.name}
            className="w-full h-full object-cover"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-4 w-full">
              <div className="flex justify-between items-end">
                <div>
                  <Badge 
                    variant="outline" 
                    className={isActive 
                      ? "bg-royal-gold/20 border-royal-gold text-royal-gold" 
                      : "bg-white/10 border-white/20"
                    }
                  >
                    {isActive ? "Active Now" : "Upcoming Event"}
                  </Badge>
                </div>
                
                <div>
                  <CountdownTimer 
                    targetDate={isActive ? eventDetails.endDate : eventDetails.startDate} 
                    variant="compact" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-bold royal-gradient text-lg mb-2">About the Event</h3>
            <p className="text-white/80">{eventDetails.description}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="glass-morphism border-white/10 p-4 rounded-lg">
              <h4 className="font-medium mb-3 flex items-center">
                <Calendar className="h-4 w-4 mr-2 text-royal-gold" />
                Event Schedule
              </h4>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-white/70">Starts:</span>
                  <span>{formatDate(eventDetails.startDate, { weekday: 'short', month: 'short', day: 'numeric' })}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Ends:</span>
                  <span>{formatDate(eventDetails.endDate, { weekday: 'short', month: 'short', day: 'numeric' })}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Duration:</span>
                  <span>{getDurationText(eventDetails)}</span>
                </div>
              </div>
            </div>
            
            <div className="glass-morphism border-white/10 p-4 rounded-lg">
              <h4 className="font-medium mb-3 flex items-center">
                <Trophy className="h-4 w-4 mr-2 text-royal-gold" />
                Rewards
              </h4>
              
              <div className="flex flex-wrap gap-2">
                {eventDetails.rewardTypes.map((reward, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="bg-royal-gold/10 border-royal-gold/30"
                  >
                    {reward}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="glass-morphism border-white/10 p-4 rounded-lg">
              <h4 className="font-medium mb-3 flex items-center">
                <Users className="h-4 w-4 mr-2 text-royal-purple" />
                Eligibility
              </h4>
              <p className="text-white/80">{eventDetails.eligibility}</p>
            </div>
            
            <div className="glass-morphism border-white/10 p-4 rounded-lg">
              <h4 className="font-medium mb-3 flex items-center">
                <ShieldCheck className="h-4 w-4 mr-2 text-royal-navy" />
                Special Rules
              </h4>
              <ul className="space-y-1 text-sm text-white/80">
                {eventDetails.specialRules.map((rule, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-royal-gold mr-2">•</span> 
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="glass-morphism border-white/10 p-4 rounded-lg">
            <h4 className="font-medium mb-3 flex items-center">
              <Sparkles className="h-4 w-4 mr-2 text-royal-gold" />
              Participation Requirements
            </h4>
            <ul className="space-y-1 text-sm text-white/80">
              {eventDetails.participationRequirements.map((req, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-royal-gold mr-2">•</span> 
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ScrollArea>
    </DialogContent>
  );
};

// Helper function to get event type icon
function getEventTypeIcon(type: string) {
  switch (type) {
    case 'treasure':
      return <Trophy className="h-6 w-6 text-royal-gold" />;
    case 'shame':
      return <Users className="h-6 w-6 text-royal-crimson" />;
    case 'team':
      return <Trophy className="h-6 w-6 text-royal-navy" />;
    default:
      return <Calendar className="h-6 w-6 text-royal-gold" />;
  }
}

// Helper function to calculate event duration
function getDurationText(event: EventDetails): string {
  const startDate = new Date(event.startDate);
  const endDate = new Date(event.endDate);
  
  const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 1) return "1 day";
  if (diffDays < 7) return `${diffDays} days`;
  if (diffDays === 7) return "1 week";
  
  const weeks = Math.floor(diffDays / 7);
  const remainingDays = diffDays % 7;
  
  if (remainingDays === 0) return `${weeks} week${weeks > 1 ? 's' : ''}`;
  return `${weeks} week${weeks > 1 ? 's' : ''} and ${remainingDays} day${remainingDays > 1 ? 's' : ''}`;
}

export default EventDetailsModal;
