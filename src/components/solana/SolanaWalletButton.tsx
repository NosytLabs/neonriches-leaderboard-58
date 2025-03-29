
import React, { useState } from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useSolana } from '@/contexts/SolanaContext';
import { Button } from '@/components/ui/button';
import { Copy, Check, LinkIcon, LogOut, Wallet } from 'lucide-react';
import { formatCurrency } from '@/utils/formatters';

interface SolanaWalletButtonProps {
  variant?: 'default' | 'outline' | 'subtle' | 'custom';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showBalance?: boolean;
}

const SolanaWalletButton: React.FC<SolanaWalletButtonProps> = ({
  variant = 'default',
  size = 'md',
  className = '',
  showBalance = true
}) => {
  const [isCopied, setIsCopied] = useState(false);
  const { 
    isConnected, 
    connectWallet, 
    disconnectWallet, 
    isConnecting, 
    hasWallet, 
    walletPubkey, 
    walletBalance, 
    linkWalletToAccount 
  } = useSolana();

  const copyAddress = () => {
    if (walletPubkey) {
      navigator.clipboard.writeText(walletPubkey);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  // Not connected
  if (!isConnected) {
    return (
      <Button
        onClick={() => connectWallet()}
        disabled={isConnecting}
        variant={variant === 'custom' ? 'outline' : variant}
        size={size === 'lg' ? 'lg' : size === 'sm' ? 'sm' : 'default'}
        className={`${className} ${variant === 'custom' ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white' : ''}`}
      >
        <Wallet className="mr-2 h-4 w-4" />
        {isConnecting ? 'Connecting...' : 'Connect Wallet'}
      </Button>
    );
  }

  // If connected but not linked to account
  if (isConnected && !hasWallet) {
    return (
      <Button
        onClick={() => linkWalletToAccount()}
        variant="outline"
        size={size === 'lg' ? 'lg' : size === 'sm' ? 'sm' : 'default'}
        className={className}
      >
        <LinkIcon className="mr-2 h-4 w-4" />
        Link to Account
      </Button>
    );
  }

  // Connected
  return (
    <div className={`flex ${size === 'sm' ? 'flex-col' : 'flex-row'} items-center gap-2 ${className}`}>
      {showBalance && (
        <div className="text-sm font-medium px-3 py-1 bg-black/20 rounded-md border border-white/10">
          {formatCurrency(walletBalance, 'SOL')}
        </div>
      )}
      
      <div className="flex items-center gap-1">
        <Button
          variant="outline"
          size={size === 'lg' ? 'lg' : size === 'sm' ? 'sm' : 'default'}
          className="flex items-center gap-2 bg-black/20 hover:bg-black/30 border-white/10"
          onClick={copyAddress}
        >
          {walletPubkey ? `${walletPubkey.substring(0, 4)}...${walletPubkey.substring(walletPubkey.length - 4)}` : 'No Address'}
          {isCopied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={() => disconnectWallet()}
          className="text-white/70 hover:text-white hover:bg-red-800/20"
          title="Disconnect wallet"
        >
          <LogOut className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default SolanaWalletButton;
