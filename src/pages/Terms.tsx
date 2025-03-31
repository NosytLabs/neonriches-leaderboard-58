
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shell } from '@/components/shell';

const Terms = () => {
  return (
    <Shell>
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6 royal-gradient">Terms of Service</h1>
        
        <Card className="mb-8 glass-morphism border-white/10">
          <CardHeader>
            <CardTitle>Welcome to SpendThrone.com</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Welcome to SpendThrone.com, a satirical platform that explores the dynamics of wealth and competition through a persistent, ranked leaderboard. By accessing or using our services, you agree to these Terms of Service.
            </p>
            
            <h2 className="text-xl font-semibold mt-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using SpendThrone.com, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
            
            <h2 className="text-xl font-semibold mt-4">2. The Concept</h2>
            <p>
              SpendThrone.com is a persistent, ranked leaderboard where your position is determined solely by your monetary contributions. One dollar spent equals one unit of rank. The leaderboard never resets.
            </p>
            
            <h2 className="text-xl font-semibold mt-4">3. Payments and Rank</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>All payments made to SpendThrone.com are final and non-refundable.</li>
              <li>Your rank is determined solely by the total amount you have spent on the platform.</li>
              <li>We reserve the right to adjust ranks in cases of payment disputes, fraud, or technical errors.</li>
              <li>Currency conversions are handled at the time of payment based on current exchange rates.</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-4">4. Royal Mockery Festival</h2>
            <p>
              The Royal Mockery Festival is a feature that allows users to apply cosmetic effects to other users' profiles for a fee:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Mockery effects are purely cosmetic and do not affect a user's rank or standing.</li>
              <li>All mockery effects expire after a predetermined period (24-72 hours).</li>
              <li>We reserve the right to remove inappropriate mockery at our discretion.</li>
              <li>Payments for mockery features are non-refundable.</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-4">5. User Conduct</h2>
            <p>
              Users agree not to:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Use the service for any illegal purpose</li>
              <li>Harass, abuse, or harm other users</li>
              <li>Attempt to manipulate the ranking system through fraudulent payments</li>
              <li>Create multiple accounts to artificially boost rankings</li>
              <li>Misrepresent your identity or affiliation with any person or organization</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-4">6. Intellectual Property</h2>
            <p>
              The SpendThrone.com name, logo, website design, graphics, text, and other materials are owned by or licensed to SpendThrone.com. Unauthorized use of these materials is prohibited.
            </p>
            
            <h2 className="text-xl font-semibold mt-4">7. Limitation of Liability</h2>
            <p>
              SpendThrone.com is provided on an "as is" and "as available" basis. We make no warranties, expressed or implied, regarding the operation of the site or the information, content, or materials included.
            </p>
            
            <h2 className="text-xl font-semibold mt-4">8. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. We will provide notice of significant changes by updating the "Last Updated" date at the top of this page.
            </p>
            
            <h2 className="text-xl font-semibold mt-4">9. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
              <br />
              <a href="mailto:support@spendthrone.com" className="text-royal-gold hover:underline">support@spendthrone.com</a>
            </p>
            
            <div className="text-sm text-white/60 mt-6">
              Last Updated: June 15, 2023
            </div>
          </CardContent>
        </Card>
      </div>
    </Shell>
  );
};

export default Terms;
