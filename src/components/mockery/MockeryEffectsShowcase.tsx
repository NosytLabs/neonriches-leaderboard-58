
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { AlertCircle, ShieldAlert, Crown, Clock, Filter } from 'lucide-react';
import { MockeryAction } from '@/types/mockery-types';

// Import properly from mockeryUtils
import { hasWeeklyDiscount, getDiscountedShamePrice } from '@/utils/shameUtils';
import { 
  getMockeryName, 
  getMockeryDescription, 
  getMockeryActionIconColor,
  getMockeryActionPrice
} from '@/utils/mockeryUtils';

interface MockeryEffectsShowcaseProps {
  onSelectMockery: (action: MockeryAction) => void;
}

const MockeryEffectsShowcase: React.FC<MockeryEffectsShowcaseProps> = ({ onSelectMockery }) => {
  const [selectedAction, setSelectedAction] = useState<MockeryAction | null>(null);
  const hasDiscount = hasWeeklyDiscount();
  
  const mockeryActions: MockeryAction[] = [
    'tomatoes', 'eggs', 'putridEggs', 'jester', 'crown',
    'shame', 'silence', 'courtJester', 'smokeBomb', 'protection'
  ];
  
  const handleMockerySelect = (action: MockeryAction) => {
    setSelectedAction(action);
  };
  
  const handleConfirmMockery = () => {
    if (selectedAction) {
      onSelectMockery(selectedAction);
      setSelectedAction(null);
    }
  };
  
  const handleCancelMockery = () => {
    setSelectedAction(null);
  };
  
  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle className="flex items-center">
          <AlertCircle className="mr-2 h-4 w-4 text-royal-crimson" />
          Royal Mockery Effects
        </CardTitle>
      </CardHeader>
      
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {mockeryActions.map((action) => (
            <Button
              key={action}
              variant="outline"
              className="flex flex-col items-center justify-center p-3 rounded-lg border-white/10 hover:bg-black/30 transition-colors"
              onClick={() => handleMockerySelect(action)}
            >
              <div className="text-2xl mb-1" style={{ color: getMockeryActionIconColor(action) }}>
                {getMockeryName(action)}
              </div>
              <div className="text-xs text-white/60">{getMockeryDescription(action)}</div>
            </Button>
          ))}
        </div>
        
        <Dialog open={selectedAction !== null} onOpenChange={() => setSelectedAction(null)}>
          <DialogTrigger asChild>
            <Button variant="secondary" disabled className="opacity-0 pointer-events-none">
              Select Mockery Effect
            </Button>
          </DialogTrigger>
          
          {selectedAction && (
            <MockeryConfirmationModal
              action={selectedAction}
              hasDiscount={hasDiscount}
              onConfirm={handleConfirmMockery}
              onCancel={handleCancelMockery}
            />
          )}
        </Dialog>
      </CardContent>
    </Card>
  );
};

interface MockeryConfirmationModalProps {
  action: MockeryAction;
  hasDiscount: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const MockeryConfirmationModal: React.FC<MockeryConfirmationModalProps> = ({ action, hasDiscount, onConfirm, onCancel }) => {
  const regularPrice = getMockeryActionPrice(action);
  // Fix: Only pass one argument to getDiscountedShamePrice
  const discountedPrice = hasDiscount ? getDiscountedShamePrice(action) : null;
  
  return (
    <div className="glass-morphism border-white/10 p-6 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Confirm Mockery: {getMockeryName(action)}</h3>
      <p className="text-sm text-white/70 mb-4">{getMockeryDescription(action)}</p>
      
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Clock className="h-4 w-4 mr-2 text-white/60" />
          <span className="text-sm text-white/70">Duration: Varies</span>
        </div>
        
        {discountedPrice !== null ? (
          <div className="flex items-center">
            <span className="text-sm text-white/60 line-through mr-2">${regularPrice}</span>
            <span className="text-lg font-semibold text-emerald-400">${discountedPrice.toFixed(2)}</span>
          </div>
        ) : (
          <span className="text-lg font-semibold">${regularPrice}</span>
        )}
      </div>
      
      <div className="flex justify-end space-x-2">
        <Button variant="outline" onClick={onCancel}>Cancel</Button>
        <Button className="bg-royal-crimson hover:bg-royal-crimson/80 text-white" onClick={onConfirm}>
          Confirm Mockery
        </Button>
      </div>
    </div>
  );
};

export default MockeryEffectsShowcase;
