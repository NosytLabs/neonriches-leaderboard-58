
import React from 'react';
import { UserProfile } from '@/types/user';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Crown } from 'lucide-react';

interface ProfileEditorProps {
  user: UserProfile;
}

const ProfileEditor: React.FC<ProfileEditorProps> = ({ user }) => {
  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Crown className="mr-2 h-5 w-5 text-royal-gold" />
          Edit Your Royal Profile
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-white/70">
          Profile editor coming soon. You'll be able to customize your profile, add images, and more.
        </p>
      </CardContent>
    </Card>
  );
};

export default ProfileEditor;
