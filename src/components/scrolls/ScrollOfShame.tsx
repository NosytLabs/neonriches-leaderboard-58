
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scroll, Eye, EyeOff, UserX, Shield } from 'lucide-react';
import { UserProfile } from '@/types/user';
import RoyalButton from '@/components/ui/royal-button';
import MedievalIcon from '@/components/ui/medieval-icon';
import useNotificationSounds from '@/hooks/use-notification-sounds';

interface ShameRecord {
  id: string;
  targetUser: UserProfile;
  reason: string;
  issuedOn: Date;
  issuedBy: UserProfile;
  shameType: 'tomatoes' | 'eggs' | 'stocks';
}

interface ScrollOfShameProps {
  shameRecords: ShameRecord[];
  onView?: (record: ShameRecord) => void;
  onHide?: (record: ShameRecord) => void;
  previewMode?: boolean;
}

const ScrollOfShame: React.FC<ScrollOfShameProps> = ({
  shameRecords,
  onView,
  onHide,
  previewMode = false
}) => {
  const [expandedRecords, setExpandedRecords] = useState<Record<string, boolean>>({});
  const { playSound } = useNotificationSounds();
  
  const toggleRecord = (recordId: string) => {
    setExpandedRecords(prev => {
      const newState = { ...prev };
      newState[recordId] = !prev[recordId];
      
      // Play sound based on action
      if (!prev[recordId]) {
        playSound('pageTransition', 0.2);
      } else {
        playSound('click', 0.1);
      }
      
      return newState;
    });
    
    // Call appropriate callback
    const record = shameRecords.find(r => r.id === recordId);
    if (record) {
      if (expandedRecords[recordId]) {
        onHide && onHide(record);
      } else {
        onView && onView(record);
      }
    }
  };
  
  const getShameIcon = (type: string) => {
    switch(type) {
      case 'tomatoes': return '🍅';
      case 'eggs': return '🥚';
      case 'stocks': return '🪵';
      default: return '📜';
    }
  };
  
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
  };

  return (
    <div className="scroll-of-shame max-w-3xl mx-auto my-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-medieval royal-gradient flex items-center justify-center">
          <Scroll className="mr-2 h-6 w-6 text-royal-gold" />
          Royal Scroll of Shame
        </h2>
        <p className="text-white/70 italic">
          "A kingdom's jest is oft written on parchment and laced with mockery."
        </p>
      </div>
      
      {/* Empty state */}
      {shameRecords.length === 0 && (
        <div className="text-center p-8 glass-morphism border-white/10 rounded-lg">
          <UserX className="h-12 w-12 text-white/30 mx-auto mb-3" />
          <p className="text-white/70">
            No nobles have been shamed yet. The scroll awaits its first entry.
          </p>
        </div>
      )}
      
      {/* Shame records */}
      <div className="space-y-4">
        {shameRecords.map((record) => (
          <motion.div
            key={record.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="glass-morphism border-white/10 rounded-lg relative overflow-hidden"
          >
            {/* Record header - always visible */}
            <div 
              className={`p-4 flex justify-between items-center cursor-pointer hover:bg-white/5 
                ${expandedRecords[record.id] ? 'border-b border-white/10' : ''}`}
              onClick={() => toggleRecord(record.id)}
            >
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-white/10 mr-3 flex items-center justify-center">
                  <span className="text-lg">{getShameIcon(record.shameType)}</span>
                </div>
                <div>
                  <div className="font-medium">{record.targetUser.username}</div>
                  <div className="text-white/50 text-xs">Shamed on {formatDate(record.issuedOn)}</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <span className="text-white/50 text-xs mr-2">
                  {expandedRecords[record.id] ? 'Hide details' : 'View details'}
                </span>
                <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center">
                  {expandedRecords[record.id] ? 
                    <EyeOff className="h-4 w-4 text-white/70" /> : 
                    <Eye className="h-4 w-4 text-white/70" />
                  }
                </div>
              </div>
            </div>
            
            {/* Expanded content */}
            <AnimatePresence>
              {expandedRecords[record.id] && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-4 py-3 bg-white/5"
                >
                  <div className="mb-3 p-3 bg-black/20 rounded-md relative">
                    <div className="absolute -left-2 top-2 text-2xl transform -rotate-12">
                      {getShameIcon(record.shameType)}
                    </div>
                    <p className="text-white/90 pl-7 italic">"{record.reason}"</p>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-white/50">
                      Issued by: <span className="text-white/70">{record.issuedBy.username}</span>
                    </div>
                    
                    <div className="flex space-x-2">
                      <RoyalButton
                        variant="glass"
                        size="sm"
                        icon={<Shield className="h-4 w-4" />}
                        onClick={(e) => {
                          e.stopPropagation();
                          playSound('swordClash', 0.2);
                        }}
                      >
                        Appeal
                      </RoyalButton>
                      
                      <RoyalButton
                        variant="goldOutline"
                        size="sm"
                        icon={<EyeOff className="h-4 w-4" />}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleRecord(record.id);
                        }}
                      >
                        Hide
                      </RoyalButton>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Overlay decoration for expanded view */}
            {expandedRecords[record.id] && (
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute -right-6 -bottom-6 w-24 h-24 opacity-10">
                  <MedievalIcon name="scroll" size="2xl" />
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
      
      {/* Preview mode notice */}
      {previewMode && (
        <div className="mt-4 p-3 text-center bg-white/5 rounded-md text-white/50 text-sm">
          This is a preview of the Scroll of Shame. In the full version, users can view and interact with real shame records.
        </div>
      )}
    </div>
  );
};

export default ScrollOfShame;
