
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import LoginForm from '@/components/auth/LoginForm';
import RegisterForm from '@/components/auth/RegisterForm';
import { useNavigate } from 'react-router-dom';
import useAuth from '@/hooks/useAuth';
import MedievalIcon from '@/components/ui/medieval-icon';
import useNotificationSounds from '@/hooks/sounds/use-notification-sounds';

const Auth = () => {
  const [activeTab, setActiveTab] = React.useState('login');
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { toast } = useToast();
  const { playSound } = useNotificationSounds();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
      toast({
        title: 'Authentication Successful',
        description: 'You have been successfully authenticated.',
      });
      playSound('success');
    }
  }, [isAuthenticated, navigate, toast, playSound]);

  useEffect(() => {
    document.title = 'Authentication - Royal Dashboard';
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-full max-w-md glass-morphism border-white/10">
        <Tabs defaultValue={activeTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login" className="relative group data-[state=active]:bg-royal-gold/20 data-[state=active]:text-royal-gold">
              <MedievalIcon name="key" className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40 group-hover:text-royal-gold transition-colors" />
              Login
            </TabsTrigger>
            <TabsTrigger value="register" className="relative group data-[state=active]:bg-royal-gold/20 data-[state=active]:text-royal-gold">
              <MedievalIcon name="scroll" className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40 group-hover:text-royal-gold transition-colors" />
              Register
            </TabsTrigger>
          </TabsList>
          <TabsContent value="login" className="space-y-4 p-6">
            <LoginForm />
          </TabsContent>
          <TabsContent value="register" className="space-y-4 p-6">
            <RegisterForm />
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default Auth;
