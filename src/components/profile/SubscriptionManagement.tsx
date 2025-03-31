import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShieldCheck, CreditCard, CalendarCheck, AlertTriangle, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import { formatDate, formatTimeAgo } from '@/utils/formatters/dateFormatters';
import { Subscription } from '@/types/subscription';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { AlertDestructive } from '@/components/ui/alert-destructive';

interface SubscriptionManagementProps {
  subscription?: Subscription;
  onUpgrade?: () => void;
  onCancel?: () => Promise<boolean>;
  onRenew?: () => Promise<boolean>;
}

const SubscriptionManagement: React.FC<SubscriptionManagementProps> = ({
  subscription,
  onUpgrade,
  onCancel,
  onRenew
}) => {
  const { user, updateUserProfile } = useAuth();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [showCancelConfirm, setShowCancelConfirm] = useState(false);
  
  if (!user) return null;
  
  const isActive = subscription?.status === 'active';
  const isCancelled = subscription?.status === 'cancelled';
  const isExpired = subscription?.status === 'expired';
  const isPaused = subscription?.status === 'paused';
  
  const handleCancelSubscription = async () => {
    if (!onCancel) return;
    
    setIsLoading(true);
    try {
      const success = await onCancel();
      if (success) {
        toast({
          title: "Subscription Cancelled",
          description: "Your subscription has been cancelled but will remain active until the end of the billing period.",
        });
        setShowCancelConfirm(false);
      } else {
        toast({
          title: "Error",
          description: "Failed to cancel subscription. Please try again or contact support.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error("Error cancelling subscription:", error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleRenewSubscription = async () => {
    if (!onRenew) return;
    
    setIsLoading(true);
    try {
      const success = await onRenew();
      if (success) {
        toast({
          title: "Subscription Renewed",
          description: "Your subscription has been successfully renewed.",
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to renew subscription. Please try again or contact support.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error("Error renewing subscription:", error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="space-y-4">
      {subscription ? (
        <Card className="glass-morphism border-white/10">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl">Your Subscription</CardTitle>
                <CardDescription>
                  Manage your current subscription plan
                </CardDescription>
              </div>
              <Badge 
                className={`
                  ${isActive ? 'bg-green-500/20 text-green-400 border-green-500/30' : ''}
                  ${isCancelled ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' : ''}
                  ${isExpired ? 'bg-red-500/20 text-red-400 border-red-500/30' : ''}
                  ${isPaused ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' : ''}
                `}
              >
                {isActive && 'Active'}
                {isCancelled && 'Cancelled'}
                {isExpired && 'Expired'}
                {isPaused && 'Paused'}
              </Badge>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 bg-black/20 rounded-lg">
                <div className="flex items-center text-sm text-white/70 mb-1">
                  <ShieldCheck className="h-4 w-4 mr-2 text-royal-gold" />
                  <span>Plan</span>
                </div>
                <div className="text-lg font-medium">{subscription.planName}</div>
              </div>
              
              <div className="p-3 bg-black/20 rounded-lg">
                <div className="flex items-center text-sm text-white/70 mb-1">
                  <CreditCard className="h-4 w-4 mr-2 text-royal-gold" />
                  <span>Price</span>
                </div>
                <div className="text-lg font-medium">
                  ${subscription.price.toFixed(2)}/{subscription.interval}
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 bg-black/20 rounded-lg">
                <div className="flex items-center text-sm text-white/70 mb-1">
                  <CalendarCheck className="h-4 w-4 mr-2 text-royal-gold" />
                  <span>Started</span>
                </div>
                <div className="text-sm">
                  {formatDate(subscription.startDate)}
                  <span className="text-white/50 ml-2">
                    ({formatTimeAgo(subscription.startDate)})
                  </span>
                </div>
              </div>
              
              <div className="p-3 bg-black/20 rounded-lg">
                <div className="flex items-center text-sm text-white/70 mb-1">
                  <Clock className="h-4 w-4 mr-2 text-royal-gold" />
                  <span>{isCancelled ? 'Expires' : 'Next Billing'}</span>
                </div>
                <div className="text-sm">
                  {formatDate(subscription.nextBillingDate)}
                  <span className="text-white/50 ml-2">
                    ({formatTimeAgo(subscription.nextBillingDate)})
                  </span>
                </div>
              </div>
            </div>
            
            {isCancelled && (
              <div className="p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-yellow-400 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-yellow-400">Subscription Cancelled</p>
                    <p className="text-xs text-white/70 mt-1">
                      Your subscription will remain active until {formatDate(subscription.nextBillingDate)}, 
                      after which you'll lose access to premium features.
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            {isExpired && (
              <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-red-400 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-red-400">Subscription Expired</p>
                    <p className="text-xs text-white/70 mt-1">
                      Your subscription has expired. Renew now to regain access to premium features.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
          
          <CardFooter className="flex flex-col sm:flex-row gap-3">
            {isActive && !showCancelConfirm && (
              <>
                <Button 
                  variant="outline" 
                  className="w-full sm:w-auto"
                  onClick={() => setShowCancelConfirm(true)}
                >
                  Cancel Subscription
                </Button>
                
                <Button 
                  className="w-full sm:w-auto bg-royal-gold hover:bg-royal-gold/90 text-black"
                  onClick={onUpgrade}
                >
                  Upgrade Plan
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </>
            )}
            
            {showCancelConfirm && (
              <>
                <div className="w-full p-3 bg-red-500/10 border border-red-500/20 rounded-lg mb-3">
                  <p className="text-sm text-white/90">Are you sure you want to cancel your subscription?</p>
                  <p className="text-xs text-white/70 mt-1">
                    You'll still have access until the end of your current billing period.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 w-full">
                  <Button 
                    variant="outline" 
                    className="w-full sm:w-auto"
                    onClick={() => setShowCancelConfirm(false)}
                    disabled={isLoading}
                  >
                    Keep Subscription
                  </Button>
                  
                  <Button 
                    variant="destructive" 
                    className="w-full sm:w-auto"
                    onClick={handleCancelSubscription}
                    disabled={isLoading}
                  >
                    {isLoading ? 'Cancelling...' : 'Confirm Cancellation'}
                  </Button>
                </div>
              </>
            )}
            
            {(isCancelled || isExpired) && (
              <Button 
                className="w-full sm:w-auto bg-royal-gold hover:bg-royal-gold/90 text-black"
                onClick={handleRenewSubscription}
                disabled={isLoading}
              >
                <CheckCircle className="mr-2 h-4 w-4" />
                {isLoading ? 'Processing...' : 'Renew Subscription'}
              </Button>
            )}
          </CardFooter>
        </Card>
      ) : (
        <Card className="glass-morphism border-white/10">
          <CardHeader>
            <CardTitle className="text-xl">No Active Subscription</CardTitle>
            <CardDescription>
              Upgrade to a premium plan to unlock exclusive features
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <div className="p-4 bg-black/20 rounded-lg text-center">
              <p className="text-white/70 mb-4">
                You currently don't have an active subscription. Upgrade to access premium features.
              </p>
              
              <Button 
                className="bg-royal-gold hover:bg-royal-gold/90 text-black"
                onClick={onUpgrade}
              >
                <ShieldCheck className="mr-2 h-4 w-4" />
                View Premium Plans
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SubscriptionManagement;
