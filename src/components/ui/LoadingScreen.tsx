
import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-12 w-12 text-royal-gold animate-spin" />
        <p className="text-white/70 text-sm">Loading royal experience...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
