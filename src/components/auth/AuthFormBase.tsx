
import React, { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import OAuthProviders from './OAuthProviders';
import FormError from './FormError';

interface AuthFormBaseProps {
  title?: string;
  children: ReactNode;
  error: string | null;
  isLoading: boolean;
  submitButtonText: string;
  onSubmit: (e: React.FormEvent) => Promise<void>;
  showOAuth?: boolean;
}

const AuthFormBase: React.FC<AuthFormBaseProps> = ({
  title,
  children,
  error,
  isLoading,
  submitButtonText,
  onSubmit,
  showOAuth = true,
}) => {
  return (
    <div className="space-y-4 py-2">
      {showOAuth && <OAuthProviders />}
      
      {showOAuth && (
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-white/10" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-white/50">Or continue with</span>
          </div>
        </div>
      )}
      
      <form onSubmit={onSubmit} className="space-y-4">
        {error && <FormError message={error} />}
        
        {title && <h3 className="text-lg font-semibold">{title}</h3>}
        
        {children}
        
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? `${submitButtonText}...` : submitButtonText}
        </Button>
      </form>
    </div>
  );
};

export default AuthFormBase;
