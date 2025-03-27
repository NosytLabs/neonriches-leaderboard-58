
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, DollarSign } from 'lucide-react';
import { currentEvent, formatDate } from './data';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Alert, AlertDescription } from '@/components/ui/alert';
import EventHeader from './components/EventHeader';
import EventProgressCountdown from './components/EventProgressCountdown';

const CurrentEvent = () => {
  return (
    <TooltipProvider>
      <Card className="glass-morphism border-white/10 mb-12 overflow-hidden">
        <EventHeader 
          name={currentEvent.name} 
          image={currentEvent.image} 
        />
        
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
            <div className="mb-4 md:mb-0">
              <p className="text-white/70 mb-4 max-w-2xl">
                {currentEvent.description}
              </p>
              
              <div className="flex items-center">
                <Calendar size={16} className="mr-1.5 text-white/50" />
                <span className="text-sm text-white/70">
                  {formatDate(currentEvent.startDate)} - {formatDate(currentEvent.endDate)}
                </span>
              </div>
            </div>
            
            <EventProgressCountdown 
              progress={currentEvent.progress} 
              endDate={currentEvent.endDate}
            />
          </div>
          
          <Alert className="bg-royal-gold/5 border-royal-gold/20">
            <DollarSign className="h-4 w-4 text-royal-gold" />
            <AlertDescription className="text-white/80">
              <strong>$1 = 1 Rank Guarantee:</strong> All events are purely for fun and cosmetic rewards. Your actual rank on the leaderboard is always calculated based solely on your total spending, where $1 equals 1 unit of rank.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </TooltipProvider>
  );
};

export default CurrentEvent;
