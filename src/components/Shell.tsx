
import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

interface ShellProps {
  children: ReactNode;
  className?: string;
  fullHeight?: boolean;
  transparentHeader?: boolean;
  paddingTop?: boolean;
  noFooter?: boolean;
  hideFooter?: boolean;
  withAnimation?: boolean;
  pageTransition?: 'fade' | 'slide' | 'scale' | 'none';
  backgroundEffect?: 'gradient' | 'patterns' | 'none';
}

/**
 * Shell component for page layout with header and footer
 */
const Shell: React.FC<ShellProps> = ({
  children,
  className,
  fullHeight = false,
  transparentHeader = false,
  paddingTop = true,
  noFooter = false,
  hideFooter = false,
  withAnimation = true,
  pageTransition = 'fade',
  backgroundEffect = 'none'
}) => {
  // Animation variants based on the selected transition
  const contentVariants = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: { duration: 0.5 } },
      exit: { opacity: 0, transition: { duration: 0.3 } }
    },
    slide: {
      initial: { opacity: 0, x: -20 },
      animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
      exit: { opacity: 0, x: 20, transition: { duration: 0.3 } }
    },
    scale: {
      initial: { opacity: 0, scale: 0.98 },
      animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
      exit: { opacity: 0, scale: 1.02, transition: { duration: 0.3 } }
    },
    none: {
      initial: {},
      animate: {},
      exit: {}
    }
  };

  // Determine which variant to use
  const selectedVariant = contentVariants[pageTransition];

  return (
    <div
      className={cn(
        'flex flex-col min-h-screen bg-background relative',
        fullHeight ? 'h-screen' : '',
        className
      )}
    >
      {/* Background effects */}
      {backgroundEffect === 'gradient' && (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-royal-purple/5 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute top-1/3 -left-20 w-96 h-96 bg-royal-gold/5 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute -bottom-20 right-1/3 w-80 h-80 bg-royal-crimson/5 rounded-full blur-3xl opacity-20"></div>
        </div>
      )}
      
      {backgroundEffect === 'patterns' && (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_50%_300px,rgba(120,119,198,0.1),transparent)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(13,13,32,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(13,13,32,0.05)_1px,transparent_1px)]" style={{ backgroundSize: '50px 50px' }}></div>
        </div>
      )}

      <Header transparent={transparentHeader} />
      
      <motion.main 
        className={cn(
          'flex-1 relative z-10',
          paddingTop && 'pt-16'
        )}
        initial={withAnimation ? selectedVariant.initial : undefined}
        animate={withAnimation ? selectedVariant.animate : undefined}
        exit={withAnimation ? selectedVariant.exit : undefined}
      >
        {children}
      </motion.main>
      
      {!noFooter && !hideFooter && <Footer />}
    </div>
  );
};

export default Shell;
