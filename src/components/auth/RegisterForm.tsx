
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { Crown, Mail, User, Lock } from 'lucide-react';
import PasswordInput from './PasswordInput';
import FormError from './FormError';
import { validateEmail } from '@/lib/utils';

const RegisterForm = () => {
  const navigate = useNavigate();
  const { signUp } = useAuth();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  
  // Register form state
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registerErrors, setRegisterErrors] = useState({ 
    email: '', 
    username: '', 
    password: '', 
    confirmPassword: '' 
  });

  // Real-time validation states
  const [isValidatingRegister, setIsValidatingRegister] = useState(false);

  // Real-time validation for register form
  useEffect(() => {
    if (isValidatingRegister) {
      validateRegister();
    }
  }, [registerEmail, registerUsername, registerPassword, confirmPassword, isValidatingRegister]);

  const validateRegister = () => {
    const errors = { email: '', username: '', password: '', confirmPassword: '' };
    let isValid = true;

    const emailValidation = validateEmail(registerEmail);
    if (!emailValidation.isValid) {
      errors.email = emailValidation.message || 'Email is invalid';
      isValid = false;
    }

    if (!registerUsername) {
      errors.username = 'Username is required';
      isValid = false;
    } else if (registerUsername.length < 3) {
      errors.username = 'Username must be at least 3 characters';
      isValid = false;
    }

    if (!registerPassword) {
      errors.password = 'Password is required';
      isValid = false;
    } else if (registerPassword.length < 6) {
      errors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    if (!confirmPassword) {
      errors.confirmPassword = 'Please confirm your password';
      isValid = false;
    } else if (registerPassword !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    setRegisterErrors(errors);
    return isValid;
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsValidatingRegister(true);
    if (!validateRegister()) return;

    setIsLoading(true);
    try {
      await signUp(registerEmail, registerUsername, registerPassword);
      toast({
        title: "Noble Title Granted!",
        description: "Welcome to SpendThrone! Your journey to royal status begins now.",
      });
      navigate('/dashboard');
    } catch (error) {
      toast({
        title: "Registration Failed",
        description: "Unable to create your royal account. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <CardHeader>
        <CardTitle>Create Royal Account</CardTitle>
        <CardDescription>
          Start your journey to the top of the SpendThrone.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="register-email">Email</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-4 w-4 text-white/40" />
            <Input 
              id="register-email" 
              type="email" 
              placeholder="your@email.com" 
              value={registerEmail}
              onChange={(e) => setRegisterEmail(e.target.value)}
              onFocus={() => setIsValidatingRegister(true)}
              className={`glass-morphism border-white/10 pl-10 transition-all ${
                registerErrors.email ? 'border-destructive' : registerEmail && !registerErrors.email ? 'border-green-500' : ''
              }`}
            />
          </div>
          <FormError message={registerErrors.email} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <div className="relative">
            <User className="absolute left-3 top-3 h-4 w-4 text-white/40" />
            <Input 
              id="username" 
              type="text" 
              placeholder="NobleName" 
              value={registerUsername}
              onChange={(e) => setRegisterUsername(e.target.value)}
              onFocus={() => setIsValidatingRegister(true)}
              className={`glass-morphism border-white/10 pl-10 transition-all ${
                registerErrors.username ? 'border-destructive' : registerUsername && !registerErrors.username ? 'border-green-500' : ''
              }`}
            />
          </div>
          <FormError message={registerErrors.username} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="register-password">Password</Label>
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-4 w-4 text-white/40" />
            <PasswordInput
              id="register-password"
              value={registerPassword}
              onChange={(e) => setRegisterPassword(e.target.value)}
              onFocus={() => setIsValidatingRegister(true)}
              hasError={!!registerErrors.password}
              isValid={!!registerPassword && !registerErrors.password}
            />
          </div>
          <FormError message={registerErrors.password} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirm-password">Confirm Password</Label>
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-4 w-4 text-white/40" />
            <PasswordInput
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onFocus={() => setIsValidatingRegister(true)}
              hasError={!!registerErrors.confirmPassword}
              isValid={!!confirmPassword && !registerErrors.confirmPassword}
            />
          </div>
          <FormError message={registerErrors.confirmPassword} />
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          type="submit" 
          className="w-full royal-button bg-gradient-royal hover:opacity-90 text-white relative overflow-hidden group"
          disabled={isLoading}
        >
          <span className="relative z-10 flex items-center justify-center">
            {isLoading ? "Creating Account..." : (
              <>
                Claim Your Title 
                <Crown className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </span>
        </Button>
      </CardFooter>
    </form>
  );
};

export default RegisterForm;
