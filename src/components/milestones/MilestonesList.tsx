
import React, { useState, useEffect } from 'react';
import { Milestone, UserMilestone } from '@/types/milestone';
import { getMilestones, getUserMilestones } from '@/services/milestoneService';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Award, Check, Lock, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Badge } from '@/components/ui/badge';

interface MilestonesListProps {
  userId: string;
  currentSpent: number;
  className?: string;
}

const MilestonesList: React.FC<MilestonesListProps> = ({
  userId,
  currentSpent,
  className
}) => {
  const [milestones, setMilestones] = useState<Milestone[]>([]);
  const [userMilestones, setUserMilestones] = useState<UserMilestone[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const loadMilestones = async () => {
      try {
        const [allMilestones, userAchieved] = await Promise.all([
          getMilestones(),
          getUserMilestones(userId)
        ]);
        
        setMilestones(allMilestones);
        setUserMilestones(userAchieved);
      } catch (error) {
        console.error('Error loading milestones:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadMilestones();
  }, [userId, currentSpent]);
  
  // Check if a milestone is achieved
  const isMilestoneAchieved = (milestoneId: string) => {
    return userMilestones.some(um => um.milestone_id === milestoneId);
  };
  
  // Get achievement date if available
  const getAchievementDate = (milestoneId: string) => {
    const userMilestone = userMilestones.find(um => um.milestone_id === milestoneId);
    return userMilestone ? new Date(userMilestone.achieved_at) : null;
  };
  
  const getMilestoneIcon = (milestone: Milestone, achieved: boolean) => {
    if (!achieved) return <Lock className="h-5 w-5 text-white/40" />;
    
    switch (milestone.reward_type) {
      case 'badge':
        return <Award className="h-5 w-5 text-royal-gold" />;
      case 'title':
        return <Star className="h-5 w-5 text-royal-gold" />;
      case 'animation':
        return <Star className="h-5 w-5 text-purple-400 animate-pulse" />;
      case 'feature':
        return <Star className="h-5 w-5 text-green-400" />;
      default:
        return <Check className="h-5 w-5 text-royal-gold" />;
    }
  };
  
  return (
    <Card className={cn("glass-morphism border-white/10", className)}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Award className="h-5 w-5 text-royal-gold" />
          <span>Royal Achievements</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] pr-4">
          {loading ? (
            <div className="py-8 text-center text-white/50">
              Loading milestones...
            </div>
          ) : milestones.length === 0 ? (
            <div className="py-8 text-center text-white/50">
              No milestones available
            </div>
          ) : (
            <div className="space-y-3">
              {milestones.map(milestone => {
                const achieved = isMilestoneAchieved(milestone.id);
                const achievementDate = getAchievementDate(milestone.id);
                const inProgress = !achieved && milestone.threshold > currentSpent;
                const progress = inProgress 
                  ? (currentSpent / milestone.threshold * 100)
                  : achieved ? 100 : 0;
                
                return (
                  <div 
                    key={milestone.id}
                    className={cn(
                      "p-3 rounded-lg border",
                      achieved 
                        ? "bg-royal-gold/10 border-royal-gold/30" 
                        : inProgress
                          ? "bg-white/5 border-white/10"
                          : "bg-white/5 border-white/10 opacity-60"
                    )}
                  >
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {getMilestoneIcon(milestone, achieved)}
                        <span className={cn(
                          "font-bold",
                          achieved ? "text-royal-gold" : "text-white/70"
                        )}>
                          {milestone.reward_name}
                        </span>
                        
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Badge 
                                variant="outline" 
                                className={cn(
                                  "ml-2 text-xs",
                                  achieved ? "border-royal-gold/30 text-royal-gold" : "border-white/20"
                                )}
                              >
                                ${milestone.threshold.toLocaleString()}
                              </Badge>
                            </TooltipTrigger>
                            <TooltipContent side="right">
                              Spending threshold to unlock
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      
                      {achieved && achievementDate && (
                        <span className="text-xs text-white/50">
                          Achieved {format(achievementDate, 'MMM d, yyyy')}
                        </span>
                      )}
                    </div>
                    
                    <p className="text-sm text-white/70 mb-2">
                      {milestone.reward_description}
                    </p>
                    
                    {!achieved && (
                      <div className="w-full bg-white/10 rounded-full h-1.5 mt-2">
                        <div 
                          className="bg-royal-gold h-1.5 rounded-full" 
                          style={{ width: `${progress}%` }}
                        />
                        <div className="flex justify-between mt-1 text-xs text-white/50">
                          <span>{progress.toFixed(0)}%</span>
                          <span>${currentSpent.toLocaleString()} / ${milestone.threshold.toLocaleString()}</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default MilestonesList;
