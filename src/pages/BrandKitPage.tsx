
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shell } from '@/components/ui/shell';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import BrandKit from '@/components/brand/BrandKit';
import { HeadingText } from '@/components/ui/heading-text';

const BrandKitPage: React.FC = () => {
  return (
    <Shell>
      <Helmet>
        <title>Brand Kit | SpendThrone</title>
        <meta name="description" content="SpendThrone's official brand kit - guidelines for using our royal branding assets." />
      </Helmet>
      
      <div className="mb-8">
        <HeadingText
          title="SpendThrone Brand Kit"
          description="Official guidelines and assets for our royal brand identity"
          withIcon
        />
      </div>
      
      <BrandKit />
    </Shell>
  );
};

export default BrandKitPage;
