
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from '@/contexts/auth/AuthContext';

// Temporary placeholder component to confirm the app is working
const AppPlaceholder = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
          SPEND THRONE
        </span>
      </h1>
      <p className="text-xl mb-8 text-center max-w-2xl">
        A persistent, ranked leaderboard where rank = total $ spent.
        The leaderboard never resets. $1 spent equals 1 unit of rank.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-lg p-6 shadow-lg border border-gray-700">
          <h2 className="text-xl font-semibold mb-3 text-yellow-400">Rise Through the Ranks</h2>
          <p className="text-gray-300">
            Your position is determined solely by your monetary contributions. 
            Spend more to climb higher on the leaderboard.
          </p>
        </div>
        
        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-lg p-6 shadow-lg border border-gray-700">
          <h2 className="text-xl font-semibold mb-3 text-yellow-400">Eternal Glory</h2>
          <p className="text-gray-300">
            The leaderboard is persistent. Your contributions are permanent, 
            cementing your legacy in digital prestige.
          </p>
        </div>
        
        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-lg p-6 shadow-lg border border-gray-700">
          <h2 className="text-xl font-semibold mb-3 text-yellow-400">Social Experiment</h2>
          <p className="text-gray-300">
            Explore the dynamics of wealth and competition in this satirical 
            mirror reflecting the extremes of digital ambition.
          </p>
        </div>
      </div>
      
      <div className="mt-10">
        <button className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold rounded-full shadow-lg hover:from-yellow-400 hover:to-orange-400 transition-all">
          Join the Throne
        </button>
      </div>
    </div>
  );
};

function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <div className="min-h-screen bg-black text-white">
          <AppPlaceholder />
          <Toaster />
        </div>
      </AuthProvider>
    </HelmetProvider>
  );
}

export default App;
