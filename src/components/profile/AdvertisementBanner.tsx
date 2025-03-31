
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, ArrowUpRight, X } from 'lucide-react';
import { formatTimeLeft } from '@/utils/dateUtils';
import { ProfileBoost } from '@/types/user';

interface AdvertisementBannerProps {
  title: string;
  description: string;
  imageUrl?: string;
  cta?: string;
  onDismiss?: () => void;
  onClickCta?: () => void;
  expiresAt?: string;
  boost?: ProfileBoost;
}

const AdvertisementBanner: React.FC<AdvertisementBannerProps> = ({
  title,
  description,
  imageUrl,
  cta = "Learn More",
  onDismiss,
  onClickCta,
  expiresAt,
  boost
}) => {
  const timeLeft = expiresAt ? formatTimeLeft(new Date(expiresAt)) : '';
  
  return (
    <Card className="glass-morphism border-royal-gold/20 overflow-hidden relative">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-royal-gold/10 to-purple-500/5 pointer-events-none"></div>
      
      {/* Optional promotional image */}
      {imageUrl && (
        <div className="relative h-32 overflow-hidden">
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
        </div>
      )}
      
      <CardContent className={`p-4 ${imageUrl ? '-mt-8 relative z-10 rounded-t-xl bg-black/40 backdrop-blur-sm' : ''}`}>
        {/* Close button */}
        {onDismiss && (
          <button 
            onClick={onDismiss}
            className="absolute top-2 right-2 p-1 rounded-full hover:bg-white/10 text-white/60 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        )}
        
        <h3 className="text-lg font-bold text-royal-gold">{title}</h3>
        <p className="text-sm text-white/80 mt-1">{description}</p>
        
        {(boost || expiresAt) && (
          <div className="flex items-center mt-3 mb-3 text-xs text-white/50">
            <Clock className="h-3.5 w-3.5 mr-1.5" />
            <span>
              {boost 
                ? `Boost Level ${boost.level} - ${formatTimeLeft(new Date(boost.endDate))}`
                : timeLeft
                  ? `Expires in ${timeLeft}`
                  : 'Limited time offer'
              }
            </span>
          </div>
        )}
        
        <Button 
          onClick={onClickCta} 
          className="w-full mt-2 bg-gradient-to-r from-royal-gold/90 to-royal-gold hover:opacity-90 text-black"
        >
          {cta} <ArrowUpRight className="h-4 w-4 ml-1" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default AdvertisementBanner;
