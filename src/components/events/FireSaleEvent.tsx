import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Hourglass, DollarSign, Tag, Info } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { formatDistanceToNow } from 'date-fns';
import { Event } from '@/types/events';

// Add proper props interface
export interface FireSaleEventProps {
  eventId: string;
  startDate: string;
  endDate: string;
  discountPercentage?: number;
  title?: string;
  description?: string;
  categories?: string[];
}

const FireSaleEvent: React.FC<FireSaleEventProps> = ({
  eventId,
  startDate,
  endDate,
  discountPercentage = 50,
  title = "Royal Treasury Fire Sale",
  description = "Limited time offer! All cosmetics, profile boosts, and status enhancements are now available at a royal discount.",
  categories = ["Cosmetics", "Boosts", "Enhancements", "Titles", "Decorations"]
}) => {
  return (
    <Card className="glass-morphism border-royal-gold/20 shadow-royal overflow-hidden relative">
      <div className="absolute -top-4 -right-4 w-28 h-28 bg-royal-gold/80 rotate-12 z-0"></div>
      <div className="absolute -top-6 -right-6 transform rotate-45 bg-royal-gold text-black font-bold py-1 px-10 text-sm shadow-lg z-10">
        SALE
      </div>
      
      <CardHeader className="relative z-10">
        <div className="flex items-center space-x-2">
          <Tag className="h-5 w-5 text-royal-gold" />
          <CardTitle>{title}</CardTitle>
        </div>
      </CardHeader>
      
      <CardContent className="relative z-10">
        <div className="mb-4 space-y-2">
          <div className="flex items-center space-x-2">
            <Hourglass className="h-4 w-4 text-royal-gold/70" />
            <span className="text-sm text-white/70">
              {new Date(endDate) > new Date() 
                ? `Ends ${formatDistanceToNow(new Date(endDate), { addSuffix: true })}`
                : `Ended ${formatDistanceToNow(new Date(endDate), { addSuffix: true })}`
              }
            </span>
          </div>
          
          <div className="flex items-center space-x-2">
            <DollarSign className="h-4 w-4 text-royal-gold/70" />
            <span className="text-sm text-white/70">
              <span className="font-bold text-royal-gold">{discountPercentage}% OFF</span> on selected items
            </span>
          </div>
        </div>
        
        <p className="text-white/80 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {categories.map((category, index) => (
            <Badge key={index} variant="outline" className="border-royal-gold/30 bg-black/20">
              {category}
            </Badge>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <Button 
            variant="default" 
            className="bg-royal-gold hover:bg-royal-gold/90 text-black"
          >
            Shop Fire Sale
          </Button>
          
          <Button 
            variant="outline" 
            className="border-royal-gold/50 text-royal-gold hover:bg-royal-gold/10"
          >
            View Details
          </Button>
        </div>
        
        <div className="mt-4 p-3 bg-black/30 rounded-md border border-white/10 flex items-start space-x-2">
          <Info className="h-4 w-4 text-royal-gold/70 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-white/60">
            Fire Sales occur once per quarter. Items purchased during Fire Sales may still be subject to 
            platform terms and conditions. Some items may be excluded from the sale.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default FireSaleEvent;
