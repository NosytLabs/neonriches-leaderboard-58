
import React, { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Crown, MessageCircle, CreditCard, ShieldQuestion, Users, Scroll } from 'lucide-react';
import RoyalDivider from '@/components/ui/royal-divider';

const RoyalFAQ: React.FC = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const faqItems = [
    {
      id: 'faq-1',
      question: 'What exactly is P2W.FUN?',
      answer: 'P2W.FUN is a satirical social experiment exploring the relationship between wealth and status. It\'s a persistent leaderboard where your rank is determined solely by how much money you\'ve spent. $1 = 1 unit of rank. It never resets, making your investment in meaningless digital prestige eternal.',
      icon: <Crown className="h-5 w-5 text-royal-gold" />
    },
    {
      id: 'faq-2',
      question: 'Do I get anything real for my money?',
      answer: 'Absolutely not! That\'s the beauty of it. You receive digital status, customization options for your profile, and the satisfaction of seeing your name rise in our completely arbitrary hierarchy. It\'s a satire of pay-to-win mechanics and social status games.',
      icon: <ShieldQuestion className="h-5 w-5 text-royal-crimson" />
    },
    {
      id: 'faq-3',
      question: 'How do teams work?',
      answer: 'You can join one of three noble houses: the Crimson Court (Red), the Golden Order (Green), or the Royal Navy (Blue). Your spending contributes to your team\'s total, creating a collective competition alongside individual rankings. Teams participate in weekly challenges for additional benefits.',
      icon: <Users className="h-5 w-5 text-royal-navy" />
    },
    {
      id: 'faq-4',
      question: 'What are the weekly events?',
      answer: 'Each week features different events to keep things interesting. For example, during the Poke Party event, you can pay $0.50 to drop another user down one rank for 24 hours. These events add a temporary twist to the standard leaderboard mechanics.',
      icon: <Scroll className="h-5 w-5 text-royal-purple" />
    },
    {
      id: 'faq-5',
      question: 'How do I communicate with other nobles?',
      answer: 'The top 10 spenders gain access to an exclusive chat room where they can discuss strategy, form alliances, or simply brag about their wealth. All users can also leave comments on profile pages (subject to moderation).',
      icon: <MessageCircle className="h-5 w-5 text-royal-mahogany" />
    },
    {
      id: 'faq-6',
      question: 'What payment methods do you accept?',
      answer: 'We accept both fiat currency (via credit card, PayPal) and cryptocurrency (via Solana wallet integration). We value your financial contributions regardless of their form!',
      icon: <CreditCard className="h-5 w-5 text-royal-emerald" />
    }
  ];

  const handleItemClick = (value: string) => {
    setOpenItem(openItem === value ? null : value);
  };

  return (
    <div className="my-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold royal-gradient mb-2 font-medieval">Royal Inquiries</h2>
        <p className="text-foreground/70 max-w-2xl mx-auto">
          Common questions from the commoners about our noble enterprise
        </p>
      </div>
      
      <RoyalDivider variant="scroll" className="mb-8" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-morphism border-white/10 p-6 rounded-xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.slice(0, 3).map((item) => (
              <AccordionItem 
                key={item.id} 
                value={item.id} 
                className="glass-morphism border-white/10 rounded-lg overflow-hidden"
              >
                <AccordionTrigger 
                  onClick={() => handleItemClick(item.id)}
                  className="px-4 py-3 hover:bg-white/5 group"
                >
                  <div className="flex items-center text-left">
                    <span className="mr-3">{item.icon}</span>
                    <span className="font-medium royal-text">{item.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 py-3 bg-white/5 border-t border-white/10">
                  <div className="pl-10 text-white/70 font-medieval-text">
                    {item.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="glass-morphism border-white/10 p-6 rounded-xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.slice(3).map((item) => (
              <AccordionItem 
                key={item.id} 
                value={item.id} 
                className="glass-morphism border-white/10 rounded-lg overflow-hidden"
              >
                <AccordionTrigger 
                  onClick={() => handleItemClick(item.id)}
                  className="px-4 py-3 hover:bg-white/5 group"
                >
                  <div className="flex items-center text-left">
                    <span className="mr-3">{item.icon}</span>
                    <span className="font-medium royal-text">{item.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 py-3 bg-white/5 border-t border-white/10">
                  <div className="pl-10 text-white/70 font-medieval-text">
                    {item.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      
      <div className="text-center mt-8 glass-morphism border-white/10 p-6 rounded-lg max-w-2xl mx-auto">
        <ShieldQuestion size={24} className="text-royal-gold inline-block mb-2" />
        <p className="text-white/70 font-medieval-text">
          Have a question not answered here? Contact our Royal Advisors for immediate assistance.
        </p>
      </div>
    </div>
  );
};

export default RoyalFAQ;
