
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { Crown, Lock, Mail, User } from 'lucide-react';
import ThroneBackground from '@/components/ui/throne-background';

const Auth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn, signUp, user } = useAuth();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // Login form state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginErrors, setLoginErrors] = useState({ email: '', password: '' });

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

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      const redirectTo = location.state?.from || '/dashboard';
      navigate(redirectTo);
    }
  }, [user, navigate, location]);

  const validateLogin = () => {
    const errors = { email: '', password: '' };
    let isValid = true;

    if (!loginEmail) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(loginEmail)) {
      errors.email = 'Email is invalid';
      isValid = false;
    }

    if (!loginPassword) {
      errors.password = 'Password is required';
      isValid = false;
    }

    setLoginErrors(errors);
    return isValid;
  };

  const validateRegister = () => {
    const errors = { email: '', username: '', password: '', confirmPassword: '' };
    let isValid = true;

    if (!registerEmail) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(registerEmail)) {
      errors.email = 'Email is invalid';
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

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
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

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
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
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <div className="absolute inset-0 -z-10">
        <ThroneBackground variant="purple" density="high" animate={true} />
      </div>
      
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="max-w-md w-full">
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-flex items-center justify-center mb-4">
              <Crown size={40} className="text-royal-gold animate-royal-pulse" />
            </div>
            <h1 className="text-4xl font-royal font-bold royal-gradient mb-2">SpendThrone</h1>
            <p className="text-white/70">Where your worth is measured in dollars spent</p>
          </div>

          <Card className="glass-morphism border-white/10 shadow-xl animate-fade-in" style={{ animationDelay: "100ms" }}>
            <Tabs defaultValue="login">
              <TabsList className="grid grid-cols-2 glass-morphism border-white/10 mb-2">
                <TabsTrigger value="login">Sign In</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login">
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
                          className="glass-morphism border-white/10 pl-10"
                        />
                      </div>
                      {loginErrors.email && <p className="text-xs text-destructive">{loginErrors.email}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-white/40" />
                        <Input 
                          id="password" 
                          type="password" 
                          placeholder="••••••••" 
                          value={loginPassword}
                          onChange={(e) => setLoginPassword(e.target.value)}
                          className="glass-morphism border-white/10 pl-10"
                        />
                      </div>
                      {loginErrors.password && <p className="text-xs text-destructive">{loginErrors.password}</p>}
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
                  </CardContent>
                  <CardFooter>
                    <Button 
                      type="submit" 
                      className="w-full royal-button bg-gradient-royal hover:opacity-90 text-white"
                      disabled={isLoading}
                    >
                      {isLoading ? "Verifying..." : "Enter the Realm"}
                    </Button>
                  </CardFooter>
                </form>
              </TabsContent>
              
              <TabsContent value="register">
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
                          className="glass-morphism border-white/10 pl-10"
                        />
                      </div>
                      {registerErrors.email && <p className="text-xs text-destructive">{registerErrors.email}</p>}
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
                          className="glass-morphism border-white/10 pl-10"
                        />
                      </div>
                      {registerErrors.username && <p className="text-xs text-destructive">{registerErrors.username}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="register-password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-white/40" />
                        <Input 
                          id="register-password" 
                          type="password" 
                          placeholder="••••••••" 
                          value={registerPassword}
                          onChange={(e) => setRegisterPassword(e.target.value)}
                          className="glass-morphism border-white/10 pl-10"
                        />
                      </div>
                      {registerErrors.password && <p className="text-xs text-destructive">{registerErrors.password}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-white/40" />
                        <Input 
                          id="confirm-password" 
                          type="password" 
                          placeholder="••••••••" 
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          className="glass-morphism border-white/10 pl-10"
                        />
                      </div>
                      {registerErrors.confirmPassword && <p className="text-xs text-destructive">{registerErrors.confirmPassword}</p>}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      type="submit" 
                      className="w-full royal-button bg-gradient-royal hover:opacity-90 text-white"
                      disabled={isLoading}
                    >
                      {isLoading ? "Creating Account..." : "Claim Your Title"}
                    </Button>
                  </CardFooter>
                </form>
              </TabsContent>
            </Tabs>
          </Card>
          
          <div className="text-center mt-8 text-sm text-white/50 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <p>By signing up, you agree to our satirical terms of service.<br/>Remember: In this kingdom, your worth is measured by your spending!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
