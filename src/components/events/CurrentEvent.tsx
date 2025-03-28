
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CalendarDays, Clock, Trophy, Users } from 'lucide-react';
import { Dialog } from '@/components/ui/dialog';
import CountdownTimer from './CountdownTimer';
import EventDetailsModal from './components/EventDetailsModal';
import { useEventStatistics } from './hooks/useEventStatistics';
import { currentEvent } from './data';
import PublicShamingFestival from './PublicShamingFestival';
import OptimizedImage from '@/components/ui/optimized-image';
import { formatDate } from '@/utils/dateUtils';

const CurrentEvent = () => {
  const { stats } = useEventStatistics();
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  
  // Render appropriate event component based on type
  const renderEventComponent = () => {
    switch (currentEvent.type) {
      case 'shame':
        return <PublicShamingFestival />;
      default:
        return (
          <div className="text-center p-8">
            <p className="text-white/70">Event details will be available soon.</p>
          </div>
        );
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="glass-morphism border-royal-gold/20 overflow-hidden rounded-lg">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
          
          <OptimizedImage 
            src={currentEvent.image}
            alt={currentEvent.name}
            className="w-full h-60 object-cover"
          />
          
          <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
              <div>
                <h2 className="text-2xl font-bold royal-gradient">
                  {currentEvent.name}
                </h2>
                <p className="text-white/70 line-clamp-2 md:max-w-xl">
                  {currentEvent.description}
                </p>
              </div>
              
              <div className="flex flex-col space-y-2">
                <CountdownTimer 
                  targetDate={currentEvent.endDate} 
                  variant="compact" 
                  className="mt-2" 
                />
                
                <Button 
                  className="royal-button bg-gradient-to-r from-royal-gold to-royal-crimson hover:opacity-90"
                  onClick={() => setShowDetailsModal(true)}
                >
                  <span className="mr-2">Event Details</span>
                  <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 bg-black/40">
          <div className="flex items-center p-2 glass-morphism border-white/10 rounded-lg">
            <Trophy className="h-6 w-6 text-royal-gold mr-3" />
            <div>
              <p className="text-sm text-white/70">Prize Pool</p>
              <p className="font-bold">${stats.prizePool.toLocaleString()}</p>
            </div>
          </div>
          
          <div className="flex items-center p-2 glass-morphism border-white/10 rounded-lg">
            <Users className="h-6 w-6 text-royal-purple mr-3" />
            <div>
              <p className="text-sm text-white/70">Participants</p>
              <p className="font-bold">{stats.participantsCount.toLocaleString()}</p>
            </div>
          </div>
          
          <div className="flex items-center p-2 glass-morphism border-white/10 rounded-lg">
            <CalendarDays className="h-6 w-6 text-royal-navy mr-3" />
            <div>
              <p className="text-sm text-white/70">Started</p>
              <p className="font-bold">{formatDate(currentEvent.startDate, { month: 'short', day: 'numeric', year: undefined, weekday: undefined })}</p>
            </div>
          </div>
          
          <div className="flex items-center p-2 glass-morphism border-white/10 rounded-lg">
            <Clock className="h-6 w-6 text-royal-crimson mr-3" />
            <div>
              <p className="text-sm text-white/70">Ends</p>
              <p className="font-bold">{formatDate(currentEvent.endDate, { month: 'short', day: 'numeric', year: undefined, weekday: undefined })}</p>
            </div>
          </div>
        </div>
      </div>
      
      {renderEventComponent()}
      
      <Dialog open={showDetailsModal} onOpenChange={setShowDetailsModal}>
        <EventDetailsModal 
          eventId={currentEvent.id} 
          onClose={() => setShowDetailsModal(false)} 
        />
      </Dialog>
    </div>
  );
};

export default CurrentEvent;
