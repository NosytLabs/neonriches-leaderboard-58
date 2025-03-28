
import React, { createContext, useContext, useState, useCallback } from 'react';
import { 
  validateNobleTitle, 
  validateStatusUpdate,
  NobleTitle,
  StatusUpdate
} from '@/utils/content-validation';
import { useToast } from '@/hooks/use-toast';

interface ValidationContextProps {
  validateTitle: (title: Partial<NobleTitle>, existingTitles?: NobleTitle[]) => Promise<{ success: boolean; data?: NobleTitle; error?: string }>;
  validateStatus: (status: Partial<StatusUpdate>) => { success: boolean; data?: StatusUpdate; error?: string };
  isValidating: boolean;
  validationError: string | null;
  clearValidationError: () => void;
}

const ValidationContext = createContext<ValidationContextProps | undefined>(undefined);

export const ValidationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isValidating, setIsValidating] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);
  const { toast } = useToast();

  const validateTitle = useCallback(async (
    title: Partial<NobleTitle>, 
    existingTitles: NobleTitle[] = []
  ) => {
    setIsValidating(true);
    setValidationError(null);
    
    try {
      const result = await validateNobleTitle(title, existingTitles);
      
      if (!result.success && result.error) {
        setValidationError(result.error);
        toast({
          title: "Validation Error",
          description: result.error,
          variant: "destructive",
          duration: 5000,
        });
      }
      
      return result;
    } catch (error) {
      const errorMessage = (error as Error).message || "Failed to validate title";
      setValidationError(errorMessage);
      toast({
        title: "Validation Error",
        description: errorMessage,
        variant: "destructive",
        duration: 5000,
      });
      return { success: false, error: errorMessage };
    } finally {
      setIsValidating(false);
    }
  }, [toast]);

  const validateStatus = useCallback((status: Partial<StatusUpdate>) => {
    setIsValidating(true);
    setValidationError(null);
    
    try {
      const result = validateStatusUpdate(status);
      
      if (!result.success && result.error) {
        setValidationError(result.error);
        toast({
          title: "Validation Error",
          description: result.error,
          variant: "destructive",
          duration: 5000,
        });
      }
      
      return result;
    } catch (error) {
      const errorMessage = (error as Error).message || "Failed to validate status";
      setValidationError(errorMessage);
      toast({
        title: "Validation Error",
        description: errorMessage,
        variant: "destructive",
        duration: 5000,
      });
      return { success: false, error: errorMessage };
    } finally {
      setIsValidating(false);
    }
  }, [toast]);

  const clearValidationError = useCallback(() => {
    setValidationError(null);
  }, []);

  return (
    <ValidationContext.Provider 
      value={{ 
        validateTitle,
        validateStatus,
        isValidating,
        validationError,
        clearValidationError
      }}
    >
      {children}
    </ValidationContext.Provider>
  );
};

export const useValidation = () => {
  const context = useContext(ValidationContext);
  if (context === undefined) {
    throw new Error('useValidation must be used within a ValidationProvider');
  }
  return context;
};
