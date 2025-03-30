
import { useState, useEffect } from 'react';
import { Milestone, UserMilestone } from '@/types/milestone';
import { getMilestones, getUserMilestones, getNextMilestone } from '@/services/milestoneService';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

export function useUserMilestones(userId: string, currentSpent: number) {
  const [milestones, setMilestones] = useState<Milestone[]>([]);
  const [userMilestones, setUserMilestones] = useState<UserMilestone[]>([]);
  const [nextMilestone, setNextMilestone] = useState<Milestone | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  
  useEffect(() => {
    if (!userId) return;
    
    const loadMilestones = async () => {
      try {
        setLoading(true);
        const [allMilestones, userAchieved, next] = await Promise.all([
          getMilestones(),
          getUserMilestones(userId),
          getNextMilestone(userId)
        ]);
        
        setMilestones(allMilestones);
        setUserMilestones(userAchieved);
        setNextMilestone(next);
      } catch (error) {
        console.error('Error loading milestones:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadMilestones();
    
    // Set up real-time subscription
    const channel = supabase
      .channel('user-milestones-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'user_milestones',
          filter: `user_id=eq.${userId}`
        },
        async (payload) => {
          if (payload.eventType === 'INSERT') {
            // A new milestone was achieved
            
            // Fetch the complete milestone info
            const { data, error } = await supabase
              .from('user_milestones')
              .select(`
                *,
                milestone:milestone_id(*)
              `)
              .eq('id', payload.new.id)
              .single();
            
            if (!error && data) {
              // Update local state
              setUserMilestones(prev => [...prev, data as UserMilestone]);
              
              // Notify the user
              toast({
                title: "New Milestone Achieved!",
                description: `You've earned the "${data.milestone.reward_name}" milestone.`,
                variant: "default",
              });
              
              // Check if we need to update the next milestone
              if (nextMilestone?.id === data.milestone_id) {
                const newNext = await getNextMilestone(userId);
                setNextMilestone(newNext);
              }
            }
          }
        }
      )
      .subscribe();
    
    return () => {
      supabase.removeChannel(channel);
    };
  }, [userId, toast, currentSpent]);
  
  return { milestones, userMilestones, nextMilestone, loading };
}

export default useUserMilestones;
