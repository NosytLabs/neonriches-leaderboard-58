
import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Download, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { UserProfile } from '@/types/user';

interface CertificateProps {
  user: UserProfile;
  isOpen: boolean;
  onClose: () => void;
  onVerify?: () => void;
}

const CertificateOfNobility: React.FC<CertificateProps> = ({ 
  user, 
  isOpen, 
  onClose,
  onVerify 
}) => {
  if (!isOpen) return null;
  
  const formattedDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  const handleVerify = () => {
    if (onVerify) onVerify();
  };
  
  const handlePrint = () => {
    window.print();
  };
  
  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm print:bg-transparent print:p-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="relative max-w-4xl w-full bg-parchment text-black rounded-lg shadow-2xl overflow-hidden certificate-container print:shadow-none"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: 'spring', damping: 25 }}
      >
        {/* Close button - hidden when printing */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/10 flex items-center justify-center transition-colors hover:bg-black/20 print:hidden"
        >
          <X className="w-5 h-5 text-black/70" />
        </button>
        
        {/* Certificate content */}
        <div className="p-8 md:p-12 certificate-content">
          <div className="flex justify-center mb-6">
            <div className="certificate-seal">
              <Crown className="w-16 h-16 text-royal-gold" />
            </div>
          </div>
          
          <div className="text-center mb-8">
            <h1 className="certificate-title mb-2">Certificate of Nobility</h1>
            <div className="certificate-subtitle">Royal Recognition of Digital Spending</div>
          </div>
          
          <div className="certificate-body mb-8 text-center">
            <p className="mb-6">This document formally certifies that</p>
            <h2 className="certificate-name mb-6">{user.displayName || user.username}</h2>
            <p className="mb-2">has attained the exclusive status of</p>
            <h3 className="certificate-rank mb-6">{getTierTitle(user.tier)}</h3>
            <p className="mb-2">by contributing the princely sum of</p>
            <h3 className="certificate-amount mb-8">${user.amountSpent?.toLocaleString() || '0'}</h3>
            <p className="certificate-legal">
              This sum represents actual currency exchanged for purely cosmetic digital status,
              with absolutely no practical benefits beyond this decorative certificate.
            </p>
          </div>
          
          <div className="certificate-footer flex justify-between items-center mt-12">
            <div className="certificate-date">
              Issued on the {formattedDate}
            </div>
            <div className="certificate-number">
              Certificate ID: {generateCertificateId(user.id)}
            </div>
          </div>
          
          {/* Action buttons - hidden when printing */}
          <div className="flex justify-center gap-4 mt-8 print:hidden">
            <Button
              variant="outline"
              className="certificate-button border-royal-gold/50 text-royal-gold hover:bg-royal-gold/10"
              onClick={handleVerify}
            >
              <Check className="mr-2 h-4 w-4" />
              Verify Certificate
            </Button>
            
            <Button
              variant="outline"
              className="certificate-button border-black/30 text-black/70 hover:bg-black/5" 
              onClick={handlePrint}
            >
              <Download className="mr-2 h-4 w-4" />
              Save Certificate
            </Button>
          </div>
        </div>
        
        {/* Background decorations */}
        <div className="certificate-background"></div>
        <div className="certificate-border"></div>
      </motion.div>
      
      <style>
        {`
        @media print {
          body * {
            visibility: hidden;
          }
          .certificate-container, .certificate-container * {
            visibility: visible;
          }
          .certificate-container {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
          }
        }
        
        .certificate-container {
          background-color: #f5e7c1;
          background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23d0ba91' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E");
        }
        
        .certificate-seal {
          position: relative;
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .certificate-seal::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(218,165,32,0.2) 0%, rgba(218,165,32,0) 70%);
          animation: pulse 4s infinite;
        }
        
        .certificate-title {
          font-family: 'Cinzel', serif;
          font-size: 2.5rem;
          color: #8B5A2B;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
        }
        
        .certificate-subtitle {
          font-family: 'Cinzel', serif;
          font-size: 1rem;
          color: #8B5A2B;
          letter-spacing: 0.1em;
        }
        
        .certificate-name {
          font-family: 'Tangerine', cursive;
          font-size: 3.5rem;
          color: #8B0000;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
        }
        
        .certificate-rank {
          font-family: 'Cinzel', serif;
          font-size: 1.8rem;
          color: #8B5A2B;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        .certificate-amount {
          font-family: 'Cinzel', serif;
          font-size: 2rem;
          color: #8B0000;
        }
        
        .certificate-legal {
          font-style: italic;
          font-size: 0.9rem;
          color: rgba(0,0,0,0.6);
          max-width: 80%;
          margin: 0 auto;
        }
        
        .certificate-button {
          transition: all 0.3s ease;
        }
        
        .certificate-background {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80%;
          height: 80%;
          background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23bd9d3c' fill-opacity='0.05'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6h-2c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          z-index: -1;
          pointer-events: none;
        }
        
        .certificate-border {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border: 12px solid transparent;
          border-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='75' height='75'%3E%3Cg fill='none' stroke='%23d4af37' stroke-width='2'%3E%3Cpath d='M1 1h73v73H1z'/%3E%3Cpath d='M8 8h59v59H8z'/%3E%3Cpath d='M8 8L1 1m7 66L1 74m59-66l7-7m0 73l-7-7'/%3E%3C/g%3E%3C/svg%3E") 25%;
          pointer-events: none;
        }
        
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.7; }
          100% { transform: scale(1); opacity: 1; }
        }
        `}
      </style>
    </motion.div>
  );
};

// Helper functions
function getTierTitle(tier: string): string {
  const titles: Record<string, string> = {
    'crab': 'Squire of the Shallow Depths',
    'octopus': 'Knight of the Eight Arms',
    'fish': 'Baron of the Silver Scales',
    'dolphin': 'Count of the Swift Current',
    'shark': 'Duke of the Hunting Grounds',
    'whale': 'Prince of the Deep Abyss',
    'royal': 'High Sovereign of the Endless Ocean',
    'pro': 'Marquis of Premium Holdings',
    'free': 'Commoner of the Shore'
  };
  
  return titles[tier] || 'Noble of Unknown Rank';
}

function generateCertificateId(userId: string): string {
  const randomCode = Math.floor(Math.random() * 100000).toString().padStart(5, '0');
  return `NC-${randomCode}-${userId.substring(0, 5).toUpperCase()}`;
}

export default CertificateOfNobility;
