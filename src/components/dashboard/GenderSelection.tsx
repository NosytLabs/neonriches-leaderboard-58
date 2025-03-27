import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UserProfile } from '@/contexts/AuthContext';
import { Crown, Wand2, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface GenderSelectionProps {
  userProfile: UserProfile;
  onGenderChange: (gender: 'king' | 'queen' | 'jester' | null) => Promise<void>;
}

const GenderSelection: React.FC<GenderSelectionProps> = ({ userProfile, onGenderChange }) => {
  const [selectedGender, setSelectedGender] = useState<'king' | 'queen' | 'jester' | null>(
    userProfile.gender || null
  );
  const [isChanging, setIsChanging] = useState(false);
  const { toast } = useToast();

  const handleGenderSelect = async (gender: 'king' | 'queen' | 'jester' | null) => {
    if (gender === selectedGender) return;
    
    setIsChanging(true);
    try {
      await onGenderChange(gender);
      setSelectedGender(gender);
      
      const genderText = gender === 'king' ? 'King' : 
                        gender === 'queen' ? 'Queen' : 
                        gender === 'jester' ? 'Royal Jester' : 'Noble';
      
      toast({
        title: "Royal Title Updated",
        description: `You shall now be addressed as ${genderText} throughout the realm.`,
      });
    } catch (error) {
      toast({
        title: "Title Change Failed",
        description: "The royal scribe could not update your title. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsChanging(false);
    }
  };

  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-royal royal-gradient flex items-center">
          <Crown className="h-5 w-5 mr-2 text-royal-gold" />
          Royal Title Selection
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-white/70 mb-4">
          Choose how you wish to be addressed throughout the kingdom. Your title affects how other nobles perceive you.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button
            variant={selectedGender === 'king' ? 'royal' : 'outline'}
            className={`h-auto py-6 flex flex-col items-center ${
              selectedGender === 'king' ? '' : 'glass-morphism border-white/10 hover:bg-white/5'
            }`}
            onClick={() => handleGenderSelect('king')}
            disabled={isChanging}
          >
            <Crown className="h-8 w-8 mb-2" />
            <span className="text-lg font-semibold">King</span>
            <span className="text-xs text-white/70 mt-1">Rule with an iron fist</span>
          </Button>
          
          <Button
            variant={selectedGender === 'queen' ? 'royal' : 'outline'}
            className={`h-auto py-6 flex flex-col items-center ${
              selectedGender === 'queen' ? '' : 'glass-morphism border-white/10 hover:bg-white/5'
            }`}
            onClick={() => handleGenderSelect('queen')}
            disabled={isChanging}
          >
            <Sparkles className="h-8 w-8 mb-2" />
            <span className="text-lg font-semibold">Queen</span>
            <span className="text-xs text-white/70 mt-1">Lead with grace and power</span>
          </Button>
          
          <Button
            variant={selectedGender === 'jester' ? 'royal' : 'outline'}
            className={`h-auto py-6 flex flex-col items-center ${
              selectedGender === 'jester' ? '' : 'glass-morphism border-white/10 hover:bg-white/5'
            }`}
            onClick={() => handleGenderSelect('jester')}
            disabled={isChanging}
          >
            <Wand2 className="h-8 w-8 mb-2" />
            <span className="text-lg font-semibold">Jester</span>
            <span className="text-xs text-white/70 mt-1">Mock the royal system</span>
          </Button>
        </div>
        
        <div className="mt-4 text-center text-xs text-white/50">
          <p>Your current rank: #{userProfile.rank} • Spend streak: {userProfile.spendStreak ?? 0} weeks</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default GenderSelection;
