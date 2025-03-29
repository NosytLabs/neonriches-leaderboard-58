
import React from 'react';
import { Crown } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <div className="text-center">
        <Crown className="h-16 w-16 text-royal-gold animate-pulse mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-white mb-2">Loading Royal Experience</h2>
        <p className="text-gray-400">Preparing your noble journey...</p>
        <div className="mt-4 w-48 h-2 bg-gray-800 rounded-full overflow-hidden mx-auto">
          <div className="h-full bg-gradient-to-r from-royal-crimson via-royal-gold to-royal-navy animate-progress-indeterminate"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
