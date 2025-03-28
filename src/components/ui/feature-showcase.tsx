
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Crown, ExternalLink, Info } from 'lucide-react';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

export interface FeatureExample {
  title: string;
  description: string;
  image?: string;
  link?: {
    url: string;
    label: string;
  };
}

export interface FeatureInfo {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  price?: string | number;
  isFree?: boolean;
  category: string;
  examples?: FeatureExample[];
  benefits?: string[];
  details?: string;
  comingSoon?: boolean;
}

interface FeatureShowcaseProps {
  features: FeatureInfo[];
  defaultCategory?: string;
  showCategories?: boolean;
  maxColumns?: 1 | 2 | 3 | 4;
  className?: string;
}

const FeatureShowcase: React.FC<FeatureShowcaseProps> = ({
  features,
  defaultCategory,
  showCategories = true,
  maxColumns = 3,
  className
}) => {
  const [selectedFeature, setSelectedFeature] = useState<FeatureInfo | null>(null);
  
  // Get unique categories
  const categories = [...new Set(features.map(f => f.category))];
  const initialCategory = defaultCategory || categories[0];
  
  const columnClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };
  
  return (
    <div className={cn('w-full', className)}>
      {showCategories ? (
        <Tabs defaultValue={initialCategory} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mb-8">
            {categories.map(category => (
              <TabsTrigger 
                key={category} 
                value={category}
                className="data-[state=active]:bg-royal-gold/20 data-[state=active]:text-royal-gold"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {categories.map(category => (
            <TabsContent key={category} value={category} className="pt-4">
              <div className={cn('grid gap-6', columnClasses[maxColumns])}>
                {features
                  .filter(feature => feature.category === category)
                  .map(feature => (
                    <FeatureCard 
                      key={feature.id}
                      feature={feature}
                      onViewDetails={() => setSelectedFeature(feature)}
                    />
                  ))
                }
              </div>
            </TabsContent>
          ))}
        </Tabs>
      ) : (
        <div className={cn('grid gap-6', columnClasses[maxColumns])}>
          {features.map(feature => (
            <FeatureCard 
              key={feature.id}
              feature={feature}
              onViewDetails={() => setSelectedFeature(feature)}
            />
          ))}
        </div>
      )}
      
      {/* Feature Details Dialog */}
      {selectedFeature && (
        <Dialog>
          <DialogTrigger asChild>
            <span className="sr-only">Open Feature Details</span>
          </DialogTrigger>
          <DialogContent className="max-w-4xl h-[80vh] glass-morphism">
            <DialogHeader>
              <DialogTitle className="flex items-center text-xl">
                {selectedFeature.icon}
                <span className="ml-2">{selectedFeature.title}</span>
                {selectedFeature.comingSoon && (
                  <span className="ml-2 text-xs bg-royal-gold/20 text-royal-gold px-2 py-0.5 rounded">
                    Coming Soon
                  </span>
                )}
              </DialogTitle>
              <DialogDescription className="text-base">
                {selectedFeature.description}
              </DialogDescription>
            </DialogHeader>
            
            <ScrollArea className="flex-1 pr-4">
              <div className="space-y-6">
                {selectedFeature.details && (
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Details</h3>
                    <p className="text-white/70">{selectedFeature.details}</p>
                  </div>
                )}
                
                {selectedFeature.benefits && selectedFeature.benefits.length > 0 && (
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Benefits</h3>
                    <ul className="space-y-1">
                      {selectedFeature.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <Crown className="h-4 w-4 text-royal-gold mr-2 mt-1 flex-shrink-0" />
                          <span className="text-white/80">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {selectedFeature.examples && selectedFeature.examples.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Examples</h3>
                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                      {selectedFeature.examples.map((example, index) => (
                        <Card key={index} className="glass-morphism border-white/20">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-base">{example.title}</CardTitle>
                          </CardHeader>
                          {example.image && (
                            <div className="px-6 py-2">
                              <img 
                                src={example.image} 
                                alt={example.title} 
                                className="rounded-md w-full h-auto object-cover border border-white/10"
                              />
                            </div>
                          )}
                          <CardContent className="pt-2">
                            <p className="text-sm text-white/70">{example.description}</p>
                          </CardContent>
                          {example.link && (
                            <CardFooter>
                              <Button 
                                variant="ghost" 
                                size="sm"
                                className="text-royal-gold hover:bg-royal-gold/10"
                                asChild
                              >
                                <a href={example.link.url} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="h-4 w-4 mr-1" />
                                  {example.link.label}
                                </a>
                              </Button>
                            </CardFooter>
                          )}
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
            
            <div className="flex justify-between items-center pt-4 border-t border-white/10">
              <div>
                {selectedFeature.isFree ? (
                  <span className="text-xs bg-royal-purple/30 text-royal-purple-bright px-2 py-1 rounded">Free</span>
                ) : (
                  <span className="text-xs bg-royal-gold/20 text-royal-gold px-2 py-1 rounded">
                    {typeof selectedFeature.price === 'number' 
                      ? `$${selectedFeature.price}` 
                      : selectedFeature.price || 'Premium'
                    }
                  </span>
                )}
              </div>
              <Button onClick={() => setSelectedFeature(null)}>Close</Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

const FeatureCard: React.FC<{
  feature: FeatureInfo;
  onViewDetails: () => void;
}> = ({ feature, onViewDetails }) => {
  return (
    <Card className="glass-morphism border-white/10 hover:border-royal-gold/30 transition-all duration-300 h-full">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="w-10 h-10 rounded-full bg-royal-gold/10 flex items-center justify-center">
            {feature.icon}
          </div>
          {feature.comingSoon && (
            <span className="text-xs bg-royal-gold/20 text-royal-gold px-2 py-0.5 rounded">
              Coming Soon
            </span>
          )}
        </div>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{feature.title}</CardTitle>
          {feature.isFree ? (
            <span className="text-xs bg-royal-purple/30 text-royal-purple-bright px-2 py-0.5 rounded">Free</span>
          ) : (
            <span className="text-xs bg-royal-gold/20 text-royal-gold px-2 py-0.5 rounded">
              {typeof feature.price === 'number' 
                ? `$${feature.price}` 
                : feature.price || 'Premium'
              }
            </span>
          )}
        </div>
        <CardDescription>{feature.description}</CardDescription>
      </CardHeader>
      <CardContent className="text-sm text-white/70 flex-grow">
        {feature.benefits && feature.benefits.length > 0 && (
          <ul className="space-y-1 mb-4">
            {feature.benefits.slice(0, 3).map((benefit, index) => (
              <li key={index} className="flex items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-royal-gold mr-2 mt-1.5" />
                <span>{benefit}</span>
              </li>
            ))}
            {feature.benefits.length > 3 && (
              <li className="text-royal-gold/80 text-xs italic">+{feature.benefits.length - 3} more benefits</li>
            )}
          </ul>
        )}
      </CardContent>
      <CardFooter>
        <Button 
          size="sm" 
          variant="ghost" 
          className="w-full text-royal-gold hover:bg-royal-gold/10"
          onClick={onViewDetails}
        >
          <Info className="h-4 w-4 mr-2" />
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FeatureShowcase;
