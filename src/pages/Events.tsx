
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
import { Calendar } from 'lucide-react';
import CountdownTimer from '@/components/events/CountdownTimer';
import { currentEvent, upcomingEvents } from '@/components/events/data';

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
          <p className="text-white/70 mb-8">
            Participate in exclusive events to boost your rank and demonstrate your spending prowess.
          </p>
          
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
                  </div>
                  <p className="text-white/60 text-sm mb-3">Starts in:</p>
                  <CountdownTimer targetDate={nextEvent.startDate} variant="compact" />
                </div>
              )}
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
