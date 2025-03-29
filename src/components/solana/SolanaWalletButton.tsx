
import React from 'react';
import { useSolana } from '@/contexts/SolanaContext';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { formatWalletAddress } from '@/utils/formatters';
import MoneyDisplay from '@/components/ui/money-display';

export function SolanaWalletButton() {
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
  
  if (!hasWallet) {
    return (
      <Button
        variant="outline"
        size="sm"
        className="h-8"
        onClick={() => window.open('https://phantom.app/', '_blank')}
      >
        <Icon name="ExternalLink" size="xs" className="mr-2" />
        Get Wallet
      </Button>
    );
  }
  
  if (!isConnected) {
    return (
      <Button
        variant="outline" 
        size="sm"
        className="h-8"
        onClick={() => connectWallet()}
        disabled={isConnecting}
      >
        {isConnecting ? (
          <>
            <Icon name="Loader2" size="xs" className="mr-2 animate-spin" />
            Connecting...
          </>
        ) : (
          <>
            <Icon name="Wallet" size="xs" className="mr-2" />
            Connect Wallet
          </>
        )}
      </Button>
    );
  }
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 flex items-center">
          <Icon name="Wallet" size="xs" className="mr-2 text-amber-400" />
          <span className="hidden md:inline mr-1">
            {formatWalletAddress(walletPubkey || '')}
          </span>
          <MoneyDisplay 
            amount={walletBalance} 
            currency="SOL" 
            size="xs" 
            showIcon={false} 
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>Solana Wallet</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="flex justify-between">
            <span>Address</span>
            <span className="text-xs font-mono">{formatWalletAddress(walletPubkey || '')}</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex justify-between">
            <span>Balance</span>
            <MoneyDisplay amount={walletBalance} currency="SOL" size="xs" />
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => linkWalletToAccount()}>
            <Icon name="Link" size="xs" className="mr-2" />
            Link to Account
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => window.open(`https://solscan.io/account/${walletPubkey}`, '_blank')}>
            <Icon name="ExternalLink" size="xs" className="mr-2" />
            View on Explorer
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => disconnectWallet()}>
          <Icon name="LogOut" size="xs" className="mr-2" />
          Disconnect
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
