
// Update the component interface to include user and limit props
export interface UserWalletProps {
  onFundWallet: (amount: number) => void | Promise<void>;
  user: any; // Update to the correct user type
  limit?: number;
}

// Update the TransactionHistoryList to accept a limit prop
// Just adding the limit prop to TransactionHistoryList
interface TransactionHistoryListProps {
  userId: string;
  limit?: number;
}
