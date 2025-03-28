
import React from 'react';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { UserProfile } from '@/types/user';

interface BioEditorProps {
  user: UserProfile;
  bio: string;
  onBioChange: (bio: string) => void;
  onSave: () => void;
}

const BioEditor = ({ user, bio, onBioChange, onSave }: BioEditorProps) => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="bio">Bio</Label>
        <Textarea 
          id="bio" 
          placeholder="Tell us about yourself..." 
          value={bio}
          onChange={(e) => onBioChange(e.target.value)}
          className="glass-morphism border-white/10 min-h-[120px]"
          maxLength={user.tier === 'pro' ? 1000 : 200}
        />
        <p className="text-xs text-white/50 text-right">
          {bio.length}/{user.tier === 'pro' ? 1000 : 200} characters
        </p>
      </div>
      
      <div className="mt-4">
        <Button 
          className="bg-gradient-to-r from-team-red via-team-green to-team-blue hover:opacity-90 text-white"
          onClick={onSave}
        >
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default BioEditor;
