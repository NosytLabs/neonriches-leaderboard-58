
import React, { useState } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  Users, 
  Trophy, 
  Clock, 
  Award,
  CheckCircle2, 
  XCircle,
  Flame
} from 'lucide-react';
import { formatDate } from '@/utils/dateUtils';
import { Event, EventDetails } from '@/types/events';
import { cn } from '@/lib/utils';
import { eventDetails } from '../data';

interface EventDetailsModalProps {
  event: Event;
  isOpen: boolean;
  onClose: () => void;
  onJoin?: () => void;
  onLeave?: () => void;
  isParticipating?: boolean;
}

const EventDetailsModal: React.FC<EventDetailsModalProps> = ({
  event,
  isOpen,
  onClose,
  onJoin,
  onLeave,
  isParticipating = false
}) => {
  const [activeTab, setActiveTab] = useState('details');
  
  // Fetch the event details based on the event ID
  const details = eventDetails[event.id] || null;
  
  const getEventType = (type: string): { label: string; color: string } => {
    switch (type) {
      case 'tournament':
        return { label: 'Tournament', color: 'bg-blue-500/20 text-blue-400 border-blue-500/20' };
      case 'challenge':
        return { label: 'Challenge', color: 'bg-green-500/20 text-green-400 border-green-500/20' };
      case 'team':
        return { label: 'Team Event', color: 'bg-sky-500/20 text-sky-400 border-sky-500/20' };
      case 'shame':
        return { label: 'Festival', color: 'bg-pink-500/20 text-pink-400 border-pink-500/20' };
      case 'treasure':
        return { label: 'Treasure Hunt', color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/20' };
      default:
        return { label: 'Special', color: 'bg-purple-500/20 text-purple-400 border-purple-500/20' };
    }
  };
  
  const getStatusBadge = () => {
    if ('status' in event) {
      if (event.status === 'upcoming') {
        return <Badge variant="outline" className="bg-blue-500/20 text-blue-400 border-blue-500/20">Upcoming</Badge>;
      } else if (event.status === 'active') {
        return <Badge variant="outline" className="bg-green-500/20 text-green-400 border-green-500/20">Active</Badge>;
      } else if (event.status === 'completed') {
        return <Badge variant="outline" className="bg-gray-500/20 text-gray-300 border-gray-500/20">Completed</Badge>;
      } else {
        return <Badge variant="outline" className={`bg-${event.status === 'cancelled' ? 'red' : 'gray'}-500/20 text-${event.status === 'cancelled' ? 'red' : 'gray'}-400 border-${event.status === 'cancelled' ? 'red' : 'gray'}-500/20`}>{event.status.charAt(0).toUpperCase() + event.status.slice(1)}</Badge>;
      }
    }
    return null;
  };
  
  const eventTypeInfo = getEventType(event.type);
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="glass-morphism border-royal-gold/20 min-w-[90vw] md:min-w-[80vw] lg:min-w-[70vw] max-w-5xl">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="flex items-center">
              <span className="text-royal-gold mr-2">{event.title}</span>
              {getStatusBadge()}
            </DialogTitle>
            <div className="flex gap-2">
              <Badge variant="outline" className={cn("px-2 py-1 text-xs", eventTypeInfo.color)}>
                {eventTypeInfo.label}
              </Badge>
            </div>
          </div>
          <DialogDescription>
            {event.description}
          </DialogDescription>
        </DialogHeader>
        
        <Tabs defaultValue="details" value={activeTab} onValueChange={setActiveTab} className="mt-5">
          <TabsList className="grid w-full grid-cols-3 glass-morphism">
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="rules">Rules</TabsTrigger>
            <TabsTrigger value="rewards">Rewards</TabsTrigger>
          </TabsList>
          
          <TabsContent value="details" className="py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-2 md:col-span-1">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-royal-gold" />
                    <span>Start Date: {formatDate(event.startDate)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-royal-gold" />
                    <span>End Date: {formatDate(event.endDate)}</span>
                  </div>
                  {details && (
                    <div className="text-white/70 mt-4">
                      <h3 className="text-white font-medium mb-2">Event Description</h3>
                      <p>{details.description}</p>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="col-span-2 md:col-span-1">
                <div className="rounded-lg overflow-hidden h-48">
                  <img 
                    src={event.image || '/event-placeholder.jpg'} 
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="rules" className="py-4">
            {details && details.rules ? (
              <div className="space-y-4">
                <h3 className="text-white font-medium">Event Rules</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {details.rules.map((rule, index) => (
                    <li key={index} className="text-white/70">{rule}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="text-center py-8 text-white/60">
                No specific rules available for this event.
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="rewards" className="py-4">
            {(details && details.rewards && details.rewards.length > 0) ? (
              <div className="space-y-6">
                <h3 className="text-white font-medium">Event Rewards</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {details.rewards && details.rewards.map((reward, index) => (
                    <div 
                      key={index}
                      className="glass-morphism border-white/10 p-4 rounded-lg"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="h-5 w-5 text-royal-gold" />
                        <h4 className="font-medium">{reward}</h4>
                      </div>
                      {details.rewardTypes && details.rewardTypes[index] && (
                        <Badge variant="outline" className="bg-royal-gold/10 text-royal-gold border-royal-gold/20">
                          {details.rewardTypes[index]}
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-8 text-white/60">
                No rewards information available for this event.
              </div>
            )}
          </TabsContent>
        </Tabs>
        
        <DialogFooter className="gap-2">
          {('status' in event) && event.status === 'active' && (
            <>
              {isParticipating ? (
                <Button 
                  variant="outline" 
                  onClick={onLeave}
                >
                  <XCircle className="h-4 w-4 mr-2" />
                  Leave Event
                </Button>
              ) : (
                <Button 
                  className="bg-royal-gold hover:bg-royal-gold/90 text-black" 
                  onClick={onJoin}
                >
                  <CheckCircle2 className="h-4 w-4 mr-2" />
                  Join Event
                </Button>
              )}
            </>
          )}
          
          <Button 
            variant="ghost" 
            onClick={onClose}
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EventDetailsModal;
