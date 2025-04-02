import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Link, BarChart, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useFeatureAccess } from '@/hooks/use-feature-access';
import { UserProfile } from '@/types/user';
import { useMarketing } from '@/hooks/use-marketing';

// Create an interface to define the structure of profile boost data
interface ProfileBoost {
  id: string;
  type: string;
  level: number;
  startDate: string;
  endDate: string;
  isActive: boolean;
}

// Hook to handle profile boosts (simplified version)
const useProfileBoost = (user: UserProfile) => {
  // Extract active boosts from user data
  const activeBoosts = user?.profileBoosts?.filter(boost => 
    boost.isActive && new Date(boost.endDate) > new Date()
  ) || [];
  
  // Placeholder for available boosts
  const availableBoosts = [];
  
  return { activeBoosts, availableBoosts };
};

interface ProfileMarketingFeaturesProps {
  user: UserProfile;
  onShowBoostModal?: () => void;
  onShowUpgradeModal?: () => void;
}

const ProfileMarketingFeatures: React.FC<ProfileMarketingFeaturesProps> = ({
  user,
  onShowBoostModal,
  onShowUpgradeModal
}) => {
  const { toast } = useToast();
  const { activeBoosts, availableBoosts } = useProfileBoost(user);
  const { hasAccess } = useFeatureAccess();
  const { getUserMarketingFeatures } = useMarketing();
  
  const [loading, setLoading] = useState(false);
  
  // Check if the user has marketing features
  const hasBasicMarketing = hasAccess('marketing-basic');
  const hasPremiumMarketing = hasAccess('marketing-premium');
  const hasRoyalMarketing = hasAccess('marketing-royal');
  
  // Get user's marketing features
  const marketingFeatures = getUserMarketingFeatures(user);
  
  // Check if user has any active boost effects
  const hasActiveBoost = activeBoosts && activeBoosts.length > 0;
  
  // Handle boost feature
  const handleBoostProfile = () => {
    if (onShowBoostModal) {
      onShowBoostModal();
    } else {
      toast({
        title: "Boost Feature",
        description: "Profile boost feature is coming soon!"
      });
    }
  };
  
  // Handle upgrade button
  const handleUpgrade = () => {
    if (onShowUpgradeModal) {
      onShowUpgradeModal();
    } else {
      toast({
        title: "Upgrade Account",
        description: "Upgrade feature is coming soon!"
      });
    }
  };
  
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Marketing & Visibility</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Profile Links */}
        <Card className="glass-morphism border-white/10">
          <CardContent className="p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Link className="h-5 w-5 text-indigo-400" />
                <span className="font-medium">Profile Links</span>
              </div>
              {hasBasicMarketing && (
                <span className="text-xs bg-indigo-900/30 text-indigo-300 px-2 py-1 rounded-full">Enabled</span>
              )}
            </div>
            
            <p className="text-sm text-white/70">
              {marketingFeatures.profileLinks > 0 
                ? `You can add up to ${marketingFeatures.profileLinks} links to your profile.` 
                : "Unlock the ability to add links to your profile."}
            </p>
            
            {!hasBasicMarketing && (
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full mt-2"
                onClick={handleUpgrade}
              >
                Unlock Feature
              </Button>
            )}
          </CardContent>
        </Card>
        
        {/* Analytics */}
        <Card className="glass-morphism border-white/10">
          <CardContent className="p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BarChart className="h-5 w-5 text-blue-400" />
                <span className="font-medium">Analytics</span>
              </div>
              {marketingFeatures.analytics && (
                <span className="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded-full">Enabled</span>
              )}
            </div>
            
            <p className="text-sm text-white/70">
              {marketingFeatures.analytics 
                ? "Track your profile visitors and engagement." 
                : "Unlock detailed analytics for your profile."}
            </p>
            
            {!marketingFeatures.analytics && (
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full mt-2"
                onClick={handleUpgrade}
              >
                Unlock Feature
              </Button>
            )}
          </CardContent>
        </Card>
        
        {/* Profile Customization */}
        <Card className="glass-morphism border-white/10">
          <CardContent className="p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-amber-400" />
                <span className="font-medium">Customization</span>
              </div>
              {marketingFeatures.customization && (
                <span className="text-xs bg-amber-900/30 text-amber-300 px-2 py-1 rounded-full">Enabled</span>
              )}
            </div>
            
            <p className="text-sm text-white/70">
              {marketingFeatures.customization 
                ? "Customize your profile with themes and effects." 
                : "Unlock advanced profile customization options."}
            </p>
            
            {!marketingFeatures.customization && (
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full mt-2"
                onClick={handleUpgrade}
              >
                Unlock Feature
              </Button>
            )}
          </CardContent>
        </Card>
        
        {/* Profile Protection */}
        <Card className="glass-morphism border-white/10">
          <CardContent className="p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-400" />
                <span className="font-medium">Protection</span>
              </div>
              {marketingFeatures.protection > 0 && (
                <span className="text-xs bg-green-900/30 text-green-300 px-2 py-1 rounded-full">
                  {marketingFeatures.protection}h
                </span>
              )}
            </div>
            
            <p className="text-sm text-white/70">
              {marketingFeatures.protection > 0 
                ? `Protection from mockery for ${marketingFeatures.protection} hours.` 
                : "Protect yourself from mockery and other attacks."}
            </p>
            
            {marketingFeatures.protection === 0 && (
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full mt-2"
                onClick={handleUpgrade}
              >
                Unlock Feature
              </Button>
            )}
          </CardContent>
        </Card>
      </div>
      
      {/* Boost Your Profile */}
      <Card className="glass-morphism border-white/10 bg-gradient-to-r from-indigo-900/30 to-purple-900/30">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-royal-gold" />
                Boost Your Profile
              </h3>
              <p className="text-sm text-white/70 mt-1">
                {hasActiveBoost 
                  ? `You have ${activeBoosts.length} active boost${activeBoosts.length > 1 ? 's' : ''}.` 
                  : "Make your profile stand out with visual enhancements."}
              </p>
            </div>
            
            <Button 
              variant="outline" 
              className={`${hasActiveBoost ? 'bg-royal-gold/10 text-royal-gold hover:bg-royal-gold/20' : ''}`}
              onClick={handleBoostProfile}
              disabled={loading}
            >
              {hasActiveBoost ? 'Manage Boosts' : 'Boost Profile'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileMarketingFeatures;
