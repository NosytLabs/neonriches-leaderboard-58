
import { Milestone, UserMilestone } from '@/types/milestone';
import { supabase } from '@/integrations/supabase/client';

export const getMilestones = async (): Promise<Milestone[]> => {
  const { data, error } = await supabase
    .from('milestones')
    .select('*')
    .order('threshold', { ascending: true });
  
  if (error) {
    console.error('Error fetching milestones:', error);
    throw error;
  }
  
  return data as Milestone[];
};

export const getUserMilestones = async (userId: string): Promise<UserMilestone[]> => {
  const { data, error } = await supabase
    .from('user_milestones')
    .select(`
      *,
      milestone:milestone_id(*)
    `)
    .eq('user_id', userId)
    .order('achieved_at', { ascending: false });
  
  if (error) {
    console.error('Error fetching user milestones:', error);
    throw error;
  }
  
  return data as UserMilestone[];
};

export const getNextMilestone = async (userId: string): Promise<Milestone | null> => {
  // Get user's current amount spent
  const { data: deposits, error: depositsError } = await supabase
    .from('deposits')
    .select('amount')
    .eq('user_id', userId);
  
  if (depositsError) {
    console.error('Error fetching user deposits:', depositsError);
    throw depositsError;
  }
  
  const totalSpent = deposits.reduce((sum, deposit) => sum + deposit.amount, 0);
  
  // Get next milestone
  const { data, error } = await supabase
    .from('milestones')
    .select('*')
    .gt('threshold', totalSpent)
    .order('threshold', { ascending: true })
    .limit(1);
  
  if (error) {
    console.error('Error fetching next milestone:', error);
    throw error;
  }
  
  return data.length > 0 ? data[0] as Milestone : null;
};

export const checkAndAwardMilestones = async (userId: string): Promise<string[]> => {
  const { data, error } = await supabase
    .rpc('check_and_award_milestones', { user_uuid: userId });
  
  if (error) {
    console.error('Error checking and awarding milestones:', error);
    throw error;
  }
  
  return data as string[];
};
