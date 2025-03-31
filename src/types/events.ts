
export interface EventDetails {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  bannerImage?: string;
  eventType: string;
  isActive?: boolean;
  isFeatured?: boolean;
  rewards?: string[];
  totalParticipants?: number;
  eventContent?: string;
  rules?: string[];
  find?: (id: string) => EventDetails | undefined;
}
