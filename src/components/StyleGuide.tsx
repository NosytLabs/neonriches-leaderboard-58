
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Typography } from '@/components/ui/typography';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import MedievalIcon from '@/components/ui/medieval-icon';
import { MedievalIconName } from '@/types/ui/icon-types';
import RoyalDivider from '@/components/ui/royal-divider';
import RoyalButton from '@/components/ui/royal-button';

const StyleGuide = () => {
  // These are only the icon names supported in our MedievalIconName type
  const iconNames: MedievalIconName[] = [
    'crown', 'shield', 'sword', 'castle', 'chalice', 
    'dragon', 'flag', 'scroll', 'throne', 'tower'
  ];

  return (
    <div className="container mx-auto py-10 space-y-10">
      <section>
        <Typography variant="h1" className="mb-6">SpendThrone Style Guide</Typography>
        <Typography variant="p" className="text-white/70">
          This document provides visual guidelines and examples for the various UI elements and components used in the SpendThrone application.
        </Typography>
      </section>

      <Tabs defaultValue="colors">
        <TabsList className="w-full justify-start bg-black/20 border border-white/10">
          <TabsTrigger value="colors">Colors</TabsTrigger>
          <TabsTrigger value="typography">Typography</TabsTrigger>
          <TabsTrigger value="components">Components</TabsTrigger>
          <TabsTrigger value="icons">Icons</TabsTrigger>
        </TabsList>
        
        <TabsContent value="colors">
          <Card>
            <CardHeader>
              <CardTitle>Color Palette</CardTitle>
              <CardDescription>
                The primary colors used throughout the SpendThrone application.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <div className="h-20 rounded-md bg-royal-gold"></div>
                  <p className="mt-2 text-sm">Royal Gold</p>
                  <p className="text-xs text-white/50">#C6A85C</p>
                </div>
                <div>
                  <div className="h-20 rounded-md bg-royal-crimson"></div>
                  <p className="mt-2 text-sm">Royal Crimson</p>
                  <p className="text-xs text-white/50">#AE2334</p>
                </div>
                <div>
                  <div className="h-20 rounded-md bg-royal-navy"></div>
                  <p className="mt-2 text-sm">Royal Navy</p>
                  <p className="text-xs text-white/50">#0E1E43</p>
                </div>
                <div>
                  <div className="h-20 rounded-md bg-purple-800"></div>
                  <p className="mt-2 text-sm">Royal Purple</p>
                  <p className="text-xs text-white/50">#5B21B6</p>
                </div>
              </div>
              
              <Separator className="bg-white/10" />
              
              <div>
                <h3 className="text-lg font-medium mb-4">Background & Surface Colors</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <div className="h-20 rounded-md bg-black/20 border border-white/5"></div>
                    <p className="mt-2 text-sm">Card Background</p>
                    <p className="text-xs text-white/50">rgba(0,0,0,0.2)</p>
                  </div>
                  <div>
                    <div className="h-20 rounded-md bg-gradient-to-br from-black/40 to-black/10 border border-white/5"></div>
                    <p className="mt-2 text-sm">Gradient Surface</p>
                    <p className="text-xs text-white/50">Gradient</p>
                  </div>
                  <div>
                    <div className="h-20 rounded-md glass-morphism"></div>
                    <p className="mt-2 text-sm">Glass Morphism</p>
                    <p className="text-xs text-white/50">Backdrop Blur</p>
                  </div>
                  <div>
                    <div className="h-20 rounded-md bg-black/40 border border-royal-gold/20"></div>
                    <p className="mt-2 text-sm">Gold Bordered</p>
                    <p className="text-xs text-white/50">Royal accent</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="typography">
          <Card>
            <CardHeader>
              <CardTitle>Typography</CardTitle>
              <CardDescription>
                Font styles and text elements used in the application.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Typography variant="h1">Heading 1</Typography>
                <Typography variant="h2" className="mt-4">Heading 2</Typography>
                <Typography variant="h3" className="mt-4">Heading 3</Typography>
                <Typography variant="h4" className="mt-4">Heading 4</Typography>
                <Typography variant="p" className="mt-4">
                  Regular paragraph text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Nullam euismod, nisl at tincidunt ultricies, nisl nunc ultricies nunc, vitae 
                  ultricies nisl nunc eget nisl.
                </Typography>
                <Typography variant="large" className="mt-4">
                  Lead paragraph with slightly larger text for important sections.
                </Typography>
                <Typography variant="small" className="mt-4">
                  Small text for captions and secondary information.
                </Typography>
              </div>
              
              <Separator className="bg-white/10" />
              
              <div>
                <h3 className="text-lg font-medium mb-4">Text Styles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="royal-text-gradient">Royal Gradient Text</p>
                    <p className="mt-2 royal-text-shimmer">Royal Shimmer Text</p>
                    <p className="mt-2 text-royal-gold">Gold Text</p>
                    <p className="mt-2 text-royal-crimson">Crimson Text</p>
                  </div>
                  <div>
                    <p className="font-medieval">Medieval Font Style</p>
                    <p className="mt-2 font-royal">Royal Font Style</p>
                    <p className="mt-2 uppercase tracking-widest">Tracked Uppercase</p>
                    <p className="mt-2 font-bold">Bold Important Text</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="components">
          <Card>
            <CardHeader>
              <CardTitle>Components</CardTitle>
              <CardDescription>
                Key UI components used throughout the application.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <h3 className="text-lg font-medium mb-4">Buttons</h3>
                <div className="flex flex-wrap gap-4">
                  <Button>Default Button</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </div>
                
                <div className="mt-4">
                  <h4 className="text-md font-medium mb-2">Royal Buttons</h4>
                  <div className="flex flex-wrap gap-4">
                    <RoyalButton variant="royal">Royal</RoyalButton>
                    <RoyalButton variant="gold">Royal Gold</RoyalButton>
                    <RoyalButton variant="default">Royal Outline</RoyalButton>
                    <RoyalButton variant="default">Royal Ghost</RoyalButton>
                  </div>
                </div>
              </div>
              
              <Separator className="bg-white/10" />
              
              <div>
                <h3 className="text-lg font-medium mb-4">Cards</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Default Card</CardTitle>
                      <CardDescription>Basic card component</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>Standard card content</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="glass-morphism">
                    <CardHeader>
                      <CardTitle>Glass Card</CardTitle>
                      <CardDescription>With glass morphism effect</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>Blurred background effect</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-royal-gold/30 glass-morphism royal-shine">
                    <CardHeader>
                      <CardTitle>Royal Card</CardTitle>
                      <CardDescription>With royal accents</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>Gold border and shimmer effect</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <Separator className="bg-white/10" />
              
              <div>
                <h3 className="text-lg font-medium mb-4">Dividers</h3>
                <div className="space-y-6">
                  <RoyalDivider />
                  <RoyalDivider variant="line" />
                  <RoyalDivider variant="crown" label="SECTION TITLE" />
                  <RoyalDivider variant="fancy" color="gold" />
                  <RoyalDivider variant="double" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="icons">
          <Card>
            <CardHeader>
              <CardTitle>Medieval Icons</CardTitle>
              <CardDescription>
                Themed icons available for use in the application.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {iconNames.map((iconName) => (
                  <div key={iconName} className="flex flex-col items-center">
                    <MedievalIcon name={iconName} size="lg" color="gold" />
                    <p className="mt-2 text-sm text-center">{iconName}</p>
                  </div>
                ))}
              </div>
              
              <Separator className="bg-white/10 my-6" />
              
              <h3 className="text-lg font-medium mb-4">Icon Sizes</h3>
              <div className="flex items-end gap-4">
                <div className="flex flex-col items-center">
                  <MedievalIcon name="crown" size="xs" />
                  <p className="mt-2 text-xs">XS</p>
                </div>
                <div className="flex flex-col items-center">
                  <MedievalIcon name="crown" size="sm" />
                  <p className="mt-2 text-xs">SM</p>
                </div>
                <div className="flex flex-col items-center">
                  <MedievalIcon name="crown" size="md" />
                  <p className="mt-2 text-xs">MD</p>
                </div>
                <div className="flex flex-col items-center">
                  <MedievalIcon name="crown" size="lg" />
                  <p className="mt-2 text-xs">LG</p>
                </div>
                <div className="flex flex-col items-center">
                  <MedievalIcon name="crown" size="xl" />
                  <p className="mt-2 text-xs">XL</p>
                </div>
                <div className="flex flex-col items-center">
                  <MedievalIcon name="crown" size="2xl" />
                  <p className="mt-2 text-xs">2XL</p>
                </div>
              </div>
              
              <Separator className="bg-white/10 my-6" />
              
              <h3 className="text-lg font-medium mb-4">Icon Colors</h3>
              <div className="flex gap-4">
                <MedievalIcon name="crown" size="lg" color="default" />
                <MedievalIcon name="crown" size="lg" color="gold" />
                <MedievalIcon name="crown" size="lg" color="silver" />
                <MedievalIcon name="crown" size="lg" color="crimson" />
                <MedievalIcon name="crown" size="lg" color="emerald" />
                <MedievalIcon name="crown" size="lg" color="royal" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StyleGuide;
