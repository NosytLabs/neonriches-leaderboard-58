
import React from 'react';
import { Helmet } from 'react-helmet-async';
import SpendThroneLogo from './SpendThroneLogo';
import BrandIcon from '@/components/ui/brand-icon';

export interface BrandAssetsProps {
  type?: 'complete' | 'minimal' | 'favicon' | 'og';
}

/**
 * A component to handle all brand assets in one place
 * This ensures consistent branding across the application
 */
const SpendThroneBrandAssets: React.FC<BrandAssetsProps> = ({ 
  type = 'complete' 
}) => {
  const baseUrl = window.location.origin;
  const siteTitle = 'SpendThrone - Where Your Wallet Determines Your Worth';
  const siteDescription = 'A satirical pay-to-win social experiment where your rank is determined by how much you spend. Mock others. Rise above. Reign supreme.';
  
  // All metadata should be in the Helmet component
  if (type === 'complete') {
    return (
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        
        {/* Favicon links */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#D4AF37" />
        
        {/* Theme Colors */}
        <meta name="msapplication-TileColor" content="#0D0D20" />
        <meta name="theme-color" content="#0D0D20" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={baseUrl} />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:image" content={`${baseUrl}/og-image.jpg`} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={baseUrl} />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={siteDescription} />
        <meta name="twitter:image" content={`${baseUrl}/og-image.jpg`} />
        
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Crimson+Text:ital,wght@0,400;0,600;1,400&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      </Helmet>
    );
  }
  
  // Just return selected visual elements based on type
  return (
    <div className="flex items-center justify-center">
      {type === 'minimal' && (
        <SpendThroneLogo variant="compact" size="sm" />
      )}
      
      {type === 'favicon' && (
        <BrandIcon size="md" variant="fancy" animated />
      )}
      
      {type === 'og' && (
        <div className="relative w-full aspect-video bg-gradient-to-br from-royal-navy to-black border border-royal-gold/30">
          <SpendThroneLogo className="absolute inset-0 m-auto" size="xl" />
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <p className="text-white/80 font-royal-script">Where Your Wallet Determines Your Worth</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpendThroneBrandAssets;
