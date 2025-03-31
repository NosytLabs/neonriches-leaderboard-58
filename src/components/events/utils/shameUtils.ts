
// Re-export shame functions from the mockery utilities
import { 
  hasWeeklyDiscount,
  getWeeklyDiscountedAction,
  getDiscountedShamePrice,
  getShameActionPrice,
  getShameActionMessage,
  getMockeryName,
  getMockeryDescription,
  getMockeryCost,
  getMockeryTier,
  getMockeryTierColorClass,
  getMockeryActionIcon,
  getActiveMockeryClass,
  getMockeryActionDescription
} from '@/utils/mockery';

import { MockeryAction, ShameAction } from '@/types/mockery';
import { cn } from '@/lib/utils';

export { 
  hasWeeklyDiscount,
  getWeeklyDiscountedAction,
  getDiscountedShamePrice,
  getShameActionPrice,
  getShameActionMessage,
  getMockeryName,
  getMockeryDescription,
  getMockeryActionDescription,
  getMockeryCost,
  getMockeryTier,
  getMockeryTierColorClass,
  getMockeryActionIcon,
  getActiveMockeryClass
};

export const getShameActionIcon = (action: MockeryAction) => {
  return getMockeryActionIcon(action);
};

export const getShameActionTitle = (action: MockeryAction) => {
  return getMockeryName(action);
};

export const ShameIcon = ({ 
  action, 
  size = 'md' 
}: { 
  action: ShameAction; 
  size?: 'sm' | 'md' | 'lg' 
}) => {
  // Convert ShameAction to MockeryAction explicitly through unknown to avoid type error
  const actionType = action as unknown as MockeryAction;
  const IconComponent = getShameActionIcon(actionType);
  
  const sizeClass = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl'
  };
  
  return (
    <span className={cn(sizeClass[size])}>
      {IconComponent && <IconComponent />}
    </span>
  );
};

export default ShameIcon;
