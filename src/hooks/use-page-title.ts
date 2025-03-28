
import { useEffect } from 'react';

/**
 * Hook to set the page title with proper SEO formatting
 * @param title The title to set for the page
 * @param siteName Optional site name to append to the title
 * @param description Optional meta description to set
 */
export const usePageTitle = (
  title: string, 
  siteName = 'SpendThrone',
  description?: string
) => {
  useEffect(() => {
    // If title contains siteName, don't append it
    const fullTitle = title.includes(siteName) 
      ? title 
      : `${title} | ${siteName}`;
    
    // Set the document title
    document.title = fullTitle;
    
    // Update meta description if provided
    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      } else {
        // Create a new meta description tag if it doesn't exist
        const newMetaDescription = document.createElement('meta');
        newMetaDescription.name = 'description';
        newMetaDescription.content = description;
        document.head.appendChild(newMetaDescription);
      }
    }
    
    // Restore the original title when the component unmounts
    return () => {
      document.title = siteName;
    };
  }, [title, siteName, description]);
};

export default usePageTitle;
