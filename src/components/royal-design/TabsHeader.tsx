
import React from 'react';
import { TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Crown, Shield, Scroll } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const TabsHeader: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <TabsList className="w-full glass-morphism border-white/10 grid grid-cols-3 mb-6">
      <TabsTrigger value="icons" className="data-[state=active]:bg-white/10">
        <Crown className="mr-2 h-4 w-4" /> 
        {!isMobile ? 'Icons' : ''}
      </TabsTrigger>
      <TabsTrigger value="decorations" className="data-[state=active]:bg-white/10">
        <Shield className="mr-2 h-4 w-4" /> 
        {!isMobile ? 'Decorations' : ''}
      </TabsTrigger>
      <TabsTrigger value="components" className="data-[state=active]:bg-white/10">
        <Scroll className="mr-2 h-4 w-4" /> 
        {!isMobile ? 'Components' : ''}
      </TabsTrigger>
    </TabsList>
  );
};

export default TabsHeader;
