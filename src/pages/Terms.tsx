
import React from 'react';
import { Container } from '@/components/ui/container';
import { Helmet } from 'react-helmet-async';

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | SpendThrone</title>
        <meta name="description" content="Terms of Service for SpendThrone - the satirical pay-to-win social experiment" />
      </Helmet>
      <Container className="py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
          <div className="glass-morphism border-white/10 p-6 rounded-lg space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
              <p className="text-white/80">
                Welcome to SpendThrone, a satirical pay-to-win social experiment. By accessing or using our platform, you agree to be bound by these Terms of Service.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">2. Satirical Nature</h2>
              <p className="text-white/80">
                SpendThrone is a satirical platform. While real money can be spent here, no actual value or services (beyond the entertainment value of the platform itself) are provided in exchange.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">3. Payments and Refunds</h2>
              <p className="text-white/80">
                All payments made on SpendThrone are final and non-refundable. By making a payment, you acknowledge that you are spending money purely for the purpose of increasing your rank on a satirical leaderboard.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">4. User Conduct</h2>
              <p className="text-white/80">
                Users are expected to maintain appropriate conduct. We reserve the right to moderate or remove content and ban users who engage in harmful, abusive, or illegal behavior.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">5. Content Ownership</h2>
              <p className="text-white/80">
                You retain ownership of content you create on SpendThrone, but grant us a license to use, display, and distribute that content as part of the platform.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">6. Disclaimers</h2>
              <p className="text-white/80">
                SpendThrone is provided "as is" without warranties of any kind. We do not guarantee that the platform will be uninterrupted, secure, or error-free.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">7. Limitation of Liability</h2>
              <p className="text-white/80">
                SpendThrone and its operators shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the platform.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">8. Changes to Terms</h2>
              <p className="text-white/80">
                We may modify these terms at any time. Your continued use of SpendThrone after changes indicates your acceptance of the revised terms.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">9. Contact Information</h2>
              <p className="text-white/80">
                For questions about these terms, please contact us at legal@spendthrone.com.
              </p>
            </section>
          </div>
          
          <div className="mt-8 text-center text-white/60 text-sm">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Terms;
