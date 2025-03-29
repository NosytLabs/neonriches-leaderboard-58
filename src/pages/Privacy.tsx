
import React from 'react';
import { Shell } from '@/components/ui/shell';
import { Container } from '@/components/ui/container';
import { Card } from '@/components/ui/card';
import RoyalDivider from '@/components/ui/decorations/RoyalDivider';
import PageSEO from '@/components/common/PageSEO';
import { Link } from 'react-router-dom';
import { Shield, ArrowLeft } from 'lucide-react';

const Privacy = () => {
  return (
    <>
      <PageSEO 
        title="Privacy Policy | SpendThrone" 
        description="Learn about how SpendThrone protects your privacy and handles your data."
        canonicalUrl="/privacy"
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
              <Shield className="h-8 w-8 text-royal-gold" />
            </div>
            <h1 className="text-4xl font-bold royal-gradient mb-4">Privacy Policy</h1>
            <p className="text-white/70 max-w-3xl mx-auto">
              Last updated: January 2024
            </p>
          </div>
          
          <Card className="glass-morphism border-white/10 p-6 mb-8">
            <div className="prose prose-invert max-w-none">
              <h2>Introduction</h2>
              <p>
                Welcome to SpendThrone's Privacy Policy. This document outlines how we collect, use, and protect your personal information when you use our services. We respect your privacy and are committed to safeguarding your personal data.
              </p>
              
              <RoyalDivider variant="simple" color="default" className="my-6" />
              
              <h2>Information We Collect</h2>
              <p>We may collect the following information:</p>
              <ul>
                <li>Personal identification information (Name, email address, username)</li>
                <li>Payment information (processed through secure third-party services)</li>
                <li>Usage data (how you interact with our platform)</li>
                <li>Device and browser information</li>
                <li>IP address and location data</li>
              </ul>
              
              <RoyalDivider variant="simple" color="default" className="my-6" />
              
              <h2>How We Use Your Information</h2>
              <p>The information we collect is used to:</p>
              <ul>
                <li>Provide, maintain, and improve our services</li>
                <li>Process payments and maintain subscription records</li>
                <li>Communicate with you about service updates and offers</li>
                <li>Monitor and analyze usage patterns and trends</li>
                <li>Prevent fraudulent transactions and enhance security</li>
              </ul>
              
              <RoyalDivider variant="simple" color="default" className="my-6" />
              
              <h2>Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage. However, please note that no method of transmission over the Internet or method of electronic storage is 100% secure.
              </p>
              
              <RoyalDivider variant="simple" color="default" className="my-6" />
              
              <h2>Third-Party Services</h2>
              <p>
                We use trusted third-party services to process payments, analyze usage data, and provide other functionality. These services have their own privacy policies governing how they use such information.
              </p>
              
              <RoyalDivider variant="simple" color="default" className="my-6" />
              
              <h2>Your Rights</h2>
              <p>Depending on your location, you may have certain rights regarding your personal data, including:</p>
              <ul>
                <li>The right to access your personal data</li>
                <li>The right to correct inaccurate or incomplete information</li>
                <li>The right to erasure ("the right to be forgotten")</li>
                <li>The right to restrict processing of your data</li>
                <li>The right to data portability</li>
                <li>The right to object to how your data is used</li>
              </ul>
              
              <RoyalDivider variant="simple" color="default" className="my-6" />
              
              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or our data practices, please contact us at privacy@spendthrone.com.
              </p>
            </div>
          </Card>
          
          <div className="text-center text-white/50 text-sm">
            This privacy policy is intended for entertainment purposes as part of our satirical platform. While we do take actual privacy seriously, please remember that SpendThrone is a fictional service.
          </div>
        </Container>
      </Shell>
    </>
  );
};

export default Privacy;
