
import React from 'react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { Crown, DollarSign, Shield, Target, Trophy, Gem, Scroll, Coins, MessageSquare } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
  icon: React.ReactNode;
}

const RoyalFAQ: React.FC = () => {
  const faqItems: FAQItem[] = [
    {
      question: "What is this curious realm of SpendThrone?",
      answer: (
        <div>
          <p>SpendThrone is a satirical social experiment that mocketh the concept of "pay-to-win" to its most absurd extreme. Here, thy status in our digital kingdom is determined solely by how much real currency thou hast parted with. $1 = 1 unit of rank. No skills required, only the willingness to part with thy gold!</p>
          <p className="mt-2 italic text-royal-gold/80">"Where the jests are free but the status costs dearly."</p>
        </div>
      ),
      icon: <Crown className="text-royal-gold mr-3 h-5 w-5 flex-shrink-0" />
    },
    {
      question: "How does one ascend the noble ranks?",
      answer: (
        <div>
          <p>The path to nobility is paved with expenditure, dear subject! Simply part with thy real-world currency and watch as thy digital rank increases accordingly. Each dollar spent raises thy station by one unit. The more thou spendest, the higher thy position in our completely meaningless hierarchy.</p>
          <p className="mt-2">Thy rank can never decrease unless others outspend thee. How delightfully anxiety-inducing!</p>
          <p className="mt-2 italic text-royal-gold/80">"The simplest status system in the realm - thy worth equals thy expenditure."</p>
        </div>
      ),
      icon: <DollarSign className="text-royal-gold mr-3 h-5 w-5 flex-shrink-0" />
    },
    {
      question: "What are these Royal Houses thy subjects join?",
      answer: (
        <div>
          <p>Our realm is divided into three noble houses, each vying for collective dominance:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><span className="text-royal-crimson font-bold">House Red</span> - Fierce warriors of excess, known for their flamboyant displays of wealth</li>
            <li><span className="text-emerald-500 font-bold">House Green</span> - Cunning strategists who believe consistent spending surpasses impulsive splurging</li>
            <li><span className="text-royal-navy font-bold">House Blue</span> - Scholarly nobles who analyze every transaction with cold, calculated precision</li>
          </ul>
          <p className="mt-2">Choose thy allegiance wisely, for thy spending contributes to thy house's collective power. Or don't choose wisely - it matters not, as long as thou spend!</p>
          <p className="mt-2 italic text-royal-gold/80">"The houses compete, but the treasury always wins."</p>
        </div>
      ),
      icon: <Shield className="text-royal-gold mr-3 h-5 w-5 flex-shrink-0" />
    },
    {
      question: "What is this Court Mockery I hear whispers of?",
      answer: (
        <div>
          <p>Ah, Court Mockery! The fine art of publicly shaming thy fellow nobles! For a modest fee, thou may subject others to various medieval punishments:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Throw virtual tomatoes at those beneath thy station</li>
            <li>Place offenders in stocks for public ridicule</li>
            <li>Appoint the most egregious spenders as Court Jesters</li>
          </ul>
          <p className="mt-2">The beauty of our system: victims can purchase protection from such mockery, further filling our royal coffers!</p>
          <p className="mt-2 italic text-royal-gold/80">"Where even humiliation has a price tag, and dignity is but another commodity."</p>
        </div>
      ),
      icon: <Target className="text-royal-gold mr-3 h-5 w-5 flex-shrink-0" />
    },
    {
      question: "What rewards await the most generous nobles?",
      answer: (
        <div>
          <p>Those who part with excessive amounts of currency shall receive:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Fanciful digital badges to display on thy profile</li>
            <li>Customized profile features unavailable to the common rabble</li>
            <li>The privilege of being ranked higher on a list seen by other participants in this peculiar experiment</li>
            <li>Certificate of Nobility - a digital parchment proclaiming thy willingness to exchange real currency for imaginary status</li>
          </ul>
          <p className="mt-2">All of these rewards have the same real-world value as a jester's promissory note - absolutely none! But they do look rather magnificent...</p>
          <p className="mt-2 italic text-royal-gold/80">"In this kingdom, even the prizes mock the concept of value."</p>
        </div>
      ),
      icon: <Gem className="text-royal-gold mr-3 h-5 w-5 flex-shrink-0" />
    },
    {
      question: "Can I recover my royal investments?",
      answer: (
        <div>
          <p>Recover thy gold? HAHAHA! Oh, dear noble, thy jests are most amusing!</p>
          <p className="mt-2">All payments to our kingdom are as permanent as a royal execution. Once thy gold enters our treasury, it shall never return to thy purse. This is not an investment with returns but a satirical performance art piece about status-seeking behavior.</p>
          <p className="mt-2">Perhaps the real value is the lesson learned about the absurdity of purchasing status? Nay, probably not.</p>
          <p className="mt-2 italic text-royal-gold/80">"The royal treasury operates on the principle of 'what's mine is mine, and what's yours will soon be mine as well.'"</p>
        </div>
      ),
      icon: <Trophy className="text-royal-gold mr-3 h-5 w-5 flex-shrink-0" />
    },
    {
      question: "How secure is my noble information?",
      answer: (
        <div>
          <p>We guard thy data with the same vigilance as medieval castle guards who occasionally fall asleep at their posts after too much mead.</p>
          <p className="mt-2">In truth, we employ modern encryption and security practices, but even the sturdiest castle walls can be breached by determined dragons. No digital fortress is completely impenetrable, much like no noble's coin purse is safe from the kingdom's tax collectors.</p>
          <p className="mt-2">Rest assured that we store minimal information about thee - mostly just enough to track thy spending habits and mock thy financial decisions accordingly.</p>
          <p className="mt-2 italic text-royal-gold/80">"Our moats and drawbridges are formidable, but dragons of the digital realm are clever beasts indeed."</p>
        </div>
      ),
      icon: <Scroll className="text-royal-gold mr-3 h-5 w-5 flex-shrink-0" />
    },
    {
      question: "What payment methods does thy treasury accept?",
      answer: (
        <div>
          <p>Our royal treasury accepts tribute in various forms:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Common peasant currency (credit/debit cards)</li>
            <li>Magic internet money (cryptocurrency)</li>
            <li>Digital payment potions (PayPal, etc.)</li>
          </ul>
          <p className="mt-2">All transactions are processed through secure merchant channels, ensuring thy gold reaches our coffers without being intercepted by highway bandits.</p>
          <p className="mt-2">Remember, the more payment methods thou useth, the faster thy coffers shall empty and thy meaningless rank shall rise!</p>
          <p className="mt-2 italic text-royal-gold/80">"The royal mint accepts all currencies, for gold is gold, regardless of its form."</p>
        </div>
      ),
      icon: <Coins className="text-royal-gold mr-3 h-5 w-5 flex-shrink-0" />
    },
    {
      question: "Is this whole affair a jest?",
      answer: (
        <div>
          <p>Indeed, but a jest with a mirror! SpendThrone is satire that mocketh consumer culture, digital status symbols, and the concept of "paying for prestige." We exaggerate these concepts to absurdity, inviting reflection on how we assign value in the digital age.</p>
          <p className="mt-2">That said, the transactions are quite real. Thy gold pieces truly depart from thy possession in exchange for utterly worthless digital status. Much like purchasing designer pixels for thy social media portrait or spending on virtual goods that exist only as 1s and 0s.</p>
          <p className="mt-2">The joke, dear noble, is that many might not see it as a joke at all!</p>
          <p className="mt-2 italic text-royal-gold/80">"When satire becomes indistinguishable from reality, perhaps 'tis the reality that deserves the scrutiny."</p>
        </div>
      ),
      icon: <MessageSquare className="text-royal-gold mr-3 h-5 w-5 flex-shrink-0" />
    }
  ];

  return (
    <Accordion type="single" collapsible className="w-full">
      {faqItems.map((item, index) => (
        <AccordionItem key={index} value={`item-${index + 1}`} className="border-b border-white/10 py-2">
          <AccordionTrigger className="font-medieval hover:no-underline">
            <div className="flex items-center">
              {item.icon}
              <span>{item.question}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-2 text-white/70">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default RoyalFAQ;
