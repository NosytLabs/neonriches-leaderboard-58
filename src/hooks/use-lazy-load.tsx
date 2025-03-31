
import React, { useState, useEffect } from 'react';

/**
 * A hook to conditionally render components only when they become visible in the viewport.
 * This is useful for performance optimization by delaying loading of off-screen components.
 *
 * @param {Object} options - Hook configuration options
 * @param {boolean} options.enabled - Whether the lazy loading is enabled
 * @param {number} options.threshold - The percentage of the component that must be visible to trigger loading (0-1)
 * @param {number} options.rootMargin - Margin around the root (in pixels)
 * @returns {[React.RefObject<any>, boolean]} A tuple containing a ref to attach to the container and a boolean showing if the component is visible
 */
export const useLazyLoad = (
  options = { enabled: true, threshold: 0.1, rootMargin: '0px' }
) => {
  const [visible, setVisible] = useState(!options.enabled);
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!options.enabled) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold: options.threshold,
        rootMargin: options.rootMargin
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options.enabled, options.threshold, options.rootMargin]);

  return [ref, visible];
};

export default useLazyLoad;
