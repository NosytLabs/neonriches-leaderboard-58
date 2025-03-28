
import { Connection, PublicKey, clusterApiUrl, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { SolanaTreasuryInfo, SolanaTransaction, OnChainLeaderboardEntry } from '@/types/solana';

// The treasury address - in a real app this would be your organization's wallet
const TREASURY_ADDRESS = 'GwPTauLnuAmLFMY8QsyHfWrFU7XeFCMqLJbJNGpKZ5eS';

// Initialize Solana connection (use mainnet-beta for production)
const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');

// Cache for treasury info
let treasuryCache: SolanaTreasuryInfo | null = null;
let lastFetchTime = 0;
const CACHE_DURATION = 60 * 1000; // 1 minute

/**
 * Get the current treasury information including balance
 */
export const getTreasuryInfo = async (): Promise<SolanaTreasuryInfo> => {
  const now = Date.now();
  
  // Return cached data if it's still fresh
  if (treasuryCache && (now - lastFetchTime < CACHE_DURATION)) {
    return treasuryCache;
  }
  
  try {
    const treasuryPublicKey = new PublicKey(TREASURY_ADDRESS);
    const balance = await connection.getBalance(treasuryPublicKey);
    
    // In a real implementation, you would track the total received separately
    // This is a simplified version that just uses the current balance
    const totalReceived = balance / LAMPORTS_PER_SOL;
    
    const treasuryInfo: SolanaTreasuryInfo = {
      address: TREASURY_ADDRESS,
      balance: balance / LAMPORTS_PER_SOL,
      totalReceived: totalReceived,
      transactionCount: 0, // Would require additional logic to track
      lastUpdated: new Date().toISOString()
    };
    
    treasuryCache = treasuryInfo;
    lastFetchTime = now;
    
    return treasuryInfo;
  } catch (error) {
    console.error('Error fetching treasury info:', error);
    
    // Return last cached data if we have it, or a default object
    return treasuryCache || {
      address: TREASURY_ADDRESS,
      balance: 0,
      totalReceived: 0,
      transactionCount: 0,
      lastUpdated: new Date().toISOString()
    };
  }
};

/**
 * Get recent transactions for the treasury
 */
export const getTreasuryTransactions = async (limit: number = 10): Promise<SolanaTransaction[]> => {
  try {
    const treasuryPublicKey = new PublicKey(TREASURY_ADDRESS);
    const signatures = await connection.getSignaturesForAddress(treasuryPublicKey, { limit });
    
    const transactions: SolanaTransaction[] = [];
    
    for (const signatureInfo of signatures) {
      if (!signatureInfo.signature) continue;
      
      const txData = await connection.getTransaction(signatureInfo.signature, {
        maxSupportedTransactionVersion: 0
      });
      
      if (!txData || !txData.meta) continue;
      
      // Use getAccountKeys() for VersionedMessage
      let senderAddress = TREASURY_ADDRESS;
      if (txData.transaction.message) {
        const accountKeys = txData.transaction.message.getAccountKeys 
          ? txData.transaction.message.getAccountKeys() 
          : { get: (index: number) => new PublicKey(TREASURY_ADDRESS) };
        
        senderAddress = accountKeys.get(0).toString();
      }
      
      const sender = senderAddress;
      const receiver = TREASURY_ADDRESS;
      const amount = txData.meta.postBalances[0] - txData.meta.preBalances[0];
      
      transactions.push({
        signature: signatureInfo.signature,
        blockTime: signatureInfo.blockTime || 0,
        timestamp: signatureInfo.blockTime 
          ? new Date(signatureInfo.blockTime * 1000).toISOString() 
          : new Date().toISOString(),
        slot: signatureInfo.slot,
        fee: txData.meta.fee / LAMPORTS_PER_SOL,
        amount: Math.abs(amount) / LAMPORTS_PER_SOL,
        sender,
        receiver,
        status: 'confirmed',
        type: 'pay',
        description: 'Treasury payment'
      });
    }
    
    return transactions;
  } catch (error) {
    console.error('Error fetching treasury transactions:', error);
    return [];
  }
};

/**
 * Get leaderboard data from chain
 * In a real implementation, this would query an indexer or use a custom program
 * This is a simplified mock implementation
 */
export const getOnChainLeaderboard = async (limit: number = 25): Promise<OnChainLeaderboardEntry[]> => {
  try {
    // In a real implementation, this would query an indexer or your own database
    // that tracks all transactions to your treasury
    const transactions = await getTreasuryTransactions(100);
    
    // Group transactions by sender address and sum the amounts
    const spenderMap: Record<string, { amount: number, lastTx: string, signature?: string }> = {};
    
    transactions.forEach(tx => {
      if (!spenderMap[tx.sender]) {
        spenderMap[tx.sender] = { amount: 0, lastTx: tx.timestamp, signature: tx.signature };
      }
      
      spenderMap[tx.sender].amount += tx.amount;
      
      // Update last transaction timestamp if this one is newer
      const currentLastTx = new Date(spenderMap[tx.sender].lastTx).getTime();
      const thisTx = new Date(tx.timestamp).getTime();
      if (thisTx > currentLastTx) {
        spenderMap[tx.sender].lastTx = tx.timestamp;
        spenderMap[tx.sender].signature = tx.signature;
      }
    });
    
    // Convert to leaderboard entries and sort by amount
    const leaderboard: OnChainLeaderboardEntry[] = Object.entries(spenderMap)
      .map(([publicKey, data]) => ({
        publicKey,
        username: `Wallet ${publicKey.slice(0, 4)}...${publicKey.slice(-4)}`,
        rank: 0, // Will be calculated after sorting
        amountSpent: data.amount,
        lastTransaction: data.lastTx,
        signature: data.signature,
        isVerified: false
      }))
      .sort((a, b) => b.amountSpent - a.amountSpent);
    
    // Assign ranks
    leaderboard.forEach((entry, index) => {
      entry.rank = index + 1;
    });
    
    return leaderboard.slice(0, limit);
  } catch (error) {
    console.error('Error fetching on-chain leaderboard:', error);
    return [];
  }
};

/**
 * Set up a websocket connection to listen for new treasury transactions
 * Returns a cleanup function to close the connection
 */
export const subscribeToTreasuryUpdates = (callback: (transaction: SolanaTransaction) => void): (() => void) => {
  try {
    const treasuryPublicKey = new PublicKey(TREASURY_ADDRESS);
    
    // Subscribe to account changes
    const subscriptionId = connection.onAccountChange(
      treasuryPublicKey,
      async (accountInfo) => {
        // When treasury balance changes, fetch recent transactions to find what changed
        const recentTx = await getTreasuryTransactions(1);
        if (recentTx.length > 0) {
          callback(recentTx[0]);
          
          // Also invalidate the cache so next getTreasuryInfo call will fetch fresh data
          lastFetchTime = 0;
        }
      }
    );
    
    // Return cleanup function
    return () => {
      connection.removeAccountChangeListener(subscriptionId);
    };
  } catch (error) {
    console.error('Error setting up treasury subscription:', error);
    return () => {};
  }
};

/**
 * Generate NFT certificate metadata for a user
 */
export const generateCertificateMetadata = (user: any) => {
  return {
    name: `${user.username}'s Certificate of Nobility`,
    description: `This NFT certifies that ${user.username} has attained the rank of #${user.rank} in the P2W.FUN Royal Court.`,
    image: `https://p2w.fun/api/certificate/${user.id}.png`,
    attributes: [
      {
        trait_type: "Rank",
        value: user.rank
      },
      {
        trait_type: "Team",
        value: user.team || "None"
      },
      {
        trait_type: "Join Date",
        value: new Date(user.joinDate || user.joined_at).toISOString().split('T')[0]
      },
      {
        trait_type: "Nobility Tier",
        value: user.tier
      },
      {
        trait_type: "Contribution",
        value: user.amountSpent || 0
      }
    ],
    properties: {
      rank: user.rank,
      joinDate: user.joinDate || user.joined_at,
      amountSpent: user.amountSpent || 0,
      username: user.username,
      team: user.team,
      tier: user.tier
    }
  };
};
