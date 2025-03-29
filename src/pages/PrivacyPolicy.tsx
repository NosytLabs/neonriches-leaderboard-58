
import React from 'react';
import { Shell } from '@/components/ui/shell';
import { Helmet } from 'react-helmet-async';
import { HeadingText } from '@/components/ui/heading-text';
import { Scroll } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <Shell>
      <Helmet>
        <title>Privacy Policy | SpendThrone</title>
        <meta name="description" content="SpendThrone's privacy policy - how we handle your royal data." />
      </Helmet>
      
      <HeadingText
        title="Privacy Decree"
        description="The royal declaration on how your data is handled in our kingdom"
        withIcon
      />
      
      <div className="glass-morphism border-white/10 p-6 rounded-lg space-y-6">
        <div className="flex items-start gap-3">
          <Scroll className="h-6 w-6 text-royal-gold shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-medium mb-2">Royal Privacy Proclamation</h3>
            <p className="text-white/70">
              This is a placeholder for the SpendThrone privacy policy. In a real application, this page would contain detailed information about data collection, usage, and protection practices.
            </p>
          </div>
        </div>
      </div>
    </Shell>
  );
};

export default PrivacyPolicy;
