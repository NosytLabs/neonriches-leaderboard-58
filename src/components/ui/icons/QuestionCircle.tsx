
import React from 'react';
import { Icon } from '@/components/ui/icon';
import { cn } from '@/lib/utils';

interface QuestionCircleProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
}

const QuestionCircle: React.FC<QuestionCircleProps> = ({ 
  className, 
  size = 'md', 
  color
}) => {
  return (
    <Icon 
      name="help" 
      size={size} 
      className={cn(className)} 
      color={color}
    />
  );
};

export default QuestionCircle;
