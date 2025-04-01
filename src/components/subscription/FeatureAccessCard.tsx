
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useFeatureAccess } from '@/hooks/use-feature-access';
import { LucideIcon, Crown, Lock, Check, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Feature } from '@/types/feature';

interface FeatureAccessCardProps {
  id: Feature;
  title: string;
  description: string;
  icon: LucideIcon;
  premium?: boolean;
  className?: string;
  onUnlock?: () => void;
}

const FeatureAccessCard: React.FC<FeatureAccessCardProps> = ({
  id,
  title,
  description,
  icon: Icon,
  premium = false,
  className,
  onUnlock
}) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();
  const { unlockFeature, isUnlocking } = useFeatureAccess();

  const handleUnlock = async () => {
    setIsProcessing(true);
    
    try {
      const response = await unlockFeature(id);
      
      if (response.success) {
        toast({
          title: "Feature Unlocked",
          description: `You now have access to ${title}`,
          variant: "success",
        });
        
        onUnlock?.();
        
        if (response.redirectUrl) {
          window.location.href = response.redirectUrl;
        }
      } else {
        toast({
          title: "Unlock Failed",
          description: response.error || "Could not unlock feature at this time",
          variant: "error",
        });
      }
    } catch (error) {
      console.error("Error unlocking feature:", error);
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        variant: "error",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Card className={cn(
      "overflow-hidden transition-all border border-white/10 bg-black/40 hover:bg-black/60",
      premium && "border-royal-gold/30",
      className
    )}>
      <CardHeader className={cn(
        "pb-2",
        premium && "bg-gradient-to-r from-royal-gold/20 to-transparent"
      )}>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <Icon className={cn(
              "h-5 w-5 text-white/80",
              premium && "text-royal-gold"
            )} />
            <CardTitle className="text-base">{title}</CardTitle>
          </div>
          
          {premium && (
            <span className="bg-black/30 text-royal-gold text-xs px-2 py-0.5 rounded-full flex items-center">
              <Crown className="w-3 h-3 mr-1" />
              Premium
            </span>
          )}
        </div>
        <CardDescription className="text-white/60">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-2 pb-4">
        {/* Feature-specific content could go here */}
      </CardContent>
      
      <CardFooter className="pt-0 pb-4">
        <Button 
          onClick={handleUnlock}
          className={cn(
            "w-full",
            premium ? "bg-royal-gold hover:bg-royal-gold/80 text-black" : ""
          )}
          disabled={isProcessing || isUnlocking}
          variant={premium ? "default" : "outline"}
        >
          {isProcessing || isUnlocking ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </span>
          ) : premium ? (
            <span className="flex items-center">
              <Lock className="mr-2 h-4 w-4" />
              Unlock Premium
            </span>
          ) : (
            <span className="flex items-center">
              <Check className="mr-2 h-4 w-4" />
              Access Feature
            </span>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FeatureAccessCard;
