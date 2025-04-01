
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { verifyMfaCode } from '@/services/mockAuthService';
import { Shield, ShieldCheck } from 'lucide-react';
import FormError from '@/components/auth/FormError';

interface MfaVerificationProps {
  email: string;
  onCancel: () => void;
  onSuccess: () => void;
}

const MfaVerification: React.FC<MfaVerificationProps> = ({ 
  email,
  onCancel,
  onSuccess 
}) => {
  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!code || code.length < 6) {
      setError('Please enter a valid verification code');
      return;
    }
    
    setError('');
    setIsLoading(true);
    
    try {
      const success = await verifyMfaCode(code);
      
      if (success) {
        onSuccess();
      }
    } catch (err) {
      setError(err.message || 'Failed to verify code');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="text-center mb-4">
        <Shield className="mx-auto h-10 w-10 text-royal-gold" />
        <h3 className="text-xl font-bold mt-2">Two-Step Verification</h3>
        <p className="text-white/70 text-sm mt-1">
          Enter the verification code sent to {email}
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="mfa-code">Verification Code</Label>
          <Input
            id="mfa-code"
            placeholder="123456"
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value.replace(/[^0-9]/g, ''))}
            className="text-center text-lg tracking-widest font-mono glass-morphism border-white/10"
            maxLength={6}
            disabled={isLoading}
          />
          <div className="text-center text-white/40 text-xs">
            Didn't receive a code? Check your spam folder
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
            Back
          </Button>
          
          <Button 
            type="submit" 
            className="flex-1 glass-morphism bg-gradient-to-r from-royal-purple to-royal-gold hover:opacity-90 text-white"
            disabled={isLoading || code.length !== 6}
          >
            {isLoading ? (
              <>
                <span className="animate-spin mr-2">⚙️</span> Verifying
              </>
            ) : (
              <>
                <ShieldCheck className="mr-2 h-4 w-4" /> Verify
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default MfaVerification;
