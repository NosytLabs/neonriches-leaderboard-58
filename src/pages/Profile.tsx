
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { useAuth, UserProfile } from '@/contexts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Shield, Crown, Gem, Link, Rocket } from 'lucide-react';
import ProfileTierCard from '@/components/profile/ProfileTierCard';
import ProfileContent from '@/components/profile/ProfileContent';
import { useNavigate } from 'react-router-dom';
import { SEO } from '@/components/seo/SEO';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

// Import the ProfileTab type
import { ProfileTab } from '@/components/profile/ProfileContent';

const Profile: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<ProfileTab>('overview');

  if (!user) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <p>Loading profile...</p>
        </div>
      </Layout>
    );
  }

  const handleUpgradeTier = () => {
    navigate('/wallet');
  };

  return (
    <Layout>
      <SEO 
        title={`${user.displayName || user.username}'s Profile | SpendThrone`}
        description={`View ${user.displayName || user.username}'s royal profile on SpendThrone. Current rank: #${user.rank || 'N/A'}, Tier: ${user.tier || 'Basic'}.`}
        keywords={['profile', 'royal profile', 'spend throne', 'leaderboard', user.username]}
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="glass-morphism border-white/10 p-6 rounded-lg mb-8">
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

                  <div className="bg-white/10 px-3 py-1 rounded-full flex items-center">
                    <Link className="h-4 w-4 text-blue-400 mr-2" />
                    <span>Links: {user.socialLinks ? Object.keys(user.socialLinks).length : 0}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <Button variant="outline" className="mr-2">Edit Profile</Button>
                  <Button variant="secondary">View Certificate</Button>
                  <Button 
                    variant="royal" 
                    className="bg-gradient-to-r from-royal-gold-dark to-royal-gold text-black"
                  >
                    <Rocket className="h-4 w-4 mr-2" />
                    Boost Profile
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Billboard Alert - Inform users about the marketing potential */}
          <Alert className="mb-6 bg-gradient-to-r from-royal-gold/20 to-royal-purple/20 border-royal-gold/30">
            <Rocket className="h-5 w-5 text-royal-gold" />
            <AlertTitle>Your Profile is Your Billboard</AlertTitle>
            <AlertDescription>
              Your profile serves as a virtual billboard for your brand, social links, and content. 
              Higher rank = more visibility across SpendThrone. Add links and boost your profile to maximize your marketing potential!
            </AlertDescription>
          </Alert>
          
          {/* Profile Content */}
          <div className="mb-6">
            <ProfileContent 
              user={user} 
              isOwnProfile={true} 
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
