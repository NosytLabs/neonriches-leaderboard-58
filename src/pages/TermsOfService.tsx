
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ThroneChair from '@/components/logos/ThroneChair';

const TermsOfService: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link to="/">
        <Button variant="outline" className="mb-6 glass-morphism border-white/10">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Button>
      </Link>
      
      <Card className="glass-morphism border-white/10">
        <CardHeader className="flex flex-col items-center text-center border-b border-white/10 pb-6">
          <ThroneChair size={80} className="mb-4" animate={true} />
          <CardTitle className="text-3xl font-royal text-royal-gold">Terms of Service</CardTitle>
          <CardDescription>Last Updated: March 29, 2025</CardDescription>
        </CardHeader>
        
        <CardContent className="pt-6 space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-royal-gold">1. Acceptance of Terms</h2>
            <p className="text-white/80 leading-relaxed">
              Welcome to SpendThrone. By accessing or using our website and services, you agree to be bound by these Terms of Service. If you do not agree to these Terms, please do not use our services.
            </p>
          </div>
          
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-royal-gold">2. Description of Service</h2>
            <p className="text-white/80 leading-relaxed">
              SpendThrone is a satirical social platform where users can advance their rank by making monetary contributions. The platform offers various features including profile customization, team competition, and social interaction. All transactions are non-refundable and purely for entertainment purposes.
            </p>
          </div>
          
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-royal-gold">3. Account Registration</h2>
            <p className="text-white/80 leading-relaxed">
              To access certain features, you must create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to provide accurate and complete information when creating your account and to update your information as necessary.
            </p>
          </div>
          
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-royal-gold">4. User Conduct</h2>
            <p className="text-white/80 leading-relaxed">
              You agree not to use the Service to:
            </p>
            <ul className="list-disc pl-6 text-white/80 space-y-1">
              <li>Violate any laws or regulations</li>
              <li>Post or transmit content that is harmful, offensive, obscene, abusive, or otherwise objectionable</li>
              <li>Impersonate any person or entity</li>
              <li>Engage in any activity that interferes with or disrupts the Service</li>
              <li>Attempt to access any accounts or data not belonging to you</li>
              <li>Use the Service for any fraudulent or illegal purpose</li>
            </ul>
          </div>
          
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-royal-gold">5. Payments and Refunds</h2>
            <p className="text-white/80 leading-relaxed">
              All payments made on SpendThrone are final and non-refundable. By making a payment, you acknowledge that you are purchasing digital status and virtual items with no real-world value. We reserve the right to modify our pricing at any time.
            </p>
          </div>
          
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-royal-gold">6. Content Ownership</h2>
            <p className="text-white/80 leading-relaxed">
              Users retain all ownership rights to the content they post on SpendThrone. By posting content, you grant us a non-exclusive, worldwide, royalty-free license to use, copy, modify, display, and distribute your content in connection with the Service.
            </p>
          </div>
          
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-royal-gold">7. Content Moderation</h2>
            <p className="text-white/80 leading-relaxed">
              We reserve the right to remove any content that violates these Terms or that we find objectionable for any reason. We may suspend or terminate your account for violations of these Terms, inappropriate behavior, or for any other reason at our sole discretion.
            </p>
          </div>
          
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-royal-gold">8. Disclaimer of Warranties</h2>
            <p className="text-white/80 leading-relaxed">
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES OF ANY KIND. WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
          </div>
          
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-royal-gold">9. Limitation of Liability</h2>
            <p className="text-white/80 leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL SPENDTHRONE BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR USE, ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICE.
            </p>
          </div>
          
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-royal-gold">10. Changes to Terms</h2>
            <p className="text-white/80 leading-relaxed">
              We reserve the right to modify these Terms at any time. We will provide notice of material changes by posting the updated Terms on our website. Your continued use of the Service after such changes constitutes your acceptance of the new Terms.
            </p>
          </div>
          
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-royal-gold">11. Contact Information</h2>
            <p className="text-white/80 leading-relaxed">
              If you have any questions about these Terms, please contact us at support@spendthrone.com.
            </p>
          </div>
          
          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <p className="text-white/60 italic">
              By using SpendThrone, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TermsOfService;
