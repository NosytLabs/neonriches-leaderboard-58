
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import ThroneChair from '@/components/logos/ThroneChair';

const FAQ: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link to="/">
        <Button variant="outline" className="mb-6 glass-morphism border-white/10">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Button>
      </Link>
      
      <div className="text-center mb-10">
        <ThroneChair size={80} className="mx-auto mb-4" animate={true} />
        <h1 className="text-4xl font-bold font-royal mb-2">Frequently Asked Questions</h1>
        <p className="text-white/70 max-w-2xl mx-auto">
          Everything you need to know about SpendThrone, the ultimate pay-to-win social platform.
        </p>
      </div>
      
      <div className="glass-morphism border-white/10 p-6 rounded-lg">
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="border-white/10">
            <AccordionTrigger className="text-lg font-medium">What is SpendThrone?</AccordionTrigger>
            <AccordionContent className="text-white/80">
              SpendThrone is a satirical social platform where users can climb the ranks simply by spending money. It's a tongue-in-cheek commentary on digital status games and pay-to-win mechanics, presented as a unique social experiment.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2" className="border-white/10">
            <AccordionTrigger className="text-lg font-medium">How does the ranking system work?</AccordionTrigger>
            <AccordionContent className="text-white/80">
              The ranking system is refreshingly transparent: $1 spent equals 1 rank point. The more you spend, the higher your rank. The leaderboard never resets, so your position is permanent (unless someone outspends you).
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3" className="border-white/10">
            <AccordionTrigger className="text-lg font-medium">Is this a joke or a real service?</AccordionTrigger>
            <AccordionContent className="text-white/80">
              Both! SpendThrone is a satirical platform that parodies digital status mechanics, but the transactions are real, and the digital status you acquire is as real as any online status can be.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4" className="border-white/10">
            <AccordionTrigger className="text-lg font-medium">Can I get a refund?</AccordionTrigger>
            <AccordionContent className="text-white/80">
              All transactions on SpendThrone are final and non-refundable. This policy is clearly stated in our Terms of Service. When you spend money here, you're purchasing digital status and virtual items with no real-world value.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-5" className="border-white/10">
            <AccordionTrigger className="text-lg font-medium">What do I get for my money?</AccordionTrigger>
            <AccordionContent className="text-white/80">
              Your contributions provide several benefits: a higher rank on the perpetual leaderboard, access to profile customization options based on your tier, the ability to participate in team competitions, and various mockery powers to use on other users.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-6" className="border-white/10">
            <AccordionTrigger className="text-lg font-medium">What are the different user tiers?</AccordionTrigger>
            <AccordionContent className="text-white/80">
              SpendThrone has several tiers based on your total spending: Bronze (up to $50), Silver ($50-$200), Gold ($200-$500), Platinum ($500-$1000), and Royal ($1000+). Each tier unlocks additional features and customization options.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-7" className="border-white/10">
            <AccordionTrigger className="text-lg font-medium">How do teams work?</AccordionTrigger>
            <AccordionContent className="text-white/80">
              Users can join one of three teams: Red, Green, or Blue. Team rankings are based on the collective spending of all team members. Weekly team challenges provide additional opportunities for recognition and rewards.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-8" className="border-white/10">
            <AccordionTrigger className="text-lg font-medium">What payment methods do you accept?</AccordionTrigger>
            <AccordionContent className="text-white/80">
              We accept various payment methods including major credit cards, PayPal, and select cryptocurrencies (including Solana). All transactions are processed securely.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-9" className="border-white/10">
            <AccordionTrigger className="text-lg font-medium">What is the Royal Mockery system?</AccordionTrigger>
            <AccordionContent className="text-white/80">
              Royal Mockery allows users to spend money to apply temporary effects to other users' profiles. These can range from cosmetic changes to temporary restrictions. Users can also purchase immunity to protect themselves from mockery.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-10" className="border-white/10">
            <AccordionTrigger className="text-lg font-medium">How do I customize my profile?</AccordionTrigger>
            <AccordionContent className="text-white/80">
              Profile customization options are unlocked based on your spending tier. These include profile borders, background effects, special titles, and more. You can access these options from your profile settings page.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-11" className="border-white/10">
            <AccordionTrigger className="text-lg font-medium">Are there any special events?</AccordionTrigger>
            <AccordionContent className="text-white/80">
              Yes! SpendThrone regularly hosts special events like Fire Sales (discounted cosmetics), Public Shaming Festivals (reduced mockery costs), and seasonal competitions with unique rewards.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-12" className="border-white/10">
            <AccordionTrigger className="text-lg font-medium">What happens if I delete my account?</AccordionTrigger>
            <AccordionContent className="text-white/80">
              If you delete your account, your profile will be removed from public view, but your spending history and rank may still be reflected in historical data. No refunds are provided for account deletion.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-white/70 mb-4">Still have questions?</p>
        <Button asChild>
          <Link to="/contact">Contact Support</Link>
        </Button>
      </div>
    </div>
  );
};

export default FAQ;
