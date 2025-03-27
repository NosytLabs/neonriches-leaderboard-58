
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar } from 'lucide-react';
import { currentEvent } from './data';
import { TooltipProvider } from '@/components/ui/tooltip';
import EventHeader from './components/EventHeader';
import EventProgressCountdown from './components/EventProgressCountdown';
import RankingDisclaimer from '@/components/shared/RankingDisclaimer';
import { formatDate } from '@/utils/timeUtils';

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
          
          <RankingDisclaimer 
            variant="gold" 
            messagePrefix="$1 = 1 Rank Guarantee:"
          />
        </CardContent>
      </Card>
    </TooltipProvider>
  );
};

export default CurrentEvent;
