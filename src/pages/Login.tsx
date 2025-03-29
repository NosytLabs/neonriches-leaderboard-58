
import React from 'react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Crown } from 'lucide-react';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <Container className="py-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md mx-auto glass-morphism border-white/10 p-6 rounded-lg"
      >
        <div className="mb-6 text-center">
          <Crown className="h-12 w-12 text-royal-gold mx-auto mb-2" />
          <h2 className="text-xl font-royal tracking-wide">Return to Your Throne</h2>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="block">Email</label>
            <Input 
              id="email" 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="block">Password</label>
            <Input 
              id="password" 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <Button type="submit" className="w-full">Sign In</Button>
        </form>
        
        <div className="mt-6 pt-4 border-t border-white/10 text-center">
          <p className="text-sm text-white/60">
            New to the royal court?{" "}
            <Link to="/signup" className="text-royal-gold hover:text-royal-gold/80 underline">
              Claim your throne
            </Link>
          </p>
        </div>
      </motion.div>
    </Container>
  );
};

export default Login;
