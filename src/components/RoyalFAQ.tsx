
import React, { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Crown, MessageCircle, CreditCard, ShieldQuestion, Users, Scroll, Clock, Trophy, Zap, Gift, DollarSign, Star } from 'lucide-react';
import RoyalDivider from '@/components/ui/royal-divider';

const RoyalFAQ: React.FC = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const faqItems = [
    {
      id: 'faq-1',
      question: 'What exactly is SpendThrone?',
      answer: 'SpendThrone is a satirical social experiment exploring the relationship between wealth and status. It\'s a persistent leaderboard where your rank is determined solely by how much money you\'ve spent. $1 = 1 unit of rank. It never resets, making your investment in meaningless digital prestige eternal.',
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
      answer: 'Each week features different events to keep things interesting. For example, during the Poke Party event, you can pay $0.50 to drop another user down one rank for 24 hours. We also have randomized discounts on public shaming methods and special Fire Sales every third month with 30-70% off cosmetic items.',
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
    },
    {
      id: 'faq-7',
      question: 'What happens if I become the top spender?',
      answer: 'The #1 ranked spender receives special privileges including exclusive advertising space on the homepage, a special profile badge, and the ability to sign Certificates of Nobility. All these perks transfer immediately if someone outspends you.',
      icon: <Trophy className="h-5 w-5 text-royal-gold" />
    },
    {
      id: 'faq-8',
      question: 'What is the Certificate of Nobility?',
      answer: 'Each noble receives a personalized Certificate of Nobility displaying their rank, spending amount, and the date of issuance. This purely cosmetic document serves as proof of your questionable financial decisions and can be shared with friends or colleagues who might question your judgment.',
      icon: <Scroll className="h-5 w-5 text-royal-mahogany" />
    },
    {
      id: 'faq-9',
      question: 'What does the Pro account include?',
      answer: 'Pro accounts unlock enhanced customization features for your profile including extended text limits (1000 characters), up to 5 social media links with tracking, up to 5 images, animated RGB borders, custom gradients, video embeds, hover effects, and advanced analytics.',
      icon: <Gift className="h-5 w-5 text-royal-purple" />
    },
    {
      id: 'faq-10',
      question: 'Are there different account types?',
      answer: 'Yes! We have Free accounts (basic customization), Pro accounts ($25 for enhanced features), and the exclusive Founders Badge ($100) that includes all Pro features plus permanent recognition in our Hall of Founders and early access to new features.',
      icon: <DollarSign className="h-5 w-5 text-royal-navy" />
    },
    {
      id: 'faq-11',
      question: 'How can I use my profile as an advertisement?',
      answer: 'Your profile page is essentially your own personal billboard. You can add text, images, links, and media to promote whatever you want - your social media, products, services, or just your own inflated ego. The #1 ranked spender even gets their profile featured on the homepage.',
      icon: <Clock className="h-5 w-5 text-royal-purple" />
    },
    {
      id: 'faq-12',
      question: 'Is this all just a joke?',
      answer: 'Yes and no. SpendThrone is definitely satirical, but it\'s also a genuine social experiment exploring how people behave when status is explicitly purchasable. The platform itself is real, the transactions are real, and the community dynamics that emerge are fascinating to observe.',
      icon: <Star className="h-5 w-5 text-royal-gold" />
    }
  ];

  const handleItemClick = (value: string) => {
    setOpenItem(openItem === value ? null : value);
  };

  return (
    <div className="my-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="glass-morphism border-white/10 p-6 rounded-xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.slice(0, 6).map((item) => (
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
            {faqItems.slice(6).map((item) => (
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
