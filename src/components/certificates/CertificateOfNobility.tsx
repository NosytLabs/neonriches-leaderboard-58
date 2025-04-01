
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { UserProfile } from '@/types/user';
import { Award, CheckCircle, XCircle, HelpCircle, Medal, Download } from 'lucide-react';
import { useSound } from '@/hooks/use-sound';
import RoyalButton from '@/components/ui/royal-button';
import { safeToString } from '@/utils/safeToString';

export interface CertificateProps {
  user: UserProfile;
  certificateId?: string;
  onVerify?: () => void;
  onDismiss?: () => void;
  onDownload?: () => void;
}

const CertificateOfNobility: React.FC<CertificateProps> = ({
  user,
  certificateId,
  onVerify,
  onDismiss,
  onDownload
}) => {
  const [isVerified, setIsVerified] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const sound = useSound();
  
  // Generate a unique certificate ID if not provided
  const userId = safeToString(user.id, '0');
  const uniqueCertId = certificateId || `STATUS-${Math.floor(10000 + Math.random() * 90000)}-${userId.substring(0, 5)}`;
  
  const handleVerify = () => {
    setIsVerifying(true);
    sound.playSound('notification');
    
    // Simulate verification process
    setTimeout(() => {
      setIsVerified(true);
      setIsVerifying(false);
      sound.playSound('success');
      if (onVerify) onVerify();
    }, 2000);
  };
  
  const handleDismiss = () => {
    sound.playSound('notification');
    if (onDismiss) onDismiss();
  };

  const handleDownload = () => {
    sound.playSound('success');
    if (onDownload) onDownload();
  };
  
  const today = new Date();
  const statusTitle = user.amountSpent ? (
      user.amountSpent >= 1000 ? 'Digital Elite' : 
      user.amountSpent >= 500 ? 'Status Influencer' : 
      user.amountSpent >= 100 ? 'Aspiring Influencer' : 'Status Seeker'
    ) : 'Status Seeker';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative max-w-3xl mx-auto my-6 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl border-4 border-yellow-600 shadow-xl certificate-container"
    >
      <div className="absolute inset-0 bg-certificate-pattern opacity-10"></div>
      
      <div className="relative p-10">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-xl font-bold uppercase tracking-wider text-gray-300">Certificate of Nobility</h1>
            <p className="text-sm text-gray-400">Platform for Digital Status</p>
          </div>
          <div className="flex items-center">
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
              <Medal className="h-8 w-8 text-black" />
            </div>
          </div>
        </div>
        
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-serif mb-1">This certifies that</h2>
          <h1 className="text-3xl font-bold text-yellow-400 font-serif">{user.displayName || user.username}</h1>
          <div className="mt-4 flex justify-center items-center space-x-2">
            <span className="px-3 py-1 bg-purple-900/30 text-purple-400 text-sm rounded-full">
              Rank #{user.rank || '-'}
            </span>
            <span className="px-3 py-1 bg-green-900/30 text-green-400 text-sm rounded-full">
              ${user.totalSpent?.toLocaleString() || user.amountSpent?.toLocaleString() || '0'}
            </span>
          </div>
        </div>
        
        <div className="mb-8 text-center">
          <p className="text-gray-300">has earned the esteemed title of</p>
          <h2 className="text-2xl font-bold text-yellow-400 mt-2 mb-3 font-serif">{statusTitle}</h2>
          <p className="text-sm text-gray-400 italic">
            "In the realm of digital hierarchy, wealth determines status and status determines influence."
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="text-center p-4 border border-gray-700 rounded-lg">
            <p className="text-sm text-gray-400 mb-1">Certificate ID</p>
            <p className="text-yellow-400 font-mono">{uniqueCertId}</p>
          </div>
          <div className="text-center p-4 border border-gray-700 rounded-lg">
            <p className="text-sm text-gray-400 mb-1">Issued On</p>
            <p className="text-yellow-400">{format(today, 'MMMM d, yyyy')}</p>
          </div>
        </div>
        
        <div className="flex justify-between items-center mb-6">
          <div>
            <div className="h-20 w-20 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute inset-2 flex items-center justify-center">
                <Award className="h-10 w-10 text-yellow-400" />
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-sm text-gray-400 mb-1">Verification Status</div>
            {isVerified ? (
              <div className="flex items-center text-green-400">
                <CheckCircle className="h-5 w-5 mr-1" />
                <span>Verified</span>
              </div>
            ) : isVerifying ? (
              <div className="flex items-center text-blue-400">
                <HelpCircle className="h-5 w-5 mr-1 animate-spin" />
                <span>Verifying...</span>
              </div>
            ) : (
              <div className="flex items-center text-gray-400">
                <XCircle className="h-5 w-5 mr-1" />
                <span>Unverified</span>
              </div>
            )}
          </div>
          
          <div className="text-right">
            <p className="text-xs text-gray-500 italic">Made Possible By</p>
            <p className="text-sm text-gray-300">SpendThrone</p>
          </div>
        </div>
        
        <div className="flex justify-center space-x-4 mt-8">
          {!isVerified && (
            <RoyalButton onClick={handleVerify} disabled={isVerifying}>
              {isVerifying ? "Verifying..." : "Verify Certificate"}
            </RoyalButton>
          )}
          
          <RoyalButton variant="outline" onClick={handleDownload}>
            <Download className="h-4 w-4 mr-2" />
            Download
          </RoyalButton>
          
          <RoyalButton variant="outline" onClick={handleDismiss}>
            Dismiss
          </RoyalButton>
        </div>
      </div>
    </motion.div>
  );
};

export default CertificateOfNobility;
