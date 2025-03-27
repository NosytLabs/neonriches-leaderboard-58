
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CurrentEvent from '@/components/events/CurrentEvent';
import PokePartyTargets from '@/components/events/PokePartyTargets';
import UpcomingEvents from '@/components/events/UpcomingEvents';
import EventBenefits from '@/components/events/EventBenefits';
import EventStats from '@/components/events/EventStats';
import ThroneBackground from '@/components/ui/throne-background';

const Events = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    // Redirect to login if not authenticated
    navigate('/auth');
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      
      <main className="flex-1 pt-24 pb-12 px-6 relative">
        <div className="absolute inset-0 -z-10">
          <ThroneBackground variant="purple" density="low" animate={true} />
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gradient mb-2">Royal Events</h1>
            <p className="text-white/70">
              Special time-limited competitions to shake up the realm's hierarchy.
            </p>
          </div>
          
          <EventStats />
          <CurrentEvent />
          <PokePartyTargets />
          <UpcomingEvents />
          <EventBenefits />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Events;
