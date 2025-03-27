
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import DashboardMain from '@/components/dashboard/DashboardMain';
import { useDashboardWelcome } from '@/components/dashboard/DashboardWelcome';

const Dashboard = () => {
  const { user, updateProfile } = useAuth();
  const navigate = useNavigate();
  
  // Use our custom welcome hook
  useDashboardWelcome(user);

  if (!user) {
    // Redirect to login if not authenticated
    navigate('/auth');
    return null;
  }

  return (
    <DashboardLayout>
      <DashboardMain user={user} updateProfile={updateProfile} />
    </DashboardLayout>
  );
};

export default Dashboard;
