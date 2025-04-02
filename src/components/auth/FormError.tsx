
import React from 'react';
import { AlertCircle } from 'lucide-react';

interface FormErrorProps {
  message: string;
}

const FormError: React.FC<FormErrorProps> = ({ message }) => {
  if (!message) return null;
  
  return (
    <div className="bg-destructive/15 border border-destructive/30 rounded-md p-3 flex items-start">
      <AlertCircle className="h-4 w-4 text-destructive mt-0.5 mr-2 flex-shrink-0" />
      <span className="text-sm text-destructive">{message}</span>
    </div>
  );
};

export default FormError;
