
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { resetPassword } from '@/services/authService';
import { Mail, RefreshCw } from 'lucide-react';
import FormError from '@/components/auth/FormError';

interface PasswordResetFormProps {
  onCancel: () => void;
  onSuccess?: () => void;
}

const PasswordResetForm: React.FC<PasswordResetFormProps> = ({ 
  onCancel,
  onSuccess 
}) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError('Please enter your email address');
      return;
    }
    
    setError('');
    setIsLoading(true);
    
    try {
      const success = await resetPassword(email);
      
      if (success) {
        setSent(true);
        if (onSuccess) onSuccess();
      }
    } catch (err) {
      setError(err.message || 'Failed to send reset email');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="text-center mb-4">
        <h3 className="text-lg font-semibold">Reset Your Password</h3>
        <p className="text-white/70 text-sm">
          Enter your email and we'll send you a password reset link
        </p>
      </div>
      
      {sent ? (
        <div className="p-4 glass-morphism border-white/10 rounded-lg text-center space-y-3">
          <RefreshCw className="mx-auto h-8 w-8 text-royal-gold animate-spin-slow" />
          <h3 className="text-lg font-semibold">Reset Email Sent!</h3>
          <p className="text-white/70">
            Check your email ({email}) for a link to reset your password.
          </p>
          <Button
            variant="outline"
            className="mt-4 w-full glass-morphism border-white/10"
            onClick={onCancel}
          >
            Back to Login
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="reset-email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-white/40" />
              <Input
                id="reset-email"
                placeholder="your.email@example.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 glass-morphism border-white/10"
                disabled={isLoading}
              />
            </div>
          </div>
          
          {error && <FormError message={error} />}
          
          <div className="flex space-x-2">
            <Button 
              type="button" 
              variant="outline"
              className="flex-1 glass-morphism border-white/10"
              onClick={onCancel}
              disabled={isLoading}
            >
              Cancel
            </Button>
            
            <Button 
              type="submit" 
              className="flex-1 glass-morphism bg-gradient-to-r from-royal-purple to-royal-gold hover:opacity-90 text-white"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="animate-spin mr-2">⚙️</span> Sending
                </>
              ) : (
                <>
                  <RefreshCw className="mr-2 h-4 w-4" /> Reset Password
                </>
              )}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default PasswordResetForm;
