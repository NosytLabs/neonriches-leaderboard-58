
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Timeline } from '@/components/ui/timeline';

const HistoryPage: React.FC = () => {
  const historyItems = [
    {
      year: "Ancient Egypt",
      title: "Royal Tombs & Pyramids",
      description: "Egyptian pharaohs built massive pyramid tombs filled with treasures to showcase their status and prepare for the afterlife."
    },
    {
      year: "Ancient Rome",
      title: "Bread and Circuses",
      description: "Roman elites would host lavish public games and distribute food to gain popularity and display their wealth."
    },
    {
      year: "Middle Ages",
      title: "Sumptuary Laws",
      description: "Laws dictated what different social classes could wear, as clothing became a key status symbol."
    },
    {
      year: "Renaissance",
      title: "Patronage of the Arts",
      description: "Wealthy families like the Medicis sponsored artists to demonstrate their cultural sophistication and power."
    },
    {
      year: "18th Century",
      title: "Palace of Versailles",
      description: "Louis XIV's opulent palace was designed specifically to showcase royal power and wealth."
    },
    {
      year: "19th Century",
      title: "The Gilded Age",
      description: "American industrialists built massive mansions and hosted extravagant parties to establish social standing."
    },
    {
      year: "20th Century",
      title: "Luxury Brands Emerge",
      description: "Designer labels became the new way to signal wealth and status across social classes."
    },
    {
      year: "Early 2000s",
      title: "Reality TV Wealth",
      description: "Shows like 'MTV Cribs' and 'The Real Housewives' turned wealth display into entertainment."
    },
    {
      year: "2010s",
      title: "Social Media Status",
      description: "Instagram and other platforms became the new venue for showcasing luxury lifestyles."
    },
    {
      year: "2020s",
      title: "Digital Status Symbols",
      description: "NFTs, virtual real estate, and digital goods became new ways to display wealth online."
    },
    {
      year: "Present Day",
      title: "SpendThrone Era",
      description: "Status-seeking comes full circle with platforms that directly quantify and rank spending behavior."
    }
  ];

  return (
    <MainLayout>
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Status Through History</h1>
            <p className="text-lg text-white/70">
              The evolution of how humans have displayed wealth and status across civilizations
            </p>
          </div>
          
          <Card className="glass-morphism border-white/10 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Historical Context</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none">
              <p>
                Throughout human history, people have found ways to display their wealth and status. From ancient 
                royalty adorned in precious metals to modern displays of luxury cars and designer fashion, the 
                specific symbols have changed, but the underlying motivation remains consistent.
              </p>
              <p>
                SpendThrone stands as the latest evolution in this timeless human behavior — now digitized, 
                gamified, and more transparent than ever before. Below we trace the key developments in status 
                display throughout human civilization.
              </p>
            </CardContent>
          </Card>
          
          <Timeline items={historyItems} />
          
          <Card className="glass-morphism border-white/10 mt-12">
            <CardHeader>
              <CardTitle className="text-2xl">The Future of Status</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none">
              <p>
                As we move further into the digital age, status symbols continue to evolve. Virtual goods, digital 
                real estate, and online presence are becoming increasingly important markers of status. SpendThrone 
                represents both a satirical commentary on this evolution and a potential glimpse of where it might lead.
              </p>
              <p>
                What might the next evolution of status display look like? Perhaps entirely virtual identities with 
                spending power that exceeds physical world limitations, or new metrics beyond simple spending that 
                quantify one's position in society.
              </p>
              <p>
                Whatever form it takes, human desire for status recognition seems to be a constant throughout history, 
                even as the symbols and systems change.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default HistoryPage;
