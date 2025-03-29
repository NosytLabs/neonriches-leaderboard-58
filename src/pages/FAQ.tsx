
import React from 'react';
import { Shell } from '@/components/ui/shell';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { HeadingText } from '@/components/ui/heading-text';
import { HelpCircle, Scroll, DollarSign, Crown, Shield, Gem, Target, Trophy, MessageSquare } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import RoyalDivider from '@/components/ui/decorations/RoyalDivider';

const FAQ = () => {
  return (
    <Shell>
      <div className="flex flex-col gap-6">
        <div className="text-center">
          <div className="inline-flex items-center justify-center mb-4">
            <Scroll size={40} className="text-royal-gold" />
          </div>
          <HeadingText 
            title="Frequently Asked Questions" 
            description="Common inquiries about our digital status experiment"
            gradient={true}
            align="center"
            as="h1"
          />
        </div>
        
        <Card className="glass-morphism border-royal-gold/10">
          <CardContent className="p-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-white/10 py-2">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center">
                    <Crown className="text-royal-gold mr-3 h-5 w-5 flex-shrink-0" />
                    <span>What exactly is SpendThrone?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 text-white/70">
                  <p>SpendThrone is a satirical social experiment that takes the concept of "pay-to-win" to its logical extreme. Here, your status is determined solely by how much real money you've spent. $1 = 1 unit of rank. No skills required, only a willingness to part with your cash!</p>
                  <p className="mt-2 italic text-royal-gold/80">"Where the entertainment is free but the status costs real money."</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border-b border-white/10 py-2">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center">
                    <DollarSign className="text-royal-gold mr-3 h-5 w-5 flex-shrink-0" />
                    <span>How do I increase my rank?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 text-white/70">
                  <p>Simply spend money and watch your digital rank increase accordingly. Each dollar spent raises your position by one unit. The more you spend, the higher your position in our completely arbitrary hierarchy – like a highscore board where the only skill is spending.</p>
                  <p className="mt-2">Your rank can never decrease unless others outspend you. How delightfully anxiety-inducing!</p>
                  <p className="mt-2 italic text-royal-gold/80">"The simplest status system ever devised - your worth equals your expenditure."</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border-b border-white/10 py-2">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center">
                    <Shield className="text-royal-gold mr-3 h-5 w-5 flex-shrink-0" />
                    <span>What are these Teams you can join?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 text-white/70">
                  <p>Our platform is divided into three competing teams, each vying for collective dominance:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li><span className="text-royal-crimson font-bold">Team Red</span> - Aggressive spenders, known for their flamboyant displays of wealth</li>
                    <li><span className="text-emerald-500 font-bold">Team Green</span> - Strategic spenders who believe consistent expenditure surpasses impulsive splurging</li>
                    <li><span className="text-royal-navy font-bold">Team Blue</span> - Analytical spenders who calculate every transaction with precision</li>
                  </ul>
                  <p className="mt-2">Choose your team wisely, as your spending contributes to your team's collective power. Or don't choose wisely - it matters not, as long as you spend!</p>
                  <p className="mt-2 italic text-royal-gold/80">"The teams compete, but the payment processor always wins."</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="border-b border-white/10 py-2">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center">
                    <Target className="text-royal-gold mr-3 h-5 w-5 flex-shrink-0" />
                    <span>What is the Mockery feature I keep hearing about?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 text-white/70">
                  <p>Ah, Mockery! The fine art of digitally shaming your fellow users! For a modest fee, you may subject others to various cosmetic effects:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Throw virtual tomatoes at profiles you dislike</li>
                    <li>Place users in digital stocks for public ridicule</li>
                    <li>Appoint high spenders as Jesters for comic effect</li>
                  </ul>
                  <p className="mt-2">The beautiful irony: victims can purchase protection from such mockery, further driving platform revenue. It's like Twitter's blue checkmark but for mockery immunity.</p>
                  <p className="mt-2 italic text-royal-gold/80">"Where even humiliation has a price tag, and dignity is just another premium feature."</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="border-b border-white/10 py-2">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center">
                    <Gem className="text-royal-gold mr-3 h-5 w-5 flex-shrink-0" />
                    <span>What rewards do high spenders receive?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 text-white/70">
                  <p>Those who part with excessive amounts of money shall receive:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Digital badges to display on your profile – like scout badges but for spending</li>
                    <li>Customized profile features unavailable to lower-ranked users</li>
                    <li>The privilege of being ranked higher on a list seen by other participants</li>
                    <li>Certificate of Status – a digital document proclaiming your willingness to exchange real currency for virtual prestige</li>
                  </ul>
                  <p className="mt-2">All of these rewards have the same real-world value as a diploma from a fictional university - absolutely none! But they look rather impressive in certain digital circles.</p>
                  <p className="mt-2 italic text-royal-gold/80">"On this platform, even the rewards are satire of value systems."</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6" className="border-b border-white/10 py-2">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center">
                    <Trophy className="text-royal-gold mr-3 h-5 w-5 flex-shrink-0" />
                    <span>Can I recover my investments?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 text-white/70">
                  <p>Recover your money? Ha! That's hilarious!</p>
                  <p className="mt-2">All payments to our platform are as permanent as a tattoo. Once your money enters our system, it shall never return to your account. This is not an investment with returns but a satirical commentary on status-seeking behavior.</p>
                  <p className="mt-2">Perhaps the real value is the lesson learned about the absurdity of purchasing status? Probably not.</p>
                  <p className="mt-2 italic text-royal-gold/80">"Our payment system operates on the principle that money flows in one direction only."</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-7" className="border-b border-white/10 py-2">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center">
                    <MessageSquare className="text-royal-gold mr-3 h-5 w-5 flex-shrink-0" />
                    <span>Is this whole thing satirical?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 text-white/70">
                  <p>Indeed, but satire with a purpose! SpendThrone is a mirror reflecting consumer culture, digital status symbols, and the concept of "paying for prestige." We exaggerate these concepts to absurdity, inviting reflection on how we assign value in the digital age.</p>
                  <p className="mt-2">That said, the transactions are quite real. Your money truly leaves your possession in exchange for utterly worthless digital status. Much like purchasing designer NFTs or spending on virtual goods that exist only as data.</p>
                  <p className="mt-2">The joke is that many might not see it as a joke at all!</p>
                  <p className="mt-2 italic text-royal-gold/80">"When satire becomes indistinguishable from reality, perhaps it's reality that deserves scrutiny."</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
        
        <Card className="glass-morphism border-white/10">
          <CardContent className="p-6 text-center">
            <p className="text-lg font-medium mb-2 royal-text-shimmer">Still have burning questions?</p>
            <p className="text-white/60">Send an email to our customer support team at <a href="mailto:questions@spendthrone.com" className="text-royal-gold hover:underline">questions@spendthrone.com</a></p>
            <p className="text-white/40 text-sm mt-3">Our support team typically responds within 2-3 business days, assuming they haven't spent all their salary on improving their own SpendThrone ranks.</p>
          </CardContent>
        </Card>
        
        <RoyalDivider variant="fancy" color="gold" />
      </div>
    </Shell>
  );
};

export default FAQ;
