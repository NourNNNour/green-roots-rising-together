
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { getCanonicalUrl } from '@/utils/seo';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  article?: boolean;
  noindex?: boolean;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  image,
  article = false,
  noindex = false,
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
  
  // Add language specific attributes
  const htmlAttributes = {
    lang: language,
    dir: language === 'ar' ? 'rtl' : 'ltr',
  };

  return (
    <Helmet htmlAttributes={htmlAttributes}>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <link rel="canonical" href={canonical} />

      {/* OpenGraph meta tags for social media sharing */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      {article && <meta property="og:type" content="article" />}
      {!article && <meta property="og:type" content="website" />}

      {/* Twitter Card meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      {/* Control search engine indexing */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Alternative language versions */}
      <link rel="alternate" href={seo.url} hrefLang="x-default" />
      <link rel="alternate" href={`${seo.url}?lang=en`} hrefLang="en" />
      <link rel="alternate" href={`${seo.url}?lang=ar`} hrefLang="ar" />
    </Helmet>
  );
};

export default SEO;
