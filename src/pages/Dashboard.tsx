
import React from 'react';
import Shell from '@/components/Shell';
import EnhancedDashboard from '@/components/dashboard/EnhancedDashboard';
import { useAuth } from '@/hooks/useAuth';
import { Navigate } from 'react-router-dom';
import PageSEO from '@/components/common/PageSEO';

const Dashboard: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth();
  
  if (isLoading) {
    return (
      <Shell>
        <div className="flex justify-center items-center min-h-[50vh]">
          <div className="animate-spin h-8 w-8 border-4 border-royal-gold border-t-transparent rounded-full"></div>
        </div>
      </Shell>
    );
  }
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return (
    <Shell>
      <PageSEO 
        title="Royal Dashboard - SpendThrone" 
        description="View your royal status, milestones, and referral rewards in your SpendThrone dashboard."
      />
      <EnhancedDashboard />
    </Shell>
  );
};

export default Dashboard;
