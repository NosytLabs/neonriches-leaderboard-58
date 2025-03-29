
import React from 'react';
import { Skeleton } from './skeleton';

const LoadingScreen: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background text-foreground">
      <Skeleton className="w-[200px] h-[50px] rounded-md mb-4" />
      <p className="text-muted-foreground">Loading...</p>
    </div>
  );
};

export default LoadingScreen;
