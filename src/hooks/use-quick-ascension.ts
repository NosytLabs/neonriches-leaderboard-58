
import { useNavigate } from 'react-router-dom';
import { SoundCategoryEnum } from '@/hooks/sounds/types';
import useNotificationSounds from '@/hooks/use-notification-sounds';
import { useToastContext } from "@/contexts/ToastContext";

export function useQuickAscension() {
  const navigate = useNavigate();
  const { addToast } = useToastContext();
  const { playSound } = useNotificationSounds();

  const handleQuickAscension = () => {
    playSound(SoundCategoryEnum.reward, 0.3);
    addToast({
      title: "Nobility Beckons!",
      description: "Your journey to meaningless digital status begins now!",
      duration: 3000,
    });
    navigate('/dashboard');
  };

  return handleQuickAscension;
}
