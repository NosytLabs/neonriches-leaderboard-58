
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Copy, Palette, FileImage, Type, Crown, CoinsStacked } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import SpendThroneLogo from '@/components/brand/SpendThroneLogo';

const BrandKit: React.FC = () => {
  const { toast } = useToast();
  
  // Brand colors
  const primaryColors = [
    { name: 'Royal Gold', hex: '#D4AF37', var: '--royal-gold' },
    { name: 'Royal Crimson', hex: '#9B2335', var: '--royal-crimson' },
    { name: 'Royal Navy', hex: '#1F4788', var: '--royal-navy' },
    { name: 'Royal Purple', hex: '#7851A9', var: '--royal-purple' },
  ];
  
  const secondaryColors = [
    { name: 'Dark Background', hex: '#0F0F1A', var: '--bg-dark' },
    { name: 'Dark Background Lighter', hex: '#1A1A2E', var: '--bg-dark-lighter' },
    { name: 'Royal Emerald', hex: '#2C784A', var: '--royal-emerald' },
    { name: 'Royal Velvet', hex: '#430C5E', var: '--royal-velvet' },
    { name: 'Royal Mahogany', hex: '#420D09', var: '--royal-mahogany' },
    { name: 'Parchment', hex: '#F5E6CA', var: '--royal-parchment' },
  ];
  
  const teamColors = [
    { name: 'Team Red', hex: '#9B2335', var: '--team-red' },
    { name: 'Team Green', hex: '#2C784A', var: '--team-green' },
    { name: 'Team Blue', hex: '#1F4788', var: '--team-blue' },
  ];
  
  const tierColors = [
    { name: 'Crab Tier', hex: '#CD7F32', var: '--tier-crab' },
    { name: 'Octopus Tier', hex: '#800080', var: '--tier-octopus' },
    { name: 'Fish Tier', hex: '#4682B4', var: '--tier-fish' },
    { name: 'Dolphin Tier', hex: '#1F4788', var: '--tier-dolphin' },
    { name: 'Shark Tier', hex: '#9B2335', var: '--tier-shark' },
    { name: 'Whale Tier', hex: '#7851A9', var: '--tier-whale' },
  ];
  
  // Typography
  const fonts = [
    { name: 'Primary', family: 'Inter', type: 'sans-serif', usage: 'Main body text and UI elements' },
    { name: 'Medieval', family: 'Cinzel', type: 'serif', usage: 'Headers and royal titles' },
    { name: 'Royal Script', family: 'Playfair Display', type: 'serif', usage: 'Elegant accents and quotes' },
    { name: 'Medieval Text', family: 'Crimson Text', type: 'serif', usage: 'Extended reading passages and paragraphs' },
  ];
  
  // Copy to clipboard function
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${text} has been copied to clipboard`,
    });
  };
  
  // Generate JSON for download
  const generateBrandKitJson = () => {
    const brandKit = {
      colors: {
        primary: primaryColors,
        secondary: secondaryColors,
        team: teamColors,
        tier: tierColors,
      },
      typography: fonts,
      logo: {
        primary: "SpendThrone Crown and Throne",
        alternatives: ["Crown Only", "Wordmark", "Icon Only"],
        usage: "Always maintain clear space around the logo equal to the height of the crown element",
      },
      tone: {
        voice: "Satirical, Medieval, Royal, Materialistic",
        examples: [
          "Where your wealth determines your worth",
          "Pay thy way to glory",
          "Flaunt thy riches, gain thy status",
        ]
      }
    };
    
    return JSON.stringify(brandKit, null, 2);
  };
  
  // Download brand kit
  const downloadBrandKit = () => {
    const element = document.createElement("a");
    const file = new Blob([generateBrandKitJson()], {type: 'application/json'});
    element.href = URL.createObjectURL(file);
    element.download = "spendthrone-brand-kit.json";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    
    toast({
      title: "Brand Kit Downloaded",
      description: "The SpendThrone brand kit has been downloaded successfully.",
    });
  };
  
  return (
    <div className="container mx-auto py-8 max-w-6xl animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-medieval royal-gradient">SpendThrone Brand Kit</h1>
        <Button onClick={downloadBrandKit} className="royal-button-enhanced">
          <Download className="mr-2 h-4 w-4" />
          Download Brand Kit
        </Button>
      </div>
      
      <Tabs defaultValue="colors" className="w-full">
        <TabsList className="glass-morphism mb-6">
          <TabsTrigger value="colors" className="flex items-center">
            <Palette className="mr-2 h-4 w-4" /> 
            Colors
          </TabsTrigger>
          <TabsTrigger value="logo" className="flex items-center">
            <FileImage className="mr-2 h-4 w-4" /> 
            Logo
          </TabsTrigger>
          <TabsTrigger value="typography" className="flex items-center">
            <Type className="mr-2 h-4 w-4" /> 
            Typography
          </TabsTrigger>
          <TabsTrigger value="tone" className="flex items-center">
            <Crown className="mr-2 h-4 w-4" /> 
            Tone & Voice
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="colors" className="animate-fade-in">
          <Card className="glass-morphism border-royal-gold/20 mb-6">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Palette className="mr-2 h-5 w-5 text-royal-gold" />
                Primary Brand Colors
              </CardTitle>
              <CardDescription>
                These core colors form the foundation of the SpendThrone visual identity
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {primaryColors.map((color) => (
                  <div 
                    key={color.name} 
                    className="p-4 rounded-lg border border-white/10 hover:border-white/20 transition-all"
                    onClick={() => copyToClipboard(color.hex)}
                  >
                    <div 
                      className="w-full h-20 rounded-md mb-2 cursor-pointer hover:scale-105 transition-transform"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold">{color.name}</p>
                        <p className="text-sm text-white/70 font-mono">{color.hex}</p>
                      </div>
                      <Button size="sm" variant="ghost" onClick={() => copyToClipboard(color.hex)}>
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="glass-morphism border-white/10 mb-6">
            <CardHeader>
              <CardTitle>Secondary Colors</CardTitle>
              <CardDescription>Supporting colors for backgrounds and accents</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {secondaryColors.map((color) => (
                  <div 
                    key={color.name} 
                    className="p-4 rounded-lg border border-white/10 hover:border-white/20 transition-all"
                    onClick={() => copyToClipboard(color.hex)}
                  >
                    <div 
                      className="w-full h-16 rounded-md mb-2 cursor-pointer hover:scale-105 transition-transform"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold">{color.name}</p>
                        <p className="text-sm text-white/70 font-mono">{color.hex}</p>
                      </div>
                      <Button size="sm" variant="ghost" onClick={() => copyToClipboard(color.hex)}>
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="glass-morphism border-white/10">
              <CardHeader>
                <CardTitle>Team Colors</CardTitle>
                <CardDescription>Colors for the three competing houses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {teamColors.map((color) => (
                    <div 
                      key={color.name} 
                      className="p-4 rounded-lg border border-white/10 hover:border-white/20 transition-all flex items-center"
                      onClick={() => copyToClipboard(color.hex)}
                    >
                      <div 
                        className="w-12 h-12 rounded-full mr-4 cursor-pointer hover:scale-105 transition-transform"
                        style={{ backgroundColor: color.hex }}
                      />
                      <div className="flex-1">
                        <p className="font-semibold">{color.name}</p>
                        <p className="text-sm text-white/70 font-mono">{color.hex}</p>
                      </div>
                      <Button size="sm" variant="ghost" onClick={() => copyToClipboard(color.hex)}>
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-morphism border-white/10">
              <CardHeader>
                <CardTitle>Tier Colors</CardTitle>
                <CardDescription>Colors representing spending tiers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {tierColors.map((color) => (
                    <div 
                      key={color.name} 
                      className="p-3 rounded-lg border border-white/10 hover:border-white/20 transition-all flex items-center"
                      onClick={() => copyToClipboard(color.hex)}
                    >
                      <div 
                        className="w-10 h-10 rounded-full mr-3 cursor-pointer hover:scale-105 transition-transform"
                        style={{ backgroundColor: color.hex }}
                      />
                      <div className="flex-1">
                        <p className="font-semibold">{color.name}</p>
                        <p className="text-sm text-white/70 font-mono">{color.hex}</p>
                      </div>
                      <Button size="sm" variant="ghost" onClick={() => copyToClipboard(color.hex)}>
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="logo" className="animate-fade-in">
          <Card className="glass-morphism border-royal-gold/20 mb-6">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileImage className="mr-2 h-5 w-5 text-royal-gold" />
                Logo Variations
              </CardTitle>
              <CardDescription>
                The official SpendThrone logo and its variations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6 p-8 bg-gradient-to-r from-bg-dark to-bg-dark-lightest rounded-lg flex justify-center items-center">
                <SpendThroneLogo className="w-full max-w-lg" />
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Logo Symbolism</h3>
                <p className="text-white/80 leading-relaxed">
                  The SpendThrone logo represents the core values of our satirical pay-to-win platform. The ornate throne symbolizes 
                  status and prestige, while the crown represents the ultimate achievement. Gold coins surrounding the throne 
                  illustrate that wealth equals power in our kingdom. The skull motif underneath the throne is a subtle reminder 
                  of the fleeting nature of material wealth - a satirical nod to those who value digital status above all else.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Logo Usage</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 bg-royal-gold/20 rounded-full p-0.5 text-royal-gold">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-white/80">Always maintain clear space around the logo</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 bg-royal-gold/20 rounded-full p-0.5 text-royal-gold">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-white/80">Use the full-color version on dark backgrounds</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 bg-royal-gold/20 rounded-full p-0.5 text-royal-gold">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-white/80">The monochrome version works well for smaller applications</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 bg-royal-gold/20 rounded-full p-0.5 text-royal-gold">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-white/80">Never stretch, distort, or alter the logo's proportions</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Minimum Size</h3>
                  <div className="bg-bg-dark-lighter rounded-lg p-4 flex flex-col items-center">
                    <SpendThroneLogo className="w-24 mb-2" />
                    <p className="text-sm text-white/70">Minimum width: 120px for digital</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="typography" className="animate-fade-in">
          <Card className="glass-morphism border-royal-gold/20 mb-6">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Type className="mr-2 h-5 w-5 text-royal-gold" />
                Typography
              </CardTitle>
              <CardDescription>
                Fonts that create the SpendThrone royal experience
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {fonts.map((font) => (
                  <div key={font.name} className="border-b border-white/10 pb-6 last:border-0">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold">{font.name} Font</h3>
                        <p className="text-white/70">{font.family}, {font.type}</p>
                      </div>
                      <p className="text-sm text-white/50 bg-white/5 px-3 py-1 rounded-full mt-2 md:mt-0">
                        {font.usage}
                      </p>
                    </div>
                    
                    <div 
                      className="p-4 rounded-lg bg-white/5"
                      style={{ fontFamily: font.family }}
                    >
                      {font.name === 'Primary' && (
                        <>
                          <p className="text-3xl mb-2">Inter - Main interface text</p>
                          <p className="mb-4">The quick brown fox jumps over the lazy dog. 1234567890</p>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center">
                            <div className="p-2"><span className="font-light">Light</span></div>
                            <div className="p-2"><span className="font-normal">Regular</span></div>
                            <div className="p-2"><span className="font-medium">Medium</span></div>
                            <div className="p-2"><span className="font-bold">Bold</span></div>
                          </div>
                        </>
                      )}
                      
                      {font.name === 'Medieval' && (
                        <>
                          <p className="text-3xl mb-2">Cinzel - Royal titles</p>
                          <p className="mb-4">The quick brown fox jumps over the lazy dog. 1234567890</p>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-center">
                            <div className="p-2"><span className="font-normal">Regular</span></div>
                            <div className="p-2"><span className="font-medium">Medium</span></div>
                            <div className="p-2"><span className="font-bold">Bold</span></div>
                          </div>
                        </>
                      )}
                      
                      {font.name === 'Royal Script' && (
                        <>
                          <p className="text-3xl mb-2">Playfair Display - Elegant accents</p>
                          <p className="mb-4">The quick brown fox jumps over the lazy dog. 1234567890</p>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-center">
                            <div className="p-2"><span className="font-normal">Regular</span></div>
                            <div className="p-2"><span className="font-medium">Medium</span></div>
                            <div className="p-2"><span className="font-bold">Bold</span></div>
                          </div>
                        </>
                      )}
                      
                      {font.name === 'Medieval Text' && (
                        <>
                          <p className="text-3xl mb-2">Crimson Text - Body content</p>
                          <p className="mb-4">The quick brown fox jumps over the lazy dog. 1234567890</p>
                          <div className="grid grid-cols-2 gap-2 text-center">
                            <div className="p-2"><span className="font-normal">Regular</span></div>
                            <div className="p-2"><span className="font-bold">Bold</span></div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="tone" className="animate-fade-in">
          <Card className="glass-morphism border-royal-gold/20 mb-6">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Crown className="mr-2 h-5 w-5 text-royal-gold" />
                Tone & Voice
              </CardTitle>
              <CardDescription>
                The satirical brand voice that defines the SpendThrone experience
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Brand Personality</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                      <h4 className="text-lg font-medium royal-gradient mb-2">Satirical & Self-Aware</h4>
                      <p className="text-white/80 leading-relaxed">
                        SpendThrone embraces the absurdity of pay-to-win mechanics with a knowing wink. 
                        The tone is intentionally over-the-top, poking fun at materialism while inviting 
                        users to be in on the joke.
                      </p>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                      <h4 className="text-lg font-medium royal-gradient mb-2">Medievally Regal</h4>
                      <p className="text-white/80 leading-relaxed">
                        Language evokes a medieval royal court with flourishes of aristocratic grandeur.
                        Users are addressed as nobility, with spending portrayed as a path to higher titles 
                        and royal recognition.
                      </p>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                      <h4 className="text-lg font-medium royal-gradient mb-2">Materialistic</h4>
                      <p className="text-white/80 leading-relaxed">
                        The platform celebrates extravagance and conspicuous consumption, 
                        treating digital status symbols with exaggerated importance. The tone 
                        intentionally mimics luxury brand marketing with knowing exaggeration.
                      </p>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                      <h4 className="text-lg font-medium royal-gradient mb-2">Playfully Competitive</h4>
                      <p className="text-white/80 leading-relaxed">
                        Competition between users is framed as a royal tournament or contest for the throne.
                        The tone encourages friendly rivalry while maintaining the satirical edge about 
                        status being purely a function of spending.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Voice Examples</h3>
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg glass-morphism">
                      <div className="flex items-center mb-2">
                        <CoinsStacked className="h-5 w-5 text-royal-gold mr-2" />
                        <h4 className="font-medieval text-lg">CTA Examples</h4>
                      </div>
                      <ul className="space-y-2 text-white/80">
                        <li>"Ascend the ranks with thy gold, noble spender!"</li>
                        <li>"Seize thy place among the elite - spend now!"</li>
                        <li>"Crown thyself with spending glory!"</li>
                        <li>"Rivals outspend thee! Defend thy royal honor!"</li>
                        <li>"Purchase prestige, for what is worth if not measured in gold?"</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 rounded-lg glass-morphism">
                      <div className="flex items-center mb-2">
                        <Crown className="h-5 w-5 text-royal-gold mr-2" />
                        <h4 className="font-medieval text-lg">Accomplishment Messaging</h4>
                      </div>
                      <ul className="space-y-2 text-white/80">
                        <li>"The realm acknowledges thy magnificent tribute!"</li>
                        <li>"Thy generosity hath elevated thy standing among the nobility!"</li>
                        <li>"Behold! A new contender for the spending throne emerges!"</li>
                        <li>"Thy wealth display hath earned thee new admirers in court!"</li>
                        <li>"With this payment, thy legend grows throughout the kingdom!"</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BrandKit;
