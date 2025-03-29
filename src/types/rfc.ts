
export type RFCStatus = 'proposed' | 'under_review' | 'approved' | 'rejected' | 'in_progress' | 'completed';
export type RFCCategory = 'feature' | 'enhancement' | 'fix' | 'documentation';

export interface RFCItem {
  id: string;
  title: string;
  status: RFCStatus;
  description: string;
  proposedBy: string;
  votes: number;
  category: RFCCategory;
  rejectionReason?: string;
}
