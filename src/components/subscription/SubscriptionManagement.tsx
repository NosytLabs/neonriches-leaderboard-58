
import React, { useState } from 'react';
import { useAuth } from '@/contexts/auth';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  AlertTriangle,
  Calendar,
  CheckCircle,
  Clock,
  CreditCard,
  Edit,
  RefreshCcw,
  Star
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { formatDate } from '@/utils/formatters';
import { useToast } from '@/hooks/use-toast';
import { adaptSubscription } from '@/utils/userProfileAdapter';

interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  interval: string;
}

const SubscriptionManagement: React.FC = () => {
  const { user, updateUserProfile } = useAuth();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>('');
  const [isUpdating, setIsUpdating] = useState(false);
  
  // Mock plans
  const plans: SubscriptionPlan[] = [
    {
      id: 'basic',
      name: 'Basic',
      price: 9.99,
      interval: 'monthly'
    },
    {
      id: 'premium',
      name: 'Premium',
      price: 19.99,
      interval: 'monthly'
    },
    {
      id: 'royal',
      name: 'Royal',
      price: 49.99,
      interval: 'monthly'
    }
  ];
  
  if (!user || !user.subscription) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Subscription</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">You don't have an active subscription.</p>
          <Button>Subscribe Now</Button>
        </CardContent>
      </Card>
    );
  }
  
  const currentSubscription = user.subscription;
  
  const handleChangePlan = async () => {
    if (!selectedPlan) return;
    
    setIsUpdating(true);
    
    // Find selected plan
    const plan = plans.find(p => p.id === selectedPlan);
    
    try {
      // Use adaptSubscription to create a compatible subscription object
      const updatedSubscription = adaptSubscription({
        ...currentSubscription,
        planId: selectedPlan,
        tier: plan?.name.toLowerCase() || 'basic',
        nextBillingDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
        status: 'active',
      });
      
      await updateUserProfile({
        subscription: updatedSubscription
      });
      
      toast({
        title: "Subscription Updated",
        description: `Your subscription has been updated to ${plan?.name}`,
        variant: "success"
      });
      
      setOpen(false);
    } catch (error) {
      console.error('Error updating subscription:', error);
      toast({
        title: "Error",
        description: "Failed to update subscription. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsUpdating(false);
    }
  };
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-500';
      case 'cancelled': return 'text-red-500';
      case 'paused': return 'text-yellow-500';
      default: return 'text-gray-500';
    }
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-500" />
            Subscription
          </div>
          <Badge variant="outline" className={getStatusColor(currentSubscription.status || 'active')}>
            {currentSubscription.status || 'active'}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold">
                {currentSubscription.tier || 'Basic'} Plan
              </h3>
              <p className="text-sm text-muted-foreground">
                {currentSubscription.planId || 'basic-plan'}
              </p>
            </div>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                  <Edit className="h-4 w-4 mr-2" />
                  Change Plan
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Change Subscription Plan</DialogTitle>
                  <DialogDescription>
                    Select the plan that works best for you.
                  </DialogDescription>
                </DialogHeader>
                
                <RadioGroup value={selectedPlan} onValueChange={setSelectedPlan} className="my-4">
                  {plans.map(plan => (
                    <div key={plan.id} className="flex items-center space-x-2 border rounded-md p-3 my-2">
                      <RadioGroupItem value={plan.id} id={plan.id} />
                      <Label htmlFor={plan.id} className="flex-1 cursor-pointer">
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="font-medium">{plan.name}</div>
                            <div className="text-sm text-muted-foreground">
                              {plan.interval}
                            </div>
                          </div>
                          <div className="font-semibold">
                            ${plan.price.toFixed(2)}
                          </div>
                        </div>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
                
                <DialogFooter>
                  <Button variant="outline" onClick={() => setOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleChangePlan} disabled={!selectedPlan || isUpdating}>
                    {isUpdating ? (
                      <>
                        <RefreshCcw className="h-4 w-4 mr-2 animate-spin" />
                        Updating...
                      </>
                    ) : (
                      'Confirm Change'
                    )}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          
          <Separator />
          
          <div className="space-y-3">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
              <span className="text-sm">
                Started on {formatDate(currentSubscription.startDate || new Date().toISOString())}
              </span>
            </div>
            
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
              <span className="text-sm">
                Next billing on {formatDate(currentSubscription.nextBillingDate || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString())}
              </span>
            </div>
            
            <div className="flex items-center">
              <CreditCard className="h-4 w-4 mr-2 text-muted-foreground" />
              <span className="text-sm">
                Payment method: Card ending in **** 4242
              </span>
            </div>
          </div>
          
          <Separator />
          
          {currentSubscription.status === 'active' && (
            <div className="flex items-center text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
              Your subscription is active and will automatically renew.
            </div>
          )}
          
          {currentSubscription.status === 'cancelled' && (
            <div className="flex items-start text-sm text-muted-foreground">
              <AlertTriangle className="h-4 w-4 mr-2 text-yellow-500 flex-shrink-0 mt-0.5" />
              <div>
                Your subscription has been cancelled and will expire on {formatDate(currentSubscription.endDate || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString())}. 
                <Button variant="link" className="p-0 h-auto ml-1">
                  Reactivate
                </Button>
              </div>
            </div>
          )}
          
          {currentSubscription.status === 'active' && (
            <Button variant="outline" className="w-full">
              Cancel Subscription
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default SubscriptionManagement;
