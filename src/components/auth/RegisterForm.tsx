
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { useNotificationSounds } from '@/hooks/use-notification-sounds';

export interface RegisterFormProps {
  onSwitchToLogin: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSwitchToLogin }) => {
  const [username, setUsername] = React.useState('');
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
      // Registration logic here
      console.log('Register with', username, email, password);
      
      // Mock registration success
      setTimeout(() => {
        playSound('success', 0.5);
        toast({
          title: "Registration Successful",
          description: "Welcome to the royal courts!",
        });
        setIsLoading(false);
        onSwitchToLogin(); // Switch back to login after successful registration
      }, 1000);
    } catch (error) {
      console.error('Registration error:', error);
      toast({
        title: "Registration Failed",
        description: "Please check your information and try again.",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-bold">Create an Account</h2>
        <p className="text-sm text-white/70">Enter your information to create an account</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input 
            id="username" 
            type="text"
            placeholder="royaluser" 
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
            placeholder="m@example.com" 
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
        
        <Button type="submit" className="w-full bg-royal-gold text-black hover:bg-royal-gold/90" disabled={isLoading}>
          {isLoading ? "Creating Account..." : "Create Account"}
        </Button>
      </form>
      
      <div className="text-center">
        <p className="text-sm text-white/70">
          Already have an account?{" "}
          <button 
            type="button" 
            className="underline text-royal-gold hover:text-white"
            onClick={onSwitchToLogin}
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
