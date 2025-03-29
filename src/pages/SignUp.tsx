
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { RoyalDivider } from '@/components/ui/royal-divider';
import Shell from '@/components/Shell';
import { useAuth } from '@/contexts/auth';
import { Label } from '@/components/ui/label';
import { Crown } from 'lucide-react';

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Simulate signup
      console.log('Signup with:', { email, password, username });
      
      // In a real app, we would call the signup function
      // await signup(email, password, username);
      
      // Redirect to dashboard or home
      navigate('/dashboard');
    } catch (error) {
      console.error('Signup failed:', error);
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
              <Crown className="h-6 w-6 text-royal-gold mr-2" />
              <CardTitle className="text-2xl font-royal tracking-wide">Join the Royal Court</CardTitle>
            </div>
            <RoyalDivider variant="line" className="my-2" />
            <CardDescription className="text-center">
              Create an account to climb the royal leaderboard and mock the peasants
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Royal Title</Label>
                <Input 
                  id="username" 
                  type="text" 
                  placeholder="Choose your noble name"
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)} 
                  required 
                />
              </div>
              
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
                {loading ? 'Forging Royal Seal...' : 'Claim Your Throne'}
              </Button>
            </form>
            
            <RoyalDivider variant="fancy" />
            
            <div className="text-center">
              <p className="mb-4">Already have a royal account?</p>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/signin">Sign In</Link>
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

export default SignUp;
