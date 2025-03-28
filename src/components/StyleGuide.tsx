import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import RoyalButton from "@/components/ui/royal-button";
import MedievalIcon from "@/components/ui/medieval-icon";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MedievalIconName } from '@/components/ui/medieval-icon';
import { Crown, Gem, Heart, Shield, Swords, Scroll } from "lucide-react";
import ParchmentTexture from '@/components/ui/parchment-texture';
import MedievalFrame from '@/components/ui/medieval-frame';
import RegalBadge from '@/components/ui/regal-badge';

const iconExamples: MedievalIconName[] = ['crown', 'medal', 'gem', 'heart', 'shield', 'sword', 'scroll', 'castle', 'trophy', 'key', 'coins', 'wallet'];

const StyleGuide: React.FC = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold royal-gradient mb-8">P2W.FUN Style Guide</h1>
      
      <Tabs defaultValue="colors" className="w-full">
        <TabsList className="grid grid-cols-5 mb-8">
          <TabsTrigger value="colors">Colors</TabsTrigger>
          <TabsTrigger value="typography">Typography</TabsTrigger>
          <TabsTrigger value="components">Components</TabsTrigger>
          <TabsTrigger value="animations">Animations</TabsTrigger>
          <TabsTrigger value="utility">Utilities</TabsTrigger>
        </TabsList>
        
        {/* Colors Section */}
        <TabsContent value="colors" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Royal Color Palette</CardTitle>
              <CardDescription>
                Primary colors used throughout the application
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <ColorSwatch name="Royal Gold" variable="--royal-gold" hex="#FFD700" />
                <ColorSwatch name="Royal Gold Bright" variable="--royal-gold-bright" hex="#FFDF00" />
                <ColorSwatch name="Royal Gold Dark" variable="--royal-gold-dark" hex="#D4AF37" />
                <ColorSwatch name="Royal Crimson" variable="--royal-crimson" hex="#9B2335" />
                <ColorSwatch name="Royal Crimson Bright" variable="--royal-crimson-bright" hex="#C41E3A" />
                <ColorSwatch name="Royal Crimson Dark" variable="--royal-crimson-dark" hex="#800020" />
                <ColorSwatch name="Royal Navy" variable="--royal-navy" hex="#000080" />
                <ColorSwatch name="Royal Navy Bright" variable="--royal-navy-bright" hex="#000096" />
                <ColorSwatch name="Royal Navy Dark" variable="--royal-navy-dark" hex="#000064" />
                <ColorSwatch name="Royal Purple" variable="--royal-purple" hex="#4B0082" />
                <ColorSwatch name="Royal Purple Bright" variable="--royal-purple-bright" hex="#6A0DAD" />
                <ColorSwatch name="Royal Purple Dark" variable="--royal-purple-dark" hex="#38006b" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Team Colors</CardTitle>
              <CardDescription>
                Colors representing the three teams
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-6 rounded-lg border-royal-crimson/50 border bg-royal-crimson/20 flex flex-col items-center">
                  <div className="w-16 h-16 bg-royal-crimson rounded-full mb-4"></div>
                  <span className="text-royal-crimson font-bold">Team Red</span>
                  <span className="text-sm opacity-70">var(--royal-crimson)</span>
                </div>
                <div className="p-6 rounded-lg border-royal-gold/50 border bg-royal-gold/20 flex flex-col items-center">
                  <div className="w-16 h-16 bg-royal-gold rounded-full mb-4"></div>
                  <span className="text-royal-gold font-bold">Team Green</span>
                  <span className="text-sm opacity-70">var(--royal-gold)</span>
                </div>
                <div className="p-6 rounded-lg border-royal-navy/50 border bg-royal-navy/20 flex flex-col items-center">
                  <div className="w-16 h-16 bg-royal-navy rounded-full mb-4"></div>
                  <span className="text-royal-navy font-bold">Team Blue</span>
                  <span className="text-sm opacity-70">var(--royal-navy)</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Gradient Examples</CardTitle>
              <CardDescription>
                Gradient styles used throughout the application
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="h-20 rounded-lg p-6 flex items-center justify-center bg-gradient-to-r from-royal-gold/80 to-amber-500/80">
                  <span className="font-bold text-black">Gold Gradient</span>
                </div>
                <div className="h-20 rounded-lg p-6 flex items-center justify-center bg-gradient-to-r from-royal-crimson/80 to-red-500/80">
                  <span className="font-bold text-white">Crimson Gradient</span>
                </div>
                <div className="h-20 rounded-lg p-6 flex items-center justify-center bg-gradient-to-r from-royal-navy/80 to-blue-500/80">
                  <span className="font-bold text-white">Navy Gradient</span>
                </div>
                <div className="h-20 rounded-lg p-6 flex items-center justify-center bg-gradient-to-r from-royal-purple/80 to-purple-500/80">
                  <span className="font-bold text-white">Purple Gradient</span>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-bold mb-4">Text Gradients</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg border border-white/10">
                    <p className="royal-gradient text-xl font-bold">Royal Gradient</p>
                    <p className="text-sm opacity-70 mt-2">class="royal-gradient"</p>
                  </div>
                  <div className="p-4 rounded-lg border border-white/10">
                    <p className="royal-gradient-crimson text-xl font-bold">Crimson Gradient</p>
                    <p className="text-sm opacity-70 mt-2">class="royal-gradient-crimson"</p>
                  </div>
                  <div className="p-4 rounded-lg border border-white/10">
                    <p className="royal-gradient-navy text-xl font-bold">Navy Gradient</p>
                    <p className="text-sm opacity-70 mt-2">class="royal-gradient-navy"</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Typography Section */}
        <TabsContent value="typography" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Typography</CardTitle>
              <CardDescription>
                Font families and text styles
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Font Families</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 rounded-lg border border-white/10">
                      <h4 className="text-sm text-white/70 mb-2">Sans Serif</h4>
                      <p className="text-2xl">The quick brown fox jumps over the lazy dog</p>
                      <p className="text-sm opacity-70 mt-2">font-sans</p>
                    </div>
                    <div className="p-4 rounded-lg border border-white/10">
                      <h4 className="text-sm text-white/70 mb-2">Medieval</h4>
                      <p className="text-2xl font-medieval">The quick brown fox jumps over the lazy dog</p>
                      <p className="text-sm opacity-70 mt-2">font-medieval</p>
                    </div>
                    <div className="p-4 rounded-lg border border-white/10">
                      <h4 className="text-sm text-white/70 mb-2">Medieval Text</h4>
                      <p className="text-2xl font-medieval-text">The quick brown fox jumps over the lazy dog</p>
                      <p className="text-sm opacity-70 mt-2">font-medieval-text</p>
                    </div>
                    <div className="p-4 rounded-lg border border-white/10">
                      <h4 className="text-sm text-white/70 mb-2">Royal Script</h4>
                      <p className="text-2xl font-royal-script">The quick brown fox jumps over the lazy dog</p>
                      <p className="text-sm opacity-70 mt-2">font-royal-script</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Heading Styles</h3>
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg border border-white/10">
                      <h1 className="text-4xl font-bold">Heading 1</h1>
                      <p className="text-sm opacity-70 mt-2">text-4xl font-bold</p>
                    </div>
                    <div className="p-4 rounded-lg border border-white/10">
                      <h2 className="text-3xl font-bold">Heading 2</h2>
                      <p className="text-sm opacity-70 mt-2">text-3xl font-bold</p>
                    </div>
                    <div className="p-4 rounded-lg border border-white/10">
                      <h3 className="text-2xl font-bold">Heading 3</h3>
                      <p className="text-sm opacity-70 mt-2">text-2xl font-bold</p>
                    </div>
                    <div className="p-4 rounded-lg border border-white/10">
                      <h4 className="text-xl font-bold">Heading 4</h4>
                      <p className="text-sm opacity-70 mt-2">text-xl font-bold</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Royal Text Effects</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg border border-white/10">
                      <p className="royal-text text-xl">Royal Text Effect</p>
                      <p className="text-sm opacity-70 mt-2">class="royal-text"</p>
                    </div>
                    <div className="p-4 rounded-lg border border-white/10">
                      <p className="royal-text royal-gradient text-xl">Royal Text with Gradient</p>
                      <p className="text-sm opacity-70 mt-2">class="royal-text royal-gradient"</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Components Section */}
        <TabsContent value="components" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Buttons</CardTitle>
              <CardDescription>
                Button variants available in the application
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-4">Royal Button Variants</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex flex-col items-center gap-2">
                      <RoyalButton variant="royalGold">Gold Button</RoyalButton>
                      <span className="text-sm opacity-70">variant="royalGold"</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <RoyalButton variant="royalCrimson">Crimson Button</RoyalButton>
                      <span className="text-sm opacity-70">variant="royalCrimson"</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <RoyalButton variant="royalNavy">Navy Button</RoyalButton>
                      <span className="text-sm opacity-70">variant="royalNavy"</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <RoyalButton variant="royalPurple">Purple Button</RoyalButton>
                      <span className="text-sm opacity-70">variant="royalPurple"</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <RoyalButton variant="royal">Royal Button</RoyalButton>
                      <span className="text-sm opacity-70">variant="royal"</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <RoyalButton variant="glass">Glass Button</RoyalButton>
                      <span className="text-sm opacity-70">variant="glass"</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <RoyalButton variant="goldOutline">Gold Outline</RoyalButton>
                      <span className="text-sm opacity-70">variant="goldOutline"</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <RoyalButton variant="crimsonOutline">Crimson Outline</RoyalButton>
                      <span className="text-sm opacity-70">variant="crimsonOutline"</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <RoyalButton variant="navyOutline">Navy Outline</RoyalButton>
                      <span className="text-sm opacity-70">variant="navyOutline"</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Button with Effects</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex flex-col items-center gap-2">
                      <RoyalButton variant="royalGold" shimmer={true}>With Shimmer</RoyalButton>
                      <span className="text-sm opacity-70">shimmer={"{true}"}</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <RoyalButton variant="royalGold" glow={true}>With Glow</RoyalButton>
                      <span className="text-sm opacity-70">glow={"{true}"}</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <RoyalButton 
                        variant="royalGold" 
                        shimmer={true} 
                        glow={true}
                        icon={<Gem size={16} />}
                      >
                        With Icon
                      </RoyalButton>
                      <span className="text-sm opacity-70">with icon prop</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Button Sizes</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex flex-col items-center gap-2">
                      <Button size="sm">Small</Button>
                      <span className="text-sm opacity-70">size="sm"</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <Button>Default</Button>
                      <span className="text-sm opacity-70">default size</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <Button size="lg">Large</Button>
                      <span className="text-sm opacity-70">size="lg"</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Icons</CardTitle>
              <CardDescription>
                Custom medieval icons and decorations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-4">Medieval Icons</h3>
                  <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                    {iconExamples.map((icon) => (
                      <div key={icon} className="flex flex-col items-center p-3 border border-white/10 rounded-lg">
                        <MedievalIcon name={icon} size="md" color="gold" />
                        <span className="text-sm mt-2">{icon}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Icon Colors</h3>
                  <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                    <div className="flex flex-col items-center p-3 border border-white/10 rounded-lg">
                      <MedievalIcon name="crown" color="gold" />
                      <span className="text-sm mt-2">gold</span>
                    </div>
                    <div className="flex flex-col items-center p-3 border border-white/10 rounded-lg">
                      <MedievalIcon name="crown" color="silver" />
                      <span className="text-sm mt-2">silver</span>
                    </div>
                    <div className="flex flex-col items-center p-3 border border-white/10 rounded-lg">
                      <MedievalIcon name="crown" color="copper" />
                      <span className="text-sm mt-2">copper</span>
                    </div>
                    <div className="flex flex-col items-center p-3 border border-white/10 rounded-lg">
                      <MedievalIcon name="crown" color="crimson" />
                      <span className="text-sm mt-2">crimson</span>
                    </div>
                    <div className="flex flex-col items-center p-3 border border-white/10 rounded-lg">
                      <MedievalIcon name="crown" color="navy" />
                      <span className="text-sm mt-2">navy</span>
                    </div>
                    <div className="flex flex-col items-center p-3 border border-white/10 rounded-lg">
                      <MedievalIcon name="crown" color="purple" />
                      <span className="text-sm mt-2">purple</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Icon Sizes</h3>
                  <div className="flex flex-wrap justify-center gap-6">
                    <div className="flex flex-col items-center">
                      <MedievalIcon name="crown" size="xs" />
                      <span className="text-sm mt-2">xs</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <MedievalIcon name="crown" size="sm" />
                      <span className="text-sm mt-2">sm</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <MedievalIcon name="crown" size="md" />
                      <span className="text-sm mt-2">md</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <MedievalIcon name="crown" size="lg" />
                      <span className="text-sm mt-2">lg</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <MedievalIcon name="crown" size="xl" />
                      <span className="text-sm mt-2">xl</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <MedievalIcon name="crown" size="2xl" />
                      <span className="text-sm mt-2">2xl</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Decorative Elements</CardTitle>
              <CardDescription>
                Frames, textures, and decorative components
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Parchment Texture</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <ParchmentTexture className="p-6">
                        <p className="text-black">Standard Parchment</p>
                      </ParchmentTexture>
                      <p className="text-sm opacity-70 mt-2">{'<ParchmentTexture>'}</p>
                    </div>
                    <div>
                      <ParchmentTexture aged={true} seal={true} className="p-6">
                        <p className="text-black">Aged Parchment with Seal</p>
                      </ParchmentTexture>
                      <p className="text-sm opacity-70 mt-2">{'<ParchmentTexture aged={true} seal={true}>'}</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Medieval Frame</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <MedievalFrame className="p-6">
                        <p>Royal Frame</p>
                      </MedievalFrame>
                      <p className="text-sm opacity-70 mt-2">{'<MedievalFrame>'}</p>
                    </div>
                    <div>
                      <MedievalFrame variant="ornate" seal={true} className="p-6">
                        <p>Ornate Frame with Seal</p>
                      </MedievalFrame>
                      <p className="text-sm opacity-70 mt-2">{'<MedievalFrame variant="ornate" seal={true}>'}</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Glass Morphism</h3>
                  <div className="p-6 glass-morphism">
                    <p>Glass Morphism Effect</p>
                  </div>
                  <p className="text-sm opacity-70 mt-2">class="glass-morphism"</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Tier Badges</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex flex-col items-center gap-2">
                      <RegalBadge tier="crab" />
                      <span className="text-sm opacity-70">tier="crab"</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <RegalBadge tier="octopus" />
                      <span className="text-sm opacity-70">tier="octopus"</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <RegalBadge tier="fish" />
                      <span className="text-sm opacity-70">tier="fish"</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <RegalBadge tier="dolphin" />
                      <span className="text-sm opacity-70">tier="dolphin"</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <RegalBadge tier="shark" />
                      <span className="text-sm opacity-70">tier="shark"</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <RegalBadge tier="whale" />
                      <span className="text-sm opacity-70">tier="whale"</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <RegalBadge tier="pro" />
                      <span className="text-sm opacity-70">tier="pro"</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <RegalBadge tier="royal" />
                      <span className="text-sm opacity-70">tier="royal"</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Animations Section */}
        <TabsContent value="animations" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Animation Classes</CardTitle>
              <CardDescription>
                Animation effects available in the application
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Basic Animations</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 border border-white/10 rounded-lg flex flex-col items-center">
                      <div className="w-12 h-12 bg-royal-gold/30 rounded-lg animate-pulse-slow"></div>
                      <p className="text-sm opacity-70 mt-4">animate-pulse-slow</p>
                    </div>
                    <div className="p-6 border border-white/10 rounded-lg flex flex-col items-center">
                      <div className="w-12 h-12 bg-royal-gold/30 rounded-lg animate-float"></div>
                      <p className="text-sm opacity-70 mt-4">animate-float</p>
                    </div>
                    <div className="p-6 border border-white/10 rounded-lg flex flex-col items-center">
                      <div className="w-12 h-12 bg-royal-gold/30 rounded-lg animate-crown-glow"></div>
                      <p className="text-sm opacity-70 mt-4">animate-crown-glow</p>
                    </div>
                    <div className="p-6 border border-white/10 rounded-lg flex flex-col items-center">
                      <div className="w-12 h-12 bg-royal-gold/30 rounded-lg animate-sparkle"></div>
                      <p className="text-sm opacity-70 mt-4">animate-sparkle</p>
                    </div>
                    <div className="p-6 border border-white/10 rounded-lg flex flex-col items-center">
                      <div className="w-12 h-12 bg-royal-gold/30 rounded-lg animate-spin-slow"></div>
                      <p className="text-sm opacity-70 mt-4">animate-spin-slow</p>
                    </div>
                    <div className="p-6 border border-white/10 rounded-lg flex flex-col items-center">
                      <div className="w-12 h-12 bg-royal-gold/30 rounded-lg border border-royal-gold/50 animate-border-pulse"></div>
                      <p className="text-sm opacity-70 mt-4">animate-border-pulse</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Effect Animations</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 border border-white/10 rounded-lg flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center royal-shine bg-royal-gold/20 border border-royal-gold/30">
                        <Crown className="text-royal-gold" />
                      </div>
                      <p className="text-sm opacity-70 mt-4">royal-shine</p>
                    </div>
                    <div className="p-6 border border-white/10 rounded-lg flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center animate-glow-pulse bg-royal-gold/20 border border-royal-gold/30">
                        <Crown className="text-royal-gold" />
                      </div>
                      <p className="text-sm opacity-70 mt-4">animate-glow-pulse</p>
                    </div>
                    <div className="p-6 border border-white/10 rounded-lg flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center royal-button bg-royal-gold/20 border border-royal-gold/30">
                        <Crown className="text-royal-gold" />
                      </div>
                      <p className="text-sm opacity-70 mt-4">royal-button</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Shame Effect Animations</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div 
                      className="p-6 border border-white/10 rounded-lg flex flex-col items-center cursor-pointer"
                      onClick={(e) => e.currentTarget.classList.add('shame-effect-tomatoes')}
                      onAnimationEnd={(e) => e.currentTarget.classList.remove('shame-effect-tomatoes')}
                    >
                      <div className="w-16 h-16 rounded-full flex items-center justify-center bg-royal-crimson/20 border border-royal-crimson/30">
                        <span className="text-2xl">🍅</span>
                      </div>
                      <p className="text-sm opacity-70 mt-4">shame-effect-tomatoes (click)</p>
                    </div>
                    <div 
                      className="p-6 border border-white/10 rounded-lg flex flex-col items-center cursor-pointer"
                      onClick={(e) => e.currentTarget.classList.add('shame-effect-eggs')}
                      onAnimationEnd={(e) => e.currentTarget.classList.remove('shame-effect-eggs')}
                    >
                      <div className="w-16 h-16 rounded-full flex items-center justify-center bg-amber-500/20 border border-amber-500/30">
                        <span className="text-2xl">🥚</span>
                      </div>
                      <p className="text-sm opacity-70 mt-4">shame-effect-eggs (click)</p>
                    </div>
                    <div 
                      className="p-6 border border-white/10 rounded-lg flex flex-col items-center cursor-pointer"
                      onClick={(e) => e.currentTarget.classList.add('shame-effect-stocks')}
                      onAnimationEnd={(e) => e.currentTarget.classList.remove('shame-effect-stocks')}
                    >
                      <div className="w-16 h-16 rounded-full flex items-center justify-center bg-amber-900/20 border border-amber-900/30">
                        <span className="text-2xl">🪵</span>
                      </div>
                      <p className="text-sm opacity-70 mt-4">shame-effect-stocks (click)</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Utilities Section */}
        <TabsContent value="utility" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Utility Classes</CardTitle>
              <CardDescription>
                Utility classes for common patterns
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Glass Effects</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6">
                      <div className="p-6 glass-morphism">
                        <p>glass-morphism</p>
                      </div>
                      <p className="text-sm opacity-70 mt-2">class="glass-morphism"</p>
                    </div>
                    <div className="p-6">
                      <div className="p-6 glass-card-royal">
                        <p>glass-card-royal</p>
                      </div>
                      <p className="text-sm opacity-70 mt-2">class="glass-card-royal"</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Border Effects</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 border border-royal-gold/50 rounded-lg">
                      <p>border-royal-gold/50</p>
                    </div>
                    <div className="p-6 border border-royal-crimson/50 rounded-lg">
                      <p>border-royal-crimson/50</p>
                    </div>
                    <div className="p-6 border border-royal-navy/50 rounded-lg">
                      <p>border-royal-navy/50</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Section Styling</h3>
                  <div className="royal-section p-6">
                    <p className="text-center">royal-section</p>
                  </div>
                  <p className="text-sm opacity-70 mt-2">class="royal-section"</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Hover Effects</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 border border-white/10 rounded-lg hover-scale flex items-center justify-center">
                      <p>hover-scale</p>
                    </div>
                    <div className="p-6 border border-white/10 rounded-lg hover-glow flex items-center justify-center">
                      <p>hover-glow</p>
                    </div>
                    <div className="p-6 border border-white/10 rounded-lg animate-scale flex items-center justify-center">
                      <p>animate-scale</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>CSS File Structure</CardTitle>
              <CardDescription>
                Overview of CSS organization in the application
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border border-white/10 rounded-lg">
                  <h3 className="text-lg font-bold mb-2">Theme Files</h3>
                  <ul className="space-y-2 pl-6 list-disc">
                    <li><code>src/styles/theme/index.css</code> - Main import file</li>
                    <li><code>src/styles/theme/royal-variables.css</code> - CSS variables</li>
                    <li><code>src/styles/theme/royal-gradients.css</code> - Gradient definitions</li>
                    <li><code>src/styles/theme/royal-team-colors.css</code> - Team color definitions</li>
                    <li><code>src/styles/theme/royal-effects.css</code> - Visual effects</li>
                    <li><code>src/styles/theme/royal-text.css</code> - Text styling</li>
                    <li><code>src/styles/theme/glass-effects.css</code> - Glassmorphism styles</li>
                    <li><code>src/styles/theme/rank-badges.css</code> - Rank badges styling</li>
                    <li><code>src/styles/theme/shame-effects.css</code> - Shame effect styles</li>
                    <li><code>src/styles/theme/scrollbar.css</code> - Scrollbar styling</li>
                  </ul>
                </div>
                
                <div className="p-4 border border-white/10 rounded-lg">
                  <h3 className="text-lg font-bold mb-2">Animation Files</h3>
                  <ul className="space-y-2 pl-6 list-disc">
                    <li><code>src/styles/animations/index.css</code> - Main animation import file</li>
                    <li><code>src/styles/animations/keyframes.css</code> - Animation keyframes</li>
                    <li><code>src/styles/animations/utility-classes.css</code> - Animation utility classes</li>
                    <li><code>src/styles/animations/floating-coins.css</code> - Coin animation effects</li>
                    <li><code>src/styles/animations/royal-elements.css</code> - Royal element animations</li>
                    <li><code>src/styles/consolidated-animations.css</code> - Consolidated animations</li>
                  </ul>
                </div>
                
                <div className="p-4 border border-white/10 rounded-lg">
                  <h3 className="text-lg font-bold mb-2">Utility Files</h3>
                  <ul className="space-y-2 pl-6 list-disc">
                    <li><code>src/styles/utilities/index.css</code> - Main utility import file</li>
                    <li><code>src/styles/utilities/transitions.css</code> - Transition utilities</li>
                    <li><code>src/styles/utilities/decorative-effects.css</code> - Decorative effect utilities</li>
                    <li><code>src/styles/utilities/hover-effects.css</code> - Hover effect utilities</li>
                    <li><code>src/styles/utilities/glass-effects.css</code> - Glassmorphism utilities</li>
                    <li><code>src/styles/utilities/royal-theme.css</code> - Royal theme utilities</li>
                    <li><code>src/styles/utilities/responsive.css</code> - Responsive utilities</li>
                    <li><code>src/styles/utilities/loading.css</code> - Loading effects</li>
                  </ul>
                </div>
                
                <div className="p-4 border border-white/10 rounded-lg">
                  <h3 className="text-lg font-bold mb-2">Consolidated Files</h3>
                  <ul className="space-y-2 pl-6 list-disc">
                    <li><code>src/styles/unified-theme.css</code> - Unified theme styles</li>
                    <li><code>src/styles/consolidated-animations.css</code> - Consolidated animation styles</li>
                    <li><code>src/styles/shame-effects.css</code> - Shame effect styles</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

const ColorSwatch: React.FC<{ name: string; variable: string; hex: string }> = ({
  name,
  variable,
  hex
}) => {
  return (
    <div className="flex items-center p-3 rounded-lg border border-white/10">
      <div
        className="w-12 h-12 rounded-lg mr-3"
        style={{ backgroundColor: hex }}
      ></div>
      <div>
        <p className="font-semibold">{name}</p>
        <div className="text-xs text-white/60 flex flex-col">
          <span>{variable}</span>
          <span>{hex}</span>
        </div>
      </div>
    </div>
  );
};

export default StyleGuide;
