import React, { useState, useEffect } from 'react';
import { UserProfile, UserTier } from '@/types/user';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Copy, CreditCard, HelpCircle, Lock, Mail, ShieldCheck, UserCheck, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { formatCurrency, formatDate } from '@/utils/formatters';
import { Separator } from '@/components/ui/separator';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { useConfettiStore } from '@/stores/use-confetti-store';
import { useSubscription } from '@/hooks/useSubscription';

interface SubscriptionManagementProps {
  user: UserProfile;
}

const SubscriptionManagement: React.FC<SubscriptionManagementProps> = ({ user }) => {
  const { toast } = useToast();
  const { updateUserProfile } = useAuth();
  const { isSubscribed, subscription, isLoading, manageSubscription } = useSubscription();
  const [isCancelling, setIsCancelling] = useState(false);
  const [isActivating, setIsActivating] = useState(false);
  const [interval, setInterval] = useState<string | null>(null);
  const [tier, setTier] = useState<UserTier | null>(null);
  const [autoRenew, setAutoRenew] = useState<boolean>(true);
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState<UserProfile>(user);
  const [isSaving, setIsSaving] = useState(false);
  const { fire } = useConfettiStore();
  
  useEffect(() => {
    if (subscription) {
      setInterval(subscription.interval);
      setTier(subscription.tier);
      setAutoRenew(subscription.autoRenew);
    }
  }, [subscription]);
  
  const handleCancelSubscription = async () => {
    setIsCancelling(true);
    
    try {
      // Simulate API call to cancel subscription
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Subscription Cancelled",
        description: "Your subscription has been cancelled. You will retain access until the end of your current billing cycle.",
        variant: "success"
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to cancel subscription. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsCancelling(false);
    }
  };
  
  const handleActivateSubscription = async () => {
    setIsActivating(true);
    
    try {
      // Simulate API call to activate subscription
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Subscription Reactivated",
        description: "Your subscription has been reactivated.",
        variant: "success"
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to reactivate subscription. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsActivating(false);
    }
  };
  
  const handleSaveProfile = async () => {
    setIsSaving(true);
    
    try {
      // Simulate API call to save profile
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      await updateUserProfile(profile);
      
      toast({
        title: "Profile Updated",
        description: "Your profile has been updated successfully.",
        variant: "success"
      });
      
      setIsEditing(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update profile. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSaving(false);
    }
  };
  
  const handleCopyReferralLink = () => {
    navigator.clipboard.writeText(`https://p2w.fun/referral/${user.id}`);
    toast({
      title: "Referral Link Copied",
      description: "Share this link with your friends to earn rewards!",
    });
  };
  
  return (
    <Card className="glass-morphism border-royal-gold/20">
      <CardHeader>
        <div className="flex items-center">
          <ShieldCheck className="mr-3 h-6 w-6 text-royal-gold" />
          <CardTitle>Subscription Management</CardTitle>
        </div>
        <CardDescription>
          Manage your subscription and profile settings
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {isLoading ? (
          <div className="text-center text-white/70 italic">Loading subscription data...</div>
        ) : (
          <>
            {isSubscribed ? (
              <div className="space-y-4">
                <div className="p-4 bg-black/20 rounded-lg">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-white/80">
                      Subscription Details
                    </h3>
                    <Badge variant="success">Active</Badge>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="flex items-center">
                      <Label className="text-white/70 mr-2">Tier:</Label>
                      <span className="font-medium">{subscription?.tier}</span>
                    </div>
                    <div className="flex items-center">
                      <Label className="text-white/70 mr-2">Interval:</Label>
                      <span className="font-medium">{subscription?.interval}</span>
                    </div>
                    <div className="flex items-center">
                      <Label className="text-white/70 mr-2">Start Date:</Label>
                      <span className="font-medium">{formatDate(subscription?.startDate || '')}</span>
                    </div>
                    <div className="flex items-center">
                      <Label className="text-white/70 mr-2">End Date:</Label>
                      <span className="font-medium">{formatDate(subscription?.endDate || '')}</span>
                    </div>
                    <div className="flex items-center">
                      <Label className="text-white/70 mr-2">Auto Renew:</Label>
                      <Switch 
                        checked={autoRenew} 
                        onCheckedChange={(checked) => {
                          setAutoRenew(checked);
                          // Simulate API call to update auto renew setting
                          toast({
                            title: "Auto Renew Updated",
                            description: `Auto renew has been ${checked ? 'enabled' : 'disabled'}.`,
                            variant: "success"
                          });
                        }}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-black/20 rounded-lg">
                  <h3 className="text-sm font-medium text-white/80 mb-2">
                    Subscription Actions
                  </h3>
                  
                  {autoRenew ? (
                    <Button 
                      variant="destructive" 
                      className="w-full"
                      onClick={handleCancelSubscription}
                      disabled={isCancelling}
                    >
                      {isCancelling ? "Cancelling..." : "Cancel Subscription"}
                    </Button>
                  ) : (
                    <Button 
                      variant="secondary" 
                      className="w-full"
                      onClick={handleActivateSubscription}
                      disabled={isActivating}
                    >
                      {isActivating ? "Reactivating..." : "Reactivate Subscription"}
                    </Button>
                  )}
                </div>
              </div>
            ) : (
              <div className="text-center text-white/70 italic">
                You are not currently subscribed. <a href="/pricing" className="text-royal-gold hover:underline">View Pricing</a>
              </div>
            )}
            
            <Separator className="bg-white/10" />
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-white/80">
                  Profile Information
                </h3>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => {
                    setIsEditing(true);
                    setProfile(user);
                  }}
                >
                  Edit Profile
                </Button>
              </div>
              
              {isEditing ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="displayName">Display Name</Label>
                      <Input 
                        type="text" 
                        id="displayName" 
                        value={profile.displayName || ''}
                        onChange={(e) => setProfile({ ...profile, displayName: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="username">Username</Label>
                      <Input 
                        type="text" 
                        id="username" 
                        value={profile.username}
                        onChange={(e) => setProfile({ ...profile, username: e.target.value })}
                        disabled
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea 
                      id="bio" 
                      placeholder="Tell us about yourself" 
                      value={profile.bio || ''}
                      onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                    />
                  </div>
                  
                  <div className="flex justify-end">
                    <Button 
                      variant="secondary" 
                      className="mr-2"
                      onClick={() => setIsEditing(false)}
                    >
                      Cancel
                    </Button>
                    <Button 
                      className="bg-royal-gold hover:bg-royal-gold/90 text-black"
                      onClick={handleSaveProfile}
                      disabled={isSaving}
                    >
                      {isSaving ? "Saving..." : "Save Changes"}
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Label className="text-white/70 mr-2">Display Name:</Label>
                    <span className="font-medium">{user.displayName || 'N/A'}</span>
                  </div>
                  <div className="flex items-center">
                    <Label className="text-white/70 mr-2">Username:</Label>
                    <span className="font-medium">{user.username}</span>
                  </div>
                  <div className="flex items-start">
                    <Label className="text-white/70 mr-2">Bio:</Label>
                    <span className="font-medium">{user.bio || 'N/A'}</span>
                  </div>
                </div>
              )}
            </div>
            
            <Separator className="bg-white/10" />
            
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-white/80">
                Referral Program
              </h3>
              <p className="text-white/70">
                Share your referral link with friends and earn rewards!
              </p>
              <div className="flex items-center justify-between p-3 bg-black/20 rounded-lg">
                <Input 
                  type="text" 
                  value={`https://p2w.fun/referral/${user.id}`} 
                  readOnly 
                  className="bg-transparent border-none focus-visible:ring-0 text-white/70"
                />
                <Button 
                  variant="secondary"
                  size="sm"
                  onClick={handleCopyReferralLink}
                >
                  <Copy className="mr-2 h-4 w-4" />
                  Copy Link
                </Button>
              </div>
            </div>
            
            <Separator className="bg-white/10" />
            
            <div className="text-white/50 text-sm">
              Need help? <a href="/support" className="text-royal-gold hover:underline">Contact Support</a>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default SubscriptionManagement;
