
import { useToastContext } from '@/contexts/ToastContext';
import { useAuth } from '@/contexts/auth';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Security levels
export enum SecurityLevel {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
}

// Security check function that takes toast as a parameter
export const securityCheck = (action: string, callback: () => void, toastFn: any) => {
  // Check if user is authenticated
  const token = localStorage.getItem('auth_token');
  
  if (!token) {
    toastFn({
      title: "Authentication Required",
      description: `You must be logged in to ${action}.`,
      variant: "destructive",
    });
    return false;
  }
  
  // If we have a callback, execute it
  if (callback) {
    callback();
  }
  
  return true;
};

// Hook for protected routes
export const useProtectedRoute = (requiredLevel: SecurityLevel = SecurityLevel.LOW) => {
  const { user, isLoading } = useAuth();
  const navigate = useNavigate();
  const { addToast } = useToastContext();
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
  
  useEffect(() => {
    if (!isLoading) {
      if (!user) {
        addToast({
          title: "Authentication Required",
          description: "You must be logged in to access this page.",
          variant: "destructive",
        });
        navigate('/');
        return;
      }
      
      // Check security level
      const userLevel = getUserSecurityLevel(user);
      
      if (!hasRequiredSecurityLevel(userLevel, requiredLevel)) {
        addToast({
          title: "Access Denied",
          description: "You don't have permission to access this page.",
          variant: "destructive",
        });
        navigate('/dashboard');
        return;
      }
      
      setIsAuthorized(true);
    }
  }, [user, isLoading, navigate, requiredLevel, addToast]);
  
  return { isAuthorized, isLoading };
};

// Get user security level based on their role
const getUserSecurityLevel = (user: any): SecurityLevel => {
  if (!user) return SecurityLevel.LOW;
  
  if (user.role === 'admin') return SecurityLevel.HIGH;
  if (user.role === 'moderator') return SecurityLevel.MEDIUM;
  
  return SecurityLevel.LOW;
};

// Check if user has required security level
const hasRequiredSecurityLevel = (userLevel: SecurityLevel, requiredLevel: SecurityLevel): boolean => {
  if (requiredLevel === SecurityLevel.HIGH) {
    return userLevel === SecurityLevel.HIGH;
  }
  
  if (requiredLevel === SecurityLevel.MEDIUM) {
    return userLevel === SecurityLevel.HIGH || userLevel === SecurityLevel.MEDIUM;
  }
  
  return true; // Everyone has LOW access
};

// Encrypt sensitive data
export const encryptData = (data: string): string => {
  // This is a placeholder for actual encryption
  // In a real app, use a proper encryption library
  return btoa(data);
};

// Decrypt sensitive data
export const decryptData = (encryptedData: string): string => {
  // This is a placeholder for actual decryption
  try {
    return atob(encryptedData);
  } catch (e) {
    return '';
  }
};

// Sanitize user input to prevent XSS
export const sanitizeInput = (input: string): string => {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

// Validate email format
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validate password strength
export const isStrongPassword = (password: string): boolean => {
  // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  return passwordRegex.test(password);
};
