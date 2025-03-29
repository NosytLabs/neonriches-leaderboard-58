
import React, { useMemo } from 'react';
import { Container } from '@/components/ui/container';
import PageSEO from '@/components/common/PageSEO';
import { aboutContent } from '@/data/aboutContent';
import { termsContent } from '@/data/termsContent';
import { privacyContent } from '@/data/privacyContent';
import { featuresContent } from '@/data/featuresContent';
import { faqContent } from '@/data/faqContent';
import { updatesContent } from '@/data/updatesContent';
import { codeAnalysisContent } from '@/data/codeAnalysisContent';

interface ContentPageProps {
  pageKey: 'about' | 'terms' | 'privacy' | 'features' | 'faq' | 'updates' | 'code-analysis';
}

const ContentPage: React.FC<ContentPageProps> = ({ pageKey }) => {
  // Get the appropriate content based on pageKey
  const pageContent = useMemo(() => {
    switch (pageKey) {
      case 'about':
        return {
          title: 'About Us',
          description: 'Learn about SpendThrone - the pay-to-win leaderboard experience.',
          content: aboutContent
        };
      case 'terms':
        return {
          title: 'Terms of Service',
          description: 'Terms and conditions for using SpendThrone.',
          content: termsContent
        };
      case 'privacy':
        return {
          title: 'Privacy Policy',
          description: 'How SpendThrone handles your data and privacy concerns.',
          content: privacyContent
        };
      case 'features':
        return {
          title: 'Features',
          description: 'Discover all the features of SpendThrone.',
          content: featuresContent
        };
      case 'faq':
        return {
          title: 'Frequently Asked Questions',
          description: 'Common questions and answers about SpendThrone.',
          content: faqContent
        };
      case 'updates':
        return {
          title: 'Updates',
          description: 'Latest news and updates from SpendThrone.',
          content: updatesContent
        };
      case 'code-analysis':
        return {
          title: 'Code Analysis',
          description: 'Technical insights into the SpendThrone codebase.',
          content: codeAnalysisContent
        };
      default:
        return {
          title: 'Content Not Found',
          description: 'The requested content could not be found.',
          content: { sections: [] }
        };
    }
  }, [pageKey]);

  return (
    <>
      <PageSEO 
        title={pageContent.title} 
        description={pageContent.description}
        canonicalUrl={`https://spendthrone.com/${pageKey}`}
      />
      
      <Container className="py-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 royal-gradient">{pageContent.title}</h1>
          
          {pageContent.content.sections.map((section, index) => (
            <div key={index} className="mb-10">
              {section.title && (
                <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
              )}
              
              {section.content.map((paragraph, pIndex) => (
                <div key={pIndex} className="mb-4">
                  {typeof paragraph === 'string' ? (
                    <p className="text-white/80 leading-relaxed">{paragraph}</p>
                  ) : (
                    // Handle content that might be JSX elements
                    paragraph
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default ContentPage;
