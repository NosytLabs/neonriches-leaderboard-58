
import React from 'react';
import { UserProfile } from '@/types/user';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

type GenderType = 'king' | 'queen' | 'neutral' | 'jester' | 'noble';

interface BasicInfoEditorProps {
  user: UserProfile;
  displayName: string;
  bio: string;
  gender: GenderType;
  onDisplayNameChange: (value: string) => void;
  onBioChange: (value: string) => void;
  onGenderChange: (value: GenderType) => void;
}

const BasicInfoEditor: React.FC<BasicInfoEditorProps> = ({
  user,
  displayName,
  bio,
  gender,
  onDisplayNameChange,
  onBioChange,
  onGenderChange
}) => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="displayName">Royal Name</Label>
        <Input
          id="displayName"
          value={displayName}
          onChange={(e) => onDisplayNameChange(e.target.value)}
          className="glass-morphism border-white/10"
          placeholder="How should we address your nobility?"
        />
        <p className="text-sm text-white/50">This will be displayed as your primary name.</p>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="bio">Royal Proclamation</Label>
        <Textarea
          id="bio"
          value={bio}
          onChange={(e) => onBioChange(e.target.value)}
          className="glass-morphism border-white/10 min-h-[100px]"
          placeholder="Share your noble journey or royal aspirations..."
          maxLength={user.tier === 'free' ? 200 : 1000}
        />
        <p className="text-sm text-white/50">
          {user.tier === 'free' 
            ? `${bio.length}/200 characters (Free tier)`
            : `${bio.length}/1000 characters (Pro tier)`}
        </p>
      </div>
      
      <div className="space-y-2">
        <Label>Royal Title</Label>
        <RadioGroup value={gender} onValueChange={onGenderChange} className="flex space-x-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="king" id="king" />
            <Label htmlFor="king" className="cursor-pointer">King</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="queen" id="queen" />
            <Label htmlFor="queen" className="cursor-pointer">Queen</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="neutral" id="neutral" />
            <Label htmlFor="neutral" className="cursor-pointer">Noble</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="jester" id="jester" />
            <Label htmlFor="jester" className="cursor-pointer">Jester</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};

export default BasicInfoEditor;
