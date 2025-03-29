
import React from 'react';
import { Shell } from '@/components/ui/shell';
import { Helmet } from 'react-helmet-async';
import { HeadingText } from '@/components/ui/heading-text';

const PayWithCrypto: React.FC = () => {
  return (
    <Shell>
      <Helmet>
        <title>Pay With Crypto | SpendThrone</title>
        <meta name="description" content="Enhance your royal status using cryptocurrency payments on SpendThrone." />
      </Helmet>
      
      <HeadingText
        title="Royal Crypto Treasury"
        description="Enhance your status with secure cryptocurrency contributions"
        withIcon
      />
      
      {/* Crypto payment interface will be implemented here */}
      <div className="glass-morphism border-white/10 p-6 rounded-lg">
        <p className="text-white/70">Cryptocurrency payment functionality is coming soon. Please check back later.</p>
      </div>
    </Shell>
  );
};

export default PayWithCrypto;
