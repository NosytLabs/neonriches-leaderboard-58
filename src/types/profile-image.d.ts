
export interface ProfileImage {
  url: string;
  id: string;
  isPrimary: boolean;
  caption?: string;
  uploadedAt?: string | Date;
  order?: number;
}
