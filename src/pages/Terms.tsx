
import React from 'react';
import Layout from '@/components/layout/Layout';
import { termsContent } from '@/data/termsContent';
import { motion } from 'framer-motion';
import { Scroll, Shield, Swords, Scroll2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const Terms: React.FC = () => {
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
            <h1 className="text-4xl font-bold mb-4 royal-gradient font-medieval">Royal Decree & Terms of Service</h1>
            <p className="text-white/70">Last Updated: {new Date().toLocaleDateString()}</p>
          </div>
          
          <Card className="glass-morphism border-white/10 p-8 rounded-lg mb-8">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="flex items-center text-xl text-royal-gold">
                <Scroll className="mr-3 h-6 w-6" />
                Royal Proclamation
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-white/90 italic mb-6 text-lg">
                By order of the Crown, all visitors to these digital lands are bound by the following terms. Read carefully, lest ye be banished to the digital dungeons.
              </p>
              
              {termsContent.sections.map((section, index) => (
                <div key={index} className="mb-8">
                  <div className="flex items-center mb-4">
                    {index === 0 ? (
                      <Scroll2 className="text-royal-gold mr-2 h-5 w-5" />
                    ) : index === 1 ? (
                      <Shield className="text-royal-gold mr-2 h-5 w-5" />
                    ) : (
                      <Swords className="text-royal-gold mr-2 h-5 w-5" />
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
                  
                  {index < termsContent.sections.length - 1 && (
                    <Separator className="my-6 bg-white/10" />
                  )}
                </div>
              ))}
              
              <div className="mt-10 p-6 bg-black/30 rounded-lg border border-royal-gold/20">
                <h3 className="text-lg font-semibold text-royal-gold mb-3">Royal Decree Simplified</h3>
                <p className="text-white/90">
                  In plain English: SpendThrone is a satirical performance art project about status, wealth, and digital consumption. When you spend money here, you're paying for entertainment with absolutely no financial return. Your purchases are non-refundable, and the digital status you receive has no value except what you assign to it.
                </p>
                <p className="mt-3 text-white/90">
                  If that makes you uncomfortable, congratulations on having a healthy perspective! Perhaps consider donating to charity instead.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Terms;
