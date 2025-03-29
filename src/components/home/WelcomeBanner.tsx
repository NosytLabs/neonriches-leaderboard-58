
import React from 'react';
import { useAuth } from '@/contexts/auth';
import { Sparkles } from 'lucide-react';

const WelcomeBanner: React.FC = () => {
  const { user } = useAuth();
  
  return (
    <div className="glass-morphism rounded-lg p-6 mb-6 border border-white/10">
      <div className="flex items-center mb-4">
        <Sparkles className="text-royal-gold mr-2 h-6 w-6" />
        <h2 className="text-2xl font-bold">Welcome to SpendThrone</h2>
      </div>
      
      {user ? (
        <p className="text-white/80">
          Greetings, {user.displayName || user.username}! Your current rank is #{user.rank}. 
          Continue spending to climb the royal hierarchy!
        </p>
      ) : (
        <p className="text-white/80">
          Welcome to the royal court! Sign in to begin your ascent through the ranks.
        </p>
      )}
    </div>
  );
};

export default WelcomeBanner;
