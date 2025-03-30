
import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import Shell from '@/components/Shell';
import PageSEO from '@/components/common/PageSEO';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import RoyalDivider from '@/components/ui/royal-divider';
import { Crown, Scroll } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import usePageTracking from '@/hooks/usePageTracking';

const SignUp = () => {
  usePageTracking();
  const { register } = useAuth();
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username || !email || !password) {
      toast({
        title: "Missing credentials",
        description: "Please fill out all fields to claim your noble title.",
        variant: "destructive",
      });
      return;
    }
    
    if (password !== confirmPassword) {
      toast({
        title: "Password mismatch",
        description: "Your royal passwords do not match. Please try again.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      await register(email, password, username);
      toast({
        title: "Welcome to nobility!",
        description: "You have successfully joined the royal court. Start your ascension now!",
      });
      navigate('/profile');
    } catch (error) {
      toast({
        title: "Registration failed",
        description: "The royal scribes could not record your details. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Shell>
      <PageSEO 
        title="Claim Your Noble Title - Sign Up" 
        description="Begin your journey to prominence by joining SpendThrone. Create your account and start climbing the ranks of our digital aristocracy."
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <Crown className="h-12 w-12 text-royal-gold mx-auto mb-4" />
            <h1 className="text-3xl font-bold royal-gradient">Claim Your Title</h1>
            <p className="text-white/70 mt-2">Begin your noble ascension</p>
          </div>
          
          <Card className="glass-morphism border-white/10">
            <CardHeader>
              <CardTitle>Royal Registration</CardTitle>
              <CardDescription>Establish your presence in the court</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="username">Noble Title (Username)</Label>
                    <Input
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="LordCashington"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Royal Correspondence (Email)</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="noble@example.com"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password">Secret Decree (Password)</Label>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Your secret royal code"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="confirm-password">Confirm Secret Decree</Label>
                    <Input
                      id="confirm-password"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Repeat your secret royal code"
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Proclaiming..." : "Establish Your Nobility"}
                  </Button>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <RoyalDivider variant="line" />
              <div className="text-center text-sm text-white/70">
                <p>Already among the nobility?</p>
                <Link to="/auth/signin" className="text-royal-gold hover:underline">
                  Return to Court
                </Link>
              </div>
            </CardFooter>
          </Card>
          
          <div className="text-center mt-8 text-sm text-white/50">
            <div className="flex items-center justify-center mb-2">
              <Scroll className="h-4 w-4 mr-1.5 text-royal-gold/60" />
              <p>By signing up, you agree to our ridiculous</p>
            </div>
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

export default SignUp;
