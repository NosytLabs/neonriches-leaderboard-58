
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Crown, Shield, Scroll } from 'lucide-react';
import RoyalButton from '@/components/ui/royal-button';
import { UserProfile } from '@/types/user';
import useNotificationSounds from '@/hooks/use-notification-sounds';
import { getTeamColor } from '@/components/leaderboard/TeamUtils';

interface CertificateOfNobilityProps {
  user: UserProfile;
  issuedOn: Date;
  rankAtIssuance: number;
  amountSpentAtIssuance: number;
  certificateId: string;
  onVerify?: () => void;
  onDismiss?: () => void;
}

const CertificateOfNobility: React.FC<CertificateOfNobilityProps> = ({
  user,
  issuedOn,
  rankAtIssuance,
  amountSpentAtIssuance,
  certificateId,
  onVerify,
  onDismiss
}) => {
  const [isVerified, setIsVerified] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const { playSound } = useNotificationSounds();
  const teamColor = user.team ? getTeamColor(user.team) : 'gold';
  
  const handleVerify = () => {
    setIsVerified(true);
    playSound('success');
    if (onVerify) onVerify();
  };
  
  const handleDismiss = () => {
    setIsDismissed(true);
    playSound('notification');
    if (onDismiss) onDismiss();
  };
  
  // Early return if dismissed
  if (isDismissed) {
    return null;
  }
  
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };
  
  const getRoyalTitle = () => {
    if (rankAtIssuance === 1) return "Sovereign Ruler";
    if (rankAtIssuance <= 3) return "Grand Duke";
    if (rankAtIssuance <= 10) return "Noble Lord";
    if (rankAtIssuance <= 20) return "Distinguished Knight";
    return "Esteemed Commoner";
  };

  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.95, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-2xl mx-auto my-8"
    >
      <div className="certificate-container relative">
        {/* Background parchment */}
        <div className="absolute inset-0 bg-[#F5E6CA] opacity-90 z-0"></div>
        
        {/* Texture overlay */}
        <div className="absolute inset-0 opacity-10 z-0"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n' x='0' y='0'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)' opacity='0.3'/%3E%3C/svg%3E\")",
            backgroundSize: '150px 150px',
          }}
        ></div>
        
        {/* Certificate content */}
        <div className="relative z-10 p-8 border-8 border-double border-royal-gold/30 rounded-lg">
          {/* Royal seal */}
          <div className="absolute -right-4 -top-4 w-24 h-24 flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 w-full h-full rounded-full bg-royal-crimson/80 flex items-center justify-center">
                <Crown size={24} className="text-royal-gold" />
              </div>
              <div className="absolute inset-0 rounded-full border-2 border-royal-gold"></div>
            </div>
          </div>
          
          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-medieval text-royal-crimson">Certificate of Nobility</h2>
            <div className="mt-1 text-sm text-gray-700 font-medieval">Royal Court of Digital Status</div>
          </div>
          
          {/* Main content */}
          <div className="text-center mb-6">
            <p className="text-gray-800 italic mb-4">Let it be known to all present that</p>
            <h3 className="text-xl font-medieval text-royal-navy mb-1">{user.username}</h3>
            <p className="text-gray-700 mb-4">has been bestowed the title of</p>
            <div className="my-2 py-1 px-4 bg-royal-gold/10 border border-royal-gold/30 rounded-md inline-block">
              <span className="text-lg font-medieval text-royal-crimson">{getRoyalTitle()}</span>
            </div>
            <p className="text-gray-700 mt-4">for the considerable contribution of</p>
            <div className="my-2 py-1 px-4 bg-royal-gold/10 border border-royal-gold/30 rounded-md inline-block">
              <span className="text-lg font-medieval font-bold text-royal-navy">${amountSpentAtIssuance.toLocaleString()}</span>
            </div>
            <p className="text-gray-700 mt-4">achieving the esteemed rank of</p>
            <div className="my-2 py-1 px-4 bg-royal-gold/10 border border-royal-gold/30 rounded-md inline-block">
              <span className="text-lg font-medieval font-bold text-royal-navy">#{rankAtIssuance}</span>
            </div>
          </div>
          
          {/* Footer */}
          <div className="text-center mb-4">
            <p className="text-sm text-gray-700">Issued on the {formatDate(issuedOn)}</p>
            <p className="text-xs text-gray-500 mt-1">Certificate ID: {certificateId}</p>
          </div>
          
          {/* Verification ribbon */}
          {isVerified && (
            <div className="absolute -rotate-12 top-1/3 left-0 right-0 text-center">
              <div className="inline-block py-1 px-6 bg-green-600/80 text-white font-bold rounded-sm transform shadow-lg">
                VERIFIED
              </div>
            </div>
          )}
          
          {/* Actions */}
          <div className="flex justify-center space-x-4 mt-6">
            <RoyalButton
              variant="royal"
              icon={<Check size={16} />}
              onClick={handleVerify}
              disabled={isVerified}
              className="px-6"
            >
              Verify
            </RoyalButton>
            <RoyalButton
              variant="outline"
              icon={<X size={16} />}
              onClick={handleDismiss}
              className="px-6"
            >
              Dismiss
            </RoyalButton>
          </div>
        </div>
      </div>
      
      {/* Add some medieval certificate styles */}
      <style jsx global>{`
        .certificate-container {
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          color: #333;
          background-color: #F5E6CA;
          overflow: hidden;
        }
        
        @media print {
          .certificate-container {
            box-shadow: none;
            border: 1px solid #ccc;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default CertificateOfNobility;
