
import { ReactNode } from 'react';

export interface CodeLanguage {
  id: string;
  name: string;
  subtitle: string;
  icon: ReactNode;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Hard';
  royalDecree: string;
  codeExample: string;
  usedFor: string[];
  learningResources: number;
  tags: string[];
}

export interface CodeChallenge {
  id: string;
  title: string;
  description: string;
  language: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  points: number;
  timeEstimate: string;
  code: string;
  tests: string;
}
