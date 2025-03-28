
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Loader2, Mail, Lock, User, AlertCircle, Crown } from 'lucide-react';
import { useAuth } from '@/contexts/auth';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { motion } from 'framer-motion';
import { Checkbox } from '@/components/ui/checkbox';

interface RegisterFormProps {
  onSuccess: () => void;
  onSwitchToLogin?: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSuccess, onSwitchToLogin }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { register } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    
    if (password !== confirmPassword) {
      setErrorMessage('Royal decrees must match! Please ensure both passwords are identical.');
      return;
    }
    
    if (!agreeToTerms) {
      setErrorMessage('You must pledge allegiance to our royal terms to proceed.');
      return;
    }
    
    setIsLoading(true);

    try {
      await register(username, email, password);
      onSuccess();
    } catch (error: any) {
      setErrorMessage(error.message || 'Failed to register your royal account');
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
              <AlertTitle>Registration Failed</AlertTitle>
              <AlertDescription>
                {errorMessage}
              </AlertDescription>
            </Alert>
          </motion.div>
        )}

        <div className="space-y-2">
          <Label htmlFor="username" className="flex items-center gap-2">
            <User className="h-4 w-4 text-royal-gold" />
            Royal Title
          </Label>
          <Input
            id="username"
            type="text"
            placeholder="LordOfWealth"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="glass-morphism border-white/10 focus:border-royal-gold/50 focus:ring-royal-gold/20"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="register-email" className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-royal-gold" />
            Royal Email
          </Label>
          <Input
            id="register-email"
            type="email"
            placeholder="your.majesty@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="glass-morphism border-white/10 focus:border-royal-gold/50 focus:ring-royal-gold/20"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="register-password" className="flex items-center gap-2">
            <Lock className="h-4 w-4 text-royal-gold" />
            Royal Password
          </Label>
          <Input
            id="register-password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="glass-morphism border-white/10 focus:border-royal-gold/50 focus:ring-royal-gold/20"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirm-password" className="flex items-center gap-2">
            <Lock className="h-4 w-4 text-royal-gold" />
            Confirm Royal Password
          </Label>
          <Input
            id="confirm-password"
            type="password"
            placeholder="••••••••"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="glass-morphism border-white/10 focus:border-royal-gold/50 focus:ring-royal-gold/20"
            required
          />
        </div>

        <div className="pt-2">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="terms" 
              checked={agreeToTerms}
              onCheckedChange={(checked) => setAgreeToTerms(checked === true)}
              className="border-royal-gold/50 data-[state=checked]:bg-royal-gold data-[state=checked]:text-black"
            />
            <label
              htmlFor="terms"
              className="text-sm text-white/70 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I pledge allegiance to the royal terms and privacy policy
            </label>
          </div>
        </div>

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-royal-gold via-amber-500 to-royal-gold text-black font-bold tracking-wide hover:opacity-90 transition-all royal-shadow"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Creating Royal Account...
            </>
          ) : (
            'Claim Your Throne'
          )}
        </Button>
        
        {onSwitchToLogin && (
          <div className="text-center mt-4">
            <button
              type="button"
              onClick={onSwitchToLogin}
              className="text-sm text-white/70 hover:text-royal-gold transition-colors"
            >
              Already nobility? Sign in to your account
            </button>
          </div>
        )}
      </form>
    </motion.div>
  );
};

export default RegisterForm;
