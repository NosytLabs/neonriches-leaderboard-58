
import React from 'react';
import Shell from '@/components/Shell';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import PageSEO from '@/components/common/PageSEO';

const Signup: React.FC = () => {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [referralCode, setReferralCode] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const { signUp } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast({
        title: "Passwords Don't Match",
        description: "Please ensure both passwords match.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);

    try {
      const success = await signUp({
        username,
        email,
        password,
        referralCode: referralCode || undefined
      });
      
      if (success) {
        toast({
          title: "Registration Successful",
          description: "Welcome to SpendThrone! Your journey to nobility begins.",
          variant: "default",
        });
        navigate('/dashboard');
      } else {
        toast({
          title: "Registration Failed",
          description: "An error occurred during registration. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Registration Error",
        description: typeof error === 'string' ? error : "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
      console.error("Registration error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Shell>
      <PageSEO 
        title="Join SpendThrone - Begin Your Royal Journey" 
        description="Sign up for SpendThrone and start your climb to the top of the royal leaderboard. The more you spend, the higher you rank."
      />
      
      <div className="container max-w-md mx-auto py-12">
        <Card className="glass-morphism border-white/10">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Create Your Royal Account</CardTitle>
            <CardDescription className="text-center">
              Begin your journey to the throne
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  placeholder="noble_knight"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="glass-morphism border-white/10"
                />
              </div>
              
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
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="glass-morphism border-white/10"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input
                  id="confirm-password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="glass-morphism border-white/10"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="referral-code">Referral Code (Optional)</Label>
                <Input
                  id="referral-code"
                  placeholder="ROYAL-123456"
                  value={referralCode}
                  onChange={(e) => setReferralCode(e.target.value)}
                  className="glass-morphism border-white/10"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-royal-gold hover:bg-royal-gold/90 text-black"
                disabled={isLoading}
              >
                {isLoading ? 'Creating Account...' : 'Create Account'}
              </Button>
              
              <div className="text-center text-sm mt-4">
                <span className="text-white/70">Already have a royal account? </span>
                <Link to="/login" className="text-royal-gold hover:underline">
                  Sign In
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </Shell>
  );
};

export default Signup;
