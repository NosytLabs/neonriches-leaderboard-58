
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown, ChevronUp, Search, Crown, DollarSign, Users, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Layout from '@/components/layout/Layout';

const FAQ: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const faqCategories = [
    {
      title: 'General',
      icon: <Crown className="h-5 w-5 text-royal-gold" />,
      questions: [
        {
          question: 'What is SpendThrone?',
          answer: 'SpendThrone is a satirical social experiment where your rank is directly proportional to how much money you spend. $1 equals 1 rank point. The site explores themes of status, wealth display, and digital hierarchies in a tongue-in-cheek manner.'
        },
        {
          question: 'Is this a joke?',
          answer: 'SpendThrone operates in the space between satire and reality. While the concept is deliberately over-the-top and self-aware about the absurdity of pay-to-win mechanics, the transactions and rankings are real. Think of it as performance art with your wallet.'
        },
        {
          question: 'How do I get started?',
          answer: 'Simply create an account, make your first deposit to establish your rank, and start exploring features like team membership, profile customization, and the various ways to interact with other users in the hierarchy.'
        },
        {
          question: 'Is my personal information safe?',
          answer: 'We take data security seriously. Your personal information is protected according to our Privacy Policy. Payment information is processed through secure third-party providers and is never stored on our servers.'
        }
      ]
    },
    {
      title: 'Rankings & Spending',
      icon: <DollarSign className="h-5 w-5 text-royal-gold" />,
      questions: [
        {
          question: 'How exactly do rankings work?',
          answer: 'Your rank is determined solely by the total amount of money you\'ve spent on SpendThrone. $1 = 1 rank point. The more you spend, the higher your rank. The leaderboard never resets, creating a persistent hierarchy.'
        },
        {
          question: 'What happens when I spend money?',
          answer: 'When you deposit money, your rank increases immediately by the exact amount spent. You\'ll also unlock various features, cosmetics, and abilities depending on your tier level, which is determined by your total spending.'
        },
        {
          question: 'Can I get a refund?',
          answer: 'All transactions on SpendThrone are final and non-refundable. Please spend responsibly and only use disposable income that you are comfortable parting with permanently.'
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept major credit/debit cards, PayPal, and several cryptocurrencies including Bitcoin, Ethereum, and Solana.'
        },
        {
          question: 'Is there a minimum spending amount?',
          answer: 'The minimum deposit is $1, which will give you 1 rank point. There is no maximum limit.'
        }
      ]
    },
    {
      title: 'Teams & Competition',
      icon: <Users className="h-5 w-5 text-royal-gold" />,
      questions: [
        {
          question: 'What are the RGB Teams?',
          answer: 'Users can join one of three teams: Red (neon fire), Green (lime zap), or Blue (cool pulse). Your spending contributes to your team\'s total score, creating a collective competition alongside individual rankings.'
        },
        {
          question: 'How do team competitions work?',
          answer: 'Teams compete based on their collective spending. Weekly, monthly, and annual trophies are awarded to the team with the highest total spending during that period. Team members may receive exclusive cosmetics when their team wins.'
        },
        {
          question: 'Can I switch teams?',
          answer: 'You can switch teams once every 30 days. There\'s a small fee for switching teams, which adds to your personal rank.'
        },
        {
          question: 'Are there team-specific benefits?',
          answer: 'Each team has access to exclusive team-colored cosmetics and a private team chat. Additionally, certain limited-time events may feature team-based bonuses or challenges.'
        }
      ]
    },
    {
      title: 'Features & Customization',
      icon: <Sparkles className="h-5 w-5 text-royal-gold" />,
      questions: [
        {
          question: 'What features are available on profiles?',
          answer: 'Profile features depend on your tier level. Free users ($1+) get basic profiles with limited text and one image. Pro users ($25+) get enhanced features including multiple images, animated borders, video embeds, custom gradients, and analytics.'
        },
        {
          question: 'What are cosmetics?',
          answer: 'Cosmetics are visual enhancements for your profile, including borders, effects, titles, badges, and more. Some are unlocked through spending thresholds, while others are available through the Royal Boutique or as limited-time offerings.'
        },
        {
          question: 'What is Royal Mockery?',
          answer: 'Royal Mockery allows users to spend money to apply temporary visual effects to other users\' profiles. These range from playful (like tomato splats) to elaborate (like forcing someone to wear a jester costume). The affected user can purchase immunity or protection.'
        },
        {
          question: 'What is the Wishing Well?',
          answer: 'The Wishing Well is a feature where you can spend coins for a chance to receive exclusive cosmetic items. The higher your wish amount, the better your chances of receiving rare items.'
        }
      ]
    }
  ];
  
  const filteredFAQs = searchTerm ? 
    faqCategories.map(category => ({
      ...category,
      questions: category.questions.filter(item => 
        item.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
        item.answer.toLowerCase().includes(searchTerm.toLowerCase())
      )
    })).filter(category => category.questions.length > 0) : 
    faqCategories;
  
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Button variant="ghost" size="sm" className="mb-6" asChild>
          <Link to="/"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Home</Link>
        </Button>
        
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              Find answers to common questions about SpendThrone, the satirical social platform where wealth equals worth.
            </p>
          </div>
          
          <div className="relative mb-8">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-white/40" />
            </div>
            <Input
              type="search"
              placeholder="Search FAQs..."
              className="pl-10 bg-white/5 border-white/10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-white/50 text-lg">No questions found matching "{searchTerm}"</p>
              <Button variant="link" onClick={() => setSearchTerm('')}>Clear search</Button>
            </div>
          ) : (
            filteredFAQs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="glass-morphism border-white/10 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h2 className="text-xl font-semibold ml-2">{category.title}</h2>
                </div>
                
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((item, itemIndex) => (
                    <AccordionItem 
                      key={itemIndex} 
                      value={`${categoryIndex}-${itemIndex}`}
                      className="border-b border-white/10 last:border-b-0"
                    >
                      <AccordionTrigger className="text-left hover:no-underline py-4">
                        <span className="text-white/90 font-medium">{item.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-white/70 pt-2 pb-4">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))
          )}
          
          <div className="text-center bg-royal-gold/10 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Still have questions?</h3>
            <p className="text-white/70 mb-4">
              Can't find what you're looking for? We're here to help.
            </p>
            <Button asChild>
              <Link to="/contact">Contact Support</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FAQ;
