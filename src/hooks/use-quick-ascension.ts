
import { useNavigate } from 'react-router-dom';
import { SoundCategoryEnum } from '@/hooks/sounds/types';
import useNotificationSounds from '@/hooks/use-notification-sounds';
import { useToast } from "@/hooks/use-toast";

export function useQuickAscension() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { playSound } = useNotificationSounds();

  const handleQuickAscension = () => {
    playSound(SoundCategoryEnum.reward, 0.3);
    toast({
      title: "Nobility Beckons!",
      description: "Your journey to meaningless digital status begins now!",
      duration: 3000,
    });
    navigate('/dashboard');
  };

  return handleQuickAscension;
}
