
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useAuth } from '@/contexts/auth';
import CertificateOfNobility from '@/components/certificates/CertificateOfNobility';

const Certificate: React.FC = () => {
  const { user } = useAuth();
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <title>Certificate of Nobility | SpendThrone</title>
      
      <Header />
      
      <main className="container mx-auto px-4 py-10 pt-24">
        {user ? (
          <CertificateOfNobility user={user} />
        ) : (
          <div className="text-center py-10">
            <h2 className="text-2xl font-bold mb-4">Please log in to view your certificate</h2>
            <p>Your royal certificate awaits your authentication.</p>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Certificate;
