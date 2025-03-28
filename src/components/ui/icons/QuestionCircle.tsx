
import React from 'react';
import { HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface QuestionCircleProps {
  className?: string;
  size?: number;
  color?: string;
}

const QuestionCircle: React.FC<QuestionCircleProps> = ({ 
  className, 
  size = 24, 
  color = "currentColor" 
}) => {
  return (
    <HelpCircle className={cn(className)} size={size} color={color} />
  );
};

export default QuestionCircle;
