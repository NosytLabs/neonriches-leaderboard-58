
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Trophy, Map, Users, X } from 'lucide-react';
import { Event, EventDetails } from '@/types/events';
import { formatDate } from '@/utils/dateUtils';
import Image from '@/components/ui/image';

export interface EventDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: Event | EventDetails;
}

const EventDetailsModal: React.FC<EventDetailsModalProps> = ({
  isOpen,
  onClose,
  event
}) => {
  if (!event) return null;
  
  // Format start and end dates
  const startDate = formatDate(event.startDate);
  const endDate = formatDate(event.endDate);
  
  // Determine event duration
  const start = new Date(event.startDate);
  const end = new Date(event.endDate);
  const durationDays = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  
  // Check if the event has a long description (indicates it's an EventDetails)
  const hasDetailedInfo = ('rules' in event) || ('prizes' in event);
  
  // Get the event image from appropriate property
  const eventImage = ('image' in event && event.image) || 
                     ('imageUrl' in event && event.imageUrl) || 
                     '/placeholder.jpg';
  
  // Get the event status from the event object
  const eventStatus = 'status' in event ? event.status : 'upcoming';
  
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="glass-morphism border-white/10 max-w-3xl">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-bold">{event.title || ('name' in event ? event.name : '')}</DialogTitle>
            <DialogClose asChild>
              <Button variant="ghost" size="icon" className="text-white/70 hover:text-white">
                <X className="h-5 w-5" />
              </Button>
            </DialogClose>
          </div>
          <DialogDescription className="text-white/70">{event.description}</DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="rounded-lg overflow-hidden mb-4">
              <Image
                src={eventImage}
                alt={event.title || ('name' in event ? event.name : 'Event')}
                aspectRatio="16:9"
                className="w-full"
              />
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline" className={`
                ${'type' in event && event.type === 'treasure' ? 'bg-royal-gold/20 border-royal-gold/40' : ''} 
                ${'type' in event && event.type === 'shame' ? 'bg-royal-crimson/20 border-royal-crimson/40' : ''}
                ${'type' in event && event.type === 'team' ? 'bg-royal-navy/20 border-royal-navy/40' : ''}
              `}>
                {'type' in event ? event.type.charAt(0).toUpperCase() + event.type.slice(1) : 'Event'}
              </Badge>
              
              <Badge variant="outline" className={`
                ${eventStatus === 'active' ? 'bg-emerald-500/20 border-emerald-500/40' : ''} 
                ${eventStatus === 'upcoming' ? 'bg-blue-500/20 border-blue-500/40' : ''}
                ${eventStatus === 'completed' ? 'bg-gray-500/20 border-gray-500/40' : ''}
              `}>
                {eventStatus.charAt(0).toUpperCase() + eventStatus.slice(1)}
              </Badge>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white/70">
                <Calendar className="h-4 w-4 text-royal-gold" />
                <span>
                  <strong>Dates:</strong> {startDate} - {endDate}
                </span>
              </div>
              
              <div className="flex items-center gap-2 text-white/70">
                <Clock className="h-4 w-4 text-royal-gold" />
                <span>
                  <strong>Duration:</strong> {durationDays} {durationDays === 1 ? 'day' : 'days'}
                </span>
              </div>
              
              <div className="flex items-center gap-2 text-white/70">
                <Trophy className="h-4 w-4 text-royal-gold" />
                <span>
                  <strong>Rewards:</strong> {(event.rewards && event.rewards.length) || 0} rewards available
                </span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            {hasDetailedInfo && 'rules' in event && event.rules && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Rules</h3>
                <ul className="list-disc pl-5 text-white/70 text-sm space-y-1">
                  {event.rules.map((rule, index) => (
                    <li key={index}>{rule}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {hasDetailedInfo && 'prizes' in event && event.prizes && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Prizes</h3>
                <ul className="list-disc pl-5 text-white/70 text-sm space-y-1">
                  {event.prizes.map((prize, index) => (
                    <li key={index}>{prize}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {event.rewards && event.rewards.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Rewards</h3>
                <div className="space-y-2">
                  {event.rewards.map((reward, index) => (
                    <div key={index} className="p-3 bg-black/20 rounded-lg border border-white/10">
                      <h4 className="font-medium text-royal-gold">{reward.name}</h4>
                      <p className="text-white/70 text-sm">{reward.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="flex justify-end gap-3 mt-4">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          {eventStatus === 'active' && (
            <Button variant="default" className="bg-royal-gold hover:bg-royal-gold/90 text-black">
              Participate Now
            </Button>
          )}
          {eventStatus === 'upcoming' && (
            <Button variant="outline" className="border-royal-gold/40 text-royal-gold">
              Remind Me
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EventDetailsModal;
