
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { useNotificationSounds } from '@/hooks/use-notification-sounds';

export interface LoginFormProps {
  onSwitchToRegister: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSwitchToRegister }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const { toast } = useToast();
  const { playSound } = useNotificationSounds();
  const { user } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Login logic here
      console.log('Login with', email, password);
      
      // Mock login success
      setTimeout(() => {
        playSound('success', 0.5);
        toast({
          title: "Login Successful",
          description: "Welcome back to the royal courts!",
        });
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Login error:', error);
      toast({
        title: "Login Failed",
        description: "Please check your credentials and try again.",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-bold">Sign In</h2>
        <p className="text-sm text-white/70">Enter your email to sign in to your account</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input 
            id="email" 
            type="email" 
            placeholder="m@example.com" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="glass-morphism border-white/10"
          />
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <a href="#" className="text-xs text-white/70 hover:text-white">Forgot password?</a>
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
        
        <Button type="submit" className="w-full bg-royal-gold text-black hover:bg-royal-gold/90" disabled={isLoading}>
          {isLoading ? "Signing In..." : "Sign In"}
        </Button>
      </form>
      
      <div className="text-center">
        <p className="text-sm text-white/70">
          Don't have an account?{" "}
          <button 
            type="button" 
            className="underline text-royal-gold hover:text-white"
            onClick={onSwitchToRegister}
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
