
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { UserProfile } from '@/types/user';
import { Megaphone, Link, BarChart3, Eye, Target, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ProfileMarketingSettingsProps {
  user: UserProfile;
  onSave: (updates: Partial<UserProfile>) => void;
}

const ProfileMarketingSettingsSection: React.FC<{ title: string; icon: React.ReactNode; children: React.ReactNode }> = ({ 
  title, 
  icon,
  children 
}) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center">
        <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-purple-500/20 mr-3">
          {icon}
        </div>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <div className="pl-11">
        {children}
      </div>
    </div>
  );
};

const ProfileMarketingSettings: React.FC<ProfileMarketingSettingsProps> = ({ user, onSave }) => {
  const { toast } = useToast();
  
  // Extract social links from user profile
  const initialLinks = user.socialLinks || {};
  
  // Convert socialLinks object to array for easier manipulation
  const [socialLinks, setSocialLinks] = useState<Array<{key: string; value: string}>>(() => {
    const links = [];
    for (const [key, value] of Object.entries(initialLinks)) {
      if (value) links.push({ key, value: value as string });
    }
    // Ensure we have at least one empty link field
    if (links.length === 0) links.push({ key: '', value: '' });
    return links;
  });
  
  const [showProfileViews, setShowProfileViews] = useState(user.settings?.profileVisibility ?? true);
  const [allowExternalLinks, setAllowExternalLinks] = useState(user.settings?.allowProfileLinks ?? true);
  const [trackLinkClicks, setTrackLinkClicks] = useState(true);
  
  const handleAddLink = () => {
    setSocialLinks([...socialLinks, { key: '', value: '' }]);
  };
  
  const handleRemoveLink = (index: number) => {
    const newLinks = [...socialLinks];
    newLinks.splice(index, 1);
    setSocialLinks(newLinks);
  };
  
  const updateLinkKey = (index: number, key: string) => {
    const newLinks = [...socialLinks];
    newLinks[index].key = key;
    setSocialLinks(newLinks);
  };
  
  const updateLinkValue = (index: number, value: string) => {
    const newLinks = [...socialLinks];
    newLinks[index].value = value;
    setSocialLinks(newLinks);
  };
  
  const handleSaveLinks = () => {
    // Convert links array back to object
    const linksObject: Record<string, string> = {};
    socialLinks.forEach(link => {
      if (link.key && link.value) {
        linksObject[link.key] = link.value;
      }
    });
    
    // Save user settings
    const updatedSettings = {
      ...user.settings,
      profileVisibility: showProfileViews,
      allowProfileLinks: allowExternalLinks
    };
    
    onSave({
      socialLinks: linksObject,
      settings: updatedSettings
    });
    
    toast({
      title: "Royal Proclamation Updated",
      description: "Thy marketing preferences have been inscribed in the royal ledger.",
      variant: "default"
    });
  };
  
  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader className="border-b border-white/10">
        <CardTitle className="flex items-center">
          <Megaphone className="h-5 w-5 mr-2 text-purple-400" />
          Royal Billboard Settings
        </CardTitle>
        <CardDescription>
          Configure how thy profile appears to the common folk and fellow nobility
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <Tabs defaultValue="links">
          <TabsList className="glass-morphism mb-4 grid grid-cols-3">
            <TabsTrigger value="links" className="text-sm">
              <Link className="h-4 w-4 mr-2" />
              Links
            </TabsTrigger>
            <TabsTrigger value="visibility" className="text-sm">
              <Eye className="h-4 w-4 mr-2" />
              Visibility
            </TabsTrigger>
            <TabsTrigger value="analytics" className="text-sm">
              <BarChart3 className="h-4 w-4 mr-2" />
              Analytics
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="links" className="space-y-4">
            <ProfileMarketingSettingsSection 
              title="Royal Proclamation Links" 
              icon={<ExternalLink className="h-4 w-4 text-purple-400" />}
            >
              <p className="text-sm text-white/70 mb-4">
                Add external links to showcase on thy profile, directing the peasantry to thy other realms of influence.
              </p>
              
              <div className="space-y-3">
                {socialLinks.map((link, index) => (
                  <div key={index} className="flex gap-2">
                    <div className="w-1/3">
                      <Input 
                        placeholder="Platform (e.g. Twitter)" 
                        value={link.key}
                        onChange={(e) => updateLinkKey(index, e.target.value)}
                        className="bg-black/30 border-white/10"
                      />
                    </div>
                    <div className="flex-1">
                      <Input 
                        placeholder="URL (e.g. https://twitter.com/username)" 
                        value={link.value}
                        onChange={(e) => updateLinkValue(index, e.target.value)}
                        className="bg-black/30 border-white/10"
                      />
                    </div>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="border-white/10 hover:bg-red-900/20 hover:text-red-400"
                      onClick={() => handleRemoveLink(index)}
                      disabled={socialLinks.length <= 1}
                    >
                      &times;
                    </Button>
                  </div>
                ))}
              </div>
              
              <Button 
                variant="outline" 
                size="sm" 
                className="mt-2 border-purple-500/30 text-purple-400 hover:bg-purple-900/20"
                onClick={handleAddLink}
                disabled={socialLinks.length >= 5}
              >
                Add Link
              </Button>
              
              {socialLinks.length >= 5 && (
                <p className="text-xs text-white/50 mt-1">
                  Thou hast reached the maximum of 5 links. Upgrade to Royal tier for more.
                </p>
              )}
            </ProfileMarketingSettingsSection>
          </TabsContent>
          
          <TabsContent value="visibility" className="space-y-4">
            <ProfileMarketingSettingsSection 
              title="Public Profile Visibility" 
              icon={<Eye className="h-4 w-4 text-purple-400" />}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="show-profile-views" className="font-medium">Show Profile Views</Label>
                    <p className="text-sm text-white/60">Display how many subjects have gazed upon thy royal profile</p>
                  </div>
                  <Switch 
                    id="show-profile-views" 
                    checked={showProfileViews}
                    onCheckedChange={setShowProfileViews}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="allow-external-links" className="font-medium">Allow External Links</Label>
                    <p className="text-sm text-white/60">Permit peasants to venture to thy external domains</p>
                  </div>
                  <Switch 
                    id="allow-external-links" 
                    checked={allowExternalLinks}
                    onCheckedChange={setAllowExternalLinks}
                  />
                </div>
              </div>
            </ProfileMarketingSettingsSection>
          </TabsContent>
          
          <TabsContent value="analytics" className="space-y-4">
            <ProfileMarketingSettingsSection 
              title="Royal Analytics" 
              icon={<BarChart3 className="h-4 w-4 text-purple-400" />}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="track-link-clicks" className="font-medium">Track Link Clicks</Label>
                    <p className="text-sm text-white/60">Count how many peasants follow thy royal decrees</p>
                  </div>
                  <Switch 
                    id="track-link-clicks" 
                    checked={trackLinkClicks}
                    onCheckedChange={setTrackLinkClicks}
                  />
                </div>
                
                <div className="glass-morphism border-white/10 p-3 rounded-lg">
                  <h4 className="font-semibold text-sm mb-2 flex items-center">
                    <Target className="h-4 w-4 mr-2 text-purple-400" />
                    View Analytics
                  </h4>
                  <p className="text-xs text-white/70 mb-3">
                    Examine detailed statistics of thy royal influence over the common folk.
                  </p>
                  
                  {user.tier === 'pro' ? (
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="glass-morphism border-white/10 p-2 rounded-lg">
                        <div className="text-lg font-bold">{user.profileViews || 0}</div>
                        <div className="text-xs text-white/60">Profile Views</div>
                      </div>
                      <div className="glass-morphism border-white/10 p-2 rounded-lg">
                        <div className="text-lg font-bold">{user.profileClicks || 0}</div>
                        <div className="text-xs text-white/60">Link Clicks</div>
                      </div>
                      <div className="glass-morphism border-white/10 p-2 rounded-lg">
                        <div className="text-lg font-bold">
                          {user.profileViews && user.profileClicks 
                            ? Math.round((user.profileClicks / user.profileViews) * 100) 
                            : 0}%
                        </div>
                        <div className="text-xs text-white/60">Click Rate</div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center bg-gradient-to-r from-purple-900/20 to-purple-700/20 p-3 rounded-lg border border-purple-500/20">
                      <p className="text-sm text-purple-300">
                        Analytics are reserved for Pro tier nobles (Spend $25+)
                      </p>
                      <p className="text-xs text-white/50 mt-1">
                        Upgrade thy status to view detailed insights
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </ProfileMarketingSettingsSection>
          </TabsContent>
        </Tabs>
        
        <div className="mt-6 border-t border-white/10 pt-4 flex justify-end">
          <Button 
            variant="default" 
            onClick={handleSaveLinks}
            className="bg-gradient-to-r from-purple-700 to-purple-500 hover:opacity-90"
          >
            Save Royal Proclamation Settings
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileMarketingSettings;
