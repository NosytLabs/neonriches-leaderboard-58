
import React from 'react';
import { AlertCircle } from 'lucide-react';

interface FormErrorProps {
  message: string;
}

const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;
  
  return (
    <div className="flex items-center text-xs text-destructive mt-1">
      <AlertCircle className="h-3 w-3 mr-1" />
      {message}
    </div>
  );
};

export default FormError;
