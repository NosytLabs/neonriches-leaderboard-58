
import React from 'react';
import ComingSoon from '@/components/ComingSoon';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <ComingSoon
        title="SpendThrone - Coming Soon"
        description="Our royal platform for digital status symbols is under construction. Please check back soon!"
      />
    </div>
  );
};

export default HomePage;
