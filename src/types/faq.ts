
import { ReactNode } from 'react';

export interface FAQItem {
  id: string;
  question: string;
  answer: string | ReactNode;
  category?: string;
  icon?: ReactNode;
  tags?: string[];
}
