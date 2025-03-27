
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CurrentEvent from '@/components/events/CurrentEvent';
import PokePartyTargets from '@/components/events/PokePartyTargets';
import UpcomingEvents from '@/components/events/UpcomingEvents';
import EventBenefits from '@/components/events/EventBenefits';

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
      
      <main className="flex-1 pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gradient mb-2">P2W Events</h1>
            <p className="text-white/70">
              Special time-limited events to shake up the leaderboard.
            </p>
          </div>
          
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
