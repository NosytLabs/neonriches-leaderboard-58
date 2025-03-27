
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Leaderboard from '@/components/Leaderboard';
import TeamSection from '@/components/TeamSection';
import RoyalFeatures from '@/components/RoyalFeatures';
import ProfilePreview from '@/components/ProfilePreview';
import Footer from '@/components/Footer';

const Index = () => {
  // Add smooth entrance animation for page elements
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Leaderboard />
        <TeamSection />
        <RoyalFeatures />
        <ProfilePreview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
