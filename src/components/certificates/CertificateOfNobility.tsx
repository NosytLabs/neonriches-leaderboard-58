
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { format } from 'date-fns';
import { UserProfile } from '@/types/user';
import { Seal, CheckCircle, XCircle, QuestionMarkCircledIcon } from 'lucide-react';
import useNotificationSounds from '@/hooks/use-notification-sounds';
import RoyalButton from '@/components/ui/royal-button';

export interface CertificateProps {
  user: UserProfile;
  certificateId: string;
  onVerify?: () => void;
  onDismiss?: () => void;
}

const CertificateOfNobility: React.FC<CertificateProps> = ({
  user,
  certificateId,
  onVerify,
  onDismiss
}) => {
  const [isVerified, setIsVerified] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const { playSound } = useNotificationSounds();
  
  const handleVerify = () => {
    setIsVerifying(true);
    playSound('seal', 0.5);
    
    // Simulate verification process
    setTimeout(() => {
      setIsVerified(true);
      setIsVerifying(false);
      playSound('success', 0.3);
      if (onVerify) onVerify();
    }, 2000);
  };
  
  const handleDismiss = () => {
    playSound('parchmentUnfurl', 0.3);
    if (onDismiss) onDismiss();
  };
  
  const today = new Date();
  
  return (
    <div className="relative max-w-4xl mx-auto">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
        className="certificate-parchment"
      >
        <div className="p-8 sm:p-12 relative z-10">
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl font-medieval mb-2 royal-gradient">Certificate of Nobility</h1>
            <div className="text-xs sm:text-sm text-gray-600 uppercase tracking-widest">Kingdom of SpendThrone</div>
          </div>
          
          <div className="mb-8 text-center">
            <p className="text-lg sm:text-xl mb-4 font-medieval-text">By decree of the Royal Treasury, this document certifies that</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-royal royal-gradient mb-4">
              {user.displayName || user.username}
            </h2>
            <p className="text-base font-medieval-text">
              has demonstrated exceptional financial dedication to the realm through generous contributions 
              totaling <span className="font-semibold">${user.amountSpent?.toLocaleString()}</span>, 
              thereby earning the illustrious rank of <span className="font-semibold">#{user.rank}</span> 
              among all nobles in the kingdom.
            </p>
          </div>
          
          <div className="mb-8">
            <div className="border-t border-b border-gray-300 py-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-sm text-gray-600">Date of Issuance</div>
                <div className="font-medieval-text">{format(today, 'MMMM dd, yyyy')}</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Certificate Number</div>
                <div className="font-mono text-xs sm:text-sm">{certificateId}</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Royal Rank</div>
                <div className="font-medieval-text">#{user.rank}</div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
            <div className="mb-6 sm:mb-0">
              <div className="text-xs text-gray-600 mb-1">Kingdom Seal</div>
              <div className="relative">
                <Seal size={60} className="text-royal-gold animate-pulse-slow" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-[8px] text-center leading-tight">
                    <div>ROYAL</div>
                    <div>TREASURY</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-xs text-gray-600 mb-1">Signature of the Royal Treasurer</div>
              <div className="font-signature text-lg sm:text-xl text-royal-purple">Lord Moneybags</div>
            </div>
          </div>
          
          <div className="text-xs text-gray-500 text-center italic mb-6">
            This certificate affirms nobility status in the digital realm, though it holds no legal value, 
            authority, or meaning in the physical world. It is merely a testament to one's willingness 
            to exchange actual currency for meaningless digital status.
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between gap-4">
            <RoyalButton
              onClick={handleVerify}
              disabled={isVerified || isVerifying}
              variant="royalGold"
              className="w-full sm:w-auto"
              icon={
                isVerified ? (
                  <CheckCircle size={18} className="text-emerald-400" />
                ) : isVerifying ? (
                  <div className="animate-spin h-4 w-4 border-2 border-white rounded-full border-t-transparent" />
                ) : (
                  <QuestionMarkCircledIcon size={18} />
                )
              }
            >
              {isVerified 
                ? 'Verified Authentic' 
                : isVerifying
                  ? 'Verifying...'
                  : 'Verify Authenticity'}
            </RoyalButton>
            
            <RoyalButton
              onClick={handleDismiss}
              variant="outline"
              className="w-full sm:w-auto"
              icon={<XCircle size={18} />}
            >
              Dismiss Certificate
            </RoyalButton>
          </div>
        </div>
      </motion.div>
      
      <style jsx global>
        {`
          .certificate-parchment {
            background-color: #f9f2e0;
            background-image: 
              url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23d1b278' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E"),
              linear-gradient(to bottom, rgba(249,242,224,1) 0%, rgba(239,227,200,1) 100%);
            color: #442c1e;
            border-radius: 0.5rem;
            box-shadow: 
              0 1px 3px rgba(0, 0, 0, 0.1),
              0 20px 40px rgba(0, 0, 0, 0.2),
              inset 0 0 0 1px rgba(255, 255, 255, 0.5);
            position: relative;
            overflow: hidden;
          }
          
          .certificate-parchment::before,
          .certificate-parchment::after {
            content: '';
            position: absolute;
            pointer-events: none;
          }
          
          .certificate-parchment::before {
            top: 0;
            left: 0;
            right: 0;
            height: 100px;
            background: linear-gradient(to bottom, 
              rgba(209, 178, 120, 0.2) 0%, 
              rgba(209, 178, 120, 0) 100%);
            z-index: 1;
          }
          
          .certificate-parchment::after {
            bottom: 0;
            left: 0;
            right: 0;
            height: 100px;
            background: linear-gradient(to top, 
              rgba(209, 178, 120, 0.2) 0%, 
              rgba(209, 178, 120, 0) 100%);
            z-index: 1;
          }
          
          .royal-gradient {
            background: linear-gradient(to right, #b8860b, #d4af37, #b8860b);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
          }
          
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.7; }
            50% { opacity: 1; }
          }
          
          .animate-pulse-slow {
            animation: pulse-slow 3s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
};

export default CertificateOfNobility;
