
import React from 'react';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Crown, UserRound, Trophy } from 'lucide-react';
import { UserProfile } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

interface GenderSelectionProps {
  userProfile: UserProfile;
  onGenderChange: (gender: 'king' | 'queen' | 'monarch' | null) => Promise<void>;
}

const GenderSelection: React.FC<GenderSelectionProps> = ({ userProfile, onGenderChange }) => {
  const { toast } = useToast();

  const handleChange = async (value: string) => {
    const gender = value as 'king' | 'queen' | 'monarch' | null;
    await onGenderChange(gender);
    
    // Add satirical toast based on selection
    const messages = {
      'king': "His Majesty has decreed! All shall bow before the King of Digital Spending!",
      'queen': "The Queen reigns supreme! May your royal purchases bring glory to the realm!",
      'monarch': "The Monarch has spoken! Gender norms mean nothing when money talks!"
    };
    
    toast({
      title: "Identity Purchased",
      description: messages[gender as keyof typeof messages] || "Your royal title has been updated.",
      duration: 3000,
    });
  };
  
  const getRoyalTitle = (gender: string) => {
    switch(gender) {
      case 'king':
        return "Behold the King, whose digital coffers overflow with virtual treasure.";
      case 'queen':
        return "The Queen rules with grace, elegance, and an unlimited credit line.";
      case 'monarch':
        return "The Monarch transcends traditional titles, united only by the power of spending.";
      default:
        return "";
    }
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
        
        <div className="mt-4 p-3 bg-white/5 rounded-lg border border-white/10">
          <p className="text-sm text-white/80 italic">
            {getRoyalTitle(userProfile.gender || 'monarch')}
          </p>
        </div>
        
        <p className="text-xs text-white/50 mt-3 italic">
          Choose your royal identity. Don't worry - all titles cost the same, because in P2W.FUN, equality means everyone's money is equally welcome.
        </p>
      </CardContent>
    </Card>
  );
};

export default GenderSelection;
