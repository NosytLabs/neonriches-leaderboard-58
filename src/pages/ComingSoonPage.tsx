
import React from 'react';
import ComingSoon from '@/components/ComingSoon';

interface ComingSoonPageProps {
  title: string;
  description?: string;
}

const ComingSoonPage: React.FC<ComingSoonPageProps> = ({ title, description }) => {
  return <ComingSoon title={title} description={description} />;
};

export default ComingSoonPage;
