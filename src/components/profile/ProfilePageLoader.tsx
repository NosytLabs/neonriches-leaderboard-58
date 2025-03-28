
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Crown, AlertTriangle } from 'lucide-react';

export const ProfileLoader: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 pt-24">
      <Card className="glass-morphism border-white/10">
        <CardContent className="p-8 flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center animate-pulse mb-4">
            <Crown className="h-8 w-8 text-royal-gold/50" />
          </div>
          <div className="h-6 bg-white/10 rounded-full w-48 animate-pulse mb-4"></div>
          <div className="h-4 bg-white/10 rounded-full w-64 animate-pulse"></div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            <div className="h-20 bg-white/5 rounded-lg animate-pulse"></div>
            <div className="h-20 bg-white/5 rounded-lg animate-pulse"></div>
            <div className="h-20 bg-white/5 rounded-lg animate-pulse"></div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export const ProfileNotFound: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 pt-24">
      <Card className="glass-morphism border-white/10">
        <CardContent className="p-8 flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mb-4">
            <AlertTriangle className="h-8 w-8 text-red-400" />
          </div>
          <h3 className="text-xl font-bold mb-2">Royal Subject Not Found</h3>
          <p className="text-white/70 text-center max-w-md">
            The noble you seek does not exist in our royal records. 
            They may have changed their name or haven't yet joined the kingdom.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
