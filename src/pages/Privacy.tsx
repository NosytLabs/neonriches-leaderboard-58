
import React from 'react';
import Layout from '@/components/layout/Layout';
import { privacyContent } from '@/data/privacyContent';
import { motion } from 'framer-motion';
import { Scroll, Shield, Lock, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const Privacy: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-4 royal-gradient font-medieval">Royal Privacy Covenant</h1>
            <p className="text-white/70">Last Updated: {new Date().toLocaleDateString()}</p>
          </div>
          
          <Card className="glass-morphism border-white/10 p-8 rounded-lg mb-8">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="flex items-center text-xl text-royal-gold">
                <Lock className="mr-3 h-6 w-6" />
                The Royal Seal of Privacy
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-white/90 italic mb-6 text-lg">
                While we may jest about your financial choices, we take the protection of your personal information quite seriously. The Crown's digital scribes have prepared this document to explain how we safeguard your royal data.
              </p>
              
              {privacyContent.sections.map((section, index) => (
                <div key={index} className="mb-8">
                  <div className="flex items-center mb-4">
                    {index === 0 ? (
                      <Scroll className="text-royal-gold mr-2 h-5 w-5" />
                    ) : index === 1 ? (
                      <Eye className="text-royal-gold mr-2 h-5 w-5" />
                    ) : (
                      <Shield className="text-royal-gold mr-2 h-5 w-5" />
                    )}
                    <h2 className="text-xl font-semibold">{section.title}</h2>
                  </div>
                  
                  <div className="space-y-3 ml-7">
                    {section.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-white/80">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  
                  {index < privacyContent.sections.length - 1 && (
                    <Separator className="my-6 bg-white/10" />
                  )}
                </div>
              ))}
              
              <div className="mt-10 p-6 bg-black/30 rounded-lg border border-royal-gold/20">
                <h3 className="text-lg font-semibold text-royal-gold mb-3">A Knight's Promise</h3>
                <p className="text-white/90">
                  We may be satirical, but our data protection is serious business. Your personal information is stored in a digital fortress guarded by the finest encryption dragons in the realm. We collect only what we need to run our kingdom and will never sell your data to neighboring realms.
                </p>
                <p className="mt-3 text-white/90">
                  And remember, while your rank on SpendThrone may be public (that's rather the point), your payment information is kept securely locked in the royal vault.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Privacy;
