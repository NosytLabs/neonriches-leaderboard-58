
import { useState, useEffect } from 'react';

export const useMockery = () => {
  const [mockeryEnabled, setMockeryEnabled] = useState<boolean>(() => {
    const savedSetting = localStorage.getItem('mockeryEnabled');
    return savedSetting ? JSON.parse(savedSetting) : true;
  });

  useEffect(() => {
    localStorage.setItem('mockeryEnabled', JSON.stringify(mockeryEnabled));
  }, [mockeryEnabled]);

  const toggleMockery = () => {
    setMockeryEnabled(prev => !prev);
  };

  return { mockeryEnabled, toggleMockery };
};
