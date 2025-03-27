
/**
 * Security utilities for client-side protection.
 * Note: These are basic protections - comprehensive security requires server-side validation.
 */

import { toast } from '@/hooks/use-toast';

// Basic input sanitization to prevent XSS
export const sanitizeInput = (input: string): string => {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

// Validate URLs to prevent common injection attacks
export const isValidUrl = (url: string): boolean => {
  try {
    const parsedUrl = new URL(url);
    return ['http:', 'https:'].includes(parsedUrl.protocol);
  } catch (e) {
    return false;
  }
};

// Simple CSRF token management
export const getCsrfToken = (): string => {
  let token = localStorage.getItem('csrf_token');
  
  if (!token) {
    token = generateRandomToken();
    localStorage.setItem('csrf_token', token);
  }
  
  return token;
};

// Generate a random token for CSRF protection
const generateRandomToken = (): string => {
  const array = new Uint8Array(16);
  window.crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

// Add CSRF token to requests
export const addSecurityHeaders = (headers: Record<string, string> = {}): Record<string, string> => {
  return {
    ...headers,
    'X-CSRF-Token': getCsrfToken(),
  };
};

// Security event monitoring
export const monitorSecurityEvents = (): void => {
  // Monitor suspicious activity
  window.addEventListener('error', (e) => {
    if (e.message.includes('script') || e.message.includes('eval')) {
      console.warn('Potential security issue detected:', e);
      toast({
        title: "Security Alert",
        description: "Suspicious activity was detected and blocked.",
        variant: "destructive",
      });
    }
  });
};

// Initialize security monitoring
export const initSecurity = (): void => {
  monitorSecurityEvents();
  
  // Content Security Policy check
  if (!document.head.querySelector('meta[http-equiv="Content-Security-Policy"]')) {
    console.warn('CSP not detected. Consider adding a Content-Security-Policy header for improved security.');
  }
};
