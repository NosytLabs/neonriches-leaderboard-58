
import React from 'react';
import { Button } from '@/components/ui/button';
import { Wallet, LogOut, Loader2, ExternalLink } from 'lucide-react';
import { useSolana } from '@/contexts/SolanaContext';
import { formatAddress } from '@/utils/solanaUtils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/auth';

interface SolanaWalletButtonProps {
  variant?: 'default' | 'outline' | 'ghost' | 'link' | 'royal';
  fullWidth?: boolean;
}

const SolanaWalletButton: React.FC<SolanaWalletButtonProps> = ({ 
  variant = 'default',
  fullWidth = false
}) => {
  const { 
    connected, 
    connectWallet,
    disconnectWallet,
    isConnecting,
    hasWallet,
    walletPubkey,
    walletBalance,
    linkWalletToAccount
  } = useSolana();
  const { isAuthenticated, user } = useAuth();
  
  // If wallet is not installed
  if (!hasWallet) {
    return (
      <Button
        variant="outline"
        className={`flex items-center gap-2 ${fullWidth ? 'w-full' : ''}`}
        onClick={() => window.open('https://phantom.app/', '_blank')}
      >
        <Wallet className="h-4 w-4" />
        <span>Install Phantom</span>
        <ExternalLink className="h-3 w-3 ml-1" />
      </Button>
    );
  }
  
  // If connecting
  if (isConnecting) {
    return (
      <Button variant={variant} disabled className={fullWidth ? 'w-full' : ''}>
        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
        Connecting...
      </Button>
    );
  }
  
  // If not connected
  if (!connected) {
    return (
      <Button 
        variant={variant} 
        onClick={connectWallet}
        className={fullWidth ? 'w-full' : ''}
      >
        <Wallet className="h-4 w-4 mr-2" />
        Connect Wallet
      </Button>
    );
  }
  
  // If connected
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant={variant} 
          className={`gap-2 ${fullWidth ? 'w-full' : ''}`}
        >
          <Wallet className="h-4 w-4" />
          <span className="hidden sm:inline">{formatAddress(walletPubkey || '')}</span>
          <Badge variant="outline" className="ml-1 bg-white/10 text-xs font-normal">
            {walletBalance.toFixed(2)} SOL
          </Badge>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="glass-morphism border-white/10">
        <div className="px-2 py-1.5 text-sm font-medium">
          Connected Wallet
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex justify-between">
          <span>Address:</span>
          <span className="font-mono text-xs ml-2">{formatAddress(walletPubkey || '', 6)}</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex justify-between">
          <span>Balance:</span>
          <span className="font-mono">{walletBalance.toFixed(4)} SOL</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        {isAuthenticated && !user?.walletAddress && (
          <DropdownMenuItem onSelect={() => linkWalletToAccount()}>
            Link to Account
          </DropdownMenuItem>
        )}
        <DropdownMenuItem onSelect={() => window.open(`https://explorer.solana.com/address/${walletPubkey}`, '_blank')}>
          View on Explorer
          <ExternalLink className="h-3 w-3 ml-2" />
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem 
          onSelect={() => disconnectWallet()}
          className="text-destructive focus:text-destructive"
        >
          <LogOut className="h-4 w-4 mr-2" />
          Disconnect
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SolanaWalletButton;
