
import React from 'react';
import { Shell } from '@/components/ui/shell';
import { HeadingText } from '@/components/ui/heading-text';
import { Scroll, AlertCircle, DollarSign, Crown, Target, Gem } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import RoyalDivider from '@/components/ui/decorations/RoyalDivider';

const Terms = () => {
  return (
    <Shell>
      <div className="flex flex-col gap-6">
        <div className="text-center">
          <div className="inline-flex items-center justify-center mb-4">
            <Scroll size={40} className="text-royal-gold" />
          </div>
          <HeadingText 
            title="Terms of Service" 
            description="The fine print of our digital status experiment"
            gradient={true}
            align="center"
            as="h1"
          />
        </div>
        
        <Card className="glass-morphism border-royal-gold/10">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Crown className="mr-2 h-5 w-5 text-royal-gold" />
              The SpendThrone Charter
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-invert max-w-none">
            <p className="text-white/80 font-bold text-center italic">
              By entering SpendThrone, you acknowledge these truths to be self-evident:
            </p>
            
            <RoyalDivider variant="line" color="gold" className="my-4" />
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <DollarSign className="h-6 w-6 text-royal-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Article I: The Nature of Our Platform</h3>
                  <p className="text-white/70">
                    SpendThrone is a <strong>satirical</strong> social platform that parodies and comments on consumer culture, materialism, and status-seeking behavior. All transactions are real, but the prestige is as substantive as a cloud castle.
                  </p>
                  <p className="text-white/70">
                    By participating, you acknowledge that you understand the satirical nature of this service and that your purchases are effectively donations to a piece of performance art about wealth and status – like buying tickets to a theater show where you're both the audience and the performer, except the performance never ends and your bank account is the script.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <AlertCircle className="h-6 w-6 text-royal-crimson" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Article II: Financial Terms</h3>
                  <p className="text-white/70">
                    All payments to SpendThrone are <strong>FINAL and NON-REFUNDABLE</strong>. When you pay for rank, you're buying just that: pixels on a screen showing how much money you've spent. No refunds will be provided, regardless of whether you experience buyer's remorse or suddenly realize the existential implications of your purchase.
                  </p>
                  <p className="text-white/70">
                    You acknowledge that the digital status you purchase has no real-world value beyond what importance you and others arbitrarily assign to it, much like designer logos, limited edition sneakers, and luxury water bottles. The key difference is that our product is honest about its worthlessness – no pretense of "quality craftsmanship" or "exclusive materials" here!
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Target className="h-6 w-6 text-royal-purple" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Article III: Code of Conduct</h3>
                  <p className="text-white/70">
                    While we celebrate the absurdity of status-seeking, we do not tolerate harassment, hate speech, or illegal content. Your profile, comments, and interactions must comply with basic human decency – our digital moat may be filled with satire, but our moderation drawbridge drops swiftly when needed.
                  </p>
                  <p className="text-white/70">
                    SpendThrone reserves the right to remove content and ban users who violate these terms, even if they've paid thousands for their rank. Money can't buy you immunity from the rules, just like it can't buy happiness (though it can buy a pretty convincing facsimile, and on this platform, a very impressive leaderboard position).
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Crown className="h-6 w-6 text-royal-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Article IV: Policy Updates</h3>
                  <p className="text-white/70">
                    SpendThrone may modify these terms at any time. We'll notify users of significant changes, but it's your responsibility to check for updates. Continued use of SpendThrone after changes indicates your acceptance of the new terms.
                  </p>
                  <p className="text-white/70">
                    You acknowledge that SpendThrone is an evolving platform and that features, visuals, and functionality may change. The only constant is that your rank will always be determined by how much you've spent. That's our golden rule – as immutable as the law of digital gravity.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Gem className="h-6 w-6 text-royal-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Article V: Reality Check</h3>
                  <p className="text-white/70">
                    Let's be crystal clear: this entire platform is built on the premise that people will pay real money for completely meaningless digital status. If that sounds ridiculous to you, congratulations on your healthy perspective! If it sounds perfectly reasonable, perhaps reflect on that reaction.
                  </p>
                  <p className="text-white/70">
                    Your payments directly fund our developers' exotic coffee habits and mechanical keyboard collections. No, we're not building schools or saving forests – we're creating a mirror that reflects society's obsession with status back upon itself, and charging admission for the privilege. Think of us as digital performance artists whose medium is your disposable income and willing participation in our socioeconomic commentary.
                  </p>
                </div>
              </div>
            </div>
            
            <RoyalDivider variant="line" color="gold" className="my-6" />
            
            <div className="p-4 bg-black/20 rounded-lg text-center">
              <p className="text-white/80 mb-2">
                By using SpendThrone, you acknowledge that you have read, understood, and agreed to these terms.
              </p>
              <p className="text-white/60 text-sm">
                If the idea of spending money for purely digital status bothers you, perhaps consider why so many other forms of status-seeking consumption don't. Our digital drawbridge is always down for those seeking to exit, though your contributions remain firmly in our treasury vault regardless.
              </p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="glass-morphism border-white/10">
          <CardHeader>
            <CardTitle className="text-center">The Fine Print</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-invert max-w-none">
            <div className="text-white/60 text-sm space-y-4">
              <p>
                SpendThrone collects minimal user information necessary to maintain your account and rank. We don't sell your data because, frankly, your willingness to pay for digital status is all we're interested in – our business model is as transparent as our satire. Also, selling your data would require us to build actual data collection tools, and that sounds like work.
              </p>
              <p>
                We use standard security measures to protect your information, but no digital fortress is impenetrable. Our security moat is deep, our encryption drawbridge is sturdy, but determined cyber dragons may still occasionally breach the perimeter. Your SpendThrone rank, however, is secured by blockchain technology, making it as immutable as your decision to spend money on digital prestige.
              </p>
              <p>
                SpendThrone is intended for adults. If you're under 18, please get permission from a parent or guardian, who will hopefully use this as a teaching moment about the value of money and the nature of digital status. If they approve your participation, perhaps consider whether their financial advice should be trusted in other matters.
              </p>
              <p>
                Copyright © {new Date().getFullYear()} SpendThrone. All rights reserved. The concept of paying for meaningless status, however, is as old as civilization itself – we've just removed the physical objects and kept the price tags. At least the Egyptian pharaohs got actual pyramids for their trouble.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Shell>
  );
};

export default Terms;
