
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CurrentEvent from '@/components/events/CurrentEvent';
import UpcomingEvents from '@/components/events/UpcomingEvents';

const EventsPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      
      <main className="flex-1 pt-24 pb-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          <h1 className="text-3xl font-bold text-center royal-gradient">Royal Events</h1>
          
          <CurrentEvent />
          
          <UpcomingEvents />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EventsPage;
