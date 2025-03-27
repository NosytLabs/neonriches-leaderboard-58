
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import DashboardMain from '@/components/dashboard/DashboardMain';
import { DashboardWelcome } from '@/components/dashboard/DashboardWelcome';
import ThroneBackground from '@/components/ui/throne-background';

const Dashboard = () => {
  const { user, loading, updateProfile } = useAuth();

  if (loading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-royal-gold border-t-transparent"></div>
          <p className="text-white/70 text-lg">Loading royal experience...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  // Map team to appropriate background variant
  const getBackgroundVariant = () => {
    if (user.team === 'red') return 'purple';
    if (user.team === 'green') return 'gold';
    if (user.team === 'blue') return 'blue';
    return 'default';
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ThroneBackground variant={getBackgroundVariant()} density="medium" />
      
      <DashboardLayout user={user}>
        <div className="mb-8">
          <DashboardWelcome user={user} />
        </div>
        
        <DashboardMain user={user} updateProfile={updateProfile} />
      </DashboardLayout>
    </div>
  );
};

export default Dashboard;
