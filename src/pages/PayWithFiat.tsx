
import React from 'react';
import { Shell } from '@/components/ui/shell';
import { Helmet } from 'react-helmet-async';
import { HeadingText } from '@/components/ui/heading-text';

const PayWithFiat: React.FC = () => {
  return (
    <Shell>
      <Helmet>
        <title>Pay With Fiat | SpendThrone</title>
        <meta name="description" content="Enhance your royal status using traditional currency on SpendThrone." />
      </Helmet>
      
      <HeadingText
        title="Royal Treasury"
        description="Enhance your status with traditional currency contributions"
        withIcon
      />
      
      {/* Fiat payment interface will be implemented here */}
      <div className="glass-morphism border-white/10 p-6 rounded-lg">
        <p className="text-white/70">Traditional payment functionality is coming soon. Please check back later.</p>
      </div>
    </Shell>
  );
};

export default PayWithFiat;
