
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { signInWithEmail } from '@/services/authService';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Mail, KeyRound, Shield } from 'lucide-react';
import FormError from '@/components/auth/FormError';
import PasswordInput from '@/components/auth/PasswordInput';
import OAuthProviders from '@/components/auth/OAuthProviders';
import MagicLinkForm from '@/components/auth/MagicLinkForm';
import PasswordResetForm from '@/components/auth/PasswordResetForm';
import MfaVerification from '@/components/auth/MfaVerification';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [authMethod, setAuthMethod] = useState<'password' | 'magic'>('password');
  const [showResetForm, setShowResetForm] = useState(false);
  const [showMfaVerification, setShowMfaVerification] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }
    
    setError('');
    setIsLoading(true);
    
    try {
      const success = await signInWithEmail(email, password);
      
      if (success) {
        // Simulate MFA requirement for demo purposes
        // In a real app, this would be determined by the server
        if (email.includes('admin')) {
          setShowMfaVerification(true);
        } else {
          // Redirect or other success action would happen here
          console.log('Login successful, redirecting...');
        }
      }
    } catch (err) {
      setError(err.message || 'Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAuthTypeChange = (value: string) => {
    setAuthMethod(value as 'password' | 'magic');
    setError('');
  };

  if (showMfaVerification) {
    return (
      <MfaVerification 
        email={email}
        onCancel={() => setShowMfaVerification(false)}
        onSuccess={() => {
          console.log('MFA verification successful, redirecting...');
          // Redirect or other success action would happen here
        }}
      />
    );
  }

  if (showResetForm) {
    return (
      <PasswordResetForm
        onCancel={() => setShowResetForm(false)}
        onSuccess={() => {
          // Optional: auto-switch back to login after successful reset request
          setTimeout(() => setShowResetForm(false), 3000);
        }}
      />
    );
  }

  return (
    <div className="space-y-4 p-6">
      <Tabs 
        defaultValue="password" 
        value={authMethod} 
        onValueChange={handleAuthTypeChange}
        className="w-full"
      >
        <TabsList className="grid grid-cols-2 w-full mb-6 glass-morphism border-white/10">
          <TabsTrigger value="password" className="data-[state=active]:bg-white/10">
            <KeyRound className="h-4 w-4 mr-2" />
            Password
          </TabsTrigger>
          <TabsTrigger value="magic" className="data-[state=active]:bg-white/10">
            <Mail className="h-4 w-4 mr-2" />
            Magic Link
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="password" className="space-y-4">
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-white/40" />
                  <Input
                    id="email"
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
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Button 
                    variant="link" 
                    className="text-royal-gold p-0 h-auto font-normal text-xs"
                    onClick={() => setShowResetForm(true)}
                    type="button"
                  >
                    Forgot password?
                  </Button>
                </div>
                <PasswordInput
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                />
              </div>
              
              {error && <FormError message={error} />}
              
              <div className="flex items-center space-x-2 mt-4">
                <input
                  type="checkbox"
                  id="remember"
                  className="rounded bg-transparent border-white/20 text-royal-gold"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                <label htmlFor="remember" className="text-sm text-white/70">
                  Remember me for 30 days
                </label>
              </div>
              
              <Button 
                type="submit" 
                className="w-full mt-6 bg-gradient-to-r from-royal-purple to-royal-gold hover:opacity-90 text-white"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="animate-spin mr-2">⚙️</span> Signing in
                  </>
                ) : (
                  <>
                    <Shield className="mr-2 h-4 w-4" /> Sign in
                  </>
                )}
              </Button>
            </div>
          </form>
        </TabsContent>
        
        <TabsContent value="magic">
          <MagicLinkForm onSuccess={() => {
            console.log('Magic link sent successfully');
          }} />
        </TabsContent>
      </Tabs>
      
      <OAuthProviders 
        isLoading={isLoading}
        onSuccess={() => {
          console.log('OAuth login successful');
        }}
      />
    </div>
  );
};

export default LoginForm;
