import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Shield, Crown, Sparkles } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import LoginForm from '@/components/auth/LoginForm';
import RegisterForm from '@/components/auth/RegisterForm';
import ThroneBackground from '@/components/ui/throne-background';
import RoyalDivider from '@/components/ui/royal-divider';
import { useNotificationSounds } from '@/hooks/sounds/use-notification-sounds';
import { AudioOptions } from '@/types/sound-types';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/auth';

const Auth = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const navigate = useNavigate();
  const { playSound } = useNotificationSounds();
  const { user, isAuthenticated } = useAuth();
  
  useEffect(() => {
    if (isAuthenticated && user) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, user, navigate]);
  
  useEffect(() => {
    playSound('royalAnnouncement', 0.3);
  }, []);
  
  const handleTabChange = (value: string) => {
    setActiveTab(value as 'login' | 'register');
    playSound('click');
  };

  const handleAuthSuccess = () => {
    playSound('success');
    navigate('/dashboard');
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      <ThroneBackground variant="royal" particles />

      <motion.div 
        className="absolute top-20 left-[10%] text-royal-gold/30 transform -rotate-12"
        animate={{ 
          y: [0, -15, 0], 
          rotate: [-10, 5, -10],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        <Crown size={60} />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-20 right-[15%] text-royal-gold/20 transform rotate-12"
        animate={{ 
          y: [0, -20, 0], 
          rotate: [12, -5, 12],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 7, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1
        }}
      >
        <Crown size={80} />
      </motion.div>

      <div className="absolute top-6 left-6 z-10">
        <Link to="/" className="flex items-center text-white hover:text-royal-gold transition-colors group">
          <motion.div
            whileHover={{ rotate: [0, -5, 5, -5, 0], scale: 1.2 }}
            transition={{ duration: 0.5 }}
            className="mr-2"
          >
            <Crown className="h-7 w-7 text-royal-gold group-hover:text-royal-gold/80" />
          </motion.div>
          <span className="text-xl font-bold font-royal tracking-wide">SpendThrone</span>
        </Link>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <Card className="glass-morphism border-white/10 royal-shine">
          <CardHeader className="space-y-1">
            <div className="flex items-center justify-center mb-2">
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 1, 0, -1, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"  
                }}
              >
                <Shield className="h-6 w-6 text-royal-gold mr-2" />
              </motion.div>
              <CardTitle className="text-2xl font-royal tracking-wide">Royal Authentication</CardTitle>
            </div>
            <RoyalDivider variant="line" className="my-2" />
            <CardDescription className="text-center">
              Enter the royal court and claim your throne on the leaderboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs 
              defaultValue="login" 
              value={activeTab} 
              onValueChange={handleTabChange}
              className="w-full"
            >
              <TabsList className="grid grid-cols-2 w-full mb-6 glass-morphism border-white/10">
                <TabsTrigger value="login" className="data-[state=active]:bg-white/10 flex items-center gap-2">
                  <Crown size={16} className="text-royal-gold" />
                  <span>Sign In</span>
                </TabsTrigger>
                <TabsTrigger value="register" className="data-[state=active]:bg-white/10 flex items-center gap-2">
                  <Sparkles size={16} className="text-royal-gold" />
                  <span>Register</span>
                </TabsTrigger>
              </TabsList>
              <TabsContent value="login">
                <LoginForm onSuccess={handleAuthSuccess} />
              </TabsContent>
              <TabsContent value="register">
                <RegisterForm onSuccess={handleAuthSuccess} />
              </TabsContent>
            </Tabs>
            
            <div className="mt-6 pt-4 border-t border-white/10">
              <p className="text-sm text-white/60 text-center">
                By accessing this royal court, you agree to our{" "}
                <Link to="/terms" className="text-royal-gold hover:text-royal-gold/80 underline">
                  Noble Decrees
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="text-royal-gold hover:text-royal-gold/80 underline">
                  Royal Privacy Charter
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Auth;
