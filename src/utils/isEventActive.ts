
/**
 * Check if an event is currently active based on start and end dates
 */
export const isEventActive = (startDate: string | Date, endDate: string | Date): boolean => {
  try {
    const now = new Date();
    const start = typeof startDate === 'string' ? new Date(startDate) : startDate;
    const end = typeof endDate === 'string' ? new Date(endDate) : endDate;
    
    return start <= now && now <= end;
  } catch (error) {
    console.error('Error checking if event is active:', error);
    return false;
  }
};

export default isEventActive;
