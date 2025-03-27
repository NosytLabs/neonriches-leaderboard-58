
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Scroll } from 'lucide-react';

const faqItems = [
  {
    question: "How does the Royal Hierarchy work?",
    answer: "The Royal Hierarchy is a permanent leaderboard where your position is determined solely by your financial contributions to the crown. For every $1 contributed, you gain 1 rank point. The more you contribute, the higher your position in the Royal Court."
  },
  {
    question: "What benefits do I get from a higher rank?",
    answer: "Higher ranks come with numerous privileges: customizable profile pages with enhanced features, access to exclusive events, special titles and badges, increased visibility in the Royal Court, and eligibility for the weekly prize pool distributions. The higher your rank, the more influence and perks you enjoy."
  },
  {
    question: "What are the Royal Houses?",
    answer: "The Royal Houses are three competing dynasties: the Purple Dynasty (wisdom and magic), the Gold Dominion (wealth and prosperity), and the Azure Order (honor and diplomacy). When you join a house, your contributions also benefit your dynasty's standing, and you can participate in house-exclusive events and competitions."
  },
  {
    question: "Do rankings ever reset?",
    answer: "No. The Royal Court maintains a permanent record of all contributions. Your rank is eternal, though your relative position may change as other nobles ascend or descend. This ensures that your investment in status remains valuable over time."
  },
  {
    question: "How do the weekly events work?",
    answer: "Each week features special events like Poke Party, Rank Multiplier, or Team Takeover that provide alternative ways to influence the rankings. These events may allow you to temporarily affect others' positions, gain bonus rank points, or earn special rewards through strategic participation rather than direct spending."
  },
  {
    question: "What is the Prize Pool and how is it distributed?",
    answer: "The Affluent Assembly Prize Pool receives 15% of all weekly contributions. Half is distributed through the Sustenance Fund (based on spending consistency and loyalty), and half through the Whale Endowment (rewarding top spenders). Distribution occurs weekly, with bonuses for spending streaks and lifetime contribution milestones."
  },
  {
    question: "Can I customize my profile?",
    answer: "Yes. All patrons can create basic profiles with limited text and a single image. Nobles who have contributed $25 or more unlock the Pro Tier with enhanced features including more images, links, custom RGB gradients and borders, video embeds, and detailed visitor statistics."
  }
];

const RoyalFAQ = () => {
  return (
    <section className="w-full py-20 px-6 relative overflow-hidden throne-bg">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="relative">
              <Scroll size={40} className="text-royal-gold mx-auto" />
              <div className="absolute -inset-4 bg-royal-gold/20 blur-xl rounded-full"></div>
            </div>
          </div>
          <h2 className="text-4xl font-medieval royal-gradient mb-4">Royal Proclamations</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto font-serif">
            Common inquiries from aspiring nobles about the court's customs and protocols.
          </p>
        </div>
        
        <div className="royal-card rounded-xl p-6 md:p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-foreground/10 last:border-b-0">
                <AccordionTrigger className="text-lg font-medieval py-6 text-foreground hover:text-royal-gold transition-colors group flex">
                  <span>{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 font-serif">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default RoyalFAQ;
