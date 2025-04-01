
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { signInWithEmail } from '@/services/mockAuthService';
import { Mail, Wand2 } from 'lucide-react';
import FormError from '@/components/auth/FormError';

interface MagicLinkFormProps {
  onSuccess?: () => void;
}

const MagicLinkForm: React.FC<MagicLinkFormProps> = ({ onSuccess }) => {
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
      const success = await signInWithEmail(email);
      
      if (success) {
        setSent(true);
        if (onSuccess) onSuccess();
      }
    } catch (err: any) {
      setError(err.message || 'Failed to send magic link');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      {sent ? (
        <div className="p-4 glass-morphism border-white/10 rounded-lg text-center space-y-3">
          <Wand2 className="mx-auto h-8 w-8 text-royal-gold animate-pulse" />
          <h3 className="text-lg font-semibold">Magic Link Sent!</h3>
          <p className="text-white/70">
            Check your email ({email}) for a link to sign in instantly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="magic-email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-white/40" />
              <Input
                id="magic-email"
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
          
          <Button 
            type="submit" 
            className="w-full glass-morphism bg-gradient-to-r from-royal-purple to-royal-gold hover:opacity-90 text-white"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="animate-spin mr-2">⚙️</span> Sending Link
              </>
            ) : (
              <>
                <Wand2 className="mr-2 h-4 w-4" /> Send Magic Link
              </>
            )}
          </Button>
        </form>
      )}
    </div>
  );
};

export default MagicLinkForm;
