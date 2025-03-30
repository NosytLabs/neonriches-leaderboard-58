
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  CalendarDays,
  Trophy,
  Users,
  Clock,
  Calendar,
  Activity,
  Info,
  AlertCircle,
} from 'lucide-react';
import { Event, EventDetails } from '@/types/events';
import { formatDate, formatDateRange } from '@/utils/formatters';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import RoyalDivider from '@/components/ui/royal-divider';

interface EventDetailsModalProps {
  event: Event | EventDetails;
  isOpen: boolean;
  onClose: () => void;
  onParticipate?: () => void;
}

const EventDetailsModal: React.FC<EventDetailsModalProps> = ({
  event,
  isOpen,
  onClose,
  onParticipate,
}) => {
  if (!event) return null;

  const getStatusBadge = () => {
    // Using optional chaining to safely access status
    const status = 'status' in event ? event.status : undefined;
    
    if (status === 'active') {
      return <Badge className="bg-green-500">Active</Badge>;
    } else if (status === 'upcoming') {
      return <Badge className="bg-blue-500">Upcoming</Badge>;
    } else if (status === 'completed') {
      return <Badge className="bg-gray-500">Completed</Badge>;
    } else if (status === 'cancelled' || status === 'canceled') {
      return <Badge className="bg-gray-500">Cancelled</Badge>;
    }
    return null;
  };

  const hasRewards = 'rewards' in event && event.rewards && Array.isArray(event.rewards) && event.rewards.length > 0;

  const getEventTime = () => {
    const startDate = new Date(event.startDate);
    const endDate = new Date(event.endDate);

    const formattedStartDate = formatDate(startDate);
    const formattedEndDate = formatDate(endDate);

    if (formattedStartDate === formattedEndDate) {
      return (
        <div className="flex items-center text-sm text-white/60">
          <Calendar className="mr-2 h-4 w-4" />
          {formattedStartDate}
        </div>
      );
    } else {
      return (
        <div className="flex items-center text-sm text-white/60">
          <CalendarDays className="mr-2 h-4 w-4" />
          {formatDateRange(startDate, endDate)}
        </div>
      );
    }
  };

  const getEventDuration = () => {
    const startDate = new Date(event.startDate);
    const endDate = new Date(event.endDate);
    const durationMs = endDate.getTime() - startDate.getTime();
    const durationDays = Math.ceil(durationMs / (1000 * 60 * 60 * 24));

    return (
      <div className="flex items-center text-sm text-white/60">
        <Clock className="mr-2 h-4 w-4" />
        {durationDays} days
      </div>
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="glass-morphism border-white/10 max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold royal-gradient">
              {event.title || event.name}
            </DialogTitle>
            {getStatusBadge()}
          </div>
          <DialogDescription className="text-white/70">
            {event.description}
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="overview" className="mt-4">
          <TabsList className="glass-morphism border-white/10 grid grid-cols-3 mb-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="details">Details</TabsTrigger>
            {hasRewards && (
              <TabsTrigger value="rewards">Rewards</TabsTrigger>
            )}
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="flex items-center text-sm text-white/60">
              <Activity className="mr-2 h-4 w-4" />
              {event.type} Event
            </div>

            {getEventTime()}
            {getEventDuration()}

            <Separator className="bg-white/10" />

            <div className="text-white/80">{event.description}</div>
          </TabsContent>

          <TabsContent value="details" className="space-y-4">
            <div className="flex items-center text-sm text-white/60">
              <Info className="mr-2 h-4 w-4" />
              Event Details
            </div>

            <ul className="list-disc list-inside text-white/80">
              {('rules' in event && event.rules) ? (
                event.rules.map((rule, index) => (
                  <li key={index}>{rule}</li>
                ))
              ) : (
                <li>No specific rules provided for this event.</li>
              )}
            </ul>
          </TabsContent>

          {hasRewards && (
            <TabsContent value="rewards" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {event.rewards?.map((reward: any, index: number) => (
                  <div
                    key={index}
                    className="p-4 glass-morphism border-royal-gold/20 rounded-lg"
                  >
                    <div className="flex items-center">
                      <Trophy className="mr-2 h-5 w-5 text-royal-gold" />
                      <h4 className="text-lg font-semibold">{reward.name}</h4>
                    </div>
                    <p className="text-sm text-white/70 mt-1">{reward.description}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          )}
        </Tabs>

        <RoyalDivider variant="line" className="my-4" />

        <DialogFooter className="flex flex-col sm:flex-row gap-2">
          {('status' in event && event.status === 'active') && (
            <Button 
              className="w-full sm:w-auto bg-royal-gold hover:bg-royal-gold/90 text-black" 
              onClick={onParticipate}
            >
              Participate Now
            </Button>
          )}
          
          {('status' in event && event.status === 'upcoming') && (
            <Button 
              className="w-full sm:w-auto bg-royal-purple hover:bg-royal-purple/90" 
              onClick={onParticipate}
            >
              Register Interest
            </Button>
          )}
          
          <Button 
            variant="outline" 
            className="w-full sm:w-auto" 
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
