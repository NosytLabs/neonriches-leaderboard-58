
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Sword, Trophy, Clock } from 'lucide-react';

interface CodeChallengePreviewProps {
  title: string;
  language: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  reward: number;
  description: string;
}

const CodeChallengePreview: React.FC<CodeChallengePreviewProps> = ({
  title,
  language,
  difficulty,
  reward,
  description
}) => {
  const difficultyColor = 
    difficulty === 'Easy' ? 'bg-green-500/20 text-green-300' :
    difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-300' :
    'bg-red-500/20 text-red-300';
  
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="cursor-pointer"
    >
      <Card className="glass-morphism border-white/10 overflow-hidden">
        <div className="h-2 bg-gradient-to-r from-royal-gold to-royal-purple"></div>
        <CardContent className="p-4">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="font-bold text-lg">{title}</h3>
              <p className="text-sm text-white/60">{description}</p>
            </div>
            <Sword className="h-5 w-5 text-royal-gold" />
          </div>
          
          <div className="flex flex-wrap gap-2 mb-3">
            <Badge className="bg-black/30 border-white/10">
              {language}
            </Badge>
            <Badge className={`${difficultyColor} border-none`}>
              {difficulty}
            </Badge>
          </div>
        </CardContent>
        
        <CardFooter className="bg-black/20 p-3 flex justify-between items-center">
          <div className="flex items-center text-sm text-white/70">
            <Clock className="h-4 w-4 mr-1" />
            <span>~30 mins</span>
          </div>
          
          <div className="flex items-center">
            <Trophy className="h-4 w-4 mr-1 text-royal-gold" />
            <span className="text-royal-gold font-bold">{reward} pts</span>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default CodeChallengePreview;
