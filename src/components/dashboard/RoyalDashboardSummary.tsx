
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUpRight, ArrowDownRight, Users, CreditCard } from 'lucide-react';
import { formatCurrency } from '@/utils/formatters';
import MedievalIcon from '@/components/ui/medieval-icon';

interface StatCardProps {
  title: string;
  value: string | number;
  description: string;
  change?: number;
  icon?: React.ReactNode;
  changeType?: 'positive' | 'negative' | 'neutral';
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  description,
  change,
  icon,
  changeType = 'neutral'
}) => {
  const getChangeColor = () => {
    if (changeType === 'positive') return 'text-emerald-500';
    if (changeType === 'negative') return 'text-red-500';
    return 'text-white/50';
  };

  const getChangeIcon = () => {
    if (changeType === 'positive') return <ArrowUpRight className="h-4 w-4" />;
    if (changeType === 'negative') return <ArrowDownRight className="h-4 w-4" />;
    return null;
  };

  return (
    <Card className="glass-morphism border-white/5">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-white/80">{title}</CardTitle>
        <div className="h-8 w-8 bg-black/20 rounded-md flex items-center justify-center">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-white/60 mt-1">{description}</p>
        {change !== undefined && (
          <div className={`${getChangeColor()} flex items-center mt-3 text-xs`}>
            {getChangeIcon()}
            <span className="ml-1">{Math.abs(change)}%</span>
            <span className="ml-1">from last week</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const RoyalDashboardSummary = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <StatCard
        title="Royal Treasury"
        value={formatCurrency(12345.67)}
        description="Total funds in your royal account"
        change={12}
        changeType="positive"
        icon={<MedievalIcon name="coin" size="sm" color="gold" />}
      />
      <StatCard
        title="Rank"
        value="#42"
        description="Your current position in the realm"
        change={3}
        changeType="positive"
        icon={<MedievalIcon name="crown" size="sm" color="royal" />}
      />
      <StatCard
        title="Royal Decrees"
        value="7"
        description="Active royal certificates"
        icon={<MedievalIcon name="scroll" size="sm" color="crimson" />}
      />
      <StatCard
        title="Followers"
        value="128"
        description="Loyal subjects following you"
        change={-2}
        changeType="negative"
        icon={<Users className="h-5 w-5 text-white/80" />}
      />
    </div>
  );
};

export default RoyalDashboardSummary;
