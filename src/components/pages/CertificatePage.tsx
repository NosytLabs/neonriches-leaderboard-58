import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCertificateById } from '@/services/certificateService';
import { UserSettings, UserProfile } from '@/types/user';

const CertificatePage = () => {
  const { id } = useParams<{ id: string }>();
  const [certificate, setCertificate] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchCertificate = async () => {
      if (id) {
        try {
          const data = await getCertificateById(id);
          setCertificate(data);
        } catch (error) {
          console.error("Error fetching certificate:", error);
        } finally {
          setLoading(false);
        }
      }
    };
    
    fetchCertificate();
  }, [id]);
  
  if (loading) {
    return <div>Loading certificate...</div>;
  }
  
  if (!certificate) {
    return <div>Certificate not found</div>;
  }
  
  const userProfile: UserProfile = {
    id: certificate.user.id || "1",
    username: certificate.user.username || "User",
    email: certificate.user.email || "user@example.com",
    displayName: certificate.user.displayName || certificate.user.username,
    rank: certificate.rank || 1,
    amountSpent: certificate.amountSpent || 0,
    walletBalance: 0,
    tier: certificate.user.tier || "basic",
    cosmetics: {
      borders: [],
      colors: [],
      fonts: [],
      emojis: [],
      titles: [],
      backgrounds: [],
      effects: [],
      badges: [],
      themes: [],
    },
    settings: {
      theme: 'dark',
      notifications: true,
      emailNotifications: true,
      soundEffects: true,
      profileVisibility: 'public',
      allowProfileLinks: true,
      showEmailOnProfile: false,
      rankChangeAlerts: true,
      shameAlerts: true,
      newFollowerAlerts: true,
      showRank: true,
      showTeam: true,
      showSpending: true,
      publicProfile: true,
      allowMessages: true,
      darkMode: true,
      language: "en"
    },
    gender: certificate.user.gender,
    profileImage: certificate.user.profileImage,
    bio: certificate.user.bio,
    team: certificate.user.team,
    joinedAt: certificate.user.joinedAt,
    joinDate: certificate.user.joinDate,
    createdAt: certificate.user.joinDate || certificate.user.joinedAt || new Date().toISOString()
  };
  
  return (
    <div>
      <h1>Royal Certificate #{certificate.id}</h1>
      <p>For: {userProfile.username}</p>
      <p>Rank: {userProfile.rank}</p>
      <p>Spending: ${userProfile.amountSpent.toLocaleString()}</p>
    </div>
  );
};

export default CertificatePage;
