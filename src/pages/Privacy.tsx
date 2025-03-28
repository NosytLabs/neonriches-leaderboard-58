
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Crown, Shield, Lock, Eye, FileText, UserCheck, Bell, Database } from 'lucide-react';
import Layout from '@/components/layouts/Layout';
import RoyalDivider from '@/components/ui/royal-divider';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import RoyalDecoration from '@/components/ui/royal-decoration';

const Privacy = () => {
  return (
    <Layout
      title="Privacy Policy"
      description="Our royal decree on privacy and data protection at SpendThrone."
      fullHeight
    >
      <div className="container mx-auto max-w-4xl relative">
        <RoyalDecoration variant="royal-insignia" position="top-left" className="-translate-x-16 -translate-y-12 opacity-30 hidden lg:block" />
        <RoyalDecoration variant="royal-insignia" position="top-right" className="translate-x-16 -translate-y-12 opacity-30 hidden lg:block" />
        
        <div className="text-center mb-10">
          <Lock className="h-12 w-12 text-royal-gold mx-auto mb-4 animate-crown-glow" />
          <h1 className="text-4xl font-bold royal-gradient mb-3 font-royal">Royal Privacy Decree</h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            How we handle your information with more care than we handle your money
          </p>
        </div>
        
        <RoyalDivider variant="ornate" className="mb-10" />
        
        <div className="space-y-8">
          <Card className="glass-morphism border-white/10 overflow-hidden">
            <CardHeader className="bg-royal-navy/10 border-b border-white/5">
              <CardTitle className="flex items-center text-xl">
                <Eye className="mr-2 h-5 w-5 text-royal-gold" />
                Information Collection
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none pt-6">
              <p className="text-white/80">
                Unlike actual nobility who took everything from their subjects, we collect only the minimum information necessary:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-white/70">
                <li>Account information (username, email, password)</li>
                <li>Transaction history and spending amounts (we need to know how much to worship you)</li>
                <li>Profile information you choose to provide (so other nobles can properly envy you)</li>
                <li>Usage data and analytics (to see which parts of our satire are most effective)</li>
              </ul>
              <p className="text-white/80 mt-4">
                All financial transactions are processed securely through our payment providers.
                We never store complete credit card information on our servers—after all, our satire has standards.
              </p>
            </CardContent>
          </Card>
          
          <Card className="glass-morphism border-white/10 overflow-hidden">
            <CardHeader className="bg-royal-crimson/10 border-b border-white/5">
              <CardTitle className="flex items-center text-xl">
                <Database className="mr-2 h-5 w-5 text-royal-crimson" />
                Information Usage
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none pt-6">
              <p className="text-white/80">
                We use your information to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-white/70">
                <li>Maintain and operate the SpendThrone platform</li>
                <li>Track your rank and spending for leaderboard placement (the core of our satire)</li>
                <li>Process transactions and calculate prize pool allocations</li>
                <li>Communicate with you about events, updates, and account information</li>
                <li>Improve our service based on usage patterns</li>
              </ul>
              <div className="mt-4 p-3 bg-royal-crimson/5 border border-royal-crimson/10 rounded-md">
                <p className="text-sm text-white/70 italic">
                  "Unlike real nobility who'd use your information for blackmail, we only use it to fuel our satirical commentary on wealth and status."
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="glass-morphism border-white/10 overflow-hidden">
            <CardHeader className="bg-royal-navy/10 border-b border-white/5">
              <CardTitle className="flex items-center text-xl">
                <Shield className="mr-2 h-5 w-5 text-royal-navy" />
                Data Protection
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none pt-6">
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
                is 100% secure. We cannot guarantee absolute security—much like how real nobility couldn't
                guarantee the security of their castles despite all those moats and drawbridges.
              </p>
            </CardContent>
          </Card>
          
          <Card className="glass-morphism border-white/10 overflow-hidden">
            <CardHeader className="bg-royal-gold/10 border-b border-white/5">
              <CardTitle className="flex items-center text-xl">
                <UserCheck className="mr-2 h-5 w-5 text-royal-gold" />
                Your Rights
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none pt-6">
              <p className="text-white/80">
                As a noble member of our kingdom, you have certain rights regarding your data that peasants of old could only dream of:
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
          
          <Card className="glass-morphism border-white/10 overflow-hidden">
            <CardHeader className="bg-royal-purple/10 border-b border-white/5">
              <CardTitle className="flex items-center text-xl">
                <Bell className="mr-2 h-5 w-5 text-royal-purple" />
                Policy Updates
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none pt-6">
              <p className="text-white/80">
                This Privacy Policy may be updated periodically to reflect changes in our practices or regulations.
                We will notify you of any significant changes via email or through the platform, which is more consideration
                than actual royalty ever gave their subjects when changing the rules.
              </p>
              <p className="text-white/80 mt-4">
                Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-10 text-white/50 text-sm flex flex-col sm:flex-row justify-between items-center">
          <p>
            For questions about our privacy practices: <span className="text-royal-gold">privacy@spendthrone.com</span>
          </p>
          
          <div className="mt-4 sm:mt-0">
            <Button variant="outline" asChild>
              <Link to="/terms" className="flex items-center">
                <FileText className="mr-2 h-4 w-4" />
                <span>View Terms of Service</span>
              </Link>
            </Button>
          </div>
        </div>
        
        <RoyalDecoration variant="royal-insignia" position="bottom-left" className="-translate-x-16 translate-y-12 opacity-30 hidden lg:block" />
        <RoyalDecoration variant="royal-insignia" position="bottom-right" className="translate-x-16 translate-y-12 opacity-30 hidden lg:block" />
      </div>
    </Layout>
  );
};

export default Privacy;
