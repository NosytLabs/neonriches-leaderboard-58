
import { useState, useCallback } from 'react';

export const useTabState = (defaultTab: string) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  
  const changeTab = useCallback((tab: string) => {
    setActiveTab(tab);
  }, []);
  
  return {
    activeTab,
    changeTab
  };
};
