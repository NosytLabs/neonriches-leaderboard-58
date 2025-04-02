
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/Badge';
import { Search } from 'lucide-react';
import { faqItems, FAQItem } from '@/data/faqItems';

interface FaqComponentProps {
  title?: string;
  initialCategory?: string;
  showSearch?: boolean;
  className?: string;
}

const FaqComponent: React.FC<FaqComponentProps> = ({ 
  title = "Frequently Asked Questions", 
  initialCategory = "all",
  showSearch = true,
  className = ""
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  
  // Get unique categories
  const categories = ['all', ...new Set(faqItems.map(item => item.category || 'other'))];
  
  // Filter items by category and search query
  const filteredItems = faqItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (typeof item.answer === 'string' && item.answer.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });
  
  // Format category name for display
  const formatCategoryName = (category: string) => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };
  
  return (
    <Card className={`${className}`}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        
        {showSearch && (
          <div className="relative mt-2">
            <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
            <Input
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8"
            />
          </div>
        )}
      </CardHeader>
      
      <CardContent>
        <Tabs defaultValue={activeCategory} value={activeCategory} onValueChange={setActiveCategory}>
          <TabsList className="mb-4 flex w-full overflow-x-auto scrollbar-none">
            {categories.map(category => (
              <TabsTrigger key={category} value={category} className="flex-shrink-0">
                {formatCategoryName(category)}
                {category !== 'all' && (
                  <Badge variant="outline" className="ml-1.5 px-1.5 py-0 text-xs">
                    {faqItems.filter(item => item.category === category).length}
                  </Badge>
                )}
              </TabsTrigger>
            ))}
          </TabsList>
          
          <TabsContent value={activeCategory} forceMount>
            <Accordion type="single" collapsible className="w-full">
              {filteredItems.length > 0 ? (
                filteredItems.map((item) => (
                  <AccordionItem key={item.id} value={item.id} className="border-white/10">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <div className="flex items-start">
                        {item.icon && (
                          <div className="mr-2 mt-0.5 text-royal-gold">{item.icon}</div>
                        )}
                        <span>{item.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-white/70 pl-7">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))
              ) : (
                <div className="text-center py-6 text-white/40">
                  No questions found matching "{searchQuery}"
                </div>
              )}
            </Accordion>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default FaqComponent;
