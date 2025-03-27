
import React from "react";
import { useLocation } from "react-router-dom";
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 -left-1/4 w-96 h-96 rounded-full bg-team-red/20 filter blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 -right-1/4 w-96 h-96 rounded-full bg-team-blue/20 filter blur-[100px] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-3/4 left-1/3 w-72 h-72 rounded-full bg-team-green/20 filter blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="glass-morphism rounded-xl p-8 md:p-12 w-full max-w-md text-center relative z-10 animate-fade-in">
        <div className="w-24 h-24 rounded-full glass-morphism border border-white/20 flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl font-bold text-gradient">404</span>
        </div>
        
        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-gradient">Page Not Found</h1>
        
        <p className="text-white/70 mb-8">
          The requested path <span className="font-mono bg-white/5 px-2 py-0.5 rounded text-white">{location.pathname}</span> could not be found. Perhaps you need to pay more to unlock this content?
        </p>
        
        <Button 
          className="bg-gradient-to-r from-team-red via-team-green to-team-blue hover:opacity-90 text-white w-full"
          onClick={() => window.location.href = '/'}
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Leaderboard
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
