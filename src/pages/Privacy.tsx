
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Crown, Shield, Lock, Eye, FileText, UserCheck } from 'lucide-react';
import RoyalDivider from '@/components/ui/royal-divider';

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Helmet>
        <title>Privacy Policy | SpendThrone</title>
        <meta 
          name="description" 
          content="Our royal decree on privacy and data protection at SpendThrone."
        />
      </Helmet>
      
      <Header />
      
      <main className="flex-1 pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <Crown className="h-12 w-12 text-royal-gold mx-auto mb-4" />
            <h1 className="text-4xl font-bold royal-gradient mb-3 font-royal">Privacy Policy</h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              Our royal decree on how we handle your information
            </p>
          </div>
          
          <div className="space-y-8">
            <Card className="glass-morphism border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Lock className="mr-2 h-5 w-5 text-royal-gold" />
                  Information Collection
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-invert max-w-none">
                <p className="text-white/80">
                  We collect the minimum information necessary to operate SpendThrone, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-white/70">
                  <li>Account information (username, email, password)</li>
                  <li>Transaction history and spending amounts</li>
                  <li>Profile information you choose to provide</li>
                  <li>Usage data and analytics</li>
                </ul>
                <p className="text-white/80 mt-4">
                  All financial transactions are processed securely through our payment providers.
                  We never store complete credit card information on our servers.
                </p>
              </CardContent>
            </Card>
            
            <RoyalDivider variant="line" className="my-8" />
            
            <Card className="glass-morphism border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Eye className="mr-2 h-5 w-5 text-royal-crimson" />
                  Information Usage
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-invert max-w-none">
                <p className="text-white/80">
                  We use your information to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-white/70">
                  <li>Maintain and operate the SpendThrone platform</li>
                  <li>Track your rank and spending for leaderboard placement</li>
                  <li>Process transactions and calculate prize pool allocations</li>
                  <li>Communicate with you about events, updates, and account information</li>
                  <li>Improve our service based on usage patterns</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="glass-morphism border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Shield className="mr-2 h-5 w-5 text-royal-navy" />
                  Data Protection
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-invert max-w-none">
                <p className="text-white/80">
                  We implement appropriate security measures to protect your personal information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-white/70">
                  <li>All data is encrypted in transit using industry-standard SSL/TLS</li>
                  <li>Access to user data is restricted to authorized personnel only</li>
                  <li>Regular security audits and updates are performed</li>
                </ul>
                <p className="text-white/80 mt-4">
                  While we strive to protect your information, no method of transmission over the internet
                  is 100% secure. We cannot guarantee absolute security.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-morphism border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <UserCheck className="mr-2 h-5 w-5 text-royal-emerald" />
                  Your Rights
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-invert max-w-none">
                <p className="text-white/80">
                  As a noble member of our kingdom, you have certain rights regarding your data:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-white/70">
                  <li>Access to your personal information</li>
                  <li>Correction of inaccurate information</li>
                  <li>Deletion of your account and associated data (except what we're required to keep for legitimate business purposes)</li>
                  <li>Objection to certain processing of your data</li>
                </ul>
                <p className="text-white/80 mt-4">
                  To exercise these rights, please contact our Royal Data Guardians at privacy@spendthrone.com
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-morphism border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <FileText className="mr-2 h-5 w-5 text-royal-purple" />
                  Policy Updates
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-invert max-w-none">
                <p className="text-white/80">
                  This Privacy Policy may be updated periodically to reflect changes in our practices.
                  We will notify you of any significant changes via email or through the platform.
                </p>
                <p className="text-white/80 mt-4">
                  Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-10 text-white/50 text-sm">
            <p>
              For questions about our privacy practices, contact us at privacy@spendthrone.com
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;
