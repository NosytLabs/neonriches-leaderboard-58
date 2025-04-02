import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { MockeryAction, MockeryTier } from '@/types/mockery-types';
import { getMockeryName, getMockeryDescription, getMockeryCost } from '@/utils/mockeryUtils';
import { useAuth } from '@/hooks/useAuth';
import { useResponsive } from '@/hooks/use-responsive';
import { Badge } from '@/components/ui/Badge';
import { getMockeryTierColor } from '@/utils/mockeryUtils';

// Import MockeryIconComponent which can accept className
import MockeryIconComponent from '../MockeryIconComponent';

interface MockeryModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  onMockeryApplied: (action: MockeryAction, targetId: string) => void;
  targetId: string;
  targetUsername: string;
}

const MockeryModal: React.FC<MockeryModalProps> = ({
  open,
  setOpen,
  onMockeryApplied,
  targetId,
  targetUsername
}) => {
  const { toast } = useToast();
  const { user } = useAuth();
  const { isMobile } = useResponsive();
  const [selectedAction, setSelectedAction] = useState<MockeryAction>('tomato');
  const [customMessage, setCustomMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleActionSelect = (action: MockeryAction) => {
    setSelectedAction(action);
  };

  const handleSubmit = async () => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "You must be logged in to perform this action",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    try {
      await onMockeryApplied(selectedAction, targetId);
      toast({
        title: "Mockery Applied",
        description: `You have successfully applied ${getMockeryName(selectedAction)} to ${targetUsername}.`,
        variant: "success"
      });
      setOpen(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to apply mockery action",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Apply Mockery Action</DialogTitle>
          <DialogDescription>
            Select an action to apply to {targetUsername}.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {['tomato', 'egg', 'putridEgg', 'rotten_egg', 'crown', 'thumbs_down', 'mock', 'stocks', 'jester', 'courtJester', 'silence', 'taunt', 'smokeBomb', 'protection', 'shame', 'challenge', 'joust', 'duel', 'royal_decree', 'flame', 'heart', 'skull', 'laugh'].map((action) => (
              <Button
                key={action}
                variant="outline"
                className={`
                  justify-start text-left
                  ${selectedAction === action ? 'bg-secondary text-secondary-foreground hover:bg-secondary/80' : ''}
                `}
                onClick={() => handleActionSelect(action as MockeryAction)}
                disabled={isSubmitting}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center">
                    <MockeryIconComponent action={action as MockeryAction} className="text-white" />
                    <span className="ml-2">{getMockeryName(action as MockeryAction)}</span>
                  </div>
                  {!isMobile && (
                    <Badge variant="secondary" className="ml-2">
                      {getMockeryCost(action as MockeryAction)}
                    </Badge>
                  )}
                </div>
              </Button>
            ))}
          </div>
          <div>
            <Label htmlFor="message">Custom Message</Label>
            <Input
              id="message"
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value)}
              placeholder="Enter a custom message (optional)"
            />
          </div>
        </div>
        <Button type="submit" onClick={handleSubmit} disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Apply Action'}
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default MockeryModal;
