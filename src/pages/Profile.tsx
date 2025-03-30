
import React from 'react';
import Layout from '@/components/layout/Layout';
import { useAuth } from '@/contexts/auth';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Shield, Crown, Gem } from 'lucide-react';

const Profile: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <p>Loading profile...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="glass-morphism border-white/10 p-8 rounded-lg mb-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <Avatar className="h-32 w-32 border-4 border-royal-gold">
                <AvatarImage src={user.profileImage} alt={user.username} />
                <AvatarFallback className="text-3xl">{user.username?.charAt(0).toUpperCase()}</AvatarFallback>
              </Avatar>
              
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold mb-2">{user.displayName || user.username}</h1>
                <p className="text-white/70 mb-4">Joined {user.joinedAt ? new Date(user.joinedAt).toLocaleDateString() : 'recently'}</p>
                
                <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-4">
                  <div className="bg-white/10 px-3 py-1 rounded-full flex items-center">
                    <Crown className="h-4 w-4 text-royal-gold mr-2" />
                    <span>Rank #{user.rank || 'N/A'}</span>
                  </div>
                  
                  <div className="bg-white/10 px-3 py-1 rounded-full flex items-center">
                    <Shield className="h-4 w-4 text-royal-purple mr-2" />
                    <span>Team {user.team || 'None'}</span>
                  </div>
                  
                  <div className="bg-white/10 px-3 py-1 rounded-full flex items-center">
                    <Gem className="h-4 w-4 text-royal-crimson mr-2" />
                    <span>Tier: {user.tier || 'Basic'}</span>
                  </div>
                </div>
                
                <Button variant="outline" className="mr-2">Edit Profile</Button>
                <Button variant="secondary">View Certificate</Button>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="glass-morphism border-white/10">
              <CardHeader>
                <CardTitle>Profile Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2">Total Spent: ${user.totalSpent || 0}</p>
                <p className="mb-2">Wallet Balance: ${user.walletBalance || 0}</p>
                <p>Current Tier: {user.tier || 'Basic'}</p>
              </CardContent>
            </Card>
            
            <Card className="glass-morphism border-white/10">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/70">No recent activity to display.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
