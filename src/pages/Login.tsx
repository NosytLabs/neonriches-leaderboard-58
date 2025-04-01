
import React from 'react';
import Shell from '@/components/ui/shell';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/auth';
import PageSEO from '@/components/common/PageSEO';

const Login: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const { signIn } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const success = await signIn(email, password);
      
      if (success) {
        toast({
          title: "Login Successful",
          description: "Welcome back to the royal court!",
          variant: "default",
        });
        navigate('/dashboard');
      } else {
        toast({
          title: "Login Failed",
          description: "Invalid email or password. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Login Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Shell>
      <PageSEO 
        title="Login to Your Royal Account - SpendThrone" 
        description="Log in to SpendThrone to access your royal dashboard, check your rank, and continue your journey to the throne."
      />
      
      <div className="container max-w-md mx-auto py-12">
        <Card className="glass-morphism border-white/10">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Royal Login</CardTitle>
            <CardDescription className="text-center">
              Enter your credentials to access your kingdom
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="noble@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="glass-morphism border-white/10"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link 
                    to="/forgot-password" 
                    className="text-xs text-royal-gold hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="glass-morphism border-white/10"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-royal-gold hover:bg-royal-gold/90 text-black"
                disabled={isLoading}
              >
                {isLoading ? 'Signing In...' : 'Sign In'}
              </Button>
              
              <div className="text-center text-sm mt-4">
                <span className="text-white/70">Don't have a royal account? </span>
                <Link to="/signup" className="text-royal-gold hover:underline">
                  Register
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </Shell>
  );
};

export default Login;
