
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { MockeryAction } from '@/types/mockery';
import { getMockeryText, getMockeryDescription, getMockeryIcon, getMockeryColor, getMockeryCost } from '../utils/mockeryUtils';
import { Trophy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface MockeryModalProps {
  isOpen: boolean;
  onClose: () => void;
  mockeryType: MockeryAction;
  targetUser: string;
  onConfirm: (targetUser: string, action: string, amount: number) => boolean;
}

const MockeryModal: React.FC<MockeryModalProps> = ({
  isOpen,
  onClose,
  mockeryType,
  targetUser,
  onConfirm
}) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Custom styling based on mockery type
  const getHeaderStyle = () => {
    const color = getMockeryColor(mockeryType);
    return {
      borderBottom: `2px solid ${color}`,
      background: `linear-gradient(to right, ${color}15, transparent)`
    };
  };
  
  const handleConfirm = () => {
    setIsSubmitting(true);
    
    try {
      // Determine cost of mockery type
      const amount = getMockeryCost(mockeryType);
      
      // Pass to parent component to handle the transaction
      const success = onConfirm(targetUser, mockeryType, amount);
      
      if (success) {
        // Show success toast
        toast({
          title: "Mockery Successful",
          description: `You have successfully mocked ${targetUser} with ${getMockeryText(mockeryType)}!`,
          variant: "default"
        });
        onClose();
      } else {
        // Show failure toast - this should be handled by the parent component
        toast({
          title: "Mockery Failed",
          description: "There was an error processing your mockery.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error("Error in mockery:", error);
      toast({
        title: "Error",
        description: "An unexpected error occurred.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const Icon = getMockeryIcon(mockeryType);
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="glass-morphism border-white/10">
        <DialogHeader style={getHeaderStyle()} className="pb-2">
          <DialogTitle className="flex items-center gap-2">
            {Icon && <Icon size={20} className="text-royal-crimson" />}
            <span>Confirm {getMockeryText(mockeryType)} Mockery</span>
          </DialogTitle>
          <DialogDescription>
            Are you sure you want to mock {targetUser}?
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4">
          <div className="bg-black/20 p-4 rounded-lg mb-4">
            <p className="text-sm text-white/70">{getMockeryDescription(mockeryType)}</p>
          </div>
          
          <div className="flex items-center justify-between p-3 border border-white/10 rounded-lg bg-black/10">
            <div className="flex items-center gap-2">
              <Trophy size={18} className="text-royal-gold" />
              <span className="text-sm font-medium">Target:</span>
            </div>
            <span className="font-medium text-white">{targetUser}</span>
          </div>
          
          <div className="mt-4 p-3 border border-white/10 rounded-lg bg-black/10 flex justify-between items-center">
            <span className="text-sm">Cost:</span>
            <span className="font-bold text-royal-gold">${getMockeryCost(mockeryType)}</span>
          </div>
        </div>
        
        <DialogFooter>
          <Button variant="outline" onClick={onClose} disabled={isSubmitting}>
            Cancel
          </Button>
          <Button 
            onClick={handleConfirm} 
            className="bg-royal-crimson hover:bg-royal-crimson/90" 
            disabled={isSubmitting}
          >
            {isSubmitting ? "Processing..." : "Confirm Mockery"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MockeryModal;
