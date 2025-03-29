
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { RoyalDivider } from '@/components/ui/royal-divider';
import Shell from '@/components/Shell';
import { useAuth } from '@/contexts/auth';
import { Label } from '@/components/ui/label';
import { Crown, Shield } from 'lucide-react';

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const { signin } = useAuth();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Simulate signin
      console.log('Signin with:', { email, password });
      
      // In a real app, we would call the signin function
      // await signin(email, password);
      
      // Redirect to dashboard or home
      navigate('/dashboard');
    } catch (error) {
      console.error('Signin failed:', error);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <Shell>
      <div className="flex items-center justify-center min-h-[80vh] bg-background p-4">
        <Card className="w-full max-w-md glass-morphism border-white/10">
          <CardHeader>
            <div className="flex items-center justify-center mb-2">
              <Shield className="h-6 w-6 text-royal-gold mr-2" />
              <CardTitle className="text-2xl font-royal tracking-wide">Royal Court Access</CardTitle>
            </div>
            <RoyalDivider variant="line" className="my-2" />
            <CardDescription className="text-center">
              Enter your credentials to access the royal leaderboard
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Royal Decree Address</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="your@royal-email.com"
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Secret Password</Label>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="Your royal secret"
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  required 
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-royal-gold hover:bg-royal-gold/90 text-black"
                disabled={loading}
              >
                {loading ? 'Verifying Royal Seal...' : 'Enter the Court'}
              </Button>
            </form>
            
            <RoyalDivider variant="fancy" />
            
            <div className="text-center">
              <p className="mb-4">Don't have a royal account yet?</p>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/signup">Create Account</Link>
              </Button>
            </div>
          </CardContent>
          
          <CardFooter className="flex justify-center">
            <Button variant="link" asChild>
              <Link to="/">Return to the Royal Court</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </Shell>
  );
};

export default SignIn;
