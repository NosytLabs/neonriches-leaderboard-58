
import React, { useState } from 'react';
import { UserProfile } from '@/types/user';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/auth';
import { showSuccessToast, showErrorToast } from '@/utils/toastUtils';
import { adaptUserProfileUpdate } from '@/utils/userProfileAdapter';

interface ProfileSettingsProps {
  user: UserProfile;
}

const ProfileSettings: React.FC<ProfileSettingsProps> = ({ user }) => {
  const { updateUserProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    displayName: user.displayName || '',
    bio: user.bio || '',
    profileImage: user.profileImage || ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = async () => {
    try {
      // Create a partial update and adapt it for type safety
      const updateData = adaptUserProfileUpdate({
        ...formData
      });
      
      await updateUserProfile(updateData);
      setIsEditing(false);
      showSuccessToast('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile:', error);
      showErrorToast('Failed to update profile');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Profile Settings</h3>
        {!isEditing ? (
          <Button onClick={() => setIsEditing(true)} variant="outline" size="sm">
            Edit Profile
          </Button>
        ) : (
          <div className="flex space-x-2">
            <Button onClick={() => setIsEditing(false)} variant="outline" size="sm">
              Cancel
            </Button>
            <Button onClick={handleSave} size="sm">
              Save Changes
            </Button>
          </div>
        )}
      </div>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="displayName">Display Name</Label>
          <Input
            id="displayName"
            name="displayName"
            value={formData.displayName}
            onChange={handleChange}
            disabled={!isEditing}
            className={!isEditing ? "bg-background/50" : ""}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="bio">Bio</Label>
          <Textarea
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            disabled={!isEditing}
            className={!isEditing ? "bg-background/50" : ""}
            rows={4}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="profileImage">Profile Image URL</Label>
          <Input
            id="profileImage"
            name="profileImage"
            value={formData.profileImage}
            onChange={handleChange}
            disabled={!isEditing}
            className={!isEditing ? "bg-background/50" : ""}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
