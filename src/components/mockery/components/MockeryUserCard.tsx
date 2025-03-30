
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ShieldAlert } from 'lucide-react';
import { User } from '@/types/user';
import { MockeryAction } from '@/utils/mockeryUtils';
import { useToast } from '@/hooks/use-toast';
import { formatDistanceToNow } from 'date-fns';
import { cn } from '@/lib/utils';
import { getActiveMockeryClass } from '@/utils/mockeryUtils';

interface MockeryUserCardProps {
  user: User;
  onSelect: (userId: string) => void;
  onMockery?: (userId: string, action: MockeryAction) => void;
  hasActiveEffect?: boolean;
  activeEffect?: MockeryAction;
  showActions?: boolean;
  isProtected?: boolean;
  className?: string;
}

export const MockeryUserCard: React.FC<MockeryUserCardProps> = ({
  user,
  onSelect,
  onMockery,
  hasActiveEffect = false,
  activeEffect,
  showActions = true,
  isProtected = false,
  className
}) => {
  const { toast } = useToast();
  
  const handleSelect = () => {
    onSelect(user.id);
  };
  
  const handleProtectedClick = () => {
    toast.warning({
      title: "Royal Protection Active",
      description: "This user is protected by royal decree and cannot be mocked at this time."
    });
  };
  
  const handleMockery = (action: MockeryAction) => {
    if (onMockery) {
      onMockery(user.id, action);
    }
  };
  
  return (
    <Card 
      className={cn(
        "overflow-hidden transition-all duration-300 hover:border-primary/50",
        hasActiveEffect && activeEffect && getActiveMockeryClass(activeEffect),
        className
      )}
    >
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10 border-2 border-white/20">
              <AvatarImage src={user.profileImage} alt={user.username} />
              <AvatarFallback>
                {user.displayName?.charAt(0) || user.username.charAt(0)}
              </AvatarFallback>
            </Avatar>
            
            <div>
              <div className="font-semibold truncate max-w-[120px]">
                {user.displayName || user.username}
              </div>
              <div className="text-xs text-muted-foreground">
                @{user.username}
              </div>
            </div>
          </div>
          
          <div className="flex flex-col space-y-1 items-end">
            <Badge variant="outline" className="text-xs">
              Rank #{user.rank || '?'}
            </Badge>
            
            {hasActiveEffect && activeEffect && (
              <Badge 
                variant={
                  activeEffect === 'shame' || 
                  activeEffect === 'taunt' || 
                  activeEffect === 'jest' ||
                  activeEffect === 'crown' ||
                  activeEffect === 'challenge' || 
                  activeEffect === 'defeat' ? 'destructive' :
                  activeEffect === 'protection' ? 'success' : 'default'
                }
                className="text-xs animate-pulse"
              >
                {activeEffect.charAt(0).toUpperCase() + activeEffect.slice(1)}
              </Badge>
            )}
            
            {isProtected && (
              <Badge variant="success" className="text-xs flex items-center gap-1">
                <ShieldAlert className="h-3 w-3" />
                Protected
              </Badge>
            )}
          </div>
        </div>
        
        <div className="mt-3 flex justify-between">
          <Button 
            variant="outline" 
            size="sm" 
            className="text-xs" 
            onClick={handleSelect}
          >
            Select
          </Button>
          
          {showActions && (
            <Button 
              variant="secondary" 
              size="sm" 
              className="text-xs" 
              onClick={isProtected ? handleProtectedClick : () => handleMockery('jest')}
              disabled={isProtected}
            >
              {isProtected ? 'Protected' : 'Mock'}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default MockeryUserCard;
