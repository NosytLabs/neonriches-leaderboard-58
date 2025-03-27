
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Shield, Trophy, Crown, DollarSign, Scroll, Users, Sparkles } from "lucide-react";
import RoyalDivider from '@/components/ui/royal-divider';

const RoyalFAQ = () => {
  const faqItems = [
    {
      question: "How is my rank determined?",
      answer: "Your rank is determined purely by how much money you've contributed to the platform. Each $1 spent equals 1 unit of rank. The leaderboard never resets, so your investment in digital prestige is eternal.",
      icon: <Trophy className="h-5 w-5 text-royal-gold" />,
    },
    {
      question: "What are Noble Houses and how do I join one?",
      answer: "Noble Houses (Red, Green, and Blue) are teams you can join to compete collectively. Your spending contributes to your house's total. Join a house through your dashboard, but choose wisely—switching houses requires a significant 'disloyalty tax'.",
      icon: <Shield className="h-5 w-5 text-royal-gold" />,
    },
    {
      question: "What benefits do top spenders receive?",
      answer: "Top spenders unlock exclusive profile customization options, including animated borders, premium layouts, and special badges. The #1 spender receives the Crown Badge, maximum visibility across the site, and double rewards from weekly events.",
      icon: <Crown className="h-5 w-5 text-royal-gold" />,
    },
    {
      question: "How do weekly events work?",
      answer: "Each week features different events where you can spend money to affect the leaderboard temporarily. During the Public Shaming Festival, you can pay to drop others down in rank. Team Wars let houses compete for weekly glory and rewards.",
      icon: <Sparkles className="h-5 w-5 text-royal-gold" />,
    },
    {
      question: "What are spending tiers and their benefits?",
      answer: "As you spend more, you progress through tiers from Crab ($0-$50) to Whale ($25,000+). Each tier unlocks new profile customization options, more visibility on the platform, and greater influence in weekly events.",
      icon: <DollarSign className="h-5 w-5 text-royal-gold" />,
    },
    {
      question: "Is there a prize pool or rewards system?",
      answer: "Yes! 15% of each week's spending goes into the prize pool, split between consistent spenders and the top whales. The distribution heavily favors those at the top of the hierarchy, with special bonuses for maintaining spending streaks.",
      icon: <Scroll className="h-5 w-5 text-royal-gold" />,
    },
    {
      question: "How do team challenges work?",
      answer: "Team challenges pit the three houses against each other in weekly competitions. The winning team receives bonuses to their members' visibility and temporary rank boosts. Team members must actively participate to receive these benefits.",
      icon: <Users className="h-5 w-5 text-royal-gold" />,
    },
  ];

  return (
    <div className="my-16 animate-parchment-unfurl">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold royal-gradient mb-3 font-medieval">Royal Court FAQ</h2>
        <p className="text-foreground/70 max-w-2xl mx-auto">
          Common inquiries from nobles about our digital hierarchy
        </p>
      </div>
      
      <RoyalDivider variant="line" className="mb-8" />
      
      <div className="glass-morphism border-royal-gold/20 rounded-lg p-6 max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-royal-gold/20 rounded-lg px-6 py-2 mb-4 bg-background/20 data-[state=open]:bg-background/40 transition-all duration-300"
            >
              <AccordionTrigger className="py-4 hover:no-underline group">
                <div className="flex items-center text-left">
                  <div className="mr-3">{item.icon}</div>
                  <span className="text-lg font-medieval group-hover:text-royal-gold transition-colors">
                    {item.question}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70 pt-2 pb-4 pl-10 leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mt-8 text-center p-4 border border-royal-gold/30 rounded-lg bg-royal-gold/5 royal-corner-ornament">
          <p className="text-sm text-white/70 font-medieval">
            "Remember, in our kingdom, your worth is measured not by talent or merit, but by the weight of your financial contributions."
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoyalFAQ;
