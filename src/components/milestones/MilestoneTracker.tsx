
import React, { useState, useEffect } from 'react';
import { Milestone } from '@/types/milestone';
import { getMilestones, getNextMilestone } from '@/services/milestoneService';
import { Progress } from '@/components/ui/progress';
import { Award, Trophy, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

interface MilestoneTrackerProps {
  userId: string;
  currentSpent: number;
  className?: string;
  compact?: boolean;
}

const MilestoneTracker: React.FC<MilestoneTrackerProps> = ({
  userId,
  currentSpent,
  className,
  compact = false
}) => {
  const [milestones, setMilestones] = useState<Milestone[]>([]);
  const [nextMilestone, setNextMilestone] = useState<Milestone | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const loadMilestones = async () => {
      try {
        const allMilestones = await getMilestones();
        setMilestones(allMilestones);
        
        const next = await getNextMilestone(userId);
        setNextMilestone(next);
      } catch (error) {
        console.error('Error loading milestones:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadMilestones();
  }, [userId, currentSpent]);
  
  // Find the previous milestone for progress calculation
  const previousMilestone = milestones
    .filter(m => m.threshold <= currentSpent)
    .sort((a, b) => b.threshold - a.threshold)[0];
  
  const previousThreshold = previousMilestone?.threshold || 0;
  
  // Calculate progress percentage
  const calculateProgress = () => {
    if (!nextMilestone) return 100; // If no next milestone, we're at 100%
    
    const range = nextMilestone.threshold - previousThreshold;
    const progress = ((currentSpent - previousThreshold) / range) * 100;
    return Math.min(Math.max(progress, 0), 100);
  };
  
  if (loading) {
    return (
      <Card className={cn("glass-morphism border-white/10", className)}>
        <CardHeader className={compact ? "py-3" : undefined}>
          <Skeleton className="h-5 w-40" />
        </CardHeader>
        <CardContent className={compact ? "py-2" : undefined}>
          <div className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-16 w-full" />
          </div>
        </CardContent>
      </Card>
    );
  }
  
  const progress = calculateProgress();
  
  return (
    <Card className={cn("glass-morphism border-white/10", className)}>
      <CardHeader className={compact ? "py-3" : undefined}>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-royal-gold" />
          <span>Milestone Progress</span>
        </CardTitle>
      </CardHeader>
      <CardContent className={compact ? "py-2" : undefined}>
        {nextMilestone ? (
          <div className="space-y-4">
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center text-white/70">
                <Award className="h-4 w-4 mr-1 text-royal-gold" />
                <span>{previousMilestone?.reward_name || 'Starting Point'}</span>
              </div>
              <div className="font-mono">${previousThreshold.toLocaleString()}</div>
            </div>
            
            <div className="space-y-2">
              <Progress value={progress} className="h-2" />
              <div className="flex justify-between text-xs text-white/50">
                <span>Current: ${currentSpent.toLocaleString()}</span>
                <span>{progress.toFixed(0)}% Complete</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-1 text-royal-gold" />
                <span className="text-royal-gold">{nextMilestone.reward_name}</span>
              </div>
              <div className="font-mono">${nextMilestone.threshold.toLocaleString()}</div>
            </div>
            
            {!compact && nextMilestone.reward_description && (
              <div className="text-xs text-white/70 italic bg-black/20 p-2 rounded">
                {nextMilestone.reward_description}
              </div>
            )}
            
            <div className="text-sm text-white/70">
              <span className="font-semibold text-royal-gold">
                ${(nextMilestone.threshold - currentSpent).toLocaleString()}
              </span> more to reach this milestone
            </div>
          </div>
        ) : (
          <div className="text-center py-4">
            <Award className="h-10 w-10 text-royal-gold mx-auto mb-2" />
            <p className="text-white/70">
              Congratulations! You've reached all available milestones.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MilestoneTracker;
