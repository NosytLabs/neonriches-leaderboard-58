
import React from 'react';
import { Container } from '@/components/ui/container';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowUpRight, ArrowDownLeft, DollarSign, Wallet as WalletIcon } from 'lucide-react';

const Wallet = () => {
  const transactions = [
    { id: 1, type: 'deposit', amount: 50, date: '2025-03-25', status: 'completed' },
    { id: 2, type: 'withdraw', amount: 25, date: '2025-03-20', status: 'completed' },
    { id: 3, type: 'deposit', amount: 100, date: '2025-03-15', status: 'completed' },
    { id: 4, type: 'withdraw', amount: 30, date: '2025-03-10', status: 'pending' },
  ];

  return (
    <Container className="py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Royal Treasury</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Available Balance</CardDescription>
              <CardTitle className="text-2xl flex items-center">
                <DollarSign className="h-5 w-5 mr-1 text-royal-gold" /> 
                120.00
              </CardTitle>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total Spent</CardDescription>
              <CardTitle className="text-2xl flex items-center">
                <ArrowUpRight className="h-5 w-5 mr-1 text-red-500" /> 
                350.00
              </CardTitle>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total Deposited</CardDescription>
              <CardTitle className="text-2xl flex items-center">
                <ArrowDownLeft className="h-5 w-5 mr-1 text-green-500" /> 
                470.00
              </CardTitle>
            </CardHeader>
          </Card>
        </div>
        
        <Tabs defaultValue="deposit" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="deposit">Deposit</TabsTrigger>
            <TabsTrigger value="withdraw">Withdraw</TabsTrigger>
            <TabsTrigger value="history">Transaction History</TabsTrigger>
          </TabsList>
          
          <TabsContent value="deposit" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Add Funds</CardTitle>
                <CardDescription>Choose a payment method to add funds to your wallet</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button className="h-24 flex flex-col items-center justify-center">
                    <DollarSign className="h-8 w-8 mb-2" />
                    Credit Card
                  </Button>
                  <Button variant="outline" className="h-24 flex flex-col items-center justify-center">
                    <WalletIcon className="h-8 w-8 mb-2" />
                    Crypto Wallet
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="withdraw" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Withdraw Funds</CardTitle>
                <CardDescription>Request a withdrawal to your preferred method</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Note: Withdrawals may take 1-3 business days to process
                </p>
                <Button className="w-full">Request Withdrawal</Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Transaction History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transactions.map(transaction => (
                    <div key={transaction.id} className="flex items-center justify-between p-3 border-b">
                      <div className="flex items-center">
                        {transaction.type === 'deposit' ? (
                          <ArrowDownLeft className="h-5 w-5 mr-3 text-green-500" />
                        ) : (
                          <ArrowUpRight className="h-5 w-5 mr-3 text-red-500" />
                        )}
                        <div>
                          <p className="font-medium">{transaction.type === 'deposit' ? 'Deposit' : 'Withdrawal'}</p>
                          <p className="text-sm text-muted-foreground">{transaction.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">${transaction.amount.toFixed(2)}</p>
                        <p className={`text-sm ${
                          transaction.status === 'completed' ? 'text-green-500' : 'text-amber-500'
                        }`}>
                          {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Container>
  );
};

export default Wallet;
