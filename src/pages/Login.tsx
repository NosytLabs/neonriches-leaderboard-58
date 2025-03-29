
import React from 'react';
import { Shell } from '@/components/ui/shell';
import { Helmet } from 'react-helmet-async';
import { HeadingText } from '@/components/ui/heading-text';

const Login: React.FC = () => {
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
      
      {/* Login form will be implemented here */}
      <div className="glass-morphism border-white/10 p-6 rounded-lg">
        <p className="text-white/70">Login functionality is coming soon. Please check back later.</p>
      </div>
    </Shell>
  );
};

export default Login;
