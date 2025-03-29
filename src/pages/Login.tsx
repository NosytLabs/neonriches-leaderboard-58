
import React from 'react';
import { Shell } from '@/components/ui/shell';
import { Helmet } from 'react-helmet-async';
import { HeadingText } from '@/components/ui/heading-text';
import LoginForm from '@/components/auth/LoginForm';
import { Link, useNavigate } from 'react-router-dom';
import { Crown } from 'lucide-react';
import { motion } from 'framer-motion';

const Login: React.FC = () => {
  const navigate = useNavigate();
  
  const handleLoginSuccess = () => {
    navigate('/dashboard');
  };
  
  return (
    <Shell>
      <Helmet>
        <title>Login | SpendThrone</title>
        <meta name="description" content="Login to your SpendThrone account and reclaim your position in the royal hierarchy." />
      </Helmet>
      
      <HeadingText
        title="Royal Login"
        description="Access your noble account and continue your ascent to the throne."
        withIcon
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-morphism border-white/10 p-6 rounded-lg max-w-md mx-auto"
      >
        <div className="mb-6 text-center">
          <Crown className="h-12 w-12 text-royal-gold mx-auto mb-2" />
          <h2 className="text-xl font-royal tracking-wide">Return to Your Throne</h2>
        </div>
        
        <LoginForm onSuccess={handleLoginSuccess} />
        
        <div className="mt-6 pt-4 border-t border-white/10 text-center">
          <p className="text-sm text-white/60">
            New to the royal court?{" "}
            <Link to="/signup" className="text-royal-gold hover:text-royal-gold/80 underline">
              Claim your throne
            </Link>
          </p>
        </div>
      </motion.div>
    </Shell>
  );
};

export default Login;
