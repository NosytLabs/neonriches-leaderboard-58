
import React from 'react';
import { cn } from '@/lib/utils';
import { HelpCircle } from 'lucide-react';

interface QuestionCircleProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
}

const QuestionCircle: React.FC<QuestionCircleProps> = ({
  className,
  size = 'md',
  color = 'currentColor'
}) => {
  const sizeMap = {
    xs: 16,
    sm: 20,
    md: 24,
    lg: 32,
    xl: 40
  };
  
  return (
    <HelpCircle 
      className={cn('', className)} 
      size={sizeMap[size]} 
      color={color} 
    />
  );
};

export default QuestionCircle;
