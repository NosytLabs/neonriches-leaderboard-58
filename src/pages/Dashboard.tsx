
import React, { useState, useEffect } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import DashboardMain from '@/components/dashboard/DashboardMain';
import ThroneBackground from '@/components/ui/throne-background';
import { useAuth } from '@/contexts/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();
  // State for background appearance
  const [backgroundVariant, setBackgroundVariant] = useState<'default' | 'royal' | 'dark' | 'light'>('royal');

  // Effect to handle background change based on spending tier or other factors
  useEffect(() => {
    // Example logic - in real app, this would be based on user data
    const userSpendingTier = localStorage.getItem('userSpendingTier');
    
    if (userSpendingTier === 'whale' || userSpendingTier === 'shark') {
      setBackgroundVariant('royal');
    } else if (userSpendingTier === 'dolphin' || userSpendingTier === 'fish') {
      setBackgroundVariant('dark');
    } else {
      setBackgroundVariant('default');
    }
  }, []);

  return (
    <DashboardLayout>
      <div className="relative min-h-[calc(100vh-4rem)]">
        <ThroneBackground variant={backgroundVariant} particles density="medium" />
        <DashboardMain user={user} updateProfile={useAuth().updateProfile} />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
