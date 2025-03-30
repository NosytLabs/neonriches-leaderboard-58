
import React from 'react';
import Layout from '@/components/layout/Layout';
import { termsContent } from '@/data/termsContent';

const Terms: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto glass-morphism border-white/10 p-8 rounded-lg">
          <h1 className="text-3xl font-bold mb-8 royal-gradient">Terms of Service</h1>
          
          {termsContent.sections.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
              {section.content.map((paragraph, pIndex) => (
                <p key={pIndex} className="text-white/80 mb-3">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Terms;
