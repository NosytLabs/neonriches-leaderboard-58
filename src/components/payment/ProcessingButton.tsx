
import React from 'react';
import { Button, ButtonProps } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';

interface ProcessingButtonProps extends Omit<ButtonProps, 'children'> {
  text: string;
  processingText?: string;
  icon?: LucideIcon;
  isProcessing: boolean;
  onClick: () => void;
}

const ProcessingButton = ({ 
  text, 
  processingText = "Processing...", 
  icon: Icon, 
  isProcessing, 
  onClick, 
  className = "", 
  ...props
}: ProcessingButtonProps) => {
  return (
    <Button 
      className={className}
      onClick={onClick}
      disabled={isProcessing || props.disabled}
      {...props}
    >
      {isProcessing ? (
        <div className="flex items-center">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
          {processingText}
        </div>
      ) : (
        <>
          {Icon && <Icon size={16} className="mr-2" />}
          {text}
        </>
      )}
    </Button>
  );
};

export default ProcessingButton;
