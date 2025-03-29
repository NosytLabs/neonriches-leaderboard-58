
import React from 'react';
import { Container } from '@/components/ui/container';
import PageSEO from '@/components/common/PageSEO';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Crown, Book, HelpCircle, FileText, Info, Shield, MessageCircle } from 'lucide-react';

const About = () => {
  return (
    <>
      <PageSEO 
        title="About SpendThrone" 
        description="Learn about SpendThrone - our mission, values, and the revolutionary platform where status is determined by spending."
        canonicalUrl="/about"
      />
      
      <Container className="py-10">
        <h1 className="text-4xl font-bold mb-2 royal-gradient text-center">About SpendThrone</h1>
        <p className="text-white/70 text-center mb-10 max-w-3xl mx-auto">
          SpendThrone is a revolutionary platform where status is determined by spending.
          Learn about our vision, how we operate, and what makes us different.
        </p>
        
        <Tabs defaultValue="mission" className="w-full">
          <TabsList className="grid grid-cols-6 max-w-3xl mx-auto mb-6">
            <TabsTrigger value="mission">Mission</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
            <TabsTrigger value="terms">Terms</TabsTrigger>
            <TabsTrigger value="privacy">Privacy</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
            <TabsTrigger value="concept">Concept</TabsTrigger>
          </TabsList>
          
          {/* Mission Tab */}
          <TabsContent value="mission">
            <Card className="glass-morphism border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Crown className="mr-2 h-5 w-5 text-royal-gold" />
                  Our Royal Mission
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3">Vision Statement</h3>
                  <p className="text-white/80">
                    SpendThrone aims to create the most transparent status system ever devised, 
                    where your rank is directly determined by your spending, cutting through the 
                    complex social signals and hidden wealth markers of traditional status systems.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-3">Core Values</h3>
                  <ul className="space-y-4">
                    <li className="flex">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-royal-gold/10 flex items-center justify-center mr-4">
                        <Crown className="h-5 w-5 text-royal-gold" />
                      </div>
                      <div>
                        <h4 className="font-bold">Radical Transparency</h4>
                        <p className="text-white/70">We believe in brutally honest metrics: $1 spent = 1 unit of status. No hidden algorithms.</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-royal-gold/10 flex items-center justify-center mr-4">
                        <Book className="h-5 w-5 text-royal-gold" />
                      </div>
                      <div>
                        <h4 className="font-bold">Self-Awareness</h4>
                        <p className="text-white/70">We embrace the satirical nature of our platform while delivering real value to those who participate.</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-royal-gold/10 flex items-center justify-center mr-4">
                        <Shield className="h-5 w-5 text-royal-gold" />
                      </div>
                      <div>
                        <h4 className="font-bold">Fair Competition</h4>
                        <p className="text-white/70">Everyone plays by the same rules. No special privileges except those explicitly purchased.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* FAQ Tab */}
          <TabsContent value="faq">
            <Card className="glass-morphism border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <HelpCircle className="mr-2 h-5 w-5 text-royal-gold" />
                  Frequently Asked Questions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="p-4 rounded-md bg-white/5">
                    <h3 className="text-lg font-bold mb-2">Is this a joke?</h3>
                    <p className="text-white/80">
                      Yes and no. SpendThrone is definitely satire, but it's functional satire. The platform works exactly as described, 
                      and your status will genuinely increase with your spending. Think of it as an art project with real economic consequences.
                    </p>
                  </div>
                  
                  <div className="p-4 rounded-md bg-white/5">
                    <h3 className="text-lg font-bold mb-2">Can I get my money back?</h3>
                    <p className="text-white/80">
                      No. All transactions are final. The whole point of the platform is that spending equals status - refunds would 
                      undermine the core concept. Please spend responsibly.
                    </p>
                  </div>
                  
                  <div className="p-4 rounded-md bg-white/5">
                    <h3 className="text-lg font-bold mb-2">Do I get anything tangible for my money?</h3>
                    <p className="text-white/80">
                      You get digital status and features, including profile customization, access to mockery abilities, analytics features, and 
                      the satisfaction of watching your rank increase. Whether that's "tangible" is a philosophical question.
                    </p>
                  </div>
                  
                  <div className="p-4 rounded-md bg-white/5">
                    <h3 className="text-lg font-bold mb-2">How is this different from just donating to charity?</h3>
                    <p className="text-white/80">
                      Charity is about giving selflessly. SpendThrone is about giving selfishly, with full transparency 
                      about the status-seeking nature of the transaction. It's the difference between anonymous giving and a hospital wing with your name on it.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Terms Tab */}
          <TabsContent value="terms">
            <Card className="glass-morphism border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="mr-2 h-5 w-5 text-royal-gold" />
                  Terms of Service
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-invert max-w-none">
                <h3>1. Acceptance of Terms</h3>
                <p>
                  By accessing SpendThrone, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, 
                  you may not access the service.
                </p>
                
                <h3>2. Payment and Refunds</h3>
                <p>
                  All payments made to SpendThrone are final and non-refundable. Your spending directly affects your rank and status on the platform, 
                  which is the core functionality of the service.
                </p>
                
                <h3>3. Mockery Features</h3>
                <p>
                  Users with appropriate status levels may utilize mockery features against other users. By using SpendThrone, you consent to potentially 
                  being the subject of mockery features. All mockery effects are temporary and cosmetic in nature.
                </p>
                
                <h3>4. Content Restrictions</h3>
                <p>
                  Users may not upload, share, or create content that is illegal, harmful, threatening, abusive, harassing, tortious, defamatory, vulgar, 
                  obscene, libelous, invasive of another's privacy, hateful, or racially, ethnically or otherwise objectionable.
                </p>
                
                <h3>5. Termination</h3>
                <p>
                  We may terminate or suspend your account at our sole discretion, without prior notice or liability, for any reason whatsoever, including 
                  without limitation if you breach the Terms. Upon termination, your right to use the service will immediately cease.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Privacy Tab */}
          <TabsContent value="privacy">
            <Card className="glass-morphism border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="mr-2 h-5 w-5 text-royal-gold" />
                  Privacy Policy
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-invert max-w-none">
                <h3>1. Information Collection</h3>
                <p>
                  We collect information you provide directly to us, including your name, email address, payment information, and any profile information 
                  you choose to share.
                </p>
                
                <h3>2. Public Nature of the Platform</h3>
                <p>
                  SpendThrone is designed as a public platform where your spending amount, rank, and interactions with other users are visible to all. 
                  Your participation is an explicit consent to this public display of your activity.
                </p>
                
                <h3>3. Leaderboard Information</h3>
                <p>
                  Your username, spending amount, rank, and any public interactions will be displayed on public leaderboards. This information is the core 
                  functionality of the platform and cannot be hidden or anonymized.
                </p>
                
                <h3>4. Data Security</h3>
                <p>
                  We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or 
                  electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
                
                <h3>5. Cookies and Tracking</h3>
                <p>
                  We use cookies and similar tracking technologies to track activity on our platform and hold certain information. You can instruct your 
                  browser to refuse all cookies or to indicate when a cookie is being sent.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Contact Tab */}
          <TabsContent value="contact">
            <Card className="glass-morphism border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageCircle className="mr-2 h-5 w-5 text-royal-gold" />
                  Contact Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="max-w-xl mx-auto">
                  <p className="text-white/80 mb-6">
                    Have questions, feedback, or need assistance? We'd love to hear from you. Please use one of the methods below to get in touch with the 
                    SpendThrone team.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-royal-gold/10 flex items-center justify-center mr-4">
                        <MessageCircle className="h-6 w-6 text-royal-gold" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">Customer Support</h3>
                        <p className="text-white/70 mb-2">For account issues, payment questions, or general help</p>
                        <p className="text-royal-gold">support@spendthrone.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-royal-gold/10 flex items-center justify-center mr-4">
                        <Info className="h-6 w-6 text-royal-gold" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">Press & Media</h3>
                        <p className="text-white/70 mb-2">For media inquiries, interviews, or press kits</p>
                        <p className="text-royal-gold">press@spendthrone.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-royal-gold/10 flex items-center justify-center mr-4">
                        <Shield className="h-6 w-6 text-royal-gold" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">Legal Matters</h3>
                        <p className="text-white/70 mb-2">For legal inquiries, terms of service questions, or privacy concerns</p>
                        <p className="text-royal-gold">legal@spendthrone.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Concept Tab */}
          <TabsContent value="concept">
            <Card className="glass-morphism border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lightbulb className="mr-2 h-5 w-5 text-royal-gold" />
                  The SpendThrone Concept
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <p className="text-white/80">
                    SpendThrone began as a satirical thought experiment: What if we created a social platform that bypassed all the usual social status games 
                    and went straight to what many social networks are really about – showing off wealth and purchasing power?
                  </p>
                  
                  <div className="p-4 rounded-lg bg-white/5">
                    <h3 className="text-xl font-bold mb-2">The Satire</h3>
                    <p className="text-white/80">
                      SpendThrone satirizes how wealth and status operate in both traditional and digital societies. By making the connection between 
                      spending and status completely explicit, we're holding up a mirror to social dynamics that often remain unacknowledged.
                    </p>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-white/5">
                    <h3 className="text-xl font-bold mb-2">The Reality</h3>
                    <p className="text-white/80">
                      Despite its satirical foundation, SpendThrone is a functional platform where real people spend real money for digital status. 
                      This blurring of satire and reality creates a unique space where participants can simultaneously critique and participate in 
                      status-seeking behavior.
                    </p>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-white/5">
                    <h3 className="text-xl font-bold mb-2">The Social Experiment</h3>
                    <p className="text-white/80">
                      We see SpendThrone as a living social experiment - what happens when we strip away all pretense and create a purely 
                      transactional status system? Who participates, how do they interact, and what social dynamics emerge? Every user becomes 
                      part of this experiment, helping us explore the nature of status itself.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </Container>
    </>
  );
};

export default About;
