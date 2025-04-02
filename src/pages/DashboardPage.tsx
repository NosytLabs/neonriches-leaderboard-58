
import React from 'react';
import { MainDashboard } from '@/components/dashboard/MainDashboard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/hooks/useAuth';

export function DashboardPage() {
  const { user } = useAuth();
  
  // If no user is available, create a default user for demo purposes
  const dashboardUser = user ? {
    name: user.displayName || user.username || 'User',
    avatar: user.profileImage || ''
  } : {
    name: 'Demo User',
    avatar: ''
  };

  return (
    <MainDashboard user={dashboardUser}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <Card className="glass-morphism border-white/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Profile Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Welcome back, {dashboardUser.name}!
            </p>
          </CardContent>
        </Card>
        
        <Card className="glass-morphism border-white/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Current Rank</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Your current ranking status
            </p>
          </CardContent>
        </Card>
        
        <Card className="glass-morphism border-white/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Team Status</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Your team's current performance
            </p>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="w-full grid grid-cols-3 lg:grid-cols-5 mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="activities">Activities</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="team" className="hidden lg:inline-flex">Team</TabsTrigger>
          <TabsTrigger value="settings" className="hidden lg:inline-flex">Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview">
          <Card className="glass-morphism border-white/10">
            <CardHeader>
              <CardTitle>Dashboard Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Content for the Overview tab</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="activities">
          <Card className="glass-morphism border-white/10">
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Content for the Activities tab</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="achievements">
          <Card className="glass-morphism border-white/10">
            <CardHeader>
              <CardTitle>Your Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Content for the Achievements tab</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="team">
          <Card className="glass-morphism border-white/10">
            <CardHeader>
              <CardTitle>Team Dashboard</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Content for the Team tab</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="settings">
          <Card className="glass-morphism border-white/10">
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Content for the Settings tab</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </MainDashboard>
  );
}

export default DashboardPage;
