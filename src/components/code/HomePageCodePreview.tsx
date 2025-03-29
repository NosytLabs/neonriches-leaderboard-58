
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Code, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const languages = [
  {
    name: "JavaScript",
    color: "text-yellow-400",
    code: `function calculateRoyalTax(amount, rank) {
  // Nobles pay less tax as rank increases
  const taxRate = Math.max(0.2 - (rank * 0.01), 0.05);
  return amount * taxRate;
}`
  },
  {
    name: "Python",
    color: "text-blue-400",
    code: `def calculate_kingdom_resources(territories):
    """Calculate total resources across all kingdom territories"""
    total_gold = sum(territory.gold for territory in territories)
    total_soldiers = sum(territory.army_size for territory in territories)
    
    return {
        "gold": total_gold,
        "military_strength": total_soldiers,
        "prosperity_index": total_gold / len(territories)
    }`
  },
  {
    name: "SQL",
    color: "text-green-400",
    code: `-- Query the nobles by their spending rank
SELECT 
  username, 
  display_name,
  team,
  amount_spent,
  RANK() OVER (ORDER BY amount_spent DESC) as spending_rank
FROM royal_users
WHERE amount_spent > 0
ORDER BY spending_rank
LIMIT 10;`
  }
];

const HomePageCodePreview = () => {
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);
  const navigate = useNavigate();
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLanguageIndex((prev) => (prev + 1) % languages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const currentLanguage = languages[currentLanguageIndex];
  
  return (
    <Card className="glass-morphism border-royal-gold/20 overflow-hidden">
      <div className="h-1 bg-gradient-to-r from-royal-gold to-royal-purple"></div>
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center">
            <Code className={`h-5 w-5 mr-2 ${currentLanguage.color}`} />
            <Badge className="bg-black/30 border-white/10">
              {currentLanguage.name}
            </Badge>
          </div>
          <Button 
            variant="link" 
            className="text-royal-gold p-0 h-auto flex items-center"
            onClick={() => navigate('/code')}
          >
            <span className="mr-1">Royal Academy</span>
            <ArrowRight className="h-3 w-3" />
          </Button>
        </div>
        
        <motion.pre
          key={currentLanguage.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="p-3 rounded-lg bg-black/30 text-sm overflow-x-auto border border-white/10 font-mono text-white/80 max-h-[180px]"
        >
          {currentLanguage.code}
        </motion.pre>
      </CardContent>
    </Card>
  );
};

export default HomePageCodePreview;
