
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Scroll, Shield, Crown, Lock, DollarSign, User, Image, Link, MessageSquare } from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: React.ReactNode;
  icon?: React.ReactNode;
}

interface RoyalFAQProps {
  title?: string;
  description?: string;
  items: FAQItem[];
  variant?: 'default' | 'profile' | 'team' | 'mockery' | 'payment';
}

const RoyalFAQ: React.FC<RoyalFAQProps> = ({ 
  title = "Frequently Asked Questions", 
  description = "Common inquiries from confused users", 
  items,
  variant = 'default'
}) => {
  const getVariantIcon = () => {
    switch (variant) {
      case 'profile':
        return <User className="h-5 w-5 text-royal-gold mr-2" />;
      case 'team':
        return <Shield className="h-5 w-5 text-royal-gold mr-2" />;
      case 'mockery':
        return <Crown className="h-5 w-5 text-royal-gold mr-2" />;
      case 'payment':
        return <DollarSign className="h-5 w-5 text-royal-gold mr-2" />;
      default:
        return <Scroll className="h-5 w-5 text-royal-gold mr-2" />;
    }
  };
  
  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader className="border-b border-white/10">
        <CardTitle className="flex items-center">
          {getVariantIcon()}
          {title}
        </CardTitle>
        <CardDescription>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <Accordion type="single" collapsible className="w-full">
          {items.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-white/10">
              <AccordionTrigger className="text-left hover:no-underline py-4">
                <div className="flex items-center">
                  {item.icon && <span className="mr-2">{item.icon}</span>}
                  <span>{item.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-white/80 pl-6">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default RoyalFAQ;
