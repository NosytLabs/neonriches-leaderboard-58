
import React from 'react';
import { Shell } from '@/components/ui/shell';
import { Helmet } from 'react-helmet-async';
import { HeadingText } from '@/components/ui/heading-text';

const Signup: React.FC = () => {
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
      
      {/* Signup form will be implemented here */}
      <div className="glass-morphism border-white/10 p-6 rounded-lg">
        <p className="text-white/70">Registration functionality is coming soon. Please check back later.</p>
      </div>
    </Shell>
  );
};

export default Signup;
