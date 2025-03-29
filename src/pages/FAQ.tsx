
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
            title="Royal Questions & Proclamations" 
            description="Frequently asked queries from the realm's curious nobles"
            gradient={true}
            align="center"
            as="h1"
          />
        </div>
        
        <Card className="glass-morphism border-royal-gold/10">
          <CardContent className="p-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-white/10 py-2">
                <AccordionTrigger className="font-medieval hover:no-underline">
                  <div className="flex items-center">
                    <Crown className="text-royal-gold mr-3 h-5 w-5 flex-shrink-0" />
                    <span>What is this curious realm of SpendThrone?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 text-white/70">
                  <p>SpendThrone is a satirical social experiment that mocketh the concept of "pay-to-win" to its most absurd extreme. Here, thy status in our digital kingdom is determined solely by how much real currency thou hast parted with. $1 = 1 unit of rank. No skills required, only the willingness to part with thy gold!</p>
                  <p className="mt-2 italic text-royal-gold/80">"Where the jests are free but the status costs dearly."</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border-b border-white/10 py-2">
                <AccordionTrigger className="font-medieval hover:no-underline">
                  <div className="flex items-center">
                    <DollarSign className="text-royal-gold mr-3 h-5 w-5 flex-shrink-0" />
                    <span>How does one ascend the noble ranks?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 text-white/70">
                  <p>The path to nobility is paved with expenditure, dear subject! Simply part with thy real-world currency and watch as thy digital rank increases accordingly. Each dollar spent raises thy station by one unit. The more thou spendest, the higher thy position in our completely meaningless hierarchy.</p>
                  <p className="mt-2">Thy rank can never decrease unless others outspend thee. How delightfully anxiety-inducing!</p>
                  <p className="mt-2 italic text-royal-gold/80">"The simplest status system in the realm - thy worth equals thy expenditure."</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border-b border-white/10 py-2">
                <AccordionTrigger className="font-medieval hover:no-underline">
                  <div className="flex items-center">
                    <Shield className="text-royal-gold mr-3 h-5 w-5 flex-shrink-0" />
                    <span>What are these Royal Houses thy subjects join?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 text-white/70">
                  <p>Our realm is divided into three noble houses, each vying for collective dominance:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li><span className="text-royal-crimson font-bold">House Red</span> - Fierce warriors of excess, known for their flamboyant displays of wealth</li>
                    <li><span className="text-emerald-500 font-bold">House Green</span> - Cunning strategists who believe consistent spending surpasses impulsive splurging</li>
                    <li><span className="text-royal-navy font-bold">House Blue</span> - Scholarly nobles who analyze every transaction with cold, calculated precision</li>
                  </ul>
                  <p className="mt-2">Choose thy allegiance wisely, for thy spending contributes to thy house's collective power. Or don't choose wisely - it matters not, as long as thou spend!</p>
                  <p className="mt-2 italic text-royal-gold/80">"The houses compete, but the treasury always wins."</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="border-b border-white/10 py-2">
                <AccordionTrigger className="font-medieval hover:no-underline">
                  <div className="flex items-center">
                    <Target className="text-royal-gold mr-3 h-5 w-5 flex-shrink-0" />
                    <span>What is this Court Mockery I hear whispers of?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 text-white/70">
                  <p>Ah, Court Mockery! The fine art of publicly shaming thy fellow nobles! For a modest fee, thou may subject others to various medieval punishments:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Throw virtual tomatoes at those beneath thy station</li>
                    <li>Place offenders in stocks for public ridicule</li>
                    <li>Appoint the most egregious spenders as Court Jesters</li>
                  </ul>
                  <p className="mt-2">The beauty of our system: victims can purchase protection from such mockery, further filling our royal coffers!</p>
                  <p className="mt-2 italic text-royal-gold/80">"Where even humiliation has a price tag, and dignity is but another commodity."</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="border-b border-white/10 py-2">
                <AccordionTrigger className="font-medieval hover:no-underline">
                  <div className="flex items-center">
                    <Gem className="text-royal-gold mr-3 h-5 w-5 flex-shrink-0" />
                    <span>What rewards await the most generous nobles?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 text-white/70">
                  <p>Those who part with excessive amounts of currency shall receive:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Fanciful digital badges to display on thy profile</li>
                    <li>Customized profile features unavailable to the common rabble</li>
                    <li>The privilege of being ranked higher on a list seen by other participants in this peculiar experiment</li>
                    <li>Certificate of Nobility - a digital parchment proclaiming thy willingness to exchange real currency for imaginary status</li>
                  </ul>
                  <p className="mt-2">All of these rewards have the same real-world value as a jester's promissory note - absolutely none! But they do look rather magnificent...</p>
                  <p className="mt-2 italic text-royal-gold/80">"In this kingdom, even the prizes mock the concept of value."</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6" className="border-b border-white/10 py-2">
                <AccordionTrigger className="font-medieval hover:no-underline">
                  <div className="flex items-center">
                    <Trophy className="text-royal-gold mr-3 h-5 w-5 flex-shrink-0" />
                    <span>Can I recover my royal investments?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 text-white/70">
                  <p>Recover thy gold? HAHAHA! Oh, dear noble, thy jests are most amusing!</p>
                  <p className="mt-2">All payments to our kingdom are as permanent as a royal execution. Once thy gold enters our treasury, it shall never return to thy purse. This is not an investment with returns but a satirical performance art piece about status-seeking behavior.</p>
                  <p className="mt-2">Perhaps the real value is the lesson learned about the absurdity of purchasing status? Nay, probably not.</p>
                  <p className="mt-2 italic text-royal-gold/80">"The royal treasury operates on the principle of 'what's mine is mine, and what's yours will soon be mine as well.'"</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-7" className="border-b border-white/10 py-2">
                <AccordionTrigger className="font-medieval hover:no-underline">
                  <div className="flex items-center">
                    <MessageSquare className="text-royal-gold mr-3 h-5 w-5 flex-shrink-0" />
                    <span>Is this whole affair a jest?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 text-white/70">
                  <p>Indeed, but a jest with a mirror! SpendThrone is satire that mocketh consumer culture, digital status symbols, and the concept of "paying for prestige." We exaggerate these concepts to absurdity, inviting reflection on how we assign value in the digital age.</p>
                  <p className="mt-2">That said, the transactions are quite real. Thy gold pieces truly depart from thy possession in exchange for utterly worthless digital status. Much like purchasing designer pixels for thy social media portrait or spending on virtual goods that exist only as 1s and 0s.</p>
                  <p className="mt-2">The joke, dear noble, is that many might not see it as a joke at all!</p>
                  <p className="mt-2 italic text-royal-gold/80">"When satire becomes indistinguishable from reality, perhaps 'tis the reality that deserves the scrutiny."</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
        
        <Card className="glass-morphism border-white/10">
          <CardContent className="p-6 text-center">
            <p className="text-lg font-medieval mb-2 royal-text-shimmer">Still have burning questions for the royal court?</p>
            <p className="text-white/60">Send a royal messenger pigeon to our castle at <a href="mailto:nobles@spendthrone.com" className="text-royal-gold hover:underline">nobles@spendthrone.com</a></p>
            <p className="text-white/40 text-sm mt-3">The court jesters typically respond within 2-3 business days, assuming they haven't been beheaded for poor humor.</p>
          </CardContent>
        </Card>
        
        <RoyalDivider variant="fancy" color="gold" />
      </div>
    </Shell>
  );
};

export default FAQ;
