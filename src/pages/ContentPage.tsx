
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
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

interface ContentPageProps {
  pageKey: 'about' | 'terms' | 'privacy' | 'features' | 'faq' | 'updates' | 'code-analysis';
}

const ContentPage: React.FC<ContentPageProps> = ({ pageKey }) => {
  // Get the appropriate content based on pageKey
  const pageContent = useMemo(() => {
    switch (pageKey) {
      case 'about':
        return {
          title: 'About SpendThrone',
          description: 'Learn about SpendThrone - the pay-to-win leaderboard experience.',
          content: aboutContent,
          path: '/about'
        };
      case 'terms':
        return {
          title: 'Terms of Service',
          description: 'Terms and conditions for using SpendThrone.',
          content: termsContent,
          path: '/terms'
        };
      case 'privacy':
        return {
          title: 'Privacy Policy',
          description: 'How SpendThrone handles your data and privacy concerns.',
          content: privacyContent,
          path: '/privacy'
        };
      case 'features':
        return {
          title: 'Features',
          description: 'Discover all the features of SpendThrone.',
          content: featuresContent,
          path: '/features'
        };
      case 'faq':
        return {
          title: 'Frequently Asked Questions',
          description: 'Common questions and answers about SpendThrone.',
          content: faqContent,
          path: '/faq'
        };
      case 'updates':
        return {
          title: 'Updates',
          description: 'Latest news and updates from SpendThrone.',
          content: updatesContent,
          path: '/updates'
        };
      case 'code-analysis':
        return {
          title: 'Code Analysis',
          description: 'Technical insights into the SpendThrone codebase.',
          content: codeAnalysisContent,
          path: '/code-analysis'
        };
      default:
        return {
          title: 'Content Not Found',
          description: 'The requested content could not be found.',
          content: { sections: [] },
          path: '/'
        };
    }
  }, [pageKey]);

  return (
    <>
      <PageSEO 
        title={pageContent.title} 
        description={pageContent.description}
        canonicalUrl={`https://spendthrone.com${pageContent.path}`}
      />
      
      <Container className="py-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-6">
            <Button variant="ghost" size="sm" asChild className="mr-4">
              <Link to="/">
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back to Home
              </Link>
            </Button>
            <h1 className="text-4xl font-bold royal-gradient">{pageContent.title}</h1>
          </div>
          
          <div className="mb-8 p-4 rounded-lg bg-black/20">
            <p className="text-white/80">
              This is a consolidated legal/information page that's part of the SpendThrone site structure.
              These pages share a common format for consistency and ease of navigation.
            </p>
          </div>
          
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
          
          <div className="mt-10 pt-6 border-t border-white/10">
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" size="sm" asChild>
                <Link to="/terms">Terms</Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link to="/privacy">Privacy</Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link to="/features">Features</Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link to="/faq">FAQ</Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link to="/about">About</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ContentPage;
