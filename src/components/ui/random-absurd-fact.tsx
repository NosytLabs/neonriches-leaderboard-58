
import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { X, AlertTriangle, Brain, BookOpen, Lightbulb, DollarSign, Crown } from 'lucide-react';
import { getRandomAbsurdFact, getRandomStatusQuote } from '@/utils/absurdityGenerator';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface RandomAbsurdFactProps {
  variant?: 'banner' | 'card' | 'toast' | 'quote';
  className?: string;
  refreshInterval?: number;
  onClose?: () => void;
}

const RandomAbsurdFact: React.FC<RandomAbsurdFactProps> = ({
  variant = 'card',
  className,
  refreshInterval,
  onClose
}) => {
  const [fact, setFact] = useState<string>(getRandomAbsurdFact());
  const [quote, setQuote] = useState<{quote: string, author: string}>(getRandomStatusQuote());
  const [isVisible, setIsVisible] = useState<boolean>(true);
  
  const refreshContent = useCallback(() => {
    if (variant === 'quote') {
      setQuote(getRandomStatusQuote());
    } else {
      setFact(getRandomAbsurdFact());
    }
  }, [variant]);

  useEffect(() => {
    if (refreshInterval) {
      const interval = setInterval(() => {
        refreshContent();
      }, refreshInterval);
      
      return () => clearInterval(interval);
    }
  }, [refreshInterval, refreshContent]);
  
  const getFactIcon = () => {
    const icons = [
      <AlertTriangle key="alert" className="h-5 w-5 text-yellow-500" />,
      <Brain key="brain" className="h-5 w-5 text-purple-500" />,
      <BookOpen key="book" className="h-5 w-5 text-blue-500" />,
      <Lightbulb key="lightbulb" className="h-5 w-5 text-amber-500" />,
      <DollarSign key="dollar" className="h-5 w-5 text-green-500" />,
      <Crown key="crown" className="h-5 w-5 text-royal-gold" />
    ];
    
    return icons[Math.floor(Math.random() * icons.length)];
  };

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) {
      setTimeout(() => {
        onClose();
      }, 300);
    }
  };

  const handleRefresh = () => {
    refreshContent();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className={className}
        >
          {variant === 'banner' && (
            <Card className="bg-black/30 border-royal-gold/20 overflow-hidden">
              <CardContent className="p-4 relative">
                <div className="flex">
                  <div className="flex-shrink-0 mr-3 mt-1">
                    {getFactIcon()}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-royal-gold mb-1">Status Absurdity</h4>
                    <p className="text-white/80 text-sm">{fact}</p>
                  </div>
                </div>
                
                <div className="absolute top-2 right-2 flex space-x-1">
                  <button 
                    onClick={handleRefresh}
                    className="text-white/40 hover:text-white/80 transition-colors"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </button>
                  
                  {onClose && (
                    <button 
                      onClick={handleClose}
                      className="text-white/40 hover:text-white/80 transition-colors"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </CardContent>
            </Card>
          )}
          
          {variant === 'card' && (
            <Card className={cn("overflow-hidden", className)}>
              <CardContent className="p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3 mt-1">
                    {getFactIcon()}
                  </div>
                  <p className="text-white/80">{fact}</p>
                </div>
              </CardContent>
            </Card>
          )}
          
          {variant === 'toast' && (
            <div className="bg-black/70 backdrop-blur-sm border border-royal-gold/20 rounded-lg p-3 shadow-lg">
              <div className="flex">
                <div className="flex-shrink-0 mr-3">
                  {getFactIcon()}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-royal-gold">Did You Know?</h4>
                  <p className="text-white/80 text-sm">{fact}</p>
                </div>
              </div>
            </div>
          )}
          
          {variant === 'quote' && (
            <Card className={cn("overflow-hidden", className)}>
              <CardContent className="p-4">
                <div className="flex flex-col">
                  <blockquote className="text-white/90 italic mb-2">"{quote.quote}"</blockquote>
                  <cite className="text-royal-gold/80 text-sm text-right">— {quote.author}</cite>
                </div>
              </CardContent>
            </Card>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RandomAbsurdFact;
