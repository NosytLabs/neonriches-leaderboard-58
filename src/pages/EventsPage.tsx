
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CurrentEvent from '@/components/events/CurrentEvent';
import { ToastProvider } from '@/contexts/ToastContext';

const EventsPage = () => {
  return (
    <ToastProvider>
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />
        
        <main className="flex-1 pt-24 pb-12 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto space-y-8">
            <h1 className="text-3xl font-bold text-center royal-gradient">Royal Events</h1>
            
            <CurrentEvent />
            
            <div className="glass-morphism border-white/10 p-6 rounded-lg text-center mt-12">
              <h3 className="text-xl font-bold royal-gradient mb-2">Weekly Featured Events</h3>
              <p className="text-white/70">
                Each week brings a new opportunity to participate in our royal events with special discounts and features.
                Check back every Monday for new offers!
              </p>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </ToastProvider>
  );
};

export default EventsPage;
