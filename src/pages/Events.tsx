
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
import { Calendar, DollarSign, Sparkles } from 'lucide-react';
import CountdownTimer from '@/components/events/CountdownTimer';
import { currentEvent, upcomingEvents } from '@/components/events/data';
import RankingDisclaimer from '@/components/shared/RankingDisclaimer';
import ThroneBackground from '@/components/ui/throne-background';

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
    <div className="min-h-screen flex flex-col bg-[#0f0823] event-bg text-foreground">
      <Header />
      
      <ThroneBackground variant="purple" density="high" particles={true} />
      
      <main className="flex-grow container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 text-center">
            <div className="inline-block mb-4 relative">
              <Sparkles size={32} className="text-purple-500 animate-crown-glow mx-auto" />
              <div className="absolute -inset-3 bg-purple-500/20 rounded-full blur-lg"></div>
            </div>
            <h1 className="text-5xl font-bold mb-2 text-gradient royal-text-glow">Royal Events</h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              Participate in exclusive events to earn cosmetic rewards and customize your profile.
            </p>
          </div>
          
          <RankingDisclaimer 
            variant="info" 
            className="mb-8"
            messagePrefix="Important:"
          />
          
          {/* Weekly Schedule Overview */}
          <Card className="glass-morphism border-white/10 mb-8 p-6 hover:border-purple-500/30 transition-all royal-card">
            <div className="flex items-center mb-4">
              <Calendar className="h-6 w-6 text-amber-500 mr-2 animate-pulse-slow" />
              <h2 className="text-xl font-bold text-gradient">Weekly Event Schedule</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Current Event</h3>
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-2 animate-pulse"></div>
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
            
            <div className="mt-6 flex items-center p-3 rounded-lg bg-purple-500/5 border border-purple-500/10">
              <DollarSign className="h-5 w-5 text-amber-500 mr-3" />
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
