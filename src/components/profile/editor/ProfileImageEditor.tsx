
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import type { UserProfile } from '@/types/user';

interface ProfileImageEditorProps {
  user: UserProfile;
  profileImage: string;
  onProfileImageChange: (imageUrl: string) => void;
  onProfileImageUpload: (file: File) => Promise<void>;
}

const ProfileImageEditor: React.FC<ProfileImageEditorProps> = ({
  user,
  profileImage,
  onProfileImageChange,
  onProfileImageUpload
}) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  
  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setIsLoading(true);
      try {
        await onProfileImageUpload(file);
        toast({
          title: "Profile image updated",
          description: "Your profile image has been updated successfully.",
          variant: "success"
        });
      } catch (error) {
        toast({
          title: "Error updating profile image",
          description: "There was an error updating your profile image. Please try again.",
          variant: "destructive"
        });
      } finally {
        setIsLoading(false);
      }
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-6">
        <div className="h-24 w-24 rounded-full overflow-hidden bg-gray-100">
          <img 
            src={profileImage || '/placeholder-avatar.png'} 
            alt="Profile" 
            className="h-full w-full object-cover"
          />
        </div>
        
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            Upload a new profile picture. Square images work best.
          </p>
          <Input
            type="file"
            accept="image/*"
            disabled={isLoading}
            onChange={handleImageChange}
          />
        </div>
      </div>
      
      <Separator />
      
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Image URL</h3>
        <Input
          placeholder="Or enter an image URL"
          value={profileImage}
          onChange={(e) => onProfileImageChange(e.target.value)}
        />
        <Button 
          variant="outline" 
          onClick={() => {
            toast({
              title: "Image URL updated",
              description: "Your profile image URL has been updated.",
              variant: "success"
            });
          }} 
          disabled={isLoading}
        >
          Update Image URL
        </Button>
      </div>
    </div>
  );
};

export default ProfileImageEditor;
