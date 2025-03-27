
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { Crown, Mail, Lock } from 'lucide-react';
import PasswordInput from './PasswordInput';
import FormError from './FormError';
import { validateEmail } from '@/lib/utils';

const LoginForm = () => {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // Login form state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginErrors, setLoginErrors] = useState({ email: '', password: '' });
  
  // Real-time validation states
  const [isValidatingLogin, setIsValidatingLogin] = useState(false);

  // Real-time validation for login form
  useEffect(() => {
    if (isValidatingLogin) {
      validateLogin();
    }
  }, [loginEmail, loginPassword, isValidatingLogin]);

  const validateLogin = () => {
    const errors = { email: '', password: '' };
    let isValid = true;

    const emailValidation = validateEmail(loginEmail);
    if (!emailValidation.isValid) {
      errors.email = emailValidation.message || 'Email is invalid';
      isValid = false;
    }

    if (!loginPassword) {
      errors.password = 'Password is required';
      isValid = false;
    }

    setLoginErrors(errors);
    return isValid;
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsValidatingLogin(true);
    if (!validateLogin()) return;

    setIsLoading(true);
    try {
      await signIn(loginEmail, loginPassword, rememberMe);
      toast({
        title: "Royal Entry Granted",
        description: "Welcome back to your kingdom, noble ruler!",
      });
      navigate('/dashboard');
    } catch (error) {
      toast({
        title: "Entry Denied",
        description: "The royal guards do not recognize your credentials.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <CardHeader>
        <CardTitle>Welcome Back, Noble</CardTitle>
        <CardDescription>
          Enter your credentials to reclaim your rightful spot on the leaderboard.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-4 w-4 text-white/40" />
            <Input 
              id="email" 
              type="email" 
              placeholder="your@email.com" 
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              onFocus={() => setIsValidatingLogin(true)}
              className={`glass-morphism border-white/10 pl-10 transition-all ${
                loginErrors.email ? 'border-destructive' : loginEmail && !loginErrors.email ? 'border-green-500' : ''
              }`}
            />
          </div>
          <FormError message={loginErrors.email} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-4 w-4 text-white/40" />
            <PasswordInput
              id="password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              onFocus={() => setIsValidatingLogin(true)}
              hasError={!!loginErrors.password}
              isValid={!!loginPassword && !loginErrors.password}
            />
          </div>
          <FormError message={loginErrors.password} />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="remember-me" 
            checked={rememberMe} 
            onCheckedChange={(checked) => setRememberMe(checked as boolean)} 
          />
          <label
            htmlFor="remember-me"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Remember me
          </label>
        </div>
        <div className="text-right">
          <button 
            type="button"
            className="text-sm text-white/60 hover:text-royal-gold transition-colors"
          >
            Forgot your password?
          </button>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          type="submit" 
          className="w-full royal-button bg-gradient-royal hover:opacity-90 text-white relative overflow-hidden group"
          disabled={isLoading}
        >
          <span className="relative z-10 flex items-center justify-center">
            {isLoading ? "Verifying..." : (
              <>
                Enter the Realm 
                <Crown className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </span>
        </Button>
      </CardFooter>
    </form>
  );
};

export default LoginForm;
