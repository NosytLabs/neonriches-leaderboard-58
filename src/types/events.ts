
export type EventType = 'firesale' | 'public_shaming' | 'treasure_hunt' | 'royal_tournament' | 'golden_hour';

export interface Event {
  id: string;
  name: string;
  type: EventType;
  description: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
  discountPercentage?: number;
  imageUrl?: string;
}

export interface EventDetails {
  id: string;
  name: string;
  description: string;
  rules: string[];
  benefits: string[];
  schedule: string;
  faqs: Array<{question: string, answer: string}>;
  imageUrl?: string;
}
