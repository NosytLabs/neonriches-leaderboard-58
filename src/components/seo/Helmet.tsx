
import React from 'react';

// Define the props interface based on the commonly used props in react-helmet-async
interface HelmetProps {
  title?: string;
  meta?: Array<{
    name?: string;
    property?: string;
    content?: string;
    httpEquiv?: string;
  }>;
  link?: Array<{
    rel?: string;
    href?: string;
    sizes?: string;
    type?: string;
    crossOrigin?: string;
  }>;
  script?: Array<{
    src?: string;
    type?: string;
    innerHTML?: string;
  }>;
  children?: React.ReactNode;
}

// This is a fallback component that mimics react-helmet-async's Helmet
// It will update the document head only when running in a browser environment
const Helmet: React.FC<HelmetProps> = (props) => {
  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      // Update title if provided
      if (props.title) {
        document.title = props.title;
      }

      // Update meta tags if provided
      if (props.meta) {
        props.meta.forEach(metaData => {
          let meta = document.querySelector(`meta[${metaData.name ? `name="${metaData.name}"` : 
                                             metaData.property ? `property="${metaData.property}"` : 
                                             metaData.httpEquiv ? `http-equiv="${metaData.httpEquiv}"` : ''}]`);
          
          if (!meta) {
            meta = document.createElement('meta');
            if (metaData.name) meta.setAttribute('name', metaData.name);
            if (metaData.property) meta.setAttribute('property', metaData.property);
            if (metaData.httpEquiv) meta.setAttribute('http-equiv', metaData.httpEquiv);
            document.head.appendChild(meta);
          }
          
          if (metaData.content) meta.setAttribute('content', metaData.content);
        });
      }

      // Update link tags if provided
      if (props.link) {
        props.link.forEach(linkData => {
          let link = document.querySelector(`link[${linkData.rel ? `rel="${linkData.rel}"` : ''}][${linkData.href ? `href="${linkData.href}"` : ''}]`);
          
          if (!link) {
            link = document.createElement('link');
            if (linkData.rel) link.setAttribute('rel', linkData.rel);
            if (linkData.href) link.setAttribute('href', linkData.href);
            if (linkData.sizes) link.setAttribute('sizes', linkData.sizes);
            if (linkData.type) link.setAttribute('type', linkData.type);
            if (linkData.crossOrigin) link.setAttribute('crossorigin', linkData.crossOrigin);
            document.head.appendChild(link);
          }
        });
      }

      // Update script tags if provided
      if (props.script) {
        props.script.forEach(scriptData => {
          let script = document.querySelector(`script[${scriptData.src ? `src="${scriptData.src}"` : ''}][${scriptData.type ? `type="${scriptData.type}"` : ''}]`);
          
          if (!script) {
            script = document.createElement('script');
            if (scriptData.src) script.setAttribute('src', scriptData.src);
            if (scriptData.type) script.setAttribute('type', scriptData.type);
            if (scriptData.innerHTML) script.innerHTML = scriptData.innerHTML;
            document.head.appendChild(script);
          }
        });
      }
    }

    // Cleanup function to remove added elements when the component unmounts
    return () => {
      // Cleanup could be implemented here if needed
    };
  }, [props]);

  // The Helmet component doesn't render anything to the DOM
  return null;
};

export default Helmet;
