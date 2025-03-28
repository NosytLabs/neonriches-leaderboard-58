
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Bell, Info, Eye } from 'lucide-react';
import { upcomingEvents } from './data';
import CountdownTimer from './CountdownTimer';
import { useToast } from '@/hooks/use-toast';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { formatDate } from '@/utils/timeUtils';
import RankingDisclaimer from '@/components/shared/RankingDisclaimer';
import OptimizedImage from '@/components/ui/optimized-image';

interface UpcomingEventsProps {
  onViewDetails?: (eventId: string) => void;
}

const UpcomingEvents: React.FC<UpcomingEventsProps> = ({ onViewDetails }) => {
  const { toast } = useToast();

  const handleNotifyMe = (eventName: string) => {
    toast({
      title: "Notification Set",
      description: `You'll be notified when ${eventName} begins.`,
      duration: 3000,
    });
  };

  return (
    <TooltipProvider>
      <div className="mb-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gradient mb-2">Upcoming Events</h2>
            <p className="text-white/70">
              Participate in exclusive events to earn cosmetic rewards and unique titles. 
              All events are just for fun and don't affect the $1 = 1 rank calculation.
            </p>
          </div>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon" className="glass-morphism border-white/10 mt-4 md:mt-0">
                <Info size={16} />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="w-80 p-3 glass-morphism border-white/10">
              <p className="text-sm">
                All events only provide cosmetic rewards like titles, badges, and profile customizations. 
                Your leaderboard rank is always calculated solely based on your total spending ($1 = 1 unit of rank).
              </p>
            </TooltipContent>
          </Tooltip>
        </div>
        
        <RankingDisclaimer 
          variant="info" 
          messagePrefix="Events Reminder:" 
          className="mb-6"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {upcomingEvents.map((event) => (
            <Card key={event.id} className="glass-morphism border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300">
              <div className="relative h-40">
                <OptimizedImage 
                  src={event.image} 
                  alt={event.name} 
                  className="w-full h-full"
                  loadingStrategy="lazy"
                  placeholderColor="#1a1a2a"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="bg-white/20 text-white text-xs px-2 py-0.5 rounded-full">
                      UPCOMING
                    </span>
                    <span className="bg-white/10 text-white text-xs px-2 py-0.5 rounded-full">
                      COSMETIC REWARDS
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{event.name}</h3>
                </div>
              </div>
              
              <CardContent className="pt-4">
                <p className="text-white/70 mb-3">
                  {event.description} <span className="text-xs italic text-white/50">Purely cosmetic - doesn't affect your actual rank.</span>
                </p>
                
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center text-sm text-white/50">
                    <Calendar size={14} className="mr-1.5" />
                    {formatDate(event.startDate)} - {formatDate(event.endDate)}
                  </div>
                  <CountdownTimer
                    targetDate={event.startDate}
                    variant="minimal"
                    className="text-xs"
                  />
                </div>
              </CardContent>
              
              <CardFooter className="pt-0 flex justify-between gap-2">
                <Button 
                  variant="outline" 
                  className="flex-1 glass-morphism border-white/10 text-white hover:bg-white/10"
                  onClick={() => handleNotifyMe(event.name)}
                >
                  <Bell size={16} className="mr-2" />
                  Get Notified
                </Button>
                
                <Button 
                  variant="outline" 
                  className="flex-1 glass-morphism border-royal-gold/20 text-royal-gold hover:bg-royal-gold/10"
                  onClick={() => onViewDetails && onViewDetails(event.id)}
                >
                  <Eye size={16} className="mr-2" />
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </TooltipProvider>
  );
};

export default UpcomingEvents;
