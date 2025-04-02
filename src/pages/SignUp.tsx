import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shell } from '@/components/ui/shell';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import CardDescription from '@/components/ui/CardDescription';
import { Crown, Mail, Lock, User, UserPlus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    document.title = "Sign Up | SpendThrone";
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Success",
        description: "Account created successfully!",
      });
      navigate('/login');
    }, 2000);
  };

  return (
    <Shell>
      
      <div className="container relative flex h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex">
          <div className="absolute inset-0 bg-zinc-900/80" />
          <div className="relative z-20 mt-auto">
            <div className="i mb-4 flex items-center gap-2">
              <Crown className="h-6 w-6 text-royal-gold" />
              <h2 className="text-lg font-medium">
                SpendThrone
              </h2>
            </div>
            <p className="line-clamp-2 text-sm text-muted-foreground">
              Create your account to join the royal court.
            </p>
          </div>
        </div>
        
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <CardDescription>
                Enter your email below to create your account
              </CardDescription>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  placeholder="Enter your username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="Enter your email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  placeholder="Enter your password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <Button disabled={isSubmitting} className="w-full">
                {isSubmitting ? (
                  <>
                    Creating Account...
                  </>
                ) : (
                  <>
                    Create Account
                  </>
                )}
              </Button>
            </form>
            
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking above, you agree to our
              <a
                href="/terms"
                className="underline underline-offset-2 hover:text-royal-gold"
              >
                Terms of Service
              </a>{" "}
              and
              <a
                href="/privacy"
                className="underline underline-offset-2 hover:text-royal-gold"
              >
                Privacy Policy
              </a>.
            </p>
          </div>
        </div>
      </div>
    
    </Shell>
  );
};

export default SignUpPage;
