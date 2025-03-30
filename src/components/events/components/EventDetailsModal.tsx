
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Check, Calendar, Award, Clock, Users, X, Info, Tag } from 'lucide-react';
import { format } from 'date-fns';
import { Event, EventDetails } from '@/types/events';

interface EventDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: Event | EventDetails;
}

export function EventDetailsModal({ isOpen, onClose, event }: EventDetailsModalProps) {
  if (!event) return null;
  
  const formatDate = (date?: string) => {
    if (!date) return 'TBA';
    return format(new Date(date), 'MMM d, yyyy');
  };
  
  const getEventTypeColor = () => {
    switch (event.type) {
      case 'firesale': return 'bg-red-500/20 text-red-400';
      case 'tournament': return 'bg-blue-500/20 text-blue-400';
      case 'challenge': return 'bg-green-500/20 text-green-400';
      case 'seasonal': return 'bg-amber-500/20 text-amber-400';
      case 'treasure': return 'bg-yellow-500/20 text-yellow-400';
      case 'shame': return 'bg-purple-500/20 text-purple-400';
      case 'team': return 'bg-pink-500/20 text-pink-400';
      default: return 'bg-gray-500/20 text-gray-300';
    }
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="glass-morphism border-white/10 max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="relative w-full h-48 rounded-t-md overflow-hidden">
            <img
              src={(event as EventDetails).image || event.imageUrl}
              alt={(event as EventDetails).name || event.title}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <Badge className={`absolute top-4 right-4 ${getEventTypeColor()}`}>
              {(event as Event).type || 'Event'}
            </Badge>
          </div>
          
          <DialogTitle className="text-2xl font-bold mt-2">
            {(event as EventDetails).name || event.title}
          </DialogTitle>
          
          <div className="flex flex-wrap gap-4 mt-2 mb-4">
            <div className="flex items-center gap-1 text-sm">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <span>
                {formatDate((event as Event).startDate)} - {formatDate((event as Event).endDate)}
              </span>
            </div>
          </div>
        </DialogHeader>
        
        <div className="space-y-6 px-1">
          <p className="text-white/80">
            {(event as EventDetails).longDescription || event.description}
          </p>
          
          {(event as EventDetails).rules && (event as EventDetails).rules.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <Info className="w-5 h-5 text-royal-gold" />
                Rules
              </h3>
              <ul className="space-y-2">
                {(event as EventDetails).rules.map((rule, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-white/80">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {(event as EventDetails).rewards && (event as EventDetails).rewards.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <Award className="w-5 h-5 text-royal-gold" />
                Rewards
              </h3>
              <div className="space-y-2">
                {(event as EventDetails).rewards.map((reward, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Award className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span className="text-white/80">{reward}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {(event as EventDetails).rewardTypes && (event as EventDetails).rewardTypes.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {(event as EventDetails).rewardTypes.map((type, index) => (
                <Badge key={index} variant="outline" className="bg-yellow-900/30 border-yellow-700/50">
                  <Tag className="w-3 h-3 mr-1" />
                  {type}
                </Badge>
              ))}
            </div>
          )}
          
          {(event as EventDetails).eligibility && (event as EventDetails).eligibility.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <Users className="w-5 h-5 text-royal-gold" />
                Eligibility
              </h3>
              <ul className="space-y-2">
                {(event as EventDetails).eligibility.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {(event as EventDetails).participationRequirements && (event as EventDetails).participationRequirements.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <Clock className="w-5 h-5 text-royal-gold" />
                Participation Requirements
              </h3>
              <ul className="space-y-2">
                {(event as EventDetails).participationRequirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-white/80">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {(event as EventDetails).specialRules && (event as EventDetails).specialRules.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <Info className="w-5 h-5 text-royal-gold" />
                Special Rules
              </h3>
              <ul className="space-y-2">
                {(event as EventDetails).specialRules.map((rule, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Info className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-white/80">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default EventDetailsModal;
