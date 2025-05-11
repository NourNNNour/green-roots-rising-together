
/**
 * SEO utility functions for generating metadata and canonical URLs
 */

// Base URL of the website - should be updated to the production URL
const BASE_URL = 'https://alakhdar.org'; // Replace with your actual domain in production

/**
 * Generate a canonical URL for the current page
 * @param path - The path portion of the URL (e.g., "/blog/article-1")
 * @returns Full canonical URL
 */
export const getCanonicalUrl = (path: string): string => {
  // Ensure path starts with a slash and remove any trailing slash
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  // Remove trailing slash if present (except for root path)
  const cleanPath = normalizedPath !== '/' && normalizedPath.endsWith('/') 
    ? normalizedPath.slice(0, -1) 
    : normalizedPath;
  return `${BASE_URL}${cleanPath}`;
};

/**
 * Generate meta tags for SEO
 * @param title - Page title
 * @param description - Page description
 * @param path - Current page path
 * @param imageUrl - Optional image URL for social sharing
 * @param type - Content type (default: website)
 * @param locale - Content locale (default: en_US)
 * @param noindex - Whether to prevent indexing (default: false)
 * @returns Object containing meta information
 */
export const generateMetaTags = (
  title: string,
  description: string,
  path: string,
  imageUrl?: string,
  type: 'website' | 'article' | 'profile' = 'website',
  locale: string = 'en_US',
  noindex: boolean = false
) => {
  const canonicalUrl = getCanonicalUrl(path);
  const image = imageUrl || `${BASE_URL}/default-social-image.jpg`; // Default image
  
  return {
    title: title,
    description: description,
    canonical: canonicalUrl,
    openGraph: {
      title: title,
      description: description,
      url: canonicalUrl,
      image: image,
      type: type,
      locale: locale,
      siteName: 'Alakhdar',
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      image: image,
      creator: '@alakhdar', // Replace with actual Twitter handle
    },
    noindex: noindex,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': type === 'article' ? 'Article' : 'WebPage',
      headline: title,
      description: description,
      image: image,
      url: canonicalUrl,
      publisher: {
        '@type': 'Organization',
        name: 'Alakhdar',
        logo: {
          '@type': 'ImageObject',
          url: `${BASE_URL}/logo.png`,
        },
      },
    },
  };
};

/**
 * Get appropriate language metadata based on current language
 * @param language - Current language code (e.g., 'en', 'ar')
 * @returns Language metadata for SEO
 */
export const getLanguageMetadata = (language: string) => {
  return {
    htmlLang: language,
    htmlDir: language === 'ar' ? 'rtl' : 'ltr',
    locale: language === 'ar' ? 'ar_SA' : 'en_US',
  };
};
