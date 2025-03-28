
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export const ProfileLoader = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8 pt-24">
        <div className="flex items-center justify-center h-64">
          <div className="h-12 w-12 border-4 border-t-transparent border-royal-gold rounded-full animate-spin"></div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export const ProfileNotFound = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8 pt-24">
        <Card className="max-w-lg mx-auto">
          <CardContent className="p-8">
            <div className="text-center space-y-4">
              <User size={64} className="mx-auto text-white/30" />
              <h1 className="text-2xl font-bold">Profile Not Found</h1>
              <p className="text-white/60">
                The profile you're looking for doesn't exist or may have been removed.
              </p>
              <Button onClick={() => navigate('/')}>
                Return to Homepage
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};
