
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';

const TermsOfService: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Button variant="ghost" size="sm" className="mb-6" asChild>
          <Link to="/"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Home</Link>
        </Button>
        
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
            <p className="text-white/70">Last Updated: {new Date().toLocaleDateString()}</p>
          </div>
          
          <div className="glass-morphism border-white/10 p-6 rounded-lg space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
              <p className="text-white/80 leading-relaxed">
                By accessing or using the SpendThrone website, you agree to be bound by these Terms of Service. 
                If you do not agree to all the terms and conditions, you must not access or use the site.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">2. Description of Service</h2>
              <p className="text-white/80 leading-relaxed">
                SpendThrone is a satirical social experiment where users can spend real money to increase their rank on a public leaderboard.
                The service includes features such as team competition, profile customization, and interactions with other users.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">3. Financial Terms</h2>
              <div className="space-y-3">
                <p className="text-white/80 leading-relaxed">
                  a) <span className="font-medium">Payments</span>: All payments made to SpendThrone are final and non-refundable. This is not an investment vehicle but rather a form of digital entertainment with no expected financial return.
                </p>
                <p className="text-white/80 leading-relaxed">
                  b) <span className="font-medium">Currency</span>: $1 USD spent equals 1 rank point on the leaderboard. Your status on SpendThrone has no real-world value beyond what you and others choose to assign to it.
                </p>
                <p className="text-white/80 leading-relaxed">
                  c) <span className="font-medium">Cryptocurrency</span>: Payments made in cryptocurrency will be valued at the exchange rate at the time of transaction.
                </p>
                <p className="text-white/80 leading-relaxed">
                  d) <span className="font-medium">No Investment Value</span>: Spending on SpendThrone does not constitute an investment and has no potential for financial return. It's essentially digital conspicuous consumption.
                </p>
              </div>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">4. User Conduct</h2>
              <div className="space-y-3">
                <p className="text-white/80 leading-relaxed">
                  Users agree not to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-white/80">
                  <li>Use the service for any illegal purpose</li>
                  <li>Upload or transmit any content that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, invasive of another's privacy, or otherwise objectionable</li>
                  <li>Impersonate any person or entity</li>
                  <li>Interfere with or disrupt the service or servers or networks connected to the service</li>
                  <li>Attempt to gain unauthorized access to the service, other accounts, or computer systems. (Our digital moat is filled with algorithmic crocodiles, and our firewall drawbridge is heavily guarded.)</li>
                </ul>
              </div>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">5. Content Policy</h2>
              <p className="text-white/80 leading-relaxed">
                User profiles, images, and messages must comply with our content guidelines. SpendThrone reserves the right to remove any content that violates these guidelines without notice, even if you've paid handsomely for your rank.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">6. Mockery Features</h2>
              <p className="text-white/80 leading-relaxed">
                The "mockery" features of SpendThrone are intended as satirical entertainment. Users who participate in these features acknowledge that they may be subject to virtual mockery by other users. All mockery actions should be taken in good humor and not as personal attacks – think of it as a digital costume party where everyone has agreed to wear a "mock me" sign.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">7. Termination</h2>
              <p className="text-white/80 leading-relaxed">
                SpendThrone reserves the right to terminate or suspend access to the service immediately, without prior notice or liability, for any reason whatsoever, including a breach of the Terms. Even users who have spent thousands on their rank can be removed – money can buy status on our platform, but it doesn't buy immunity from the rules.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">8. Disclaimer</h2>
              <p className="text-white/80 leading-relaxed">
                SpendThrone is provided on an "AS IS" and "AS AVAILABLE" basis. We make no warranties, expressed or implied, and hereby disclaim all warranties including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">9. Limitation of Liability</h2>
              <p className="text-white/80 leading-relaxed">
                In no event shall SpendThrone be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">10. Changes to Terms</h2>
              <p className="text-white/80 leading-relaxed">
                SpendThrone reserves the right to modify or replace these Terms at any time. It is your responsibility to review these Terms periodically for changes. Your continued use of the service following the posting of any changes constitutes acceptance of those changes.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">11. Contact Information</h2>
              <p className="text-white/80 leading-relaxed">
                For questions about these Terms, please contact us at support@spendthrone.com.
              </p>
            </section>

            <section className="mt-10 p-4 bg-black/30 rounded-lg border border-white/10">
              <h2 className="text-xl font-semibold mb-3 text-royal-gold">Reality Check (The Legal Small Print)</h2>
              <p className="text-white/80 leading-relaxed">
                In plain English: SpendThrone is a piece of satirical performance art about status, materialism, and digital consumption. When you spend money here, you're paying for entertainment with no financial return. Your purchases are non-refundable, and the digital status you receive has no value except what you assign to it.
              </p>
              <p className="text-white/80 leading-relaxed mt-2">
                The mockery features are consensual digital role-play, not harassment. Everyone who participates has agreed to these terms. If something breaks, crashes, or disappears, we're not liable for any losses beyond the amount you paid for that specific feature.
              </p>
              <p className="text-white/80 leading-relaxed mt-2">
                If you're uncertain about spending money on digital status symbols, please reconsider whether this platform is right for you. We've designed SpendThrone to provoke thought about how we assign value in the digital age – if that makes you uncomfortable, that's part of the point.
              </p>
            </section>
          </div>
          
          <div className="flex justify-center">
            <Button asChild>
              <Link to="/">Return to Home</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TermsOfService;
