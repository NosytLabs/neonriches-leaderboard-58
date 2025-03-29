
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Palette, Type, Image, Crown, Coins } from 'lucide-react';
import SpendThroneLogo from './SpendThroneLogo';
import { cn } from '@/lib/utils';

const ColorSwatch = ({ color, name, hex }: { color: string; name: string; hex: string }) => (
  <div className="flex flex-col items-center">
    <div 
      className={`w-20 h-20 rounded-md mb-2 ${color} shadow-md`}
      style={{ backgroundColor: hex }}
    ></div>
    <div className="text-sm font-medium">{name}</div>
    <div className="text-xs text-muted-foreground">{hex}</div>
  </div>
);

const BrandKit: React.FC = () => {
  return (
    <Tabs defaultValue="colors">
      <TabsList className="grid grid-cols-4 mb-8">
        <TabsTrigger value="colors" className="flex items-center space-x-2">
          <Palette className="h-4 w-4" />
          <span>Colors</span>
        </TabsTrigger>
        <TabsTrigger value="typography" className="flex items-center space-x-2">
          <Type className="h-4 w-4" />
          <span>Typography</span>
        </TabsTrigger>
        <TabsTrigger value="logos" className="flex items-center space-x-2">
          <Crown className="h-4 w-4" />
          <span>Logos</span>
        </TabsTrigger>
        <TabsTrigger value="assets" className="flex items-center space-x-2">
          <Image className="h-4 w-4" />
          <span>Assets</span>
        </TabsTrigger>
      </TabsList>
      
      {/* Colors Tab */}
      <TabsContent value="colors" className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Primary Royal Colors</CardTitle>
            <CardDescription>The core colors that represent the SpendThrone brand</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              <ColorSwatch color="bg-royal-gold" name="Royal Gold" hex="#D4AF37" />
              <ColorSwatch color="bg-royal-crimson" name="Royal Crimson" hex="#DC143C" />
              <ColorSwatch color="bg-royal-navy" name="Royal Navy" hex="#000080" />
              <ColorSwatch color="bg-royal-purple" name="Royal Purple" hex="#4A148C" />
              <ColorSwatch color="bg-royal-emerald" name="Royal Emerald" hex="#046307" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Background Colors</CardTitle>
            <CardDescription>Dark theme colors for application backgrounds</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <ColorSwatch color="bg-bg-dark" name="Dark Base" hex="#0F0F1A" />
              <ColorSwatch color="bg-bg-dark-lighter" name="Dark Lighter" hex="#1A1A2E" />
              <ColorSwatch color="bg-bg-dark-lightest" name="Dark Lightest" hex="#25253A" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Team Colors</CardTitle>
            <CardDescription>Colors representing the three competing teams</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-6">
              <ColorSwatch color="bg-team-red" name="Team Red" hex="#DC143C" />
              <ColorSwatch color="bg-team-green" name="Team Green" hex="#046307" />
              <ColorSwatch color="bg-team-blue" name="Team Blue" hex="#000080" />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      {/* Typography Tab */}
      <TabsContent value="typography" className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Brand Fonts</CardTitle>
            <CardDescription>Typography standards for SpendThrone</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Cinzel - Primary Display Font</h3>
              <div className="glass-morphism border-white/10 p-4 rounded">
                <p className="font-serif text-4xl" style={{ fontFamily: 'Cinzel, serif' }}>SpendThrone</p>
                <p className="font-serif text-2xl" style={{ fontFamily: 'Cinzel, serif' }}>Where your wealth determines your worth</p>
                <p className="font-serif text-xl mt-2" style={{ fontFamily: 'Cinzel, serif' }}>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                <p className="font-serif text-lg" style={{ fontFamily: 'Cinzel, serif' }}>abcdefghijklmnopqrstuvwxyz</p>
                <p className="font-serif text-lg" style={{ fontFamily: 'Cinzel, serif' }}>0123456789</p>
              </div>
              <p className="text-sm text-white/70 mt-2">Used for headings, titles, and royal proclamations.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Inter - Primary UI Font</h3>
              <div className="glass-morphism border-white/10 p-4 rounded">
                <p className="text-2xl">SpendThrone</p>
                <p className="text-xl">Where your wealth determines your worth</p>
                <p className="text-lg mt-2">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                <p className="text-base">abcdefghijklmnopqrstuvwxyz</p>
                <p className="text-base">0123456789</p>
              </div>
              <p className="text-sm text-white/70 mt-2">Used for body text, UI elements, and general content.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Font Usage Guidelines</h3>
              <ul className="list-disc list-inside text-white/70 space-y-1">
                <li>Use Cinzel for all headings, hero text, and royal proclamations</li>
                <li>Use Inter for all body text, UI elements, buttons, and general content</li>
                <li>Maintain a clear hierarchy with consistent font sizes</li>
                <li>Use font weights appropriately: bold for emphasis, regular for general text</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      {/* Logos Tab */}
      <TabsContent value="logos" className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Logo Variants</CardTitle>
            <CardDescription>Official SpendThrone logo in different formats</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Full Logo</h3>
              <div className="glass-morphism border-white/10 p-6 rounded-lg flex justify-center">
                <SpendThroneLogo variant="full" className="w-full max-w-2xl" />
              </div>
              <div className="flex justify-end mt-4">
                <Button className="flex items-center">
                  <Download className="mr-2 h-4 w-4" />
                  Download SVG
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Compact Logo</h3>
              <div className="glass-morphism border-white/10 p-6 rounded-lg flex justify-center">
                <SpendThroneLogo variant="compact" className="w-full max-w-md" />
              </div>
              <div className="flex justify-end mt-4">
                <Button className="flex items-center">
                  <Download className="mr-2 h-4 w-4" />
                  Download SVG
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Icon Only</h3>
              <div className="glass-morphism border-white/10 p-6 rounded-lg flex justify-center">
                <SpendThroneLogo variant="icon" className="w-32 h-32" />
              </div>
              <div className="flex justify-end mt-4">
                <Button className="flex items-center">
                  <Download className="mr-2 h-4 w-4" />
                  Download SVG
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Logo Usage Guidelines</h3>
              <ul className="list-disc list-inside text-white/70 space-y-1">
                <li>Always maintain proper clearance around the logo</li>
                <li>Do not distort, rotate, or alter the logo colors</li>
                <li>Use the appropriate logo variant based on available space</li>
                <li>The crown icon should always remain proportional to the throne</li>
                <li>When using on dark backgrounds, maintain the original colors</li>
                <li>For light backgrounds, use the dark variant (available on request)</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      {/* Assets Tab */}
      <TabsContent value="assets" className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Brand Assets</CardTitle>
            <CardDescription>Supplementary visual elements for the SpendThrone brand</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Icons</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="glass-morphism border-white/10 p-4 rounded-lg flex flex-col items-center">
                  <Crown className="h-12 w-12 text-royal-gold mb-2" />
                  <span className="text-sm">Crown</span>
                </div>
                <div className="glass-morphism border-white/10 p-4 rounded-lg flex flex-col items-center">
                  <Coins className="h-12 w-12 text-royal-gold mb-2" />
                  <span className="text-sm">Coins</span>
                </div>
                <div className="glass-morphism border-white/10 p-4 rounded-lg flex flex-col items-center">
                  <div className="h-12 w-12 text-royal-crimson mb-2 flex items-center justify-center text-3xl">
                    🏆
                  </div>
                  <span className="text-sm">Trophy</span>
                </div>
                <div className="glass-morphism border-white/10 p-4 rounded-lg flex flex-col items-center">
                  <div className="h-12 w-12 text-royal-navy mb-2 flex items-center justify-center text-3xl">
                    🛡️
                  </div>
                  <span className="text-sm">Shield</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Social Media Assets</h3>
              <div className="glass-morphism border-white/10 p-4 rounded-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-medium mb-2">Profile Picture</h4>
                    <div className="aspect-square w-full max-w-[150px] bg-bg-dark rounded-md flex items-center justify-center">
                      <SpendThroneLogo variant="icon" className="w-20 h-20" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-2">Cover Image</h4>
                    <div className="aspect-[16/6] w-full bg-bg-dark rounded-md flex items-center justify-center">
                      <SpendThroneLogo variant="compact" className="h-8" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Downloads</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button className="flex items-center justify-center h-auto py-3" variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  <div className="text-left">
                    <div className="text-sm font-medium">Brand Assets Package</div>
                    <div className="text-xs text-white/70">All logos, icons, and guidelines (ZIP)</div>
                  </div>
                </Button>
                
                <Button className="flex items-center justify-center h-auto py-3" variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  <div className="text-left">
                    <div className="text-sm font-medium">Social Media Kit</div>
                    <div className="text-xs text-white/70">Templates for all major platforms (ZIP)</div>
                  </div>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default BrandKit;
