import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useFeatureAccess } from '@/hooks/use-feature-access';
import { useToast } from '@/hooks/use-toast';
import { Loader, Check, Lock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useSound } from '@/hooks/sounds/use-sound';
import { Feature } from '@/types/feature';

interface FeatureAccessCardProps {
  feature: Feature;
  type: 'analytics' | 'branding' | 'visibility' | 'engagement';
  description: string;
  className?: string;
}

const FeatureAccessCard: React.FC<FeatureAccessCardProps> = ({
  feature,
  type,
  description,
  className,
}) => {
  const { hasAccess, unlockFeature, isUnlocking } = useFeatureAccess();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const sound = useSound();
  
  const hasFeatureAccess = hasAccess(feature);
  
  const handleUnlock = async () => {
    try {
      setIsLoading(true);
      
      // Play a sound effect
      sound.playSound('coin');
      
      // Call the unlock function
      const result = await unlockFeature(feature);
      
      if (result.success) {
        toast.success({
          title: "Feature Unlocked",
          description: `You now have access to this feature!`,
        });
        
        // Complete the process with additional feedback if needed
        if (result.redirectUrl) {
          // Redirect or show follow-up actions
          console.log("Redirect URL:", result.redirectUrl);
        }
      } else {
        toast.error({
          title: "Unlock Failed",
          description: result.error || "Something went wrong",
        });
      }
    } catch (error) {
      toast.error({
        title: "Error",
        description: "An unexpected error occurred",
      });
      console.error("Error unlocking feature:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className={className}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-medium">{feature}</CardTitle>
          {hasFeatureAccess ? (
            <Badge variant="success" className="ml-2">
              <Check className="mr-1 h-3 w-3" /> Active
            </Badge>
          ) : (
            <Badge variant="outline" className="ml-2">
              <Lock className="mr-1 h-3 w-3" /> Locked
            </Badge>
          )}
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {/* Display feature details */}
      </CardContent>
      <CardFooter>
        {hasFeatureAccess ? (
          <Button variant="outline" disabled>
            <Check className="mr-2 h-4 w-4" /> Unlocked
          </Button>
        ) : (
          <Button 
            onClick={handleUnlock} 
            disabled={isLoading || isUnlocking}
          >
            {isLoading || isUnlocking ? (
              <>
                <Loader className="mr-2 h-4 w-4 animate-spin" />
                Unlocking...
              </>
            ) : (
              <>
                <Lock className="mr-2 h-4 w-4" />
                Unlock Feature
              </>
            )}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default FeatureAccessCard;
