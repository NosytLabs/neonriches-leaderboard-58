
import React from 'react';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { EventDetails, EventStatus } from '@/types/events';
import { UserProfile } from '@/types/user';
import { Badge } from '@/components/ui/badge';
import { Clock, Calendar, Trophy, Users, Coins } from 'lucide-react';
import { formatDistanceToNow, format, isBefore, isAfter } from 'date-fns';

interface EventDetailsModalProps {
  event: EventDetails;
  isOpen: boolean;
  onClose: () => void;
  onJoin?: (eventId: string) => void;
  onLeave?: (eventId: string) => void;
  currentUser?: UserProfile | null;
  isParticipating?: boolean;
}

const EventDetailsModal: React.FC<EventDetailsModalProps> = ({
  event,
  isOpen,
  onClose,
  onJoin,
  onLeave,
  currentUser,
  isParticipating = false
}) => {
  const {
    id,
    name,
    description,
    type,
    startDate,
    endDate,
    status,
    rewards = [],
    rules = []
  } = event;
  
  const now = new Date();
  const hasStarted = isBefore(new Date(startDate), now);
  const hasEnded = isBefore(new Date(endDate), now);
  
  const getStatusBadge = () => {
    // Handle multiple status variations consistently 
    const normalizedStatus = status?.toLowerCase();
    
    if (normalizedStatus === 'upcoming') {
      return <Badge className="bg-blue-600">Upcoming</Badge>;
    } else if (normalizedStatus === 'active') {
      return <Badge className="bg-green-600">Active</Badge>;
    } else if (normalizedStatus === 'completed' || normalizedStatus === 'canceled' || normalizedStatus === 'cancelled') {
      return <Badge className="bg-gray-600">{status}</Badge>;
    }
    return <Badge className="bg-purple-600">{status}</Badge>;
  };
  
  const getTimeRemaining = () => {
    if (hasEnded) {
      return 'Event has ended';
    } else if (hasStarted) {
      return `Ends ${formatDistanceToNow(new Date(endDate), { addSuffix: true })}`;
    } else {
      return `Starts ${formatDistanceToNow(new Date(startDate), { addSuffix: true })}`;
    }
  };
  
  const canJoin = currentUser && hasStarted && !hasEnded && !isParticipating;
  const canLeave = currentUser && hasStarted && !hasEnded && isParticipating;
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            {name}
            {getStatusBadge()}
          </DialogTitle>
          <DialogDescription>
            {description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-2 gap-6 py-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Event Details</h3>
            <div className="space-y-2">
              <div className="flex items-center text-sm">
                <Calendar className="h-4 w-4 mr-2 text-royal-gold" />
                <span>Starts: {format(new Date(startDate), 'PPP')}</span>
              </div>
              <div className="flex items-center text-sm">
                <Calendar className="h-4 w-4 mr-2 text-royal-crimson" />
                <span>Ends: {format(new Date(endDate), 'PPP')}</span>
              </div>
              <div className="flex items-center text-sm">
                <Clock className="h-4 w-4 mr-2 text-royal-purple" />
                <span>{getTimeRemaining()}</span>
              </div>
              <div className="flex items-center text-sm">
                <Users className="h-4 w-4 mr-2 text-royal-navy" />
                <span>Event Type: {type}</span>
              </div>
            </div>
            
            {rules.length > 0 && (
              <div className="mt-4">
                <h4 className="font-medium mb-1">Rules:</h4>
                <ul className="list-disc list-inside text-sm space-y-1">
                  {rules.map((rule, idx) => (
                    <li key={idx}>{rule}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Rewards</h3>
            {rewards.length > 0 ? (
              <div className="space-y-2">
                {rewards.map((reward) => (
                  <div key={reward.id} className="flex items-start gap-2 p-2 rounded bg-black/20">
                    {reward.imageUrl && (
                      <img 
                        src={reward.imageUrl} 
                        className="w-8 h-8 object-cover rounded" 
                        alt={reward.name} 
                      />
                    )}
                    <div>
                      <div className="font-medium">{reward.name}</div>
                      <div className="text-xs opacity-70">{reward.description}</div>
                      <div className="text-xs flex items-center mt-1">
                        <Trophy className="h-3 w-3 mr-1 text-royal-gold" />
                        <span>{reward.rarity} {reward.type}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-sm opacity-70">No rewards specified for this event.</div>
            )}
          </div>
        </div>
        
        <DialogFooter className="gap-2">
          {canJoin && (
            <Button onClick={() => onJoin?.(id)}>
              <Users className="h-4 w-4 mr-2" />
              Join Event
            </Button>
          )}
          
          {canLeave && (
            <Button variant="outline" onClick={() => onLeave?.(id)}>
              Leave Event
            </Button>
          )}
          
          <Button 
            variant="secondary" 
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
