
import { useEffect } from 'react';

/**
 * Hook to set the page title
 * @param title The title to set for the page
 * @param siteName Optional site name to append to the title
 */
export const usePageTitle = (title: string, siteName = 'SpendThrone') => {
  useEffect(() => {
    // If title contains siteName, don't append it
    const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
    document.title = fullTitle;
    
    // Restore the original title when the component unmounts
    return () => {
      document.title = siteName;
    };
  }, [title, siteName]);
};

export default usePageTitle;
