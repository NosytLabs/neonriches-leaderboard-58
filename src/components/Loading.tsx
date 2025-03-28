
import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="flex flex-col items-center">
        <div className="h-16 w-16 border-4 border-t-royal-gold border-r-royal-gold border-b-transparent border-l-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-xl font-medieval text-royal-gold">Loading the Royal Experience...</p>
      </div>
    </div>
  );
};

export default Loading;
