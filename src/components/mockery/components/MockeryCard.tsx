
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MockeryAction } from '@/types/mockery';
import { getMockeryIcon, getMockeryIconColor } from '@/utils/mockery/mockery-icons';
import { cn } from '@/lib/utils';
import { getMockeryCost, getMockeryTierColorClass } from '@/utils/mockeryUtils';

interface MockeryCardProps {
  action: MockeryAction;
  name: string;
  description: string;
  tier: string;
  onClick: (action: MockeryAction) => void;
  disabled?: boolean;
  isSelected?: boolean;
  className?: string;
}

const MockeryCard: React.FC<MockeryCardProps> = ({
  action,
  name,
  description,
  tier,
  onClick,
  disabled = false,
  isSelected = false,
  className
}) => {
  const handleClick = () => {
    if (!disabled) {
      onClick(action);
    }
  };
  
  const IconComponent = getMockeryIcon(action);
  const iconColorClass = getMockeryIconColor(action);
  
  return (
    <Card 
      className={cn(
        "overflow-hidden transition-all duration-300",
        isSelected ? "border-primary ring-2 ring-primary/20" : "border-white/10",
        disabled ? "opacity-60" : "hover:border-primary/50 cursor-pointer",
        getMockeryTierColorClass(tier as any),
        className
      )}
      onClick={handleClick}
    >
      <CardHeader className="p-4 pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-semibold flex items-center">
            <span className={iconColorClass}>
              <IconComponent className="h-4 w-4" />
            </span>
            <span className="ml-2">{name}</span>
          </CardTitle>
          <Badge 
            variant="outline" 
            className={cn(
              "text-xs",
              tier === 'legendary' ? "text-yellow-400 border-yellow-400/30" :
              tier === 'epic' ? "text-purple-400 border-purple-400/30" :
              tier === 'rare' ? "text-blue-400 border-blue-400/30" :
              tier === 'uncommon' ? "text-green-400 border-green-400/30" :
              "text-gray-400 border-gray-400/30"
            )}
          >
            {tier}
          </Badge>
        </div>
        <CardDescription className="text-xs mt-1">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="p-4 pt-0">
        <div className="text-sm opacity-80">
          Applies a humiliating effect to the target for a limited time.
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <div className="text-sm font-semibold text-royal-gold">
          ${getMockeryCost(action)}
        </div>
        <Button 
          size="sm" 
          variant="outline"
          disabled={disabled}
          className={cn(
            "text-xs",
            isSelected ? "bg-primary/20" : ""
          )}
          onClick={(e) => {
            e.stopPropagation();
            handleClick();
          }}
        >
          {isSelected ? "Selected" : "Select"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MockeryCard;
