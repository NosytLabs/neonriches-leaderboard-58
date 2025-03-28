
/**
 * Generate schema.org structured data for better SEO
 */

/**
 * Create a WebSite schema
 */
export const generateWebsiteSchema = (url: string = 'https://spendthrone.com') => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'url': url,
    'name': 'SpendThrone',
    'description': 'A satirical pay-to-win social experiment where your rank is determined solely by how much you spend.',
    'potentialAction': {
      '@type': 'SearchAction',
      'target': `${url}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };
};

/**
 * Create a BreadcrumbList schema
 */
export const generateBreadcrumbSchema = (items: Array<{name: string, url: string}>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': item.url
    }))
  };
};

/**
 * Create a Person schema for user profiles
 */
export const generatePersonSchema = (
  name: string, 
  url: string,
  image?: string,
  description?: string
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    'name': name,
    'url': url,
    ...(image && { 'image': image }),
    ...(description && { 'description': description })
  };
};

/**
 * Create a FAQPage schema
 */
export const generateFAQSchema = (
  questions: Array<{question: string, answer: string}>
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': questions.map(item => ({
      '@type': 'Question',
      'name': item.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': item.answer
      }
    }))
  };
};

/**
 * Create Organization schema
 */
export const generateOrganizationSchema = (
  url: string = 'https://spendthrone.com',
  logo: string = '/logo.svg'
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'url': url,
    'name': 'SpendThrone',
    'logo': `${url}${logo}`,
    'description': 'A satirical pay-to-win social experiment where your rank is determined solely by how much you spend.',
    'sameAs': [
      'https://twitter.com/spendthrone',
      'https://facebook.com/spendthrone',
      'https://instagram.com/spendthrone'
    ]
  };
};

/**
 * Generate JSON-LD script element content
 */
export const generateJsonLd = (data: object): string => {
  return JSON.stringify(data, null, 2);
};

export default {
  generateWebsiteSchema,
  generateBreadcrumbSchema,
  generatePersonSchema,
  generateFAQSchema,
  generateOrganizationSchema,
  generateJsonLd
};
