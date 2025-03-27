
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import CurrentEvent from '@/components/events/CurrentEvent';
import EventStats from '@/components/events/EventStats';
import PokePartyTargets from '@/components/events/PokePartyTargets';
import UpcomingEvents from '@/components/events/UpcomingEvents';
import EventBenefits from '@/components/events/EventBenefits';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/hooks/use-toast';

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

  return (
    <div className="min-h-screen flex flex-col bg-background throne-bg text-foreground">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-24">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-2 royal-gradient">Royal Events</h1>
          <p className="text-white/70 mb-8">
            Participate in exclusive events to boost your rank and demonstrate your spending prowess.
          </p>
          
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
