
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Bitcoin, ArrowRight } from 'lucide-react';

interface CryptoFormProps {
  amount: number;
  isProcessing: boolean;
  walletConnected: boolean;
  onSubmit: () => void;
}

const CryptoForm = ({ amount, isProcessing, walletConnected, onSubmit }: CryptoFormProps) => {
  return (
    <>
      <Card className="glass-morphism border-white/10">
        <CardContent className="pt-6">
          {walletConnected ? (
            <div className="text-center space-y-4">
              <div className="w-32 h-32 mx-auto bg-white/5 rounded-lg flex items-center justify-center">
                <Bitcoin size={48} className="text-team-green" />
              </div>
              
              <div>
                <div className="text-white/70 mb-1">Amount to pay</div>
                <div className="text-2xl font-bold">${amount}</div>
                <div className="text-sm text-white/50">≈ 0.01 SOL</div>
              </div>
              
              <div className="text-white/70 text-sm">
                <p>Connected wallet:</p>
                <code className="glass-morphism rounded px-2 py-1 text-xs">
                  7xKX...dR5G
                </code>
              </div>
            </div>
          ) : (
            <div className="text-center space-y-4">
              <div className="w-32 h-32 mx-auto bg-white/5 rounded-lg flex items-center justify-center">
                <Bitcoin size={48} className="text-white/30" />
              </div>
              
              <p className="text-white/70">
                Connect your wallet to pay with cryptocurrency
              </p>
            </div>
          )}
        </CardContent>
      </Card>
      
      <div className="mt-6">
        <Button 
          className="w-full glass-morphism border-white/10 hover:bg-white/10 text-white"
          onClick={onSubmit}
          disabled={isProcessing}
        >
          {isProcessing ? (
            <div className="flex items-center">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Processing...
            </div>
          ) : walletConnected ? (
            <>
              <ArrowRight size={16} className="mr-2" />
              Confirm Payment
            </>
          ) : (
            <>
              <Bitcoin size={16} className="mr-2" />
              Connect Wallet
            </>
          )}
        </Button>
      </div>
    </>
  );
};

export default CryptoForm;
