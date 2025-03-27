
import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/contexts/AuthContext';
import { Crown } from 'lucide-react';
import ThroneBackground from '@/components/ui/throne-background';
import LoginForm from '@/components/auth/LoginForm';
import RegisterForm from '@/components/auth/RegisterForm';

const Auth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      const redirectTo = location.state?.from || '/dashboard';
      navigate(redirectTo);
    }
  }, [user, navigate, location]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <div className="absolute inset-0 -z-10">
        <ThroneBackground variant="purple" density="high" animate={true} />
      </div>
      
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="max-w-md w-full">
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-flex items-center justify-center mb-4">
              <Crown size={40} className="text-royal-gold animate-royal-pulse" />
            </div>
            <h1 className="text-4xl font-royal font-bold royal-gradient mb-2">SpendThrone</h1>
            <p className="text-white/70">Where your worth is measured in dollars spent</p>
          </div>

          <Card className="glass-morphism border-white/10 shadow-xl animate-fade-in" style={{ animationDelay: "100ms" }}>
            <Tabs defaultValue="login">
              <TabsList className="grid grid-cols-2 glass-morphism border-white/10 mb-2">
                <TabsTrigger value="login">Sign In</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login">
                <LoginForm />
              </TabsContent>
              
              <TabsContent value="register">
                <RegisterForm />
              </TabsContent>
            </Tabs>
          </Card>
          
          <div className="text-center mt-8 text-sm text-white/50 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <p>By signing up, you agree to our satirical terms of service.<br/>Remember: In this kingdom, your worth is measured by your spending!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
