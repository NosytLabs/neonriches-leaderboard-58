
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Loader2, Mail, Lock, AlertCircle } from 'lucide-react';
import { useAuth } from '@/contexts/auth';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { motion } from 'framer-motion';

interface LoginFormProps {
  onSuccess: () => void;
  onSwitchToRegister?: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSuccess, onSwitchToRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setIsLoading(true);

    try {
      await login(email, password);
      onSuccess();
    } catch (error: any) {
      setErrorMessage(error.message || 'Failed to sign in');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {errorMessage && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Alert variant="destructive" className="bg-royal-crimson/20 border-royal-crimson/40">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Authentication Failed</AlertTitle>
              <AlertDescription>
                {errorMessage}
              </AlertDescription>
            </Alert>
          </motion.div>
        )}

        <div className="space-y-2">
          <Label htmlFor="email" className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-royal-gold" />
            Royal Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="your.majesty@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="glass-morphism border-white/10 focus:border-royal-gold/50 focus:ring-royal-gold/20"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password" className="flex items-center gap-2">
            <Lock className="h-4 w-4 text-royal-gold" />
            Royal Key
          </Label>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="glass-morphism border-white/10 focus:border-royal-gold/50 focus:ring-royal-gold/20"
            required
          />
        </div>

        <div className="flex justify-between items-center pt-2">
          <a 
            href="#" 
            className="text-sm text-white/60 hover:text-royal-gold transition-colors"
          >
            Forgot your royal key?
          </a>
        </div>

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-royal-gold via-amber-500 to-royal-gold text-black font-bold tracking-wide hover:opacity-90 transition-all royal-shadow"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Authenticating...
            </>
          ) : (
            'Enter the Court'
          )}
        </Button>
        
        {onSwitchToRegister && (
          <div className="text-center mt-4">
            <button
              type="button"
              onClick={onSwitchToRegister}
              className="text-sm text-white/70 hover:text-royal-gold transition-colors"
            >
              Don't have an account? Join the nobility
            </button>
          </div>
        )}
      </form>
    </motion.div>
  );
};

export default LoginForm;
