
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { UserProfile } from '@/types/user';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Save } from 'lucide-react';

interface BasicProfileSettingsProps {
  user: UserProfile;
  onSave: (data: Partial<UserProfile>) => Promise<boolean>;
}

const BasicProfileSettings: React.FC<BasicProfileSettingsProps> = ({ user, onSave }) => {
  const { toast } = useToast();
  const [displayName, setDisplayName] = useState(user.displayName || '');
  const [bio, setBio] = useState(user.bio || '');
  const [email, setEmail] = useState(user.email || '');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const hasChanges = displayName !== user.displayName || bio !== user.bio || email !== user.email;
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!hasChanges) return;
    
    setIsSubmitting(true);
    
    try {
      const success = await onSave({
        displayName,
        bio,
        email
      });
      
      if (success) {
        toast({
          title: "Profile Updated",
          description: "Your profile settings have been updated successfully.",
        });
      } else {
        toast({
          title: "Update Failed",
          description: "Something went wrong. Please try again.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Update Failed",
        description: "An error occurred while updating your profile.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <Card className="glass-morphism border-white/10">
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
          <CardDescription>
            Update your personal information
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="displayName">Display Name</Label>
              <Input
                id="displayName"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="Your display name"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              id="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Tell others about yourself..."
              rows={4}
            />
          </div>
          
          <div className="flex justify-end pt-4">
            <Button 
              type="submit" 
              disabled={isSubmitting || !hasChanges}
              className={!hasChanges ? "opacity-50" : ""}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  {hasChanges ? "Save Changes" : "No Changes"}
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </form>
  );
};

export default BasicProfileSettings;
