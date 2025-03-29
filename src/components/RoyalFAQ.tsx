
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
      question: "What is this peculiar realm of SpendThrone?",
      answer: (
        <div>
          <p>SpendThrone is a satirical social experiment that elevates the concept of "pay-to-win" to its most absurd extreme. Here, your status in our digital kingdom is determined solely by how much real currency you've parted with. $1 = 1 unit of rank. No skills required, only the willingness to part with your money!</p>
          <p className="mt-2 italic text-royal-gold/80">"Where the jokes are free but the status costs real money."</p>
        </div>
      ),
      icon: <Crown className="text-royal-gold mr-3 h-5 w-5 flex-shrink-0" />
    },
    {
      question: "How does one ascend the ranks?",
      answer: (
        <div>
          <p>The path to digital nobility is paved with expenditure! Simply part with your real-world currency and watch as your digital rank increases accordingly. Each dollar spent raises your station by one unit. The more you spend, the higher your position in our completely meaningless hierarchy.</p>
          <p className="mt-2">Your rank can never decrease unless others outspend you. How delightfully anxiety-inducing!</p>
          <p className="mt-2 italic text-royal-gold/80">"The simplest status system ever devised - your worth equals your expenditure."</p>
        </div>
      ),
      icon: <DollarSign className="text-royal-gold mr-3 h-5 w-5 flex-shrink-0" />
    },
    {
      question: "What are these Teams users join?",
      answer: (
        <div>
          <p>Our platform is divided into three competing teams, each vying for collective dominance:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><span className="text-royal-crimson font-bold">Team Red</span> - Aggressive spenders, known for their flamboyant displays of wealth</li>
            <li><span className="text-emerald-500 font-bold">Team Green</span> - Strategic investors who believe consistent spending surpasses impulsive splurging</li>
            <li><span className="text-royal-navy font-bold">Team Blue</span> - Analytical contributors who calculate every transaction with cold precision</li>
          </ul>
          <p className="mt-2">Choose your team wisely, as your spending contributes to your team's collective power. Or don't choose wisely - it matters not, as long as you spend!</p>
          <p className="mt-2 italic text-royal-gold/80">"The teams compete, but the payment processor always wins."</p>
        </div>
      ),
      icon: <Shield className="text-royal-gold mr-3 h-5 w-5 flex-shrink-0" />
    },
    {
      question: "What is this Mockery feature I hear about?",
      answer: (
        <div>
          <p>Ah, Mockery! The fine art of digitally shaming your fellow users! For a modest fee, you may subject others to various cosmetic effects:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Throw virtual tomatoes at profiles you dislike</li>
            <li>Place users in digital stocks for public ridicule</li>
            <li>Appoint high spenders as Jesters for comic effect</li>
          </ul>
          <p className="mt-2">The beautiful irony: victims can purchase protection from such mockery, further driving platform revenue. It's like social media blocking features, but monetized!</p>
          <p className="mt-2 italic text-royal-gold/80">"Where even humiliation has a price tag, and dignity is just another premium feature."</p>
        </div>
      ),
      icon: <Target className="text-royal-gold mr-3 h-5 w-5 flex-shrink-0" />
    },
    {
      question: "What rewards await the highest spenders?",
      answer: (
        <div>
          <p>Those who part with excessive amounts of money shall receive:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Digital badges to display on your profile – like social media verification but explicitly purchased</li>
            <li>Customized profile features unavailable to lower-ranked users</li>
            <li>The privilege of being ranked higher on a list seen by other participants</li>
            <li>Certificate of Status – a digital document proclaiming your willingness to exchange real currency for virtual prestige</li>
          </ul>
          <p className="mt-2">All of these rewards have the same real-world value as an NFT of a virtual rock - absolutely none! But they look rather impressive in certain digital circles.</p>
          <p className="mt-2 italic text-royal-gold/80">"On this platform, even the rewards are satire of value systems."</p>
        </div>
      ),
      icon: <Gem className="text-royal-gold mr-3 h-5 w-5 flex-shrink-0" />
    },
    {
      question: "Can I recover my investments?",
      answer: (
        <div>
          <p>Recover your money? That's hilarious!</p>
          <p className="mt-2">All payments to our platform are as permanent as a tattoo. Once your money enters our system, it shall never return to your account. This is not an investment with returns but a satirical commentary on status-seeking behavior.</p>
          <p className="mt-2">Perhaps the real value is the lesson learned about the absurdity of purchasing status? Probably not.</p>
          <p className="mt-2 italic text-royal-gold/80">"Our payment system operates on the principle that money flows in one direction only."</p>
        </div>
      ),
      icon: <Trophy className="text-royal-gold mr-3 h-5 w-5 flex-shrink-0" />
    },
    {
      question: "How secure is my information?",
      answer: (
        <div>
          <p>We guard your data with industry-standard encryption and security protocols. Our digital moat is filled with encryption algorithms, and our firewall drawbridge is fortified against common attacks.</p>
          <p className="mt-2">In truth, we employ modern security practices, but even the sturdiest digital fortress can be breached by determined hackers. No system is completely impenetrable, much like no status symbol is permanently exclusive.</p>
          <p className="mt-2">Rest assured that we store minimal information about you - mostly just enough to track your spending habits and display your rank accordingly.</p>
          <p className="mt-2 italic text-royal-gold/80">"Our digital battlements are formidable, but cyber attackers are resourceful adversaries."</p>
        </div>
      ),
      icon: <Scroll className="text-royal-gold mr-3 h-5 w-5 flex-shrink-0" />
    },
    {
      question: "What payment methods do you accept?",
      answer: (
        <div>
          <p>Our treasury accepts payment in various forms:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Standard currency (credit/debit cards)</li>
            <li>Cryptocurrency options</li>
            <li>Digital payment services (PayPal, etc.)</li>
          </ul>
          <p className="mt-2">All transactions are processed through secure merchant channels, ensuring your payment information is protected by our financial moat and encryption drawbridge.</p>
          <p className="mt-2">Remember, the more payment methods you use, the faster your account will empty and your meaningless rank shall rise!</p>
          <p className="mt-2 italic text-royal-gold/80">"We accept all currencies, for money is money, regardless of its form."</p>
        </div>
      ),
      icon: <Coins className="text-royal-gold mr-3 h-5 w-5 flex-shrink-0" />
    },
    {
      question: "Is this whole platform satirical?",
      answer: (
        <div>
          <p>Indeed, but satire with a purpose! SpendThrone is a mirror reflecting consumer culture, digital status symbols, and the concept of "paying for prestige." We exaggerate these concepts to absurdity, inviting reflection on how we assign value in the digital age.</p>
          <p className="mt-2">That said, the transactions are quite real. Your money truly leaves your possession in exchange for utterly worthless digital status. Much like purchasing designer NFTs or spending on virtual goods that exist only as data.</p>
          <p className="mt-2">The joke is that many might not see it as a joke at all!</p>
          <p className="mt-2 italic text-royal-gold/80">"When satire becomes indistinguishable from reality, perhaps it's reality that deserves scrutiny."</p>
        </div>
      ),
      icon: <MessageSquare className="text-royal-gold mr-3 h-5 w-5 flex-shrink-0" />
    }
  ];

  return (
    <Accordion type="single" collapsible className="w-full">
      {faqItems.map((item, index) => (
        <AccordionItem key={index} value={`item-${index + 1}`} className="border-b border-white/10 py-2">
          <AccordionTrigger className="hover:no-underline">
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
