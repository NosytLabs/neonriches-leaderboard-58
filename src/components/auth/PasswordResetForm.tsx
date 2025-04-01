import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { resetPassword } from '@/services/mockAuthService';

interface PasswordResetFormProps {
  onSuccess?: () => void;
  onCancel?: () => void;
}

const PasswordResetForm: React.FC<PasswordResetFormProps> = ({ onSuccess, onCancel }) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: 'Invalid Email',
        description: 'Please enter a valid email address.',
        variant: 'destructive',
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      const success = await resetPassword(email);
      
      if (success) {
        toast({
          title: 'Password Reset Email Sent',
          description: 'Check your inbox for instructions to reset your password.',
        });
        
        if (onSuccess) {
          onSuccess();
        }
      } else {
        toast({
          title: 'Reset Failed',
          description: 'We couldn\'t process your request. Please try again later.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      console.error('Password reset error:', error);
      toast({
        title: 'Something Went Wrong',
        description: 'An unexpected error occurred. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="glass-morphism border-white/10"
        />
      </div>
      
      <div className="flex justify-between space-x-2">
        {onCancel && (
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
            className="flex-1"
          >
            Cancel
          </Button>
        )}
        
        <Button 
          type="submit" 
          className={onCancel ? 'flex-1' : 'w-full'}
          disabled={isLoading}
        >
          {isLoading ? 'Sending...' : 'Reset Password'}
        </Button>
      </div>
    </form>
  );
};

export default PasswordResetForm;
