
import React from 'react';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Crown, UserRound } from 'lucide-react';
import { UserProfile } from '@/contexts/AuthContext';

interface GenderSelectionProps {
  userProfile: UserProfile;
  onGenderChange: (gender: 'king' | 'queen' | 'monarch' | null) => Promise<void>;
}

const GenderSelection: React.FC<GenderSelectionProps> = ({ userProfile, onGenderChange }) => {
  const handleChange = async (value: string) => {
    const gender = value as 'king' | 'queen' | 'monarch' | null;
    await onGenderChange(gender);
  };

  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader className="pb-3">
        <CardTitle className="text-md font-royal royal-gradient flex items-center">
          <Crown size={16} className="text-royal-gold mr-2" />
          Royal Title Preference
        </CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup 
          defaultValue={userProfile.gender || 'monarch'} 
          className="grid grid-cols-3 gap-2"
          onValueChange={handleChange}
        >
          <div className="relative">
            <RadioGroupItem 
              value="king" 
              id="king" 
              className="peer sr-only" 
            />
            <Label 
              htmlFor="king" 
              className="flex flex-col items-center justify-between rounded-md border-2 border-white/10 bg-white/5 p-4 hover:bg-white/10 hover:border-white/20 peer-data-[state=checked]:border-royal-gold/50 peer-data-[state=checked]:bg-royal-gold/10 [&:has([data-state=checked])]:border-royal-gold/50 cursor-pointer"
            >
              <UserRound className="mb-2 h-6 w-6 text-royal-gold" />
              <span className="text-sm font-medium">King</span>
              <div className="absolute top-2 right-2 opacity-0 peer-data-[state=checked]:opacity-100 [&:has([data-state=checked])]:opacity-100 text-royal-gold">
                <Check size={14} />
              </div>
            </Label>
          </div>
          
          <div className="relative">
            <RadioGroupItem 
              value="queen" 
              id="queen" 
              className="peer sr-only" 
            />
            <Label 
              htmlFor="queen" 
              className="flex flex-col items-center justify-between rounded-md border-2 border-white/10 bg-white/5 p-4 hover:bg-white/10 hover:border-white/20 peer-data-[state=checked]:border-royal-gold/50 peer-data-[state=checked]:bg-royal-gold/10 [&:has([data-state=checked])]:border-royal-gold/50 cursor-pointer"
            >
              <UserRound className="mb-2 h-6 w-6 text-royal-purple" />
              <span className="text-sm font-medium">Queen</span>
              <div className="absolute top-2 right-2 opacity-0 peer-data-[state=checked]:opacity-100 [&:has([data-state=checked])]:opacity-100 text-royal-gold">
                <Check size={14} />
              </div>
            </Label>
          </div>
          
          <div className="relative">
            <RadioGroupItem 
              value="monarch" 
              id="monarch" 
              className="peer sr-only" 
            />
            <Label 
              htmlFor="monarch" 
              className="flex flex-col items-center justify-between rounded-md border-2 border-white/10 bg-white/5 p-4 hover:bg-white/10 hover:border-white/20 peer-data-[state=checked]:border-royal-gold/50 peer-data-[state=checked]:bg-royal-gold/10 [&:has([data-state=checked])]:border-royal-gold/50 cursor-pointer"
            >
              <Crown className="mb-2 h-6 w-6 text-royal-blue" />
              <span className="text-sm font-medium">Monarch</span>
              <div className="absolute top-2 right-2 opacity-0 peer-data-[state=checked]:opacity-100 [&:has([data-state=checked])]:opacity-100 text-royal-gold">
                <Check size={14} />
              </div>
            </Label>
          </div>
        </RadioGroup>
        
        <p className="text-xs text-white/50 mt-3 italic">
          Choose how you wish to be addressed throughout the realm. Your royal title affects how nobles refer to Your Majesty.
        </p>
      </CardContent>
    </Card>
  );
};

export default GenderSelection;
