
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  title: string | ReactNode;
  subtitle?: string | ReactNode;
  actions?: ReactNode;
  background?: 'default' | 'gradient' | 'pattern' | 'dark' | 'custom';
  customBackground?: string;
  fullHeight?: boolean;
  centered?: boolean;
  className?: string;
  children?: ReactNode;
  imageUrl?: string;
  overlay?: boolean;
  animate?: boolean;
  wave?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  actions,
  background = 'default',
  customBackground,
  fullHeight = false,
  centered = true,
  className,
  children,
  imageUrl,
  overlay = true,
  animate = true,
  wave = false,
}) => {
  // Background classes based on the background prop
  const backgroundClasses = {
    default: 'bg-gradient-to-b from-bg-dark to-bg-dark-lighter',
    gradient: 'bg-gradient-to-br from-royal-purple-dark/50 via-bg-dark to-royal-navy-dark/50',
    pattern: 'bg-gradient-to-b from-bg-dark to-bg-dark-lighter bg-pattern',
    dark: 'bg-bg-dark',
    custom: customBackground || '',
  };
  
  const content = (
    <>
      {animate ? (
        <motion.div 
          className={cn(
            'max-w-3xl z-10 relative',
            centered && 'mx-auto text-center'
          )}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {typeof title === 'string' ? (
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-royal royal-gradient mb-4">
              {title}
            </h1>
          ) : (
            title
          )}
          
          {subtitle && (
            typeof subtitle === 'string' ? (
              <p className="text-xl md:text-2xl text-white/70 mb-8">
                {subtitle}
              </p>
            ) : (
              subtitle
            )
          )}
          
          {actions && (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              {actions}
            </div>
          )}
          
          {children}
        </motion.div>
      ) : (
        <div 
          className={cn(
            'max-w-3xl z-10 relative',
            centered && 'mx-auto text-center'
          )}
        >
          {typeof title === 'string' ? (
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-royal royal-gradient mb-4">
              {title}
            </h1>
          ) : (
            title
          )}
          
          {subtitle && (
            typeof subtitle === 'string' ? (
              <p className="text-xl md:text-2xl text-white/70 mb-8">
                {subtitle}
              </p>
            ) : (
              subtitle
            )
          )}
          
          {actions && (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              {actions}
            </div>
          )}
          
          {children}
        </div>
      )}
    </>
  );
  
  return (
    <section 
      className={cn(
        'relative px-4 py-16 flex items-center',
        fullHeight && 'min-h-[90vh]',
        backgroundClasses[background],
        className
      )}
    >
      {/* Background image if provided */}
      {imageUrl && (
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
          {overlay && (
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          )}
        </div>
      )}
      
      {/* Pattern overlay */}
      {background === 'pattern' && (
        <div className="absolute inset-0 z-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(13,13,32,0.1)_0.5px,transparent_0.5px),linear-gradient(90deg,rgba(13,13,32,0.1)_0.5px,transparent_0.5px)]" style={{ backgroundSize: '50px 50px' }} />
        </div>
      )}
      
      {/* Content container */}
      <div className={cn(
        'container mx-auto relative z-10',
        centered ? 'text-center' : ''
      )}>
        {content}
      </div>
      
      {/* Bottom wave */}
      {wave && (
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" className="w-full">
            <path d="M0 0L48 8C96 16 192 32 288 40C384 48 480 48 576 48C672 48 768 48 864 40C960 32 1056 16 1152 16C1248 16 1344 32 1392 40L1440 48V80H1392C1344 80 1248 80 1152 80C1056 80 960 80 864 80C768 80 672 80 576 80C480 80 384 80 288 80C192 80 96 80 48 80H0V0Z" fill="#0D0D20" />
          </svg>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
