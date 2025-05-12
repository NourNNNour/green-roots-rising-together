
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import SEO from '@/components/SEO';

interface MainLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  image?: string;
  article?: boolean;
  noindex?: boolean;
  structuredData?: Record<string, any>;
}

const MainLayout = ({ 
  children, 
  title,
  description,
  image,
  article,
  noindex,
  structuredData
}: MainLayoutProps) => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const location = useLocation();
  
  // Scroll to top when location changes with smooth behavior
  useEffect(() => {
    window.scrollTo({ 
      top: 0,
      behavior: 'smooth'
    });
  }, [location]);
  
  // Set language attributes
  useEffect(() => {
    document.documentElement.setAttribute('lang', language);
    document.documentElement.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
  }, [language]);
  
  return (
    <div className={`${theme === 'dark' ? 'dark' : ''} transition-colors duration-300`}>
      <SEO
        title={title}
        description={description}
        image={image}
        article={article}
        noindex={noindex}
        structuredData={structuredData}
      />
      <div className={`flex min-h-screen flex-col ${language === 'ar' ? 'font-tajawal' : ''} dark:bg-gray-900 dark:text-white`}>
        <Navbar />
        <main className="flex-grow dark:bg-gray-900 dark:text-white">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
