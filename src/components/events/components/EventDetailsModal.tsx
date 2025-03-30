
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Event, EventDetails } from '@/types/events';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, Timer, Gift, Trophy, Info, Check, Target } from 'lucide-react';
import { formatDate } from '@/utils/dates';

export interface EventDetailsModalProps {
  event: EventDetails | Event;
  onClose: () => void;
  isOpen?: boolean;
}

const EventDetailsModal: React.FC<EventDetailsModalProps> = ({
  event,
  onClose,
  isOpen = true
}) => {
  const formattedStartDate = event.startDate ? formatDate(event.startDate) : '-';
  const formattedEndDate = event.endDate ? formatDate(event.endDate) : '-';

  return (
    <Dialog open={isOpen} onOpenChange={() => onClose()}>
      <DialogContent className="glass-morphism border-white/10 max-w-3xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex justify-between items-center">
            <DialogTitle className="text-2xl font-royal">{event.title || event.name}</DialogTitle>
            <Badge 
              variant="outline" 
              className="bg-purple-500/30 text-white border-purple-500/30"
            >
              {event.type?.toUpperCase()}
            </Badge>
          </div>
          <DialogDescription className="text-white/70">
            {event.description}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4">
          {event.image && (
            <div className="mb-6 rounded-lg overflow-hidden">
              <img 
                src={event.image} 
                alt={event.title || event.name} 
                className="w-full h-auto object-cover"
              />
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="flex items-center space-x-2">
              <CalendarDays className="h-5 w-5 text-royal-gold" />
              <span className="text-white/70">Start: {formattedStartDate}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Timer className="h-5 w-5 text-royal-gold" />
              <span className="text-white/70">End: {formattedEndDate}</span>
            </div>
          </div>

          {'longDescription' in event && event.longDescription && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-white/70 whitespace-pre-line">{event.longDescription}</p>
            </div>
          )}

          {'rules' in event && event.rules && event.rules.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 flex items-center">
                <Info className="h-5 w-5 mr-2 text-royal-gold" />
                Rules
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-white/70">
                {event.rules.map((rule, index) => (
                  <li key={`rule-${index}`}>{rule}</li>
                ))}
              </ul>
            </div>
          )}

          {'rewards' in event && event.rewards && event.rewards.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 flex items-center">
                <Gift className="h-5 w-5 mr-2 text-royal-gold" />
                Rewards
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-white/70">
                {event.rewards.map((reward, index) => (
                  <li key={`reward-${index}`}>{reward}</li>
                ))}
              </ul>
            </div>
          )}

          {'rewardTypes' in event && event.rewardTypes && event.rewardTypes.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 flex items-center">
                <Trophy className="h-5 w-5 mr-2 text-royal-gold" />
                Reward Types
              </h3>
              <div className="flex flex-wrap gap-2">
                {event.rewardTypes.map((type, index) => (
                  <Badge key={`type-${index}`} variant="outline" className="bg-royal-gold/20 border-royal-gold/30">
                    {type}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {'eligibility' in event && event.eligibility && event.eligibility.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 flex items-center">
                <Check className="h-5 w-5 mr-2 text-royal-gold" />
                Eligibility
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-white/70">
                {event.eligibility.map((item, index) => (
                  <li key={`eligibility-${index}`}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {'participationRequirements' in event && event.participationRequirements && event.participationRequirements.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 flex items-center">
                <Target className="h-5 w-5 mr-2 text-royal-gold" />
                Participation Requirements
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-white/70">
                {event.participationRequirements.map((req, index) => (
                  <li key={`req-${index}`}>{req}</li>
                ))}
              </ul>
            </div>
          )}

          {'specialRules' in event && event.specialRules && event.specialRules.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 flex items-center">
                <Info className="h-5 w-5 mr-2 text-royal-gold" />
                Special Rules
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-white/70">
                {event.specialRules.map((rule, index) => (
                  <li key={`special-${index}`}>{rule}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EventDetailsModal;
