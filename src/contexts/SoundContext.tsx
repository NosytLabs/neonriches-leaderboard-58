
import React, { createContext } from 'react';
import { SoundHook } from '@/types/sound-types';

// Create a context with a default undefined value
export const SoundContext = createContext<SoundHook | undefined>(undefined);

// Export the context
export default SoundContext;
