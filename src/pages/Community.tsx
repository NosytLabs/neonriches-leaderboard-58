import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shell } from '@/components/ui/shell';

const Community = () => {
  const navigate = useNavigate();

  return (
    <Shell className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Community</h1>
      
      <div className="glass-morphism p-8 rounded-lg text-center">
        <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
        <p className="text-lg text-muted-foreground mb-6">
          The community feature is currently under construction. Connect with fellow royals, share your achievements, and flaunt your status soon!
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

export default Community;
