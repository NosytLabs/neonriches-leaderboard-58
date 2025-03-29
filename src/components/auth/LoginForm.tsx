
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/contexts/auth';
import { Shield, Key, Scroll, Crown } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: "By royal decree!",
        description: "Thou must provide both thy scroll (email) and secret seal (password).",
        variant: "destructive"
      });
      return;
    }
    
    login(email, password);
    
    toast({
      title: "Welcome back, noble one!",
      description: "The royal court welcomes thy magnificent return.",
      variant: "default"
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center rounded-full bg-royal-gold/10 p-3 mb-3">
          <Crown className="h-7 w-7 text-royal-gold" />
        </div>
        <h2 className="text-2xl font-bold mb-1 font-royal">Enter The Royal Court</h2>
        <p className="text-white/60 text-sm">Return to claim thy rightful place among the nobility</p>
      </div>
      
      <div className="space-y-3">
        <div className="relative">
          <Scroll className="absolute left-3 top-3 h-5 w-5 text-white/40" />
          <Input 
            type="email" 
            placeholder="Thy Royal Scroll (Email)" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10 bg-black/30 border-white/10 focus:border-royal-gold/50"
          />
        </div>
        
        <div className="relative">
          <Key className="absolute left-3 top-3 h-5 w-5 text-white/40" />
          <Input 
            type="password" 
            placeholder="Thy Secret Seal (Password)" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="pl-10 bg-black/30 border-white/10 focus:border-royal-gold/50"
          />
        </div>
      </div>
      
      <Button 
        type="submit" 
        className="w-full font-bold bg-gradient-to-r from-royal-gold/90 to-royal-gold text-black hover:opacity-90"
      >
        <Shield className="mr-2 h-4 w-4" />
        Claim Thy Noble Station
      </Button>
      
      <div className="text-center mt-4">
        <p className="text-white/60 text-sm">
          New to the realm? <a href="/signup" className="text-royal-gold hover:underline">Request royal ancestry</a>
        </p>
      </div>
      
      <div className="text-center text-xs text-white/40 mt-6">
        <p>Thy royal data is guarded with the same vigilance as the kingdom's gold,<br/>but even our sturdiest drawbridges and deepest moats can be breached by determined dragons.</p>
      </div>
    </form>
  );
};

export default LoginForm;
