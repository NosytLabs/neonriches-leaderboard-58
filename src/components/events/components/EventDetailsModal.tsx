
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Trophy, Users, Info, Bell } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import RoyalDivider from '@/components/ui/royal-divider';
import { formatDate } from '@/utils/timeUtils';
import { useToast } from '@/hooks/use-toast';
import CountdownTimer from '@/components/events/CountdownTimer';
import OptimizedImage from '@/components/ui/optimized-image';

export interface EventDetails {
  id: string;
  name: string;
  description: string;
  image: string;
  startDate: string;
  endDate: string;
  rewardTypes: string[];
  eligibility: string;
  participationRequirements: string[];
  specialRules: string[];
}

interface EventDetailsModalProps {
  event: EventDetails | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const EventDetailsModal: React.FC<EventDetailsModalProps> = ({
  event,
  open,
  onOpenChange
}) => {
  const { toast } = useToast();
  
  if (!event) return null;
  
  const handleRemindMe = () => {
    toast({
      title: "Reminder Set",
      description: `You'll be notified when ${event.name} begins.`
    });
  };
  
  const isEventActive = new Date(event.startDate) <= new Date() && new Date(event.endDate) >= new Date();
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass-morphism border-white/10 sm:max-w-md md:max-w-2xl">
        <div className="relative h-48 overflow-hidden -mt-6 -mx-6 rounded-t-lg">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
          
          <OptimizedImage 
            src={event.image} 
            alt={event.name}
            className="w-full h-full object-cover"
            loadingStrategy="eager"
            placeholderColor="#1a1a2a"
          />
          
          <div className="absolute top-4 left-4 z-20">
            <Badge variant="outline" className="bg-black/40 text-white border-white/20">
              {isEventActive ? 'ACTIVE EVENT' : 'UPCOMING EVENT'}
            </Badge>
          </div>
        </div>
        
        <DialogHeader className="relative -mt-16 z-20 text-white">
          <DialogTitle className="text-2xl font-bold royal-gradient">
            {event.name}
          </DialogTitle>
          <DialogDescription className="text-white/80">
            {event.description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <div className="space-y-3">
            <div className="flex items-center text-sm text-white/70">
              <Calendar className="h-4 w-4 mr-2 text-royal-gold" />
              <div>
                {formatDate(event.startDate)} - {formatDate(event.endDate)}
              </div>
            </div>
            
            <div className="flex items-center text-sm text-white/70">
              <Clock className="h-4 w-4 mr-2 text-royal-gold" />
              <div>
                {isEventActive ? (
                  <span>Event ends in: <CountdownTimer targetDate={event.endDate} variant="minimal" /></span>
                ) : (
                  <span>Event begins in: <CountdownTimer targetDate={event.startDate} variant="minimal" /></span>
                )}
              </div>
            </div>
            
            <div className="flex items-center text-sm text-white/70">
              <Users className="h-4 w-4 mr-2 text-royal-gold" />
              <div>{event.eligibility}</div>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="text-sm font-medium">Reward Types:</div>
            <div className="flex flex-wrap gap-2">
              {event.rewardTypes.map((reward, index) => (
                <Badge 
                  key={index} 
                  className="bg-royal-gold/10 text-royal-gold hover:bg-royal-gold/20 border-royal-gold/30"
                >
                  <Trophy className="h-3 w-3 mr-1" />
                  {reward}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        
        <RoyalDivider variant="line" label="EVENT DETAILS" color="gold" className="my-4" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
          <div>
            <h4 className="text-sm font-medium text-white mb-2 flex items-center">
              <Info className="h-4 w-4 mr-1 text-royal-purple" />
              Participation Requirements
            </h4>
            <ul className="space-y-1 text-sm text-white/70">
              {event.participationRequirements.map((req, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-royal-gold mr-1.5">•</span>
                  {req}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-white mb-2 flex items-center">
              <Info className="h-4 w-4 mr-1 text-royal-crimson" />
              Special Rules
            </h4>
            <ul className="space-y-1 text-sm text-white/70">
              {event.specialRules.map((rule, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-royal-gold mr-1.5">•</span>
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <DialogFooter className="flex flex-col sm:flex-row gap-2 mt-4">
          {!isEventActive && (
            <Button 
              variant="outline" 
              className="w-full sm:w-auto glass-morphism border-white/10 hover:bg-white/10"
              onClick={handleRemindMe}
            >
              <Bell className="mr-2 h-4 w-4" />
              Remind Me
            </Button>
          )}
          
          <Button 
            className={`w-full sm:w-auto ${
              isEventActive
                ? 'bg-gradient-to-r from-royal-crimson via-royal-gold to-royal-navy text-white'
                : 'glass-morphism border-white/10 hover:bg-white/10'
            }`}
          >
            <Trophy className="mr-2 h-4 w-4" />
            {isEventActive ? 'Participate Now' : 'Learn More'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EventDetailsModal;
