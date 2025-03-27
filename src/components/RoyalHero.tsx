
import React, { useRef } from 'react';
import useNotificationSounds from '@/hooks/use-notification-sounds';
import { useHeroVisibility } from '@/hooks/use-hero-visibility';
import HeroContent from '@/components/ui/hero/HeroContent';
import HeroSoundToggle from '@/components/ui/hero/HeroSoundToggle';

const RoyalHero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { isMuted, toggleMute } = useNotificationSounds();
  const isVisible = useHeroVisibility(heroRef);
  
  return (
    <section ref={heroRef} className="w-full min-h-[90vh] pt-32 pb-20 relative overflow-hidden bg-gradient-to-b from-[#0D0D20] via-[#141428] to-background">
      <HeroSoundToggle isMuted={isMuted} toggleMute={toggleMute} />
      
      <HeroContent 
        isVisible={isVisible}
        title="P2W.FUN"
        subtitle="Pay to win like never before"
        quote="Where wealth equals worth, digitally."
        statusTag="BETA"
      />
    </section>
  );
};

export default RoyalHero;
