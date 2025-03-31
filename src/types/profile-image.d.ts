
export interface ProfileImage {
  url: string;
  id: string | number;
  isPrimary?: boolean;
  type: string;
  caption?: string;
  uploadedAt?: string | Date;
  order?: number;
}
