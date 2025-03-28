import React, { useState } from 'react';
import { UserProfile } from '@/types/user';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Lock, Crown, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface AppearanceEditorProps {
  user: UserProfile;
}

const AppearanceEditor: React.FC<AppearanceEditorProps> = ({ user }) => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("theme");
  
  const cosmetics = user.cosmetics || {
    borders: [],
    colors: [],
    fonts: [],
    emojis: [],
    titles: [],
    backgrounds: [],
    effects: [],
    badges: [],
    themes: [],
    activeBorder: undefined,
    activeColor: undefined,
    activeFont: undefined,
    activeEmoji: undefined,
    activeTheme: undefined,
    activeBadge: undefined
  };
  
  // Check if user is on the Pro tier or higher
  const isPro = ['pro', 'royal', 'founder', 'whale', 'shark', 'dolphin'].includes(user.tier);
  
  const handleUnlockFeature = () => {
    toast({
      title: "Premium Feature",
      description: "Upgrade to Pro to unlock custom profile appearances!",
    });
  };
  
  const renderProOnlyBadge = () => (
    <div className="absolute top-2 right-2">
      <div className="bg-royal-gold/20 text-royal-gold text-xs px-2 py-1 rounded-full flex items-center">
        <Crown size={12} className="mr-1" />
        Pro Only
      </div>
    </div>
  );
  
  return (
    <div className="space-y-6">
      <div className="glass-morphism border-white/10 p-4 rounded-lg">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="w-full glass-morphism border-white/10 bg-transparent mb-4">
            <TabsTrigger value="theme" className="data-[state=active]:bg-white/10">Theme</TabsTrigger>
            <TabsTrigger value="fonts" className="data-[state=active]:bg-white/10">Fonts</TabsTrigger>
            <TabsTrigger value="effects" className="data-[state=active]:bg-white/10">Effects</TabsTrigger>
            <TabsTrigger value="borders" className="data-[state=active]:bg-white/10">Borders</TabsTrigger>
          </TabsList>
          
          <TabsContent value="theme" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-morphism border-white/10 p-4 rounded-lg relative theme-medieval-court">
                <div className="text-center py-4">
                  <h3 className="font-medieval text-lg">Medieval Court</h3>
                  <p className="text-sm text-white/70">Default Theme</p>
                </div>
                <Button size="sm" variant="outline" className="w-full glass-morphism border-white/10 hover:bg-white/10">
                  Select
                </Button>
              </div>
              
              <div className="glass-morphism border-white/10 p-4 rounded-lg relative theme-digital-kingdom">
                {!isPro && renderProOnlyBadge()}
                <div className="text-center py-4">
                  <h3 className="font-royal-modern text-lg">Digital Kingdom</h3>
                  <p className="text-sm text-white/70">Pro Theme</p>
                </div>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="w-full glass-morphism border-white/10 hover:bg-white/10"
                  disabled={!isPro}
                  onClick={!isPro ? handleUnlockFeature : undefined}
                >
                  {!isPro && <Lock size={12} className="mr-1" />}
                  {isPro ? "Select" : "Unlock"}
                </Button>
              </div>
              
              <div className="glass-morphism border-white/10 p-4 rounded-lg relative theme-crypto-royalty">
                {!isPro && renderProOnlyBadge()}
                <div className="text-center py-4">
                  <h3 className="font-noble-sans text-lg">Crypto Royalty</h3>
                  <p className="text-sm text-white/70">Pro Theme</p>
                </div>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="w-full glass-morphism border-white/10 hover:bg-white/10"
                  disabled={!isPro}
                  onClick={!isPro ? handleUnlockFeature : undefined}
                >
                  {!isPro && <Lock size={12} className="mr-1" />}
                  {isPro ? "Select" : "Unlock"}
                </Button>
              </div>
              
              <div className="glass-morphism border-white/10 p-4 rounded-lg relative theme-founders-hall">
                {!isPro && renderProOnlyBadge()}
                <div className="text-center py-4">
                  <h3 className="font-royal-script text-lg">Founder's Hall</h3>
                  <p className="text-sm text-white/70">Pro Theme</p>
                </div>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="w-full glass-morphism border-white/10 hover:bg-white/10"
                  disabled={!isPro}
                  onClick={!isPro ? handleUnlockFeature : undefined}
                >
                  {!isPro && <Lock size={12} className="mr-1" />}
                  {isPro ? "Select" : "Unlock"}
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="fonts" className="space-y-4">
            <div className="glass-morphism border-white/10 p-4 rounded-lg relative">
              {!isPro && (
                <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm bg-black/40 rounded-lg z-10">
                  <div className="text-center">
                    <Lock size={24} className="mx-auto mb-2 text-white/70" />
                    <h3 className="text-lg font-medium mb-2">Pro Feature</h3>
                    <p className="text-sm text-white/70 mb-3">Unlock custom fonts by upgrading to Pro</p>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="glass-morphism border-white/10 hover:bg-white/10"
                      onClick={handleUnlockFeature}
                    >
                      <Crown size={12} className="mr-1 text-royal-gold" />
                      Upgrade to Pro
                    </Button>
                  </div>
                </div>
              )}
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 border border-white/10 rounded-lg text-center">
                  <p className="font-royal-script">Royal Script</p>
                </div>
                <div className="p-3 border border-white/10 rounded-lg text-center">
                  <p className="font-medieval-blackletter">Medieval</p>
                </div>
                <div className="p-3 border border-white/10 rounded-lg text-center">
                  <p className="font-majestic-serif">Majestic</p>
                </div>
                <div className="p-3 border border-white/10 rounded-lg text-center">
                  <p className="font-digital-kingdom">Digital</p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="effects" className="space-y-4">
            <div className="glass-morphism border-white/10 p-4 rounded-lg relative">
              {!isPro && (
                <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm bg-black/40 rounded-lg z-10">
                  <div className="text-center">
                    <Sparkles size={24} className="mx-auto mb-2 text-royal-gold" />
                    <h3 className="text-lg font-medium mb-2">Pro Feature</h3>
                    <p className="text-sm text-white/70 mb-3">Add special effects to your profile by upgrading to Pro</p>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="glass-morphism border-white/10 hover:bg-white/10"
                      onClick={handleUnlockFeature}
                    >
                      <Crown size={12} className="mr-1 text-royal-gold" />
                      Upgrade to Pro
                    </Button>
                  </div>
                </div>
              )}
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 border border-white/10 rounded-lg text-center effect-golden-shimmer">
                  <p>Golden Shimmer</p>
                </div>
                <div className="p-3 border border-white/10 rounded-lg text-center effect-royal-sparkle">
                  <p>Royal Sparkle</p>
                </div>
                <div className="p-3 border border-white/10 rounded-lg text-center effect-crown-aura">
                  <p>Crown Aura</p>
                </div>
                <div className="p-3 border border-white/10 rounded-lg text-center">
                  <p className="royal-rainbow-text">Rainbow Text</p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="borders" className="space-y-4">
            <div className="glass-morphism border-white/10 p-4 rounded-lg relative">
              {!isPro && (
                <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm bg-black/40 rounded-lg z-10">
                  <div className="text-center">
                    <Lock size={24} className="mx-auto mb-2 text-white/70" />
                    <h3 className="text-lg font-medium mb-2">Pro Feature</h3>
                    <p className="text-sm text-white/70 mb-3">Customize your profile borders by upgrading to Pro</p>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="glass-morphism border-white/10 hover:bg-white/10"
                      onClick={handleUnlockFeature}
                    >
                      <Crown size={12} className="mr-1 text-royal-gold" />
                      Upgrade to Pro
                    </Button>
                  </div>
                </div>
              )}
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 border border-royal-gold/30 rounded-lg text-center">
                  <p>Golden Border</p>
                </div>
                <div className="p-3 border border-royal-purple/30 rounded-lg text-center">
                  <p>Royal Purple</p>
                </div>
                <div className="p-3 border-2 border-dashed border-white/30 rounded-lg text-center">
                  <p>Dashed Border</p>
                </div>
                <div className="p-3 border border-white/10 rounded-lg text-center border-pulse">
                  <p>Pulsing Border</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <div className="text-white/50 text-sm">
        {isPro 
          ? "Pro tier: Fully customize your profile appearance and stand out from the crowd!"
          : "Upgrade to Pro tier to unlock all appearance customization options and make your profile truly royal!"}
      </div>
    </div>
  );
};

export default AppearanceEditor;
