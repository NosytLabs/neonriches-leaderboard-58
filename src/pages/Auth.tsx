
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Shield, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';
import LoginForm from '@/components/auth/LoginForm';
import RegisterForm from '@/components/auth/RegisterForm';
import ThroneBackground from '@/components/ui/throne-background';

const Auth = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  
  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      <ThroneBackground variant="royal" particles />

      <div className="absolute top-6 left-6 z-10">
        <Link to="/" className="flex items-center text-white hover:text-royal-gold transition-colors">
          <Crown className="h-6 w-6 mr-2" />
          <span className="text-xl font-bold">SpendThrone</span>
        </Link>
      </div>
      
      <Card className="w-full max-w-md glass-morphism border-white/10">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-2">
            <Shield className="h-6 w-6 text-royal-gold mr-2" />
            <CardTitle className="text-2xl">Royal Authentication</CardTitle>
          </div>
          <CardDescription>
            Enter the royal court and take your place on the leaderboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs 
            defaultValue="login" 
            value={activeTab} 
            onValueChange={(value) => setActiveTab(value as 'login' | 'register')}
            className="w-full"
          >
            <TabsList className="grid grid-cols-2 w-full mb-6 glass-morphism border-white/10">
              <TabsTrigger value="login" className="data-[state=active]:bg-white/10">
                Sign In
              </TabsTrigger>
              <TabsTrigger value="register" className="data-[state=active]:bg-white/10">
                Register
              </TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <LoginForm />
            </TabsContent>
            <TabsContent value="register">
              <RegisterForm />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;
