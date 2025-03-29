
import React from 'react';
import { Shell } from '@/components/ui/shell';
import { Helmet } from 'react-helmet-async';
import { HeadingText } from '@/components/ui/heading-text';
import RegisterForm from '@/components/auth/RegisterForm';
import { Link, useNavigate } from 'react-router-dom';
import { Crown, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Signup: React.FC = () => {
  const navigate = useNavigate();
  
  const handleRegisterSuccess = () => {
    navigate('/dashboard');
  };
  
  return (
    <Shell>
      <Helmet>
        <title>Signup | SpendThrone</title>
        <meta name="description" content="Join SpendThrone and begin your journey to climb the royal hierarchy through your wealth." />
      </Helmet>
      
      <HeadingText
        title="Royal Registration"
        description="Begin your noble journey and secure your place in the hierarchy."
        withIcon
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-morphism border-white/10 p-6 rounded-lg max-w-md mx-auto"
      >
        <div className="mb-6 text-center">
          <div className="relative inline-block">
            <Crown className="h-12 w-12 text-royal-gold mx-auto mb-2" />
            <Sparkles className="h-5 w-5 text-royal-gold absolute -top-1 -right-1 animate-pulse" />
          </div>
          <h2 className="text-xl font-royal tracking-wide">Claim Your Throne</h2>
        </div>
        
        <RegisterForm onSuccess={handleRegisterSuccess} />
        
        <div className="mt-6 pt-4 border-t border-white/10 text-center">
          <p className="text-sm text-white/60">
            Already royalty?{" "}
            <Link to="/login" className="text-royal-gold hover:text-royal-gold/80 underline">
              Return to your throne
            </Link>
          </p>
        </div>
      </motion.div>
    </Shell>
  );
};

export default Signup;
