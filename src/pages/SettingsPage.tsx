import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Settings, User, Bell, Lock, Palette, Shield } from 'lucide-react';
import useAuth from '@/hooks/useAuth';

const SettingsPage: React.FC = () => {
  const { user } = useAuth();
  
  if (!user) {
    return (
      <MainLayout>
        <div className="container mx-auto py-8">
          <Card className="glass-morphism border-white/10">
            <CardHeader>
              <CardTitle>Authentication Required</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Please log in to access your settings.</p>
            </CardContent>
          </Card>
        </div>
      </MainLayout>
    );
  }
  
  return (
    <MainLayout>
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 flex items-center">
            <Settings className="mr-2" />
            Settings
          </h1>
          
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="mb-8 grid grid-cols-5 w-full">
              <TabsTrigger value="profile" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Profile</span>
              </TabsTrigger>
              <TabsTrigger value="account" className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>Account</span>
              </TabsTrigger>
              <TabsTrigger value="notifications" className="flex items-center gap-2">
                <Bell className="h-4 w-4" />
                <span>Notifications</span>
              </TabsTrigger>
              <TabsTrigger value="appearance" className="flex items-center gap-2">
                <Palette className="h-4 w-4" />
                <span>Appearance</span>
              </TabsTrigger>
              <TabsTrigger value="security" className="flex items-center gap-2">
                <Lock className="h-4 w-4" />
                <span>Security</span>
              </TabsTrigger>
            </TabsList>
            
            {/* Profile Settings */}
            <TabsContent value="profile">
              <Card className="glass-morphism border-white/10">
                <CardHeader>
                  <CardTitle>Profile Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="displayName">Display Name</Label>
                    <Input 
                      id="displayName" 
                      className="glass-morphism border-white/10"
                      defaultValue={user.displayName}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <Input 
                      id="username" 
                      className="glass-morphism border-white/10"
                      defaultValue={user.username}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <textarea 
                      id="bio"
                      className="w-full min-h-[100px] p-2 rounded-md glass-morphism border-white/10 bg-transparent"
                      defaultValue={user.bio}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="team">Team</Label>
                    <Select defaultValue={user.team}>
                      <SelectTrigger className="glass-morphism border-white/10">
                        <SelectValue placeholder="Select a team" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="red">Red</SelectItem>
                        <SelectItem value="blue">Blue</SelectItem>
                        <SelectItem value="green">Green</SelectItem>
                        <SelectItem value="gold">Gold</SelectItem>
                        <SelectItem value="purple">Purple</SelectItem>
                        <SelectItem value="none">None</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Profile Visibility</p>
                        <p className="text-sm text-muted-foreground">
                          Control who can see your profile
                        </p>
                      </div>
                      <Select defaultValue={user.settings.profileVisibility}>
                        <SelectTrigger className="w-[120px] glass-morphism border-white/10">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="public">Public</SelectItem>
                          <SelectItem value="private">Private</SelectItem>
                          <SelectItem value="friends">Friends</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Show Rank</p>
                        <p className="text-sm text-muted-foreground">
                          Display your rank on your profile
                        </p>
                      </div>
                      <Switch defaultChecked={user.settings.showRank} />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Show Spending</p>
                        <p className="text-sm text-muted-foreground">
                          Display your spending on your profile
                        </p>
                      </div>
                      <Switch defaultChecked={user.settings.showSpending} />
                    </div>
                  </div>
                  
                  <Button className="w-full">Save Profile Settings</Button>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Account Settings */}
            <TabsContent value="account">
              <Card className="glass-morphism border-white/10">
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email"
                      className="glass-morphism border-white/10"
                      defaultValue={user.email}
                    />
                  </div>
                  
                  <Button className="w-full">Save Account Settings</Button>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Other tabs would be similarly implemented */}
            <TabsContent value="notifications">
              <Card className="glass-morphism border-white/10">
                <CardHeader>
                  <CardTitle>Notification Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Enable Notifications</p>
                        <p className="text-sm text-muted-foreground">
                          Receive notifications in the app
                        </p>
                      </div>
                      <Switch defaultChecked={user.settings.notifications} />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Email Notifications</p>
                        <p className="text-sm text-muted-foreground">
                          Receive notifications via email
                        </p>
                      </div>
                      <Switch defaultChecked={user.settings.emailNotifications} />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Rank Change Alerts</p>
                        <p className="text-sm text-muted-foreground">
                          Get notified when your rank changes
                        </p>
                      </div>
                      <Switch defaultChecked={user.settings.rankChangeAlerts} />
                    </div>
                  </div>
                  
                  <Button className="w-full">Save Notification Settings</Button>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="appearance">
              <Card className="glass-morphism border-white/10">
                <CardHeader>
                  <CardTitle>Appearance Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Dark Mode</p>
                        <p className="text-sm text-muted-foreground">
                          Enable dark mode theme
                        </p>
                      </div>
                      <Switch defaultChecked={user.settings.darkMode} />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="theme">Theme</Label>
                      <Select defaultValue={user.settings.theme}>
                        <SelectTrigger className="glass-morphism border-white/10">
                          <SelectValue placeholder="Select a theme" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="royal">Royal</SelectItem>
                          <SelectItem value="dark">Dark</SelectItem>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="golden">Golden</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Sound Effects</p>
                        <p className="text-sm text-muted-foreground">
                          Enable sound effects in the app
                        </p>
                      </div>
                      <Switch defaultChecked={user.settings.soundEffects} />
                    </div>
                  </div>
                  
                  <Button className="w-full">Save Appearance Settings</Button>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="security">
              <Card className="glass-morphism border-white/10">
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input 
                      id="currentPassword" 
                      type="password"
                      className="glass-morphism border-white/10"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input 
                      id="newPassword" 
                      type="password"
                      className="glass-morphism border-white/10"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <Input 
                      id="confirmPassword" 
                      type="password"
                      className="glass-morphism border-white/10"
                    />
                  </div>
                  
                  <Button className="w-full">Change Password</Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </MainLayout>
  );
};

export default SettingsPage;
