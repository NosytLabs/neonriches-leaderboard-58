
import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Check, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { MockeryTier } from '../hooks/useMockery';
import { getMockeryProtectionPrice, getEnhancedMockeryProtectionPrice } from '../utils/mockeryUtils';
import MedievalIcon from '@/components/ui/medieval-icon';

interface MockeryProtectionCardProps {
  tier: MockeryTier;
  name: string;
  description: string;
  features: string[];
  active?: boolean;
  enhanced?: boolean;
  onActivate?: () => void;
  onUpgrade?: () => void;
}

const MockeryProtectionCard: React.FC<MockeryProtectionCardProps> = ({
  tier,
  name,
  description,
  features,
  active = false,
  enhanced = false,
  onActivate,
  onUpgrade
}) => {
  const basePrice = getMockeryProtectionPrice(tier);
  const enhancedPrice = getEnhancedMockeryProtectionPrice(tier);
  const price = enhanced ? enhancedPrice : basePrice;
  
  const getColorClass = () => {
    switch (tier) {
      case 'basic':
        return 'border-gray-400 bg-gray-900/40';
      case 'advanced':
        return 'border-amber-600 bg-amber-950/40';
      case 'royal':
        return 'border-royal-gold bg-royal-gold/5';
      default:
        return 'border-gray-400 bg-gray-900/40';
    }
  };
  
  const getIconColor = () => {
    switch (tier) {
      case 'basic':
        return 'silver';
      case 'advanced':
        return 'bronze';
      case 'royal':
        return 'gold';
      default:
        return 'silver';
    }
  };
  
  return (
    <div className={cn(
      'rounded-lg border p-6 transition-all hover:shadow-md',
      getColorClass(),
      active && 'ring-2 ring-offset-2 ring-offset-background',
      active && tier === 'basic' ? 'ring-gray-400' : '',
      active && tier === 'advanced' ? 'ring-amber-600' : '',
      active && tier === 'royal' ? 'ring-royal-gold' : ''
    )}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="mr-3">
            <MedievalIcon 
              name="shield" 
              size="md" 
              color={getIconColor()} 
              animate={tier === 'royal' ? 'glow' : false}
            />
          </div>
          <div>
            <h3 className="font-bold text-lg">{name}</h3>
            <p className="text-sm text-muted-foreground">{tier} protection</p>
          </div>
        </div>
        {active && (
          <div className="bg-green-500/20 text-green-400 text-xs font-medium px-2 py-1 rounded-full">
            Active
          </div>
        )}
      </div>
      
      <p className="text-sm text-white/70 mb-4">{description}</p>
      
      <div className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start text-sm">
            <Check className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-white/80">{feature}</span>
          </div>
        ))}
      </div>
      
      <div className="flex items-baseline justify-between mb-6">
        <div>
          <span className="text-2xl font-bold">${price.toFixed(2)}</span>
          <span className="text-white/60 text-sm ml-1">/ month</span>
        </div>
      </div>
      
      {active ? (
        <Button 
          variant="outline" 
          className="w-full"
          onClick={onUpgrade}
          disabled={enhanced || tier === 'royal'}
        >
          {enhanced || tier === 'royal' ? 'Maximum Protection' : 'Upgrade Protection'}
          <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      ) : (
        <Button 
          className={cn(
            "w-full",
            tier === 'basic' ? 'bg-gray-700 hover:bg-gray-600' : '',
            tier === 'advanced' ? 'bg-amber-800 hover:bg-amber-700' : '',
            tier === 'royal' ? 'bg-gradient-to-r from-royal-gold-dark to-royal-gold hover:opacity-90' : ''
          )}
          onClick={onActivate}
        >
          Activate Protection
          <Shield className="h-4 w-4 ml-1" />
        </Button>
      )}
    </div>
  );
};

export default MockeryProtectionCard;
