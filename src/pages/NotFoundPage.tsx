
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Crown } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <MainLayout>
      <div className="container flex flex-col items-center justify-center min-h-[70vh] px-4">
        <Card className="max-w-md w-full glass-morphism border-white/10">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Crown className="h-16 w-16 text-royal-gold" />
            </div>
            <CardTitle className="text-3xl">Royal Page Not Found</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground">
              The noble page you seek does not exist in this kingdom. Perhaps it has been banished or never existed at all.
            </p>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button className="w-full" onClick={() => navigate('/')}>
              Return to the Throne Room
            </Button>
            <Button variant="outline" className="w-full" onClick={() => navigate(-1)}>
              Return to Previous Page
            </Button>
          </CardFooter>
        </Card>
      </div>
    </MainLayout>
  );
};

export default NotFoundPage;
