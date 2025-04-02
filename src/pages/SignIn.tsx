import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Shell from '@/components/Shell';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import RoyalDivider from '@/components/ui/royal-divider';
import { Crown } from 'lucide-react';
import { useAuth } from '@/contexts/auth';
import { useToast } from '@/hooks/use-toast';
import usePageTracking from '@/hooks/usePageTracking';

const SignIn = () => {
  usePageTracking();
  const { login, isAuthenticated, user } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated && user) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: "Missing credentials",
        description: "Please provide both email and password to enter the royal court.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      await login(email, password);
      toast({
        title: "Welcome back, noble!",
        description: "The court welcomes your return.",
      });
      navigate('/dashboard');
    } catch (error) {
      toast({
        title: "Access denied",
        description: "The royal guards do not recognize your credentials.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Shell>
      <PageSEO 
        title="Sign In to Your Noble Account" 
        description="Return to the royal court and continue your ascension through the ranks. Your throne awaits."
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <Crown className="h-12 w-12 text-royal-gold mx-auto mb-4" />
            <h1 className="text-3xl font-bold royal-gradient">Return to Court</h1>
            <p className="text-white/70 mt-2">Resume your noble ascension</p>
          </div>
          
          <Card className="glass-morphism border-white/10">
            <CardHeader>
              <CardTitle>Royal Authentication</CardTitle>
              <CardDescription>Enter your credentials to access your throne</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="noble@example.com"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Your secret royal code"
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Verifying..." : "Enter the Court"}
                  </Button>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <RoyalDivider variant="line" />
              <div className="text-center text-sm text-white/70">
                <p>Not yet a member of the nobility?</p>
                <Link to="/auth/signup" className="text-royal-gold hover:underline">
                  Purchase Your Title
                </Link>
              </div>
            </CardFooter>
          </Card>
          
          <div className="text-center mt-8 text-sm text-white/50">
            <p>By signing in, you agree to our ridiculous</p>
            <div className="flex justify-center space-x-2">
              <Link to="/terms" className="text-royal-gold/70 hover:text-royal-gold">Terms of Service</Link>
              <span>and</span>
              <Link to="/privacy" className="text-royal-gold/70 hover:text-royal-gold">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </Shell>
  );
};

export default SignIn;
