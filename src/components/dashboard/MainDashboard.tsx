
import React from 'react';
import { DashboardHeader } from '@/components/ui/dashboard-header';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface MainDashboardProps {
  user: {
    name: string;
    avatar: string;
  };
  children?: React.ReactNode;
  className?: string;
}

export function MainDashboard({ 
  user,
  children,
  className
}: MainDashboardProps) {
  const handleSettingsClick = () => {
    // Navigate to settings or open settings modal
    console.log('Settings clicked');
  };

  return (
    <div className={cn(
      "flex flex-col min-h-screen bg-background",
      className
    )}>
      <DashboardHeader 
        user={user} 
        onSettingsClick={handleSettingsClick} 
      />
      
      <main className="flex-1 container mx-auto p-4 md:p-6">
        {children || (
          <Card className="p-4 glass-morphism border-white/10">
            <h2 className="text-xl font-bold mb-4">Welcome to your dashboard</h2>
            <p className="text-muted-foreground">
              This is a sample dashboard component. Add your content here.
            </p>
          </Card>
        )}
      </main>
    </div>
  );
}

export default MainDashboard;
