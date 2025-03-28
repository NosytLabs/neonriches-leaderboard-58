
import { ShameAction } from '@/components/events/hooks/useShameEffect';
import React from 'react';

// Combined ExtendedMockeryAction type that includes all possible shame/mockery actions
export type ExtendedMockeryAction = ShameAction | 'public_shame' | 'royal_decree' | 'dishonor';

export const getMockeryActionPrice = (action: ExtendedMockeryAction): number => {
  switch (action) {
    case 'tomatoes':
      return 0.50;
    case 'eggs':
      return 1.00;
    case 'stocks':
      return 5.00;
    case 'public_shame':
      return 10.00;
    case 'royal_decree':
      return 25.00;
    case 'dishonor':
      return 50.00;
    default:
      return 1.00;
  }
};

export const getMockeryActionLabel = (action: ExtendedMockeryAction): string => {
  switch (action) {
    case 'tomatoes':
      return 'Throw Tomatoes';
    case 'eggs':
      return 'Throw Rotten Eggs';
    case 'stocks':
      return 'Place in Stocks';
    case 'public_shame':
      return 'Public Shaming';
    case 'royal_decree':
      return 'Royal Decree of Shame';
    case 'dishonor':
      return 'Strip of Honors';
    default:
      return 'Shame';
  }
};

export const getMockeryActionIcon = (action: ExtendedMockeryAction): string => {
  switch (action) {
    case "tomatoes":
      return "tomato";
    case "eggs":
      return "egg";
    case "stocks":
      return "stocks";
    case "public_shame":
      return "scroll";
    case "royal_decree":
      return "crown";
    case "dishonor":
      return "shield-off";
    default:
      return "alert-circle";
  }
};

export const getMockeryActionDescription = (action: ExtendedMockeryAction): string => {
  switch (action) {
    case 'tomatoes':
      return 'Throw tomatoes at this user. Their profile will display a tomato for 24 hours.';
    case 'eggs':
      return 'Throw rotten eggs at this user. Their profile will show egg stains for 48 hours.';
    case 'stocks':
      return 'Place this user in the stocks. They will be unable to shame others for 72 hours.';
    case 'public_shame':
      return 'Publicly shame this user. All their posts will have a shame badge for 48 hours.';
    case 'royal_decree':
      return 'Issue a royal decree of shame. The entire kingdom will be notified of their misdeeds.';
    case 'dishonor':
      return 'Strip this user of all honors and titles for one week.';
    default:
      return 'Shame this user in public.';
  }
};

export const getMockeryActionDuration = (action: ExtendedMockeryAction): number => {
  switch (action) {
    case 'tomatoes':
      return 24;
    case 'eggs':
      return 48;
    case 'stocks':
      return 72;
    case 'public_shame':
      return 48;
    case 'royal_decree':
      return 96;
    case 'dishonor':
      return 168; // 1 week in hours
    default:
      return 24;
  }
};
