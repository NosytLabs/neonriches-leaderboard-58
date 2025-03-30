
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { EventDetails } from '@/types/events';
import { Badge } from '@/components/ui/badge';
import { Calendar, Trophy, Users, Info, Clock } from 'lucide-react';
import { format } from 'date-fns';

interface EventDetailsModalProps {
  event: EventDetails;
  isOpen: boolean;
  onClose: () => void;
}

const EventDetailsModal = ({ event, isOpen, onClose }: EventDetailsModalProps) => {
  // If image is not defined, use imageUrl
  const imageSource = event.image || event.imageUrl;
  // If name is not defined, use title
  const eventName = event.name || event.title;

  const formatDate = (dateStr: string) => {
    try {
      return format(new Date(dateStr), 'MMMM d, yyyy');
    } catch (e) {
      return dateStr;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-xl">{eventName}</DialogTitle>
        </DialogHeader>
        
        <div className="mt-4">
          {imageSource && (
            <div className="mb-6 rounded-lg overflow-hidden">
              <img src={imageSource} alt={eventName} className="w-full h-48 object-cover" />
            </div>
          )}
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-2">About</h3>
              <p className="text-gray-700 dark:text-gray-300">{event.description}</p>
            </div>
            
            <div className="flex justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Starts: {formatDate(event.startDate)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Ends: {formatDate(event.endDate)}</span>
              </div>
            </div>
            
            <div className="flex justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>Participants: {event.participants} / {event.maxParticipants}</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline">{event.status}</Badge>
                <Badge>{event.type}</Badge>
              </div>
            </div>
            
            {event.rewardTypes && event.rewardTypes.length > 0 && (
              <div>
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <Trophy className="w-4 h-4" /> Rewards
                </h3>
                <div className="flex flex-wrap gap-2">
                  {event.rewardTypes.map((reward, idx) => (
                    <Badge key={idx} variant="secondary">{reward}</Badge>
                  ))}
                </div>
              </div>
            )}
            
            {event.eligibility && (
              <div>
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <Info className="w-4 h-4" /> Eligibility
                </h3>
                <p className="text-gray-700 dark:text-gray-300">{event.eligibility}</p>
              </div>
            )}
            
            {event.participationRequirements && event.participationRequirements.length > 0 && (
              <div>
                <h3 className="font-semibold text-lg mb-2">Requirements</h3>
                <ul className="list-disc list-inside">
                  {event.participationRequirements.map((req, idx) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {event.specialRules && event.specialRules.length > 0 && (
              <div>
                <h3 className="font-semibold text-lg mb-2">Special Rules</h3>
                <ul className="list-disc list-inside">
                  {event.specialRules.map((rule, idx) => (
                    <li key={idx}>{rule}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EventDetailsModal;
