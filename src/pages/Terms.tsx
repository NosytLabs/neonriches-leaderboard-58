
import React from 'react';
import { Shell } from '@/components/ui/shell';
import { Container } from '@/components/ui/container';
import { Card } from '@/components/ui/card';
import RoyalDivider from '@/components/ui/decorations/RoyalDivider';
import PageSEO from '@/components/common/PageSEO';
import { Link } from 'react-router-dom';
import { ScrollText, ArrowLeft } from 'lucide-react';

const Terms = () => {
  return (
    <>
      <PageSEO 
        title="Terms of Service | SpendThrone" 
        description="Read the terms and conditions for using the SpendThrone platform."
        canonicalUrl="/terms"
      />
      
      <Shell>
        <Container className="py-12">
          <div className="mb-8">
            <Link to="/features" className="text-royal-gold hover:underline flex items-center">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Features
            </Link>
          </div>
          
          <div className="text-center mb-10">
            <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-royal-gold/10 mb-4">
              <ScrollText className="h-8 w-8 text-royal-gold" />
            </div>
            <h1 className="text-4xl font-bold royal-gradient mb-4">Terms of Service</h1>
            <p className="text-white/70 max-w-3xl mx-auto">
              Last updated: January 2024
            </p>
          </div>
          
          <Card className="glass-morphism border-white/10 p-6 mb-8">
            <div className="prose prose-invert max-w-none">
              <h2>Welcome to SpendThrone</h2>
              <p>
                These Terms of Service govern your use of the SpendThrone platform. By accessing or using our services, you agree to be bound by these terms. If you disagree with any part of these terms, you may not access the service.
              </p>
              
              <RoyalDivider variant="simple" color="default" className="my-6" />
              
              <h2>Account Registration</h2>
              <p>
                When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
              </p>
              <p>
                You are responsible for safeguarding the password that you use to access the service and for any activities or actions under your password.
              </p>
              
              <RoyalDivider variant="simple" color="default" className="my-6" />
              
              <h2>Payments and Subscriptions</h2>
              <p>
                SpendThrone operates on a "pay-to-win" model where spending money directly increases your rank. All purchases are final and non-refundable.
              </p>
              <p>
                For subscription services, you will be billed in advance on a recurring basis depending on the type of subscription plan you select. You may cancel your subscription at any time, but no refunds will be provided for the current billing period.
              </p>
              
              <RoyalDivider variant="simple" color="default" className="my-6" />
              
              <h2>Content Guidelines</h2>
              <p>
                Users are prohibited from posting or transmitting any unlawful, threatening, abusive, libelous, defamatory, obscene, vulgar, pornographic, profane, or otherwise objectionable content.
              </p>
              <p>
                The "Royal Mockery Festival" feature is designed for satirical fun. However, harassment, bullying, or targeted abuse is strictly prohibited and may result in account termination.
              </p>
              
              <RoyalDivider variant="simple" color="default" className="my-6" />
              
              <h2>Intellectual Property</h2>
              <p>
                The SpendThrone service and its original content, features, and functionality are and will remain the exclusive property of SpendThrone and its licensors. The service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
              </p>
              
              <RoyalDivider variant="simple" color="default" className="my-6" />
              
              <h2>Termination</h2>
              <p>
                We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
              <p>
                Upon termination, your right to use the service will immediately cease. If you wish to terminate your account, you may simply discontinue using the service.
              </p>
              
              <RoyalDivider variant="simple" color="default" className="my-6" />
              
              <h2>Limitation of Liability</h2>
              <p>
                In no event shall SpendThrone, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
              
              <RoyalDivider variant="simple" color="default" className="my-6" />
              
              <h2>Changes to Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. It is your responsibility to review these Terms periodically for changes.
              </p>
              
              <RoyalDivider variant="simple" color="default" className="my-6" />
              
              <h2>Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at terms@spendthrone.com.
              </p>
            </div>
          </Card>
          
          <div className="text-center text-white/50 text-sm">
            These terms of service are intended for entertainment purposes as part of our satirical platform. While they reflect actual terms of service structures, please remember that SpendThrone is a fictional service.
          </div>
        </Container>
      </Shell>
    </>
  );
};

export default Terms;
