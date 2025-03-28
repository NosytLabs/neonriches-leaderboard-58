
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { User, Crown } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import RoyalDivider from '@/components/ui/royal-divider';
import LoginForm from '@/components/auth/LoginForm';
import RegisterForm from '@/components/auth/RegisterForm';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const AuthButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeForm, setActiveForm] = useState<'login' | 'register'>('login');
  const navigate = useNavigate();

  const handleSuccess = () => {
    setIsOpen(false);
    navigate('/dashboard');
  };

  return (
    <>
      <Button variant="outline" onClick={() => setIsOpen(true)}>
        <User className="mr-2 h-4 w-4" /> Sign In
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md glass-morphism border-white/10 royal-shadow-sm">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-center text-xl">
              <Crown className="mr-2 h-5 w-5 text-royal-gold" />
              {activeForm === 'login' ? 'Royal Authentication' : 'Join the Nobility'}
            </DialogTitle>
            <RoyalDivider variant="line" className="my-2" />
            <DialogDescription className="text-center">
              {activeForm === 'login' 
                ? 'Enter your royal credentials to access your throne'
                : 'Create your noble identity and begin your ascension'}
            </DialogDescription>
          </DialogHeader>
          
          <AnimatePresence mode="wait">
            {activeForm === 'login' ? (
              <LoginForm 
                key="login"
                onSuccess={handleSuccess} 
                onSwitchToRegister={() => setActiveForm('register')} 
              />
            ) : (
              <RegisterForm 
                key="register"
                onSuccess={handleSuccess} 
                onSwitchToLogin={() => setActiveForm('login')} 
              />
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AuthButton;
