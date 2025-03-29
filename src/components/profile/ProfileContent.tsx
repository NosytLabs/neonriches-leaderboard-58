
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User, Settings, UserProfile, CreditCard, Clock, Wallet, Award, Grape } from 'lucide-react';
import ProfileOverview from '@/components/profile/ProfileOverview';
import ProfileSettings from '@/components/profile/ProfileSettings';
import ProfileSubscription from '@/components/profile/ProfileSubscription';
import ProfileActivity from '@/components/profile/ProfileActivity';
import ProfileWalletView from '@/components/profile/ProfileWalletView';
import ProfileAchievements from '@/components/profile/ProfileAchievements';
import ProfileFAQ from '@/components/profile/ProfileFAQ';

// Import your FAQ items or define them here
const profileFAQItems = [
  {
    question: "How is my rank determined?",
    answer: "Your rank is determined solely by the total amount you've spent on the platform. Each dollar spent equals one point towards your rank."
  },
  {
    question: "What are profile boosts?",
    answer: "Profile boosts are temporary visual enhancements that make your profile stand out. They can include effects like glowing borders, animated backgrounds, and more."
  },
  {
    question: "Can I change my team?",
    answer: "Yes, you can change your team once every 30 days. Teams compete for collective spending rankings and special rewards."
  },
  {
    question: "What are the benefits of upgrading my subscription?",
    answer: "Premium subscriptions offer exclusive profile customizations, discounted boosts, team benefits, and more visual flair to showcase your status."
  },
  {
    question: "How can I get more followers?",
    answer: "Climb the leaderboard rankings, customize your profile with eye-catching effects, and engage with team activities to attract more followers."
  }
];

export type ProfileTab = 'overview' | 'settings' | 'subscription' | 'activity' | 'wallet' | 'achievements' | 'faq';

interface ProfileContentProps {
  user: UserProfile;
  isOwnProfile: boolean;
  activeTab?: ProfileTab;
  onTabChange?: (tab: ProfileTab) => void;
}

const ProfileContent: React.FC<ProfileContentProps> = ({ 
  user, 
  isOwnProfile, 
  activeTab = 'overview',
  onTabChange
}) => {
  const handleTabChange = (tab: string) => {
    if (onTabChange) {
      onTabChange(tab as ProfileTab);
    }
  };
  
  return (
    <Tabs defaultValue={activeTab} onValueChange={handleTabChange}>
      <TabsList className="grid grid-cols-7 mb-6">
        <TabsTrigger value="overview" className="flex items-center gap-1.5">
          <User className="h-4 w-4" />
          <span className="hidden sm:inline">Overview</span>
        </TabsTrigger>
        
        {isOwnProfile && (
          <TabsTrigger value="settings" className="flex items-center gap-1.5">
            <Settings className="h-4 w-4" />
            <span className="hidden sm:inline">Settings</span>
          </TabsTrigger>
        )}
        
        <TabsTrigger value="subscription" className="flex items-center gap-1.5">
          <CreditCard className="h-4 w-4" />
          <span className="hidden sm:inline">Subscription</span>
        </TabsTrigger>
        
        <TabsTrigger value="activity" className="flex items-center gap-1.5">
          <Clock className="h-4 w-4" />
          <span className="hidden sm:inline">Activity</span>
        </TabsTrigger>
        
        {isOwnProfile && (
          <TabsTrigger value="wallet" className="flex items-center gap-1.5">
            <Wallet className="h-4 w-4" />
            <span className="hidden sm:inline">Wallet</span>
          </TabsTrigger>
        )}
        
        <TabsTrigger value="achievements" className="flex items-center gap-1.5">
          <Award className="h-4 w-4" />
          <span className="hidden sm:inline">Achievements</span>
        </TabsTrigger>
        
        <TabsTrigger value="faq" className="flex items-center gap-1.5">
          <Grape className="h-4 w-4" />
          <span className="hidden sm:inline">FAQ</span>
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="overview">
        <ProfileOverview user={user} isOwnProfile={isOwnProfile} />
      </TabsContent>
      
      <TabsContent value="settings">
        {isOwnProfile ? (
          <ProfileSettings user={user} />
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>Settings</CardTitle>
              <CardDescription>This tab is only available on your own profile.</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Button variant="outline" asChild>
                <a href="/profile">Go to your profile</a>
              </Button>
            </CardContent>
          </Card>
        )}
      </TabsContent>
      
      <TabsContent value="subscription">
        <ProfileSubscription user={user} isOwnProfile={isOwnProfile} />
      </TabsContent>
      
      <TabsContent value="activity">
        <ProfileActivity user={user} />
      </TabsContent>
      
      <TabsContent value="wallet">
        {isOwnProfile ? (
          <ProfileWalletView user={user} />
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>Wallet</CardTitle>
              <CardDescription>This tab is only available on your own profile.</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Button variant="outline" asChild>
                <a href="/profile">Go to your profile</a>
              </Button>
            </CardContent>
          </Card>
        )}
      </TabsContent>
      
      <TabsContent value="achievements">
        <ProfileAchievements user={user} />
      </TabsContent>
      
      <TabsContent value="faq">
        <ProfileFAQ faqItems={profileFAQItems} />
      </TabsContent>
    </Tabs>
  );
};

export default ProfileContent;
