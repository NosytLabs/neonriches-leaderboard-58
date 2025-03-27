
import { useMemo } from 'react';
import { eventStats, currentEvent, upcomingEvents } from '../data';

export const useEventStatistics = () => {
  // Count active events
  const totalEvents = useMemo(() => {
    // Current + any other active events
    return 1 + upcomingEvents.filter(event => 
      new Date(event.startDate) <= new Date() && 
      new Date(event.endDate) >= new Date()
    ).length;
  }, []);

  // Get prize pool from event stats, format with commas
  const prizePool = useMemo(() => {
    return new Intl.NumberFormat('en-US').format(2487);
  }, []);

  // Get participant count
  const participantsCount = useMemo(() => {
    return eventStats.participantsCount;
  }, []);

  // Get pokes used
  const pokesUsed = useMemo(() => {
    return 317; // This would normally come from an API or calculated value
  }, []);

  // Calculate top pokers (most active participants)
  const topPokers = useMemo(() => {
    return [
      { username: 'WealthWizard', count: 32 },
      { username: 'DiamondWallet', count: 27 },
      { username: 'GoldenPocket', count: 24 }
    ];
  }, []);

  // Calculate most poked users
  const mostPokedUsers = useMemo(() => {
    return [
      { username: 'SilverBaron', count: eventStats.mostPoked.pokeCount },
      { username: 'RegalSpender', count: 12 },
      { username: 'GoldenKnight', count: 8 }
    ];
  }, []);

  return {
    totalEvents,
    prizePool,
    participantsCount,
    pokesUsed,
    topPokers,
    mostPokedUsers,
    currentEvent,
    activeEvents: [currentEvent], // Would normally filter based on date
  };
};
