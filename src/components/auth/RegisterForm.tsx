
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { signUpWithEmail } from '@/services/authService';
import { Mail, User, Shield } from 'lucide-react';
import FormError from '@/components/auth/FormError';
import PasswordInput from '@/components/auth/PasswordInput';
import OAuthProviders from '@/components/auth/OAuthProviders';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [agreedTerms, setAgreedTerms] = useState(false);

  // Password strength indicators
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [passwordFeedback, setPasswordFeedback] = useState('');

  const checkPasswordStrength = (pass: string) => {
    if (!pass) {
      setPasswordStrength(0);
      setPasswordFeedback('');
      return;
    }
    
    let strength = 0;
    let feedback = '';
    
    // Length check
    if (pass.length >= 8) strength += 1;
    
    // Contains number
    if (/\d/.test(pass)) strength += 1;
    
    // Contains special char
    if (/[!@#$%^&*(),.?":{}|<>]/.test(pass)) strength += 1;
    
    // Contains uppercase
    if (/[A-Z]/.test(pass)) strength += 1;
    
    // Contains lowercase
    if (/[a-z]/.test(pass)) strength += 1;
    
    // Set feedback
    if (strength < 2) {
      feedback = 'Weak password';
    } else if (strength < 4) {
      feedback = 'Moderate password';
    } else {
      feedback = 'Strong password';
    }
    
    setPasswordStrength(strength);
    setPasswordFeedback(feedback);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    checkPasswordStrength(newPassword);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate inputs
    if (!email || !username || !password || !confirmPassword) {
      setError('All fields are required');
      return;
    }
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    if (passwordStrength < 2) {
      setError('Please use a stronger password');
      return;
    }
    
    if (!agreedTerms) {
      setError('You must agree to the terms and conditions');
      return;
    }
    
    setError('');
    setIsLoading(true);
    
    try {
      const success = await signUpWithEmail(email, password);
      
      if (success) {
        // Registration successful
        console.log('Registration successful');
      }
    } catch (err) {
      setError(err.message || 'Failed to create account');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4 p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="register-email">Email</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-4 w-4 text-white/40" />
            <Input
              id="register-email"
              placeholder="your.email@example.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10 glass-morphism border-white/10"
              disabled={isLoading}
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <div className="relative">
            <User className="absolute left-3 top-3 h-4 w-4 text-white/40" />
            <Input
              id="username"
              placeholder="royaluser"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="pl-10 glass-morphism border-white/10"
              disabled={isLoading}
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="register-password">Password</Label>
          <PasswordInput
            id="register-password"
            value={password}
            onChange={handlePasswordChange}
            disabled={isLoading}
          />
          
          {password && (
            <div className="mt-2">
              <div className="flex gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-1 flex-1 rounded-full ${
                      i < passwordStrength 
                        ? passwordStrength < 2 
                          ? 'bg-red-500' 
                          : passwordStrength < 4 
                            ? 'bg-yellow-500' 
                            : 'bg-green-500'
                        : 'bg-white/10'
                    }`}
                  />
                ))}
              </div>
              <p className={`text-xs ${
                passwordStrength < 2 
                  ? 'text-red-400' 
                  : passwordStrength < 4 
                    ? 'text-yellow-400' 
                    : 'text-green-400'
              }`}>
                {passwordFeedback}
              </p>
            </div>
          )}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="confirm-password">Confirm Password</Label>
          <PasswordInput
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            disabled={isLoading}
          />
          
          {confirmPassword && password !== confirmPassword && (
            <p className="text-xs text-red-400 mt-1">Passwords do not match</p>
          )}
        </div>
        
        {error && <FormError message={error} />}
        
        <div className="flex items-center space-x-2 mt-4">
          <input
            type="checkbox"
            id="terms"
            className="rounded bg-transparent border-white/20 text-royal-gold"
            checked={agreedTerms}
            onChange={(e) => setAgreedTerms(e.target.checked)}
          />
          <label htmlFor="terms" className="text-sm text-white/70">
            I agree to the terms of service and privacy policy
          </label>
        </div>
        
        <Button 
          type="submit" 
          className="w-full mt-6 bg-gradient-to-r from-royal-purple to-royal-gold hover:opacity-90 text-white"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <span className="animate-spin mr-2">⚙️</span> Creating Account
            </>
          ) : (
            <>
              <Shield className="mr-2 h-4 w-4" /> Create Account
            </>
          )}
        </Button>
      </form>
      
      <OAuthProviders 
        isLoading={isLoading}
        onSuccess={() => {
          console.log('OAuth registration successful');
        }}
      />
    </div>
  );
};

export default RegisterForm;
