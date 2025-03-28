
import React from 'react';
import { DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Check, Calendar, Info, ScrollText, Shield } from 'lucide-react';
import { eventDetailsData } from '../data';
import { formatDate } from '@/utils/dateUtils';
import OptimizedImage from '@/components/ui/optimized-image';

export interface EventDetailsModalProps {
  eventId: string;
  onClose?: () => void;
}

const EventDetailsModal: React.FC<EventDetailsModalProps> = ({ eventId, onClose }) => {
  const eventDetails = eventDetailsData[eventId];
  
  if (!eventDetails) {
    return (
      <DialogContent className="glass-morphism border-white/10">
        <DialogHeader>
          <DialogTitle>Event Not Found</DialogTitle>
          <DialogDescription>
            Sorry, we couldn't find details for this event.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={onClose}>Close</Button>
        </DialogFooter>
      </DialogContent>
    );
  }

  return (
    <DialogContent className="glass-morphism border-white/10 max-w-3xl min-h-[50vh] max-h-[85vh]">
      <DialogHeader>
        <OptimizedImage
          src={eventDetails.image}
          alt={eventDetails.name}
          className="w-full h-40 object-cover rounded-t-lg -mt-6 -mx-6"
          imgClassName="object-cover"
        />
        <div className="pt-4">
          <DialogTitle className="text-2xl font-royal">{eventDetails.name}</DialogTitle>
          <DialogDescription className="text-white/70">
            {eventDetails.description}
          </DialogDescription>
        </div>
      </DialogHeader>
      
      <ScrollArea className="pr-4 max-h-[50vh]">
        <div className="space-y-6">
          <div className="flex flex-wrap gap-4">
            <InfoCard
              title="Event Dates"
              icon={<Calendar className="h-5 w-5 text-royal-gold" />}
              content={
                <div className="space-y-1">
                  <p><span className="text-white/60">Starts:</span> {formatDate(eventDetails.startDate)}</p>
                  <p><span className="text-white/60">Ends:</span> {formatDate(eventDetails.endDate)}</p>
                </div>
              }
            />
            
            <InfoCard
              title="Rewards"
              icon={<Info className="h-5 w-5 text-royal-navy" />}
              content={
                <div className="flex flex-wrap gap-2">
                  {eventDetails.rewardTypes.map((reward, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-1 bg-white/5 rounded text-xs font-medium"
                    >
                      {reward}
                    </span>
                  ))}
                </div>
              }
            />
          </div>
          
          <Separator className="border-white/10" />
          
          <div>
            <h3 className="text-lg font-bold mb-2 flex items-center">
              <ScrollText className="h-5 w-5 mr-2 text-royal-gold" />
              Participation Requirements
            </h3>
            <p className="text-white/70 text-sm mb-3">{eventDetails.eligibility}</p>
            <ul className="space-y-2">
              {eventDetails.participationRequirements.map((req, i) => (
                <li key={i} className="flex items-start">
                  <Check className="h-4 w-4 mr-2 text-team-green mt-1 flex-shrink-0" />
                  <span className="text-sm text-white/80">{req}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <Separator className="border-white/10" />
          
          <div>
            <h3 className="text-lg font-bold mb-2 flex items-center">
              <Shield className="h-5 w-5 mr-2 text-royal-gold" />
              Special Rules
            </h3>
            <ul className="space-y-2">
              {eventDetails.specialRules.map((rule, i) => (
                <li key={i} className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full bg-royal-gold mt-1.5 mr-2 flex-shrink-0" />
                  <span className="text-sm text-white/80">{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ScrollArea>
      
      <DialogFooter className="mt-6">
        <Button variant="outline" onClick={onClose}>
          Close
        </Button>
        <Button 
          className="bg-gradient-to-r from-team-blue to-royal-gold text-black font-medium"
        >
          Join Event
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};

interface InfoCardProps {
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, icon, content }) => {
  return (
    <div className="glass-morphism border-white/10 p-4 rounded-lg flex-1 min-w-[200px]">
      <h3 className="text-sm font-medium text-white/70 flex items-center mb-2">
        {icon}
        <span className="ml-2">{title}</span>
      </h3>
      {content}
    </div>
  );
};

export default EventDetailsModal;
