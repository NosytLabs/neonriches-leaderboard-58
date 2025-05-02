
// React is already injected by Vite's jsxInject configuration
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { Crown, DollarSign, Shield, Target, Trophy, Gem, Scroll, Coins, MessageSquare } from '@/components/ui/icons';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
  icon?: React.ReactNode;
}

const RoyalFAQ: React.FC = () => {
  const faqItems: FAQItem[] = [
    {
      question: "What is SpendThrone?",
      answer: (
        <div className="space-y-2">
          <p>
            SpendThrone is a satirical social platform that parodies the modern obsession with status and spending. 
            We've created a medieval-themed space where your social standing is directly proportional to how much you spend.
          </p>
          <p>
            Think of it as a tongue-in-cheek commentary on social media and conspicuous consumption, wrapped in royal flair.
          </p>
        </div>
      ),
      icon: <Crown className="h-5 w-5 text-royal-gold" />
    },
    {
      question: "How does the ranking system work?",
      answer: 
        "Our ranking system is refreshingly transparent: $1 spent = 1 unit of rank. The more you spend, the higher your position in the royal court. No algorithms, no tricks—just pure, unadulterated spending power determining your status.",
      icon: <Trophy className="h-5 w-5 text-royal-gold" />
    },
    {
      question: "Is this actually spending real money?",
      answer: (
        <div className="space-y-2">
          <p>
            Yes, SpendThrone uses actual financial transactions. We believe this is what makes our satire effective—we're 
            holding up a mirror to society's willingness to spend for status by creating a platform where that relationship is explicit rather than implicit.
          </p>
          <p>
            However, we strongly encourage responsible spending and setting personal limits. The point is satire, not financial hardship.
          </p>
        </div>
      ),
      icon: <DollarSign className="h-5 w-5 text-royal-gold" />
    },
    {
      question: "What are Royal Houses?",
      answer: 
        "Royal Houses are our team system. You can join House Crimson (Fire), House Emerald (Forest), or House Sapphire (Water). Houses compete for glory through collective spending, with the winning house earning special privileges each month.",
      icon: <Shield className="h-5 w-5 text-royal-gold" />
    },
    {
      question: "How does the Royal Mockery feature work?",
      answer: 
        "Royal Mockery is our playful take on medieval public mockery. Users can purchase satirical visual effects to temporarily apply to other profiles. It's all in good fun, and mockery effects are clearly labeled as purchased additions.",
      icon: <Target className="h-5 w-5 text-royal-gold" />
    },
    {
      question: "Are there any benefits to higher rankings?",
      answer: (
        <div className="space-y-2">
          <p>
            Higher-ranked nobles gain access to exclusive features:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Premium profile customization options</li>
            <li>Increased visibility across the platform</li>
            <li>Access to the Royal Council to influence platform decisions</li>
            <li>Special badges and visual effects</li>
            <li>Higher mockery power and defense</li>
          </ul>
        </div>
      ),
      icon: <Gem className="h-5 w-5 text-royal-gold" />
    },
    {
      question: "What's the point of all this?",
      answer: (
        <div className="space-y-2">
          <p>
            SpendThrone serves as both entertainment and social commentary. By creating a platform where status is explicitly tied to spending, 
            we hope to provoke thought about how social media and society already function this way, just less transparently.
          </p>
          <p>
            We also donate a portion of all proceeds to charities focused on financial literacy and combating wealth inequality.
          </p>
        </div>
      ),
      icon: <Scroll className="h-5 w-5 text-royal-gold" />
    },
    {
      question: "Can I get a refund?",
      answer: 
        "In keeping with our medieval theme, all transactions are final. Just as a medieval peasant couldn't ask for their taxes back from the king, your contributions to the royal treasury are non-refundable. We encourage setting spending limits before participating.",
      icon: <Coins className="h-5 w-5 text-royal-gold" />
    },
    {
      question: "How do I contact support?",
      answer: 
        "Should you need assistance from the royal court, send a message to our royal messengers at support@spendthrone.com or use the messenger pigeon feature (support chat) available in the bottom right corner of every page.",
      icon: <MessageSquare className="h-5 w-5 text-royal-gold" />
    }
  ];

  return (
    <div className="bg-black/20 rounded-lg border border-white/10 p-6">
      <h2 className="text-2xl font-bold mb-6 royal-gradient">Frequently Asked Questions</h2>
      
      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-white/10">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center">
                {item.icon && <div className="mr-2">{item.icon}</div>}
                <span className="text-left">{item.question}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-white/70">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default RoyalFAQ;
