
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Crown, Globe, Image, KeyRound, FileText, Code } from 'lucide-react';
import { useToastContext } from '@/contexts/ToastContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';

interface SeoSettingsProps {
  onSave?: (seoData: SeoData) => void;
  initialData?: SeoData;
}

export interface SeoData {
  title: string;
  description: string;
  keywords: string;
  ogImage: string;
  favicon: string;
  appleTouchIcon: string;
  structuredData: string;
  canonicalUrl: string;
}

const defaultSeoData: SeoData = {
  title: "SpendThrone | The Ultimate Pay-to-Win Social Experiment",
  description: "A satirical pay-to-win social experiment where your rank is determined solely by how much you spend. Climb the leaderboard with your wallet!",
  keywords: "pay to win, satire, social experiment, digital nobility, online status, throne game, spending competition, digital status, web3 parody, wealth ranking",
  ogImage: "/og-image.jpg",
  favicon: "/favicon.svg",
  appleTouchIcon: "/apple-touch-icon.png",
  structuredData: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "SpendThrone",
    "description": "A satirical pay-to-win social experiment where your rank is determined solely by how much you spend.",
    "url": "https://spendthrone.com"
  }, null, 2),
  canonicalUrl: "https://spendthrone.com"
};

const SeoSettings: React.FC<SeoSettingsProps> = ({ onSave, initialData = defaultSeoData }) => {
  const [seoData, setSeoData] = useState<SeoData>(initialData);
  const [activeTab, setActiveTab] = useState<string>("basic");
  const { addToast } = useToastContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setSeoData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (onSave) {
      onSave(seoData);
    }
    
    addToast({
      title: "SEO Settings Saved",
      description: "Your SEO settings have been updated successfully.",
      duration: 3000,
    });
    
    // In a real application, here you would update the meta tags dynamically
    document.title = seoData.title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', seoData.description);
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', seoData.keywords);
    }
    
    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', seoData.canonicalUrl);
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      canonicalLink.setAttribute('href', seoData.canonicalUrl);
      document.head.appendChild(canonicalLink);
    }
    
    // Update structured data
    try {
      const structuredDataScript = document.querySelector('script[type="application/ld+json"]');
      if (structuredDataScript) {
        structuredDataScript.textContent = seoData.structuredData;
      } else {
        const newScript = document.createElement('script');
        newScript.setAttribute('type', 'application/ld+json');
        newScript.textContent = seoData.structuredData;
        document.head.appendChild(newScript);
      }
    } catch (error) {
      console.error('Error updating structured data:', error);
    }
  };

  return (
    <Card className="glass-morphism border-royal-gold/20">
      <CardHeader className="pb-3">
        <div className="flex items-center">
          <Globe className="h-5 w-5 text-royal-gold mr-2" aria-hidden="true" />
          <CardTitle>SEO & Branding Settings</CardTitle>
        </div>
        <CardDescription>
          Customize your SpendThrone site's appearance in search results and social media
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-4 mb-4 glass-morphism bg-transparent">
            <TabsTrigger value="basic" className="data-[state=active]:bg-royal-gold/10">
              <KeyRound className="h-4 w-4 mr-2" aria-hidden="true" /> Basic SEO
            </TabsTrigger>
            <TabsTrigger value="social" className="data-[state=active]:bg-royal-gold/10">
              <Crown className="h-4 w-4 mr-2" aria-hidden="true" /> Social Media
            </TabsTrigger>
            <TabsTrigger value="icons" className="data-[state=active]:bg-royal-gold/10">
              <Image className="h-4 w-4 mr-2" aria-hidden="true" /> Icons & Images
            </TabsTrigger>
            <TabsTrigger value="advanced" className="data-[state=active]:bg-royal-gold/10">
              <Code className="h-4 w-4 mr-2" aria-hidden="true" /> Advanced SEO
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="basic" className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <div className="space-y-2">
                <Label htmlFor="title">Site Title</Label>
                <Input
                  id="title"
                  name="title"
                  value={seoData.title}
                  onChange={handleChange}
                  className="glass-morphism border-white/10"
                  placeholder="SpendThrone - Where Your Wallet Determines Your Worth"
                />
                <p className="text-xs text-white/50">{seoData.title.length}/60 characters recommended</p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Meta Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={seoData.description}
                  onChange={handleChange}
                  className="glass-morphism border-white/10 min-h-[80px]"
                  placeholder="A satirical pay-to-win social experiment where your rank is determined solely by how much you spend."
                />
                <p className="text-xs text-white/50">{seoData.description.length}/160 characters recommended</p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="keywords">Keywords (comma separated)</Label>
                <Input
                  id="keywords"
                  name="keywords"
                  value={seoData.keywords}
                  onChange={handleChange}
                  className="glass-morphism border-white/10"
                  placeholder="pay to win, satire, social experiment, digital nobility"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="canonicalUrl">Canonical URL</Label>
                <Input
                  id="canonicalUrl"
                  name="canonicalUrl"
                  value={seoData.canonicalUrl}
                  onChange={handleChange}
                  className="glass-morphism border-white/10"
                  placeholder="https://spendthrone.com"
                />
                <p className="text-xs text-white/50">The official URL to use for SEO</p>
              </div>
            </motion.div>
          </TabsContent>
          
          <TabsContent value="social" className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <div className="p-4 bg-black/20 rounded-lg border border-white/10">
                <div className="flex items-center mb-3">
                  <FileText className="h-4 w-4 text-royal-gold mr-2" aria-hidden="true" />
                  <h3 className="text-sm font-medium">Social Media Preview</h3>
                </div>
                
                <div className="rounded-md overflow-hidden border border-white/10 mb-3">
                  <div className="aspect-video bg-gray-800 flex items-center justify-center relative">
                    {seoData.ogImage ? (
                      <img 
                        src={seoData.ogImage} 
                        alt="Open Graph preview for social media sharing" 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = 'https://placehold.co/1200x630/0D0D20/D4AF37?text=SpendThrone';
                        }}
                      />
                    ) : (
                      <div className="text-white/50 text-sm">No image preview available</div>
                    )}
                  </div>
                  <div className="p-3 bg-gray-900">
                    <div className="text-sm font-medium truncate">{seoData.title}</div>
                    <div className="text-xs text-white/70 mt-1 line-clamp-2">{seoData.description}</div>
                    <div className="text-xs text-royal-gold/70 mt-1">spendthrone.com</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="ogImage">Open Graph Image URL</Label>
                <Input
                  id="ogImage"
                  name="ogImage"
                  value={seoData.ogImage}
                  onChange={handleChange}
                  className="glass-morphism border-white/10"
                  placeholder="/og-image.jpg"
                />
                <p className="text-xs text-white/50">Recommended size: 1200x630 pixels</p>
              </div>
            </motion.div>
          </TabsContent>
          
          <TabsContent value="icons" className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-black/20 rounded-lg border border-white/10 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-lg overflow-hidden mb-2 bg-gray-800 flex items-center justify-center">
                    {seoData.favicon ? (
                      <img 
                        src={seoData.favicon} 
                        alt="Favicon preview" 
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.currentTarget.src = 'https://placehold.co/64/0D0D20/D4AF37?text=ST';
                        }}
                      />
                    ) : (
                      <div className="text-white/50 text-xs">No preview</div>
                    )}
                  </div>
                  <span className="text-xs text-white/70">Favicon</span>
                </div>
                
                <div className="p-4 bg-black/20 rounded-lg border border-white/10 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-2 bg-gray-800 flex items-center justify-center">
                    {seoData.appleTouchIcon ? (
                      <img 
                        src={seoData.appleTouchIcon} 
                        alt="Apple Touch Icon preview" 
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.currentTarget.src = 'https://placehold.co/180/0D0D20/D4AF37?text=ST';
                        }}
                      />
                    ) : (
                      <div className="text-white/50 text-xs">No preview</div>
                    )}
                  </div>
                  <span className="text-xs text-white/70">Apple Touch</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="favicon">Favicon URL</Label>
                <Input
                  id="favicon"
                  name="favicon"
                  value={seoData.favicon}
                  onChange={handleChange}
                  className="glass-morphism border-white/10"
                  placeholder="/favicon.svg"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="appleTouchIcon">Apple Touch Icon URL</Label>
                <Input
                  id="appleTouchIcon"
                  name="appleTouchIcon"
                  value={seoData.appleTouchIcon}
                  onChange={handleChange}
                  className="glass-morphism border-white/10"
                  placeholder="/apple-touch-icon.png"
                />
              </div>
            </motion.div>
          </TabsContent>
          
          <TabsContent value="advanced" className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <div className="space-y-2">
                <Label htmlFor="structuredData">Structured Data (JSON-LD)</Label>
                <Textarea
                  id="structuredData"
                  name="structuredData"
                  value={seoData.structuredData}
                  onChange={handleChange}
                  className="glass-morphism border-white/10 font-mono text-sm"
                  rows={10}
                  placeholder='{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "SpendThrone",
  "url": "https://spendthrone.com"
}'
                />
                <p className="text-xs text-white/50">
                  Structured data in JSON-LD format for rich search results (Schema.org)
                </p>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </CardContent>
      
      <CardFooter>
        <Button 
          onClick={handleSave}
          className="bg-royal-gold hover:bg-royal-gold/90 text-black w-full"
        >
          <Crown className="h-4 w-4 mr-2" aria-hidden="true" />
          Save SEO Settings
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SeoSettings;
