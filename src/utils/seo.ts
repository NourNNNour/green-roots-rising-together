
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
  return `${BASE_URL}${normalizedPath}`;
};

/**
 * Generate meta tags for SEO
 * @param title - Page title
 * @param description - Page description
 * @param path - Current page path
 * @param imageUrl - Optional image URL for social sharing
 * @returns Object containing meta information
 */
export const generateMetaTags = (
  title: string,
  description: string,
  path: string,
  imageUrl?: string
) => {
  const canonicalUrl = getCanonicalUrl(path);
  const image = imageUrl || `${BASE_URL}/default-social-image.jpg`; // Default image
  
  return {
    title,
    description,
    canonical: canonicalUrl,
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      image,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      image,
    }
  };
};
