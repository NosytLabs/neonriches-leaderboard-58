
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/contexts/auth';
import { Shield, User, Mail, Lock, Scroll, Crown } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const RegisterForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useAuth();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username || !email || !password) {
      toast({
        title: "Halt, peasant!",
        description: "Thou must provide all required information to enter our prestigious realm.",
        variant: "destructive"
      });
      return;
    }
    
    register(email, username, password);
    
    toast({
      title: "Noble Status Granted!",
      description: "Thy place in our illustrious kingdom has been secured. Spend freely to ascend the ranks!",
      variant: "default"
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center rounded-full bg-royal-gold/10 p-3 mb-3">
          <Crown className="h-7 w-7 text-royal-gold" />
        </div>
        <h2 className="text-2xl font-bold mb-1 font-royal">Establish Thy Noble Lineage</h2>
        <p className="text-white/60 text-sm">Join our prestigious realm where wealth determines worth</p>
      </div>
      
      <div className="space-y-3">
        <div className="relative">
          <User className="absolute left-3 top-3 h-5 w-5 text-white/40" />
          <Input 
            type="text" 
            placeholder="Thy Noble Title (Username)" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="pl-10 bg-black/30 border-white/10 focus:border-royal-gold/50"
          />
        </div>
        
        <div className="relative">
          <Mail className="absolute left-3 top-3 h-5 w-5 text-white/40" />
          <Input 
            type="email" 
            placeholder="Thy Royal Scroll (Email)" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10 bg-black/30 border-white/10 focus:border-royal-gold/50"
          />
        </div>
        
        <div className="relative">
          <Lock className="absolute left-3 top-3 h-5 w-5 text-white/40" />
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
        Claim Thy Noble Heritage
      </Button>
      
      <div className="text-center mt-4">
        <p className="text-white/60 text-sm">
          Already nobility? <a href="/login" className="text-royal-gold hover:underline">Return to thy castle</a>
        </p>
      </div>
      
      <div className="text-center text-xs text-white/40 mt-6">
        <p>By establishing thyself, you agree to our <a href="/terms" className="underline">Royal Decree</a>.</p>
        <p className="mt-1">Thy data shall be guarded by our most valiant knights, though even the mightiest castle walls can be breached by determined foes.</p>
      </div>
    </form>
  );
};

export default RegisterForm;
