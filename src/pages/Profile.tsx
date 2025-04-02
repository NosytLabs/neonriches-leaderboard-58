import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { useUser } from '@/hooks/useUser';
import { ProfileSettings } from '@/components/profile/ProfileSettings';
import { ProfileLinks } from '@/components/profile/ProfileLinks';
import { ProfileImages } from '@/components/profile/ProfileImages';
import { ProfileBanner } from '@/components/profile/ProfileBanner';
import { ProfileTierCard } from '@/components/profile/ProfileTierCard';
import { ProfileBoosts } from '@/components/profile/ProfileBoosts';
import { ProfileCosmetics } from '@/components/profile/ProfileCosmetics';
import { ProfileActivity } from '@/components/profile/ProfileActivity';
import { ProfileAchievements } from '@/components/profile/ProfileAchievements';
import { ProfileSocialLinks } from '@/components/profile/ProfileSocialLinks';
import { ProfileSettingsButton } from '@/components/profile/ProfileSettingsButton';
import { ProfileEditor } from '@/components/profile/ProfileEditor';
import { ProfileEditorButton } from '@/components/profile/ProfileEditorButton';
import { ProfileCertificate } from '@/components/profile/ProfileCertificate';
import { ProfileCertificateButton } from '@/components/profile/ProfileCertificateButton';
import { ProfileSpending } from '@/components/profile/ProfileSpending';
import { ProfileTeam } from '@/components/profile/ProfileTeam';
import { ProfileTeamButton } from '@/components/profile/ProfileTeamButton';
import { ProfileFollowers } from '@/components/profile/ProfileFollowers';
import { ProfileFollowing } from '@/components/profile/ProfileFollowing';
import { ProfileMessages } from '@/components/profile/ProfileMessages';
import { ProfileMessagesButton } from '@/components/profile/ProfileMessagesButton';
import { ProfileBadges } from '@/components/profile/ProfileBadges';
import { ProfileBadgesButton } from '@/components/profile/ProfileBadgesButton';
import { ProfileVisibility } from '@/components/profile/ProfileVisibility';
import { ProfileVisibilityButton } from '@/components/profile/ProfileVisibilityButton';
import { ProfileTheme } from '@/components/profile/ProfileTheme';
import { ProfileThemeButton } from '@/components/profile/ProfileThemeButton';
import { ProfileNotifications } from '@/components/profile/ProfileNotifications';
import { ProfileNotificationsButton } from '@/components/profile/ProfileNotificationsButton';
import { ProfileLanguage } from '@/components/profile/ProfileLanguage';
import { ProfileLanguageButton } from '@/components/profile/ProfileLanguageButton';
import { ProfileShameAlerts } from '@/components/profile/ProfileShameAlerts';
import { ProfileShameAlertsButton } from '@/components/profile/ProfileShameAlertsButton';
import { ProfilePublicProfile } from '@/components/profile/ProfilePublicProfile';
import { ProfilePublicProfileButton } from '@/components/profile/ProfilePublicProfileButton';
import { ProfileSpendingButton } from '@/components/profile/ProfileSpendingButton';
import { ProfileSettingsCard } from '@/components/profile/ProfileSettingsCard';
import { ProfileSocialLinksCard } from '@/components/profile/ProfileSocialLinksCard';
import { ProfileImagesCard } from '@/components/profile/ProfileImagesCard';
import { ProfileBoostsCard } from '@/components/profile/ProfileBoostsCard';
import { ProfileCosmeticsCard } from '@/components/profile/ProfileCosmeticsCard';
import { ProfileActivityCard } from '@/components/profile/ProfileActivityCard';
import { ProfileAchievementsCard } from '@/components/profile/ProfileAchievementsCard';
import { ProfileFollowersCard } from '@/components/profile/ProfileFollowersCard';
import { ProfileFollowingCard } from '@/components/profile/ProfileFollowingCard';
import { ProfileMessagesCard } from '@/components/profile/ProfileMessagesCard';
import { ProfileBadgesCard } from '@/components/profile/ProfileBadgesCard';
import { ProfileVisibilityCard } from '@/components/profile/ProfileVisibilityCard';
import { ProfileThemeCard } from '@/components/profile/ProfileThemeCard';
import { ProfileNotificationsCard } from '@/components/profile/ProfileNotificationsCard';
import { ProfileLanguageCard } from '@/components/profile/ProfileLanguageCard';
import { ProfileShameAlertsCard } from '@/components/profile/ProfileShameAlertsCard';
import { ProfilePublicProfileCard } from '@/components/profile/ProfilePublicProfileCard';
import { ProfileSpendingCard } from '@/components/profile/ProfileSpendingCard';
import { ProfileTeamCard } from '@/components/profile/ProfileTeamCard';
import { ProfileCertificateCard } from '@/components/profile/ProfileCertificateCard';
import { ProfileEditorCard } from '@/components/profile/ProfileEditorCard';
import { BasicProfileSettings } from '@/components/profile/BasicProfileSettings';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';
import AppLayout from '@/layouts/AppLayout';

const Profile = () => {
  const { username } = useParams<{ username: string }>();
  const { toast } = useToast();
  const { user: authUser, updateUserProfile } = useAuth();
  const { userProfile: user, isLoading, error, isOwnProfile } = useUser(username);

  const handleSaveBasicSettings = async (data: Partial<any>): Promise<boolean> => {
    try {
      const success = await updateUserProfile(data);
      if (success) {
        toast({
          title: "Profile Updated",
          description: "Your basic profile settings have been updated successfully.",
        });
        return true;
      } else {
        toast({
          title: "Update Failed",
          description: "Something went wrong. Please try again.",
          variant: "destructive"
        });
        return false;
      }
    } catch (error) {
      toast({
        title: "Update Failed",
        description: "An error occurred while updating your profile.",
        variant: "destructive"
      });
      return false;
    }
  };

  if (isLoading) {
    return (
      <AppLayout>
        <div className="container mx-auto px-4 py-12">
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-8 text-center">
              Loading profile data...
            </CardContent>
          </Card>
        </div>
      </AppLayout>
    );
  }

  if (error) {
    return (
      <AppLayout>
        <div className="container mx-auto px-4 py-12">
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-8 text-center">
              Error: {error.message}
            </CardContent>
          </Card>
        </div>
      </AppLayout>
    );
  }

  if (!user) {
    return (
      <AppLayout>
        <div className="container mx-auto px-4 py-12">
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-8 text-center">
              User not found.
            </CardContent>
          </Card>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-12">
        <ProfileBanner user={user} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <BasicProfileSettings user={user} onSave={handleSaveBasicSettings} />
          </div>

          <div className="space-y-6">
            <ProfileTierCard user={user} />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Profile;
