
import React from 'react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';
import { FAQItem } from '@/data/faqItems';

interface ModernFAQProps {
  title?: string;
  description?: string;
  items: FAQItem[];
  variant?: 'default' | 'profile' | 'team' | 'mockery' | 'payment' | 'marketing';
  disclaimer?: string;
  className?: string;
}

const ModernFAQ: React.FC<ModernFAQProps> = ({
  title = "Frequently Asked Questions",
  description = "Things people wonder about when considering spending money on digital status",
  items,
  variant = 'default',
  disclaimer,
  className
}) => {
  // Filter FAQ items by category if needed
  const filteredItems = variant !== 'default' 
    ? items.filter(item => item.category === variant)
    : items;
  
  // Use all items if filtering resulted in empty array
  const displayItems = filteredItems.length > 0 ? filteredItems : items;
  
  return (
    <Card className={`glass-morphism border-white/10 ${className}`}>
      <CardHeader className="border-b border-white/10">
        <CardTitle className="flex items-center text-xl md:text-2xl">
          {title}
        </CardTitle>
        {description && (
          <CardDescription className="text-white/70">
            {description}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="pt-6">
        <Accordion type="single" collapsible className="w-full">
          {displayItems.map((item, index) => (
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
        
        {disclaimer && (
          <div className="mt-6 pt-4 border-t border-white/10 text-white/50 text-sm italic">
            <div className="flex items-start">
              <AlertTriangle className="h-4 w-4 text-royal-gold mr-2 mt-0.5 flex-shrink-0" />
              <p>{disclaimer}</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ModernFAQ;
