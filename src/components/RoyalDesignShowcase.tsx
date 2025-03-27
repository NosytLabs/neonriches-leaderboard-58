
import React from 'react';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import TabsHeader from '@/components/royal-design/TabsHeader';
import IconsShowcase from '@/components/royal-design/IconsShowcase';
import DecorationsShowcase from '@/components/royal-design/DecorationsShowcase';
import ComponentsShowcase from '@/components/royal-design/ComponentsShowcase';
import ShowcaseFooter from '@/components/royal-design/ShowcaseFooter';

const RoyalDesignShowcase: React.FC = () => {
  return (
    <div className="py-8 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold royal-gradient mb-6 text-center">Royal Design System</h2>
      
      <Tabs defaultValue="icons" className="w-full mb-12">
        <TabsHeader />
        
        <TabsContent value="icons" className="space-y-6">
          <IconsShowcase />
        </TabsContent>
        
        <TabsContent value="decorations" className="space-y-6">
          <DecorationsShowcase />
        </TabsContent>
        
        <TabsContent value="components" className="space-y-6">
          <ComponentsShowcase />
        </TabsContent>
      </Tabs>
      
      <ShowcaseFooter />
    </div>
  );
};

export default RoyalDesignShowcase;
