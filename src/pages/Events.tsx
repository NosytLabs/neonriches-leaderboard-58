
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';
import CurrentEvent from '@/components/events/CurrentEvent';
import EventStats from '@/components/events/EventStats';
import PokePartyTargets from '@/components/events/PokePartyTargets';
import UpcomingEvents from '@/components/events/UpcomingEvents';
import EventBenefits from '@/components/events/EventBenefits';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/hooks/use-toast';
import { Calendar, DollarSign, Info } from 'lucide-react';
import CountdownTimer from '@/components/events/CountdownTimer';
import { currentEvent, upcomingEvents } from '@/components/events/data';
import { Alert, AlertDescription } from '@/components/ui/alert';

const Events = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "You must be logged in to access royal events.",
        variant: "destructive",
      });
      navigate('/auth');
    }
  }, [user, navigate]);

  if (!user) {
    return null;
  }

  // Get next upcoming event
  const nextEvent = upcomingEvents.length > 0 ? upcomingEvents[0] : null;

  return (
    <div className="min-h-screen flex flex-col bg-background throne-bg text-foreground">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-24">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-2 royal-gradient">Royal Events</h1>
          <p className="text-white/70 mb-4">
            Participate in exclusive events to earn cosmetic rewards and customize your profile.
          </p>
          
          <Alert className="mb-8 border-white/10 bg-white/5">
            <Info className="h-4 w-4 text-white" />
            <AlertDescription className="text-white/80">
              <strong>Important:</strong> All events provide only cosmetic rewards and profile customizations. Your rank on the leaderboard is always calculated solely based on your total spending, where $1 equals 1 unit of rank.
            </AlertDescription>
          </Alert>
          
          {/* Weekly Schedule Overview */}
          <Card className="glass-morphism border-white/10 mb-8 p-6">
            <div className="flex items-center mb-4">
              <Calendar className="h-6 w-6 text-royal-gold mr-2" />
              <h2 className="text-xl font-bold text-gradient">Weekly Event Schedule</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Current Event</h3>
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-team-red rounded-full mr-2 animate-pulse"></div>
                  <span className="text-white font-medium">{currentEvent.name}</span>
                  <span className="ml-2 text-xs bg-white/10 px-2 py-0.5 rounded-full text-white/70">Cosmetic Only</span>
                </div>
                <p className="text-white/60 text-sm mb-3">Ends in:</p>
                <CountdownTimer targetDate={currentEvent.endDate} variant="compact" />
              </div>
              
              {nextEvent && (
                <div>
                  <h3 className="text-lg font-medium mb-3">Next Upcoming Event</h3>
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-white/40 rounded-full mr-2"></div>
                    <span className="text-white font-medium">{nextEvent.name}</span>
                    <span className="ml-2 text-xs bg-white/10 px-2 py-0.5 rounded-full text-white/70">Cosmetic Only</span>
                  </div>
                  <p className="text-white/60 text-sm mb-3">Starts in:</p>
                  <CountdownTimer targetDate={nextEvent.startDate} variant="compact" />
                </div>
              )}
            </div>
            
            <div className="mt-6 flex items-center p-3 rounded-lg bg-white/5">
              <DollarSign className="h-5 w-5 text-royal-gold mr-3" />
              <p className="text-white/80 text-sm">
                Your rank is determined solely by your total spending. $1 = 1 rank point. 
                Events offer fun and cosmetic rewards without affecting this calculation.
              </p>
            </div>
          </Card>
          
          <Separator className="bg-white/10 my-8" />
          
          <EventStats />
          
          <CurrentEvent />
          
          <PokePartyTargets />
          
          <UpcomingEvents />
          
          <Separator className="bg-white/10 my-8" />
          
          <EventBenefits />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Events;
