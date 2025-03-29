
import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { CodeLanguage } from '@/types/code';

interface CodeLanguageCardProps {
  language: CodeLanguage;
  isSelected: boolean;
  onClick: () => void;
}

const CodeLanguageCard: React.FC<CodeLanguageCardProps> = ({ 
  language, 
  isSelected,
  onClick
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        p-3 rounded-lg cursor-pointer transition-all
        ${isSelected 
          ? 'bg-gradient-to-r from-royal-gold/20 to-royal-purple/20 border border-royal-gold/30' 
          : 'bg-black/20 border border-white/10 hover:border-white/20'}
      `}
    >
      <div className="flex items-center">
        <div className="mr-3">
          {language.icon}
        </div>
        <div>
          <h3 className="font-medium">{language.name}</h3>
          <p className="text-xs text-white/60">{language.subtitle}</p>
        </div>
      </div>
      
      <div className="mt-2 flex flex-wrap gap-2">
        {language.tags.map((tag, index) => (
          <Badge 
            key={index} 
            variant="outline" 
            className="text-xs bg-black/30 border-white/10"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </motion.div>
  );
};

export default CodeLanguageCard;
