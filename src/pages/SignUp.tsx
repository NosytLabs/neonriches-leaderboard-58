
import React from 'react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [username, setUsername] = React.useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Simulate registration
      console.log('Register with:', { email, password, username });
      navigate('/signin');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <Container className="py-10">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Sign Up</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="username" className="block">Username</label>
            <Input 
              id="username" 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required 
            />
          </div>
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
          <Button type="submit" className="w-full">Sign Up</Button>
        </form>
      </div>
    </Container>
  );
};

export default Signup;
