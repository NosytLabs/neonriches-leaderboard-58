
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Shield } from 'lucide-react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import SolanaSignIn from './SolanaSignIn';
import { Separator } from '@/components/ui/separator';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'login' | 'register';
}

const AuthModal: React.FC<AuthModalProps> = ({ 
  isOpen, 
  onClose,
  defaultTab = 'login'
}) => {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>(defaultTab);

  const handleAuthSuccess = () => {
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="glass-morphism border-white/10 sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-center text-xl font-royal">
            <Shield className="h-5 w-5 text-royal-gold mr-2" />
            Royal Authentication
          </DialogTitle>
          <DialogDescription className="text-center">
            Enter the royal court and claim your place on the leaderboard
          </DialogDescription>
        </DialogHeader>
        
        <div className="my-4">
          <SolanaSignIn onSuccess={handleAuthSuccess} />
        </div>
        
        <div className="relative mb-4">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-white/10"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-white/50">Or continue with</span>
          </div>
        </div>
        
        <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as 'login' | 'register')}>
          <TabsList className="grid grid-cols-2 w-full mb-6 glass-morphism border-white/10">
            <TabsTrigger value="login" className="data-[state=active]:bg-white/10">
              Sign In
            </TabsTrigger>
            <TabsTrigger value="register" className="data-[state=active]:bg-white/10">
              Register
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="login">
            <LoginForm onSuccess={handleAuthSuccess} />
          </TabsContent>
          
          <TabsContent value="register">
            <RegisterForm onSuccess={handleAuthSuccess} />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
