
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shell } from '@/components/ui/Shell';

const Events = () => {
  const navigate = useNavigate();

  return (
    <Shell className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Upcoming Events</h1>
      
      <div className="glass-morphism p-8 rounded-lg text-center">
        <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Stay tuned for exciting events in the kingdom! Royal gatherings, spending competitions, and exclusive opportunities are in the works.
        </p>
        <button 
          onClick={() => navigate('/')}
          className="px-4 py-2 bg-royal-gold text-black rounded hover:bg-royal-gold/80 transition"
        >
          Return to Dashboard
        </button>
      </div>
    </Shell>
  );
};

export default Events;
