
import React from 'react';
import { Shell } from '@/components/ui/shell';
import { Container } from '@/components/ui/container';
import { Card } from '@/components/ui/card';
import RoyalDivider from '@/components/ui/decorations/RoyalDivider';
import PageSEO from '@/components/common/PageSEO';
import { Link } from 'react-router-dom';
import { Shield, ArrowLeft, Scroll, Eye, Lock } from 'lucide-react';

const Privacy = () => {
  return (
    <>
      <PageSEO 
        title="Royal Privacy Charter | SpendThrone" 
        description="Learn about how the SpendThrone realm protects your secrets and handles your personal scrolls."
        canonicalUrl="/privacy"
      />
      
      <Shell>
        <Container className="py-12">
          <div className="mb-8">
            <Link to="/features" className="text-royal-gold hover:underline flex items-center">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Royal Features
            </Link>
          </div>
          
          <div className="text-center mb-10">
            <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-royal-gold/10 mb-4">
              <Shield className="h-8 w-8 text-royal-gold" />
            </div>
            <h1 className="text-4xl font-bold royal-gradient mb-4">Royal Privacy Charter</h1>
            <p className="text-white/70 max-w-3xl mx-auto">
              Sealed with the King's wax in the Year of Our Lord 2024
            </p>
          </div>
          
          <Card className="glass-morphism border-white/10 p-6 mb-8">
            <div className="prose prose-invert max-w-none">
              <h2>Royal Proclamation on Privacy</h2>
              <p>
                Welcome, noble visitor, to the SpendThrone Privacy Charter. This sacred scroll outlines how we collect, use, and protect your 
                personal information when you grace our digital kingdom with your presence. We respect your secrets as if they were the 
                King's own, and we are committed to safeguarding your personal scrolls.
              </p>
              
              <RoyalDivider variant="simple" color="default" className="my-6" />
              
              <h2>Information We Gather from Our Subjects</h2>
              <p>Though our methods are more sophisticated than the King's spies, we may collect:</p>
              <ul>
                <li>Personal identification scrolls (Name, carrier pigeon address, username)</li>
                <li>Payment information (processed through secure third-party merchant guilds)</li>
                <li>Usage data (how you interact with our royal platform)</li>
                <li>Device and browser information (what manner of crystal ball you use to view our kingdom)</li>
                <li>IP address and location data (which digital fiefdom you hail from)</li>
              </ul>
              <p>
                Unlike the village gossip, we don't share your information without good reason. 
                Your secrets are locked in our digital dungeon, protected by enchantments stronger than Merlin's.
              </p>
              
              <RoyalDivider variant="simple" color="default" className="my-6" />
              
              <h2>How The Royal Court Uses Your Information</h2>
              <p>The information we collect is used to:</p>
              <ul>
                <li>Maintain and improve our kingdom's services (no kingdom thrives without knowing its subjects)</li>
                <li>Process payments and maintain subscription records (our royal accountants must balance the books)</li>
                <li>Send royal proclamations about service updates (faster than town criers)</li>
                <li>Monitor and analyze usage patterns (like watching peasants from the castle tower, but less creepy)</li>
                <li>Prevent fraudulent transactions and enhance security (our guards are ever vigilant)</li>
              </ul>
              <p>
                Rest assured, we don't sell your personal information to traveling merchants or rival kingdoms. 
                That would be most ungentlemanly and contrary to the code of chivalry.
              </p>
              
              <RoyalDivider variant="simple" color="default" className="my-6" />
              
              <h2>Castle Defenses & Data Security</h2>
              <p>
                Despite our medieval aesthetic, our security is thoroughly modern. We implement appropriate technical and organizational measures 
                to protect your personal data, much like a castle protects its inhabitants:
              </p>
              <ul>
                <li>Our moat: Encrypted connections (SSL/TLS)</li>
                <li>Our walls: Secure data storage with regular reinforcement</li>
                <li>Our guards: Continuous monitoring for suspicious activity</li>
                <li>Our watchtowers: Regular security audits by trusted knights</li>
              </ul>
              <p>
                However, please note that no method of transmission across the digital realm is 100% secure - 
                even the best castle walls can be breached by a determined dragon.
              </p>
              
              <RoyalDivider variant="simple" color="default" className="my-6" />
              
              <h2>Allied Merchant Guilds (Third-Party Services)</h2>
              <p>
                We use trusted allied guilds to process payments, analyze usage data, and provide other functionality. 
                These merchant guilds have their own privacy scrolls governing how they use such information.
              </p>
              <p>
                Each guild we work with has sworn a sacred oath to protect your information as if it were 
                the secret location of the royal treasury.
              </p>
              
              <RoyalDivider variant="simple" color="default" className="my-6" />
              
              <h2>Your Royal Rights</h2>
              <p>
                Depending on which digital fiefdom you call home, you may have certain rights regarding your personal 
                data, as if you were nobility:
              </p>
              <ul>
                <li>The right to see your personal scrolls (access)</li>
                <li>The right to correct inaccurate town records (rectification)</li>
                <li>The right to be forgotten by the kingdom's historians (erasure)</li>
                <li>The right to restrict how town criers use your data (restriction of processing)</li>
                <li>The right to take your scrolls to another kingdom (data portability)</li>
                <li>The right to object to how your data is used (like saying "nay" to the King - quite brave!)</li>
              </ul>
              <p>
                To exercise these noble rights, send a royal messenger to privacy@spendthrone.com with your request.
              </p>
              
              <RoyalDivider variant="simple" color="default" className="my-6" />
              
              <h2>Summon the Royal Privacy Council</h2>
              <p>
                If you have any questions about this Privacy Charter or our data practices, please summon our Privacy Council by sending a 
                royal decree (email) to privacy@spendthrone.com.
              </p>
              <p>
                Our scribes will respond post-haste, typically within two rotations of the sun around the kingdom 
                (unless they're busy fighting off digital dragons).
              </p>
            </div>
          </Card>
          
          <div className="text-center text-white/50 text-sm">
            <div className="flex justify-center items-center gap-2 mb-2">
              <Lock className="h-4 w-4 text-royal-navy" />
              <span>Your secrets are guarded by our finest digital knights and wizards</span>
              <Lock className="h-4 w-4 text-royal-navy" />
            </div>
            This privacy policy is intended for entertainment purposes as part of our satirical platform. While we do take actual privacy seriously, please remember that SpendThrone is a fictional service.
          </div>
        </Container>
      </Shell>
    </>
  );
};

export default Privacy;
