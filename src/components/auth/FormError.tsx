
import React from 'react';
import { AlertCircle } from 'lucide-react';

interface FormErrorProps {
  message: string;
}

const FormError: React.FC<FormErrorProps> = ({ message }) => {
  if (!message) return null;
  
  return (
    <div className="bg-red-500/10 border border-red-500/30 text-red-500 px-4 py-2 rounded flex items-start">
      <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
      <span>{message}</span>
    </div>
  );
};

export default FormError;
