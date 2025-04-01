
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/contexts/auth';
import { useUser } from '@/hooks/useUser';
import ProfileBanner from '@/components/profile/ProfileBanner';
import ProfileStats from '@/components/profile/ProfileStats';
import ProfileActivities from '@/components/profile/ProfileActivities';
import ProfileSettings from '@/components/profile/ProfileSettings';
import { Separator } from '@/components/ui/separator';
import Footer from '@/components/Footer';
import { formatDate } from '@/utils/dateUtils';
import { ensureStringId } from '@/utils/typeConverters';

const ProfilePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();
  const { userProfile, isLoading, error } = useUser(ensureStringId(id || user?.id || ''));
  
  if (isLoading) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="container mx-auto px-4 py-10 pt-24">
          <div className="text-center py-10">
            <h2 className="text-2xl font-bold mb-4">Loading Profile...</h2>
            <p className="mb-6">Fetching royal profile data.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="container mx-auto px-4 py-10 pt-24">
          <div className="text-center py-10">
            <h2 className="text-2xl font-bold mb-4">Profile Not Found</h2>
            <p className="mb-6">Error: {error.message || String(error)}</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  if (!userProfile) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="container mx-auto px-4 py-10 pt-24">
          <div className="text-center py-10">
            <h2 className="text-2xl font-bold mb-4">Profile Not Found</h2>
            <p className="mb-6">The requested profile does not exist.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="container mx-auto px-4 py-10 pt-24">
        <ProfileBanner user={userProfile} />
        
        <Separator className="my-6" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <ProfileStats user={userProfile} />
            
            <Card className="glass-morphism border-white/10 mt-6">
              <CardContent>
                <Tabs defaultValue="activity" className="space-y-4">
                  <TabsList className="bg-transparent border-white/10">
                    <TabsTrigger value="activity">Activity</TabsTrigger>
                    <TabsTrigger value="settings">Settings</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="activity">
                    <ProfileActivities user={userProfile} />
                  </TabsContent>
                  
                  <TabsContent value="settings">
                    <ProfileSettings user={userProfile} />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="glass-morphism border-white/10">
              <CardContent>
                <h3 className="text-lg font-semibold mb-4">About</h3>
                <p className="text-muted-foreground">
                  Joined on {formatDate(userProfile.joinedDate || userProfile.joinDate || '')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProfilePage;
