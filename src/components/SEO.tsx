
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { getCanonicalUrl, getLanguageMetadata } from '@/utils/seo';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  article?: boolean;
  noindex?: boolean;
  structuredData?: Record<string, any>;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  image,
  article = false,
  noindex = false,
  structuredData,
}) => {
  const { pathname } = useLocation();
  const { language } = useLanguage();
  
  // Default site metadata - these should be customized for your site
  const defaults = {
    title: language === 'ar' ? 'الأخضر - فريق الحفاظ على البيئة' : 'Alakhdar - Environmental Conservation Team',
    description: language === 'ar' 
      ? 'انضم إلى مهمتنا لاستعادة النظم البيئية المحلية من خلال مشاريع زراعة الأشجار والحفاظ على البيئة بقيادة المجتمع.'
      : 'Join our mission to restore local ecosystems through community-driven tree planting and environmental conservation projects.',
    image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80',
    siteUrl: 'https://alakhdar.org',
  };

  // Use default if specific value not provided
  const seo = {
    title: title || defaults.title,
    description: description || defaults.description,
    image: image || defaults.image,
    url: `${defaults.siteUrl}${pathname}`,
  };

  // Generate canonical URL
  const canonical = getCanonicalUrl(pathname);
  
  // Get language specific attributes
  const { htmlLang, htmlDir, locale } = getLanguageMetadata(language);

  // Default structured data if not provided
  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': article ? 'Article' : 'WebPage',
    headline: seo.title,
    description: seo.description,
    image: seo.image,
    url: canonical,
    publisher: {
      '@type': 'Organization',
      name: 'Alakhdar',
      logo: {
        '@type': 'ImageObject',
        url: `${defaults.siteUrl}/logo.png`,
      },
    },
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet htmlAttributes={{ lang: htmlLang, dir: htmlDir }}>
      {/* Basic Meta Tags */}
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <link rel="canonical" href={canonical} />
      
      {/* Control search engine indexing */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {!noindex && <meta name="robots" content="index, follow" />}

      {/* OpenGraph meta tags for social media sharing */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:locale" content={locale} />
      <meta property="og:site_name" content="Alakhdar" />

      {/* Twitter Card meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content="@alakhdar" />
      
      {/* Alternative language versions */}
      <link rel="alternate" href={seo.url} hrefLang="x-default" />
      <link rel="alternate" href={`${seo.url}?lang=en`} hrefLang="en" />
      <link rel="alternate" href={`${seo.url}?lang=ar`} hrefLang="ar" />
      
      {/* Schema.org structured data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
